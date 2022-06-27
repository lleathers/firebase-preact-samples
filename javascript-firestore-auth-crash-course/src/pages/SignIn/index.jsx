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

import { Component } from 'preact'
import { SplitGrid } from '@/components/Grid'
import { SignInContainer, Heading } from './Container'
import { SignInSocial } from './Social'
import { SignUpForm, SignInForm } from './Form'
import { Painting } from './Painting'
import { createAccount, signIn } from './auth';
import { SignUpButton } from '@/components/Buttons'

export class SignIn extends Component {
  render(props, state) {
    console.log("at SignIn, isSignIn value is: ", props.isSignIn)
    return (
        <SplitGrid appendClass="theme-dark">
        
          <SignInContainer user={props.user}>
            <Heading>Sign in to your account</Heading>
            <SignInSocial
              onClick={(event, type) => {
                console.log({ type })
                signIn({ type });
              }}
            />

            <SignInForm onSubmit={(user) => {
              signIn({ type: 'email', ...user });
            }} />

            <SignUpButton onClick={() => {
              const isSignIn = false
              this.props.setIsSignIn(isSignIn)
              }}
              text = "Sign Up"
            />

          </SignInContainer>

          <Painting />
        </SplitGrid>
    )
  }
}

export class SignUp extends Component {
  render(props, state) {
    return (
      <SplitGrid appendClass="theme-dark">
        
        <SignInContainer>
          <Heading>Create an account</Heading>
          <SignInSocial
            onClick={(event, type) => {
              console.log({ type })
              const isSignIn = true
              this.props.setIsSignIn(isSignIn)
              createAccount({ type });
            }}
          />
          <SignUpForm onSubmit={(user) => {
            createAccount({ type: 'email', ...user });
          }} />
        </SignInContainer>

        <Painting />
      </SplitGrid>
    )
  }
}
