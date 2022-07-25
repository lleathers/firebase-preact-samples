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

import styles from './Content.module.css'
import { getAuth, signOut } from 'firebase/auth'
import { loggingOut } from '../../SignIn/auth'
import brandlabel from '../../../assets/DHbdge001.png'
// import LogoutButton from '@/components/Buttons'

export function AppIdentity() {
  return (
    <identity class={styles.contentRow}>
      <img src={brandlabel}></img> 
    </identity>
  )
}

export function Logout(props) {
  const { heading } = props
  return (
    <div class={styles.contentRow}>
      <h3>{heading}</h3>
      <button class="icon" onClick={() => loggingOut()}>
        {heading}
      </button>
      {/* <LogoutButton onClick={loggingOut()} /> */}
    </div>
  )
}

export function ContentGrid(props) {
  const { children } = props
  return (
    <div class={styles.contentGrid}>
      <div class={styles.content}>{children}</div>
    </div>
  )
}

export function MainContentRow(props) {
  const { heading, children } = props
  return (
    <div class={styles.contentRow}>
      <h3>&gt; {heading}</h3>
      {children}
    </div>
  )
}

export function SubContentRow(props) {
  const { heading, children } = props
  return (
    <div class={styles.contentRow}>
      <h4>&gt; {heading}</h4>
      {children}
    </div>
  )
}
