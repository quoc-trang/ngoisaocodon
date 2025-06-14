<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <main class="max-w-[600px] mx-auto pt-20 pb-8 px-4">
      <!-- User Profile Section -->
      <div class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm mb-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span class="text-primary font-semibold text-lg">
                {{ isAuthenticated ? user?.email?.[0].toUpperCase() : '?' }}
              </span>
            </div>
            <div>
              <h2 class="font-semibold text-gray-900 dark:text-white">
                {{ isAuthenticated ? user?.email : 'Guest' }}
              </h2>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ isAuthenticated ? 'Logged in' : 'Not logged in' }}
              </p>
            </div>
          </div>
          <div>
            <button
              v-if="!isAuthenticated"
              class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              @click="showLoginModal = true"
            >
              Login
            </button>
            <button
              v-else
              class="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
              @click="logout"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <h1 class="font-bold text-2xl mb-4 text-gray-800 dark:text-white">
        Blog
      </h1>

      <!-- Blog Posts Feed -->
      <div class="space-y-4">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm"
        >
          <div class="flex items-start space-x-3">
            <!-- Avatar placeholder -->
            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span class="text-primary font-semibold">{{ post.user?.email?.[0].toUpperCase() }}</span>
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center space-x-2">
                <span class="font-semibold text-gray-900 dark:text-white">{{ post.user?.email }}</span>
                <span class="text-gray-500 dark:text-gray-400 text-sm">·</span>
                <span class="text-gray-500 dark:text-gray-400 text-sm">{{ formatDate(post.createdAt) }}</span>
              </div>

              <h2 class="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                {{ post.title }}
              </h2>

              <p class="mt-2 text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                {{ post.content }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div
        v-if="hasMorePages"
        class="mt-6 text-center"
      >
        <button
          class="text-primary hover:text-primary/80 transition-colors duration-300"
          @click="loadMore"
        >
          Load more
        </button>
      </div>

      <!-- Login Modal -->
      <div
        v-if="showLoginModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        @click="showLoginModal = false"
      >
        <div
          class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full mx-4"
          @click.stop
        >
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Login
          </h2>
          <form
            class="space-y-4"
            @submit.prevent="handleLogin"
          >
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                v-model="loginForm.email"
                type="email"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
            </div>
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                v-model="loginForm.password"
                type="password"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
            </div>
            <div class="flex justify-end space-x-3">
              <button
                type="button"
                class="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                @click="showLoginModal = false"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'

interface Post {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
  user: {
    email: string
  }
}

interface PostsResponse {
  posts: Post[]
  total: number
  totalPages: number
}

const { user, isAuthenticated, login, logout, checkAuth } = useAuth()
const showLoginModal = ref(false)
const loginForm = ref({
  email: '',
  password: '',
})

const posts = ref<Post[]>([])
const currentPage = ref(1)
const hasMorePages = ref(true)

const handleLogin = async () => {
  const success = await login(loginForm.value.email, loginForm.value.password)
  if (success) {
    showLoginModal.value = false
    loginForm.value = { email: '', password: '' }
  }
}

const fetchPosts = async (page: number) => {
  try {
    const response = await fetch(`http://localhost:3000/api/posts?page=${page}&limit=10`)
    const data: PostsResponse = await response.json()

    if (page === 1) {
      posts.value = data.posts
    }
    else {
      posts.value = [...posts.value, ...data.posts]
    }

    hasMorePages.value = page < data.totalPages
  }
  catch (error) {
    console.error('Error fetching posts:', error)
  }
}

const loadMore = () => {
  currentPage.value++
  fetchPosts(currentPage.value)
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) {
    return 'Today'
  }
  else if (diffInDays === 1) {
    return 'Yesterday'
  }
  else if (diffInDays < 7) {
    return `${diffInDays}d`
  }
  else {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }
}

// Check authentication status on mount
onMounted(() => {
  checkAuth()
  fetchPosts(currentPage.value)
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
