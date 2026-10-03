<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'Europe/Brussels',
})

const time = ref('--:--:--')
let interval: ReturnType<typeof setInterval> | undefined

const updateTime = () => {
  time.value = formatter.format(new Date())
}

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <span>
    <time class="tabular-nums text-foreground">{{ time }}</time>
  </span>
</template>
