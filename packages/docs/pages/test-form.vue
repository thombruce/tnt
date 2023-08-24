<script setup>
  const TntCheckboxModel = ref(true)
  const TntCheckboxWithOptionsModel = ref(undefined)
  const TntToggleModel = ref(undefined)
  const TntToggleWithOptionsModel = ref(undefined)
  const TntRadioModel = ref(undefined)
  const TntRangeModel = ref(50)
  const TntRatingModel = ref(undefined)
  const TntTextareaModel = ref('This is a text area')
</script>

<template>
  <TntForm>
    <TntCheckbox v-model="TntCheckboxModel" />
    {{ TntCheckboxModel }}

    <TntCheckbox v-model="TntCheckboxWithOptionsModel" /><!-- With options -->
    {{ TntCheckboxWithOptionsModel }}

    <TntToggle v-model="TntToggleModel" />
    {{ TntToggleModel }}

    <TntToggle v-model="TntToggleWithOptionsModel" /><!-- With options -->
    {{ TntToggleWithOptionsModel }}

    <TntRadio v-model="TntRadioModel" />
    {{ TntRadioModel }}

    <TntRange v-model="TntRangeModel" />
    {{ TntRangeModel }}

    <TntRating v-model="TntRatingModel" />
    {{ TntRatingModel }}

    <TntTextarea v-model="TntTextareaModel" />
    {{ TntTextareaModel }}

    <TntButton />
  </TntForm>
</template>