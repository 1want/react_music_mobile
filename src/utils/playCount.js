export default function play(num) {
  if (num > 10000000) {
    return parseInt(num / 10000) + '万'
  }
  if (num > 1000000) {
    return parseInt(num / 10000) + '万'
  }
  if (num > 100000) {
    return parseInt(num / 10000) + '万'
  }
}
