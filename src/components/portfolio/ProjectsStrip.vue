<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { projects } from '@/data/projects'
</script>

<template>
  <section
    id="work"
    aria-labelledby="work-title"
    class="relative mx-auto w-full max-w-7xl scroll-mt-8 px-5 pb-24 pt-16 md:px-8 md:pt-28"
  >
    <div class="flex items-end justify-between gap-6 border-b border-border pb-6">
      <h2 id="work-title" class="font-serif text-5xl leading-none md:text-7xl">
        Selected <em class="text-primary">work</em>
      </h2>
      <p class="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        ({{ String(projects.length).padStart(2, '0') }}) 2024 — 2026
      </p>
    </div>

    <ol>
      <li v-for="(project, index) in projects" :key="project.slug" class="border-b border-border">
        <RouterLink
          :to="{ name: 'project', params: { slug: project.slug } }"
          class="group flex flex-col gap-5 py-8 outline-none focus-visible:bg-card md:flex-row md:items-center md:gap-8"
        >
          <span class="font-mono text-xs tabular-nums text-muted-foreground">{{
            String(index + 1).padStart(2, '0')
          }}</span>
          <div
            class="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-sm md:aspect-auto md:h-28 md:w-0 md:transition-[width] md:duration-500 md:group-hover:w-40"
          >
            <img
              :src="project.image"
              :alt="`Screenshot of ${project.title}`"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="flex-1">
            <h3
              class="font-serif text-4xl leading-none transition-transform duration-300 group-hover:translate-x-2 group-hover:italic md:text-6xl"
            >
              {{ project.title }}
            </h3>
            <p class="mt-3 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground">
              {{ project.description }}
            </p>
          </div>
          <ul
            class="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase text-muted-foreground md:w-40 md:flex-col"
          >
            <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
          </ul>
          <div
            class="flex items-center justify-between gap-6 font-mono text-xs md:w-40 md:flex-col md:items-end"
          >
            <span>{{ project.projectType }}</span>
            <span class="flex items-center gap-1 text-muted-foreground">
              {{ project.year }}
              <ArrowUpRight
                class="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                aria-hidden="true"
              />
            </span>
          </div>
        </RouterLink>
      </li>
    </ol>
  </section>
</template>
