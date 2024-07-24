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
  // TODO: fullErrors currently does nothing here
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
          // TODO: Since this switch statement is being used here and on Input.vue
          //       and ought to be identical on both, consider moving it to
          //       the yup util, maybe so that it may be called as yup.auto(type)
          switch(b.validate?.format || b.type) {
            case 'text':
            case 'string':
            case 'password':
            case 'tel':
              yupRules = yup.string()
              break
            case 'email':
              yupRules = yup.string().email()
              break
            case 'url':
              yupRules = yup.string().url()
              break
            // TODO: yup.string().datetime() apparently has greater customisability than
            //       yup.date(), however the below still does not validate a time or a
            //       week properly. Either... customise the regex for these values or
            //       create a new schema extension for time and for week just as you
            //       intend to do for tel(). This extension may extend string().
            // case 'time':
            // case 'week':
            //   yupRules = yup.string().datetime()
            //   break
            case 'number':
              yupRules = yup.number()
              break
            case 'date':
            case 'datetime-local':
            case 'month':
              yupRules = yup.date()
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
    component(
      :is="tntComponents.includes(_keys(component)[0]) ? `tnt-${_keys(component)[0]}` : _keys(component)[0]"
      v-bind="{ ..._omit(_values(component)[0], ['validate', 'rules']), ...{ fullErrors } }"
    )
      template(v-if="typeof _values(component)[0] === 'string'") {{ _values(component)[0] }}
      template(v-else-if="_keys(component).includes('body')") {{ component.body }}
</template>
