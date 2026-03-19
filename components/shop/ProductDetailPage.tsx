import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const product = {
  id: 1,
  name: 'Whey Protein',
  price: 49.99,
  image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
  description: 'Premium grass-fed whey protein for muscle growth and recovery.',
};

export default function ProductDetailPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Card className="p-8 flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-64 h-64 rounded-2xl object-cover shadow-xl" />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <div className="text-xl text-white/80 mb-4">${product.price.toFixed(2)}</div>
            <p className="text-white/70 mb-6">{product.description}</p>
          </div>
          <Button href="/cart" variant="primary" size="lg">Add to Cart</Button>
        </div>
      </Card>
    </div>
  );
}
