import { makeAutoObservable } from 'mobx';

import service from './workDaysStore.service';
import { WorkDaysData } from './workDaysStore.models';

class WorkDayStore {
  data: WorkDaysData = {
    id: 0,
    userId: '',
    days: {
      '': [],
    },
  };

  message = '';

  constructor() {
    makeAutoObservable(this);

    service.getWorkDays()
      .then((d) => this.setWorkDays(d));
  }

  setWorkDays(workDaysData: WorkDaysData) {
    this.data = workDaysData;
  }

  setMessage(message: string) {
    this.message = message;
  }

  submitWorkDays(data: any) {
    service.sendWorkDays(data)
      .then((d: any) => this.setMessage(d.answer));
  }
}

export default new WorkDayStore();