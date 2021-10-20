import React, { useState } from "react";
import { Alert, Modal, Text, TextInput, Pressable, View } from "react-native";
import colors from "../../../themes";
import Button from "../../common/Button";

import styles from './WorkDayModal.styles';

const WorkDayModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = React.useState<string | undefined>();


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
              style={[styles.button, styles.buttonClose]}
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
                onChangeText={onChangeNumber}
                value={number}
              />
            </View>
            <Button
              width={50}
              onClick={() => {
                setModalVisible(!modalVisible);
              }}>
              ОТПРАВИТЬ ДАННЫЕ
            </Button>

          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>УКАЗАТЬ</Text>
      </Pressable>
    </View>
  );
};

export default WorkDayModal
