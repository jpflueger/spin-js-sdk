import { Message } from "./types/amqp";
export declare abstract class AmqpHandler {
    abstract handler(msg: Message): Promise<void>;
}
