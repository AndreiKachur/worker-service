import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

import vacationStore from '../../../stores/vacationStore/vacationStore';
import baseApiUrl from '../../../ipconfig';
import VacationCalendar from '../VacationCalendar';
import VacationFormText from '../VacationFormText'
import Day from '../models/day';
import styles from './VacationForm.styles';

type VacationFormProps = {
    setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
}

const monthsNames = ['янв.', 'фев.', 'мрт.', 'апр.', 'мая', 'июня',
    'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];

const VacationForm: React.FC<VacationFormProps> = ({ setSpinner }) => {

    const [vacationDaysAmount, setVacationDaysAmount] = useState(0);
    const [startDate, setStartDate] = useState<Day>();
    const [endDate, setEndDate] = useState<Day>();

    const computeDaysAmount = () => {
        if (!startDate || !endDate) return;
        const timeDifference = endDate.timestamp - startDate.timestamp;
        const daysDifference = (timeDifference / (1000 * 3600 * 24)) + 1;
        setVacationDaysAmount(daysDifference);
    };

    const sendForm = async () => {

        if (vacationDaysAmount <= 0) {
            return Alert.alert(
                `Выбранное количество дней: ${vacationDaysAmount}`,
                'Пожалуйста выберите корректные даты отпуска.',
            )
        }

        const data = {
            startDate,
            endDate,
            duration: vacationDaysAmount,
        };

        setSpinner(true);

        const res: any = await axios.post(`${baseApiUrl}/vacation`, { data });

        setTimeout(() => {
            Alert.alert(res.data.answer)
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

            <VacationFormText
                startDate={startDate}
                endDate={endDate}
                vacationDaysAmount={vacationDaysAmount}
                sendForm={sendForm}
            />

        </View>
    );
};

export default VacationForm;
