import {BaseContainer} from "@/components/BaseContainer";
import {Body} from "@/components/Body";
import {Button, Text} from 'react-native-paper';
import {useNavigation} from "@react-navigation/core";
import {AppBaseNavigationProp} from "@/routes/app.base.routes";

export function ContactSuccess () {
  const navigation = useNavigation<AppBaseNavigationProp>();
  return <BaseContainer>
    <Body>
      <Text variant="titleLarge">Mensagem enviada com sucesso!</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Contact')}>Enviar outra mensagem</Button>
    </Body>
  </BaseContainer>
}
