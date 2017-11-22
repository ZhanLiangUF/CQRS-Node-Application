import { EventPublisher, ICommandHandler, CommandHandler, ICommand } from '@nestjs/cqrs';
import { CalculateDamageCommand } from '../models/calculate-damage.command';
import { ChampionRepository } from '../../repository/champion.repository';


@CommandHandler(CalculateDamageCommand)
export class CalculateDamageHandler implements ICommandHandler<CalculateDamageCommand> {
    
    constructor(
        private readonly repository: ChampionRepository,
        private readonly publisher: EventPublisher
    ) {}

    async execute(command: CalculateDamageCommand, resolve: (value?) => void) {
        const { championId, damageDone } = command
        const champion = this.publisher.mergeObjectContext(
            await this.repository.findOneById(championId)
        );
        champion.subtractHealth(damageDone);
        champion.commit();
        resolve();
    }

}