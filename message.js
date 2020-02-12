function reply_to_slack(response) {
  var json = JSON.parse(response.getContentText());
  //メッセージの送信が完了したかどうか
  if (json["ok"] == true){
    var words = "Message sent successfully";
  }else{
    var words = "you message error";
  }
  
  return return_message(words);
}

function return_message(text){
  return ContentService.createTextOutput(text).setMimeType(ContentService.MimeType.JSON);
}

