<script setup lang="ts">
import LocalClock from './LocalClock.vue'
</script>

<template>
  <header
    class="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-5 font-mono text-xs uppercase tracking-wider text-muted-foreground md:px-8"
  >
    <a href="/" class="flex items-baseline gap-3 text-foreground">
      <span class="font-serif text-2xl normal-case italic tracking-normal">D/G</span>
      <span class="hidden sm:inline">David Geuchenmeier</span>
    </a>

    <div class="hidden items-center gap-5 lg:flex">
      <span class="flex items-center gap-2 text-foreground">
        <span class="relative flex size-2" aria-hidden="true">
          <span
            class="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60"
          />
          <span class="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        Open to work
      </span>
      <LocalClock />
    </div>
  </header>
</template>
