// Import required modules
const fs = require('fs');
const csv = require('csv-parser');
const _ = require('lodash');

// Initialize an empty array to store quotes
let quotes = [];

// Read the CSV file and parse its contents
fs.createReadStream('quotes.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Add each row (quote) to the quotes array
    quotes.push(row);
  })
  .on('end', () => {
    // Log a message when the file has been successfully processed
    console.log('CSV file successfully processed');
  });

// Define a function to get a random quote from the quotes array
function getRandomQuote() {
  // Generate a random index within the range of the quotes array
  const randomIndex = _.random(0, quotes.length - 1);
  // Return the quote object at the random index
  return quotes[randomIndex];
}

// Export the getRandomQuote function for use in other modules
module.exports = getRandomQuote;
