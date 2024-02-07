import { FoodRecognitionResponse } from '@/types';
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req,res) {
  if (req.method !== 'POST') {
    console.warn(`Method ${req.method} not allowed for endpoint /food-recognition!`);
    return res.status(405).end();
  }
  const score = Math.random();
  const response = score > 0.4
    ? { name: 'John Doe', score, recognized: true }
    : { recognized: false };

  res.status(200).json(response);
}