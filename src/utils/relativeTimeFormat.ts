export const relativeTimeFormat = (date: string) => {
  const now = Date.now()
  const target = new Date(date).getTime()
  const diffInSeconds = Math.floor((now - target) / 1000)

  const rtf = new Intl.RelativeTimeFormat('es-CL', { numeric: 'auto' })

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
    ['second', 1]
  ]

  for (const [unit, secondsInUnit] of units) {
    const delta = Math.floor(diffInSeconds / secondsInUnit)
    if (delta >= 1) {
      return rtf.format(-delta, unit)
    }
  }

  return 'hace unos segundos'
}
