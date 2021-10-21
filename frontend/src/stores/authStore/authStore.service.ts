import axios from 'axios';

interface AuthData {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

interface Body {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

const service = {
  getAuthData(body: any): Promise<AuthData> {
    return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkeOQ9KwFegK2pR6-EwzH9aDvDoAUYAyY', body)
      .then((response) => response.data);
  },
};

export default service;
