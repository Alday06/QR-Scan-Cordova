
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
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        QRScanner.prepare()

    }
};

function getScan() {
    QRScanner.scan(function(err, result){
        if(err){
            alert(err)
        }else{
            alert(result)
            QRScanner.destroy()
            QRScanner.hide()
        }
    })
    QRScanner.show()
}

app.initialize();