<script lang="ts">
    let isVisible = $state(false);

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
        <!-- Video Demo -->
        <div
            class="relative w-full max-w-3xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl"
            use:viewport
        >
            <video
                autoplay
                loop
                muted
                playsinline
                class="w-full aspect-video object-cover"
                poster="https://customer-ony61e5q3y9idnqr.cloudflarestream.com/b695813d9c4dcb2b8621945416958934/thumbnails/thumbnail.jpg"
            >
                <source
                    src="https://customer-ony61e5q3y9idnqr.cloudflarestream.com/b695813d9c4dcb2b8621945416958934/downloads/default.mp4"
                    type="video/mp4"
                />
                <track
                    kind="captions"
                    src=""
                    label="English"
                    srclang="en"
                    default
                />
                Your browser does not support the video tag.
            </video>
        </div>

        <div class="max-w-xl mx-auto space-y-6">
            <h2
                class="text-4xl md:text-5xl font-heading font-bold text-foreground"
            >
                Never. Wash. Dishes. Again.
            </h2>
            <p
                class="text-lg md:text-xl font-sans text-muted-foreground leading-relaxed"
            >
                This is the genius part: Set up your buffet in minutes, let
                guests graze all night, then toss the whole thing. That's it.
                That's the hack.
            </p>
        </div>
    </div>
</section>
