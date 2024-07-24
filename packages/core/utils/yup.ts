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

export const yupAuto = (type) => {
  switch(type) {
    case 'text':
    case 'string':
    case 'password':
      return yup.string()
    case 'email':
      return yup.string().email()
    case 'url':
      return yup.string().url()
    case 'tel':
      return yup.string().tel()
    // TODO: yup.string().datetime() apparently has greater customisability than
    //       yup.date(), however the below still does not validate a time or a
    //       week properly. Either... customise the regex for these values or
    //       create a new schema extension for time and for week just as I've
    //       done for tel(). This extension may extend string().
    // case 'time':
    // case 'week':
    //   return yup.string().datetime()
    //   break
    case 'number':
      return yup.number()
    case 'date':
    case 'datetime-local':
    case 'month':
      return yup.date()
    default:
      return yup.mixed()
  }
}

export default yup
