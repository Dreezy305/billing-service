import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  private pricingTiers = [
    { range: { min: 0, max: 1000000 }, pricePerThousand: 5 },
    { range: { min: 1000001, max: 10000000 }, pricePerThousand: 4.2 },
    { range: { min: 10000001, max: Infinity }, pricePerThousand: 3.5 },
  ];

  calculateCost(apiCalls: number): { cost: number; currency: string } {
    console.log(typeof apiCalls);
    if (isNaN(apiCalls) || apiCalls < 0) {
      throw new Error(
        'Invalid input. API calls must be a non-negative number.',
      );
    }

    let cost: number = 0;

    for (const tier of this.pricingTiers) {
      const { min, max } = tier.range;
      const callsInTier = Math.max(0, Math.min(apiCalls, max) - min);
      const callsInThousand = Math.ceil(callsInTier / 1000);
      cost += callsInThousand * tier.pricePerThousand;
    }

    return { cost, currency: '$' };
  }
}
