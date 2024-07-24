// TODO: Consider whether these array constants will actually be reused.
//       If not, move them to components/global/Tnt/Form.vue

// These components can receive validations via Vee-validate and Yup
export const formComponents = Object.freeze([
  'input',
  'file',
  'select',
  'combobox',
  'checkbox',
  'radio',
  'range',
  'textarea'
])

// These components must be prepended by tnt- when used in templates
export const tntComponents = Object.freeze([
  'button',
  'form',
  'img',
  'search',
  ...formComponents,
])
