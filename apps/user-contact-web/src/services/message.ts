import {Message} from "@/app/contato/page";
import {MessageResponseDTO} from "@/services/dtos/MessageResponseDTO";
import axios from "axios";
import {Search} from "@/app/mensagens/busca/page";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/messages`
})
export const MessageService = {
  create: async (data: Message): Promise<MessageResponseDTO> => {
    return (await api.post<MessageResponseDTO>('', data)).data;
  },
  search: async (data: Search): Promise<MessageResponseDTO[]> => {
    return (await api.post<MessageResponseDTO[]>('/search', data)).data;
  }
}
