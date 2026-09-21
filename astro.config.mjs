// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio-ten-dusky-x2amvs1ec6.vercel.app',
	vite: {
		plugins: [tailwindcss()],
	},
});
