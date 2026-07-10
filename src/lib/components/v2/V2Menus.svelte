<script lang="ts">
    const menus = [
        { image: "/recipe-baja-new.jpg", label: "Taco Tuesday", note: "3 shells up, guac in the liquid zone" },
        { image: "/recipe-wings-new.jpg", label: "Game Day Wings", note: "Sauces stay in their lanes" },
        { image: "/recipe-sundae-new.jpg", label: "Sundae Bar", note: "Cold-safe for ice cream socials" },
        { image: "/recipe-ballpark-new.jpg", label: "Ballpark Night", note: "Dogs, buns, and every fixing" },
        { image: "/recipe-movie-new.jpg", label: "Movie Night", note: "A snack deck for the whole couch" },
        { image: "/recipe-gyro-new.jpg", label: "Gyro Station", note: "Warm pitas, cool tzatziki" },
    ];
</script>

<section class="py-16 md:py-24 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 md:px-6 mb-10">
        <h2 class="font-display text-4xl md:text-5xl leading-[0.95] mb-3">
            One tray. <span class="text-[var(--red)]">Every party.</span>
        </h2>
        <p class="text-lg text-[var(--ink-soft)] max-w-xl">
            The same twelve compartments run tacos on Tuesday and a sundae bar
            on Saturday. Pick a menu, load it, host it.
        </p>
    </div>

    <div
        class="flex gap-4 md:gap-5 overflow-x-auto px-4 md:px-6 pb-4 snap-x snap-mandatory [scrollbar-width:thin]"
    >
        {#each menus as menu}
            <figure
                class="snap-start shrink-0 w-64 md:w-72 rounded-2xl overflow-hidden bg-white border border-[var(--line)] shadow-sm"
            >
                <img
                    src={menu.image}
                    alt="{menu.label} spread set up on a Throwaway Buffet tray"
                    loading="lazy"
                    class="w-full h-44 md:h-48 object-cover"
                />
                <figcaption class="p-4">
                    <p class="font-display text-lg leading-tight mb-1">{menu.label}</p>
                    <p class="text-sm text-[var(--ink-soft)] font-medium">{menu.note}</p>
                </figcaption>
            </figure>
        {/each}
    </div>
</section>
