import * as yup from 'yup'

yup.addMethod(yup.Schema, 'confirms', function confirm(field) {
  return this.oneOf(
    [yup.ref(field)],
    (values) => `${values.label} must match ${yup.ref(field).key}`
  )
})

yup.addMethod(yup.StringSchema, 'tel', function tel(field) {
  return this.matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    (values) => `${values.label} must be a valid telephone number`
  )
})

export default yup
