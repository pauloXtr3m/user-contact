import {MessageService} from "@/services/message";
import {Message} from "@/screens/Contact";

export const useMessage = () => {
  const create = (m: Message) => MessageService.create(m);

  return {
    create
  }
}
