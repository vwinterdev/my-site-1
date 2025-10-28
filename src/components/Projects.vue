<script setup lang="ts">
interface Project {
  title: string
  description: string
  technologies: string[]
  results: string
  icon: string
  gradient: string
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const projects: Project[] = [
  {
    title: 'Интерактивный интернет-магазин',
    description: 'Веб-приложение для локального бренда одежды с современным дизайном и удобной навигацией',
    technologies: ['Vue.js', 'Tailwind CSS', 'Nuxt.js', 'SEO'],
    results: 'Увеличение конверсии на 30%',
    icon: '🛍️',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Корпоративный PWA-сайт',
    description: 'Прогрессивное веб-приложение для онлайн-консультаций с офлайн-режимом и push-уведомлениями',
    technologies: ['React', 'Next.js', 'PWA', 'Service Workers'],
    results: 'Рост пользовательской активности на 40%',
    icon: '💼',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Автоматизация бизнес-процессов',
    description: 'Система обмена сообщениями между внутренними сервисами стартапа для оптимизации рабочих процессов',
    technologies: ['Node.js', 'RabbitMQ', 'API', 'Microservices'],
    results: 'Сокращение времени отклика в 2 раза',
    icon: '⚙️',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Образовательный портал',
    description: 'Адаптивный сайт на WordPress с кастомным дизайном и уникальной системой плагинов',
    technologies: ['WordPress', 'PHP', 'Custom Plugins', 'API Integration'],
    results: 'Привлечение более 10,000 пользователей',
    icon: '📚',
    gradient: 'from-orange-500 to-red-500'
  }
]
</script>

<template>
  <section
    id="projects"
    class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Удачные кейсы из практики
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Реальные проекты с измеримыми результатами
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <!-- Project header -->
          <div class="p-6 pb-4">
            <div class="flex items-center mb-4">
              <div :class="`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`">
                <span class="text-2xl">{{ project.icon }}</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-slate-900 dark:text-white">
                  {{ project.title }}
                </h3>
                <div class="flex items-center mt-1">
                  <span class="text-sm text-green-600 dark:text-green-400 font-medium">
                    ✅ {{ project.results }}
                  </span>
                </div>
              </div>
            </div>
            
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {{ project.description }}
            </p>
          </div>

          <!-- Technologies -->
          <div class="px-6 pb-6">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">
            Готов воплотить ваш проект в жизнь?
          </h3>
          <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
            Каждый проект уникален, и я подхожу к каждому с индивидуальным решением. 
            Давайте обсудим, как я могу помочь вашему бизнесу расти.
          </p>
          <button
            class="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            @click="scrollToContact"
          >
            Обсудить проект
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
