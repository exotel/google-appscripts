//Id of the spreadsheet 
//for spreadsheet https://docs.google.com/spreadsheets/d/1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa"
// has id as 1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa
var ID = "1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa"
  //Nme of the specific sheet inside the spreadsheet where data has to be dumped
var SHEET_NAME = "number_sheet"

//GET request handler
function doGet(e) {
  var params = JSON.stringify(e.parameters);
  var sheet = SpreadsheetApp.openById(ID).getSheetByName(SHEET_NAME)
  sheet.appendRow([e.parameters["digits"][0] + ""])
  return ContentService.createTextOutput(params)
}

