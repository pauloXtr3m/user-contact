import { TextInput, Text } from 'react-native-paper';
import React from "react";
import {Props} from "react-native-paper/src/components/TextInput/TextInput";
import {FieldError} from "react-hook-form";
import {View} from "react-native";

interface InputProps extends Props {
  errorValue?: FieldError
}
export const Input = React.forwardRef(({ style, errorValue, ...props}: InputProps, ref) =>  {
  return <View style={{ width: '100%', marginBottom: 12}}>
    <TextInput ref={ref} {...props} style={{ ...style, width: '100%'}} error={!!errorValue} />
    {errorValue && <Text variant="labelMedium" style={{ color: 'red', width: '100%'}}>{errorValue.message}</Text>}
  </View>
});
