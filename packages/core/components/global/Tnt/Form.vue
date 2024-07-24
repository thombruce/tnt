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
VeeForm.space-y-5(:action="action" :method="method" :validation-schema="schema" v-slot="{ errors }")
  slot
  template(v-for="component in body")
    component(
      :is="tntComponents.includes(_keys(component)[0]) ? `tnt-${_keys(component)[0]}` : _keys(component)[0]"
      v-bind="{ ..._omit(_values(component)[0], ['validate', 'rules']), ...{ fullErrors } }"
    )
      template(v-if="typeof _values(component)[0] === 'string'") {{ _values(component)[0] }}
      template(v-else-if="_keys(component).includes('body')") {{ component.body }}
</template>
