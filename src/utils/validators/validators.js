export const required = value => {
  if (value) return undefined
  return 'Так блет, не выебывайся'
}

export const maxLength = max => value => {
  if (value.length > max) return `Максимум ${max} символов`
  return undefined
}
