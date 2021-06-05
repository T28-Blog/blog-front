import React from 'react'
import {
    MainSlider, 
    Section, 
    SectionTitle, 
    PostContainer, 
    MainPost, 
    MainThumbnail, 
    MainTitle, 
    MainDesc, 
    Writer, 
    PostList, 
    Post, 
    SubThumbnail,
    SubTitle,
    SubDesc,
    SubWriter,
    HashtagContainer,
    PopularPost,
    PopularThumbnail
} from '../styles/indexElements'
import testGoogle from '../assets/test_google.jpeg'
import testMac from '../assets/test_mac.jpeg'
    
const Home = () => {
    return (
        <div>
            <MainSlider>
                Slider Area
            </MainSlider>
            <SectionTitle>
                    Latest articles
                    <hr />
            </SectionTitle>
            <Section>
                <PostContainer>
                    <MainPost>
                        <MainThumbnail>
                            <img src={testGoogle} alt='Google' width='650px' height='350px'/>
                        </MainThumbnail>
                        <MainTitle>Designin Google Calculator with React Redux Hooks</MainTitle>
                        <MainDesc>In 2020, Redux made complete sense after I watched the video tutorial by Dan Abramov...</MainDesc>
                        <Writer>ThankGod Ukachukwu</Writer>
                    </MainPost>
                    <HashtagContainer>
                        Hashtag List
                    </HashtagContainer>
                </PostContainer>
                <PostList>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
                        <SubDesc>10 ways to write better javascript code</SubDesc>
                        <SubWriter>Harsha Vardhan</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Healthy Tips that Every Programmer Can Do Everday</SubTitle>
                        <SubDesc>For a healthy lifestyle.</SubDesc>
                        <SubWriter>Josef Cruz</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>How to Use JavaScript Libraries in Angular Project</SubTitle>
                        <SubDesc>Using a JavaScript library inside an Angular project</SubDesc>
                        <SubWriter>Rucha Deshpande</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
                        <SubDesc>10 ways to write better javascript code</SubDesc>
                        <SubWriter>Harsha Vardhan</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
                        <SubDesc>10 ways to write better javascript code</SubDesc>
                        <SubWriter>Harsha Vardhan</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
                        <SubDesc>10 ways to write better javascript code</SubDesc>
                        <SubWriter>Harsha Vardhan</SubWriter>
                    </Post>
                </PostList>
            </Section>
            <SectionTitle>
                    Popular articles
                    <hr />
            </SectionTitle>
            <Section>
                <PostContainer>
                    <PopularPost>
                        <MainThumbnail>
                            <img src={testGoogle} alt='Google' width='475px' height='325px'/>
                        </MainThumbnail>
                        <MainTitle>Designin Google Calculator with React Redux Hooks</MainTitle>
                        <MainDesc>In 2020, Redux made complete sense after I watched the video tutorial by Dan Abramov...</MainDesc>
                        <Writer>ThankGod Ukachukwu</Writer>
                    </PopularPost>
                    <PopularPost>
                        <MainThumbnail>
                            <img src={testGoogle} alt='Google' width='475px' height='325px'/>
                        </MainThumbnail>
                        <MainTitle>Designin Google Calculator with React Redux Hooks</MainTitle>
                        <MainDesc>In 2020, Redux made complete sense after I watched the video tutorial by Dan Abramov...</MainDesc>
                        <Writer>ThankGod Ukachukwu</Writer>
                    </PopularPost>
                </PostContainer>
                <PostList>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
                        <SubDesc>10 ways to write better javascript code</SubDesc>
                        <SubWriter>Harsha Vardhan</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Healthy Tips that Every Programmer Can Do Everday</SubTitle>
                        <SubDesc>For a healthy lifestyle.</SubDesc>
                        <SubWriter>Josef Cruz</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>How to Use JavaScript Libraries in Angular Project</SubTitle>
                        <SubDesc>Using a JavaScript library inside an Angular project</SubDesc>
                        <SubWriter>Rucha Deshpande</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
                        <SubDesc>10 ways to write better javascript code</SubDesc>
                        <SubWriter>Harsha Vardhan</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
                        <SubDesc>10 ways to write better javascript code</SubDesc>
                        <SubWriter>Harsha Vardhan</SubWriter>
                    </Post>
                    <Post>
                        <SubThumbnail>
                            <img src={testMac} alt='Mac' width='300px'/>
                        </SubThumbnail>
                        <SubTitle>Stop Writinig JavaScript Like This</SubTitle>
                        <SubDesc>10 ways to write better javascript code</SubDesc>
                        <SubWriter>Harsha Vardhan</SubWriter>
                    </Post>
                </PostList>
            </Section>
        </div>
    )
}

export default Home
