<script setup lang="ts">
interface Skill {
  name: string
  items: string[]
  icon: string
}

const skillCategories: Skill[] = [
  {
    name: 'Языки программирования',
    icon: '💻',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
  },
  {
    name: 'Frontend фреймворки',
    icon: '⚡',
    items: ['Vue.js', 'React', 'Nuxt.js', 'Next.js']
  },
  {
    name: 'CSS фреймворки',
    icon: '🎨',
    items: ['Tailwind CSS', 'Bootstrap']
  },
  {
    name: 'Backend технологии',
    icon: '🔧',
    items: ['Node.js', 'Golang', 'Python', 'R']
  },
  {
    name: 'Базы данных',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'RabbitMQ']
  },
  {
    name: 'CMS и инструменты',
    icon: '🛠️',
    items: ['WordPress', 'Joomla', 'Тильда', 'Figma']
  }
]
</script>

<template>
  <section
    id="skills"
    class="py-20 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Мои навыки и технологии
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Широкий стек технологий для решения любых задач
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div class="flex items-center mb-4">
            <span class="text-3xl mr-3">{{ category.icon }}</span>
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white">
              {{ category.name }}
            </h3>
          </div>
          
          <div class="space-y-2">
            <div
              v-for="skill in category.items"
              :key="skill"
              class="flex items-center"
            >
              <div class="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
              <span class="text-slate-600 dark:text-slate-300">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional info -->
      <div class="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
        <div class="text-center">
          <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Специализации
          </h3>
          <div class="grid md:grid-cols-3 gap-6 mt-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Веб-приложения
              </h4>
              <p class="text-slate-600 dark:text-slate-300 text-sm">
                SPA, PWA, TWA приложения с современным UX
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Производительность
              </h4>
              <p class="text-slate-600 dark:text-slate-300 text-sm">
                Оптимизация скорости загрузки и SEO
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                UX/UI дизайн
              </h4>
              <p class="text-slate-600 dark:text-slate-300 text-sm">
                Создание интуитивных интерфейсов в Figma
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
