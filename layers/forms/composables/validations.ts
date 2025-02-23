import _omit from "lodash/omit"
import { yupAuto } from "../utils/yup"

export const useValidations = (format: string, rules: any = {}, label: string | undefined) => {
  if (rules.spec) return rules

  let yupRules: any

  yupRules = yupAuto(format)
  Object.entries(_omit(rules, ['format', 'label'])).forEach(([method, arg]) => yupRules = yupRules[method](String(arg) !== 'true' ? arg : undefined))

  return label ? yupRules.label(label) : yupRules
}
