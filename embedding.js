import { pipeline } from "@xenova/transformers";

const extractor = await pipeline(
  "text-classification",
  "Xenova/all-MiniLM-L6-v2"
);

const embedding = await extractor("dog");

console.log(embedding.tolist()[0]);