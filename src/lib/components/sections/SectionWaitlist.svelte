<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
    import { fly, fade } from "svelte/transition";

    let email = $state("");
    let loading = $state(false);
    let success = $state(false);

    // Countdown Logic
    let days = $state(13);
    let hours = $state(23);
    let mins = $state(46);
    let secs = $state(14);

    $effect(() => {
        const timer = setInterval(() => {
            if (secs > 0) {
                secs--;
            } else {
                secs = 59;
                if (mins > 0) {
                    mins--;
                } else {
                    mins = 59;
                    if (hours > 0) {
                        hours--;
                    } else {
                        hours = 23;
                        if (days > 0) {
                            days--;
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    });

    function handleSubmit(e: Event) {
        e.preventDefault();
        if (!email) return;

        loading = true;

        // Simulate API call
        setTimeout(() => {
            loading = false;
            success = true;
            email = "";
        }, 1500);
    }
</script>

<section
    id="waitlist"
    class="py-20 md:py-28 bg-[#FAFAF7] relative overflow-hidden"
>
    <!-- Decorative Elements -->
    <div
        class="absolute top-0 right-0 w-125 h-125 bg-primary opacity-5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"
    ></div>
    <div
        class="absolute bottom-0 left-0 w-125 h-125 bg-accent opacity-5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
        <div
            class="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-stone-100 p-8 md:p-16 text-center"
        >
            {#if success}
                <div in:fade={{ duration: 400 }} class="py-12 text-center">
                    <div
                        class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <svg
                            class="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >
                    </div>
                    <h3
                        class="text-3xl font-heading font-bold text-foreground mb-4"
                    >
                        You're on the list!
                    </h3>
                    <p class="text-lg text-muted-foreground">
                        Watch your inbox. We'll verify your email shortly.
                    </p>
                    <Button
                        variant="outline"
                        class="mt-8 rounded-full"
                        onclick={() => (success = false)}
                        >Add another email</Button
                    >
                </div>
            {:else}
                <div in:fly={{ y: 20, duration: 500 }}>
                    <div class="mb-6 flex justify-center">
                        <span
                            class="bg-red-50 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm border border-red-100"
                        >
                            Waitlist Open
                        </span>
                    </div>

                    <form
                        onsubmit={handleSubmit}
                        class="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto"
                    >
                        <div class="grow">
                            <label for="email" class="sr-only"
                                >Email Address</label
                            >
                            <input
                                type="email"
                                id="email"
                                bind:value={email}
                                placeholder="Enter your email address"
                                required
                                class="w-full h-14 px-6 rounded-full border border-gray-200 bg-gray-50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        <Button
                            type="submit"
                            size="lg"
                            disabled={loading}
                            class="h-14 px-8 rounded-full bg-primary hover:bg-[#b0220a] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                        >
                            {#if loading}
                                <span class="animate-pulse">Saving...</span>
                            {:else}
                                Secure My Discount
                            {/if}
                        </Button>
                    </form>

                    <div
                        class="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
                    >
                        <svg
                            class="w-4 h-4 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            ></path></svg
                        >
                        <span>No spam. Unsubscribe anytime.</span>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>
