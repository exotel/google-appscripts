//Id of the spreadsheet 
//for spreadsheet https://docs.google.com/spreadsheets/d/1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa"
// has id as 1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa
var ID = "1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa"
  //Nme of the specific sheet inside the spreadsheet where data to  be dumped
var SHEET_NAME = "number_sheet"

//Nme of the specific sheet inside the spreadsheet where numbers are available
function doGet(e) {
  var params = JSON.parse(e.parameters);
  var abc = e.parameters["digits"][0]
  var output = retrieveData(abc)
  return ContentService.createTextOutput(output)
}

//retrieveData : Function to retrieve data from sheet
function retrieveData(paramm) {
  var sheet = SpreadsheetApp.openById(ID).getSheetByName(SHEET_NAME)
  var data = sheet.getDataRange().getValues();
  for (var j in data) {
    if (paramm == data[j][0]) {
      return data[j][1]
    }
  }
  return "NO DATA FOUND"
}

