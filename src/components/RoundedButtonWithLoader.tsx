import {Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import ButtonSpinner from 'react-native-button-spinner';
import {Color} from "../values/color";

interface IRoundedButtonProps {
  title: string;
  disabled: boolean;
  onPress(arg0: any): void;
  type: 'primary' | 'secondary';
}

const RoundedButtonWithLoader = ({
  title,
  onPress,
  type,
  disabled,
}: IRoundedButtonProps) => {
  const buttonStyle =
    type === 'primary'
      ? {...styles.buttonStyle, ...styles.primaryStyle}
      : {...styles.buttonStyle, ...styles.secondaryStyle};

  return (
    <ButtonSpinner style={buttonStyle} disabled={disabled} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </ButtonSpinner>
  );
};

const styles = EStyleSheet.create({
  buttonStyle: {
    margin: 0,
    borderRadius: '5rem',
    paddingVertical: 7,
    paddingHorizontal: 5,
    marginRight: 13,
    alignItems: 'center',
    borderColor: 'transparent',
  },
  primaryStyle: {
    backgroundColor: Color.orange,
  },
  secondaryStyle: {
    backgroundColor: Color.lightBlue,
  },
  text: {
    color: 'white',
    fontSize: '12rem',
  },
});

export default RoundedButtonWithLoader;
