import React from "react";
import {Text, Button, useTheme} from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import {View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/core";
import {BaseContainer} from "@/components/BaseContainer";
import {AppBaseNavigationProp} from "@/routes/app.base.routes";
import {Body} from "@/components/Body";


export function Home() {
  const navigation = useNavigation<AppBaseNavigationProp>();
  return (
      <BaseContainer>
        <StatusBar style="auto" />
        <Body>
          <View>
            <Text variant="headlineMedium">Fale conosco</Text>
            <Text variant="bodyLarge">Nos envie sua mensagem, ficaremos felizes em atendê-lo</Text>
          </View>

          <Button mode="contained" onPress={() => navigation.navigate('Contact')}>Enviar mensagem</Button>
        </Body>

      </BaseContainer>
  )
}
