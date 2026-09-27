<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    import {
        Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue,
    } from "$lib/components/ui/select";
    import { Loader2 } from "lucide-svelte"; // Using lucide-svelte for loading icon if needed, or simple svg

    let isLoading = false;

    // Form submission handler (mock)
    function handleSubmit(e: Event) {
        e.preventDefault();
        isLoading = true;
        setTimeout(() => {
            isLoading = false;
            alert("Message sent! (Mock)");
        }, 1500);
    }
</script>

<div class="min-h-screen bg-[#EFE8D8] pt-32 pb-20 px-4">
    <div class="container mx-auto max-w-2xl">
        <!-- Header -->
        <div class="text-center mb-12 space-y-4">
            <h1
                class="text-5xl md:text-6xl font-heading font-bold text-foreground"
            >
                The Clean-Up Crew.
            </h1>
            <p
                class="text-xl text-muted-foreground font-medium max-w-lg mx-auto leading-relaxed"
            >
                Questions about your order? Want to resell Throwaway Buffet?
                Just saying hi? We're here.
            </p>
        </div>

        <!-- Float Card Form -->
        <div
            class="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100 relative mb-16"
        >
            <form on:submit={handleSubmit} class="space-y-8">
                <!-- Name -->
                <div class="space-y-2">
                    <label
                        for="name"
                        class="text-lg font-bold font-heading text-foreground"
                    >
                        What's your name?
                    </label>
                    <Input
                        id="name"
                        placeholder="Type your name here..."
                        class="border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--color-primary)] text-lg bg-transparent shadow-none"
                    />
                </div>

                <!-- Email -->
                <div class="space-y-2">
                    <label
                        for="email"
                        class="text-lg font-bold font-heading text-foreground"
                    >
                        How can we reach you? (Email)
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        class="border-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--color-primary)] text-lg bg-transparent shadow-none"
                    />
                </div>

                <!-- Vibe (Dropdown) -->
                <div class="space-y-2">
                    <label
                        id="vibe-label"
                        class="text-lg font-bold font-heading text-foreground"
                    >
                        What's the vibe?
                    </label>
                    <Select>
                        <SelectTrigger
                            aria-labelledby="vibe-label"
                            class="w-full border-0 border-b-2 border-gray-200 rounded-none px-0 focus:ring-0 focus:border-[var(--color-primary)] text-lg shadow-none"
                        >
                            <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="order"
                                >Help with my order</SelectItem
                            >
                            <SelectItem value="wholesale"
                                >Wholesale / I want to resell</SelectItem
                            >
                            <SelectItem value="love"
                                >Just sending love</SelectItem
                            >
                            <SelectItem value="problem"
                                >I have a problem</SelectItem
                            >
                        </SelectContent>
                    </Select>
                </div>

                <!-- Message -->
                <div class="space-y-2">
                    <label
                        for="message"
                        class="text-lg font-bold font-heading text-foreground"
                    >
                        Spill the tea (but not the salsa).
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Type your message..."
                        class="min-h-[150px] bg-stone-50 border-gray-200 focus-visible:ring-[var(--color-primary)] text-lg resize-none"
                    />
                </div>

                <!-- Submit -->
                <Button
                    type="submit"
                    size="lg"
                    class="w-full h-14 bg-[var(--color-primary)] hover:bg-[#b0220a] text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    disabled={isLoading}
                >
                    {#if isLoading}
                        Sending...
                    {:else}
                        Send Message
                    {/if}
                </Button>
            </form>
        </div>

        <!-- Wholesale Block -->
        <div class="flex items-start gap-6 max-w-xl mx-auto opacity-90">
            <div
                class="w-12 h-12 shrink-0 rounded-xl bg-[#2E5948] flex items-center justify-center text-white shadow-md"
            >
                <!-- Truck Icon -->
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="w-6 h-6"
                >
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"
                    ></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
            </div>
            <div>
                <h3 class="text-lg font-bold font-heading text-foreground mb-1">
                    Wholesale Inquiries?
                </h3>
                <p
                    class="text-muted-foreground leading-relaxed text-sm md:text-base"
                >
                    If you want to buy more than 50 units or resell, contact us
                    directly at <a
                        href="mailto:wholesale@throwawaybuffet.com"
                        class="text-[var(--color-primary)] font-bold decoration-2 hover:underline"
                        >wholesale@throwawaybuffet.com</a
                    >
                    or call
                    <span class="font-semibold text-foreground">555-0123</span>.
                    We offer special pricing for caterings.
                </p>
            </div>
        </div>
    </div>
</div>
