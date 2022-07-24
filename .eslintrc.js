/* Ref:
 *   - https://zenn.dev/januswel/articles/402774d76424e71ac906
 *   - https://zenn.dev/kimromi/articles/b7cf98005f3193
 *   - https://typescript-eslint.io/docs/linting/configs
 *   - https://github.com/prettier/eslint-config-prettier
 */

// eslint-disable-next-line no-undef
module.exports = {
  root: true,

  // prettier-ignore
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',

    // Consistency with @tsconfig/strictest
    'dot-notation': 'off',
  },
}
