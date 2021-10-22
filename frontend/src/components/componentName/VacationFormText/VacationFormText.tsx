import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import Button from '../../common/Button';
import Day from '../models/day';
import styles from './VacationFormText.styles';
import colors from '../../../themes';

type VacationFormTextProps = {
    startDate: Day | undefined,
    endDate: Day | undefined,
    vacationDaysAmount: number,
    sendForm: () => Promise<void>

}

const monthsNames = ['янв.', 'фев.', 'мрт.', 'апр.', 'мая', 'июня',
    'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];

const VacationFormText: React.FC<VacationFormTextProps> = ({
    vacationDaysAmount,
    startDate,
    endDate,
    sendForm
}) => {
    const { restDaysAmount } = vacationStore.data

    const daysDiff = restDaysAmount - vacationDaysAmount;

    const pointsDiff = startDate && endDate ? endDate.timestamp - startDate.timestamp : 0;

    const getButtonColor = daysDiff < 0 || pointsDiff < 0 ? colors.danger : colors.primary;

    const getDayFormat = (d: Day) => [d.day, monthsNames[d.month - 1], d.year].join(' ');

    const getTextStyle = (diff: number) => {
        if (diff < 0) {
            return [styles.text, { backgroundColor: colors.danger, color: colors.third }]
        } else {
            return styles.text
        }
    };

    return (
        <View style={styles.mainWrapper}>
            <View >
                <Text style={getTextStyle(daysDiff)}>
                    Количество доступных дней отпуска: {daysDiff}
                </Text>

                <Text style={styles.text}>
                    Дата начала отпуска: {startDate ? getDayFormat(startDate) : 'Не выбрана'}
                </Text>
                <Text style={pointsDiff < 0 ? getTextStyle(pointsDiff) : styles.text}>
                    Дата окончания отпуска: {endDate ? getDayFormat(endDate) : 'Не выбрана'}
                    {pointsDiff < 0 && ' (неверная дата)'}
                </Text>
                <Text style={getTextStyle(daysDiff)}>
                    Итого выбрано дней: {vacationDaysAmount}
                    {daysDiff < 0 && ' (превышен лимит дней)'}
                </Text>

                <Button
                    backgroundColor={getButtonColor}
                    onClick={sendForm}
                    marginVertical={20}
                >
                    ОТПРАВИТЬ
                </Button>
            </View>
        </View>
    );
};

export default observer(VacationFormText);
