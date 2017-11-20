import { Champion } from "../models/champion.model";
import { Component } from "@nestjs/common";

@Component()
export class ChampionRepository {
    async findOneById(id: string): Promise<Champion> {
        return new Champion('ID_Yasuo')
    }
}