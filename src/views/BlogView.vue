<script setup>
import { articles } from '@/assets/articles/articles.js'

defineProps({
  article: {
    type: Array,
    value: articles,
  },
})
</script>
<template>
  <div class="about">
    <h1 class="text-4xl">BLOG</h1>
    <br />
    <div class="articles flex flex-col gap-6">
      <RouterLink
        v-for="article in articles"
        :key="article.id"
        :to="`/blog/${article.slug}`"
      >
        <article class="bg-zinc-800 p-4">
          <time class="w-full relative block text-end">{{ article.time }}</time>
          <h2 class="font-bold text-2xl underline mb-3">{{ article.title }}</h2>
          <p class="line-clamp-3">{{ article.content }}</p>
          <div class="mt-6 content-center justify-center">
            <img
              class="rounded-full"
              src="@/assets/images/michemura.png"
              width="50"
            />
            <span class="content-end ml-2">Michemura</span>
          </div>
        </article>
      </RouterLink>
      <RouterLink to="/blog/nulla-pr">
        <article class="bg-zinc-800 p-4">
          <time class="w-full relative block text-end">Mar 10, 2020</time>
          <h2 class="font-bold text-2xl underline mb-3">
            Nulla dolor velit adipisicing duis excepteur
          </h2>
          <p class="line-clamp-3">
            Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
            occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
            occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
            dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut
            cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure
            quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad
            sint voluptate sunt elit mollit officia ad enim sit consectetur
            enim.
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
      </RouterLink>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
  }
}
</style>
