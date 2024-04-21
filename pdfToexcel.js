const pdfToExcelGenerator = require('pdf-to-excel');
try {
  pdfToExcelGenerator.genXlsx('test.pdf', 'output.xlsx')
} catch (error) {
  console.log("The error is: ", error)
}