import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';
import ICreateMessageDTO from "@modules/users/dtos/ICreateMessageDTO";
import Message from "@modules/users/infra/typeorm/entities/Message";

export default interface IMessagesRepository {
  findByEmail(email: string): Promise<Message[] | undefined>;
  create(data: ICreateMessageDTO): Promise<Message>;
  save(data: Message): Promise<Message>;
}
