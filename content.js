window.PORTFOLIO = {

  // ---------- SECTION 1: ABOUT ME ----------
  name: "Sim Wei Jun",
  initial: "W",                       // letter in the little logo, top left
  title: "Game Designer",             // shown on your profile card
  photo: "",                          // e.g. "images/me.jpg"
  greeting: "Hi, I'm Wei Jun.",
  headline: "I turn dreams into reality with design",
  bio: "Trained at DigiPen Institute of Technology Singapore, I am a versatile game and UX designer who enjoys wearing multiple hats. While my core strengths lie in game design and project management, I am equally comfortable in various disciplines of art, programming, design and music. I thrive on bridging creativity and execution, turning ambitious ideas into achievable, polished experiences through thoughtful design and iteration.",

  // Three (or more) quick facts under your bio
  stats: [
    { label: "Focus",     value: "Systems & Game Mechanics" },
    { label: "Based in",  value: "Singapore" },
    { label: "Currently", value: "Open to internships" },
  ],

  // Small grey note under the hero. Set to "" once your real text is in.
  sampleNote: "",


  // ---------- SECTION 2: SOFTWARE ----------
  // Grouped by skill. icon = the picture's path in the images folder.
  // File names must match exactly (capitals and .png/.jpg/.webp included).
  // If a picture is missing, the tile shows the abbr label in the colour.
  tools: [
    { group: "Game development", items: [
      { name: "Unity",               abbr: "U",  color: "#15172d", icon: "images/unity.png" },
    ]},
    { group: "UI/UX design", items: [
      { name: "Figma",               abbr: "Fi", color: "#15172d", icon: "images/unnamed.png" },
      { name: "Adobe XD",            abbr: "Xd", color: "#470137", icon: "images/adobexd.png" },
    ]},
    { group: "2D art", items: [
      { name: "Adobe Photoshop",     abbr: "Ps", color: "#001e36", icon: "images/adobephotoshop.png" },
      { name: "Adobe Illustrator",   abbr: "Ai", color: "#330000", icon: "images/adobeillustrator.png" },
      { name: "Aseprite",            abbr: "As", color: "#7d929e", icon: "images/aseprite.png" },
    ]},
    { group: "3D art", items: [
      { name: "Blender",             abbr: "Bl", color: "#e87d0d", icon: "images/blender.png" },
      { name: "Autodesk Maya",       abbr: "M",  color: "#1ba6a6", icon: "images/maya.png" },
    ]},
    { group: "Video & motion", items: [
      { name: "Adobe Premiere",      abbr: "Pr", color: "#00005b", icon: "images/adobepremiere.webp" },
      { name: "Adobe After Effects", abbr: "Ae", color: "#00005b", icon: "images/Adobe_After_Effects_CC_2026_icon.svg.webp" },
    ]},
    { group: "Audio", items: [
      { name: "Ableton Live",        abbr: "Ab", color: "#15172d", icon: "images/ableton.png" },
      { name: "Audacity",            abbr: "Au", color: "#0b3fd1", icon: "images/audacity.png" },
    ]},
  ],


  // ---------- SECTION 2: LEADERSHIP & EXPERIENCE ----------
  // tag = optional short highlight shown beside the title ("" to hide).
  // icon can be: clipboard, gamepad, music, code, bug, camera, layout,
  //              brush, flag, calendar, team, bolt, star
  experienceTitle: "Leadership & experience",
  experience: [
    { group: "Leading teams", items: [
      { title: "Project Management", tag: "30+ projects", icon: "clipboard", color: "#ff5d5d",
        text: "Led and managed 30+ academic projects, delegating tasks according to teammates' strengths, coordinating workflows, and ensuring deliverables were completed on schedule." },
      { title: "Leadership", tag: "2 years", icon: "flag", color: "#ff5d5d",
        text: "Two years as a student leader of the Gamers' Guild at SIT–DigiPen, alongside previous experience as a class leader at Temasek Polytechnic. Experienced in representing students, coordinating activities, and fostering collaborative communities." },
      { title: "Event Planning & Facilitation", tag: "", icon: "calendar", color: "#ff5d5d",
        text: "Organized and hosted gaming activities for Temasek Polytechnic's Campus Care Network (CCN) and SIT's Gamers' Guild, including competitive FPS and fighting game events, as well as introductory trading card game sessions." },
    ]},
    { group: "Design", items: [
      { title: "Game Design", tag: "10+ games", icon: "gamepad", color: "#2f5bff",
        text: "Designed 10+ games across PC, mobile, and tabletop platforms, spanning various genres. Experienced in gameplay mechanics, systems design, level design, progression, and balancing." },
      { title: "UI/UX Design & Prototyping", tag: "", icon: "layout", color: "#2f5bff",
        text: "Experienced in Figma and Adobe XD, creating wireframes, interactive prototypes, and user flows to evaluate and refine experiences before development." },
    ]},
    { group: "Production & craft", items: [
      { title: "2D & 3D Art", tag: "", icon: "brush", color: "#8a6cff",
        text: "Skilled in Photoshop, Illustrator, and Aseprite for 2D art, sprites, and icons. Experienced in Blender and Maya for 3D modelling, modular workflows, and texturing." },
      { title: "Audio Production", tag: "", icon: "music", color: "#8a6cff",
        text: "Experienced in recording, editing, and mixing sound effects, as well as composing music for game projects." },
      { title: "Media Production", tag: "2 years", icon: "camera", color: "#8a6cff",
        text: "Two years as a primary photographer with the Singapore Combat Engineers. Experienced in event photography, Lightroom photo editing, and Adobe Premiere Pro video production." },
      { title: "Programming", tag: "C#", icon: "code", color: "#2ec4a6",
        text: "Proficient in C# with a practical understanding of programming concepts, enabling effective technical communication, prototyping, and collaboration with developers." },
      { title: "Quality Assurance", tag: "Industry", icon: "bug", color: "#2ec4a6",
        text: "Professional game QA experience at I Got Games Singapore, conducting gameplay testing and documenting issues through structured test cases and clear, actionable bug reports." },
    ]},
  ],


  // ---------- SECTION 3: GAMES & PROJECTS ----------
  // The filter buttons. Each project's "type" must match one of these
  // (except "All", which shows everything).
  filters: ["All", "Video games", "Tabletop", "Game jams", "UI/UX"],

  // category = label on the picture. image = screenshot path, e.g.
  // "images/halt-the-horde.png" ("" shows the coloured placeholder).
  // contributions = the "What I did" list (leave [] to hide it).
  // links = buttons on the card. A link with url "" is hidden, so you
  // can fill in the url later and it appears.
  games: [
    { title: "Halt the Horde", type: "Video games", category: "Mobile game", color: "#ff5d5d",
      role: "Project Manager & Lead Game Designer", team: "Team of 2",
      pitch: "A base-defense mobile game combining match-3 mechanics with strategic combat. Match pieces to launch projectiles, defend against waves of enemies, and progress through 10 increasingly challenging levels.",
      tags: ["Mobile", "Match-3", "Tower Defense"],
      contributions: [
        "Managed production and project scheduling.",
        "Designed gameplay mechanics, progression, and balancing.",
        "Created 2D and 3D art assets.",
        "Produced sound effects and edited promotional videos.",
        "Developed gameplay supporting different player strategies.",
      ],
      detail: "",
      image: "",
      links: [
        { label: "Watch trailer", url: "https://www.youtube.com/shorts/1cNqKZaaIT8" },
        { label: "Project breakdown", url: "" },
      ]},

    { title: "Order N Chaos", type: "Video games", category: "Multiplayer game", color: "#8a6cff",
      role: "Product Manager & Lead Game Designer", team: "Team of 9",
      pitch: "A fantasy tactics game inspired by Battleship, where players secretly plan spells and resolve attacks simultaneously. Strategic positioning, prediction, and magical abilities determine the outcome.",
      tags: ["Multiplayer", "Strategy", "Lua"],
      contributions: [
        "Managed a nine-person development team.",
        "Designed core gameplay mechanics and systems.",
        "Created visual concepts and communicated artistic direction.",
        "Assisted with Lua gameplay programming.",
        "Developed visual effects, interactions, and audio assets.",
      ],
      detail: "",
      image: "",
      links: [
        { label: "Play demo", url: "" },
        { label: "Project breakdown", url: "" },
      ]},

    { title: "Possessor", type: "Video games", category: "Puzzle adventure", color: "#2f5bff",
      role: "Game Project", team: "",
      pitch: "A top-down puzzle adventure where a disembodied spirit possesses household objects to navigate a warped home, solve environmental puzzles, and uncover forgotten memories.",
      tags: ["Puzzle", "Adventure", "Narrative"],
      // Notes for the breakdown (not shown on the site): focus on the
      // object-possession mechanic; environmental puzzle design and player
      // progression; how gameplay supports the narrative and exploration.
      contributions: [],
      detail: "",
      image: "",
      links: [
        { label: "Play demo", url: "" },
        { label: "Project breakdown", url: "" },
      ]},

    { title: "Paws to Pet", type: "Tabletop", category: "Board game", color: "#ff8a3d",
      role: "Game Designer & 2D Artist", team: "",
      pitch: "A competitive deck-building board game for 2–5 players, where aspiring cat tamers gather resources, collect adorable cats, and compete to build the ultimate collection.",
      tags: ["Tabletop", "Deck Building", "Strategy"],
      contributions: [
        "Designed and balanced game mechanics.",
        "Created the board game's box design.",
        "Illustrated 15 of the game's 60 collectible cats.",
        "Developed strategic choices around resource collection and deck building.",
      ],
      detail: "",
      image: "",
      links: [
        { label: "Project breakdown", url: "" },
      ]},

    { title: "Riskcuit", type: "Game jams", category: "Game jam", color: "#e0a100",
      role: "Game Jam Participant", team: "",
      pitch: "A social deduction game where you play a seemingly innocent cookie baker secretly poisoning villagers. Balance risk and deception as you try to eliminate the village without being exposed.",
      tags: ["Social Deduction", "Deception", "Game Jam"],
      contributions: [],
      detail: "Created for Brackeys Game Jam 2025.2, themed \u201cRisk it for the Biscuit.\u201d",
      image: "",
      links: [
        { label: "Play game", url: "https://saka0na.itch.io/riskcuit" },
        { label: "Project breakdown", url: "" },
      ]},

    { title: "Cloudy Stack", type: "UI/UX", category: "Mobile app · UI/UX", color: "#2ec4a6",
      role: "UI/UX Designer", team: "",
      pitch: "A modern mobile ordering app designed for a fictional pancake restaurant, combining stylish UI/UX with intuitive navigation, menu exploration, promotional offers, and a streamlined ordering experience.",
      tags: ["Mobile App", "UI/UX", "Figma"],
      contributions: [
        "Designed a modern, visually appealing mobile interface targeting younger audiences.",
        "Created interactive pages and navigation flows for a cohesive user experience.",
        "Designed menu browsing, promotional offers, and food ordering interfaces.",
        "Focused on usability and intuitive interactions to simplify the customer ordering journey.",
      ],
      detail: "",
      image: "",
      links: [
        { label: "Interactive prototype", url: "" },
        { label: "Project breakdown", url: "" },
      ]},
  ],


  // ---------- CONTACT ----------
  contactTitle: "Let's make something fun",
  contactText: "Open to internships, game jams and collaborations.",
  email: "simweijun00@gmail.com",
  links: [
    { label: "itch.io",    url: "https://itch.io" },
    { label: "LinkedIn",   url: "https://www.linkedin.com/in/wei-jun-sim-179268194/" },
  ],
};
