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
                    <Name>Michelle Gomes</Name>
                    <Job>Front-End Developer</Job>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                    <Email>Contact</Email>
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
                    <Name>Michelle Gomes</Name>
                    <Job>Front-End Developer</Job>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                    <Email>Contact</Email>
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
                    <Name>Michelle Gomes</Name>
                    <Job>Front-End Developer</Job>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                    <Email>Contact</Email>
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
                    <Name>Michelle Gomes</Name>
                    <Job>Front-End Developer</Job>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                    <Email>Contact</Email>
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
                    <Name>Michelle Gomes</Name>
                    <Job>Front-End Developer</Job>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Desc>
                    <Email>Contact</Email>
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
