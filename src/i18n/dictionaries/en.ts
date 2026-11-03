const en = {
  meta: {
    siteName: 'Omid Faryabi',
    titleTemplate: '%s - Omid Faryabi',
    defaultTitle: 'Omid Faryabi - Full-Stack Engineer & Solutions Lead',
    description:
      'Full-Stack Engineer & Solutions Lead at Nilva: from customer requirements to frontend, backend and Oracle databases. Leads a team of 4 developers, mentor at MaktabSharif. Contributed to Ba-Energy.ir serving 5M users.',
    ogLocale: 'en_US',
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    articles: 'Blog',
    uses: 'Tech Stack',
    mentoring: 'Mentoring',
    menu: 'Menu',
    navigation: 'Navigation',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle theme',
    switchToDark: 'Switch to dark theme',
    switchToLight: 'Switch to light theme',
    otherLanguage: 'فا',
    otherLanguageLabel: 'نمایش نسخه فارسی',
  },
  footer: {
    rights: 'Omid Faryabi. All rights reserved.',
    madeWith: 'Designed & built with Next.js',
  },
  social: {
    linkedin: 'Follow on LinkedIn',
    github: 'Follow on GitHub',
    telegram: 'Follow on Telegram',
  },
  home: {
    badge: 'Open to new opportunities',
    greeting: "Hi, I'm Omid Faryabi 👋",
    titleBefore: 'I build interfaces that',
    titleAccent: 'millions of people',
    titleAfter: 'rely on.',
    role: 'Full-Stack Engineer & Solutions Lead at Nilva',
    intro:
      "I'm a software engineer with 3+ years of experience, based in Tehran. I started at Nilva as a junior frontend developer and grew into a full-stack role: today I work directly with customers to understand what they need, then build it end to end, across the frontend, the backend and Oracle databases, while leading a team of 4 developers. I've contributed to applications serving millions of users, including Ba-Energy.ir with 5M users, and mentored over 200 junior developers.",
    ctaProjects: 'See my work',
    ctaContact: 'Get in touch',
    scroll: 'Scroll',
    latestArticles: 'Latest writing',
    allArticles: 'All articles',
    work: 'Work',
    present: 'Present',
    downloadCv: 'Download CV',
    company: 'Company',
    position: 'Role',
    date: 'Date',
    until: 'until',
    roles: [
      { company: 'Nilva', title: 'Full-Stack Engineer & Solutions Lead' },
      { company: 'Maktab Sharif', title: 'Mentor & Frontend Instructor' },
      { company: 'RixoShop', title: 'Frontend Developer (Remote)' },
    ],
    gallery: {
      visit: 'Visit website',
      open: 'Click to open',
      goTo: 'Go to image {n}',
      projects: [
        'Farm.maj.ir - Agricultural Management System',
        'ArtaMart - E-commerce Platform',
        'Farm.maj.ir - Agricultural Management System',
        'OffLand - Technology E-commerce',
        'Bazaro - Local Marketplace',
      ],
    },
  },
  newsletter: {
    title: 'Tech Updates & Insights',
    description:
      'Get the latest updates on frontend technologies, React best practices, and development insights. Unsubscribe anytime.',
    placeholder: 'Email address',
    join: 'Join',
    errors: {
      empty: 'Please enter your email address',
      invalid: 'Please enter a valid email.',
      exists: 'Email already subscribed',
      server: 'Internal server error',
    },
  },
  articles: {
    metaTitle: 'Articles',
    metaDescription:
      'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
    title: 'Writing on frontend engineering, leadership, and building for the web.',
    intro:
      'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
    readArticle: 'Read article',
    goBack: 'Go back to articles',
  },
  about: {
    metaTitle: 'About',
    metaDescription:
      "I'm Omid Faryabi, Full-Stack Engineer & Solutions Lead at Nilva with 3+ years of experience, leading a team of 4 developers. Mentor at MaktabSharif, contributed to Ba-Energy.ir serving 5M users.",
    title:
      "I'm Omid Faryabi. I live in Tehran, Iran, where I turn customer needs into working software and lead a team of developers.",
    // Paragraphs are split into plain/bold parts so both languages can keep
    // the emphasis in the right place.
    paragraphs: [
      [
        "I'm a passionate frontend developer with 3+ years of experience building scalable web applications. Born in 1999, I've dedicated myself to mastering modern web technologies and sharing knowledge with others. At Nilva my journey has taken me from junior frontend developer to frontend team lead, and on to a full-stack role where I own features from the first customer conversation to production.",
      ],
      [
        'At ',
        { strong: 'Nilva' },
        ", I started as a junior frontend developer in 2023, grew into frontend developer and then frontend team lead, and today I work as Full-Stack Engineer & Solutions Lead, still leading a team of 4 developers. I meet with customers to understand their needs and turn them into solutions, implement them across the frontend and backend, and work with Oracle databases: writing queries and APIs, migrating data and optimizing query plans. I also write the documentation and analyze how our users use the product. I contributed to ",
        { strong: 'Ba-Energy.ir' },
        ', a large-scale Next.js application serving 5 million users, promoting energy conservation. I implemented Next.js App Router and server components, significantly enhancing application performance and user experience.',
      ],
      [
        'My passion for education led me to ',
        { strong: 'Maktab Sharif' },
        ", where I've mentored and taught over ",
        { strong: '200 students' },
        ' in frontend development, focusing on React. This experience has deepened my understanding of core programming concepts and low-level code operations while helping me develop a strong professional network and collaborative skills.',
      ],
      [
        'At ',
        { strong: 'RixoShop' },
        ', I developed three e-commerce websites from scratch using Next.js, working remotely and honing my skills in modern web development. I also built ',
        { strong: 'Farm.maj.ir' },
        ", an agricultural contract management system with an admin dashboard for government-farmer interactions. Through all these projects, I've gained expertise in monitoring and logging tools like Sentry and Grafana, improving application reliability and maintaining high code quality standards.",
      ],
      [
        'My academic background includes a ',
        { strong: 'Bachelor of Accounting' },
        ' from Shahrood University of Technology (2017-2022), which gave me a strong foundation in analytical thinking and problem-solving. I complemented this with intensive frontend development training, including a ',
        { strong: 'ReactJS certification (320+ hours)' },
        ' from MaktabSharif Coding Bootcamp, where I mastered modern web development technologies and best practices.',
      ],
    ] as Array<Array<string | { strong: string }>>,
  },
  projects: {
    metaTitle: 'Projects',
    metaDescription:
      'Comprehensive portfolio of frontend projects including Ba-Energy.ir (5M users), e-commerce platforms, PWAs, and interactive web applications built with Next.js and React.',
    title: 'Frontend projects showcasing modern web development expertise.',
    intro:
      "A comprehensive collection of projects I've built using Next.js, React, and modern web technologies. From large-scale applications serving millions of users to innovative e-commerce solutions and interactive web apps, each project demonstrates different aspects of frontend development and user experience design.",
    items: [
      {
        name: 'Ba-Energy.ir',
        description:
          'Large-scale Next.js application serving 5 million users, promoting energy conservation. Implemented Next.js App Router and server components for enhanced performance.',
      },
      {
        name: 'Farm.maj.ir',
        description:
          'Agricultural contract management system with admin dashboard for government-farmer interactions. Built with Next.js and modern state management.',
      },
      {
        name: 'ArtaMart E-commerce',
        description:
          'Modern e-commerce platform built with Next.js and React. Features product catalog, shopping cart, user authentication, and payment integration.',
      },
      {
        name: 'OffLand Technology Store',
        description:
          'Tech e-commerce website specializing in electronics and gadgets. Built with Next.js featuring responsive design and modern UI components.',
      },
      {
        name: 'RixoShop Platform',
        description:
          'Complete e-commerce solution with advanced features including inventory management, order tracking, and customer dashboard. Built with modern React patterns.',
      },
      {
        name: 'Interactive Quiz Application',
        description:
          'Dynamic quiz platform with real-time scoring, multiple choice questions, and progress tracking. Features responsive design and smooth animations.',
      },
      {
        name: 'Restaurant Management System',
        description:
          'Full-featured restaurant website with menu management, online ordering, and reservation system. Built with modern web technologies for optimal performance.',
      },
      {
        name: 'Progressive Web App',
        description:
          'Advanced PWA demonstrating offline functionality, push notifications, and app-like experience. Showcases modern web capabilities and service worker implementation.',
      },
      {
        name: 'Task Management App',
        description:
          'Feature-rich todo application with drag-and-drop functionality, categories, due dates, and progress tracking. Built with React and modern state management.',
      },
    ],
  },
  uses: {
    metaTitle: 'Tech Stack',
    metaDescription:
      'Frontend technologies, development tools, and software I use to build exceptional web applications.',
    title: 'My Professional Tech Stack and Development Tools',
    intro:
      "As a full-stack engineer, I rely on a carefully selected set of technologies and tools to build scalable, high-performance web applications. Here's an overview of what I use daily in my development workflow.",
    sections: [
      {
        title: 'Frontend Technologies',
        tools: [
          {
            title: 'React & React Ecosystem',
            description:
              "My go-to library for building user interfaces. I leverage React's ecosystem including React Router, React Query, and various hooks libraries to build robust applications.",
          },
          {
            title: 'Next.js',
            description:
              'I use Next.js for nearly all my projects due to its powerful features like server-side rendering, static site generation, API routes, and excellent developer experience.',
          },
          {
            title: 'TypeScript',
            description:
              'TypeScript is essential in my workflow for type safety, better IDE support, and catching errors before they reach production. It drastically improves code quality and maintainability.',
          },
          {
            title: 'TailwindCSS',
            description:
              'My preferred styling solution for its utility-first approach, exceptional customization capabilities, and ability to create responsive designs efficiently.',
          },
          {
            title: 'Redux & Zustand',
            description:
              'For state management, I use Redux for larger applications and Zustand for simpler state needs. Both provide predictable state containers with excellent developer tools.',
          },
        ],
      },
      {
        title: 'Workstation',
        tools: [
          {
            title: 'Lenovo ThinkPad (Ryzen 7, 32GB RAM) – Debian GNU/Linux',
            description:
              'Daily driver running Debian with zsh. Rock-solid stability for long coding sessions and Docker workloads.',
          },
          {
            title: '27” 1440p IPS Monitor',
            description:
              'Plenty of screen real estate for side-by-side coding, browser, and docs. Calibrated for comfortable reading.',
          },
          {
            title: 'Keychron K2 (Gateron Brown)',
            description:
              'Compact mechanical keyboard with tactile switches — quiet enough for calls, satisfying for long typing.',
          },
          {
            title: 'Logitech MX Master 3S',
            description:
              'Ergonomic mouse with smooth scrolling and app-specific shortcuts — great for navigating large codebases.',
          },
          {
            title: 'Ergonomic chair & desk setup',
            description:
              'Height-adjustable desk and supportive chair to keep posture in check during extended development sprints.',
          },
        ],
      },
      {
        title: 'Development Tools',
        tools: [
          {
            title: 'VS Code',
            description:
              'My primary code editor with extensions for ESLint, Prettier, GitLens, and various language support. Custom keybindings and settings help maximize my productivity.',
          },
          {
            title: 'Git & GitHub',
            description:
              "Version control with Git and GitHub for collaboration, code reviews via PRs, and CI/CD integration. I'm a strong advocate for Git Flow and meaningful commit messages.",
          },
          {
            title: 'Terminal (Warp with Oh My Zsh)',
            description:
              'Custom terminal setup with productivity aliases, Git integration, and a theme that makes working in the command line both efficient and visually pleasing.',
          },
          {
            title: 'Docker',
            description:
              'For containerization and ensuring consistent development environments across the team. Makes local development match production as closely as possible.',
          },
        ],
      },
      {
        title: 'Design & Collaboration',
        tools: [
          {
            title: 'Figma',
            description:
              'Essential for UI/UX design collaboration, prototyping, and maintaining design systems. I work closely with designers using Figma to ensure pixel-perfect implementation.',
          },
          {
            title: 'Miro',
            description:
              'For brainstorming sessions, architectural planning, and team collaboration. Great for creating user journey maps and technical diagrams.',
          },
        ],
      },
      {
        title: 'Testing & Quality Assurance',
        tools: [
          {
            title: 'Jest & React Testing Library',
            description:
              'My testing stack for writing unit and integration tests. Focus on testing user behavior rather than implementation details for more reliable tests.',
          },
          {
            title: 'Cypress',
            description:
              'For end-to-end testing to ensure the complete user workflow works as expected. Invaluable for catching integration issues before deployment.',
          },
          {
            title: 'ESLint & Prettier',
            description:
              'Code quality and formatting tools that maintain consistency across the team. Custom configurations that enforce our coding standards and best practices.',
          },
        ],
      },
      {
        title: 'Productivity & Team Management',
        tools: [
          {
            title: 'Linear',
            description:
              'Issue tracking and project management that integrates beautifully with GitHub. Perfect for sprint planning and tracking development progress.',
          },
          {
            title: 'Notion',
            description:
              'Team documentation, meeting notes, and knowledge base. Used for technical specifications, team guidelines, and maintaining our development processes.',
          },
          {
            title: 'Slack',
            description:
              'Primary communication tool for team collaboration, with integrations for GitHub notifications, deployment updates, and code review notifications.',
          },
        ],
      },
    ],
  },
  mentoring: {
    metaTitle: 'Mentoring',
    metaDescription:
      'Teaching, mentoring and team leadership: how I help frontend developers grow, from Maktab Sharif classrooms to my team at Nilva.',
    title: 'Helping developers grow is the part of my work I enjoy most.',
    intro:
      "Since 2022 I've been teaching frontend development at Maktab Sharif, and at Nilva I lead and mentor a team of 4 developers every day. Here's how I share what I've learned, and how we can work together.",
    sections: [
      {
        title: 'Teaching',
        items: [
          {
            title: 'Mentor & Frontend Instructor at Maktab Sharif',
            event: 'Maktab Sharif Coding Bootcamp · 2022 – Present',
            description:
              "I've mentored and taught over 200 students in frontend development, with a focus on React: from JavaScript fundamentals to building and shipping real projects.",
            cta: 'Visit Maktab Sharif',
            href: 'https://maktabsharif.ir',
          },
        ],
      },
      {
        title: 'Team leadership',
        items: [
          {
            title: 'Development Team Lead at Nilva',
            event: 'Nilva · 2023 – Present',
            description:
              'Leading a team of 4 developers: code reviews, architecture decisions, and helping each developer level up while we ship enterprise-level products.',
            cta: 'See my work history',
            href: '/about',
          },
        ],
      },
      {
        title: 'Writing',
        items: [
          {
            title: 'Articles on frontend engineering',
            event: 'Blog',
            description:
              'Practical, real-world guides on React, Next.js and building for the web, written from the lessons of production projects.',
            cta: 'Read the articles',
            href: '/articles',
          },
        ],
      },
      {
        title: 'Work with me',
        items: [
          {
            title: 'Mentoring sessions, workshops and talks',
            event: 'Available on request',
            description:
              "Want a mentor for your frontend journey, a workshop for your team, or a speaker for your event? Send me an email and tell me what you have in mind.",
            cta: 'Email me',
            href: 'mailto:omidfa1234@gmail.com',
          },
        ],
      },
    ],
  },
  thankYou: {
    metaTitle: 'You’re subscribed',
    metaDescription: 'Thanks for subscribing to my newsletter.',
    title: 'Thanks for subscribing.',
    intro:
      'I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings.',
  },
  notFound: {
    title: 'Page not found',
    description: 'Sorry, we couldn’t find the page you’re looking for.',
    back: 'Go back home',
  },
}

export type Dictionary = typeof en

export default en
