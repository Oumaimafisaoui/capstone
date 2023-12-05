const seededRandom = seed => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return () => (s = s * a % m) / m;
  };
  
  const fetchAPI = date => {
    console.log('Type and structure of date:', typeof date, date);
  
    if (!(date instanceof Date)) {
      console.error('Invalid date parameter. Expecting a Date object.');
      return [];
    }
  
    let result = [];
    let random = seededRandom(date.getDate());
  
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) result.push(i + ':00');
      if (random() < 0.5) result.push(i + ':30');
    }
  
    return result;
  };
  
  const submitAPI = (formData) => true;
  
  export { fetchAPI, submitAPI };