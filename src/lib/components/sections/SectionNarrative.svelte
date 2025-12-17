<script lang="ts">
    import { onMount } from "svelte";
    import { cn } from "$lib/utils";

    let isVisible = false;

    // A simple intersection observer action
    function viewport(element: HTMLElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible = true;
                    observer.unobserve(element);
                }
            });
        });

        observer.observe(element);
        return {
            destroy() {
                observer.unobserve(element);
            },
        };
    }
</script>

<section
    id="how-it-works"
    class="py-20 md:py-28 bg-secondary text-center overflow-hidden"
>
    <div class="container mx-auto px-4">
        <!-- The Metamorphosis Graphic -->
        <div
            class="relative h-48 w-full max-w-3xl mx-auto mb-16 flex items-center justify-center"
            use:viewport
        >
            {#if isVisible}
                <svg
                    viewBox="0 0 600 150"
                    fill="none"
                    class="w-full h-full stroke-foreground stroke-[3px] stroke-linecap-round stroke-linejoin-round"
                >
                    <!-- Chaotic Scribble (Left) -->
                    <!-- Animate a path that looks like mess -->
                    <path
                        d="M50 75 Q 60 40, 70 75 T 90 75 T 110 40 T 130 110 T 150 75 Q 160 40, 170 75 T 190 75 T 210 40 T 230 110"
                        class="path-scribble opacity-30"
                    />

                    <!-- Transition Arrow -->
                    <path
                        d="M260 75 L340 75 M330 65 L340 75 L330 85"
                        class="path-arrow"
                    />

                    <!-- Straight Tray (Right) -->
                    <path
                        d="M380 75 H 550 M380 75 L 390 95 H 540 L 550 75"
                        class="path-tray"
                    />

                    <!-- The 3 Dots (Pop effect) -->
                    <circle
                        cx="530"
                        cy="50"
                        r="4"
                        fill="var(--color-accent)"
                        class="dot-pop delay-1000"
                    />
                    <circle
                        cx="540"
                        cy="40"
                        r="4"
                        fill="#FFFFFF"
                        stroke="var(--color-foreground)"
                        stroke-width="1"
                        class="dot-pop delay-1100"
                    />
                    <circle
                        cx="550"
                        cy="50"
                        r="4"
                        fill="var(--color-primary)"
                        class="dot-pop delay-1200"
                    />
                </svg>
            {/if}
        </div>

        <div class="max-w-xl mx-auto space-y-6">
            <h2
                class="text-4xl md:text-5xl font-heading font-bold text-foreground"
            >
                Chaos, Organized.
            </h2>
            <p
                class="text-lg md:text-xl font-sans text-muted-foreground leading-relaxed"
            >
                Stop juggling ceramic bowls and mismatched plates. One tray,
                three compartments, zero stress.
            </p>
        </div>
    </div>
</section>

<style>
    /* CSS Animation for drawing */
    .path-scribble {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: draw 2s ease-out forwards;
    }

    .path-arrow {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: draw 1s ease-out 1.5s forwards;
    }

    .path-tray {
        stroke-dasharray: 500;
        stroke-dashoffset: 500;
        animation: draw 1.5s ease-out 2.2s forwards;
    }

    .dot-pop {
        opacity: 0;
        animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        animation-delay: 3.5s; /* Wait for drawing to finish */
    }

    /* Stagger dots */
    .dot-pop:nth-child(4) {
        animation-delay: 3.5s;
    }
    .dot-pop:nth-child(5) {
        animation-delay: 3.6s;
    }
    .dot-pop:nth-child(6) {
        animation-delay: 3.7s;
    }

    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes pop {
        0% {
            opacity: 0;
            transform: scale(0);
            transform-origin: center;
        }
        70% {
            transform: scale(1.5);
        }
        100% {
            opacity: 1;
            transform: scale(1);
            transform-origin: center;
        }
    }
</style>
