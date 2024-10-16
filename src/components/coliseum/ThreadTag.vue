<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="thread-clip flex flex-wrap shadow-sm bg-white rounded-lg cursor-pointer"
  >
    <div class="icon-wrap bg-zinc-500 rounded-l-lg p-2">
      <i :class="icon"></i>
    </div>
    <div class="name-wrapflex flex-wrap px-2 justify-content content-center">
      {{ name }}
    </div>
  </div>
</template>

<style>
.thread-clip {
  transition: background-color 0.3s;
  .icon-wrap {
    transition: background-color 0.3s;
  }
}
.thread-clip:hover {
  background-color: #71717a;

  .icon-wrap {
    background-color: white;
  }

  .name-wrap {
    background-color: #71717a;
  }
}
</style>
