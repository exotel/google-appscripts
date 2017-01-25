//Id of the spreadsheet 
//for spreadsheet https://docs.google.com/spreadsheets/d/1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa"
// has id as 1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa
var ID = "1BsalnnI5_yBRke6brWk5G54Qwm5dgonN_YnLXJa"
  //Nme of the specific sheet inside the spreadsheet where data to  be dumped
var SHEET_NAME = "number_sheet"
  //The id of the exotel call flow to with which calls may be made
var FLOW_ID = 1234
  //The Exotel number with which calls has to be made
var EXOTEL_VN = "08907965331"
  //The exotel account sid
var EXOTEL_SID = "spartansaccount"
  //The exotel API token which you may find in the API section of https://my.exotel.in
var EXOTEL_TOKEN = "spartanstokenblahblahblah"

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Exotel")
    .addItem("Call All Numbers", "callCampaign")
    .addToUi()
}

//callCampaign: Main function to call the numbers given in the sheet
function callCampaign() {
  var sheet = SpreadsheetApp.openById(ID).getSheetByName(SHEET_NAME)
  var data = sheet.getDataRange().getValues();
  for (j in data) {
    makeCall("" + data[j][0]) //Calling the makeCall function that makes calls.
    Logger.log("" + data[j][0])
  }
}

function makeCall(number) { // Fuction to trigger a post request to Exotel endpoint with the
  //required prameters
  var data = {
    "From": number,
    "Url": "http://my.exotel.in/exoml/start/" + FLOW_ID,
    "CallType": "trans",
    "CallerId": EXOTEL_VN,
  };
  // var payload = JSON.stringify(data);
  var headers = { //Defining all the headers for the post request
    'Accept-language': 'en',
    'accept': 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
    "Authorization": "Basic " + Utilities.base64Encode(EXOTEL_SID + ":" + EXOTEL_TOKEN)
  };
  var url = "https://twilix.exotel.in/v1/Accounts/" + EXOTEL_SID + "/Calls/connect.json"
  var options = {
    'method': 'post',
    'headers': headers,
    'payload': data,
    'muteHttpExceptions': true
  };
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
  return response.getContentText()
}

