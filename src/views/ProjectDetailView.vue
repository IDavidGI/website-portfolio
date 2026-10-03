<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowLeft, ArrowUpRight, X } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()

const project = computed(() => projects.find((item) => item.slug === route.params.slug))
const selectedImage = ref<(typeof projects)[number]['gallery'][number] | null>(null)

const closeLightbox = () => {
  selectedImage.value = null
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeLightbox()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <main v-if="project" class="relative overflow-hidden">
    <div aria-hidden="true" class="desk-mat pointer-events-none absolute inset-0 -top-20" />
    <article class="relative mx-auto w-full max-w-7xl px-5 pb-24 md:px-8">
      <div class="flex items-center justify-between border-b border-border py-5">
        <RouterLink
          to="/"
          class="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft class="size-4 transition-transform group-hover:-translate-x-1" />
          Back to work
        </RouterLink>
        <span class="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Project / {{ project.year }}
        </span>
      </div>

      <header
        class="grid gap-10 pb-20 pt-14 md:grid-cols-[1fr_1.15fr] md:items-end md:gap-16 md:pt-24"
      >
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            {{ project.projectType }}
          </p>
          <h1 class="mt-6 max-w-2xl font-serif text-6xl leading-[0.88] md:text-8xl">
            {{ project.title }}
          </h1>
          <p
            class="mt-8 max-w-xl font-serif text-2xl italic leading-tight text-muted-foreground md:text-3xl"
          >
            {{ project.description }}
          </p>
        </div>

        <figure class="relative rotate-2 bg-paper p-3 pb-10 text-paper-foreground shadow-2xl">
          <span
            aria-hidden="true"
            class="absolute -top-3 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-2 bg-muted-foreground/45"
          />
          <img
            :src="project.image"
            :alt="`Screenshot of ${project.title}`"
            class="aspect-4/3 w-full object-cover"
          />
          <figcaption
            class="absolute bottom-3 left-4 right-4 flex justify-between gap-4 font-mono text-[10px] uppercase tracking-wider"
          >
            <span>{{ project.slug }}</span>
            <span>{{ project.year }}</span>
          </figcaption>
        </figure>
      </header>

      <div class="grid gap-12 border-t border-border pt-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
        <aside class="self-start md:sticky md:top-8">
          <p class="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            At a glance
          </p>
          <dl
            class="mt-5 grid grid-cols-2 gap-5 border-y border-border py-5 font-mono text-xs uppercase"
          >
            <div>
              <dt class="text-muted-foreground">Year</dt>
              <dd class="mt-1 text-foreground">{{ project.year }}</dd>
            </div>
            <div>
              <dt class="text-muted-foreground">Type</dt>
              <dd class="mt-1 text-foreground">{{ project.projectType }}</dd>
            </div>
            <div class="col-span-2">
              <dt class="text-muted-foreground">Built with</dt>
              <dd class="mt-1 text-foreground">{{ project.stack.join(' · ') }}</dd>
            </div>
          </dl>
          <a
            v-if="project.liveUrl !== '#'"
            :href="project.liveUrl"
            class="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary underline underline-offset-4"
          >
            Visit project <ArrowUpRight class="size-4" />
          </a>
        </aside>

        <div class="max-w-2xl">
          <section class="border-b border-border pb-12">
            <p class="font-mono text-xs uppercase tracking-[0.25em] text-primary">01 / The idea</p>
            <h2 class="mt-5 font-serif text-5xl leading-none md:text-6xl">Why it exists.</h2>
            <p class="mt-6 font-mono text-sm leading-relaxed text-muted-foreground">
              {{ project.idea }}
            </p>
          </section>

          <section class="border-b border-border py-2">
            <p class="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              02 / The details
            </p>
            <h2 class="mt-5 font-serif text-5xl leading-none md:text-6xl">
              How it comes together.
            </h2>
            <p class="mt-6 font-mono text-sm leading-relaxed text-muted-foreground">
              {{ project.details }}
            </p>
          </section>
        </div>

        <section
          class="pt-6"
          :class="project.gallery.length > 4 ? 'md:col-span-2' : 'md:col-start-2'"
        >
          <p class="font-mono text-xs uppercase tracking-[0.25em] text-primary">03 / More to see</p>
          <div
            class="mt-6 grid gap-8"
            :class="project.gallery.length > 4 ? 'sm:grid-cols-3 lg:grid-cols-4' : 'sm:grid-cols-2'"
          >
            <button
              v-for="(image, index) in project.gallery"
              :key="image.src"
              type="button"
              class="group block w-full text-left"
              :class="{ 'sm:translate-y-8': project.gallery.length <= 4 && index % 2 === 1 }"
              :aria-label="`Enlarge ${image.label} image`"
              @click="selectedImage = image"
            >
              <div
                class="flex min-h-48 items-center justify-center overflow-hidden bg-muted p-3 sm:min-h-56"
              >
                <img
                  :src="image.src"
                  :alt="`${image.label} screen from ${project.title}`"
                  class="max-h-112 w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div class="mt-3">
                <p class="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {{ image.label }}
                </p>
                <p class="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                  {{ image.explanation }}
                </p>
              </div>
            </button>
          </div>
        </section>
      </div>
    </article>

    <Teleport to="body">
      <div
        v-if="selectedImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-sm md:p-10"
        role="dialog"
        aria-modal="true"
        :aria-label="`${selectedImage.label} enlarged image`"
        @click.self="closeLightbox"
      >
        <div class="relative flex max-h-full max-w-6xl flex-col items-center">
          <button
            type="button"
            class="absolute -right-2 -top-2 z-10 rounded-full bg-paper p-2 text-paper-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:-right-4 md:-top-4"
            aria-label="Close enlarged image"
            @click="closeLightbox"
          >
            <X class="size-5" />
          </button>
          <img
            :src="selectedImage.src"
            :alt="`${selectedImage.label} screen from ${project.title}`"
            class="max-h-[calc(100vh-8rem)] max-w-full object-contain shadow-2xl"
          />
          <p
            class="mt-4 max-w-xl text-center font-mono text-xs uppercase tracking-wider text-white/80"
          >
            {{ selectedImage.label }} / {{ project.title }}
          </p>
        </div>
      </div>
    </Teleport>
  </main>

  <main
    v-else
    class="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-5 md:px-8"
  >
    <p class="font-mono text-xs uppercase tracking-[0.25em] text-primary">
      404 / Project not found
    </p>
    <h1 class="mt-5 font-serif text-6xl">That project went missing.</h1>
    <RouterLink to="/" class="mt-8 font-mono text-sm uppercase underline underline-offset-4">
      Return home
    </RouterLink>
  </main>
</template>

<style scoped></style>
