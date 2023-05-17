# QuotePicker

QuotePicker is a simple, open-source project that provides a set of featured quotes from a local CSV file. This project is designed to be used as an NPM package, which can be installed and used in any Node.js application. Created by the team at  [MustReadQuotes.com](https://mustreadquotes.com)


## Features

- Provides a set of featured quotes in CSV format.\
- Can be used as an NPM package in any Node.js application.\
- Offers a simple API to get a random quote from the featured selection.

## Installation

Before installing, make sure you have Node.js and npm installed on your machine.

You can install the package using npm:

```bash\
npm install quotepicker
```

## Usage

After installing the package, you can use it in your Node.js application:

```javascript\
const qp = require('quotepicker');

console.log(qp.getRandomQuote());
```

This will log a random quote from the featured selection to the console.

## API Reference

The package provides the following API:

- `getRandomQuote()`: Returns a random quote from the featured selection. The quote is returned as an object with `quote` and `author` properties.

## Running QuotePicker

To run QuotePicker, use the following npm command:

```bash\
npm run quote
```

## Contributing

Contributions are welcome! If you have a favorite quote that you would like to add to our featured selection, please create a pull request.

For more information about MustReadQuotes, please check out our website: [MustReadQuotes.com](https://mustreadquotes.com)
  
