<template>
  <div>Book</div>
  <div>{{ route.params }}</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<style scoped></style>
