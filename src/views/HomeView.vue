<script setup>
import { computed, ref } from 'vue'
import BasicInput from '../components/BasicInput.vue'

const username = ref('')
const password = ref('')

const errorMessageUsername = ref('')
const validMessageUsername = ref('')

const errorMessagePassword = ref('')
const validMessagePassword = ref('')

const disabled = computed(() => {
  return (errorMessageUsername.value !== '' && errorMessagePassword.value !== '')
    || username.value === ''
    || password.value === ''
})

// function validateUsername ($event) {
//   console.log($event)
//   if ($event.length < 3) {
//     errorMessageUsername.value = 'Le nom d’utilisateur doit contenir au moins 3 caractères'
//   } else {
//     errorMessageUsername.value = ''
//   }
// }

fetch('/api/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'admin',
    password: 'admin',
  }),
})
  .then(response => response.json())
  .then((/* data */) => {
    // TODO: Do something with the data
    // console.log(data)
  })
</script>

<template>
  <main>
    <form action="">
      <fieldset>
        <legend>Connexion</legend>
        <BasicInput
          id="username"
          v-model="username"
          label="Nom d’utilisateur"
          type="text"
          placeholder="jbond"
          :error-message="errorMessageUsername"
          :valid-message="validMessageUsername"
        />
        {{ username }}
        <BasicInput
          id="password"
          v-model="password"
          label="Mot de passe"
          type="password"
          placeholder="5CR37P455"
          :error-message="errorMessagePassword"
          :valid-message="validMessagePassword"
        />
        {{ password }}
        <button type="reset">
          Recommencer
        </button>
        <button
          type="submit"
          :disabled="disabled"
        >
          Se connecter
        </button>
      </fieldset>
    </form>
  </main>
</template>

<style scoped>
.error {
  color: red;
}
.success {
  color: green;
}
</style>
