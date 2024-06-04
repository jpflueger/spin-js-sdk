/**
 * General purpose error.
 */
export type Error = ErrorOther;
export interface ErrorOther {
  tag: 'other',
  val: string,
}
export interface Properties {
  contentType?: string,
  contentEncoding?: string,
  headers?: [string, string][],
  deliveryMode?: number,
  priority?: number,
  correlationId?: string,
  replyTo?: string,
  expiration?: string,
  messageId?: string,
  timestamp?: string,
  kind?: string,
  userId?: string,
  appId?: string,
  clusterId?: string,
}
/**
 * A message with a binary payload, a format specification, and decorative metadata.
 */
export interface Message {
  tag: bigint,
  exchange: string,
  routingKey: string,
  redelivered: boolean,
  properties?: Properties,
  data: Uint8Array,
}
