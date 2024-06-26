import { grpc } from 'clarifai-nodejs-grpc';
import { V2Client } from 'clarifai-nodejs-grpc/proto/clarifai/api/service_grpc_pb';
import { PostModelOutputsRequest } from 'clarifai-nodejs-grpc/proto/clarifai/api/service_pb';
import { Data, Input, UserAppIDSet, Image } from 'clarifai-nodejs-grpc/proto/clarifai/api/resources_pb';

const client = new V2Client('api.clarifai.com', grpc.ChannelCredentials.createSsl());
const MODEL_ID = process.env.CLARIFAI_MODEL
const CLARIFAI_TOKEN= process.env.CLARIFAI_TOKEN

export async function predictFood(file) {
  const req = new PostModelOutputsRequest()

  const userAppIdSet = new UserAppIDSet()
  userAppIdSet.setUserId('clarifai')
  userAppIdSet.setAppId('main')

  req.setUserAppId(userAppIdSet)
  req.setModelId(MODEL_ID)

  const input = fileToImage(file)
  req.setInputsList([input])

  const metadata = new grpc.Metadata()
  metadata.set('Authorization', `Key ${CLARIFAI_TOKEN}`)

  return new Promise((resolve, reject) => {
    client.postModelOutputs(req, metadata, (error, resp) => {
      if (error) {
        return reject(error);
      }

      const output = resp.getOutputsList()[0]

      const concepts = output.getData()?.getConceptsList();
      if (!concepts || concepts.length === 0) {
        return resolve({ recognized: false });
      }
      const mostLikely = concepts[0];
      if (mostLikely.getValue() > 0.4) {
        const response = {
          recognized: true,
          name: concepts[0].getName(),
          score: concepts[0].getValue(),
        };
        return resolve(response);
      } else {
        const response = {
          recognized: false,
        };
        return resolve(response);
      }
    });
  });
}

function fileToImage(file) {
  const input = new Input();
  const data = new Data();
  const img = new Image();
  img.setBase64(file);
  data.setImage(img);
  input.setData(data);
  return input;
}