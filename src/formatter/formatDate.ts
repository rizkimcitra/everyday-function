export type formatDateLocales = 'en-EN' | 'id-ID' | 'es-ES' | 'jp-JP' | 'my-MY' | string

/**
 * a function that will format a date  given,
 * it receives a date object and a locale. also an optional config object of the formatter
 * @param {string | Date} date - the date to format
 * @param {formatDateLocales} locales - The locales to use for formatting.
 * @param {} conf - Intl.DateTimeFormatOptions
 * @returns The formatted date.
 */
const formatDate = (date: string | Date, locales: formatDateLocales, conf?: Intl.DateTimeFormatOptions) => {
  const formatter = new Intl.DateTimeFormat(
    locales,
    conf ?? {
      dateStyle: 'long',
    },
  )
  if (typeof date === 'string') {
    return formatter.format(new Date(date))
  }
  return formatter.format(date)
}

export default formatDate
