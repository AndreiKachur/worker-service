const intervalPatterns = {
  start: { startingDay: true, color: '#50cebb', textColor: 'white' },
  between: { color: '#70d7c7', textColor: 'white' },
  end: { endingDay: true, color: '#50cebb', textColor: 'white' }
}

const buildPeriod = (startDate: any, endDate: any, clickCounter: number) => {

  if (!startDate) return

  const period: any = {}

  //подсвечиваем стартовый день
  if (clickCounter === 1) {
    period[startDate.dateString] = intervalPatterns.start
    return period
  }

  if (!endDate) return

  // добавляем старт и окончание периода
  period[startDate.dateString] = intervalPatterns.start
  period[endDate.dateString] = intervalPatterns.end

  //добавляем дни между стартом и окончанием периода
  for (let index = startDate.day + 1; index < endDate.day; index++) {

    const dateParts = startDate.dateString.split('-')
    const day = + dateParts[2] + (index - startDate.day)
    dateParts[2] = day > 9 ? day.toString() : ['0', day].join('')
    const dateString = dateParts.join('-')

    period[dateString] = intervalPatterns.between
  }
  return period
}

export default buildPeriod