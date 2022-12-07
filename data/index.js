// Parse the JSON data into a JavaScript object
const people = JSON.parse(jsonData);

// Get a reference to the table element on the page
const table = document.querySelector('#people-table');

// Create an HTML table row for each person
people.forEach(person => {
  const row = document.createElement('tr');

  // Create a cell for each piece of person data
  Object.keys(person).forEach(key => {
    const cell = document.createElement('td');
    cell.innerText = person[key];
    row.appendChild(cell);
  });

  // Add the row to the table
  table.appendChild(row);
});

// Get a reference to the form controls on the page
const firstNameInput = document.querySelector('#first-name-input');
const lastNameInput = document.querySelector('#last-name-input');

// Listen for changes to the form controls
firstNameInput.addEventListener('change', handleFilterChange);
lastNameInput.addEventListener('change', handleFilterChange);

function handleFilterChange() {
  // Get the current values of the form controls
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Filter the data to only include people who match the selected criteria
  const filteredPeople = people.filter(person => {
    return (
      (!firstName || person.firstName === firstName) &&
      (!lastName || person.lastName === lastName)
    );
  });

  // Update the table to only include the filtered data
  table.innerHTML = ''; // Clear the table
  filteredPeople.forEach(person => {
    // Create a row for the person
    // (This is the same code as above)
    const row = document.createElement('tr');
    Object.keys(person).forEach(key => {
      const cell = document.createElement('td');
      cell.innerText = person[key];
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
}
