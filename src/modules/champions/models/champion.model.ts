import { AggregateRoot } from '@nestjs/cqrs';
import { QAttackEvent } from '../events/models/q-attack.event';

export class Champion extends AggregateRoot {
    constructor(private readonly id: string) {
        super();
    }

    qAttack(name: string, victimId: string) {
        this.apply(new QAttackEvent(this.id, name, victimId));
    }

    wAttack(name: string) {

    }

    eAttack(name: string) {

    }

    rAttack(name: string) {

    }

    subtractHealth(damageDealt: string) {
        this.apply(new DamageDealtEvent(this.id, damageDealt))
    }
}