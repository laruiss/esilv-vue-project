import antfu from '@antfu/eslint-config'

/** @type {import('@antfu/eslint-config').OptionsConfig} */
export const defaultMain = {
  unocss: true,
  vue: true,
  typescript: true,
  yaml: true,
  jsonc: true,
  toml: true,
  jsx: true,
  markdown: true,
  test: true,
}

/** @type {import('@antfu/eslint-config').TypedFlatConfigItem} */
export const defaultOverrides = {

  rules: {
    'no-irregular-whitespace': 'warn',
    'vue/no-irregular-whitespace': 'warn',
    'style/space-before-function-paren': ['error', 'always'],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'curly': ['error', 'all'],
    'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'style/spaced-comment': [
      'error',
      'always',
      {
        markers: [
          '#region',
          '#endregion',
          '/',
        ],
      },
    ],
  },
}

export default antfu({
  ...defaultMain,
}, {
  ...defaultOverrides,
})
