import { Provider } from '@nestjs/common';
import { StripeOptions } from '../interface/stripe-options.interface';
import Stripe from 'stripe';
import { STRIPE_TOKEN } from '../constants';

export const createStripeProvider = (
  options: StripeOptions | any,
): Provider<Stripe> => ({
  provide: STRIPE_TOKEN,
  useValue: new Stripe(options.apiKey, {
    apiVersion: options.apiVersion,
  }),
});
