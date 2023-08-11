const parseOrderDate = (timestamp: string) => {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const dateObj = new Date(parseInt(timestamp));
  const formattedDate =
    dateObj.getDate() +
    ' ' +
    months[dateObj.getMonth()] +
    ' ' +
    dateObj.getFullYear() +'г.';

  return formattedDate;
};

export { parseOrderDate };
