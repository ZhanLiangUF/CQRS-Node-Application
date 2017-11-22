import { ICommand } from '@nestjs/cqrs';

export class QAttackCommand implements ICommand {
  constructor(
    public readonly championId: string,
    public readonly moveName: string,
    public readonly victimId: string,
  ) {}
}
