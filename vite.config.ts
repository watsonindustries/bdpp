import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import ServerUrlCopy from 'vite-plugin-url-copy';

export default defineConfig({
	plugins: [sveltekit(), ServerUrlCopy({ qrcode: { disabled: false } })],
	server: { host: true },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
