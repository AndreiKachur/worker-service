import { makeAutoObservable } from 'mobx';

import service from './workDaysStore.service';
import { WorkDaysData } from './workDaysStore.models'

class WorkDayStore {

  data: WorkDaysData = {
    id: 0,
    user: {
      id: '',
      name: '',
      avatar: 'Ooops'
    },
    days: {
      '': [],
    }
  }

  constructor() {
    makeAutoObservable(this);

    service.getWorkDays()
      .then((d) => this.setWorkDays(d));
  }

  setWorkDays(workDaysData: WorkDaysData) {
    this.data = workDaysData;
  }
}

export default new WorkDayStore();
