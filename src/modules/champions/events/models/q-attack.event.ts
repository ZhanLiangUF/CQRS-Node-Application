import {  IEvent } from "@nestjs/cqrs";

export class QAttackEvent implements IEvent {
    constructor(
        public readonly championId: string,
        public readonly moveName: string,
    ) {}
}