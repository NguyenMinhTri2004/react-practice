export const formatCurrency = (amount: number, currency: 'VND' | 'USD') => {
  return new Intl.NumberFormat(currency === 'VND' ? 'vi-VN' : 'en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
    .format(amount)
    .replace(/\s₫$/, ' ₫')
    .replace(/^(\$)/, '$ ');
};
