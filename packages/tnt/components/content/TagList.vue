<script setup>
defineProps(['taxonomy'])
const { page } = useContent()
</script>

<template>
  <dl>
    <dt>{{ _startCase(taxonomy) }}</dt>
    <dd>
      <ul>
        <li v-for="tag in page[taxonomy]" :key="tag">
          <NuxtLink :to="`/${taxonomy}/${_kebabCase(tag)}`">{{ tag }}</NuxtLink>
        </li>
      </ul>
    </dd>
  </dl>
</template>
