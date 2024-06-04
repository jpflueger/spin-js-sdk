import { Message } from "./types/amqp";

export abstract class AmqpHandler {
  abstract handler(msg: Message): Promise<void>;
}