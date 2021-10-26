import User from '../userStore/userStore.models';

export type VacationData = {
  id: number,
  user: User,
  region: string,
  daysAmount: number,
  restDaysAmount: number,
  planned: VacationDate[],
  inquire?: VacationDate[]
};

export type VacationDate = {
  start: string,
  end: string,
  duration: number
};

export type Holidays = {
  years: string[],
  common: {
    2021: string[],
    2022: string[],
  }
};
