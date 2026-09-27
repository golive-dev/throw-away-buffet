<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Menu, X } from "lucide-svelte";
    import { cn } from "$lib/utils";
    import { fly, fade } from "svelte/transition";

    let scrollY = $state(0);
    let isScrolled = $derived(scrollY > 50);
    let mobileMenuOpen = $state(false);

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }

    function closeMobileMenu() {
        if (mobileMenuOpen) {
            mobileMenuOpen = false;
            document.body.style.overflow = "";
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Escape" && mobileMenuOpen) {
            closeMobileMenu();
        }
    }

    function scrollToSection(id: string) {
        mobileMenuOpen = false;
        document.body.style.overflow = "";
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<svelte:window bind:scrollY onkeydown={handleKeydown} />

<header
    class={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
            ? "bg-[#FAFAF7]/80 backdrop-blur-md border-b border-zinc-200 shadow-sm py-3"
            : "bg-transparent border-transparent py-6",
    )}
>
    <div class="container mx-auto flex items-center justify-between px-6">
        <!-- Logo -->
        <a
            href="/"
            class={cn(
                "text-2xl font-bold tracking-tighter font-heading whitespace-nowrap transition-colors duration-300 relative z-50",
                mobileMenuOpen ? "text-white" : "text-foreground",
            )}
            onclick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                if (mobileMenuOpen) toggleMobileMenu();
            }}
        >
            Throwaway Buffet
        </a>

        <!-- Navigation (Desktop) -->
        <nav class="hidden md:flex gap-8 items-center">
            <button
                onclick={() => scrollToSection("how-it-works")}
                class="font-medium bg-transparent border-0 cursor-pointer text-base hover:opacity-70 transition-opacity text-foreground"
            >
                How it Works
            </button>
            <button
                onclick={() => scrollToSection("inspiration")}
                class="font-medium bg-transparent border-0 cursor-pointer text-base hover:opacity-70 transition-opacity text-foreground"
            >
                Inspiration
            </button>
            <button
                onclick={() => scrollToSection("sustainability")}
                class="font-medium bg-transparent border-0 cursor-pointer text-base hover:opacity-70 transition-opacity text-foreground"
            >
                Sustainability
            </button>
            <button
                onclick={() => scrollToSection("support")}
                class="font-medium bg-transparent border-0 cursor-pointer text-base hover:opacity-70 transition-opacity text-foreground"
            >
                Support
            </button>
        </nav>

        <!-- Right Side: Cart & Mobile Trigger -->
        <div class="flex items-center gap-4 relative z-50">
            <!-- Mobile Menu Trigger -->
            <button
                class="md:hidden p-2 relative z-50"
                onclick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
            >
                {#if mobileMenuOpen}
                    <X class="w-6 h-6 text-white" />
                {:else}
                    <Menu class="w-6 h-6 transition-colors text-foreground" />
                {/if}
            </button>
        </div>
    </div>
</header>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
    <!-- Backdrop for click-outside-to-close -->
    <div
        class="fixed inset-0 z-30"
        onclick={closeMobileMenu}
        onkeydown={(e) => e.key === "Enter" && closeMobileMenu()}
        role="button"
        tabindex="-1"
        aria-label="Close menu"
    ></div>
    <div
        class="fixed inset-0 z-40 bg-primary flex flex-col items-center justify-center text-center p-6"
        transition:fly={{ y: -100, duration: 400, opacity: 1 }}
    >
        <nav
            class="flex flex-col gap-8 text-white font-heading font-bold text-3xl"
        >
            <button
                onclick={() => scrollToSection("how-it-works")}
                class="hover:opacity-80 transition-opacity"
            >
                THE PRODUCT
            </button>
            <button
                onclick={() => scrollToSection("inspiration")}
                class="hover:opacity-80 transition-opacity"
            >
                RECIPES & IDEAS
            </button>
            <button
                onclick={() => scrollToSection("sustainability")}
                class="hover:opacity-80 transition-opacity"
            >
                ECO-FRIENDLY
            </button>
            <button
                onclick={() => scrollToSection("support")}
                class="hover:opacity-80 transition-opacity"
            >
                FAQ / CONTACT
            </button>
        </nav>

        <div class="mt-16 w-full max-w-xs"></div>
    </div>
{/if}
