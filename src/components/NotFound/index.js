import {Component} from 'react'

import SystemThemeContext from '../../context/systemThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  Container,
  LayoutContainer,
  HomeLayout,
  HomeContainer,
  ErrorContainer,
  ErrorImage,
  ErrorHeading,
  ErrorPara,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <Container>
        <Header />
        <LayoutContainer>
          <Sidebar showActiveItem={false} />
          <SystemThemeContext.Consumer>
            {value => {
              const {isDark} = value

              return (
                <HomeLayout isDark={isDark}>
                  <HomeContainer>
                    <ErrorContainer>
                      <ErrorImage
                        isDark={isDark}
                        alt="not found"
                        src={
                          isDark
                            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                        }
                      />
                      <ErrorHeading isDark={isDark}>
                        Page Not Found
                      </ErrorHeading>
                      <ErrorPara isDark={isDark}>
                        we are sorry, the page you requested could not be found.
                      </ErrorPara>
                    </ErrorContainer>
                  </HomeContainer>
                </HomeLayout>
              )
            }}
          </SystemThemeContext.Consumer>
        </LayoutContainer>
      </Container>
    )
  }
}

export default NotFound
