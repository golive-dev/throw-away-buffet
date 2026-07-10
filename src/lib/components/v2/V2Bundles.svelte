<script lang="ts">
    import { ShieldCheck, Truck } from "lucide-svelte";
    import { addToCart } from "$lib/stores/cart";

    const bundles = [
        {
            id: "starter-pack",
            name: "The Starter",
            trays: 3,
            price: 8,
            was: null,
            perTray: "$2.66",
            blurb: "Try it on taco night. One dinner and you'll get it.",
            popular: false,
            freeShipping: false,
        },
        {
            id: "party-stash",
            name: "The Party Stash",
            trays: 9,
            price: 20,
            was: 24,
            perTray: "$2.22",
            blurb: "Covers most house parties with trays left in the drawer.",
            popular: true,
            freeShipping: false,
        },
        {
            id: "block-party",
            name: "The Block Party",
            trays: 30,
            price: 60,
            was: 80,
            perTray: "$2.00",
            blurb: "The cheapest catering in history. Feeds the whole street.",
            popular: false,
            freeShipping: true,
        },
    ];

    function add(bundle: (typeof bundles)[number]) {
        addToCart({
            id: bundle.id,
            title: `${bundle.name} (${bundle.trays} trays)`,
            price: bundle.price,
            image: "/hero-tray.jpg",
        });
    }
</script>

<section id="bundles" class="px-4 md:px-6 py-16 md:py-24 bg-[var(--green-ink)] scroll-mt-20">
    <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-12">
            <p class="font-display text-[var(--yellow)] text-sm tracking-widest mb-3">
                Launch pricing — locked when you order
            </p>
            <h2 class="font-display text-4xl md:text-5xl leading-[0.95] text-white mb-4">
                Pick your party stash
            </h2>
            <p class="text-lg text-white/70">
                Every pack ships flat, stores in a drawer, and costs less than
                the sponges you'd burn through without it.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 md:gap-5 items-stretch mb-10">
            {#each bundles as bundle}
                <div
                    class="relative flex flex-col rounded-2xl bg-[var(--paper)] {bundle.popular
                        ? 'ring-4 ring-[var(--yellow)] md:-my-3'
                        : ''}"
                >
                    {#if bundle.popular}
                        <p
                            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--yellow)] text-[var(--ink)] font-display text-sm px-4 py-1.5 rounded-full whitespace-nowrap"
                        >
                            Most popular
                        </p>
                    {/if}

                    <div class="p-6 md:p-7 text-center">
                        <h3 class="font-display text-2xl mb-1">{bundle.name}</h3>
                        <p class="font-semibold text-[var(--ink-soft)] mb-5">
                            {bundle.trays} trays · {bundle.perTray} each
                        </p>

                        <div class="flex items-baseline justify-center gap-2 mb-1">
                            {#if bundle.was}
                                <span class="text-xl text-[var(--ink-soft)] line-through font-semibold">
                                    ${bundle.was}
                                </span>
                            {/if}
                            <span class="font-display text-5xl text-[var(--red)]">
                                ${bundle.price}
                            </span>
                        </div>
                        {#if bundle.was}
                            <p class="inline-block bg-[var(--yellow)] text-[var(--ink)] text-xs font-extrabold uppercase tracking-wide px-2.5 py-1 rounded mb-4">
                                Save ${bundle.was - bundle.price}
                            </p>
                        {:else}
                            <p class="text-xs font-extrabold uppercase tracking-wide text-transparent select-none px-2.5 py-1 mb-4" aria-hidden="true">
                                &nbsp;
                            </p>
                        {/if}

                        <p class="text-[15px] text-[var(--ink-soft)] font-medium leading-snug min-h-10">
                            {bundle.blurb}
                        </p>
                    </div>

                    <!-- Perforation with ticket punch holes -->
                    <div class="relative px-6" aria-hidden="true">
                        <hr class="perf" />
                        <span class="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--green-ink)]"></span>
                        <span class="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--green-ink)]"></span>
                    </div>

                    <div class="p-6 md:p-7 pt-5 mt-auto text-center">
                        <button
                            onclick={() => add(bundle)}
                            class="btn-dr w-full py-3.5 text-base"
                        >
                            Add to cart — ${bundle.price}
                        </button>
                        <p class="mt-3 text-xs font-bold uppercase tracking-wide text-[var(--green)]">
                            {bundle.freeShipping ? "Ships free" : "Free shipping over $50"}
                        </p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/80 text-sm font-semibold">
            <p class="flex items-center gap-2">
                <ShieldCheck class="w-4.5 h-4.5 text-[var(--yellow)]" aria-hidden="true" />
                60-day money-back Party Promise
            </p>
            <p class="flex items-center gap-2">
                <Truck class="w-4.5 h-4.5 text-[var(--yellow)]" aria-hidden="true" />
                First production run ships in order of purchase
            </p>
        </div>
    </div>
</section>
