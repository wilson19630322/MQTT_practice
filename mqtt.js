

// Create a client instance
client = new Paho.MQTT.Client("wss://iot.eclipse.org:443/ws", "aaa1byhhihuibbddd");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");

}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
  var output = document.getElementById("txtMsgs");
  output.innerHTML = message.payloadString + "<br>" +output.innerHTML   ;
  
}
function subTopic( )
{ 
    var topic = document.getElementById("txtSubTopics").value;
    client.subscribe(topic);
    console.log(topic);
};
function pubTopic( )
{ 
    var topic = document.getElementById("txtPubTopics").value;
    var msg = document.getElementById("txtPubMsg").value;
    message = new Paho.MQTT.Message(msg);
  message.destinationName = topic;
  client.send(message);
   // alert("OK") 
};