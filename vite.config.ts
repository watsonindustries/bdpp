import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import ServerUrlCopy from 'vite-plugin-url-copy';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [sveltekit(), ServerUrlCopy({ qrcode: { disabled: false } }), enhancedImages()],
	server: { host: true },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
