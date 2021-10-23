import { makeObservable, observable, action } from 'mobx';

import service from './vacationStore.service';
import { VacationData, Holidays } from './vacationStore.models';

class VacationStore {
  data: VacationData = {
    id: 0,
    user: {
      id: '',
      name: '',
      avatar: '',
    },
    region: '',
    daysAmount: 0,
    restDaysAmount: 0,
    planned: [{
      start: '',
      end: '',
      duration: 0,
    }],
  };

  holidaysData: Holidays = {
    years: [''],
    common: {
      2021: [''],
      2022: [''],
    },
  };

  constructor() {
    makeObservable(this, {
      data: observable,
      holidaysData: observable,
      setVacation: action.bound,
      setHolidays: action.bound,
    });

    service.getVacation()
      .then((d) => {
        this.setVacation(d.vacation);
        this.setHolidays(d.holidays);
      });
  }

  setVacation(vacationData: VacationData) {
    this.data = vacationData;
  }

  setHolidays(holidaysData: Holidays) {
    this.holidaysData = holidaysData;
  }
}

export default new VacationStore();
