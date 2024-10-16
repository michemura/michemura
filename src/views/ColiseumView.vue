<script setup>
import { articles } from '@/assets/articles/articles.js'
import { threads } from '@/assets/coliseum/threads'
import ThreadTag from '@/components/coliseum/ThreadTag.vue'
defineProps({
  article: {
    type: Array,
    value: articles,
  },
})
</script>
<template>
  <div class="coliseum">
    <h1 class="text-4xl flex content-center justify-center">
      <i class="nf nf-md-town_hall"></i>
      <span class="content-center justify-center">COLISEUM</span>
      <i class="nf nf-md-town_hall"></i>
    </h1>
    <br />
    <div class="threads flex flex-col gap-6">
      <div class="grid grid-cols-5 gap-6">
        <ThreadTag
          v-for="thread in threads"
          :key="thread.id"
          :name="thread.name"
          :icon="thread.icon"
        ></ThreadTag>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
