import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 10vh;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};

  @media (max-width: 767px) {
    padding: 5px;
    height: 50px;
  }
`

export const HeaderContent = styled.ul`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;

  @media (max-width: 767px) {
    width: 95%;
  }
`

export const NavItem = styled.li``

export const WebsiteLogo = styled.img`
  width: 130px;

  @media (max-width: 767px) {
    width: 90px;
  }
`

export const SubContentContainer = styled.li`
  display: flex;
  align-items: center;
`

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  height: 40px;
  width: 40px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 30px;
    width: 30px;
    margin-right: 0px;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  width: 95px;
  height: 35px;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  border-radius: 5px;
  font-size: 17px;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`

export const ProfileNavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  height: 43px;
  width: 43px;
  margin-right: 20px;

  @media (max-width: 767px) {
    display: none;
  }
`

export const Profile = styled.img`
  width: 100%;
`

export const NavButtonLogout = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  height: 33px;
  width: 33px;
  margin-right: 20px;
  display: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: flex;
    margin-right: 0px;
  }
`

export const PopupPara = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  font-size: 20px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const PopupButton = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  border: ${props => (props.outline ? '1px solid #64748b' : 'none')};
  border-radius: 5px;
  height: 35px;
  width: 90px;
  color: ${props => (props.cancel ? '#64748b' : '#ffffff')};
  cursor: pointer;
  outline: none;

  @media (max-width: 767px) {
  }
`

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 60px;
  margin-top: 10px;
`
