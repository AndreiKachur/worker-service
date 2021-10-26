import { makeObservable, observable, action } from 'mobx';

import service from './vacationStore.service';
import { VacationData, Holidays } from './vacationStore.models';

class VacationStore {

  userId = ''

  data = {
    region: '',
    restDaysAmount: 0,
    dates: [{
      start: '',
      end: '',
      duration: 0,
      status: ''
    }]
  };

  holidaysData: Holidays = {
    years: [''],
    common: {
      2021: [''],
      2022: [''],
    },
  };

  data_: any = {}

  constructor() {

    makeObservable(this, {
      data: observable,
      holidaysData: observable,
      setVacation: action.bound,
      setHolidays: action.bound,
    });

    service.getHolidays()
      .then((d) => this.setHolidays(d));

    service.getVacation()
      .then(d => { this.setVacation(d) });
  }

  setVacation(vacationData: VacationData) {
    this.data = vacationData;
  }

  setHolidays(holidaysData: Holidays) {
    this.holidaysData = holidaysData;
  }
}

export default new VacationStore();
