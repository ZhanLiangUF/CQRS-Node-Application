import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { DamageDealtEvent } from '../models/damage-dealt.event';

@EventsHandler(DamageDealtEvent)
export class DamageDealtEventHandler implements IEventHandler<DamageDealtEvent> {
    handle(event: DamageDealtEvent) {
        // To DO: Add actual effects
    }
}