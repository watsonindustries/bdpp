<script>
	import '../app.css';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	import PenlightLogo from '$lib/assets/penlight-logo.png?enhanced';
</script>

<Navbar>
	<NavBrand href="/">
		<enhanced:img src={PenlightLogo} class="me-3 max-w-20" alt="Penlight Logo 2024" />
		<!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-2">Breaking Dimensions PP</span> -->
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

<slot />
