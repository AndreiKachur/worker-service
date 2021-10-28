import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import Separator from '../../common/Separator';
import ButtonCancel from '../ButtonCancel';
import VacationInfoEmpty from '../VacationInfoEmpty';
import styles from './VacationInfoBlock.styles';

type VacationInfoBlockProps = {
  submitForm: (id: number) => void,
  data: any
};

const VacationInfoBlock: React.FC<VacationInfoBlockProps> = ({
  data, submitForm,
}) => (
  <View>
    <Text style={styles.header}>{data.title} </Text>
    {
        !data.items.length && <VacationInfoEmpty />
      }
    {
        data.items.map((item: any) => {
          const { status } = item;

          return (
            <View key={item.start + Math.random()}>
              <View style={styles.vacationCard}>
                <Text style={styles.textBold}>
                  с {item.start} по {item.end}
                </Text>
                {(status !== 'Исполнено'
                  && status !== 'Отмена - на рассмотрении')
                  && <ButtonCancel submitForm={() => submitForm(item.id)} />}
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
);

export default observer(VacationInfoBlock);