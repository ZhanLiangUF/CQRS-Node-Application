import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { QAttackEvent } from '../models/q-attack.event';

@EventsHandler(QAttackEvent)
export class QAttackEventHandler implements IEventHandler<QAttackEvent> {
    handle(event: QAttackEvent) {
        // To DO: Add actual effects
    }
}