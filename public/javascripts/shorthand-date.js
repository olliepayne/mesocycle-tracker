const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

function convert(date) {
  let day = weekdays[date.getDay()]
  return `${day}, ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

module.exports = {
  convert
}