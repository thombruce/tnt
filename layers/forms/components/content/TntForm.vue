<script setup lang="ts">
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
  schema: {
    type: Object,
  }
})


const computedSchema = computed(() => {
  if (!props.schema && !props.body) return
  if (props.schema?.spec) return props.schema

  let fromSchema = yup.object(), fromBody = yup.object()

  if (props.schema) {
    fromSchema = yup.object(
      Object.assign({}, ...Object.entries(props.schema).map(([name, rules]) => {
        return { [name]: useValidations(rules.format, rules, rules.label) }
      }))
    )
  }

  // TODO: Since we've not yet implemented fromSchema, this is redundant anyway.
  //       We simply do not use the body prop, but instead construct the inputs
  //       inside of the TntForm default slot.
  //       An if conditional has been commented out below which depends on an
  //       unimplemented composable which listed valid form elements for validation
  //       generation.
  //       It is an open question whether we still want this.
  //       I am leaving the code in place for now, but know that it needs some work
  //       and some additional code that is not yet implemented.
  if (props.body) {
    fromBody = yup.object(
      Object.assign({}, ...props.body.map((o: any) => {
        let component = Object.keys(o)[0]

        // if (!formComponents.includes(component)) return {}

        let b: any = Object.values(o)[0]

        component = component === 'checkbox' ? b.options ? 'array' : 'string' : component

        if (props.schema?.[b.name] && !b.rules) return {}

        return { [b.name]: useValidations(b.rules?.format || b.type || component, b.rules, b.label) }
      }))
    )
  }

  // TODO: This is a crude handling of schema merging. We're skipping the item here
  //       if it both has no rules in its body component AND its name appears in
  //       the schema prop. This does mean that if the body component does have
  //       rules, any defined in the schema will be ignored. We should prefer
  //       some kind of deep merge.
  //       We could use Lodash _merge(schema, bodyRules) to achieve this,
  //       but this would need to be done before the yup.object() handling.
  //       Benefit: It would reduce our yup.object() usage back to one.
  //       But it also requires careful handling of the body rules parts
  //       to reduce their contents to a suitable match for merging with
  //       the schema.
  return fromSchema.concat(fromBody)
})
</script>

<template lang="pug">
VeeForm(
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
