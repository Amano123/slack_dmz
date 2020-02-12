//slack command user token
var token = PropertiesService.getScriptProperties().getProperty("token");

//Token for posting anonymous account
var access_token = PropertiesService.getScriptProperties().getProperty("access_token");

//何でも実況j
var channel_id = PropertiesService.getScriptProperties().getProperty("channel_id");

//管理者のid
var root_user_id = PropertiesService.getScriptProperties().getProperty("root_user_id");

//url postMessage
var url_postMessage = 'https://slack.com/api/chat.postMessage';

//user_idを暗号化する。
function base64Encode(id){
//  var id = "UA0V503S4";
  var encoded = Utilities.base64EncodeWebSafe(id);
  //Logger.log(encoded.slice(0,6));
  return encoded.slice(0,6);
}


function doPost(e) {
  var parameter = e.parameter
  var slack_user = parameter.user_id;
  var slack_text = parameter.text;
  var verificationToken = e.parameter.token;
  
  //Authentication
  if (verificationToken != token) { 
    throw new Error('Invalid token');
  }
  
  if (slack_text == ""){
    return return_message("[error] You need text");
  }
  
  var nunber = spreadsheet(parameter);
  var id = base64Encode(parameter.user_id);
  
  var data = {
    'channel' : channel_id,
    'text' : slack_text,
    "username" : nunber + 1 + " 名前：以下、VIPがお送りします:" + id
  };
       
  var options = {
    'method' : 'post',
    'contentType' : 'application/json; charset=UTF-8',
    'headers' : {'Authorization': 'Bearer '+ access_token},
    'payload' : JSON.stringify(data)
  };
  
  var response = UrlFetchApp.fetch(url_postMessage, options)
  
  if (slack_user = root_user_id){
    return return_message(response);
  }
  return reply_to_slack(response);
  }