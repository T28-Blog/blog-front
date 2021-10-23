import Auth from '../api/Authentication';

test('새로운 사용자 생성 테스트 코드', () => {
  return Auth.createUserInFirebaseAuth('team28@gmail.com', '1234567!').then(
    (userCredential) => {
      const { email } = userCredential.user;
      expect(email).toBe('team28@gmail.com');
    },
  );
});
