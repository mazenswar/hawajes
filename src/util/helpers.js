export function translateDateToArabicString(dateEn) {
  const date = new Date(dateEn.replace(/-/g, '/').replace(/T.+/, ''));
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + 1);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const dateString = newDate.toLocaleDateString('ar-EG', options);

  return dateString;
}
