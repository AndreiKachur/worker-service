import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import Separator from '../../common/Separator';
import ButtonCancel from '../ButtonCancel';
import VacationInfoEmpty from '../VacationInfoEmpty'
import styles from './VacationInfoBlock.styles';

type VacationInfoBlockProps = {
  submitForm: () => void,
  data: any
};

const VacationInfoBlock: React.FC<VacationInfoBlockProps> = ({
  data, submitForm,
}) => {


  return (
    <View>
      <Text style={styles.header}>{data.title} </Text>
      {
        !data.items.length && <VacationInfoEmpty />
      }
      {
        data.items.map((item: any) => {
          const { status } = item;

          return (
            <View key={status}>
              <View style={styles.vacationCard}>
                <Text style={styles.textBold}>
                  с {item.start} по {item.end}
                </Text>
                {status !== 'Исполнено' && <ButtonCancel submitForm={submitForm} />}
              </View>
              {
                status === 'На рассмотрении' &&
                <Text style={styles.text}>Статус: {item.status} </Text>
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
