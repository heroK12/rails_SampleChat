import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create("RoomChannel", {
  
  connected() {
    console.log("connected");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },
  // データ受け取ったタイミング
  received(data) {
    const messages = document.getElementById('messages');
    messages.innerHTML += `<p>${data.message}</p>`
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function(message) {
    return this.perform('speak',{message: message});
  }
});

$(document).on('keypress', '#content', function(event) {
  if (event.keyCode === 13) {
    chatChannel.speak(event.target.value);
    event.target.value = '';
    return event.preventDefault();
  }
});
