import {Component} from 'react'

import {MdPlaylistAdd} from 'react-icons/md'

import {
  Container,
  WebsiteLogo,
  LayoutContainer,
  HomeLayout,
  Banner,
  BannerContent,
  BannerParagraph,
  HomeContainer,
  VideosContainer,
  ErrorContainer,
  ErrorImage,
  ErrorHeading,
  ErrorPara,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingVideoItem from '../TrendingVideoItem'

import SystemThemeContext from '../../context/systemThemeContext'

const apiStatusContants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  noResult: 'NO_RESULT',
}

class SavedVideos extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    search: '',
    apiStatus: apiStatusContants.initial,
    videosData: {},
  }

  render() {
    const {showBanner, videosData, apiStatus} = this.state
    const {videos = []} = videosData

    return (
      <Container>
        <Header />

        <LayoutContainer>
          <Sidebar />
          <SystemThemeContext.Consumer>
            {value => {
              const {isDark, savedVideos} = value

              const onRetry = () => {
                this.getTrendingVideos()
              }

              const renderHomeContent = () => {
                if (savedVideos.length !== 0) {
                  return (
                    <>
                      {showBanner && (
                        <Banner isDark={isDark}>
                          <BannerContent>
                            <WebsiteLogo isDark={isDark}>
                              <MdPlaylistAdd />
                            </WebsiteLogo>
                            <BannerParagraph isDark={isDark}>
                              Saved Videos
                            </BannerParagraph>
                          </BannerContent>
                        </Banner>
                      )}
                      <VideosContainer>
                        {savedVideos.map(video => (
                          <TrendingVideoItem
                            key={video.id}
                            info={video}
                            isDark={isDark}
                          />
                        ))}
                      </VideosContainer>
                    </>
                  )
                }
                return (
                  <ErrorContainer>
                    <ErrorImage
                      alt="no saved videos"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    />
                    <ErrorHeading isDark={isDark}>
                      No saved videos found
                    </ErrorHeading>
                    <ErrorPara isDark={isDark}>
                      You can save your videos while watching them
                    </ErrorPara>
                  </ErrorContainer>
                )
              }

              return (
                <HomeLayout data-testid="savedVideos" isDark={isDark}>
                  <HomeContainer>{renderHomeContent()}</HomeContainer>
                </HomeLayout>
              )
            }}
          </SystemThemeContext.Consumer>
        </LayoutContainer>
      </Container>
    )
  }
}

export default SavedVideos
