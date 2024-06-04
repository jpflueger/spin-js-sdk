import { AmqpMessage } from "@fermyon/spin-sdk";

export const handler = async (msg: AmqpMessage): Promise<void> => {
    console.log(`received message with key ${msg.routingKey} and ${msg.data.length} bytes`);
}