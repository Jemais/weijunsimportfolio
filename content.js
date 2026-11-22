/* =====================================================================
   YOUR PORTFOLIO CONTENT
   ---------------------------------------------------------------------
   This is the only file you need to edit. Change the text between the
   quote marks, save (on GitHub: "Commit changes"), and your site
   updates in 1-2 minutes.

   Tips
   - Keep the quote marks and the commas at the end of each line.
   - To use an apostrophe inside text, keep the text in "double quotes",
     e.g.  bio: "I'm a designer",
   - Images: upload them into the  images  folder, then write the path,
     e.g.  photo: "images/me.jpg",   Leave "" to show the placeholder.
   - To add a game, copy one { ... }, block in the games list, paste it
     below the last one, and change the details.
   ===================================================================== */

window.PORTFOLIO = {

  // ---------- SECTION 1: ABOUT ME ----------
  name: "Sim Wei Jun",
  initial: "W",                       // letter in the little logo, top left
  title: "Game Designer",             // shown on your profile card
  photo: "",                          // e.g. "images/me.jpg"
  greeting: "Hi, I'm Wei Jun.",
  headline: "I turn dreams into reality with design",
  bio: "Trained at DigiPen Institute of Technology Singapore, I am a versatile game and UX designer who thrives at the intersection of creativity and execution. I contribute across mechanics design, progression systems, UI/UX refinement, and production ensuring that ambitious ideas are not only innovative, but achievable. I am often relied upon as both a designer and a producer: structuring projects, aligning teams, and carrying concepts from early prototypes to polished builds. My strength lies in clarity, defining the core of a game and building around it with intention. I believe great games are not accidents. They are the result of thoughtful systems, deliberate iteration, and teams that execute with purpose.",

  // Three (or more) quick facts under your bio
  stats: [
    { label: "Focus",     value: "Systems & Game Mechanics" },
    { label: "Based in",  value: "Singapore" },
    { label: "Currently", value: "Open to internships" },
  ],

  // Small grey note under the hero. Set to "" once your real text is in.
  sampleNote: "Sample text — replace it in content.js.",


  // ---------- SECTION 2: SOFTWARE ----------
  // abbr = the short label on the tile. color = tile colour.
  // icon = optional image instead of the label, e.g. "images/unity.png"
  tools: [
    { group: "Engines & code", items: [
      { name: "Unity",         abbr: "U",  color: "#2f5bff", icon: "" },
      { name: "Unreal Engine", abbr: "UE", color: "#15172d", icon: "" },
      { name: "C#",            abbr: "C#", color: "#8a6cff", icon: "" },
    ]},
    { group: "Art & 3D", items: [
      { name: "Blender",       abbr: "Bl", color: "#ff8a3d", icon: "" },
      { name: "Photoshop",     abbr: "Ps", color: "#2f5bff", icon: "" },
      { name: "Aseprite",      abbr: "As", color: "#ff5d5d", icon: "" },
      { name: "Illustrator",   abbr: "Ai", color: "#e0a100", icon: "" },
    ]},
    { group: "Design & planning", items: [
      { name: "Figma",         abbr: "Fi", color: "#ff5d5d", icon: "" },
      { name: "Miro",          abbr: "Mi", color: "#e0a100", icon: "" },
      { name: "Trello",        abbr: "Tr", color: "#2f5bff", icon: "" },
      { name: "Notion",        abbr: "No", color: "#15172d", icon: "" },
    ]},
  ],


  // ---------- SECTION 2: LEADERSHIP & PROJECTS ----------
  // icon can be: "flag", "bolt", "team" or "star"
  experience: [
    { title: "Team lead", org: "Capstone project, 6-person team", time: "2025 – 2026",
      icon: "flag", color: "#ff5d5d",
      text: "Ran weekly sprints, kept the scope realistic and owned the core gameplay loop." },
    { title: "Design lead", org: "48-hour game jam", time: "2025",
      icon: "bolt", color: "#2f5bff",
      text: "Pitched the concept, wrote the one-page design doc and organised playtests on day two." },
    { title: "President", org: "Game development club", time: "2024 – 2025",
      icon: "team", color: "#2ec4a6",
      text: "Organised monthly workshops and a showcase night for members' projects." },
    { title: "Level designer", org: "Indie studio internship", time: "2024",
      icon: "star", color: "#8a6cff",
      text: "Blocked out and iterated on levels using player heatmaps and feedback." },
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
