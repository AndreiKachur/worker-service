import colors from '../../../themes';

export const holidaysList: any = {};

export function getHolidays(holidays: any): void {
  const { common } = holidays;
  holidays.years.forEach((year: string) => {
    common[year].forEach((item: string) => {
      holidaysList[item] = {
        disabled: true,
        startingDay: true,
        endingDay: true,
        textColor: colors.danger,
      };
    });
  });
}
