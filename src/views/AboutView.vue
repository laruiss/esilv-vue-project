<script lang="ts" setup>
import { ref } from 'vue'
import { getMarvelApiUrl } from '../utils/marvel-api'

const url = getMarvelApiUrl('comics')
const title = ref('')
const result = ref([])

fetch(url, {})
  .then((response) => response.json())
  .then((data) => {
    title.value = data.data.results[0].title
  })
  .catch((error) => console.error(error))
</script>

<template>
  <div class="about">
    <h1>Ceci est la page "à propos"</h1>

    <a :href="url">
      api Marvel
    </a>
    {{ title }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
