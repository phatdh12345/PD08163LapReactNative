const oldData = [
    { code: 'ab', name: 'Son moi' },
    { code: 'ac', name: 'Sua rua mat' },
    { code: null, name: null },
    { code: null, name: null },
  ];
  
  function arrayToObject(arr) {
    const filteredData = arr.filter(item => item.code !== null);
    const mappedData = filteredData.map(item => [item.code, item.name]);
    return Object.fromEntries(mappedData);
  }
  
  const newData = arrayToObject(oldData);
  console.log(newData);