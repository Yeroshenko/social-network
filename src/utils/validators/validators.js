import is from 'is_js'

export const required = value => {
  if (value) return undefined
  return 'Не соизволите ли вы ввести нужные данные'
}

export const maxLength = max => value => {
  if (value.length > max) return `Максимум ${max} символов`
  return undefined
}

export const isEmail = value => {
  if (!is.email(value)) return 'Не соизволите ли вы ввести корректный логин'
  return undefined
}