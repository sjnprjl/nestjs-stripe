import { Test } from '@nestjs/testing';
import Stripe from 'stripe';
import { STRIPE_TOKEN } from './constants';
import { StripeModule } from './stripe.module';

describe('StripeModule', () => {
  const apiKey = 'testkey';

  describe('forRoot', () => {
    it('should provide the stripe client instance', async () => {
      const module = await Test.createTestingModule({
        imports: [StripeModule.forRoot({ apiKey, apiVersion: '2022-08-01' })],
      }).compile();
      const stripeClientInstance = module.get<Stripe>(STRIPE_TOKEN);

      expect(stripeClientInstance).toBeDefined();
      expect(stripeClientInstance).toBeInstanceOf(Stripe);
    });
  });
  describe('forRootAsync', () => {
    describe('when the `useFactory` property is used', () => {
      it('should provide the stripe client instance', async () => {
        const module = await Test.createTestingModule({
          imports: [
            StripeModule.forRootAsync({
              useFactory: () => ({ apiKey, apiVersion: '2022-08-01' }),
            }),
          ],
        }).compile();
        const stripeClientInstance = module.get<Stripe>(STRIPE_TOKEN);
        expect(stripeClientInstance).toBeDefined();
        expect(stripeClientInstance).toBeInstanceOf(Stripe);
      });
    });
  });
});
