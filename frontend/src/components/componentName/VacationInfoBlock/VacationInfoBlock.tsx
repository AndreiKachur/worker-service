import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import Separator from '../../common/Separator';
import ButtonCancel from '../ButtonCancel';
import styles from './VacationInfoBlock.styles';

type VacationInfoBlockProps = {
  submitForm: () => Promise<void>,
  data: any
};

const VacationInfoBlock: React.FC<VacationInfoBlockProps> = ({
  data, submitForm,
}) => (
  <View>
    <Text style={styles.header}>{data.title} </Text>
    {
      data.items.map((item: any) => {
        const { status } = item;

        return (
          <View key={status}>
            <View style={styles.vacationCard}>
              <Text style={styles.textBold}>
                с {item.start} по {item.end}
              </Text>
              {
                status === 'исполнено'
                  ? null
                  : <ButtonCancel submitForm={submitForm} />
              }
            </View>
            {
              status === 'оформлено' || status === 'исполнено'
                ? null
                : <Text style={styles.text}>Статус: {item.status} </Text>
            }
            <Separator />
          </View>
        );
      })
    }
  </View>

);

export default observer(VacationInfoBlock);
