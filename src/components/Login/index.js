import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import {
  LoginRouteContainer,
  LoginContentContainer,
  WebsiteLogo,
  Form,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  CheckboxInput,
  PasswordLabel,
  LoginButton,
  Error,
  Idp,
} from './styledComponents'

import SystemThemeContext from '../../context/systemThemeContext'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPasswordInput: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      showPasswordInput,
      showErrorMsg,
      errorMsg,
    } = this.state

    const token = Cookies.get('jwt_token')

    if (token) {
      return <Redirect to="/" />
    }
    return (
      <SystemThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const onChangeUsername = event => {
            this.setState({usernameInput: event.target.value})
          }

          const onChangePassword = event => {
            this.setState({passwordInput: event.target.value})
          }

          const onChangeShowPassword = event => {
            this.setState(prevState => ({
              showPasswordInput: !prevState.showPasswordInput,
            }))
          }

          const handleSubmit = async event => {
            event.preventDefault()

            const userDetails = {
              username: usernameInput,
              password: passwordInput,
            }

            const url = 'https://apis.ccbp.in/login'
            const options = {
              method: 'POST',
              body: JSON.stringify(userDetails),
            }

            const response = await fetch(url, options)

            const data = await response.json()

            if (response.ok) {
              Cookies.set('jwt_token', data.jwt_token, {expires: 1})
              this.setState({showErrorMsg: false})
              const {history} = this.props
              history.replace('/')
            } else {
              this.setState({showErrorMsg: true, errorMsg: data.error_msg})
            }
          }

          return (
            <LoginRouteContainer isDark={isDark}>
              <LoginContentContainer isDark={isDark}>
                <WebsiteLogo
                  alt="website logo"
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <Form onSubmit={handleSubmit}>
                  <InputContainer>
                    <Label isDark={isDark} htmlFor="username">
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      placeholder="Username"
                      onChange={onChangeUsername}
                      id="username"
                      value={usernameInput}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label isDark={isDark} htmlFor="password">
                      PASSWORD
                    </Label>
                    <Input
                      type={showPasswordInput ? 'text' : 'password'}
                      placeholder="Password"
                      onChange={onChangePassword}
                      id="password"
                      value={passwordInput}
                    />
                  </InputContainer>
                  <CheckboxContainer>
                    <CheckboxInput
                      type="checkbox"
                      placeholder="Username"
                      onChange={onChangeShowPassword}
                      id="checkbox"
                      checked={showPasswordInput}
                    />
                    <PasswordLabel isDark={isDark} htmlFor="checkbox">
                      Show Password
                    </PasswordLabel>
                  </CheckboxContainer>

                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <Error>*{errorMsg}</Error>}
                </Form>
                <Idp>Username: rahul, Password: rahul@2021</Idp>
              </LoginContentContainer>
            </LoginRouteContainer>
          )
        }}
      </SystemThemeContext.Consumer>
    )
  }
}

export default Login
