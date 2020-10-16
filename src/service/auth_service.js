import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    // onAuthCahnge 함수는 인자로 onUserChanged라는 콜백함수를 받고 login logout이 발생하면 onAuthStateChanged로 부터 변경된 유저 정보를 인자로 받는다.
    firebase.auth().onAuthStateChanged((user) => {
      //onAuthStateChanged 함수는 콜백 함수를 받고, 사용자의 로그인 상태를 감시한다. 로그인 로그아웃 할 때마다 콜백함수가 호출된다.

      onUserChanged(user);
    });
  }
}

export default AuthService;
