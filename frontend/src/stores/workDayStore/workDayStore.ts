import { makeObservable } from 'mobx';

import service from './workDayStore.service';

class WorkDayStore {
  constructor() {
    makeObservable(this);
  }
}

export default new WorkDayStore();
