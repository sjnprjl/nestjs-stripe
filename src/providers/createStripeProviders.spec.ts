import { Provider } from '@nestjs/common';
import { STRIPE_TOKEN } from '../constants';
import Stripe from 'stripe';

import { createStripeProvider } from './createStripeProviders';
import { StripeOptions } from 'src/interface/stripe-options.interface';

describe('stripeProvider', () => {
  const apiKey = 'test key';
  let provider: Provider<Stripe>;

  beforeEach(() => {
    provider = createStripeProvider({
      apiKey,
      config: {
        apiVersion: '2022-11-15',
      },
    } as StripeOptions);
  });

  describe('when invoke', () => {
    it('should have correct provider token', () => {
      expect(provider).toHaveProperty('provide', STRIPE_TOKEN);
    });
  });

  it('should create stripe instance', () => {
    expect((provider as any).useValue).toBeInstanceOf(Stripe);
  });
});
