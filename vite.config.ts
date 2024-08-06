import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Use a function to dynamically import @mdx-js/rollup
async function getConfig() {
  const mdx = (await import('@mdx-js/rollup')).default;

  return defineConfig({
    plugins: [
      react(),
      mdx(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      postcss: './postcss.config.cjs',
    },
  });
}

export default getConfig();
