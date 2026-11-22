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
  // The filter buttons. Each game's "type" must match one of these
  // (except "All", which shows everything).
  filters: ["All", "Games", "Prototypes", "Level design"],

  // image = screenshot path, e.g. "images/lantern-drift.png"
  // play / breakdown = links. Leave "" to hide that link.
  games: [
    { title: "Lantern Drift", type: "Games", year: "2026", color: "#2f5bff",
      role: "Lead designer", team: "team of 6",
      pitch: "A cosy river-delivery game about guiding paper boats through changing weather.",
      tags: ["Unity", "Puzzle", "Co-op"],
      image: "", play: "#", breakdown: "#" },
    { title: "Byte Knights", type: "Games", year: "2025", color: "#ff5d5d",
      role: "Systems designer", team: "game jam",
      pitch: "A one-button roguelite where every enemy you defeat rewires your controls.",
      tags: ["Godot", "Roguelite", "Jam"],
      image: "", play: "#", breakdown: "#" },
    { title: "Gravity Garden", type: "Prototypes", year: "2025", color: "#2ec4a6",
      role: "Solo", team: "2-week prototype",
      pitch: "Plant seeds that bend gravity, then use them to reach floating islands.",
      tags: ["Unity", "Physics", "Prototype"],
      image: "", play: "#", breakdown: "#" },
    { title: "Night Market", type: "Level design", year: "2024", color: "#8a6cff",
      role: "Level designer", team: "portfolio piece",
      pitch: "A stealth level set in a crowded night market, built around sightlines and noise.",
      tags: ["Unreal", "Stealth", "Blockout"],
      image: "", play: "", breakdown: "#" },
    { title: "Card Kitchen", type: "Prototypes", year: "2024", color: "#ff8a3d",
      role: "Designer", team: "paper prototype",
      pitch: "A deck-building cooking game tested with paper cards before going digital.",
      tags: ["Tabletop", "Deckbuilder"],
      image: "", play: "", breakdown: "#" },
    { title: "Skyline Sprint", type: "Level design", year: "2024", color: "#e0a100",
      role: "Level designer", team: "class project",
      pitch: "Three rooftop parkour courses tuned for flow, speedrun routes and first-time players.",
      tags: ["Unreal", "Platformer"],
      image: "", play: "#", breakdown: "#" },
  ],


  // ---------- CONTACT ----------
  contactTitle: "Let's make something fun",
  contactText: "Open to internships, game jams and collaborations.",
  email: "you@example.com",
  links: [
    { label: "itch.io",    url: "https://itch.io" },
    { label: "LinkedIn",   url: "https://www.linkedin.com" },
    { label: "ArtStation", url: "https://www.artstation.com" },
  ],
};
