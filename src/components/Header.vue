<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Владислав
          </h1>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <button
              class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              @click="scrollToSection('hero')"
            >
              Главная
            </button>
            <button
              class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              @click="scrollToSection('about')"
            >
              Обо мне
            </button>
            <button
              class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              @click="scrollToSection('skills')"
            >
              Навыки
            </button>
            <button
              class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              @click="scrollToSection('projects')"
            >
              Проекты
            </button>
            <button
              class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              @click="scrollToSection('contact')"
            >
              Контакты
            </button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            @click="toggleMenu"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="isMenuOpen"
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <button
            class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
            @click="scrollToSection('hero')"
          >
            Главная
          </button>
          <button
            class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
            @click="scrollToSection('about')"
          >
            Обо мне
          </button>
          <button
            class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
            @click="scrollToSection('skills')"
          >
            Навыки
          </button>
          <button
            class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
            @click="scrollToSection('projects')"
          >
            Проекты
          </button>
          <button
            class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
            @click="scrollToSection('contact')"
          >
            Контакты
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
