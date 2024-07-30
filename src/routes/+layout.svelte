<script>
	import '../app.css';

	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	$: activeUrl = $page.url.pathname;

	import PenlightLogo from '$lib/assets/penlight-logo.png?enhanced';
</script>

<Navbar class="text-primary-500">
	<NavBrand href="/">
		<enhanced:img src={PenlightLogo} class="me-3 max-w-20" alt="Penlight Logo 2024" />
	</NavBrand>
	<NavHamburger />
	<NavUl
		{activeUrl}
		nonActiveClass="text-primary-900 font-semibold xl:text-2xl hover:text-primary-700"
		activeClass="text-primary-500 font-semibold xl:text-2xl"
	>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/credits">Credits</NavLi>
		<NavLi href="/kingblade">KingBlade</NavLi>
	</NavUl>
</Navbar>

<slot />
