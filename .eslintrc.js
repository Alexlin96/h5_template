module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 10,
      },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-var': 'error',
    'prettier/prettier': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 只有开发环境可以使用debugger
    'vue/singleline-html-element-content-newline': 'off', // 单行html元素内容在新的一行
    'vue/multiline-html-element-content-newline': 'off', // 多行html元素内容在新的一行
    'vue/name-property-casing': ['error', 'PascalCase'], // 对Vue组件中的name属性强制使用特定大小写 PascalCase首字母大写
    'vue/multi-word-component-names': 'off', // 关闭命名校验
    'vue/no-v-html': 'off', // 禁用v-html
    'accessor-pairs': 2, // 应同时设置setter和getter
    'no-duplicate-case': 2, // 不允许在switch语句的case子句中使用重复的测试表达式
    'no-empty': 2, // 禁止出现空语句块
    'no-extra-parens': [2, 'functions'], // 仅在函数表达式附近禁止不必要的括号
    'arrow-spacing': [
      2,
      {
        // 箭头间距
        before: true,
        after: true,
      },
    ],
    'block-spacing': [2, 'always'], // 块间距
    curly: [2, 'multi-line'], // 在if-else语句中，如果if或else语句后面是多行，那么必须加大括号。如果是单行就应该省略大括号。
    'eol-last': 2, // 强制文件以换行符结束（LF）
    eqeqeq: ['error', 'always', { null: 'ignore' }], // 强制使用全等
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
    'comma-spacing': [
      2,
      {
        // 逗号间距
        before: false,
        after: true,
      },
    ],
    'key-spacing': [
      2,
      {
        // 强制在对象字面量属性中的键和值之间保持一致的间距
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      2,
      {
        // // 关键字如if/function等的间距
        before: true,
        after: true,
      },
    ],
    'no-const-assign': 2, // 不能修改使用const关键字声明的变量
    'no-delete-var': 2, // 不允许在变量上使用delete操作符
    'no-dupe-class-members': 2, // 不允许在类成员中使用重复的参数名称
    'no-dupe-keys': 2, // 不允许在对象文字中使用重复键
    'no-empty-pattern': 2, // 不允许空块语句
    'no-eval': 2, // 不允许使用eval
    'no-func-assign': 2, // 禁止对 function 声明重新赋值
    'no-irregular-whitespace': 2, // 捕获无效的空格
    'no-multiple-empty-lines': [
      2,
      {
        // 最多一个空行
        max: 1,
      },
    ],
    'no-native-reassign': 2, // 不允许修改只读全局变量
    'no-trailing-spaces': 2, // 不允许在行尾添加尾随空白
    'no-sequences': 2, // 禁止使用逗号运算符
    'no-undef': 2, // 任何对未声明的变量的引用都会导致错误
    'no-undef-init': 2, // 消除初始化为undefined的变量声明
    'no-unreachable': 2, // 不允许可达代码return，throw，continue，和break语句后面还有语句
    'no-unsafe-finally': 2, // 不允许return，throw，break，和continue里面的语句finally块
    'no-unused-vars': [
      2,
      {
        // 消除未使用的变量，函数和函数的参数
        vars: 'all',
        args: 'none',
      },
    ],
    'no-with': 2, // 禁用with
    'operator-linebreak': [
      2,
      'after',
      {
        // 实施一致的换行
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    semi: [2, 'never'], // 不使用分号
    'semi-spacing': [
      2,
      {
        // 强制分号间隔情况
        before: false,
        after: true,
      },
    ],
    'default-case': 2, // 要求 switch 语句中有 default 分支
    'space-before-function-paren': [2, 'never'], // 在function名后面不允许任何空格
    'space-in-parens': [2, 'never'], // 禁止或要求（或）左边的一个或多个空格
    'space-infix-ops': 2, // 强制二元运算符左右各有一个空格
    'valid-typeof': 2, // 必须使用合法的typeof的值
    'prefer-const': 2, // 使用let关键字声明的变量，但在初始分配后从未重新分配变量，应改为const声明
    'array-bracket-spacing': [2, 'never'], // 不允许数组括号内的空格
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-return-await': 1, // 禁用不必要的 return await
    'no-useless-return': 1, // 禁止多余的 return 语句
    'no-shadow': 0, // 禁止变量声明与外层作用域的变量同名
    'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
    'space-before-blocks': 2, // 强制在块之前使用一致的空格
    'spaced-comment': 2, // 强制在注释中 // 或 /* 使用一致的空格
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
