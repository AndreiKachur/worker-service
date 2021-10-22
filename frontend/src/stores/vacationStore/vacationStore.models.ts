import User from '../models/user';

export type VacationData = {
  id: number,
  user: User,
  thisYear: VacationTime,
  nextYear?: VacationTime
};

export type VacationTime = {
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
