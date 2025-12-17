<script>
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
    import { addToCart } from "$lib/stores/cart";

    // Pricing data
    const bundles = [
        {
            id: "starter-pack",
            title: "The Starter Pack",
            quantity: 3,
            price: 8,
            pricePerTray: 2.66,
            description: "Perfect for a family dinner or just trying it out.",
            cta: "Try it out",
            highlight: false,
            colorClass: "bg-white text-foreground",
            image: "/hero-tray.jpg",
        },
        {
            id: "party-stash",
            title: "The Always Ready Stash",
            quantity: 9,
            price: 20,
            originalPrice: 24,
            pricePerTray: 2.22,
            description:
                "Keep stashed in your drawer for unexpected guests. Never run out.",
            cta: "Add to Cart",
            highlight: true,
            colorClass: "bg-[var(--color-primary)] text-white",
            image: "/hero-tray.jpg",
        },
        {
            id: "block-party",
            title: "The Block Party",
            quantity: 30,
            price: 60,
            originalPrice: 80,
            pricePerTray: 2.0,
            description:
                "For big birthdays, weddings, or events. The cheapest catering in history.",
            cta: "Stock Up",
            highlight: false,
            colorClass: "bg-white text-foreground",
            image: "/hero-tray.jpg",
        },
    ];
</script>

<section id="pricing" class="py-32 bg-[#FAFAF7] overflow-hidden relative">
    <div class="container mx-auto px-4">
        <div class="text-center mb-20 space-y-4">
            <h2
                class="text-4xl md:text-6xl font-heading font-bold text-foreground"
            >
                Party for less than $10.
            </h2>
            <p
                class="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
            >
                3 Columns. 3 Trays. 8 Dollars. <br class="hidden md:block" />
                The smartest $8 you'll spend on a party.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {#each bundles as bundle}
                {@const savings = bundle.originalPrice
                    ? bundle.originalPrice - bundle.price
                    : 0}
                <div
                    class={cn(
                        "relative p-8 rounded-3xl transition-all duration-500 flex flex-col h-full",
                        bundle.highlight
                            ? "bg-white shadow-2xl scale-105 z-10 border-2 border-[var(--color-primary)]/10"
                            : "bg-white shadow-lg border border-gray-100 hover:border-gray-200 z-0 hover:-translate-y-1",
                    )}
                >
                    {#if bundle.highlight}
                        <div
                            class="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg transform hover:scale-105 transition-transform cursor-default ring-4 ring-white"
                        >
                            Most Popular
                        </div>
                    {/if}

                    <div class="space-y-6 text-center flex-grow">
                        <!-- Header -->
                        <div>
                            <h3
                                class={cn(
                                    "text-lg font-bold uppercase tracking-wider",
                                    bundle.highlight
                                        ? "text-[var(--color-primary)]"
                                        : "text-muted-foreground",
                                )}
                            >
                                {bundle.title}
                            </h3>
                            <div
                                class="mt-4 flex flex-col items-center justify-center gap-1"
                            >
                                <div class="flex items-baseline gap-2">
                                    <span
                                        class="text-6xl font-heading font-bold text-foreground tracking-tight"
                                        >${bundle.price}</span
                                    >
                                    {#if bundle.originalPrice}
                                        <span
                                            class="text-xl line-through decoration-2 opacity-40 text-muted-foreground font-medium"
                                        >
                                            ${bundle.originalPrice}
                                        </span>
                                    {/if}
                                </div>
                                <div class="flex items-center gap-2">
                                    <p
                                        class="text-sm font-medium text-muted-foreground bg-gray-100 px-3 py-1 rounded-full"
                                    >
                                        ${bundle.pricePerTray.toFixed(2)} / tray
                                    </p>
                                    {#if savings > 0}
                                        <span
                                            class="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full uppercase tracking-wide"
                                        >
                                            Save ${savings}
                                        </span>
                                    {/if}
                                </div>
                            </div>
                        </div>

                        <!-- Divider -->
                        <div class="w-full h-px bg-gray-100"></div>

                        <!-- Quantity and Description -->
                        <div class="space-y-4">
                            <div class="text-center">
                                <span
                                    class="text-4xl font-bold text-foreground block mb-1"
                                    >{bundle.quantity}</span
                                >
                                <span
                                    class="text-sm font-medium text-muted-foreground uppercase tracking-wider"
                                    >Trays Included</span
                                >
                            </div>

                            <p
                                class="leading-relaxed text-muted-foreground text-sm px-4"
                            >
                                {bundle.description}
                            </p>
                        </div>
                    </div>

                    <!-- CTA -->
                    <div class="mt-8 pt-4">
                        <Button
                            size="lg"
                            class={cn(
                                "w-full h-14 rounded-full text-lg font-bold shadow-md hover:-translate-y-0.5 transition-all duration-300",
                                bundle.highlight
                                    ? "bg-[var(--color-primary)] text-white hover:bg-[#b0220a] shadow-[var(--color-primary)]/20"
                                    : "bg-white text-foreground border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50",
                            )}
                            onclick={() =>
                                addToCart({
                                    id: bundle.id,
                                    title: bundle.title,
                                    price: bundle.price,
                                    image: bundle.image,
                                })}
                        >
                            {bundle.cta}
                        </Button>
                    </div>
                </div>
            {/each}
        </div>

        <div class="mt-16 text-center">
            <p class="text-sm text-muted-foreground opacity-60">
                * Shipping calculated at checkout. Free shipping on "The Block
                Party".
            </p>
        </div>
    </div>
</section>
