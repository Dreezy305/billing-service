import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
  providers: [BillingService],
  controllers: [BillingController],
})
export class BillingModule {}
