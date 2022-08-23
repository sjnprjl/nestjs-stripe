import Stripe from 'stripe';
export interface StripeOptions {
  apiKey: string;
  config: Stripe.StripeConfig;
}
