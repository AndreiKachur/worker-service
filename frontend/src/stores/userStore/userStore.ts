import { makeAutoObservable } from 'mobx';

import { User } from '../../data';

class UserStore {
  user: User = { id: '', name: '', avatar: '' };

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }
}

export default new UserStore();
