import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Common
      'no-console': 1, //tránh console.log khi build sản phẩm
      'no-lonely-if': 1, //phải dùng else if sau trong else thay vì dùng if để rõ ràng cú pháp
      'no-unused-vars': 1, // tránh tạo biến ko dùng
      'no-trailing-spaces': 1, //tránh thừa dấu cách khi code xong 1 dòng
      'no-multi-spaces': 1, //tránh dư thừa dấu cách khi code
      'no-multiple-empty-lines': 1, //tránh các dòng thừa
      'space-before-blocks': ['error', 'always'], //tạo 1 khoảng trống khi mở block
      'object-curly-spacing': [1, 'always'], //tạo khoảng trống đầu và cuối của object
      indent: ['warn', 2], //đảm bảo khoảng cách thò thụt hợp lý
      semi: [1, 'never'], //bỏ dấu ;
      quotes: ['error', 'single'], //đồng bộ khai báo string dùng ngoặc single
      'array-bracket-spacing': 1, //đảm báo ko thừa space trong array
      'linebreak-style': 0, //xuống dòng đúng cách
      'no-unexpected-multiline': 'warn', //tránh dư thừa các dòng không dùng đến
      'keyword-spacing': 1, //đảm bảo có space giữa các hàm hoặc if else
      'comma-dangle': 1, //tránh dư thừa dấu , ở cuối mỗi phần tử của object
      'comma-spacing': 1, //đảm bảo giữa các phần tử có dấu phẩy xong mới đến khoảng trống chứ ko phải khoảng trống trước dấu phẩy
      'arrow-spacing': 1, //khoảng cách giữa function với arrow
      'no-extra-boolean-cast': 0 // Xử lý ép kiểu boolean (default là error)
    }
  }
]
