<script setup lang="ts">
import resumePdf from '@/projects/CV_DavidGeuchenmeier.pdf'
import FloatingElements from './FloatingElements.vue'

defineOptions({ name: 'HeroSection' })
</script>

<template>
  <section aria-labelledby="hero-title" class="relative">
    <div aria-hidden="true" class="desk-mat pointer-events-none absolute inset-0 -top-20" />
    <div class="relative mx-auto w-full max-w-7xl px-5 md:min-h-[880px] md:px-8">
      <div
        class="relative z-10 mx-auto flex max-w-3xl flex-col items-center pt-12 text-center md:pt-20"
      >
        <p class="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Portfolio · 2026
        </p>
        <h1
          id="hero-title"
          class="mt-6 font-serif text-[clamp(4.25rem,11vw,1rem)] leading-[0.85] tracking-tight"
        >
          David Geuchenmeier
        </h1>
        <p
          class="mt-6 max-w-xl font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] italic leading-tight text-balance"
        >
          writes software that feels <span class="text-primary">obvious</span> in hindsight.
        </p>
        <p
          class="mt-6 max-w-md font-mono text-sm leading-relaxed text-muted-foreground text-pretty"
        >
          Recent software development graduate, curious by nature and ready to build thoughtful,
          reliable products with a great team.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="resumePdf"
            class="inline-flex h-11 items-center rounded-full border border-foreground/30 px-6 font-mono text-sm transition-colors hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Résumé
          </a>
        </div>
      </div>
      <FloatingElements />
    </div>
  </section>
</template>
