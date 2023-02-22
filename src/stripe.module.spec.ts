import { Test } from '@nestjs/testing';
import Stripe from 'stripe';
import { STRIPE_TOKEN } from './constants';
import { StripeModule } from './stripe.module';

describe('StripeModule', () => {
  const apiKey = 'testkey';

  describe('forRoot', () => {
    it('should provide the stripe client instance', async () => {
      const module = await Test.createTestingModule({
        imports: [
          StripeModule.forRoot({
            apiKey,
            config: { apiVersion: '2022-11-15' },
          }),
        ],
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
              useFactory: () => ({
                apiKey,
                config: { apiVersion: '2022-11-15' },
              }),
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
