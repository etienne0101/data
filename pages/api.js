// Replace "API_URL" with the actual URL of the API
const API_URL = "https://www.boredapi.com/api/activity";

// Function to fetch the data from the API and display it in the HTML page
const getData = async () => {
  try {
    // Fetch the data from the API
    const response = await fetch(API_URL);
    const data = await response.json();

    // Select the div where the data will be displayed
    const resultDiv = document.querySelector("#result");

    // Loop through the data and create a list of items
    let resultHTML = "<ul>";
    data.forEach(item => {
      resultHTML += `<li>${item.name}: ${item.value}</li>`;
    });
    resultHTML += "</ul>";

    // Add the list of items to the result div
    resultDiv.innerHTML = resultHTML;
  } catch (error) {
    console.error(error);
  }
};

// Call the getData function when the page loads
getData();
