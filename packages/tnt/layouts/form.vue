<script setup>
</script>

<template>
  <main class="my-10">
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>

        <TntForm
          :action="doc.action"
          :method="doc.method"
          :body="doc.body"
        />
      </template>
    </ContentDoc>
  </main>
</template>
