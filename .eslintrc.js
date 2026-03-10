const extendsBase = [
  'plugin:vue/vue3-recommended',
  'plugin:vue/vue3-essential',
  'eslint:recommended',
]

// Solo extender @vue/prettier si está instalado (evita error cuando el paquete se usa linkeado)
try {
  require.resolve('@vue/eslint-config-prettier')
  extendsBase.push('@vue/prettier')
} catch (_) {
  /* no disponible en este contexto */
}

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: extendsBase,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    extraFileExtensions: ['.vue'],
  },
  rules: {
    ...(extendsBase.includes('@vue/prettier')
      ? { 'prettier/prettier': ['error'] }
      : {}),
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'no-unused-vars': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
