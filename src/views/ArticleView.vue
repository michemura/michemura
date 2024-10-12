<script setup>
import { useRoute } from 'vue-router'
import { articles } from '@/assets/articles/articles'
import { computed } from 'vue'
const route = useRoute()
console.log('route', route.params)

const props = defineProps({
  article: {
    type: Object,
    default: () => null,
  },
})

const article = computed(() => {
  return (
    props.article ||
    articles.find(article => article.slug === route.params.articleSlug)
  )
})
</script>
<template>
  <div class="about">
    <h1 class="text-4xl">{{ article.title }}</h1>
    <br />
    <div class="articles flex flex-col gap-6">
      <article class="bg-zinc-800 p-4">
        <time class="w-full relative block text-end">{{ article.time }}</time>
        <p class="">
          {{ article.content }}
        </p>
        <div class="mt-6 content-center justify-center">
          <img
            class="rounded-full"
            src="@/assets/images/michemura.png"
            width="50"
          />
          <span class="content-end ml-2">Michemura</span>
        </div>
      </article>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
  }
}
</style>
