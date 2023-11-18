import { useEffect, useState } from 'react';

function useSearch(list) {
  const [filteredList, setFilteredList] = useState([]);
  const [filterYear, setFilterYear] = useState('0000');

  useEffect(() => {
    setFilteredList(filterItems(list));
  }, [filterYear]);

  function filterItems(newArr) {
    if (filterYear === '0000') {
      const newItems = newArr.sort((a, b) => a.date > b.date);
      setFilteredList(newItems);
      //   return;
      return newItems;
    }
    let newList = newArr.filter((item) => {
      let year = new Date(item.date).getFullYear();
      return year == filterYear;
    });
    setFilteredList(newList);
    return newList;
  }
  //
  function yearsToSelect() {
    let years = list.map((element) => {
      if (element.year === null) {
        console.log(element);
      }
      return new Date(element.date).getFullYear();
    });
    years = [...new Set(years)];

    return years.sort().map((year) => {
      return (
        <option key={'year-' + year} value={year}>
          {' '}
          {year}
        </option>
      );
    });
  }

  function handleChange(e) {
    setFilterYear(e.target.value);
  }

  function SearchComponent() {
    return (
      <div id="search-container">
        <label htmlFor="year-select">
          <h2>السنة</h2>
        </label>
        <select id="year-select" onChange={handleChange} value={filterYear}>
          <option value="0000">جميع</option>
          {yearsToSelect(filteredList)}
        </select>
      </div>
    );
  }

  return {
    SearchComponent,
    filteredList,
    filterItems,
  };
}

export default useSearch;
