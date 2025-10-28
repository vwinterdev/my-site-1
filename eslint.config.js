import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  // Игнорируем файлы
  { 
    ignores: [
      '*.d.ts', 
      '**/coverage', 
      '**/dist', 
      '**/node_modules',
      'pnpm-lock.yaml',
      'build/',
      '*.config.js',
      '*.config.ts',
      'vite.config.ts',
      '*.log',
      'logs/',
      '.tmp/',
      '.cache/',
      '.vscode/',
      '.idea/',
      '.DS_Store',
      'Thumbs.db'
    ] 
  },
  
  // Базовая конфигурация для всех файлов
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        parser: typescriptEslint.parser,
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Vue правила
      'vue/multi-word-component-names': 'off', // Отключаем требование многословных имен компонентов
      'vue/no-unused-vars': 'error',
      'vue/component-api-style': ['error', ['script-setup', 'composition']], // Предпочитаем script setup и composition API
      'vue/block-lang': ['error', { script: { lang: 'ts' } }], // Требуем TypeScript в script блоках
      
      // TypeScript правила
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      
      // Общие правила
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  
  // Специальная конфигурация для Vue файлов
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: typescriptEslint.parser,
        extraFileExtensions: ['.vue'],
      },
    },
  },
  
  // Конфигурация для TypeScript файлов
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptEslint.parser,
    },
  }
);
