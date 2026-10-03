<script setup lang="ts">
import { contactEmail } from '@/data/projects'
import SiteHeader from './components/portfolio/SiteHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="relative min-h-dvh overflow-hidden">
    <SiteHeader />
    <RouterView />
    <footer
      class="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 border-t border-border px-5 py-8 font-mono text-xs uppercase tracking-wider text-muted-foreground md:flex-row md:items-center md:px-8"
    >
      <span>Built by David Geuchenmeier · 2026</span>
      <a
        :href="`mailto:${contactEmail}`"
        class="text-foreground underline-offset-4 hover:text-primary hover:underline"
      >
        {{ contactEmail }}
      </a>
    </footer>
  </div>
</template>
