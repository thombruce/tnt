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
  // validate: {},
  schema: {
    type: Object,
    default: (props) => {
      let yupRules
      const final = yup.object(
        Object.assign(...props.body.map((o) => {
          if (!formComponents.includes(Object.keys(o)[0])) return {}

          let b = Object.values(o)[0]

          yupRules = yupAuto(b.validate?.format || b.type)

          // NOTE: String(props.validate[method]) !== 'true'
          //       This will have unintended consequences if, for instance, the user
          //       wants to invoke the literal string 'true' for, say, a matches regex.
          // TODO: Is there a better way?
          Object.keys(b.validate || {}).forEach(method => yupRules = yupRules[method](String(b.validate[method]) !== 'true' ? b.validate[method] : undefined))
          return { [b.name]: yupRules.label(b.label) }
        }))
      )
      return final
    }
  }
})
</script>

<template lang="pug">
VeeForm.space-y-5(
  :class="fullErrors ? 'full-errors' : undefined"
  :action="action"
  :method="method"
  :validation-schema="schema"
  v-slot="{ errors }"
)
  slot
  template(v-for="component in body")
    FromSchema(:component="component")
</template>
