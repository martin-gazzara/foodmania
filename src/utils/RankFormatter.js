export const rankFormatter = (rankValue) => {
  const stringifyValue = rankValue.toString().split('.');
  return `${stringifyValue[0]}${stringifyValue[1] ? '.' + stringifyValue[1].slice(0, 1) : ' '}`
}