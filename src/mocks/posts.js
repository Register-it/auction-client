const posts = [
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "m3n4dl25zhlw0e87s1xom",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title:
      "Some Good News: You Don’t Need to Worry About the Coronavirus Mutating"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "3syhoal2ae3gg79cii9mn",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Don’t create a logo, build a unique brand experience"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "94ltrpw4wyuty4ipabu9ii",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "The 25 Best VS Code Extensions"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "8f1a3cjneq6fo5g4wk8jvm",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "The tools for the job — How I code frontend apps in 2020"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "t6couny1vt03mlttu8vara",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "New from your network"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "fkmh08elo9hyn5w4t3meyq",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "An Introduction to GraphQL With Apollo Client and React Hooks"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "af58xc6rukvkt71k2yvap",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Six things you should know about Objects in JavaScript"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "9abj09b4o35ujmh5q19for",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Top Git GUI Tools and Extensions for 2020"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "z3lewqqmpwhe3y1xl0lgi",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Reading list"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "o4kdg75csvhp5avik0lj",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "5 Best Practices for writing clean JavaScript"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "vnfjzekwt4jzsc9oj5stle",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title:
      "React Native 0.62 and Flipper Will Change Your Mobile Development Experience and make it easier!"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "1wbvakhaofwtbg4ltegegj",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Choosing MobX over Redux for large-scale Enterprise Applications"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "fe1w43dha7qyo09v5tklr",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Quickstart CI with Jenkins and Docker-in-Docker"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "lpqscr6kzrqpuv86tpds4",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "31 Important Things You Should Say No to For a Happier Life"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "hds1l3pi3np41fu5n7793",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "11 things you should know about GET vs POST"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "kpl5fqufft7oao7qz05xe",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Popular on Medium"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "95bdjrymo2qvym6sz4wr19",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "How to Compose Functions in JavaScript"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "w5tqhddnjusiwzp4j7116m",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title:
      "3 Steps to Turn a Random React Application Into a Micro Frontend Container"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "zxekbuhp4l8452dz128uji",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "The 7 Habits of Highly Effective Self-Taught Developers"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "ixt4wcovx0a603e7jwmz2h",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "New from your network"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "sd97of0jkpdeezx4z1ytyn",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Popular on Medium"
  },
  {
    author: {
      image: "https://miro.medium.com/fit/c/96/96/1*4duhg3iAusVFxUW7ZgrysQ.png",
      id: "123456",
      displayName: "Lorenzo Spyna"
    },
    date: "2020-04-04T08:19:53.021Z",
    readingTime: 6,
    id: "h1jx7rhwwbr5ug01z9juuh",
    subtitle:
      "Disclaimer: I use Redux with React in production and I’m pretty happy with it.",
    title: "Reading list"
  }
]

export default posts
