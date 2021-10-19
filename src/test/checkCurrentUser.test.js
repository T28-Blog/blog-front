import logInActions from '../redux/actions/loginActions';
import { store } from '../redux/store';

describe('사용자 상태 변경', () => {
  it('사용자 initialState 생성', () => {
    const userState = {
      isLogged: false,
      user: null,
    };
    expect(userState).toEqual(store.getState());
  });

  it('사용자 로그인 액션 함수 실행', () => {
    const loggedUser = {
      isLogged: true,
      user: {
        email: 'team28@gmail.com',
        name: 'team28',
        photoURL: 'img/*',
      },
    };

    const { userLogInAction } = logInActions;
    store.dispatch(userLogInAction(loggedUser.user));
    expect(loggedUser).toEqual(store.getState());
  });

  it('사용자 로그아웃 액션 함수 실행', () => {
    const isLoggedOutUser = {
      isLogged: false,
      user: null,
    };

    const { userLogOutAction } = logInActions;
    store.dispatch(userLogOutAction(isLoggedOutUser.user));
    expect(isLoggedOutUser).toEqual(store.getState());
  });
});
