class RoomChannel < ApplicationCable::Channel
  # 監視したタイミングで実行
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # ActionCable.server.broadcast 'room_channel',message: data['message']
    Message.create! content: data['message']
  end
end
