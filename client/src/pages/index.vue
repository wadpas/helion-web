<template>
  <div>Home</div>
  <router-link :to="{ name: '/books/[id]', params: { id: 1 } }">Books 1</router-link>
</template>

<script setup lang="ts"></script>

<style scoped></style>
