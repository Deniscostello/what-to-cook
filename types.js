/**
 * If Clarifai can match us with a celebrity, return the name and score.
 * Otherwise, just return `false`.
 */
const FoodRecognitionResponse = {
    recognized: true,
    name: string,
    score: number,
  } | {
    recognized: false
  }