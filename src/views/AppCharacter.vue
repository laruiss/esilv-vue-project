<script setup>
import { ref } from 'vue'

import { getMarvelCharacter } from '../utils/marvel-api'

const props = defineProps(['id'])

const character = ref({})

getMarvelCharacter(props.id)
  .then(char => character.value = char)
</script>

<template>
  <main>
    <h1>Character {{ character.name }}</h1>
    {{ character.description }}
  </main>
</template>
