import { makeObservable, observable, action } from 'mobx';

import service from './vacationStore.service';
import { VacationData, Holidays } from './vacationStore.models';

class VacationStore {
  userId = '';

  data = {
    region: '',
    restDaysAmount: 0,
    dates: [{
      id: 0,
      start: '',
      end: '',
      duration: 0,
      status: '',
    }],
  };

  holidaysData: Holidays = {
    years: [''],
    common: {
      2021: [''],
      2022: [''],
    },
  };

  data_: any = {};

  constructor() {
    makeObservable(this, {
      data: observable,
      holidaysData: observable,
      setVacation: action.bound,
      setHolidays: action.bound,
      submitVacation: action.bound,
      cancelVacation: action.bound,
    });

    service.getHolidays()
      .then((d) => this.setHolidays(d));

    service.getVacation()
      .then((d) => { this.setVacation(d); });
  }

  setVacation(vacationData: VacationData) {
    this.data = vacationData;
  }

  setHolidays(holidaysData: Holidays) {
    this.holidaysData = holidaysData;
  }

  submitVacation(start: string, end: string, duration: number) {
    service.sendVacation(start, end, duration)
      .then((d) => this.setVacation(d));
  }

  cancelVacation(id: number) {
    service.updateVacation(id)
      .then((d) => this.setVacation(d));
  }
}

export default new VacationStore();
