<script lang="ts">
    import { ShoppingBag } from "lucide-svelte";
    import { cartCount, openCart } from "$lib/stores/cart";
</script>

<!-- Announcement bar: the offer, stated plainly -->
<div class="bg-[var(--red)] text-white text-center px-4 py-2">
    <p class="text-[13px] md:text-sm font-bold tracking-wide uppercase">
        Launch pricing: save up to $20 per pack
        <span class="opacity-80 font-semibold normal-case">·</span>
        Free shipping over $50
        <span class="opacity-80 font-semibold normal-case">·</span>
        60-day money-back Party Promise
    </p>
</div>

<header
    class="sticky top-0 z-40 bg-[var(--paper)]/95 backdrop-blur border-b border-[var(--line)]"
>
    <div
        class="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-4"
    >
        <a href="/v2" class="font-display text-lg md:text-xl leading-none">
            Throwaway<span class="text-[var(--red)]">Buffet</span>
        </a>

        <nav class="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#how" class="hover:text-[var(--red)] transition-colors">How it works</a>
            <a href="#reviews" class="hover:text-[var(--red)] transition-colors">Reviews</a>
            <a href="#faq" class="hover:text-[var(--red)] transition-colors">FAQ</a>
        </nav>

        <div class="flex items-center gap-2 md:gap-3">
            <a
                href="#bundles"
                class="btn-dr px-4 md:px-5 py-2 text-sm md:text-[15px]"
            >
                Get yours
            </a>
            <button
                onclick={openCart}
                class="relative p-2 rounded-lg hover:bg-[var(--cream)] transition-colors"
                aria-label="Open cart ({$cartCount} items)"
            >
                <ShoppingBag class="w-5 h-5" aria-hidden="true" />
                {#if $cartCount > 0}
                    <span
                        class="absolute -top-1 -right-1 min-w-4.5 h-4.5 px-1 rounded-full bg-[var(--green)] text-white text-[11px] font-bold flex items-center justify-center"
                    >
                        {$cartCount}
                    </span>
                {/if}
            </button>
        </div>
    </div>
</header>
