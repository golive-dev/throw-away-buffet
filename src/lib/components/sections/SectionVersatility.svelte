<script>
    import { cn } from "$lib/utils";

    // Scenarios for SEO and Lifestyle impact
    const scenarios = [
        {
            title: "Game Day",
            image: "/recipe-wings-new.jpg",
            copy: "Win the game at halftime. Serve the crowd without missing a single play.",
            color: "bg-orange-50",
        },
        {
            // I will use /recipe-movie-new.jpg and call it "The Holiday Movie Night". It's a feast of snacks.
            title: "The Holiday Marathon",
            image: "/recipe-movie-new.jpg",
            copy: "Less time in the kitchen, more time toasting with family (and watching movies).",
            color: "bg-red-50",
        },
        {
            title: "The Picnic",
            image: "/recipe-picnic-new.jpg",
            copy: "Carry it with one hand. Set it up on the grass. Nature thanks you.",
            color: "bg-green-50",
        },
    ];
</script>

<section class="py-20 md:py-28 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2
                class="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground"
            >
                From Kickoff to Credits.
            </h2>
            <p class="text-lg text-muted-foreground">
                Your buffet adapts to any occasion.
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            {#each scenarios as card}
                <div
                    class="group rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <div class="h-64 overflow-hidden relative">
                        <img
                            src={card.image}
                            alt={card.title}
                            loading="lazy"
                            decoding="async"
                            width="600"
                            height="256"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div
                            class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"
                        ></div>
                    </div>
                    <div class={cn("p-8 h-full", card.color)}>
                        <h3
                            class="text-2xl font-heading font-bold mb-3 text-[#333333]"
                        >
                            {card.title}
                        </h3>
                        <p class="text-muted-foreground leading-relaxed">
                            {card.copy}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
