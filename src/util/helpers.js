export function translateDateToArabicString(dateEn, publisher) {
  const date = new Date(dateEn.replace(/-/g, '/').replace(/T.+/, ''));
  const newDate = new Date(date);
  // if (publisher === 'sada') {
  //   newDate.setDate(date.getDate());
  // } else {
  //   newDate.setDate(date.getDate() + 1);
  // }
  newDate.setDate(date.getDate());
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const dateString = newDate.toLocaleDateString('ar-EG', options);

  return dateString;
}
