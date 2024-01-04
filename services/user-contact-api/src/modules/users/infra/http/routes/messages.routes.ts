import { Router } from 'express';

import UsersController from '@modules/users/infra/http/controllers/UsersController';
import { celebrate, Joi, Segments } from 'celebrate';
import MessagesController from "@modules/users/infra/http/controllers/MessagesController";

const messagesRouter = Router();
const messagesController = new MessagesController();

messagesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      content: Joi.string().required(),
      userId: Joi.string(),
    },
  }),
  async (request, response) => messagesController.create(request, response),
);

export default messagesRouter;
