import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'

import SystemThemeContext from '../../context/systemThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'

import {
  Container,
  WebsiteLogo,
  LayoutContainer,
  HomeLayout,
  Banner,
  BannerContent,
  BannerParagraph,
  BannerButton,
  CloseButton,
  HomeContainer,
  SearchBarContainer,
  SearchInput,
  SearchButton,
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

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    search: '',
    apiStatus: apiStatusContants.initial,
    videosData: {},
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusContants.inProgress})
    const {search} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`

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
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
          viewCount: video.view_count,
          publishedAt: video.published_at,
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
    const {showBanner, searchInput, videosData, apiStatus} = this.state
    const {videos = []} = videosData

    return (
      <SystemThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const onClickCloseBanner = () => {
            this.setState({showBanner: false})
          }

          const onChangeSearchInput = event => {
            this.setState({searchInput: event.target.value})
          }

          const onClickSearch = () => {
            this.setState({search: searchInput}, this.getVideos)
          }

          const onRetry = () => {
            this.getVideos()
          }

          const renderHomeContent = () => {
            switch (apiStatus) {
              case apiStatusContants.success:
                return (
                  <VideosContainer>
                    {videos.map(video => (
                      <VideoItem key={video.id} info={video} isDark={isDark} />
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
                      We are having some trouble completing your request. <br />{' '}
                      Please try again.
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
            <Container data-testid="home" isDark={isDark}>
              <Header />
              <LayoutContainer>
                <Sidebar />
                <HomeLayout>
                  {showBanner && (
                    <Banner data-testid="banner">
                      <BannerContent>
                        <WebsiteLogo
                          alt="nxt watch logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        />
                        <BannerParagraph>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerParagraph>
                        <BannerButton>GET IT NOW</BannerButton>
                      </BannerContent>

                      <CloseButton
                        onClick={onClickCloseBanner}
                        data-testid="close"
                      >
                        <AiOutlineClose color="000000" size={30} />
                      </CloseButton>
                    </Banner>
                  )}
                  <HomeContainer>
                    <SearchBarContainer>
                      <SearchInput
                        value={searchInput}
                        onChange={onChangeSearchInput}
                        type="search"
                        placeholder="Search"
                        isDark={isDark}
                      />
                      <SearchButton
                        onClick={onClickSearch}
                        isDark={isDark}
                        data-testid="searchButton"
                        type="button"
                      >
                        <FaSearch color="#909090" size={15} />
                      </SearchButton>
                    </SearchBarContainer>
                    {renderHomeContent()}
                  </HomeContainer>
                </HomeLayout>
              </LayoutContainer>
            </Container>
          )
        }}
      </SystemThemeContext.Consumer>
    )
  }
}

export default Home
