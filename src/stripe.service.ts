import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';

import { StripeOptions } from './interface/stripe-options.interface';
import { MODULE_OPTIONS_TOKEN } from './stripe.module-definition';

@Injectable()
export class StripeService {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: StripeOptions) {}
}
