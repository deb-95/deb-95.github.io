import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../data/siteConfig'

const Link = styled(({ className, icon: Icon, color, ...props }) => (
  <a 
    className={className}
    target='_blank'
    rel="noopener noreferrer"
    {...props}
  >
    <Icon color={color} size={32} />
  </a>
)).attrs(props => ({ color: props.theme.colors.primary }))`
  & + & {
    margin-left: 24px;
  }
`;

const Footer = ({ className }) => {
  const {
    twitter,
    linkedin,
    github,
    instagram
  } = siteConfig.social
  return (
    <footer className={className}>
      {`© ${new Date().getFullYear()} ${siteConfig.authorName}`}
      <div>
        {github && <Link href={github} icon={FaGithub} />}
        {linkedin && <Link href={linkedin} icon={FaLinkedin} />}
        {instagram && <Link href={instagram} icon={FaInstagram} />}
      </div>
      <div>Cover Photo by <a href="https://unsplash.com/@reo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emre</a> on <a href="/s/photos/minimal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px; 
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};
  
  div > a {
    color: red;
  }

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`;