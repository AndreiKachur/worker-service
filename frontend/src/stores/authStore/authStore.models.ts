export type AuthData = {
  displayName?: string;
  email?: string;
  expiresIn?: string;
  idToken: string;
  kind?: string;
  localId: string;
  refreshToken?: string;
  registered?: boolean;
};

export type Body = {
  email: string;
  password: string;
  returnSecureToken: boolean;
};
