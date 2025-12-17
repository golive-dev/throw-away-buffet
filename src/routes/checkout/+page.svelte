<script>
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { cartItems, cartTotal } from "$lib/stores/cart";
    import { Lock, ShieldCheck } from "lucide-svelte";
</script>

<div class="min-h-screen bg-gray-50 flex flex-col md:flex-row text-zinc-900">
    <!-- Left Column: Checkout Form -->
    <div
        class="flex-1 p-8 md:p-16 flex flex-col justify-center max-w-2xl mx-auto md:mx-0 bg-white shadow-xl z-10 text-zinc-900"
    >
        <div class="mb-12">
            <h1 class="text-3xl font-bold font-heading mb-2 text-zinc-900">
                Secure Checkout
            </h1>
            <p class="text-zinc-500 flex items-center gap-2 text-sm">
                <Lock class="w-4 h-4" /> 256-bit SSL Encrypted
            </p>
        </div>

        <form class="space-y-8">
            <!-- Contact -->
            <div class="space-y-4">
                <h2 class="text-xl font-bold">Contact</h2>
                <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    class="h-12 text-lg placeholder:text-zinc-400"
                />
            </div>

            <!-- Shipping -->
            <div class="space-y-4">
                <h2 class="text-xl font-bold">Shipping Address</h2>
                <div class="grid grid-cols-2 gap-4">
                    <Input
                        placeholder="First Name"
                        class="h-12 placeholder:text-zinc-400"
                    />
                    <Input
                        placeholder="Last Name"
                        class="h-12 placeholder:text-zinc-400"
                    />
                </div>
                <Input
                    placeholder="Address"
                    class="h-12 placeholder:text-zinc-400"
                />
                <Input
                    placeholder="Apartment, suite, etc. (optional)"
                    class="h-12 placeholder:text-zinc-400"
                />
                <div class="grid grid-cols-3 gap-4">
                    <Input
                        placeholder="City"
                        class="h-12 col-span-1 placeholder:text-zinc-400"
                    />
                    <Input
                        placeholder="State"
                        class="h-12 col-span-1 placeholder:text-zinc-400"
                    />
                    <Input
                        placeholder="ZIP Code"
                        class="h-12 col-span-1 placeholder:text-zinc-400"
                    />
                </div>
            </div>

            <!-- Payment (Mock) -->
            <div class="space-y-4">
                <h2 class="text-xl font-bold">Payment</h2>
                <div
                    class="p-4 border rounded-xl bg-gray-50 text-center text-muted-foreground text-sm"
                >
                    Payment Gateway Integration Placeholder
                </div>
            </div>

            <Button
                type="submit"
                class="w-full h-16 text-xl font-bold bg-[var(--color-primary)] hover:bg-[#b0220a] text-white rounded-xl shadow-lg mt-8"
            >
                Pay ${$cartTotal.toFixed(2)}
            </Button>

            <div class="flex justify-center gap-4 opacity-50 grayscale mt-4">
                <!-- Trust Seals (Text mock) -->
                <span class="text-xs font-bold border px-2 py-1 rounded"
                    >VISA</span
                >
                <span class="text-xs font-bold border px-2 py-1 rounded"
                    >MASTERCARD</span
                >
                <span class="text-xs font-bold border px-2 py-1 rounded"
                    >PAYPAL</span
                >
            </div>
        </form>
    </div>

    <!-- Right Column: Order Summary -->
    <div
        class="flex-1 bg-[#EFE8D8] p-8 md:p-16 hidden md:block border-l border-stone-200 text-zinc-900"
    >
        <div class="max-w-md sticky top-16">
            <h2 class="text-2xl font-bold font-headings mb-8">Order Summary</h2>

            <div class="space-y-6 mb-8">
                {#each $cartItems as item}
                    <div class="flex gap-4 items-center">
                        <div
                            class="w-16 h-16 bg-white rounded-lg overflow-hidden border border-stone-200 relative"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                class="w-full h-full object-cover"
                            />
                            <span
                                class="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                            >
                                {item.quantity}
                            </span>
                        </div>
                        <div class="flex-1">
                            <h3 class="font-bold text-sm">{item.title}</h3>
                        </div>
                        <span class="font-bold"
                            >${(item.price * item.quantity).toFixed(2)}</span
                        >
                    </div>
                {/each}
            </div>

            <div class="border-t border-black/10 pt-6 space-y-2">
                <div class="flex justify-between text-sm">
                    <span class="opacity-70">Subtotal</span>
                    <span class="font-medium">${$cartTotal.toFixed(2)}</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="opacity-70">Shipping</span>
                    <span class="font-medium">Calculated at next step</span>
                </div>
            </div>

            <div
                class="border-t border-black/10 pt-6 mt-6 flex justify-between items-center"
            >
                <span class="text-xl font-bold">Total</span>
                <span class="text-3xl font-headings font-bold"
                    >${$cartTotal.toFixed(2)}</span
                >
            </div>
        </div>
    </div>
</div>
