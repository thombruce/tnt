<script setup>
defineProps(['taxonomy'])
const { page } = useContent()
</script>

<template>
  <dl>
    <dt>{{ _startCase(taxonomy) }}</dt>
    <dd>
      <ul>
        <li v-if="typeof page[taxonomy] === 'string'">
          <NuxtLink :to="`/~${taxonomy}/${_kebabCase(page[taxonomy])}`">{{ page[taxonomy] }}</NuxtLink>
        </li>
        <li v-else v-for="tag in page[taxonomy]" :key="tag">
          <NuxtLink :to="`/~${taxonomy}/${_kebabCase(tag)}`">{{ tag }}</NuxtLink>
        </li>
      </ul>
    </dd>
  </dl>
</template>
