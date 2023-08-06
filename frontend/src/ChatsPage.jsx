import React from 'react'
import {PrettyChatWindow} from 'react-chat-engine-pretty';

function ChatsPage(props) {
  return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow 
        projectId="Your_Project_ID"
        username= {props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  )
}

export default ChatsPage