import * as yup from 'yup'

/* METHODS */
/* Any */
yup.addMethod(yup.Schema, 'confirms', function confirm(sibling) {
  return this.oneOf(
    [yup.ref(sibling)],
    (field) => `${field.label} must match ${yup.ref(sibling).key}`
  )
})

/* String */
yup.addMethod(yup.StringSchema, 'tel', function tel() {
  return this.matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    (field) => `${field.label} must be a valid telephone number`
  )
})

/* File */
yup.addMethod(yup.MixedSchema, 'size', function size(max) {
  return this.test(
    'file-size',
    (field) => `${field.label} must not exceed ${max}`,
    (value: any) => {
      if (!value) return true
      return value.size <= max
    }
  )
})

yup.addMethod(yup.MixedSchema, 'ext', function ext(exts) {
  exts = [exts].flat()

  return this.test(
    'file-ext',
    (field) => {
      return exts.length > 1
        ? `${field.label} extension must be one of ${exts.join(', ')}`
        : `${field.label} extension must be ${exts.join(', ')}`
    },
    (value: any) => {
      if (!value) return true
      return exts.some((ext) => value.name.endsWith(ext))
    }
  )
})

/* UTILITIES */
export const yupAuto = (type) => {
  switch(type) {
    case 'string':
    case 'text':
    case 'password':
    case 'select':
    case 'combobox':
    case 'textarea':
    case 'radio':
    case 'toggle':
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
    case 'range':
      return yup.number().nullable().transform((curr, orig) => orig === '' ? null : curr)
    case 'date':
    case 'datetime-local':
    case 'month':
      return yup.date().nullable().transform((curr, orig) => orig === '' ? null : curr)
    case 'array':
    case 'checkbox':
      return yup.array()
    case 'file':
    default:
      return yup.mixed()
  }
}

export default yup
