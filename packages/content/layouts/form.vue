<template lang="pug">
article.prose
  ContentDoc
    template(#default="{ doc }")
      h1 {{ doc.title }}

      TntForm(
        :action="doc.action"
        :method="doc.method"
        :fullErrors="doc.fullErrors"
        :body="doc.body"
        :schema="doc.schema"
      )
</template>

<!--
  TODO: Support markdown. Maybe by adding a <slot /> to TntForm as alternative to :body
-->
