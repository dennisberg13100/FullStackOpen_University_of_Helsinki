import React from 'react'

const Message = ( {message}) => {
  console.log(message)
  console.log(message !== undefined)
  if(message !== null) {
    return(
      <div className={message.type}>
        <p>{message.content}</p>
      </div>
    )
  }
  return null
}

export default Message