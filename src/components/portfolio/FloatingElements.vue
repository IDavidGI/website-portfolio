<script setup lang="ts">
import { contactEmail, projects } from '@/data/projects'

const [stoxly, drunkDriving, mintLeaf] = projects

const stackLines = [
  ['TypeScript', '****'],
  ['React / Vue', '***'],
  ['Node & Postgres', '*****'],
  ['Github', '***'],
  ['C#', '***'],
]
</script>

<template>
  <div
    class="-mx-5 mt-14 flex items-start gap-8 overflow-x-auto px-5 pb-10 pt-6 md:pointer-events-none md:absolute md:inset-0 md:z-20 md:m-0 md:overflow-visible md:p-0 md:*:pointer-events-auto"
  >
    <div class="floating-card left-[1%] top-[7%] rotate-[-5deg] md:absolute">
      <div
        class="edge-zigzag w-56 bg-paper px-4 pb-7 pt-4 font-mono text-[11px] uppercase text-paper-foreground"
      >
        <p class="text-center tracking-[0.25em]">Knowledge receipt</p>
        <p class="mt-1 text-center text-[10px] opacity-60">Order #2026-DG</p>
        <div class="my-3 border-t border-dashed border-paper-foreground/40" />
        <dl class="flex flex-col gap-1.5">
          <div v-for="[skill, years] in stackLines" :key="skill" class="flex justify-between gap-3">
            <dt>{{ skill }}</dt>
            <dd class="tabular-nums">{{ years }}</dd>
          </div>
        </dl>
        <div class="my-3 border-t border-dashed border-paper-foreground/40" />
        <p class="flex justify-between font-semibold">
          <span>Total shipped</span><span>8 projects</span>
        </p>
        <div class="barcode mt-4 h-8" aria-hidden="true" />
      </div>
    </div>

    <figure
      class="floating-card right-[5%] top-[5%] rotate-[7deg] bg-paper p-2.5 pb-3 text-paper-foreground md:absolute"
    >
      <span
        aria-hidden="true"
        class="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-muted-foreground/45"
      />
      <img
        :src="drunkDriving.image"
        :alt="`Screenshot of ${drunkDriving.title}`"
        class="h-36 w-52 object-cover"
        draggable="false"
      />
      <figcaption class="mt-2.5 flex items-end justify-between gap-2">
        <div>
          <p class="font-serif text-xl italic leading-none">{{ drunkDriving.title }}</p>
          <p class="mt-1.5 font-mono text-[10px] uppercase tracking-wider opacity-60">
            {{ drunkDriving.projectType }}
          </p>
        </div>
      </figcaption>
    </figure>

    <figure
      class="floating-card bottom-[25%] left-[5%] rotate-6 bg-paper p-2.5 pb-3 text-paper-foreground md:absolute"
    >
      <img
        :src="stoxly.image"
        :alt="`Screenshot of ${stoxly.title}`"
        class="h-36 w-52 object-cover"
        draggable="false"
      />
      <figcaption class="mt-2.5 flex items-end justify-between gap-2">
        <div>
          <p class="font-serif text-xl italic leading-none">{{ stoxly.title }}</p>
          <p class="mt-1.5 font-mono text-[10px] uppercase tracking-wider opacity-60">
            {{ stoxly.projectType }}
          </p>
        </div>
      </figcaption>
    </figure>

    <div
      class="floating-card bottom-[38%] right-[0%] -rotate-3 bg-paper text-paper-foreground md:absolute"
    >
      <div class="flex w-80">
        <div class="flex-1 p-4 pl-5">
          <p class="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Admit one</p>
          <p class="mt-1 font-serif text-2xl leading-tight">An interview with David</p>
          <dl class="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 font-mono text-[10px] uppercase">
            <div>
              <dt class="opacity-50">Role</dt>
              <dd>Full-time</dd>
            </div>
            <div>
              <dt class="opacity-50">Where</dt>
              <dd>Remote · EU</dd>
            </div>
            <div>
              <dt class="opacity-50">Valid</dt>
              <dd>From now</dd>
            </div>
            <div>
              <dt class="opacity-50">Seat</dt>
              <dd>Your team</dd>
            </div>
          </dl>
        </div>
        <div
          class="flex w-16 flex-col items-center justify-between border-l border-dashed border-paper-foreground/30 py-4"
        >
          <span
            class="rotate-180 font-mono text-[10px] uppercase tracking-widest [writing-mode:vertical-rl]"
            >No. 0001</span
          >
          <a
            :href="`mailto:${contactEmail}`"
            class="flex size-9 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground"
            aria-label="Email Alex to book an interview"
            >↗</a
          >
        </div>
      </div>
    </div>

    <div
      class="floating-card bottom-[12%] left-[30%] rotate-[-4deg] bg-primary p-4 pb-5 text-primary-foreground md:absolute"
    >
      <p class="font-mono text-[10px] uppercase tracking-wider opacity-70">Currently</p>
      <p class="mt-2 w-40 font-serif text-xl italic leading-snug">
        Looking for a job where i can improve all sorts of skills
      </p>
      <p class="mt-3 font-mono text-[10px] uppercase opacity-70">— note to self</p>
    </div>

    <figure
      class="floating-card bottom-[10%] left-[53%] rotate-[4deg] bg-paper p-2.5 pb-3 text-paper-foreground md:absolute"
    >
      <img
        :src="mintLeaf.image"
        :alt="`Screenshot of ${mintLeaf.title}`"
        class="h-36 w-52 object-cover"
        draggable="false"
      />
      <figcaption class="mt-2.5 flex items-end justify-between gap-2">
        <div>
          <p class="font-serif text-xl italic leading-none">{{ mintLeaf.title }}</p>
          <p class="mt-1.5 font-mono text-[10px] uppercase tracking-wider opacity-60">
            {{ mintLeaf.projectType }}
          </p>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.floating-card {
  filter: drop-shadow(0 14px 16px rgb(0 0 0 / 45%));
  transition: transform 300ms ease-out;
}

.floating-card:hover {
  transform: translateY(-4px) rotate(0deg);
}
</style>
