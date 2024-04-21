# PDF to Excel Converter

This is a simple Node.js script that converts PDF files to Excel files (.xlsx) using the `pdf-to-excel` library.

## Installation

First, make sure you have Node.js installed on your system. Then, install the `pdf-to-excel` library by running the following command in your terminal:

```
npm install pdf-to-excel
```

## Usage

1. Make sure you have a PDF file you want to convert. In this example, the PDF file is named `test.pdf`.

2. Run the `pdfToexcel.js` script using Node.js:

```
node pdfToexcel.js
```

3. The script will convert the PDF file into an Excel file named `output.xlsx` in the same directory.

## Sample Code

```javascript
const pdfToExcelGenerator = require('pdf-to-excel');

try {
  pdfToExcelGenerator.genXlsx('test.pdf', 'output.xlsx');
} catch (error) {
  console.log("The error is: ", error);
}
```

That's it! Now you can easily convert PDF files to Excel with this script.
