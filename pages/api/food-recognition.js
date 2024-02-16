import { getSnapshotFileFromRequestBody } from '@/utils/getSnapshotFileFromRequestBody';
import { predictFood } from '@/utils/predictFood';

export default async function handler(req,res) {
  if (req.method !== 'POST') {
    console.warn(`Method ${req.method} not allowed for endpoint /food-recognition!`);
    return res.status(405).end();
  }
  const file = await getSnapshotFileFromRequestBody(req);
  const resp = await predictFood(file);

  res.status(200).json(resp);
}

export const config = {
  api: {
    bodyParser: false,
  },
};