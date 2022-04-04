class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "some_channel"
  end

  def unsubscribed
    Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    ChatMessage.create!(
      content: data['chat_message'],
      user_id: current_user.id,
      chat_room_id: data['chat_room_id']
    )
  end
end
