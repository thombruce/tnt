<script setup>
  const TntCheckboxWithOptionsModel = ref(undefined)
  const TntToggleWithOptionsModel = ref(undefined)
  const TntRadioModel = ref(undefined)
  const TntRangeModel = ref(50)
  const TntRatingModel = ref(undefined)
</script>

<template>
  <TntForm>
    <TntCheckbox v-model="TntCheckboxWithOptionsModel" :options="['One', 'Two', 'Three']" /><!-- With options -->
    {{ TntCheckboxWithOptionsModel }}

    <TntToggle v-model="TntToggleWithOptionsModel" :options="['One', 'Two', 'Three']" /><!-- With options -->
    {{ TntToggleWithOptionsModel }}

    <!--
      TODO: Radio requires `options`.
      Rework radio so that it works with single values.
    -->
    <TntRadio v-model="TntRadioModel" :options="['One', 'Two']" />
    {{ TntRadioModel }}

    <TntRange v-model="TntRangeModel" />
    {{ TntRangeModel }}

    <!--
      TODO: Rating uses Radio.
      Rework so that TntRating uses TntRadio.
    -->
    <TntRating v-model="TntRatingModel" />
    {{ TntRatingModel }}

    <TntButton />
  </TntForm>
</template>