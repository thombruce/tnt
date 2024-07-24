<script setup>
import * as yup from 'yup'

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
  // TODO: fullErrors currently does nothing here
  fullErrors: {},
  // validate: {},
  schema: {
    type: Object,
    default: (props) => {
      // TODO: Placing this here avoids it not being defined in time
      //       but this is getting way too heavy
      yup.addMethod(yup.Schema, 'confirms', function confirm(field) {
        return this.oneOf(
          [yup.ref(field)],
          `Must match ${yup.ref(field).key}`
        )
      })
      let yupRules
      const final = yup.object(
        Object.assign(...props.body.map((o) => {
          let b = Object.values(o)[0]
          switch(b.validate?.format || b.type) {
            case 'text':
            case 'string':
            case 'password':
              yupRules = yup.string()
              break
            case 'email':
              yupRules = yup.string().email()
              break
            case 'url':
              yupRules = yup.string().url()
              break
            default:
              yupRules = yup.mixed()
          }
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
VeeForm.space-y-5(:action="action" :method="method" :validation-schema="schema" v-slot="{ errors }")
  slot
  template(v-for="component in body")
    component(:is="`tnt-${_keys(component)[0]}`" v-bind="_omit(_values(component)[0], ['validate', 'rules'])")
</template>
