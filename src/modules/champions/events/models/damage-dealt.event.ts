import {  IEvent } from "@nestjs/cqrs";

export class DamageDealtEvent implements IEvent {
    constructor(
        public readonly championId: string,
        public readonly damageDealt: string
    ) {}
}