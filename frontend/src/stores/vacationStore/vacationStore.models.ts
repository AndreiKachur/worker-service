export type VacationData = {
  region: string,
  restDaysAmount: number,
  dates: VacationDates[]
};

export type VacationInfo = {
  region: string,
  restDaysAmount: number,
};
export type VacationDates = {
  id: number,
  start: string,
  end: string,
  duration: number,
  status: string,
};

export type Holidays = {
  years: string[],
  common: {
    2021: string[],
    2022: string[],
  }
};
