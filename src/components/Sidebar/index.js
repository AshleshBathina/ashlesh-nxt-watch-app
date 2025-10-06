import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SidebarContainer,
  ContactInfo,
  ContactHeading,
  LogoContainer,
  SocialLogo,
  ContactParagraph,
} from './styledComponents'

import SidebarItem from '../SidebarItem'

import SystemThemeContext from '../../context/systemThemeContext'

const optionsList = [
  {id: 'home', name: 'Home', path: '/', icon: <AiFillHome size={25} />},
  {
    id: 'trending',
    name: 'Trending',
    path: '/trending',
    icon: <FaFire size={25} />,
  },
  {
    id: 'gaming',
    name: 'Gaming',
    path: '/gaming',
    icon: <SiYoutubegaming size={25} />,
  },
  {
    id: 'savedVideos',
    name: 'Saved Videos',
    path: '/saved-videos',
    icon: <MdPlaylistAdd size={25} />,
  },
]

class Sidebar extends Component {
  render() {
    const {location} = this.props
    const {pathname} = location

    const {showActiveItem = true} = this.props

    return (
      <SystemThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <SidebarContainer isDark={isDark}>
              {optionsList.map(option => (
                <SidebarItem
                  key={option.id}
                  info={option}
                  isActive={option.path === pathname && showActiveItem}
                />
              ))}
              <ContactInfo>
                <ContactHeading isDark={isDark}>CONTACT US</ContactHeading>
                <LogoContainer>
                  <SocialLogo
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />
                  <SocialLogo
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />
                  <SocialLogo
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  />
                </LogoContainer>
                <ContactParagraph isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactParagraph>
              </ContactInfo>
            </SidebarContainer>
          )
        }}
      </SystemThemeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
