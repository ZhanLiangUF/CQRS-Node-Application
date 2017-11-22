import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ChampionRepository } from '../../repository/champion.repository';
import { QAttackCommand } from '../models/q-attack.command';

@CommandHandler('QAttackHandler')
export class QAttackHandler implements ICommandHandler<QAttackCommand>  {
  constructor(
    // saving of events before getting sent on to the message broker
    private readonly repository: ChampionRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: QAttackCommand , resolve: (value?) => void) {
      // destructure
      const { championId, moveName, victimId } = command;
      const champion = this.publisher.mergeObjectContext(
        await this.repository.findOneById(championId),
      );
      champion.qAttack(moveName, victimId);
      // moment of dispatch
      champion.commit();
      resolve();
  }

}
