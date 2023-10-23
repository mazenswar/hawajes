export function translateDateToArabicString(dateEn) {
  const date = new Date(dateEn.replace(/-/g, '/').replace(/T.+/, ''));
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const dateString = date.toLocaleDateString('ar-EG', options);

  return dateString;
}
