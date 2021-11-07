import { makeAutoObservable } from 'mobx';

import service from './workDaysStore.service';
import { WorkDaysData } from './workDaysStore.models';

class WorkDayStore {
  data: WorkDaysData = {
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
    this.data.days = workDaysData;
  }

  setMessage(message: string) {
    this.message = message;
  }

  submitWorkDays(data: any) {
    service.sendWorkDays(data)
      .then((d: any) => this.setWorkDays(d));
  }
}

export default new WorkDayStore();
