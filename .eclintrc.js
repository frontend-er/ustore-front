module.exports = {
   env: {
     browser: true,
     node: true,
     es6: true,
     jest: true
   },
   globals: {
     NodeJS: true,
     VoidFunction: true,
     JSX: true
   },
   parser: '@typescript-eslint/parser',
   parserOptions: {
     ecmaVersion: 2021,
     sourceType: 'module',
     ecmaFeatures: {
       jsx: true
     }
   },
   extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
   plugins: ['react', 'react-hooks', '@typescript-eslint'],
   rules: {
     'no-console': 'warn',
     'react/react-in-jsx-scope': 'off',
     'no-useless-escape': 'warn',
     'no-case-declarations': 'warn',
     'react/jsx-key': 'warn',
     'react/no-unescaped-entities': 'warn',
     'react/jsx-no-target-blank': 'warn',
     'react/no-find-dom-node': 'warn',
     'react/display-name': 'off',
     'no-undef': 'error',
     'react/prop-types': 'off',
     'no-use-before-define': 'off',
     '@typescript-eslint/no-unused-vars': 'warn',
     'no-const-assign': 'error',
     'prefer-const': 'warn',
     'no-var': 'error',
     'no-new-object': 'warn',
     'no-new-func': 'warn',
     'object-shorthand': 'warn',
     'quote-props': ['warn', 'as-needed']
     // 'default-param-last': 'warn'
   },
   settings: {
     'import/resolver': {
       node: {
         moduleDirectory: ['node_modules', 'src/']
       }
     },
     react: {
       pragma: 'React',
       version: 'detect'
     }
   }
 };
 