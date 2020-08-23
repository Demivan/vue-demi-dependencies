import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [nodeResolve()],
  external: ['vue', '@vue/composition-api', 'vue-demi']
}
