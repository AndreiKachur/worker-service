import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import baseApiUrl from '../../../ipconfig';
import VacationCalendar from '../VacationCalendar';
import Button from '../../common/Button';
import Separator from '../../common/Separator';
import Day from '../models/day';
import styles from './VacationForm.styles';
import colors from '../../../themes';

type VacationFormProps = {
    setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
    toogleBlocks: () => void;
    setServerAnswer: React.Dispatch<any>;
};

const monthsNames = ['янв.', 'фев.', 'мрт.', 'апр.', 'мая', 'июня',
    'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];

const VacationForm: React.FC<VacationFormProps> = ({
    setSpinner,
    toogleBlocks,
    setServerAnswer,
}) => {
    const { restDaysAmount } = vacationStore.data.thisYear;

    const [vacationDaysAmount, setVacationDaysAmount] = useState(0);
    const [startDate, setStartDate] = useState<Day>();
    const [endDate, setEndDate] = useState<Day>();

    const computeDaysAmount = () => {
        if (!startDate || !endDate) return;
        const timeDifference = endDate.timestamp - startDate.timestamp;
        const daysDifference = (timeDifference / (1000 * 3600 * 24)) + 1;
        setVacationDaysAmount(daysDifference);
    };

    const getDayFormat = (d: Day) => [d.day, monthsNames[d.month - 1], d.year].join(' ');

    const daysDiff = restDaysAmount - vacationDaysAmount;
    const pointsDiff = startDate && endDate ? endDate.timestamp - startDate.timestamp : 0;

    const getTextStyle = (diff: number) => (
        diff < 0
            ? [styles.text, { backgroundColor: colors.danger, color: colors.third }]
            : styles.text
    );

    const sendForm = async () => {
        const data = {
            startDate,
            endDate,
            duration: vacationDaysAmount,
        };
        setSpinner(true);
        const res: any = await axios.post(`${baseApiUrl}/vacation`, { data });
        setTimeout(() => {
            setServerAnswer(res.data.answer);
            toogleBlocks();
            setSpinner(false);
        }, 1500);
        console.log(res.data);
    };

    useEffect(() => {
        computeDaysAmount();
    }, [endDate, computeDaysAmount]);

    return (
        <View>
            <View style={styles.calendar}>
                <VacationCalendar
                    setVacationDaysAmount={setVacationDaysAmount}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                />
            </View>

            <View style={styles.mainWrapper}>
                <View>
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
                        backgroundColor={daysDiff < 0 || pointsDiff < 0
                            ? colors.danger : colors.primary}
                        onClick={sendForm}
                    >
                        ОТПРАВИТЬ
                </Button>
                </View>
            </View>
        </View>
    );
};

export default observer(VacationForm);
