<script setup>
import { ref } from 'vue'

import { getMarvelCharacter } from '../utils/marvel-api'

const character = ref({})

const props = defineProps(['id'])
getMarvelCharacter(props.id)
  .then(char => character.value = char)
</script>

<template>
  <main>
    <h1>Character {{ character.name }}</h1>
    {{ character.description }}
  </main>
</template>
