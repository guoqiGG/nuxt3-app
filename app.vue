<script setup>
const [{ data: organization }, { data: repos }] = await Promise.all([
  useFetch(`https://api.github.com/orgs/nuxt`),
  useFetch(`https://api.github.com/orgs/nuxt/repos`)
])
// console.log(organization.value,repos.value)
const counter = useState('counter', () =>Math.round(Math.random() * 1000) )
</script>

<template>
  <header>
    <h1>{{ organization.login }}</h1>
    <p>{{ organization.description }}</p>
    <div>
      Counter:{{counter}}
      <button @click="counter++">+</button>
      <button @click="counter++">-</button>
    </div>
  </header>
</template>