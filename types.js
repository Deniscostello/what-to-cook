/**
 * If Clarifai can match us with a celebrity, return the name and score.
 * Otherwise, just return `false`.
 */
const FoodRecognitionResponse = {
    recognized: true,
    name: String,
    score: Number,
  } | {
    recognized: false
  }