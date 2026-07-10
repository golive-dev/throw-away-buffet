<script lang="ts">
    const steps = [
        {
            number: "1",
            title: "Unfold",
            body: "Pull it from the sleeve and pop it open on any table. Three seconds, no assembly, no instructions.",
            image: "/tray-picnic.png",
            alt: "Throwaway Buffet tray unfolded flat and empty",
        },
        {
            number: "2",
            title: "Fill",
            body: "Shells stand upright in No-Fall slots. Guac and salsa sit in leak-safe liquid zones. Toppings get high-wall decks.",
            image: "/tray-bbq.png",
            alt: "Tray compartments filled with BBQ spread",
        },
        {
            number: "3",
            title: "Toss",
            body: "Party's over. Fold the whole spread closed — scraps and all — and drop it in the compost bin. Done.",
            image: "/tray-gameday.png",
            alt: "Folded tray ready for the compost bin",
        },
    ];
</script>

<section id="how" class="px-4 md:px-6 py-16 md:py-24 bg-[var(--cream)] scroll-mt-20">
    <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 class="font-display text-4xl md:text-5xl leading-[0.95] mb-4">
                Set up in seconds. <span class="text-[var(--red)]">Clean up in none.</span>
            </h2>
            <p class="text-lg text-[var(--ink-soft)]">
                If you can open a takeout box, you already know how to use it.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 md:gap-6">
            {#each steps as step}
                <div class="text-center">
                    <div class="relative mb-5">
                        <img
                            src={step.image}
                            alt={step.alt}
                            loading="lazy"
                            class="w-full h-48 md:h-52 object-contain"
                        />
                        <span
                            class="absolute top-0 left-2 font-display text-5xl text-[var(--red)]"
                            aria-hidden="true"
                        >
                            {step.number}
                        </span>
                    </div>
                    <h3 class="font-display text-2xl mb-2">{step.title}</h3>
                    <p class="text-[var(--ink-soft)] font-medium leading-relaxed max-w-xs mx-auto">
                        {step.body}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
