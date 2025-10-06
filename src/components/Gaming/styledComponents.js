import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
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
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  margin: 0px;
  overflow: auto;
`

export const Banner = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f4f4f4')};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;

  @media (max-width: 576px) {
    padding: 10px;
  }
`

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
`

export const WebsiteLogo = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#e2e8f0')};
  color: #ff0000;
  font-size: 30px;

  @media (max-width: 576px) {
    height: 50px;
    width: 50px;
    font-size: 20px;
  }
`

export const BannerParagraph = styled.h1`
  font-size: 30px;
  font-family: Roboto;
  font-weight: 600;
  margin: 0px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
  margin-left: 15px;

  @media (max-width: 576px) {
    font-size: 20px;
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

export const VideosContainer = styled.ul`
  list-style-type: none;

  width: 100%;
  display: flex;

  padding-left: 0px;
  flex-wrap: wrap;
  justify-content: space-between;
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
`

export const ErrorHeading = styled.h1`
font-size: 25px;
font-weight: 500;
color: ${props => (props.isDark ? '#cccccc' : '#181818')}
margin-bottom: 0px;
`

export const ErrorPara = styled.p`
  font-size: 17px;
  text-align: center;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
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
