import { Controller, Get, Param } from '@nestjs/common';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  findAll(@Param('resort') resort: number) {
    return this.offersService.findAll({
      resort,
      from_data,
      to_data,
      group_size,
    });
  }
}
