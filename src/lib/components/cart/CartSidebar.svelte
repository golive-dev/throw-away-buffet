<script>
    import { fly, fade } from "svelte/transition";
    import { Button } from "$lib/components/ui/button";
    import { X, Plus, Minus, Trash2 } from "lucide-svelte";
    import {
        cartItems,
        isCartOpen,
        cartTotal,
        closeCart,
        updateQuantity,
        removeFromCart,
    } from "$lib/stores/cart";
    import { cn } from "$lib/utils";

    const FREE_SHIPPING_THRESHOLD = 50;
</script>

{#if $isCartOpen}
    <!-- Backdrop -->
    <button
        class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] border-0 cursor-default w-full h-full block"
        onclick={closeCart}
        transition:fade={{ duration: 300 }}
        aria-label="Close cart overlay"
    ></button>

    <!-- Sidebar -->
    <div
        class="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
        transition:fly={{ x: 400, duration: 400, opacity: 1 }}
    >
        <!-- Header -->
        <div
            class="p-6 border-b border-gray-100 flex items-center justify-between bg-[#FAFAF7]"
        >
            <h2 class="text-2xl font-headings font-bold text-foreground">
                Your Party Stash
            </h2>
            <button
                onclick={closeCart}
                class="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
                <X class="w-6 h-6 text-foreground" />
            </button>
        </div>

        <!-- Free Shipping Progress -->
        <div class="px-6 py-4 bg-[#FAFAF7] border-b border-gray-100">
            {#if $cartTotal >= FREE_SHIPPING_THRESHOLD}
                <p
                    class="text-sm font-bold text-[#2E5948] mb-2 flex items-center gap-2"
                >
                    🎉 You've unlocked FREE Shipping!
                </p>
                <div
                    class="h-2 w-full bg-gray-200 rounded-full overflow-hidden"
                >
                    <div class="h-full bg-[#2E5948] w-full"></div>
                </div>
            {:else}
                <p class="text-sm font-medium text-muted-foreground mb-2">
                    You're <span class="font-bold text-[var(--color-primary)]"
                        >${(FREE_SHIPPING_THRESHOLD - $cartTotal).toFixed(
                            2,
                        )}</span
                    > away from Free Shipping.
                </p>
                <div
                    class="h-2 w-full bg-gray-200 rounded-full overflow-hidden"
                >
                    <div
                        class="h-full bg-[var(--color-primary)] transition-all duration-500 ease-out"
                        style="width: {($cartTotal / FREE_SHIPPING_THRESHOLD) *
                            100}%"
                    ></div>
                </div>
            {/if}
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-6 space-y-6">
            {#if $cartItems.length === 0}
                <div
                    class="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50"
                >
                    <div
                        class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center"
                    >
                        <span class="text-4xl text-gray-300">🌮</span>
                    </div>
                    <p class="text-lg font-medium">Your stash is empty.</p>
                    <Button variant="outline" onclick={closeCart}
                        >Start the party</Button
                    >
                </div>
            {:else}
                {#each $cartItems as item}
                    <div class="flex gap-4">
                        <div
                            class="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 class="font-bold text-foreground">
                                    {item.title}
                                </h3>
                                <p class="text-muted-foreground text-sm">
                                    ${item.price.toFixed(2)}
                                </p>
                            </div>

                            <div class="flex items-center justify-between mt-2">
                                <div
                                    class="flex items-center gap-3 bg-gray-50 rounded-lg p-1"
                                >
                                    <button
                                        onclick={() =>
                                            updateQuantity(item.id, -1)}
                                        class="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-foreground hover:bg-gray-100 disabled:opacity-50"
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus class="w-3 h-3" />
                                    </button>
                                    <span
                                        class="text-sm font-bold w-4 text-center"
                                        >{item.quantity}</span
                                    >
                                    <button
                                        onclick={() =>
                                            updateQuantity(item.id, 1)}
                                        class="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-foreground hover:bg-gray-100"
                                    >
                                        <Plus class="w-3 h-3" />
                                    </button>
                                </div>
                                <button
                                    onclick={() => removeFromCart(item.id)}
                                    class="text-red-500 hover:text-red-700 transition-colors p-2"
                                >
                                    <Trash2 class="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                {/each}
            {/if}
        </div>

        <!-- Footer -->
        {#if $cartItems.length > 0}
            <div class="p-6 border-t border-gray-100 bg-white">
                <div
                    class="bg-[var(--color-secondary)] p-4 rounded-xl flex justify-between items-center mb-6"
                >
                    <span class="text-lg font-bold text-foreground/80"
                        >Subtotal</span
                    >
                    <span
                        class="text-2xl font-bold font-headings text-foreground"
                        >${$cartTotal.toFixed(2)}</span
                    >
                </div>
                <Button
                    class="w-full h-16 text-xl font-bold bg-[var(--color-primary)] hover:bg-[#b0220a] text-white rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    href="/checkout"
                    onclick={closeCart}
                >
                    Checkout Securely - ${$cartTotal.toFixed(2)}
                </Button>
                <p
                    class="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2 opacity-70"
                >
                    <span>🔒 Secure SSL Encryption</span>
                </p>
            </div>
        {/if}
    </div>
{/if}
