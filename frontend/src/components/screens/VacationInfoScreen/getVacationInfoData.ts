type Item = {
  start: string,
  end: string,
  duration: number,
  status: string,
};

type Data = {
  title: string,
  items: Item[]
};

type Dates = {
  id: number;
  start: string;
  end: string;
  duration: number;
  status: string;
}[];

function getVacationInfoData(dates: Dates): Data[] {
  const dateNow = +Date.now();

  const data: Data[] = [
    {
      title: 'Запросы на рассмотрении:',
      items: [],
    },
    {
      title: 'Оформленные отпуска:',
      items: [],
    },
    {
      title: 'Архив отпусков:',
      items: [],
    },
  ];

  dates.forEach((item: Item) => {
    if (+new Date(item.start) < dateNow) {
      data[2].items.push(item);
    } else if (item.status === 'Оформлено') {
      data[1].items.push(item);
    } else {
      data[0].items.push(item);
    }
  });

  data.forEach((d, i) => {
    data[i].items = d.items.sort((a, b) => +new Date(a.start) - (+new Date(b.start)));
  });

  return data;
}

export default getVacationInfoData;
