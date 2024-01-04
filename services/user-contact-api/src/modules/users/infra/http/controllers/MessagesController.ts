import { Response, Request } from 'express';
import CreateUserService from '@modules/users/services/CreateUserService';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateMessageService from "@modules/users/services/CreateMessageService";

export default class MessagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, content, userId} = request.body;

    const createMessage = container.resolve(CreateMessageService);

    const message = await createMessage.execute({
      name,
      email,
      phone,
      content,
      userId
    });

    return response.json(classToClass(message));
  }
}
