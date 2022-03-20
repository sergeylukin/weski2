import { Controller, Get, Query } from '@nestjs/common';
import { OffersService } from './offers.service';

import { OFFERS_API_RESPONSE } from '@namespace/api-interfaces';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get('findByFilter?')
  findByFilter(
    @Query('resort') resort: string,
    @Query('from_date') from_date: string,
    @Query('to_date') to_date: string,
    @Query('group_size') group_size: string
  ): OFFERS_API_RESPONSE {
    return {
      data: this.offersService.findAll({
        resort,
        from_date,
        to_date,
        group_size,
      }),
    };
  }
}
