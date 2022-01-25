export type Locales = 'en-EN' | 'id-ID' | 'de-DE'
export type FormatCurrencies = (currency: number | bigint, locales?: Locales, config?: Intl.NumberFormatOptions) => string

const formatCurrencies: FormatCurrencies = (currency, locales, config) => {
  const formatter = new Intl.NumberFormat(
    locales ?? 'en-EN',
    config ?? {
      currency: 'USD',
      compactDisplay: 'short',
      style: 'currency',
      
    }
  )

  return formatter.format(currency)
}

export default formatCurrencies
