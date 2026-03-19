import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const plans = [
  {
    id: 1,
    name: 'Premium Membership',
    price: 19.99,
    features: ['Unlimited AI Coaching', 'Exclusive Content', 'Priority Support'],
  },
  {
    id: 2,
    name: 'Protein Plan',
    price: 29.99,
    features: ['Monthly Protein Delivery', 'AI Nutrition Advice'],
  },
  {
    id: 3,
    name: 'AI Coaching',
    price: 49.99,
    features: ['Personalized AI Workouts', 'Real-time Feedback'],
  },
];

export default function SubscriptionsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Subscription Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <Card key={plan.id} className="flex flex-col items-center p-8">
            <div className="text-2xl font-bold mb-2">{plan.name}</div>
            <div className="text-3xl font-extrabold mb-4">${plan.price.toFixed(2)}</div>
            <ul className="mb-6 space-y-2 text-white/80">
              {plan.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <Button href="/checkout" variant="primary" size="lg">Subscribe</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
