<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import CartSidebar from "$lib/components/cart/CartSidebar.svelte";
	import "../app.css";
	import { page } from "$app/stores";

	let { children } = $props();
	let isCheckout = $derived($page.url.pathname === "/checkout");
	let isV2 = $derived($page.url.pathname.startsWith("/v2"));
	let hideChrome = $derived(isCheckout || isV2);
</script>

<svelte:head>
	<title>Throwaway Buffet | All the Fiesta. None of the Mess.</title>
	<meta
		name="description"
		content="The world's first tri-folded, biodegradable buffet station. Set up in seconds, toss without guilt. Perfect for tacos, hot dogs, ice cream bars & more. Zero cleanup required."
	/>
	<meta
		name="keywords"
		content="biodegradable tray, party tray, taco bar, buffet station, eco-friendly, sustainable party supplies, disposable buffet"
	/>
	<link rel="canonical" href="https://throwawaybuffet.com" />

	<!-- Open Graph / Social -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Throwaway Buffet" />
	<meta
		property="og:title"
		content="Throwaway Buffet | All the Fiesta. None of the Mess."
	/>
	<meta
		property="og:description"
		content="The world's first tri-folded, biodegradable buffet station. Set up in seconds, toss without guilt. Your sink will thank you."
	/>
	<meta
		property="og:image"
		content="https://throwawaybuffet.com/hero-tray.jpg"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Throwaway Buffet tray filled with taco toppings and sides"
	/>
	<meta property="og:url" content="https://throwawaybuffet.com" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@ThrowawayBuffet" />
	<meta
		name="twitter:title"
		content="Throwaway Buffet | All the Fiesta. None of the Mess."
	/>
	<meta
		name="twitter:description"
		content="The world's first tri-folded, biodegradable buffet station. Set up in seconds, toss without guilt."
	/>
	<meta
		name="twitter:image"
		content="https://throwawaybuffet.com/hero-tray.jpg"
	/>
	<meta
		name="twitter:image:alt"
		content="Throwaway Buffet tray filled with taco toppings and sides"
	/>

	<!-- Canonical -->
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-background text-foreground font-sans">
	{#if !hideChrome}
		<Header />
		<CartSidebar />
	{/if}
	<main class="flex-1">
		{@render children()}
	</main>
	{#if !hideChrome}
		<Footer />
	{/if}
</div>
