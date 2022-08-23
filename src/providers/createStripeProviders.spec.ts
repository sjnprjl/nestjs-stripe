import { Provider } from '@nestjs/common';
import { STRIPE_TOKEN } from '../constants';
import Stripe from 'stripe';

import { createStripeProvider } from './createStripeProviders';

describe('stripeProvider', () => {
  const apiKey = 'test key';
  let provider: Provider<Stripe>;

  beforeEach(() => {
    provider = createStripeProvider({ apiKey, apiVersion: '2022-08-01' });
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
