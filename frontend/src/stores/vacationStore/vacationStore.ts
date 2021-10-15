import { makeAutoObservable } from 'mobx';

import service from './vacationStore.service';
import { VacationData } from './vacationStore.models'

class VacationStore {

  vacationData: VacationData = {
    id: 0,
    user: {
      id: '',
      name: '',
      avatar: 'Ooops'
    },
    thisYear: {
      daysAmount: 0,
      restDaysAmount: 0,
      planned: [{
        start: '',
        end: '',
        duration: 0
      }],
    },
  }

  constructor() {
    makeAutoObservable(this);

    service.getVacation()
      .then((d) => this.setVacation(d));
  }

  setVacation(vacationData: VacationData) {
    this.vacationData = vacationData;
  }
}

export default new VacationStore();
