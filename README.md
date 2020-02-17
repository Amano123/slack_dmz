# <h2 align="center">SLACK DMZ</h2>
slackで匿名のチャットができるチャンネルを作成するために作成した。  
まだまだ仮なので名前のセンスがある人は考えてみてください

本来サーバーを建てる必要があるのだが、GASをつかうことでサーバーレスで操作できるのではないかと考えてやってみることにした。

## 参考サイト
https://qiita.com/peisuke/items/80984db8b47cd8243019  
上記のサイトを参考にさせていただきました。

## 構成
Slash Commandで、slackの「記入中」の表記を回避できるため、slash commandを使うことにした。

## <img src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif" width="30"> doPost parameter
<center>

```JSON
"parameter": {              
   "channel_name" :"",   
   "user_id"      :"",   
   "user_name"    :"",   
   "trigger_id"   :"",   
   "team_domain"  :"",   
   "team_id"      :"",   
   "text"         :"",   
   "channel_id"   :"",   
   "command"      :"",   
   "token"        :"",   
   "response_url" :""    
   }                     

 ```

</center>

##  <img src="https://cultofthepartyparrot.com/guests/cursedparrot.gif" width="30"> todo

* コテハン＆トリップ
* フシアナさん
* ヘルプ機能  
* etc  
* ~~認証処理~~
* ~~VIPでのslackへの送信~~
* ~~送信後の成功・失敗の表示~~
* ~~ログをスプレットシートに残す~~
* ~~メッセージに番号とID~~
