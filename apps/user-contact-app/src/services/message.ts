import {MessageResponseDTO} from "@/services/dtos/MessageResponseDTO";
import axios from "axios";
import {Message} from "@/screens/Contact";

const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}/messages`
})
export const MessageService = {
  create: async (data: Message): Promise<MessageResponseDTO> => {
    console.log('api => ', api.defaults.baseURL);
    return (await api.post<MessageResponseDTO>('', data)).data;
  }
}
