import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import SystemThemeContext from '../../context/systemThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  Container,
  LayoutContainer,
  HomeLayout,
  HomeContainer,
  VideoContainer,
  ErrorContainer,
  ErrorImage,
  ErrorHeading,
  ErrorPara,
  RetryButton,
  ViewsDate,
  Title,
  VideoDescription,
  VideoInfoContainer,
  UserFeedbackButtonsContainer,
  ButtonContainer0,
  Hr,
  ChannelDesc,
  ChannelInfo,
  ChannelProfile,
  ChannelNameDesc,
  Name,
  Subs,
  ChannelDescription,
} from './styledComponents'

const apiStatusContants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  noResult: 'NO_RESULT',
}

class VideoItemDetails extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    search: '',
    apiStatus: apiStatusContants.initial,
    videosData: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusContants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = ` https://apis.ccbp.in/videos/${id}`

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
        videoDetails: {
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        },
      }

      this.setState({
        apiStatus: apiStatusContants.success,
        videosData: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusContants.failure})
    }
  }

  render() {
    const {videosData, apiStatus} = this.state

    return (
      <Container>
        <Header />
        <LayoutContainer>
          <Sidebar showActiveItem={false} />
          <SystemThemeContext.Consumer>
            {value => {
              const {
                isDark,
                updateSavedVideos,
                updateLikedVideos,
                updateDislikedVideos,
                likedVideos,
                dislikedVideos,
                savedVideos,
              } = value

              const onRetry = () => {
                this.getVideoDetails()
              }

              console.log(likedVideos)

              const renderHomeContent = () => {
                switch (apiStatus) {
                  case apiStatusContants.success:
                    if (videosData.videoDetails) {
                      const {videoDetails} = videosData

                      const {
                        id,
                        title,
                        videoUrl,
                        thumbnailUrl,
                        channel,
                        viewCount,
                        publishedAt,
                        description,
                      } = videoDetails

                      const {name, profileImageUrl, subscriberCount} = channel

                      const resultTime = formatDistanceToNow(
                        new Date(publishedAt),
                      )
                      const agoTime = `${resultTime.replace(
                        /^(over |almost |about)/,
                        '',
                      )} ago`

                      const onLike = () => {
                        updateLikedVideos(id)
                      }

                      const onDisLike = () => {
                        updateDislikedVideos(id)
                      }

                      const onSave = () => {
                        updateSavedVideos({agoTime, ...videoDetails})
                      }

                      const isLiked = likedVideos.includes(id)
                      const isDisliked = dislikedVideos.includes(id)

                      const isVideoSaved = savedVideos.findIndex(
                        video => video.id === id,
                      )

                      const isSaved = isVideoSaved !== -1

                      return (
                        <>
                          <VideoContainer>
                            <ReactPlayer
                              url={videoUrl}
                              width="100%"
                              height="100%"
                              controls
                            />
                          </VideoContainer>
                          <VideoDescription>
                            <Title isDark={isDark}>{title}</Title>
                            <VideoInfoContainer>
                              <ViewsDate isDark={isDark}>
                                {viewCount} views • {agoTime}
                              </ViewsDate>
                              <UserFeedbackButtonsContainer>
                                <ButtonContainer0
                                  isLiked={isLiked}
                                  onClick={onLike}
                                  type="button"
                                >
                                  <BiLike size={20} />
                                  Like
                                </ButtonContainer0>
                                <ButtonContainer0
                                  isDisliked={isDisliked}
                                  onClick={onDisLike}
                                  type="button"
                                >
                                  <BiDislike size={20} />
                                  Dislike
                                </ButtonContainer0>
                                <ButtonContainer0
                                  isSaved={isSaved}
                                  onClick={onSave}
                                  type="button"
                                  data-testid="save"
                                >
                                  <MdPlaylistAdd size={20} />
                                  {isSaved ? 'Saved' : 'Save'}
                                </ButtonContainer0>
                              </UserFeedbackButtonsContainer>
                            </VideoInfoContainer>
                            <Hr />
                            <ChannelDesc>
                              <ChannelInfo>
                                <ChannelProfile
                                  alt="channel logo"
                                  src={profileImageUrl}
                                />
                                <ChannelNameDesc>
                                  <Name isDark={isDark}>{name}</Name>
                                  <Subs isDark={isDark}>
                                    {subscriberCount} subscribers
                                  </Subs>
                                </ChannelNameDesc>
                              </ChannelInfo>
                              <ChannelDescription>
                                {description}
                              </ChannelDescription>
                            </ChannelDesc>
                          </VideoDescription>
                        </>
                      )
                    }

                    break

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
                return null
              }

              return (
                <HomeLayout data-testid="videoItemDetails" isDark={isDark}>
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

export default VideoItemDetails
