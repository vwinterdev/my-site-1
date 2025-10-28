<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'Telegram',
    href: 'https://t.me/hi_vwinterdev',
    icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'
  }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="bg-slate-900 text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Владислав
          </h3>
          <p class="text-slate-300 mb-4">
            Веб-разработчик-фрилансер, создающий современные и функциональные веб-решения
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-200"
              :aria-label="social.name"
            >
              <svg
                class="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">
            Навигация
          </h4>
          <ul class="space-y-2">
            <li>
              <button
                class="text-slate-300 hover:text-white transition-colors duration-200"
                @click="() => scrollToSection('about')"
              >
                Обо мне
              </button>
            </li>
            <li>
              <button
                class="text-slate-300 hover:text-white transition-colors duration-200"
                @click="() => scrollToSection('skills')"
              >
                Навыки
              </button>
            </li>
            <li>
              <button
                class="text-slate-300 hover:text-white transition-colors duration-200"
                @click="() => scrollToSection('projects')"
              >
                Проекты
              </button>
            </li>
            <li>
              <button
                class="text-slate-300 hover:text-white transition-colors duration-200"
                @click="() => scrollToSection('contact')"
              >
                Контакты
              </button>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">
            Контакты
          </h4>
          <ul class="space-y-2 text-slate-300">
            <li class="flex items-center">
              <span class="mr-2">📧</span>
              <a
                href="mailto:vwinterdev@gmail.com"
                class="hover:text-white transition-colors duration-200"
              >
                vwinterdev@gmail.com
              </a>
            </li>
            <li class="flex items-center">
              <span class="mr-2">💬</span>
              <a
                href="https://t.me/hi_vwinterdev"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors duration-200"
              >
                @hi_vwinterdev
              </a>
            </li>
            <li class="flex items-center">
              <span class="mr-2">🌍</span>
              <span>Москва, Россия (UTC+3)</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-slate-400 text-sm">
          © {{ currentYear }} Владислав. Все права защищены.
        </p>
        
        <button
          class="mt-4 md:mt-0 flex items-center text-slate-400 hover:text-white transition-colors duration-200"
          @click="scrollToTop"
        >
          <span class="mr-2">Наверх</span>
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>
