import { Component } from "@nestjs/common";
import { EventObservable, ICommand } from "@nestjs/cqrs";
import { Observable } from "rxjs/Observable";
import { DamageDealtEvent } from "../events/models/damage-dealt.event";
import { QAttackEvent } from "../events/models/q-attack.event";

@Component()
export class ChampionDamageDealtSagas {

    // Whenever champion issues a move a damagedealt command will also be issued
    victim = (events$: EventObservable<any>): Observable<ICommand> => {
        return events$.ofType(QAttackEvent)
            .map((event) => new DamageDealtEvent(event.victimId, event.damageDealt))
    }


}