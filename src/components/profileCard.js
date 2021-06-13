import React from 'react'
import {FaGithub, FaBlog, FaLinkedin} from 'react-icons/fa'
import {
    ProfileContainer,
    Card,
    CardHeader,
    ProfileThumbnail,
    Name,
    Job,
    Desc,
    Email,
    CardFooter,
    IconLink
} from '../styles/profileCardElements'
import pic from '../assets/woman.jpg'

const ProfileCard = () => {
    return (
        <ProfileContainer>
            <Card>
                <CardHeader>
                    <ProfileThumbnail img src={pic} alt='Google'>
                        {/* < width='100%' height='100%' object-fit='cover'/> */}
                    </ProfileThumbnail>
                    <Name>김은태</Name>
                    <Job>Front-End Developer</Job>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                    <Email><a href={`mailto:hurima90@gmail.com`} style={{textDecoration: 'none', color: '#fff', outline: 'none'}}>Contact</a></Email>
                </CardHeader>
                <CardFooter>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaGithub /></a>
                    </IconLink>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaBlog /></a>
                    </IconLink>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaLinkedin /></a>
                    </IconLink>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <ProfileThumbnail img src={pic} alt='Google'>
                        {/* < width='100%' height='100%' object-fit='cover'/> */}
                    </ProfileThumbnail>
                    <Name>김수빈</Name>
                    <Job>Front-End Developer</Job>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                    <Email><a href={`mailto:qorgkr26@sookmyung.ac.kr`} style={{textDecoration: 'none', color: '#fff', outline: 'none'}}>Contact</a></Email>
                </CardHeader>
                <CardFooter>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaGithub /></a>
                    </IconLink>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaBlog /></a>
                    </IconLink>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaLinkedin /></a>
                    </IconLink>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <ProfileThumbnail img src={pic} alt='Google'>
                        {/* < width='100%' height='100%' object-fit='cover'/> */}
                    </ProfileThumbnail>
                    <Name>이유정</Name>
                    <Job>Front-End Developer</Job>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                    <Email><a href={`mailto:yjclarelee@postech.ac.kr`} style={{textDecoration: 'none', color: '#fff', outline: 'none'}}>Contact</a></Email>
                </CardHeader>
                <CardFooter>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaGithub /></a>
                    </IconLink>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaBlog /></a>
                    </IconLink>
                    <IconLink>
                        <a href='https://github.com/T28-Blog/blog-front' style={{color: 'white'}}><FaLinkedin /></a>
                    </IconLink>
                </CardFooter>
            </Card>
        </ProfileContainer>
    )
}

export default ProfileCard
