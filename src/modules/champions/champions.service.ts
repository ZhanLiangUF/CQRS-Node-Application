import { Component } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { QAttack } from './champions.interface'
import { QAttackCommand } from './commands/models/q-attack.command';

@Component()
export class ChampionService {
  constructor(private readonly commandBus: CommandBus){}

  async qAttack(championId: string, qAttack: QAttack) {
    return await this.commandBus.execute(
      new QAttackCommand(championId, qAttack.qName, qAttack.victimId)
    );
  }

}
