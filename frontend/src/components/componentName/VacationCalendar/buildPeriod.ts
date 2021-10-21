import Day from '../models/day';

type SetBetweenPeriodType = (
  start: Day,
  beginDay: number,
  endDay: number,
  month: number | string) => void;

type BuildPeriodProps = (
  start: Day | undefined,
  end: Day | undefined,
  clickCounter: number,) => any;

const buildPeriod: BuildPeriodProps = (start, end, clickCounter) => {
  if (!start) return;

  const period: any = {};

  const intervalPatterns = {
    start: { startingDay: true, color: '#50cebb', textColor: 'white' },
    between: { color: '#70d7c7', textColor: 'white' },
    end: { endingDay: true, color: '#50cebb', textColor: 'white' },
  };

  // подсвечиваем стартовый день
  if (clickCounter === 1) {
    period[start.dateString] = intervalPatterns.start;
    return period;
  }

  if (!end) return;

  const daysInMonth = (month: number, year: number) => 32 - new Date(year, month - 1, 32).getDate();

  // добавляем начало и окончание периода
  period[start.dateString] = intervalPatterns.start;
  period[end.dateString] = intervalPatterns.end;

  // добавляем дни между стартом и окончанием периода
  const setBetweenPeriod: SetBetweenPeriodType = (startDay, beginDay, endDay, month) => {
    for (let day = beginDay + 1; day < endDay; day += 1) {
      const dayFormat = day > 9 ? day : ['0', day].join('');
      const newMonth = month > 9 ? month : ['0', month].join('');

      const dateString = [startDay.year, newMonth, dayFormat].join('-');

      period[dateString] = intervalPatterns.between;
    }
  };

  const monthEnd = daysInMonth(start.month, start.year) + 1;

  if (start.month !== end.month) {
    setBetweenPeriod(start, start.day, monthEnd, start.month);
    setBetweenPeriod(start, 0, end.day, end.month);
  } else {
    setBetweenPeriod(start, start.day, end.day, start.month);
  }

  return period;
};

export default buildPeriod;
