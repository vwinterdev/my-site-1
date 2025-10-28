<script setup lang="ts">
// No script needed for this component
</script>

<template>
  <section
    id="about"
    class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Обо мне
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Моя история и подход к веб-разработке
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Story -->
        <div class="space-y-6">
          <div class="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              🚀 Мое путешествие
            </h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
              Мое путешествие в веб-разработку началось несколько лет назад, когда я создал свой первый простой сайт. 
              С тех пор я неустанно развиваюсь, осваивая как классические, так и cutting-edge технологии, 
              чтобы создавать удобные, быстрые и адаптивные веб-решения для клиентов по всему миру.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
            <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              💡 Моя философия
            </h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
              Мне нравится сочетать творчество и техническую сторону, чтобы сделать максимально функциональные 
              и красивые проекты. Веб-разработка для меня — это система, где сливаются креативность и технические навыки.
            </p>
          </div>
        </div>

        <!-- Values -->
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <h3 class="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Что меня мотивирует
            </h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="text-slate-600 dark:text-slate-300">
                  <strong>Решение проблем</strong> — создаю решения, которые делают жизнь людей проще, а бизнес эффективнее
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="text-slate-600 dark:text-slate-300">
                  <strong>Постоянное развитие</strong> — каждый проект для меня это вызов, который я с удовольствием принимаю
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <svg
                    class="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="text-slate-600 dark:text-slate-300">
                  <strong>Качество</strong> — разрабатываю качественные и современные продукты, отвечающие потребностям клиентов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
