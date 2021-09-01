import { createContext } from "react";


export const CONTENT_TYPE = {
  POST: "POST",
  ARTICLE: "ARTICLE"
}

export const userContext = createContext(null);

export const LOCAL_ARTICLES = [
  {
    "type": "POST",
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "content": "She's a considerate person.",
    "title": "",
    "createdAt": {
      "seconds": 1630498364,
      "nanoseconds": 58000000
    },
    "id": "ClMPouNVqwYjlKBnn2IA"
  },
  {
    "createdAt": {
      "seconds": 1630498284,
      "nanoseconds": 6000000
    },
    "title": "",
    "content": "> Lonely, Mr. Lonly, how you came here?",
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "type": "POST",
    "id": "e7AgG0Ab3JJ1e6OcIdlp"
  },
  {
    "type": "POST",
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "content": "If it wasn't coding, was it cooking? Lol",
    "createdAt": {
      "seconds": 1630494905,
      "nanoseconds": 695000000
    },
    "title": "",
    "id": "Bs4JCXU8We8OyfDaEgQf"
  },
  {
    "type": "ARTICLE",
    "title": "Happy Opning",
    "content": "Today, I have a dream.",
    "createdAt": {
      "seconds": 1630143213,
      "nanoseconds": 399000000
    },
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "id": "b3UVLUqZip9NBnqrdVcl"
  }
];