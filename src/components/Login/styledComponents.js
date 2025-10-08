import styled from 'styled-components'

export const Idp = styled.p`
  font-size: 13px;
  color: gray;
  font-family: Roboto;
`

export const LoginRouteContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContentContainer = styled.div`
  width: 450px;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px;
  border-radius: 7px;
  box-shadow: 0px 0px 50px ${props => (props.isDark ? 'none' : '#e2e8f0')};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};

  @media (max-width: 767px) {
    max-width: 90%;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

export const WebsiteLogo = styled.img`
  width: 200px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    width: 100px;
    margin-bottom: 10px;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 767px) {
    margin-top: 19px;
  }
`

export const Label = styled.label`
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#909090')};
  font-weight: 600;
  font-family: Roboto;
  margin-bottom: 5px;

  @media (max-width: 767px) {
    font-size: 11px;
  }
`

export const Input = styled.input`
  background-color: transparent;
  padding: 10px;
  color: #94a3b8;
  font-size: 19px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #94a3b8;
  outline: none;
  font-family: Roboto;

  @media (max-width: 767px) {
    padding: 8px;
    font-size: 14px;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`

export const CheckboxInput = styled.input`
  outline: none;
  cursor: pointer;
  height: 15px;
  margin-right: 8px;
  width: 15px;
`

export const PasswordLabel = styled.label`
  font-size: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-weight: 500;
  font-family: Roboto;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  padding: 13px;
  color: #ffffff;
  font-size: 16px;
  background-color: #3b82f6;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  margin-top: 30px;

  @media (max-width: 767px) {
    padding: 10px;
    margin-top: 20px;
    font-size: 13px;
  }
`

export const Error = styled.p`
  font-size: 14px;
  color: #ff0b37;
  align-self: flex-start;
  font-family: Roboto;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`
