import React, {useRef, useState} from "react";
import {BaseContainer} from "@/components/BaseContainer";
import {Button, Text} from "react-native-paper";

import {useForm} from 'react-hook-form'
import {useNavigation} from "@react-navigation/core";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Body} from "@/components/Body";
import {Input} from "@/components/ui/Input";
import {Alert, Keyboard, KeyboardAvoidingView, Platform, TextInputBase, TouchableWithoutFeedback} from "react-native";
import {useMessage} from "@/hooks/message";
import {AppBaseNavigationProp} from "@/routes/app.base.routes";

export type Message = {
  name: string;
  email: string;
  phone: string;
  content: string;
}

const contactSchema = z.object({
  name: z.string({required_error: 'Nome é obrigatório'}).min(2, {
    message: 'Nome deve ter no mínimo 2 caracteres'
  }),
  email: z.string({required_error: 'Email é obrigatório'}).email({
    message: "Insira um email válido"
  }),
  phone: z.string({required_error: 'Telefone é obrigatório'}).min(11, {
    message: "Telefone deve ter 11 caracteres"
  }),
  content: z.string({required_error: 'Mensagem é obrigatória'})
})

export function Contact() {
  const {register, setValue, handleSubmit, formState: {errors},} = useForm<Message>({resolver: zodResolver(contactSchema)})
  const navigation = useNavigation<AppBaseNavigationProp>();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const { create } = useMessage();

  const onSubmit = async (data) => {
    try {
       await create(data);
       navigation.navigate('ContactSuccess');
    } catch(e) {
      console.error('[ERROR] onSubmit message\n\n', e);
      Alert.alert('Erro ao enviar mensagem!', 'Por favor, tente novamente mais tarde!');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <BaseContainer>
          <Body center>
            <Text variant='headlineLarge' style={{ marginBottom: 100}}>Fale conosco</Text>
            <Input mode="outlined" label="Nome" onChangeText={text => setValue('name', text)}
                   returnKeyType="next"
                   onSubmitEditing={() => secondInput?.current?.focus()}
                   errorValue={errors.name}
                   blurOnSubmit={false}/>
            <Input ref={secondInput} mode="outlined" label="Email" onChangeText={text => setValue('email', text)}
                   returnKeyType="next"
                   onSubmitEditing={() => thirdInput?.current?.focus()}
                   errorValue={errors.email}
                   blurOnSubmit={false}/>
            <Input ref={thirdInput} mode="outlined" label="Telefone" onChangeText={text => setValue('phone', text)}
                   errorValue={errors.phone} returnKeyType="next" onSubmitEditing={() => fourthInput?.current?.focus()}
                   blurOnSubmit={false}/>
            <Input ref={fourthInput} mode="outlined" label="Mensagem" multiline={true}
                   numberOfLines={4} onChangeText={text => setValue('content', text)}
                   errorValue={errors.content}/>
            <Button mode="contained" onPress={handleSubmit(onSubmit)} style={{ width: '100%'}}><Text variant="titleMedium" style={{ color: 'white' }}>Enviar</Text></Button>
          </Body>
        </BaseContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
