import Stripe from 'stripe';
export interface StripeOptions {
  apiKey: string;
  apiVersion: Stripe.LatestApiVersion;
}
