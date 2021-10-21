import React, { useState } from "react";
import { Alert, Modal, Text, TextInput, Pressable, View } from "react-native";
import colors from "../../../themes";
import Button from "../../common/Button";

import styles from './WorkDayModal.styles';

type WorkDayModalProps = {
  title: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  addHours(hours: string): void;
};

const WorkDayModal: React.FC<WorkDayModalProps> = ({ title, modalVisible, setModalVisible, addHours }) => {
  // const [modalVisible, setModalVisible] = useState(true);
  const [hoursAmount, onChangeHoursAmount] = React.useState<string>('');


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Pressable
              style={[styles.button, styles.buttonClose,]}
              onPress={() => setModalVisible(!modalVisible)}>
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
                keyboardType='numeric'
                onChangeText={onChangeHoursAmount}
                value={hoursAmount}
              />
            </View>

            <Button
              width={50}
              onClick={() => {
                setModalVisible(!modalVisible)
                addHours(hoursAmount)
              }}>
              {title === 'ИЗМЕНИТЬ' ?
                'ИЗМЕНИТЬ ДАННЫЕ'
                :
                'ОТПРАВИТЬ ДАННЫЕ'}
            </Button>

          </View>
        </View>
      </Modal>

      {/* <Button
        width={27}
        paddingVertical={10}
        marginVertical={1}
        onClick={() => setModalVisible(true)}>
        {title}
      </Button> */}

    </View>
  );
};

export default WorkDayModal
