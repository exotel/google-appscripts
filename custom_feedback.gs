//Id of the spreadsheet 
//for spreadsheet https://docs.google.com/spreadsheets/d/1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa"
// has id as 1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa
var ID = "1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa"
  //Nme of the specific sheet inside the spreadsheet where data to  be dumped
var SHEET_NAME = "number_sheet"
  //Nme of the specific sheet inside the spreadsheet where numbers are available
function doGet(e) {
  var params = JSON.stringify(e.parameters);
  var jsonMapping = JSON.parse(params)
  var sheet = SpreadsheetApp.openById(ID).getSheetByName(SHEET_NAME)
  sheet.appendRow([jsonMapping["digits"][0], jsonMapping["From"][0]])
  return ContentService.createTextOutput(e.parameters)
}

