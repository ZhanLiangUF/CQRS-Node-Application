import { ICommand } from '@nestjs/cqrs';

export class CalculateDamageCommand implements ICommand {
    constructor(public readonly championId, public readonly damageDone) {}
}