var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
     app.receivedEvent('deviceready');
      console.log("ready  ")
      
      // Read NDEF formatted NFC Tags
      nfc.addTagDiscoveredListener (
          function (nfcEvent) {
            
              $(".scan-area").css("background", "lightgreen");
              $("h2#waiting").html("Success");
              $("p#scanned-info").html("Well done");
            
            console.log(nfcEvent);
              
              var tag = nfcEvent.tag,
              ndefMessage = tag.ndefMessage;
              //console.log(tag);
              //console.log(ndefMessage);
      
              // dump the raw json of the message
              // note: real code will need to decode
              // the payload from each record
              //console.log (JSON.stringify(ndefMessage));
      
              // assuming the first record in the message has
              // a payload that can be converted to a string.
              //console.log(nfc.bytesToString(ndefMessage[0].payload).substring(3));
          },
          function () { // success callback
              console.log("Ready to scan");
          },
          function (error) { // error callback
              console.log("Error adding NDEF listener " + JSON.stringify(error));
          }
      );
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();