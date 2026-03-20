// Stripe frontend helpers
import { loadStripe } from '@stripe/stripe-js';

let stripePromise: any;
export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
}
