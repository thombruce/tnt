import * as yup from 'yup'

yup.addMethod(yup.Schema, 'confirms', function confirm(field) {
  return this.oneOf(
    [yup.ref(field)],
    `Must match ${yup.ref(field).key}`
  )
})

export default yup
