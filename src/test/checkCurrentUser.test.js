import useSelector from '../hooks/useSelector';

describe('사용자 상태 변경', () => {
  const userState = {
    isLogged: false,
    user: null,
  };

  const realUserState = useSelector((state) => state.userReducer.user);

  it('사용자 initialState 생성', () => {
    expect(realUserState).toEqual(userState);
  });

  it('사용자 로그아웃 액션 함수 실행', () => {});
});
