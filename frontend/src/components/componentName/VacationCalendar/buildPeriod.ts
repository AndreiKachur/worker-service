import Day from '../models/day';

type SetBetweenPeriodType = (
  start: Day,
  beginDay: number,
  endDay: number,
  month: number | string,
  year?: number) => void;

type GetPeriod = (
  start: Day | undefined,
  end: Day | undefined,
  isEndDay: boolean,
  holidaysList: any,
) => any;

type BuildPeriod = (
  start: Day | undefined,
  end: Day | undefined,
  isEndDay: boolean,) => any;

const buildPeriod: BuildPeriod = (start, end, isEndDay) => {
  const periodDates: string[] = [];
  const period: any = { periodDates };

  if (!start) return period;

  const intervalPatterns = {
    start: { startingDay: true, color: '#50cebb', textColor: 'white' },
    between: { color: '#70d7c7', textColor: 'white' },
    end: { endingDay: true, color: '#50cebb', textColor: 'white' },
  };

  // подсвечиваем стартовый день
  if (isEndDay) {
    period[start.dateString] = intervalPatterns.start;
    periodDates.push(start.dateString);
    return period;
  }

  if (!end) return period;

  const daysInMonth = (month: number, year: number) => {
    return (32 - new Date(year, month - 1, 32).getDate())
  }

  // добавляем начало и окончание периода
  period[start.dateString] = intervalPatterns.start;
  periodDates.push(start.dateString);
  period[end.dateString] = intervalPatterns.end;
  periodDates.push(end.dateString);

  // добавляем дни между стартом и окончанием периода
  const setBetweenPeriod: SetBetweenPeriodType = (startDay, beginDay, endDay, month, year) => {
    for (let day = beginDay + 1; day < endDay; day += 1) {
      const dayFormat = day > 9 ? day : ['0', day].join('');
      const newMonth = month > 9 ? month : ['0', month].join('');

      const dateString = [year, newMonth, dayFormat].join('-');

      period[dateString] = intervalPatterns.between;
      periodDates.push(dateString);
    }
  };

  const monthEnd = daysInMonth(start.month, start.year) + 1;

  if (start.month !== end.month) {
    setBetweenPeriod(start, start.day, monthEnd, start.month, start.year);
    setBetweenPeriod(start, 0, end.day, end.month, end.year);
  } else {
    setBetweenPeriod(start, start.day, end.day, start.month, start.year);
  }
  return period;
};

const getPeriod: GetPeriod = (start, end, isEndDay, holidaysList) => {
  const period = buildPeriod(start, end, isEndDay);
  let counter = 0;
  period.periodDates.forEach((item: any) => {
    if (holidaysList[item]) counter += 1;
  });
  return { period, holidaysInPeriod: counter };
};

export default getPeriod;
