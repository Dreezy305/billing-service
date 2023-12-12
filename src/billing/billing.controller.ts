import { Controller, Get, Query } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}
  @Get('calculate')
  calculateBill(@Query('apiCalls') apiCalls: number): { cost: number } {
    const cost: any = this.billingService.calculateCost(apiCalls);
    return { cost };
  }
}
