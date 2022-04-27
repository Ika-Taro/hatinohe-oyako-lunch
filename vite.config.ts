import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import laravel from 'vite-plugin-laravel'
import reactRefresh from '@vitejs/plugin-react-refresh';
import Pages from 'vite-plugin-pages'

export default defineConfig({
	plugins: [
		Pages({
      dirs: 'src/views',
    }),
		reactRefresh(),
		laravel({
			postcss: [
				tailwindcss(),
				autoprefixer(),
			],
		}),
		
	],
})


