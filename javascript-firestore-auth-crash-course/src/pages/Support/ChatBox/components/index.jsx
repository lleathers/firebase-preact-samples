/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useRef, useEffect } from 'preact/hooks'
import styles from '../ChatBox.module.css'
import { identifyUser } from '../../../../firebase'

export function ChatInput(props) {
  const { onEnter } = props
  return (
    <div class={styles.inputContainer}>
      <input
        type="text"
        placeholder="Type your message here to get started..."
        onKeyUp={(keyEvent) => {
          if (keyEvent.key === 'Enter') {
            onEnter(keyEvent.target.value)
            keyEvent.target.value = ''
          }
        }}
      />
    </div>
  )
}

export function ChatContainer(props) {
  const { children } = props
  return <div class={styles.container}>{children}</div>
}

export function ChatList(props) {
  const { messages, user, name } = props
  console.log("What is the username from chatlist props: ", name)
  const listEl = useRef(null)
  const username = name
  // const usernameid = messages.userid
  console.log("What is the username: ", username)
  // console.log("What is the userid from messages: ", usernameid)
  useEffect(() => {
    const scrollHeight = listEl.current.scrollHeight
    listEl.current.scroll(0, scrollHeight)
  }, [messages.length])
  return (
    <div class={styles.scrollContainer}>
      <ul class={styles.chatList} ref={listEl}>
        {messages.map((message) => { 
          return <ChatMessage key={message.id} message={message} name={username} />
        })}
      </ul>
    </div>
  )
}

export function ChatMessage(props) {
  const { message, name } = props
  let { id, text, role, isDelivered, userid } = message

  // const { trial } = identifyUser({ userid });
  // trial(roleFromDb => {
  // })

  console.log("What is the specific role from users collection in db?: ", identifyUser(userid))

  role = role == null ? 'other' : role;
  const capitalizedRole = role.replace(
    role.charAt(0),
    role.charAt(0).toUpperCase(),
  )
  const pendingClass = !isDelivered ? 'Pending' : ''
  const parentClass = styles[`messageContainer${capitalizedRole}`]
  const messageClass = styles[`message${capitalizedRole}${pendingClass}`]
  const deliveredClass = styles[`delivered${capitalizedRole}`];
  const identityClass = styles[`identity`];
  return (
    <li id={id} class={parentClass}>
      <div class={identityClass}>{role != "self" ? identifyUser().role : ""}</div>
      <div class={identityClass}>{role == "self" ? "me: " + name : userid }</div>
      <div class={messageClass}>{text}</div>
      {<div class={deliveredClass}>{isDelivered ? "Delivered" : ""}</div>}
    </li>
  )
}
