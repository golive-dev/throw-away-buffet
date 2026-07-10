<script lang="ts">
    import CartSidebar from "$lib/components/cart/CartSidebar.svelte";
    import V2Header from "$lib/components/v2/V2Header.svelte";
    import V2Footer from "$lib/components/v2/V2Footer.svelte";
    import V2StickyBar from "$lib/components/v2/V2StickyBar.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <title>Throwaway Buffet — The 3-Second Buffet That Throws Itself Away</title>
    <meta
        name="description"
        content="One fold-out tray. Twelve compartments. Zero dishes. Sets up in 3 seconds, feeds the crew, composts in 90 days. Packs from $8 with a 60-day money-back Party Promise."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="tb2 min-h-screen flex flex-col">
    <V2Header />
    <CartSidebar />
    <main class="flex-1">
        {@render children()}
    </main>
    <V2Footer />
    <V2StickyBar />
</div>

<style>
    .tb2 {
        /* Throwaway Buffet v2 — DR palette (OKLCH; hex approximations in comments) */
        --paper: oklch(0.975 0.008 85); /* warm white  ~#f9f7f1 */
        --cream: oklch(0.945 0.015 85); /* card fill   ~#efeadd */
        --ink: oklch(0.24 0.015 50); /* warm near-black ~#2b2622 */
        --ink-soft: oklch(0.42 0.015 50); /* muted body  ~#5f5852 */
        --red: oklch(0.55 0.2 30); /* salsa red   ~#d93a1e */
        --red-deep: oklch(0.47 0.18 30); /* pressed red ~#b02c14 */
        --green: oklch(0.42 0.07 165); /* agave green ~#2e5948 */
        --green-ink: oklch(0.28 0.04 170); /* dark band   ~#1c332b */
        --yellow: oklch(0.87 0.16 92); /* punch yellow ~#f2c937 */
        --line: oklch(0.24 0.015 50 / 0.18);

        background-color: var(--paper);
        color: var(--ink);
        font-family: "Barlow", ui-sans-serif, system-ui, sans-serif;
    }

    .tb2 :global(.font-display) {
        font-family: "Anton", "Barlow", ui-sans-serif, sans-serif;
        font-weight: 400;
        letter-spacing: 0.01em;
        text-transform: uppercase;
    }

    /* Perforated tear-line — the signature divider */
    .tb2 :global(.perf) {
        height: 0;
        border: none;
        border-top: 2px dashed var(--line);
    }

    .tb2 :global(.btn-dr) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        background: var(--red);
        color: white;
        font-weight: 800;
        letter-spacing: 0.02em;
        border-radius: 10px;
        box-shadow: 0 4px 0 var(--red-deep);
        transition:
            transform 120ms ease,
            box-shadow 120ms ease,
            background-color 120ms ease;
    }
    .tb2 :global(.btn-dr:hover) {
        transform: translateY(1px);
        box-shadow: 0 3px 0 var(--red-deep);
    }
    .tb2 :global(.btn-dr:active) {
        transform: translateY(3px);
        box-shadow: 0 1px 0 var(--red-deep);
    }
    .tb2 :global(.btn-dr:focus-visible),
    .tb2 :global(a:focus-visible),
    .tb2 :global(button:focus-visible),
    .tb2 :global(summary:focus-visible) {
        outline: 3px solid var(--green);
        outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
        .tb2 :global(*),
        .tb2 :global(*::before),
        .tb2 :global(*::after) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
</style>
