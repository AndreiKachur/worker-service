import axios from 'axios';

type AuthData = {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
};

type Body = {
  email: string;
  password: string;
  returnSecureToken: boolean;
};

const service = {
  getAuthData(body: Body): Promise<AuthData> {
    return axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkeOQ9KwFegK2pR6-EwzH9aDvDoAUYAyY', body)
      .then((response: any) => response.data);
  },
};

export default service;
