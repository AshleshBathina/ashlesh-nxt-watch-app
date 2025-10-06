import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'

import {FaSignOutAlt} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import {
  Navbar,
  HeaderContent,
  NavItem,
  WebsiteLogo,
  SubContentContainer,
  NavButton,
  LogoutButton,
  Profile,
  ProfileNavButton,
  NavButtonLogout,
  PopupPara,
  ButtonContainer,
  PopupButton,
  CloseContainer,
} from './styledComponents'

import OverlaySidebar from '../OverlaySidebar'

import 'reactjs-popup/dist/index.css'
import './index.css'

import SystemThemeContext from '../../context/systemThemeContext'

const Header = props => (
  <SystemThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      const onThemeChange = () => {
        changeTheme()
      }

      const onClickConfirm = () => {
        Cookies.remove('jwt_token')
        const {history} = props

        history.replace('/login')
      }

      return (
        <Navbar isDark={isDark}>
          <HeaderContent>
            <NavItem>
              <Link to="/">
                <WebsiteLogo
                  alt="website logo"
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
              </Link>
            </NavItem>
            <SubContentContainer>
              <NavButton data-testid="theme" onClick={onThemeChange}>
                {isDark ? (
                  <BsBrightnessHigh color="#ffffff" size={30} />
                ) : (
                  <BsMoon size={30} />
                )}
              </NavButton>
              <Popup
                modal
                trigger={
                  <NavButtonLogout>
                    {isDark ? (
                      <GiHamburgerMenu color="#ffffff" size={30} />
                    ) : (
                      <GiHamburgerMenu color="#000000" size={30} />
                    )}
                  </NavButtonLogout>
                }
                className={`${isDark ? 'dark1' : 'light1'}`}
              >
                {close => (
                  <>
                    <CloseContainer>
                      <NavButtonLogout onClick={() => close()}>
                        {isDark ? (
                          <AiOutlineClose color="#ffffff" size={30} />
                        ) : (
                          <AiOutlineClose color="000000" size={30} />
                        )}
                      </NavButtonLogout>
                    </CloseContainer>
                    <OverlaySidebar />
                  </>
                )}
              </Popup>

              <ProfileNavButton>
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileNavButton>
              <Popup
                modal
                trigger={
                  <div>
                    <LogoutButton isDark={isDark}>Logout</LogoutButton>
                    <NavButtonLogout>
                      {isDark ? (
                        <FaSignOutAlt color="#ffffff" size={30} />
                      ) : (
                        <FaSignOutAlt color="000000" size={30} />
                      )}
                    </NavButtonLogout>
                  </div>
                }
                className={`${isDark ? 'dark' : 'light'}`}
              >
                {close => (
                  <>
                    <PopupPara isDark={isDark}>
                      Are you sure, you want to logout?
                    </PopupPara>
                    <ButtonContainer>
                      <PopupButton onClick={() => close()} outline cancel>
                        Cancel
                      </PopupButton>
                      <PopupButton onClick={onClickConfirm}>
                        Confirm
                      </PopupButton>
                    </ButtonContainer>
                  </>
                )}
              </Popup>
            </SubContentContainer>
          </HeaderContent>
        </Navbar>
      )
    }}
  </SystemThemeContext.Consumer>
)

export default withRouter(Header)
