<script lang="ts">
    let guests = $state(20);
    let minutesSaved = $derived(guests * 3);

    let funText = $derived.by(() => {
        if (minutesSaved < 30) {
            return "Enough time to actually eat at your own party.";
        } else if (minutesSaved <= 60) {
            return "That's a whole episode of your favorite show.";
        } else if (minutesSaved <= 90) {
            return "Time to actually hang out with your guests.";
        } else {
            return "You could watch a movie instead of scrubbing.";
        }
    });

    // Preset options for quick selection
    const presets = [
        { label: "Small", guests: 10, icon: "👨‍👩‍👧" },
        { label: "Medium", guests: 25, icon: "🎉" },
        { label: "Large", guests: 40, icon: "🏟️" },
    ];
</script>

<section
    class="py-24 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] text-white overflow-hidden"
>
    <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-16">
            <p
                class="text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
                Time Calculator
            </p>
            <h2 class="text-4xl md:text-6xl font-heading font-bold mb-4">
                Reclaim Your Night
            </h2>
            <p class="text-lg md:text-xl text-white/60 max-w-xl mx-auto">
                See how much time you'll save when cleanup takes zero minutes.
            </p>
        </div>

        <div class="max-w-4xl mx-auto">
            <!-- Main Display Card -->
            <div
                class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
            >
                <!-- Big Number Display -->
                <div class="text-center mb-12">
                    <div class="inline-block relative">
                        <div
                            class="text-[120px] md:text-[180px] font-heading font-black leading-none text-white tracking-tight"
                        >
                            {minutesSaved}
                        </div>
                        <div
                            class="absolute -right-8 md:-right-12 top-4 md:top-8"
                        >
                            <div
                                class="bg-primary text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full uppercase tracking-wide"
                            >
                                min
                            </div>
                        </div>
                    </div>
                    <p
                        class="text-xl md:text-2xl text-white/40 font-medium -mt-4"
                    >
                        of scrubbing, gone
                    </p>
                </div>

                <!-- Preset Buttons -->
                <div class="flex justify-center gap-3 md:gap-4 mb-10">
                    {#each presets as preset}
                        <button
                            onclick={() => (guests = preset.guests)}
                            class="group relative px-6 py-4 rounded-2xl transition-all duration-300 {guests ===
                            preset.guests
                                ? 'bg-primary text-white scale-105'
                                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}"
                        >
                            <div class="text-2xl mb-1">{preset.icon}</div>
                            <div class="text-sm font-bold">{preset.label}</div>
                            <div class="text-xs opacity-60">
                                {preset.guests} guests
                            </div>
                        </button>
                    {/each}
                </div>

                <!-- Custom Slider -->
                <div class="max-w-lg mx-auto mb-10">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-white/40 text-sm font-medium"
                            >Or choose exactly</span
                        >
                        <span class="text-white font-bold text-lg"
                            >{guests} guests</span
                        >
                    </div>

                    <div class="relative h-12 flex items-center">
                        <!-- Track Background -->
                        <div
                            class="absolute inset-x-0 h-2 bg-white/10 rounded-full"
                        ></div>

                        <!-- Active Track -->
                        <div
                            class="absolute left-0 h-2 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-150"
                            style="width: {((guests - 5) / (50 - 5)) * 100}%"
                        ></div>

                        <!-- Native Range Input (invisible but functional) -->
                        <input
                            type="range"
                            min="5"
                            max="50"
                            bind:value={guests}
                            aria-label="Number of guests: {guests}"
                            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />

                        <!-- Custom Thumb -->
                        <div
                            class="absolute w-6 h-6 bg-white rounded-full shadow-lg shadow-black/30 pointer-events-none transition-all duration-150 -ml-3"
                            style="left: {((guests - 5) / (50 - 5)) * 100}%"
                        ></div>
                    </div>

                    <div
                        class="flex justify-between text-xs text-white/30 mt-2"
                    >
                        <span>5</span>
                        <span>50</span>
                    </div>
                </div>

                <!-- Fun Fact -->
                <div class="text-center">
                    <div
                        class="inline-flex items-center gap-3 bg-white/5 rounded-full px-6 py-3 border border-white/10"
                    >
                        <span class="text-2xl">💡</span>
                        <p class="text-white/70 font-medium">{funText}</p>
                    </div>
                </div>
            </div>

            <!-- CTA Below -->
        </div>
    </div>
</section>
