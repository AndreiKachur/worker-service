import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import { Data, Item } from '../../screens/VacationInfoScreen'
import Separator from '../../common/Separator';
import ButtonCancel from '../ButtonCancel';
import VacationInfoEmpty from '../VacationInfoEmpty';
import styles from './VacationInfoBlock.styles';

type VacationInfoBlockProps = {
  submitForm: (id: number) => void,
  data: Data
};

type monthNamesType = {
  [key: string]: string
}

const monthNames: monthNamesType = {
  '01': 'янв.',
  '02': 'фев.',
  '03': 'мрт.',
  '04': 'апр.',
  '05': 'мая',
  '06': 'июня',
  '07': 'июля',
  '08': 'авг.',
  '09': 'сен.',
  '10': 'окт.',
  '11': 'ноя.',
  '12': 'дек.',
}

const VacationInfoBlock: React.FC<VacationInfoBlockProps> = ({
  data, submitForm,
}) => {

  const formatDate = (str: string) => {
    const dateParts = str.split('-')
    dateParts[1] = monthNames[dateParts[1]]
    return dateParts.reverse().join(' ')
  }

  return (
    <View>
      <Text style={styles.header}>{data.title} </Text>
      {
        !data.items.length && <VacationInfoEmpty />
      }
      {
        data.items.map((item: Item) => {
          const { status } = item;

          return (
            <View key={item.start + Math.random()}>
              <View style={styles.vacationCard}>
                <Text style={styles.textBold}>
                  с {formatDate(item.start)} по {formatDate(item.end)}
                </Text>
                {
                  (status !== 'Исполнено'
                    && status !== 'Отмена - на рассмотрении')
                  && <ButtonCancel submitForm={() => submitForm(item.id)} />
                }
              </View>
              {
                (status === 'На рассмотрении'
                  || status === 'Отмена - на рассмотрении')
                && <Text style={styles.text}>Статус: {item.status} </Text>
              }
              <Separator />
            </View>
          );
        })
      }
    </View>
  )
};

export default observer(VacationInfoBlock);
