import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        ["@babel/preset-env", {
          targets: "> 0.25%, not dead"
        }]
      ],
      plugins: [
        "@babel/plugin-transform-optional-chaining",
        "@babel/plugin-transform-nullish-coalescing-operator"
      ]
    })
  ]
};
