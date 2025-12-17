<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import CartSidebar from "$lib/components/cart/CartSidebar.svelte";
	import "../app.css";
	import { page } from "$app/stores";

	let { children } = $props();
	let isCheckout = $derived($page.url.pathname === "/checkout");
</script>

<svelte:head>
	<title>Throw Away Buffet | The Ultimate Biodegradable Party Tray</title>
	<meta name="description" content="Meet the world's first tri-folded, biodegradable buffet station. Setup in seconds, toss without guilt. Perfect for tacos, hot dogs, ice cream bars & more." />
	<meta name="keywords" content="biodegradable tray, party tray, taco bar, buffet station, eco-friendly, sustainable party supplies" />
	
	<!-- Open Graph / Social -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Throw Away Buffet | All the Fiesta. None of the Mess." />
	<meta property="og:description" content="The world's first tri-folded, biodegradable buffet station. Setup in seconds, toss without guilt. Your sink will thank you." />
	<meta property="og:image" content="/og-image.jpg" />
	<meta property="og:url" content="https://throwawaybuffet.com" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Throw Away Buffet | All the Fiesta. None of the Mess." />
	<meta name="twitter:description" content="The world's first tri-folded, biodegradable buffet station. Setup in seconds, toss without guilt." />
	<meta name="twitter:image" content="/og-image.jpg" />
	
	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-background text-foreground font-sans"
>
	{#if !isCheckout}
		<Header />
		<CartSidebar />
	{/if}
	<main class="flex-1">
		{@render children()}
	</main>
	{#if !isCheckout}
		<Footer />
	{/if}
</div>
