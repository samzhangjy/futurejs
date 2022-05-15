const config = {
  // global site information configuration
  site: {
    name: "LogTure", // site name
    title: "LogTure.", // site title
    subtitle: "The geek way to blog.", // site subtitle
    slogan: ["Eat", "Code", "Sleep"], // slogans
    owner: "LogTure Team", // site owner, used in footer copyright
  },
  // post configuration
  post: {
    folder: "posts", // post storage folder
  },
  // navbar links configuration
  links: [
    {
      text: "Home", // link text
      link: "/", // link url
    },
    {
      text: "Posts",
      link: "/posts",
    },
    {
      text: "Projects",
      link: "/sections/projects",
    },
    {
      text: "GitHub",
      link: "https://github.com/samzhangjy/logture",
    },
  ],
  // custom sections configuration
  custom: [
    {
      // section data, can be either an array of objects
      // or a string (see the `Join us` section below)
      data: [
        // if data is an array, then each object in the array
        // represents a card with certain information
        {
          title: "Project", // card title
          // card description
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "/assets/avatars/I-Am-System-32.jpeg", // card cover, shown on the left of card description
          link: "/", // the link to navigate to when clicking on the card
        },
        {
          title: "Project",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "/assets/avatars/I-Am-System-32.jpeg",
          link: "/",
        },
        {
          title: "Project",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "/assets/avatars/I-Am-System-32.jpeg",
          link: "/",
        },
      ],
      name: "Projects", // section name (title)
      description: "A list of projects", // section description
      slug: "projects", // section slug, needed if the creation of a new page containing only this section is needed
      newPage: true, // weather to create a single page under `/sections/[slug]` or not
    },
    {
      data: [
        {
          title: "I Am System 32",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "/assets/avatars/I-Am-System-32.jpeg",
          link: "/",
        },
        {
          title: "Command_block",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "/assets/avatars/command_block.jpeg",
          link: "/",
        },
        {
          title: "montmorillonite",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "/assets/avatars/montmorillonite.jpg",
          link: "https://github.com/montmorillonite-CN",
        },
        {
          title: "samzhangjy",
          description:
            "Culpa amet consequat anim in sunt incididunt adipisicing non eu sunt. Exercitation amet aliqua velit Lorem. Ex sit voluptate officia nulla reprehenderit duis reprehenderit exercitation commodo.",
          cover: "/assets/avatars/samzhangjy.png",
          link: "https://github.com/samzhangjy",
        },
      ],
      name: "Members",
      description: "A list of members",
      slug: "members",
      newPage: false,
    },
    // section data can also be a string, in which case it will be used as the main content of the section
    {
      data: `Consectetur fugiat qui veniam Lorem nisi officia do duis. Deserunt deserunt cillum esse mollit. Ipsum id pariatur velit et ea eiusmod est ullamco pariatur esse. Pariatur laborum quis ex nulla nisi laborum. Tempor velit nostrud deserunt occaecat occaecat ut exercitation. Reprehenderit cupidatat ad nostrud exercitation pariatur commodo aliquip duis ut qui laborum.
  Cupidatat elit commodo anim dolor magna mollit culpa ea cillum laborum quis nisi excepteur do. Deserunt non magna nostrud eu fugiat cillum velit ut. Nulla duis sunt culpa esse aliquip Lorem esse consequat non duis. Reprehenderit aliquip sint id consectetur. Magna pariatur aliquip incididunt dolor magna elit nostrud Lorem officia velit dolore esse enim. Proident labore commodo dolor irure non aliqua duis incididunt ullamco qui reprehenderit ipsum deserunt.`,
      name: "Join us",
      description: "Join us",
      slug: "join-us",
      newPage: false,
    },
  ],
  showPoweredBy: true, // change it to false if you want to hide the `Powered by LogTure` text
  footer: `
    Made with ❤️ by 
    <a href="https://github.com/samzhangjy" rel="noreferrer" target="_blank">
      samzhangjy
    </a>.
  `, // extra footer content, can include HTML tags
};

export default config;
