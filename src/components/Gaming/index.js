import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import SystemThemeContext from '../../context/systemThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideoItem from '../GamingVideoItem'

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
  RetryButton,
} from './styledComponents'

const apiStatusContants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  noResult: 'NO_RESULT',
}

class Gaming extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    search: '',
    apiStatus: apiStatusContants.initial,
    videosData: {},
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusContants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const formattedData = {
        total: data.total,
        videos: data.videos.map(video => ({
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,

          viewCount: video.view_count,
        })),
      }

      const {videos} = formattedData

      if (videos.length === 0) {
        this.setState({apiStatus: apiStatusContants.noResult})
      } else {
        this.setState({
          apiStatus: apiStatusContants.success,
          videosData: formattedData,
        })
      }
    } else {
      this.setState({apiStatus: apiStatusContants.failure})
    }
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
              const {isDark} = value

              const onRetry = () => {
                this.getTrendingVideos()
              }

              const renderHomeContent = () => {
                switch (apiStatus) {
                  case apiStatusContants.success:
                    return (
                      <VideosContainer>
                        {videos.map(video => (
                          <GamingVideoItem
                            key={video.id}
                            info={video}
                            isDark={isDark}
                          />
                        ))}
                      </VideosContainer>
                    )
                  case apiStatusContants.failure:
                    return (
                      <ErrorContainer>
                        <ErrorImage
                          alt="failure view"
                          src={`${
                            isDark
                              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                          }`}
                        />
                        <ErrorHeading isDark={isDark}>
                          Oops! Something Went Wrong
                        </ErrorHeading>
                        <ErrorPara isDark={isDark}>
                          We are having some trouble completing your request.{' '}
                          <br /> Please try again.
                        </ErrorPara>
                        <RetryButton onClick={onRetry}>Retry</RetryButton>
                      </ErrorContainer>
                    )
                  case apiStatusContants.noResult:
                    return (
                      <ErrorContainer>
                        <ErrorImage
                          alt="no videos"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        />
                        <ErrorHeading isDark={isDark}>
                          No Search results found
                        </ErrorHeading>
                        <ErrorPara isDark={isDark}>
                          Try different key words or remove search filter
                        </ErrorPara>
                        <RetryButton onClick={onRetry}>Retry</RetryButton>
                      </ErrorContainer>
                    )
                  default:
                    return (
                      <ErrorContainer data-testid="loader">
                        <Loader
                          color="#3b82f6"
                          height={50}
                          width={50}
                          type="ThreeDots"
                        />
                      </ErrorContainer>
                    )
                }
              }

              return (
                <HomeLayout data-testid="gaming" isDark={isDark}>
                  {showBanner && (
                    <Banner isDark={isDark}>
                      <BannerContent>
                        <WebsiteLogo isDark={isDark}>
                          <SiYoutubegaming />
                        </WebsiteLogo>
                        <BannerParagraph isDark={isDark}>
                          Gaming
                        </BannerParagraph>
                      </BannerContent>
                    </Banner>
                  )}
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

export default Gaming
