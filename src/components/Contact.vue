<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  project: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    // Формируем полное сообщение
    const fullMessage = `Тип проекта: ${form.value.project}

${form.value.message}`

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: fullMessage
      })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Произошла ошибка при отправке')
    }

    isSubmitted.value = true
    
    // Reset form after 5 seconds
    setTimeout(() => {
      isSubmitted.value = false
      form.value = {
        name: '',
        email: '',
        project: '',
        message: ''
      }
    }, 5000)

  } catch (error: unknown) {
    console.error('Error submitting form:', error)
    errorMessage.value = error.message || 'Произошла ошибка при отправке сообщения'
  } finally {
    isSubmitting.value = false
  }
}

const contactMethods = [
  {
    name: 'Email',
    value: 'vwinterdev@gmail.com',
    icon: '📧',
    href: 'mailto:vwinterdev@gmail.com'
  },
  {
    name: 'Telegram',
    value: '@hi_vwinterdev',
    icon: '💬',
    href: 'https://t.me/hi_vwinterdev'
  }
]
</script>

<template>
  <section
    id="contact"
    class="py-20 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Свяжитесь со мной
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Готов обсудить ваш проект и найти лучшее решение для ваших задач
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact form -->
        <div class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Расскажите о вашем проекте
          </h3>
          
          <!-- Error message -->
          <div
            v-if="errorMessage && !isSubmitted"
            class="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <div class="flex items-center">
              <svg
                class="w-5 h-5 text-red-600 dark:text-red-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-red-700 dark:text-red-300">{{ errorMessage }}</span>
            </div>
          </div>

          <form
            v-if="!isSubmitted"
            class="space-y-6"
            @submit.prevent="submitForm"
          >
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Ваше имя
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                placeholder="Как к вам обращаться?"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                placeholder="your@email.com"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Тип проекта
              </label>
              <select
                v-model="form.project"
                required
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              >
                <option value="">
                  Выберите тип проекта
                </option>
                <option value="landing">
                  Лендинг
                </option>
                <option value="website">
                  Корпоративный сайт
                </option>
                <option value="ecommerce">
                  Интернет-магазин
                </option>
                <option value="webapp">
                  Веб-приложение
                </option>
                <option value="other">
                  Другое
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Описание проекта
              </label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
                placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
              />
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <svg
                v-if="isSubmitting"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {{ isSubmitting ? 'Отправляю...' : 'Отправить сообщение' }}
            </button>
          </form>

          <!-- Success message -->
          <div
            v-else
            class="text-center py-8"
          >
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                class="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Сообщение отправлено!
            </h4>
            <p class="text-slate-600 dark:text-slate-300">
              Спасибо за ваш интерес. Я свяжусь с вами в ближайшее время.
            </p>
          </div>
        </div>

        <!-- Contact info -->
        <div class="space-y-8">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Другие способы связи
            </h3>
            
            <div class="space-y-4">
              <a
                v-for="method in contactMethods"
                :key="method.name"
                :href="method.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105"
              >
                <span class="text-2xl mr-4">{{ method.icon }}</span>
                <div>
                  <div class="font-medium text-slate-900 dark:text-white">{{ method.name }}</div>
                  <div class="text-sm text-slate-600 dark:text-slate-300">{{ method.value }}</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Additional info -->
          <div class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
            <h4 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Время ответа
            </h4>
            <p class="text-slate-600 dark:text-slate-300 mb-4">
              Обычно отвечаю в течение 24 часов. Для срочных вопросов лучше писать в Telegram.
            </p>
            
            <h4 class="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Часовой пояс
            </h4>
            <p class="text-slate-600 dark:text-slate-300">
              Работаю по московскому времени (UTC+3), но готов подстроиться под ваш график.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
