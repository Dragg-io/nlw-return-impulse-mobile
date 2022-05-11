import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import successImg from '../../assets/success.png';
import { Copyright } from '../Copyright/Copyright';

import { styles } from './styles';

interface Props {
  onSendAnotherFeedBack: () => void;
}

export function Success({ onSendAnotherFeedBack }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />
      <Text style={styles.title}>
        Agracemos o feedback
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onSendAnotherFeedBack}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}