<script lang="ts">
    import { cn } from "$lib/utils";

    let guests = $state(20);
    let minutesSaved = $derived(guests * 3);

    let funText = $derived.by(() => {
        if (minutesSaved < 30) {
            return "That’s enough time to mix a pitcher of Margaritas. 🍹";
        } else if (minutesSaved <= 60) {
            return "That’s enough time to watch an extra episode of your favorite show. 📺";
        } else {
            return "That’s enough time to actually enjoy your own party for once. 💃";
        }
    });
</script>

<section class="py-20 md:py-28 bg-[#EFE8D8] text-center">
    <div class="container mx-auto px-4">
        <!-- Header -->
        <h2
            class="text-4xl md:text-5xl font-heading font-bold text-[#333333] mb-4"
        >
            Do the Party Math.
        </h2>
        <p
            class="text-lg md:text-xl text-[#555555] max-w-2xl mx-auto mb-12 font-sans"
        >
            Washing dishes takes time. Throwing them away takes seconds. See how
            much life you get back.
        </p>

        <!-- Widget Card -->
        <div
            class="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200/50"
        >
            <!-- Slider Input -->
            <div class="mb-10">
                <label
                    for="guests-slider"
                    class="block text-lg font-bold text-[#333333] mb-6"
                >
                    How big is your crowd?
                </label>

                <div class="relative pt-6 pb-2">
                    <!-- Value Label following thumb implementation could be complex CSS, 
                         simplifying to a centered dynamic label or static position for now 
                         to ensure robustness/speed, as custom thumb tooltips are tricky without extra libs.
                         Let's just show the value clearly above or incorporated. 
                         The prompt asked for "Marker Visual: Above the button... dynamic number".
                         We'll use a standard range input and a visual label for simplicity and reliability. -->

                    <div
                        class="relative w-full h-2 bg-gray-200 rounded-full mb-4"
                    >
                        <div
                            class="absolute top-0 left-0 h-full bg-primary rounded-full"
                            style="width: {((guests - 5) / (50 - 5)) * 100}%"
                        ></div>
                        <input
                            id="guests-slider"
                            type="range"
                            min="5"
                            max="50"
                            bind:value={guests}
                            class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-6 opacity-0 cursor-pointer z-10"
                        />
                        <!-- Custom Thumb Visual (Visual only, aligned via calc) -->
                        <div
                            class="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full shadow-md pointer-events-none flex items-center justify-center -ml-4"
                            style="left: {((guests - 5) / (50 - 5)) * 100}%"
                        ></div>
                        <!-- Floating Value Label -->
                        <div
                            class="absolute -top-10 -ml-8 w-16 text-center font-bold text-[#333333] pointer-events-none"
                            style="left: {((guests - 5) / (50 - 5)) * 100}%"
                        >
                            {guests} Guests
                        </div>
                    </div>
                </div>
                <div
                    class="flex justify-between text-xs font-bold text-gray-400 mt-2 px-1"
                >
                    <span>5 Guests</span>
                    <span>50 Guests</span>
                </div>
            </div>

            <!-- Result -->
            <div class="space-y-6">
                <div class="space-y-2">
                    <p
                        class="text-gray-500 font-medium uppercase tracking-widest text-sm"
                    >
                        Total Time Saved
                    </p>
                    <h3
                        class="text-5xl md:text-7xl font-heading font-bold text-primary"
                    >
                        {minutesSaved} Minutes
                    </h3>
                    <p class="text-xl md:text-2xl text-[#333333] font-medium">
                        of scrubbing
                    </p>
                </div>

                <!-- Fun Factor -->
                <div class="min-h-12 flex items-center justify-center">
                    <p
                        class="text-lg md:text-xl text-[#555555] font-medium animate-in fade-in slide-in-from-bottom-2 duration-300"
                    >
                        {funText}
                    </p>
                </div>

                <!-- CTA -->
                <div class="pt-4">
                    <a
                        href="#waitlist"
                        onclick={(e) => {
                            e.preventDefault();
                            document
                                .getElementById("waitlist")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        class="inline-block text-primary font-bold text-lg border-b-2 border-primary/30 hover:border-primary transition-all"
                    >
                        Save those minutes now →
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
