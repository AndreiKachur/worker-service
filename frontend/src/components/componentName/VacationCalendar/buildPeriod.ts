
const buildPeriod = (start: any, end: any, clickCounter: number) => {

  if (!start) return

  const period: any = {}

  const intervalPatterns = {
    start: { startingDay: true, color: '#50cebb', textColor: 'white' },
    between: { color: '#70d7c7', textColor: 'white' },
    end: { endingDay: true, color: '#50cebb', textColor: 'white' }
  }

  //подсвечиваем стартовый день
  if (clickCounter === 1) {
    period[start.dateString] = intervalPatterns.start
    return period
  }

  if (!end) return

  // добавляем начало и окончание периода
  period[start.dateString] = intervalPatterns.start
  period[end.dateString] = intervalPatterns.end

  //добавляем дни между стартом и окончанием периода
  for (let day = start.day + 1; day < end.day; day++) {

    let month = start.month

    day = day > 9 ? day : ['0', day].join('')
    month = month > 9 ? month : ['0', month].join('')

    const dateString = [start.year, month, day].join('-')

    period[dateString] = intervalPatterns.between
  }

  return period
}

export default buildPeriod