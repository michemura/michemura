<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header
    class="flex flex-row align-middle min-h-14 mb-14 mt-4 bg-zinc-500 rounded-lg"
  >
    <div class="basis-3/12 flex justify-start pl-2">
      <img
        alt="Vue logo"
        class="rounded-full absolute mt-2"
        src="@/assets/images/michemura.png"
        width="90"
      />
    </div>

    <div class="basis-6/12 text-center content-center text-slate-50 text-4xl">
      Michemura
    </div>

    <div class="basis-3/12 flex content-center justify-center">
      <nav class="flex gap-2 text-slate-50">
        <RouterLink
          to="/"
          class="justify-center content-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >Home
        </RouterLink>
        <RouterLink
          to="/blog"
          class="justify-center content-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >Blog
        </RouterLink>
        <RouterLink
          to="/coliseum"
          class="justify-center content-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >Coliseum
        </RouterLink>
        <RouterLink
          to="/about"
          class="flex flex-row items-center content-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          <span>Sobre Mi</span>
          <span class="absolute top-2 flex h-3 w-3 mt-0" style="right: -10px">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"
            ></span>
          </span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
<style scoped></style>
