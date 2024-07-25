<script setup>
const props = defineProps({
  action: {
    type: String
  },
  method: {
    type: String
  },
  body: {
    type: Array
  },
  fullErrors: {
    type: Boolean
  },
  // TODO: Enable use of validate: on Form, which may contain all of the forms
  //       rules. To achieve this, ensure that the name, label, format and
  //       validations for each input is passed to the form's validate attribute.
  //       E.g.
  //       validate:
  //         - name: text # (required)
  //           label: Text # (optional)
  //           format: string # (required)
  //           rules:
  //             min: 6
  //             max: 15
  //             matches: banana
  //             required: true
  //
  //       Arguably format may be left absent from the object in order to
  //       default to .mixed() but it should be considered bad practice
  //       due to likelihood of accidental omission and unexpected failures
  //       of validations.
  schema: {
    type: Object,
  }
})


const computedSchema = computed(() => {
  if (props.schema?.spec) return props.schema

  let yupRules

  const final = yup.object(
    // TODO: This needs a bit of a total rewrite...
    //       The below should apply if no schema is provided.
    //       If a schema is provided that doesn't have .spec
    //       then we ought to construct the schema from that instead...
    //       potentially also merging in properties from body if/when
    //       relevant. Prioritising which? That's a damn good question.
    Object.assign(...props.body.map((o) => {
      if (!formComponents.includes(Object.keys(o)[0])) return {}

      let b = Object.values(o)[0]

      yupRules = yupAuto(b.rules?.format || b.type)

      // NOTE: String(props.validate[method]) !== 'true'
      //       This will have unintended consequences if, for instance, the user
      //       wants to invoke the literal string 'true' for, say, a matches regex.
      // TODO: Is there a better way?
      Object.entries(b.rules || {}).forEach(([method, arg]) => yupRules = yupRules[method](String(arg) !== 'true' ? arg : undefined))
      return { [b.name]: yupRules.label(b.label) }
    }))
  )
  console.log(final)
  return final
})
</script>

<template lang="pug">
VeeForm.space-y-5(
  :class="fullErrors ? 'full-errors' : undefined"
  :action="action"
  :method="method"
  :validation-schema="computedSchema"
  v-slot="{ errors }"
)
  slot
  template(v-for="component in body")
    FromSchema(:component="component")
</template>
