import { Provider } from '@nestjs/common';
import Stripe from 'stripe';

import { STRIPE_TOKEN } from '../constants';
import { StripeOptions } from '../interface/stripe-options.interface';

export const createStripeProvider = (
  options: StripeOptions | any,
): Provider<Stripe> => ({
  provide: STRIPE_TOKEN,
  useValue: new Stripe(options.apiKey, options.options),
});
