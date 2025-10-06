import styled from 'styled-components'

export const SidebarContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 90vh;
  flex-shrink: 0;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  list-style-type: none;
  padding-left: 0px;
  margin: 0px;
  padding: 15px 0px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 992px) {
    height: 90vh;
    width: 250px;
  }
`

export const ContactInfo = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-left: 20px;
  width: 100%;
`

export const ContactHeading = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-weight: 600;
  font-size: 16px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const SocialLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const ContactParagraph = styled.p`
  font-size: 13px;
  color: ${props => (props.isDark ? '#f4f4f4' : '#1e293b')};
  width: 90%;
`
