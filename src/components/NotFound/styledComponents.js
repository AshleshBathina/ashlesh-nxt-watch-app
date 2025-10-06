import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f ' : '#f9f9f9 ')};
  margin: 0px;
  overflow: auto;
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const WebsiteLogo = styled.img`
  width: 150px;

  @media (max-width: 767px) {
    width: 110px;
  }
`

export const BannerParagraph = styled.p`
  color: #1e293b;
  font-size: 19px;
  width: 90%;
  font-family: Roboto;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 2px solid #1e293b;
  width: 125px;
  height: 45px;
  color: #1e293b;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100px;
    height: 35px;
    font-size: 14px;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
  height: 30px;
  width: 30px;

  @media (max-width: 767px) {
    height: 25px;
    width: 25px;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  height: 100%;

  @media (max-width: 576px) {
    padding: 0px;
    align-items: center;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    align-items: flex-start;
    padding: 30px;
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 30px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    width: 90%;

    margin-top: 20px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 70%;
  }
`

export const SearchInput = styled.input`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  outline: none;
  height: 100%;
  width: 100%;
  color: ${props => (props.isDark ? '#f4f4f4' : '#606060')};
  border: 1px solid #909090;
  padding: 6px;
`

export const SearchButton = styled.button`
  background-color: ${props => (props.isDark ? '#424242' : '#f4f4f4')};
  border: 1px solid #909090;
  padding: 8px 20px;
  display: flex;
  height: 100%;
  cursor: pointer;
  flex-direction: column;

  @media (max-width: 767px) {
  }
`

export const VideoContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    height: 200px;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ErrorImage = styled.img`
  width: 300px;

  @media (max-width: 767px) {
    width: 150px;
  }
`

export const ErrorHeading = styled.h1`
  font-size: 25px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#cccccc' : '#181818')};
  margin-bottom: 0px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`

export const ErrorPara = styled.p`
  font-size: 17px;
  text-align: center;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};

  @media (max-width: 767px) {
    font-size: 13px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
`

export const ViewsDate = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 11px;
  }
`

export const Title = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  font-size: 18px;
  margin-bottom: 0px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 767px) {
    padding: 15px 10px;
  }
`

export const VideoInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const UserFeedbackButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  margin: 2px;
  color: ${props =>
    props.isLiked || props.isDisliked || props.isSaved ? '#2563eb' : '#64748b'};
  font-size: 15px;
  border: none;
  cursor: pointer;
  outline: none;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid ${props => (props.isDark ? '#cccccc' : '#909090')};
`

export const ChannelDesc = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelInfo = styled.div`
  display: flex;
`

export const ChannelProfile = styled.img`
  height: 40px;
  width: 40px;
`

export const ChannelNameDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

export const Name = styled.p`
  font-size: 13px;
  margin: 0px;
  color: ${props => (props.isDark ? '#cccccc' : '#475569')};
`

export const Subs = styled.p`
  font-size: 11px;
  margin-top: 5px;
  color: ${props => (props.isDark ? '#cccccc' : '#475569')};
`

export const ChannelDescription = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
`
