export const courses = [
  {
    id: 1,
    title: "Javascript zero to hero",
    description: [
      "JavaScript often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.",
      "JavaScript engine to execute the code on users' devices.JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven,",
      "JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.",
    ],
    coverPhoto:
      "https://res.cloudinary.com/arif5577/image/upload/v1666845645/Skilify/js_rzvjnx.jpg",
    price: 20,
    instructor: "Jonas",
    rating: 4.8,
    students: 147570,
  },
  {
    id: 2,
    title: "Vue js mastery",
    description: [
      "Vue uses an HTML-based template syntax that allows binding the rendered DOM to the underlying Vue instance's data. All Vue templates are valid HTML that can be parsed by specification-compliant browsers and HTML parsers. Vue compiles the templates into virtual DOM render functions. A virtual Document Object Model allows Vue to render components in its memory before updating the browser. Combined with the reactivity system, Vue can calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.",
      "Vue users can use template syntax or choose to directly write render functions using hyperscript either through function calls or JSX. Render functions allow applications to be built from software components.",
      "All Vue templates are valid HTML that can be parsed by specification-compliant browsers and HTML parsers. Vue compiles the templates into virtual DOM render functions. A virtual Document Object Model allows Vue to render components in its memory before",
      "Model allows Vue to render components in its memory before updating the browser. Combined with the reactivity system, Vue can calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.",
      "Vue users can use template syntax",
    ],
    coverPhoto:
      "https://res.cloudinary.com/arif5577/image/upload/v1666845483/Skilify/vue_vcefzd.jpg",
    price: 11,
    instructor: "ZTM",
    rating: 4.3,
    students: 2044,
  },
  {
    id: 3,
    title: "Think in a React Way",
    description: [
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",

      "React code is made of entities called components. These components are reusable and must be formed in the SRC folder following the Pascal Case as its naming convention (capitalize camelCase). Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass the values between components through props.",

      "In the above example, the name property with the value has been passed from the Example component to the Tool component.",

      "Also the return section is wrapped in a tag because there is a limitation in the return function, it can only return a single value. So all JSX elements and components are bound into a single tag.",

      "The two primary ways of declaring components in React are through function components and class-based components.",
    ],
    coverPhoto:
      "https://res.cloudinary.com/arif5577/image/upload/v1666845483/Skilify/react_aozlrp.jpg",
    price: 15,
    instructor: "Sumit",
    rating: 4.8,
    students: 75002,
  },
  {
    id: 4,
    title: "Learn Mern Stack with PH",
    description: [
      "MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework can work.",

      "Ready to take the next step? Set up your free Atlas account by clicking below and try our MERN Stack Tutorial to create a full-stack MERN application in no time.",

      "Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.",
      "The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.",
    ],
    coverPhoto:
      "https://res.cloudinary.com/arif5577/image/upload/v1666845483/Skilify/mern_kiylej.jpg",
    price: 16,
    instructor: "Jhankar",
    rating: 4.7,
    students: 50000,
  },
  {
    id: 5,
    title: "Node Js all need to know",
    description: [
      "The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.",

      "By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front end, you can connect to Express.js functions that power your application. Those functions, in turn, use MongoDB’s Node.js drivers, either via callbacks or using promises, to access and update data in your MongoDB database.",

      "If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, Express, and Node.",

      "That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval. Again, if you’re building in the cloud, you’ll want to look at Atlas. If you’re looking to set up your own MERN stack, read on!",
    ],
    coverPhoto:
      "https://res.cloudinary.com/arif5577/image/upload/v1666845483/Skilify/node_dd4rd6.jpg",
    price: 13,
    instructor: "Nayeem",
    rating: 4.5,
    students: 20000,
  },
  {
    id: 6,
    title: "TypeScript for beginner",
    description: [
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.Let’s start with MongoDB, the document database at the root of the MERN stack. MongoDB was designed to store JSON data natively (it technically uses a binary version of JSON called BSON), and everything from its command line interface to its query language (MQL, or MongoDB Query Language) is built on JSON and JavaScript.",
      "MongoDB works extremely well with Node.js, and makes storing, manipulating, and representing JSON data at every tier of your application incredibly easy. For cloud-native applications, MongoDB Atlas makes it even easier, by giving you an auto-scaling MongoDB cluster on the cloud provider of your choice, as easy as a few button clicks.",
      "Express.js (running on Node.js) and React.js make the JavaScript/JSON application MERN full stack, well, full. Express.js is a server-side application framework that wraps HTTP requests and responses, and makes it easy to map URLs to server-side functions. React.js is a front end JavaScript framework for building interactive user interfaces in HTML, and communicating with a remote server.",
      "The combination means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug. Plus, you only have to know one programming language, and the JSON document structure, to understand the whole system!,MERN is the stack of choice for today’s web developers looking to move quickly, particularly for those with React.js experience.",
    ],
    coverPhoto:
      "https://res.cloudinary.com/arif5577/image/upload/v1666845483/Skilify/ts_bqw0ni.jpg",
    price: 10,
    instructor: "Bhadon",
    rating: 4.1,
    students: 3200,
  },
];
