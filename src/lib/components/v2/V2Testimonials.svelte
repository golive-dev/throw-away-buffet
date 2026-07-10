<script lang="ts">
    import { Star, BadgeCheck } from "lucide-svelte";

    const reviews = [
        {
            quote:
                "I hosted taco night for fourteen people and was on the couch by nine. The sink was empty. I almost cried.",
            name: "Dana R.",
            context: "Taco night, 14 guests",
            image: "/gallery-taco-night.jpg",
            alt: "Taco night spread on a Throwaway Buffet tray",
        },
        {
            quote:
                "Ran a sundae bar at my son's birthday. Eleven kids, every topping in its own slot, zero dishes after. Witchcraft.",
            name: "Marcus T.",
            context: "Birthday sundae bar",
            image: "/gallery-ice-cream-social.jpg",
            alt: "Ice cream sundae bar set up on a tray",
        },
        {
            quote:
                "Bought the 30-pack for our block party. Cheaper than renting chafing dishes and nobody fought over serving spoons.",
            name: "Priya K.",
            context: "Block party, 60 neighbors",
            image: "/gallery-bbq-burgers.jpg",
            alt: "Backyard BBQ burger spread on a tray",
        },
    ];
</script>

<section id="reviews" class="px-4 md:px-6 py-16 md:py-24 bg-[var(--cream)] scroll-mt-20">
    <div class="max-w-6xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-12">
            <div class="flex justify-center text-[var(--yellow)] mb-3" aria-hidden="true">
                {#each Array(5) as _}
                    <Star class="w-6 h-6" fill="currentColor" stroke-width="0" />
                {/each}
            </div>
            <h2 class="font-display text-4xl md:text-5xl leading-[0.95] mb-3">
                Hosts don't go back
            </h2>
            <p class="text-lg text-[var(--ink-soft)]">
                From our early-access batch. Real parties, real empty sinks.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
            {#each reviews as review}
                <figure class="rounded-2xl bg-white border border-[var(--line)] overflow-hidden flex flex-col">
                    <img
                        src={review.image}
                        alt={review.alt}
                        loading="lazy"
                        class="w-full h-44 object-cover"
                    />
                    <blockquote class="p-6 flex-1">
                        <div class="flex text-[var(--yellow)] mb-3" aria-label="5 out of 5 stars">
                            {#each Array(5) as _}
                                <Star class="w-4 h-4" fill="currentColor" stroke-width="0" aria-hidden="true" />
                            {/each}
                        </div>
                        <p class="font-medium leading-relaxed">“{review.quote}”</p>
                    </blockquote>
                    <figcaption class="px-6 pb-6 flex items-center gap-2 text-sm">
                        <BadgeCheck class="w-4.5 h-4.5 text-[var(--green)]" aria-hidden="true" />
                        <span class="font-bold">{review.name}</span>
                        <span class="text-[var(--ink-soft)] font-medium">· {review.context}</span>
                    </figcaption>
                </figure>
            {/each}
        </div>
    </div>
</section>
