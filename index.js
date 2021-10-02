module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    // 競合を避けるため、prettierは一番最後に書く
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['import'],
  rules: {
    // prettier の設定
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    // 未使用の変数がある場合エラーにする（デフォルトは warning）
    '@typescript-eslint/no-unused-vars': 'error',
    // named-exportを許可
    'import/prefer-default-export': 'off',
    // 絶対パスでのモジュールの読み込みをokにする
    'import/no-unresolved': 'off',
    // 「import Link from 'next/link'」で引っかかるため無効化
    'no-submodule-imports': 'off',
    // importの順番を整理する
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    // if文内のcontinueをokにする
    'no-continue': 'off',
    // for (const a of A) を許可
    'no-restricted-syntax': 'off',
    // console.errorを許容する
    'no-console': ['error', {allow: ['warn', 'error']}],
  }
}
