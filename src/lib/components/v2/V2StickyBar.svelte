<script lang="ts">
    import { addToCart, isCartOpen } from "$lib/stores/cart";

    let scrollY = $state(0);
    let visible = $derived(scrollY > 700 && !$isCartOpen);

    function addPopular() {
        addToCart({
            id: "party-stash",
            title: "The Party Stash (9 trays)",
            price: 20,
            image: "/hero-tray.jpg",
        });
    }
</script>

<svelte:window bind:scrollY />

{#if visible}
    <div
        class="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[var(--paper)] border-t border-[var(--line)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(43,38,34,0.12)]"
    >
        <div class="flex items-center justify-between gap-3">
            <div class="leading-tight">
                <p class="font-display text-sm">The Party Stash</p>
                <p class="text-sm font-semibold text-[var(--ink-soft)]">
                    9 trays ·
                    <span class="line-through">$24</span>
                    <span class="text-[var(--red)] font-extrabold">$20</span>
                </p>
            </div>
            <button onclick={addPopular} class="btn-dr px-6 py-3 text-sm shrink-0">
                Add to cart
            </button>
        </div>
    </div>
{/if}
