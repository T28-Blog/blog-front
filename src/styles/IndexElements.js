import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100%;
  margin-bottom: 150px;
`

export const MainSlider = styled.div`
  width: 100%;
  height: 350px;
  color: white;
  font-size: 40px;
  text-align: center;
  margin: auto 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;
export const SectionTitle = styled.h2`
  display: block;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 50px;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 650px;
  }

  @media screen and (max-width: 375px) {
    width: 375px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Section = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
export const PostContainer = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 650px;
    flex-direction: column-reverse;
    align-items: center;
  }

  @media screen and (max-width: 375px) {
    width: 375px;
    flex-direction: column-reverse;
  }
`;
export const MainPost = styled.div`
  display: inline-block;
  width: 650px;
  margin: 0 50px 0 0;

  @media screen and (max-width: 768px) {
    display: block;
    width: 650px;
    margin: 0 auto;
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 375px;
    margin: 0 auto;
  }
`;

export const MainThumbnail = styled.img`
  width: 100%;
  height: 350px;
  margin-bottom: 20px;
  border-radius: 10px;
  object-fit: cover;
`;

export const MainTitle = styled.h3`
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 375px) {
    padding: 0 20px 0 20px;
  }
`;

export const MainDesc = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: #6c757d;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 375px) {
    padding: 0 20px 0 20px;
  }
`;

export const MainFooter = styled.div`
  display: flex;
  flex-direction: row;
`

export const WriterImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: green;
  margin-right: 8px;
  object-fit: cover;
`

export const Writer = styled.p`
  height: 30px;
  font-size: 12px;
  line-height: 30px;
  color: blue;
  margin-bottom: 0;

  @media screen and (max-width: 375px) {
    padding: 0 20px 0 20px;
  }
`;

export const PostList = styled.div`
  position: relative;
  width: 1000px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 650px;
    margin: 0 auto;
  }

  @media screen and (max-width: 375px) {
    width: 375px;
    height: 100%;
    padding: 0 20px;
  }
`;

export const Post = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 320px;
  margin: 0 20px 20px 0;
  overflow: hidden;

  &:nth-child(3) {
    margin-right: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    margin: 0;
    margin-right: 25px;

    &:nth-child(3),
    :nth-child(6) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 375px) {
    width: 155px;
    height: 100%;
    margin-right: 25px;
    &:nth-child(3) {
      margin-right: 25px;
    }

    &:nth-child(2),
    :nth-child(4),
    :nth-child(6) {
      margin-right: 0;
    }
  }
`;
export const SubThumbnail = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 15px;
  object-fit: cover;
  border-radius: 10px;
`;
export const SubTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const SubFooter = styled.div`
  display: flex;
  flex-direction: row;
`
export const SubProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: green;
  margin-right: 8px;
  object-fit: cover;
`
export const SubDesc = styled.p`
  font-size: 14px;
  margin-bottom: 2px;
  color: #6c757d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SubWriter = styled.p`
  height: 30px;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 30px;
  color: blue;
  white-space: nowrap;
`;

export const PopularContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1000px;
  height: 100%;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    display: block;
    width: 650px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 375px;
    height: 100%;
    margin-bottom: 30px;
  }
`;

export const PopularPost = styled.div`
  display: inline-block;
  width: 475px;
  height: 350px;
  margin-right: 50px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    width: 310px;
    margin-right: 30px;
    text-align: initial;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 375px) {
    width: 375px;

    &:last-child {
      display: none;
    }
  }
`;

export const PopularThumbnail = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 10px;
  object-fit: cover;
`;
