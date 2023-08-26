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

<!--
  TODO: Support markdown. Maybe by adding a <slot /> to TntForm as alternative to :body
-->
