<template lang="pug">
article.prose.w-screen.px-3
  ContentDoc
    template(#default="{ doc }")
      h1 {{ doc.title }}

      TntForm(
        :action="doc.action"
        :method="doc.method"
        :body="doc.body"
      )
</template>

<!--
  TODO: Support markdown. Maybe by adding a <slot /> to TntForm as alternative to :body
-->
