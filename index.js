var googleSheets = require('google-spreadsheet');
var dateTime = require('node-datetime');
var dt = dateTime.create();
var currDateTime = dt.format('Y-m-d H:M:S');

var Logger = function(doc_id,creds){  
    var doc = new googleSheets(doc_id);
    
    this.log = function(id, message, timestamp=currDateTime ,sheet_id=1) {        
        doc.useServiceAccountAuth(creds,(err)=>{
            if(err) console.log(err);
            //Adding Row with the Log Message
            doc.addRow(sheet_id,{"Log Id": id,"Log Message": message,"Log Time": timestamp},(err)=>{
                if(err) console.log(err);
            });
        });
    }
}

module.exports=Logger;