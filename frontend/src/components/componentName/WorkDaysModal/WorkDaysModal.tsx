import React from 'react';
import {
  Modal, Text, TextInput, Pressable, View,
} from 'react-native';

import Button from '../../common/Button';
import styles from './WorkDaysModal.styles';

type WorkDayModalProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  addHours: (hours: string) => void;
  submitForm: () => void;
};

const WorkDaysModal: React.FC<WorkDayModalProps> = ({
  modalVisible, setModalVisible, addHours, submitForm,
}) => {
  const [hoursAmount, onChangeHoursAmount] = React.useState<string>('');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>

            <View style={styles.modalItem}>
              <View style={styles.textBox}>
                <Text style={styles.modalText}>
                  Введите количество рабочих часов за день:
                </Text>
              </View>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={onChangeHoursAmount}
                value={hoursAmount}
              />
            </View>

            <Button
              width={50}
              onClick={() => {
                setModalVisible(!modalVisible);
                addHours(hoursAmount);
                submitForm();
              }}
            >
              ОТПРАВИТЬ
            </Button>

          </View>
        </View>
      </Modal>

    </View>
  );
};

export default WorkDaysModal;
