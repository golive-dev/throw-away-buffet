<script>
    import { Button } from "$lib/components/ui/button";
</script>

<!-- Mexican Sunset Gradient Background -->
<section
    class="py-20 md:py-28 bg-gradient-to-r from-[#FFDAB9] to-[#FAD0C4] relative overflow-hidden"
>
    <div class="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

    <div class="container mx-auto px-4 relative z-10 text-center space-y-8">
        <h2
            class="text-4xl md:text-6xl font-heading font-bold text-[#333333] max-w-4xl mx-auto leading-tight"
        >
            The End of Dishwashing is Near.
        </h2>

        <p class="text-xl text-foreground/80 max-w-2xl mx-auto font-sans">
            We are putting the finishing touches on the ultimate party hack. Be
            the first to know when we launch.
        </p>

        <div class="pt-4">
            <Button
                size="lg"
                class="bg-white hover:bg-white/90 text-[#D9381E] text-xl h-16 px-12 rounded-full shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 font-bold border-2 border-transparent"
                onclick={() =>
                    document
                        .getElementById("waitlist")
                        ?.scrollIntoView({ behavior: "smooth" })}
            >
                Get Early Access
            </Button>
        </div>
    </div>
</section>
