import Auth from '../api/Authentication';

test('새로운 사용자 생성 테스트 코드', () => {
  // eslint-disable-next-line jest/valid-expect-in-promise
  Auth.createUserInFirebaseAuth('team28@gmail.com', '1234567!').then(
    (userCredential) => {
      expect(userCredential).toEqual({
        email: 'team28@gmail.com',
      });
    },
  );
});
