import styled from 'styled-components';

const ProfileContainer = styled.div`
  position: relative;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

const UserImage = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const UserName = styled.h1`
  color: #333;
  font-size: 28px;
  font-weight: 400;
  line-height: 34px;
  padding: 20px 0 10px;
`;

const UserEmail = styled.span`
  color: #959595;
  font-size: 16px;
  line-height: 20px;
`;

const UserIntro = styled.div`
  padding: 40px 0;

  strong {
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }

  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    color: #666;
    padding-top: 20px;
  }
`;

const TabContents = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const TabList = styled.ul`
  height: 60px;
  border-top: 1px solid #eee;
  font-size: 18px;
`;

const Tab = styled.li`
  width: 50%;
  height: 24px;
  padding: 16px 0;
  text-align: center;
  border-top: 1px solid #333;
`;

export const style = {
  ProfileContainer,
  UserName,
  UserEmail,
  UserIntro,
  UserImage,
  TabContents,
  TabList,
  Tab,
};
