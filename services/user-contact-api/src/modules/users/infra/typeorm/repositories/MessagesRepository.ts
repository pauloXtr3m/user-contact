import { getRepository, Not, Repository } from 'typeorm';

import IMessagesRepository from "@modules/users/repositories/IMessagesRepository";
import Message from "@modules/users/infra/typeorm/entities/Message";
import ICreateMessageDTO from "@modules/users/dtos/ICreateMessageDTO";

class MessagesRepository implements IMessagesRepository {
  private ormRepository: Repository<Message>;

  constructor() {
    this.ormRepository = getRepository(Message);
  }

  public async findByEmail(email: string): Promise<Message[] | undefined> {
    return this.ormRepository.find({ where: { email } });
  }

  public async create(messageData: ICreateMessageDTO): Promise<Message> {
    const message = this.ormRepository.create(messageData);

    return this.ormRepository.save(message);
  }

  public async save(user: Message): Promise<Message> {
    return this.ormRepository.save(user);
  }
}

export default MessagesRepository;
