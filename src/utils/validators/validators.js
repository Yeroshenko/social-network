export const required = value => {
  if (value) return undefined
  return 'Не соизволите ли вы ввести нужные данные'
}

export const maxLength = max => value => {
  if (value.length > max) return `Максимум ${max} символов`
  return undefined
}
