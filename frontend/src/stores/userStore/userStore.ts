import { makeAutoObservable } from 'mobx';

import service from './userStore.service';
import { User } from '../../data';

class UserStore {
  user: User = { id: '', name: '', avatar: '' };

  constructor() {
    makeAutoObservable(this);

    service.getUser()
      .then((d) => this.setUser(d));
  }

  setUser(user: User) {
    this.user = user;
  }
}

export default new UserStore();
