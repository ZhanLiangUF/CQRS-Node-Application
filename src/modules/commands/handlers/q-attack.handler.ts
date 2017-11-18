import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { QAttackCommand } from '../models/q-attack.model';

@CommandHandler('QAttackHandler')
export class QAttackHandler implements ICommandHandler<QAttackCommand>  {
  constructor(
    private readonly repository: ChampionRepository
  ) {}

  async execute(command: QAttackCommand , resolve: (value?) => void) {
      // destructure
      const { championId, moveId} =
  }

}
