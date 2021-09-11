import { createContext } from "react";


export const CONTENT_TYPE = {
  POST: "POST",
  ARTICLE: "ARTICLE"
}

export const userContext = createContext(null);

export const LOCAL_ARTICLES = [
  {
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "type": "ARTICLE",
    "title": "a Test of Article Width",
    "content": "Why I see narrow width of article page even I have set the Tailwind CSS property `w-2/3 mx-auto`? That confused me! Is that related with Editor? That is said, because I type this article in this Editor, with limited width, I was gave a narrow horizonal length?",
    "createdAt": {
      "seconds": 1630540981,
      "nanoseconds": 54000000
    },
    "id": "XPR60YXkP2pY5sOz4bZe"
  },
  {
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "type": "POST",
    "title": "",
    "content": "Tailwind CSS: Rapidly build modern websites without ever leaving your HTML.\n\nA utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.\n\n`npm install tailwindcss`",
    "createdAt": {
      "seconds": 1630520981,
      "nanoseconds": 54000000
    },
    "id": "dsvHwgLIbNen4Rs58huo"
  },
  {
    "createdAt": {
      "seconds": 1630520794,
      "nanoseconds": 951000000
    },
    "type": "ARTICLE",
    "title": "Web addresses and links",
    "content": "## What is a website?\nWebsites, or *sites*, are places on the internet where you can find information, pay bills, play games, share photos and stories with others, and more. Banks, shops, governments and even individual people can have a website.\n\nEach website is made up of related pages. A web page can show text, images, video and sound.\n\n## What is a web address?\n\nYou may have heard of `www` in connection with the internet. This stands for worldwide web and it usually appears at the beginning of a web address. Every website has a unique address, and if you type a web address into a browser, it will go to that site and open it.\n\nWeb addresses may look strange at first but they're usually made up of `www` followed by two or more words, separated by dots. For example, the ABC's web address is `www.abc.net.au`.\n\n## Let's type a web address\n\nIf you know the address of a website you want to visit, you can type it into your browser. Let's watch how it's done.\n\nClick Continue to watch the video on the next screen.\n\n## What is a web link?\n\nOn a web page, you may notice that some words or phrases are underlined or coloured, usually in blue. These are called web links, also known as hyperlinks, and they can help you move around the internet.\n\nWhen you move the cursor over a web link, you'll see that the pointer changes, usually to a pointing hand.\n\nWhen you click on it, the web link will take you to a different web page. The address in **the Address bar** will change, and the page you're currently looking at will be replaced by the page that the web link points to.\n\n## How do you go back?\n\nIf you click on a web link but want to go back to the page you were just at, you can press the back button on your web browser. This looks like an arrow pointing left, and takes you back to the previous page.\n\nLet's take a look at a web link in action. On the next slide, click the play button to watch the short video demonstration.\n\n### eSafety tip\n\nWe recommend being cautious about clicking on links on websites, in emails or in text messages. Especially if you receive messages from people you don't know or you are visiting websites for the first time.\n\n## Congratulations!\n\nYou've completed the Web addresses and links activity.\n\nYou should now know:\n+ What a website and a web address is.\n+ How to type an web address into a browser.\n+ How to use web links to visit web pages.\n\nThere is another way to find websites on the internet too, and we'll look at this in the next activity, Search engines.",
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "id": "9uPKALaq7CocQgvwN4q5"
  },
  {
    "createdAt": {
      "seconds": 1630498364,
      "nanoseconds": 58000000
    },
    "title": "",
    "type": "POST",
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "content": "She's a considerate person.",
    "id": "ClMPouNVqwYjlKBnn2IA"
  },
  {
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "content": "> Lonely, Mr. Lonly, how you came here?",
    "title": "",
    "createdAt": {
      "seconds": 1630498284,
      "nanoseconds": 6000000
    },
    "type": "POST",
    "id": "e7AgG0Ab3JJ1e6OcIdlp"
  },
  {
    "createdAt": {
      "seconds": 1630494905,
      "nanoseconds": 695000000
    },
    "type": "POST",
    "content": "If it wasn't coding, was it cooking? Lol",
    "title": "",
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "id": "Bs4JCXU8We8OyfDaEgQf"
  },
  {
    "type": "ARTICLE",
    "authorId": "iObJaDHLwXaj9PzVzHdGspwO3Cq2",
    "content": "Today, I have a dream.",
    "createdAt": {
      "seconds": 1630143213,
      "nanoseconds": 399000000
    },
    "title": "Happy Opning",
    "id": "b3UVLUqZip9NBnqrdVcl"
  }
];