<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center pt-16 pb-8 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-4xl mx-auto text-center">
      <div
        class="transition-all duration-1000 transform"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'"
      >
        <!-- Avatar placeholder -->
        <div class="mb-8 sm:mb-10 lg:mb-12">
          <div class="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
            <span class="text-3xl sm:text-4xl font-bold text-white">В</span>
          </div>
        </div>

        <!-- Main heading -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">
          Привет, я 
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Владислав
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
          Веб-разработчик-фрилансер с глубоким увлечением современными технологиями фронтенда
        </p>

        <!-- Description -->
        <p class="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Создаю удобные, быстрые и адаптивные веб-решения для клиентов по всему миру, 
          сочетая креативность и техническую экспертизу
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button
            class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            @click="scrollToContact"
          >
            Связаться со мной
          </button>
          <a
            href="#projects"
            class="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200"
          >
            Посмотреть проекты
          </a>
        </div>

        <!-- Tech stack preview -->
        <div class="mt-12 sm:mt-16 mb-8 sm:mb-0">
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-6 uppercase tracking-wider px-4">
            Работаю с технологиями
          </p>
          <div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
            <span class="px-3 sm:px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs sm:text-sm font-medium">
              Vue.js
            </span>
            <span class="px-3 sm:px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs sm:text-sm font-medium">
              React
            </span>
            <span class="px-3 sm:px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs sm:text-sm font-medium">
              TypeScript
            </span>
            <span class="px-3 sm:px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs sm:text-sm font-medium">
              Node.js
            </span>
            <span class="px-3 sm:px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs sm:text-sm font-medium">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
