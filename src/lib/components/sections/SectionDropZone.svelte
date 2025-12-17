<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { onMount, onDestroy } from "svelte";
    import { fly } from "svelte/transition";

    let email = $state("");
    let isSubmitted = $state(false);

    // Countdown Logic
    // Set launch date to 14 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14);

    let timeLeft = $state({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    let interval: ReturnType<typeof setInterval>;

    function updateTimer() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;

        if (distance < 0) {
            clearInterval(interval);
            return;
        }

        timeLeft = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
    }

    onMount(() => {
        updateTimer();
        interval = setInterval(updateTimer, 1000);
    });

    onDestroy(() => {
        if (interval) clearInterval(interval);
    });

    function handleSubmit(e: Event) {
        e.preventDefault();
        // Mock submission
        isSubmitted = true;
        setTimeout(() => {
            isSubmitted = false;
            email = "";
            alert("You're on the list! Watch your inbox.");
        }, 2000);
    }
</script>

<section class="relative py-32 overflow-hidden bg-black text-white">
    <!-- Animated Gradient Background -->
    <div
        class="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900 animate-gradient-xy opacity-80"
    ></div>

    <!-- Party Overlay (Optional Texture) -->
    <div
        class="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"
    ></div>

    <div class="container mx-auto px-4 relative z-10 flex justify-center">
        <!-- Floating Card -->
        <div
            class="bg-white text-zinc-900 rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl relative overflow-hidden"
            in:fly={{ y: 50, duration: 800, delay: 200 }}
        >
            <!-- Decorative Elements on Card -->
            <div
                class="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-3xl -mr-16 -mt-16"
            ></div>
            <div
                class="absolute bottom-0 left-0 w-32 h-32 bg-red-500 opacity-10 rounded-full blur-3xl -ml-16 -mb-16"
            ></div>

            <div class="text-center space-y-8 relative z-10">
                <!-- Heading -->
                <div class="space-y-4">
                    <span
                        class="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-xs font-bold tracking-widest uppercase mb-2"
                    >
                        Waitlist Open
                    </span>
                    <h2
                        class="text-4xl md:text-5xl font-heading font-bold leading-tight"
                    >
                        The Party Revolution <br />
                        <span class="text-[var(--color-primary)]"
                            >is Coming.</span
                        >
                    </h2>
                    <p
                        class="text-lg text-zinc-600 max-w-md mx-auto leading-relaxed"
                    >
                        We are stocking up. Be the first to know when we launch
                        and get 20% OFF your first order.
                    </p>
                </div>

                <!-- Countdown -->
                <div
                    class="flex justify-center gap-4 md:gap-8 py-4 border-y border-zinc-100"
                >
                    <div class="text-center">
                        <span
                            class="block text-3xl md:text-4xl font-bold font-heading"
                            >{String(timeLeft.days).padStart(2, "0")}</span
                        >
                        <span
                            class="text-xs uppercase tracking-wider text-zinc-400 font-bold"
                            >Days</span
                        >
                    </div>
                    <div class="text-center">
                        <span
                            class="block text-3xl md:text-4xl font-bold font-heading"
                            >{String(timeLeft.hours).padStart(2, "0")}</span
                        >
                        <span
                            class="text-xs uppercase tracking-wider text-zinc-400 font-bold"
                            >Hours</span
                        >
                    </div>
                    <div class="text-center">
                        <span
                            class="block text-3xl md:text-4xl font-bold font-heading"
                            >{String(timeLeft.minutes).padStart(2, "0")}</span
                        >
                        <span
                            class="text-xs uppercase tracking-wider text-zinc-400 font-bold"
                            >Mins</span
                        >
                    </div>
                    <div class="text-center">
                        <span
                            class="block text-3xl md:text-4xl font-bold font-heading text-[var(--color-primary)]"
                            >{String(timeLeft.seconds).padStart(2, "0")}</span
                        >
                        <span
                            class="text-xs uppercase tracking-wider text-zinc-400 font-bold"
                            >Secs</span
                        >
                    </div>
                </div>

                <!-- Capture Form -->
                <form
                    onsubmit={handleSubmit}
                    class="space-y-4 max-w-sm mx-auto"
                >
                    <div class="flex flex-col gap-3">
                        <Input
                            type="email"
                            placeholder="Your email here"
                            class="h-14 text-lg bg-zinc-50 border-zinc-200 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                            bind:value={email}
                            required
                        />
                        <Button
                            type="submit"
                            size="lg"
                            class="w-full h-14 text-lg font-bold bg-[#D9381E] hover:bg-[#b0220a] text-white shadow-lg shadow-red-500/20"
                            disabled={isSubmitted}
                        >
                            {isSubmitted
                                ? "You're on the list!"
                                : "Join the VIP List"}
                        </Button>
                    </div>
                    <p class="text-xs text-zinc-400">
                        No spam. Just early access to the smartest buffet ever.
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>

<style>
    @keyframes gradient-xy {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }
    .animate-gradient-xy {
        background-size: 200% 200%;
        animation: gradient-xy 15s ease infinite;
    }
</style>
