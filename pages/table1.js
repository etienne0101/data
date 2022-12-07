// Use the fetch() function to retrieve the data from the JSON file
fetch('data/table1.json')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Use the filter() function to search the data
    const results = data.filter(item => item.field1 === 'value1');

    // Loop through the results and display them on the page
    results.forEach(result => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>Field 1: ${result.field1}</p>
        <p>Field 2: ${result.field2}</p>
        <p>Field 3: ${result.field3}</p>
      `;
      document.body.appendChild(div);
    });
  });
