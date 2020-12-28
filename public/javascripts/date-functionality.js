module.exports = {
  shortDate
}

const weekdays = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function shortDate(originalDate) {
  return `${originalDate.getMonth() + 1}/${(originalDate.getDay() + 1) * (originalDate.getWeek + 1)}`;
}