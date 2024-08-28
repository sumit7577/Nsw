import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import { Block, Button, Icon } from 'galio-framework'
import { Theme, Utils } from '../constants'

interface ModalProps {
  show: boolean,
  text?: string,
  button?: string,
  onDone: () => void;
  description?: string
}

export default function Model(props: ModalProps) {
  const { show, text, button, onDone, description } = props;
  return (
    <View>
      <Modal transparent={true} animationType={'none'} visible={show}>
        <View style={styles.modalBackground}>
          <Block style={styles.modal} >
            <Block middle gap={12} center style={{ height: "50%" }}>
              <Block style={{ backgroundColor: Theme.COLORS.PRIMARY, height: 50, width: 50, borderRadius: 25 }} center middle>
                <Icon name="done" family="MaterialIcons" color={Theme.COLORS.WHITE} size={30} />
              </Block>
              <Text style={[styles.text]}>{text ?? "Payment Successfull!"}</Text>
              {description && <Text style={[styles.text, { fontSize: 12, maxWidth: Utils.width / 1.8, textAlign: "center" }]}>{description}</Text>}
            </Block>

            <Button color={Theme.COLORS.PRIMARY} style={{ borderRadius: 12, width: Utils.width / 1.6 }} onPress={onDone}>
              <Text style={[styles.text, { color: Theme.COLORS.WHITE }]}>{button ?? "Done"}</Text>
            </Button>
          </Block>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Theme.COLORS.PRIMARY
  },
  modal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Theme.COLORS.WHITE,
    width: Utils.width / 1.3,
    height: Utils.height / 3,
    paddingVertical: "6%",
    borderRadius: 8
  },
  text: {
    fontFamily: Theme.FONTFAMILY.BOLD,
    color: Theme.COLORS.BLACK,
    fontSize: 14
  }
})