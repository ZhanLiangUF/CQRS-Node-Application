import { Controller, Post, Body, Param } from '@nestjs/common';
import { ChampionService } from './champions.service'
import { QAttack } from './champions.interface'

@Controller('champion')
export class ChampionsController {
  constructor(private readonly championService: ChampionService) {}

  @Post(':id/move/:victimId')
  async qAttack(@Param('id') id: string,  @Param('victimId') victimId: string, @Body() qAttack: QAttack) {
    await this.championService.qAttack(id, qAttack, victimId);
  }
}
