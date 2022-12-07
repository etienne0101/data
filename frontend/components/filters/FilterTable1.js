// Define the data table
const dataTable = {
    "data": [
        {
            "id": 1,
            "first_name": "John",
            "last_name": "Doe",
            "email": "john.doe@gmail.com"
        },
        {
            "id": 2,
            "first_name": "Jane",
            "last_name": "Doe",
            "email": "jane.doe@gmail.com"
        },
        // Additional rows go here
    ]
};

// Define the filter function
function filterDataTable(dataTable, field, value) {
    return dataTable.data.filter(item => item[field] === value);
}

// Example usage: filter the data table by first name
const filteredData = filterDataTable(dataTable, "first_name", "John");
console.log(filteredData); // Will print the objects with first name "John"
