
export async function postFoodRecognition(snapshot) {
  const formdata = new FormData();
  formdata.set('snapshot', snapshot);

  const request = {
    method: 'POST',
    body: formdata,
  };

  const resp = await fetch('/api/food-recognition', request);
  const json = await resp.json();
  return json;
}