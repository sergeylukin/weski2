import { Controller, Get, Param } from '@nestjs/common';
import { OffersService } from './offers.service';

import { OFFERS_API_RESPONSE } from '@namespace/api-interfaces';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  findAll(
    @Param('resort') resort: string,
    @Param('from_date') from_date: string,
    @Param('to_date') to_date: string,
    @Param('group_size') group_size: string
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
