// Book companion content. Hand-crafted from the actual chapter text.
// Source: "The Future of Artificial Intelligence: Emerging Technologies and
// Trends in Education" — compiled by Brian S. Graham, Ed.D. (2025).

export type Role =
  | "superintendent"
  | "principal"
  | "teacher"
  | "tech"
  | "sped"
  | "board";

export const ROLES: { id: Role; label: string; blurb: string; icon: string }[] =
  [
    {
      id: "superintendent",
      label: "Superintendent / District Leader",
      blurb:
        "Set vision, build culture, lead the system-wide AI conversation.",
      icon: "compass",
    },
    {
      id: "principal",
      label: "Building Principal",
      blurb:
        "Lead pilots, support teachers, translate vision into daily practice.",
      icon: "school",
    },
    {
      id: "teacher",
      label: "Teacher / Coach",
      blurb:
        "Design engaging tasks, differentiate, keep humans at the center.",
      icon: "lightbulb",
    },
    {
      id: "tech",
      label: "Tech Director / CIO",
      blurb:
        "Stand up safe infrastructure, evaluate tools, manage data privacy.",
      icon: "shield",
    },
    {
      id: "sped",
      label: "Special Education Leader",
      blurb:
        "Use AI to scale accessibility, intervention, and individualized support.",
      icon: "heart",
    },
    {
      id: "board",
      label: "Board Member / Community",
      blurb:
        "Understand the why, ask the right questions, support sound policy.",
      icon: "users",
    },
  ];

export type ThemeId =
  | "leadership"
  | "ethics"
  | "personalization"
  | "engagement"
  | "policy"
  | "community"
  | "operations"
  | "tools"
  | "sped"
  | "culture";

export const THEMES: {
  id: ThemeId;
  label: string;
  shortLabel: string;
  description: string;
  color: string;
}[] = [
  {
    id: "leadership",
    label: "Leadership & Vision",
    shortLabel: "Leadership",
    description:
      "How school leaders model curiosity, set direction, and shape the AI conversation in their districts.",
    color: "1",
  },
  {
    id: "ethics",
    label: "Ethics & Equity",
    shortLabel: "Ethics",
    description:
      "Data privacy, algorithmic bias, equitable access, and the human values at stake in adoption.",
    color: "2",
  },
  {
    id: "personalization",
    label: "Personalization & Differentiation",
    shortLabel: "Personalization",
    description:
      "Using AI to tailor instruction to each learner — from reading levels to interest-driven pathways.",
    color: "3",
  },
  {
    id: "engagement",
    label: "Engagement & Pedagogy",
    shortLabel: "Engagement",
    description:
      "Designing tasks where AI deepens student thinking instead of replacing it.",
    color: "4",
  },
  {
    id: "policy",
    label: "Policy & Infrastructure",
    shortLabel: "Policy",
    description:
      "The frameworks, agreements, and structures districts need for safe, sustainable AI use.",
    color: "5",
  },
  {
    id: "community",
    label: "Community & Change Management",
    shortLabel: "Community",
    description:
      "Bringing teachers, parents, students, and peer leaders into the journey together.",
    color: "6",
  },
  {
    id: "operations",
    label: "Productivity & Operations",
    shortLabel: "Operations",
    description:
      "Reclaiming time on HR, contracts, communications, and administrative workflow.",
    color: "1",
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    shortLabel: "Tools",
    description:
      "Specific AI tools and platforms — what they do, where they fit, what to watch for.",
    color: "3",
  },
  {
    id: "sped",
    label: "Special Education & Accessibility",
    shortLabel: "Accessibility",
    description:
      "Multimodal interfaces, speech-based learning, and AI as a force multiplier for inclusion.",
    color: "4",
  },
  {
    id: "culture",
    label: "Innovation Culture",
    shortLabel: "Culture",
    description:
      "Building the conditions — trust, time, training — where experimentation can succeed.",
    color: "5",
  },
];

export type ChapterId = number;

export type Chapter = {
  number: number;
  part: 1 | 2 | 3 | 4;
  title: string;
  subtitle?: string;
  author: string;
  authorRole?: string;
  pageStart: number;
  pageEnd: number;
  tagline: string;
  summary: string;
  keyTakeaways: string[];
  quote: string;
  themes: ThemeId[];
  audienceFit: Role[];
  toolsMentioned: string[];
  discussionQuestions: string[];
  mondayAction: string;
};

export const CHAPTERS: Chapter[] = [
  {
    number: 1,
    part: 1,
    title: "The AI Revolution in Education",
    subtitle: "A Historical Perspective and Foundational Understanding",
    author: "Brian S. Graham, Ed.D.",
    authorRole: "Superintendent, Grand Island Central School District",
    pageStart: 16,
    pageEnd: 29,
    tagline:
      "From radio in the 1920s to ChatGPT today — every leap forward asked the same question: who gets access?",
    summary:
      "Graham traces a century of classroom technology — radio, television, the personal computer, the internet, and now generative AI — to argue that today's tools are the latest chapter in a long story of democratizing learning. He then maps the modern AI landscape, defining what AI is and isn't and surveying the tools educators are actually using.",
    keyTakeaways: [
      "AI is best understood as the next step in a 100-year arc of educational technology, not a sudden disruption.",
      "The printing press analogy matters: AI's promise is making personalized learning broadly accessible, not exclusive.",
      "Leaders need a working vocabulary — narrow vs. general AI, generative AI, multimodal — to lead the conversation.",
      "The 2020–2025 wave is defined by personalization, teacher empowerment, engagement, inclusivity, and safety.",
    ],
    quote:
      "Just as the printing press dismantled barriers that had long kept learning in the hands of the few, today's artificial intelligence tools are poised to democratize education once again.",
    themes: ["leadership", "tools", "culture"],
    audienceFit: ["superintendent", "principal", "board"],
    toolsMentioned: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Khanmigo",
      "NotebookLM",
      "Perplexity AI",
      "MagicSchool AI",
      "SchoolAI",
      "Replit",
      "ZeroEyes",
      "Sono",
    ],
    discussionQuestions: [
      "What past technology shift in your career most resembles this AI moment, and what did you learn from it?",
      "If AI is a 'democratizing' force like the printing press, who in your district risks being left behind without intentional design?",
      "How fluent does your leadership team need to be in AI vocabulary before leading the conversation publicly?",
    ],
    mondayAction:
      "Pick one of the tools listed in this chapter (Khanmigo, NotebookLM, or MagicSchool) and spend 30 minutes inside it this week with a real district task in mind.",
  },
  {
    number: 2,
    part: 1,
    title: "The Transformative Power of AI",
    author: "Michael Lubelfeld, Ed.D.",
    authorRole: "Superintendent, NSSD112; Author",
    pageStart: 30,
    pageEnd: 48,
    tagline:
      "AI doesn't just speed up old practice — it reveals what we always wanted instruction to be.",
    summary:
      "Lubelfeld walks through how AI transforms personalization, differentiation, curriculum alignment, and teacher productivity. He uses his own decades-old U.S. History Workshop as a case study — a hand-built differentiated unit that AI can now generate in seconds — and quotes Yong Zhao on the need to lead change, not just layer tools.",
    keyTakeaways: [
      "AI's greatest value isn't novelty — it's making long-held instructional ideals (deep differentiation, real curriculum alignment) actually feasible.",
      "Veteran teachers have always wanted to differentiate; AI reduces the time tax that made it impractical.",
      "The leadership question is not 'should we use AI?' but 'how do we lead the change so it reaches its potential?'",
      "Tools work best when paired with strong existing pedagogy — AI is a multiplier, not a substitute.",
    ],
    quote:
      "In the age of AI, we don't need experts who are simply interested in layering AI onto existing classrooms. Instead, education needs more expertise in understanding how big changes happen so that AI can realize its tremendous potential.",
    themes: ["personalization", "leadership", "engagement"],
    audienceFit: ["superintendent", "principal", "teacher"],
    toolsMentioned: ["ChatGPT", "i-Ready", "Claude"],
    discussionQuestions: [
      "Where in your curriculum have you wanted to differentiate but lacked the time? What would AI unlock there?",
      "What 'big change' competencies does your leadership team need beyond tool adoption?",
      "How will you tell the difference between AI being layered on, and AI genuinely transforming practice?",
    ],
    mondayAction:
      "Identify one unit you've taught for years. Ask an AI tool to differentiate it across three reading levels and see what's worth keeping.",
  },
  {
    number: 3,
    part: 1,
    title: "Ethical Considerations and Challenges",
    author: "Brian S. Graham, Ed.D.",
    authorRole: "Superintendent, Grand Island Central School District",
    pageStart: 49,
    pageEnd: 58,
    tagline:
      "The question is no longer if we use AI — it's how we use it without compromising what matters.",
    summary:
      "Graham lays out an ethics framework for districts: data privacy and ongoing consent, algorithmic bias, equity of access, and the protected role of educators. He anchors the chapter to UNESCO's AI Competency Frameworks for Students and Teachers, giving leaders a recognized scaffold to build local policy on.",
    keyTakeaways: [
      "Ethical AI in schools is not a compliance task — it's a values task that has to be revisited as the technology shifts.",
      "Consent should be ongoing and transparent, not a one-time checkbox.",
      "Algorithmic bias is real and inherited from training data; equity audits are part of the leader's job.",
      "UNESCO's competency frameworks provide a credible, ready-made structure for districts to adopt.",
    ],
    quote:
      "The task is to ensure that as our tools become smarter, we as educators and as a society become wiser.",
    themes: ["ethics", "policy", "leadership"],
    audienceFit: ["superintendent", "tech", "board"],
    toolsMentioned: ["UNESCO AI Competency Frameworks"],
    discussionQuestions: [
      "Where is your district's AI policy today — silent, draft, adopted? What's missing?",
      "What student data is currently flowing through AI tools you may not have inventoried?",
      "How will you check for algorithmic bias in tools that touch grading, scheduling, or discipline?",
    ],
    mondayAction:
      "Pull every AI-touching tool currently used in your district into a single inventory and note the data each one sees.",
  },
  {
    number: 4,
    part: 2,
    title: "Putting the \"Human\" Back in Human Resources",
    subtitle: "AI in District Administration",
    author: "John Fitzpatrick",
    authorRole:
      "Asst. Superintendent for Curriculum, Instruction, PD & HR, Grand Island CSD",
    pageStart: 59,
    pageEnd: 65,
    tagline:
      "When AI handles the paperwork, the leader can finally lead the people.",
    summary:
      "Fitzpatrick gives a candid, practical account of how he uses AI as a thought partner in HR — drafting MOU language, navigating contract questions, refining evaluation feedback, and analyzing benefits scenarios. The thesis: AI doesn't replace human judgment, it returns time so leaders can focus on the people behind the paperwork.",
    keyTakeaways: [
      "AI shifts central office work from transactional to transformational — but only when the leader stays the decision-maker.",
      "Uploading contracts, board policies, and historical documents creates a genuinely useful working partner.",
      "AI surfaces alternative angles ('where else might this language conflict?') that improve precision.",
      "Final responsibility for tone, fairness, and judgment always belongs to the human.",
    ],
    quote:
      "AI is not a replacement for human judgment, leadership, or empathy. Rather, it is a powerful assistant — a thought partner — that helps me navigate complexity more efficiently, so I can redirect my energy toward the heart of this profession: our people.",
    themes: ["operations", "leadership", "ethics"],
    audienceFit: ["superintendent", "principal"],
    toolsMentioned: ["ChatGPT", "Claude"],
    discussionQuestions: [
      "What recurring HR tasks consume you weekly? Which of them is AI well-suited to draft a first version of?",
      "What guardrails would you put in place before uploading sensitive HR or labor documents to an AI tool?",
      "Where would you NOT want AI involved — even as a draft partner — and why?",
    ],
    mondayAction:
      "Pick one repeating piece of writing (an evaluation, a board memo, a contract response) and draft it twice this week — once your usual way, once with AI as a thought partner. Compare.",
  },
  {
    number: 5,
    part: 2,
    title: "Leading AI Integration in Schools",
    subtitle: "The Journey at Grand Island High School",
    author: "Hillary Kretz-Harvey",
    authorRole: "Principal, Grand Island High School",
    pageStart: 66,
    pageEnd: 75,
    tagline:
      "A real, messy, human pilot of Khanmigo — and the leadership moves that made it stick.",
    summary:
      "Kretz-Harvey narrates a building-level AI pilot in detail: how she built buy-in, partnered with Khan Academy, ran professional learning that emphasized growth mindset over perfection, supported reluctant teachers, and listened her way through resistance. It's the most honest picture in the book of what change leadership in an AI rollout actually looks like.",
    keyTakeaways: [
      "Pilots succeed when leaders frame them as learning, not perfection.",
      "Resistance is information — not an obstacle to push through.",
      "PD must include both pedagogy and platform technicals; one without the other fails.",
      "Drop-in coaching, peer sharing, and cross-department collaboration accelerate adoption.",
    ],
    quote:
      "Meaningful innovation isn't about adopting the newest trend or buying the latest tool. It's about cultivating a culture where curiosity, reflection, and collaboration are embedded in how we grow together.",
    themes: ["leadership", "community", "engagement", "culture"],
    audienceFit: ["principal", "superintendent", "teacher"],
    toolsMentioned: ["Khanmigo", "Khan Academy"],
    discussionQuestions: [
      "Who in your building is most likely to lead from curiosity? How do you give them room to model?",
      "What would 'this is a pilot, not a mandate' actually look like in your culture?",
      "How will you make space to LISTEN to teachers' and students' experience mid-pilot, not just at the end?",
    ],
    mondayAction:
      "Identify three teachers across departments and invite them — voluntarily — to a 6-week, low-stakes AI exploration cohort.",
  },
  {
    number: 6,
    part: 2,
    title: "From Lessons to Launch",
    subtitle: "A Journey in Learning",
    author: "Scott Martin",
    authorRole: "CEO, THiNKtech",
    pageStart: 76,
    pageEnd: 81,
    tagline:
      "An ed-tech founder who started as a teacher — and refuses to let the platform replace the human.",
    summary:
      "Martin tells the story of building THiNKtech, an instructional platform designed around shared student thinking. He insists on a principle that runs through the book: technology should elevate teachers and human connection, not replace them. He reviews research showing that public, collaborative student thinking deepens learning.",
    keyTakeaways: [
      "Tools should amplify teachers, not bypass them.",
      "Making student thinking visible — to peers, not just the teacher — drives deeper learning.",
      "Real-time data lets teachers adapt instruction within the lesson, not after.",
      "The most memorable learning moments are about people, not platforms.",
    ],
    quote:
      "When people reflect on their most meaningful educational experiences, they don't remember a website or a video. They remember a person. A teacher. A connection.",
    themes: ["engagement", "tools", "leadership"],
    audienceFit: ["principal", "teacher", "tech"],
    toolsMentioned: ["THiNKtech"],
    discussionQuestions: [
      "Which tools in your district elevate teachers, and which ones quietly replace them?",
      "How visible is student thinking in your classrooms — to peers, not just the teacher?",
      "What would it look like to evaluate every tool by whether it strengthens human connection?",
    ],
    mondayAction:
      "Walk three classrooms this week and look for one signal: where is student thinking visible to other students?",
  },
  {
    number: 7,
    part: 2,
    title: "Engagement in a Tech-Integrated Classroom",
    author: "Heather Lyon, Ph.D.",
    authorRole:
      "Author of *Engagement Is Not a Unicorn (It's a Narwhal)*; District Administrator",
    pageStart: 82,
    pageEnd: 101,
    tagline:
      "AI doesn't create engagement. The task does. Here's the framework.",
    summary:
      "Lyon's chapter is the longest in the book and the most practical for instruction. She organizes around three questions: WHAT is engagement, SO WHAT does it mean in an AI world, and NOW WHAT do we do? She introduces an Engagement Framework with five levels (Non-Compliant → Absorbed) and shows, through worked examples, how the same task with AI can land at very different points on the spectrum.",
    keyTakeaways: [
      "AI does not automatically produce engagement — efficiency is not the same as engagement.",
      "Engagement is the emotional and cognitive fuel for deep learning, not mere participation.",
      "The Engagement Framework is both mirror (where are students now?) and map (how do we move them?).",
      "When students feel capable, connected, and have voice and choice, AI becomes an amplifier.",
    ],
    quote:
      "AI isn't the answer to engagement. However, when paired with high-quality pedagogy, clarity of purpose, and an unwavering commitment to strengthening students' relationships with their learning and with the people guiding it, AI can be a powerful amplifier.",
    themes: ["engagement", "personalization", "tools"],
    audienceFit: ["teacher", "principal", "superintendent"],
    toolsMentioned: ["ChatGPT", "Gemini", "MagicSchool AI"],
    discussionQuestions: [
      "Looking at the Engagement Framework, where do most of your students sit on a typical day?",
      "What does an 'Absorbed' use of AI look like in your subject area?",
      "How do you tell the difference between AI making a task novel and AI making it meaningful?",
    ],
    mondayAction:
      "Take one assignment you'll use this week. Map what AI use would look like at each of Lyon's five engagement levels for that exact task.",
  },
  {
    number: 8,
    part: 3,
    title: "Developing Educational Games with AI",
    author: "Brian S. Graham, Ed.D.",
    authorRole: "Superintendent, Grand Island Central School District",
    pageStart: 102,
    pageEnd: 105,
    tagline:
      "A superintendent who hasn't coded since 1982 has shipped 20+ classroom games. So can you.",
    summary:
      "Graham documents his hands-on journey using Claude Artifacts, ChatGPT, Replit, and Firebase Studio to design and publish more than twenty educational games — including Viking Math Fact Adventure, Beast Realm, AI Prompt Engineering Practice, and Career Cluster Assessment. The chapter is a manifesto: AI has democratized creation, and educators are natural designers.",
    keyTakeaways: [
      "The cycle from idea → playable prototype has collapsed from days to minutes.",
      "Gamification still works because it taps intrinsic motivation and provides low-stakes failure.",
      "AI-generated games must still be tested for accessibility, bias, and cultural responsiveness.",
      "Creation — not just consumption — is one of AI's most undersold gifts to educators.",
    ],
    quote:
      "If a superintendent who hasn't coded since 1982 can do it, so can you. The tools are here. The time is now. Let's build the games — and the future — our students deserve.",
    themes: ["personalization", "engagement", "tools", "culture"],
    audienceFit: ["teacher", "principal", "superintendent"],
    toolsMentioned: [
      "Claude Artifacts",
      "ChatGPT",
      "Perplexity",
      "Gemini",
      "Replit",
      "Firebase Studio",
    ],
    discussionQuestions: [
      "What would you build for your students if technical skill were no longer the barrier?",
      "How would you review an AI-generated learning experience for accessibility and bias before students see it?",
      "Whose creativity — teachers' or vendors' — should shape the digital experiences your students use?",
    ],
    mondayAction:
      "Open Claude or ChatGPT and describe a single game idea tied to a current unit. See how far you get in one sitting.",
  },
  {
    number: 9,
    part: 3,
    title: "SAY IT Labs",
    subtitle:
      "Multimodal Learning Through AI-Driven Speech Recognition Video Games for Speech Therapy",
    author: "Erich Reiter",
    authorRole: "CEO, SAY IT Labs",
    pageStart: 106,
    pageEnd: 114,
    tagline:
      "What if a child's voice — not their finger — drove the learning game?",
    summary:
      "Reiter presents SAY IT Labs as a case study in multimodal AI: speech-recognition-powered games that turn the child's voice into the input device. He grounds the work in motor learning, neuroplasticity, and Vygotskian theory, and shows how this design extends speech therapy into homes and classrooms — accessible at scale, with immediate feedback, and without constant clinician supervision.",
    keyTakeaways: [
      "Touch-and-tap interfaces exclude learners who most need engagement-rich practice.",
      "Speech as input changes the cognitive and neurological dynamics of the activity.",
      "AI-powered feedback enables independent practice that previously required a clinician.",
      "Multimodal design is one of the strongest near-term contributions of AI to special education.",
    ],
    quote:
      "Where learning is as natural, dynamic, and responsive as the human experience itself — and where every voice has the power to be heard, practiced, and strengthened.",
    themes: ["sped", "personalization", "tools", "engagement"],
    audienceFit: ["sped", "teacher", "principal"],
    toolsMentioned: ["SAY IT Labs"],
    discussionQuestions: [
      "Which of your students would benefit most from speech-as-input rather than touch?",
      "Where in your service delivery do logistical constraints currently limit student practice time?",
      "How would you evaluate a multimodal AI tool's clinical claims before piloting it?",
    ],
    mondayAction:
      "Schedule a 20-minute conversation with your speech-language pathology team about which students could benefit from a multimodal AI pilot.",
  },
  {
    number: 10,
    part: 3,
    title: "AI-Driven Differentiation",
    author: "Dr. Mark Beehler",
    authorRole: "District Leader",
    pageStart: 115,
    pageEnd: 120,
    tagline:
      "A first-year teacher and a 32-year veteran walked into AI. Both came out teaching better.",
    summary:
      "Beehler argues that differentiation is now finally feasible at scale, and proves it through two contrasting case studies: Andrew, a first-year self-contained teacher generating eight-second leveled lesson plans, and Lisa, a 32-year veteran refining her communication and content using AI tools. The throughline: AI meets teachers where they are.",
    keyTakeaways: [
      "True differentiation has always been a time problem, not a will problem.",
      "AI tools generate lesson plans, leveled passages, and assessments in seconds — usable as a draft, not a finish.",
      "Both novice and veteran teachers can benefit, but in very different ways.",
      "AI is enhancing teacher capacity, not replacing teacher craft.",
    ],
    quote:
      "AI is not replacing the teacher; rather, it is enhancing their capacity to teach more creatively, responsively, and efficiently.",
    themes: ["personalization", "engagement", "tools", "operations"],
    audienceFit: ["teacher", "principal", "sped"],
    toolsMentioned: ["MagicSchool AI", "ChatGPT"],
    discussionQuestions: [
      "Which of your teachers would benefit most from AI as a starter draft? Who needs it most as a thinking partner?",
      "How do you support both novice and veteran teachers without offering identical PD to everyone?",
      "Where in the lesson cycle does AI add the most leverage in your context?",
    ],
    mondayAction:
      "Have one teacher generate a leveled version of a real lesson with MagicSchool or ChatGPT and share what they kept, changed, or rejected.",
  },
  {
    number: 11,
    part: 3,
    title: "The AI Leadership Matrix",
    subtitle: "The Work of School Leaders in an AI World",
    author: "Kirk Koennecke",
    authorRole:
      "Superintendent, Indian Hill EVSD; 2024 National Superintendent of the Year (NASS)",
    pageStart: 121,
    pageEnd: 133,
    tagline:
      "A district leader's matrix for what AI work actually looks like — and who needs to do it.",
    summary:
      "Koennecke offers a leader's-eye view of moving a system: building AI literacy, investing in innovation coaches, structuring weekly drop-in PD, and centering students in every decision. He frames the leader's job as making AI integration natural, ethical, and woven into how the whole district learns — not a parallel initiative.",
    keyTakeaways: [
      "Innovation coaches — well chosen and well supported — are the single most important investment.",
      "Weekly, low-friction PD beats annual training events for adoption.",
      "Leaders should measure return on investment in time saved AND in deeper learning produced.",
      "Students should encounter AI as integrated into their world, not bolted onto the edge of it.",
    ],
    quote:
      "AI is not on the horizon — it's already here. Our students and communities are living in an AI-driven world. The time to prepare, lead, and equip is right now.",
    themes: ["leadership", "culture", "policy", "community"],
    audienceFit: ["superintendent", "principal", "tech"],
    toolsMentioned: ["AASA resources", "TeachAI Toolkit", "COSN/CGCS Checklist"],
    discussionQuestions: [
      "Who are the innovation coaches in your district right now — formal or informal?",
      "Where is the weekly cadence of AI learning in your calendar? If there isn't one, why not?",
      "What does 'students at the center' look like in concrete decisions you make this month?",
    ],
    mondayAction:
      "Identify two staff members who could serve as innovation coaches and have a one-on-one about what protected time would let them lead.",
  },
  {
    number: 12,
    part: 3,
    title: "Building Communities Around AI",
    subtitle:
      "Three Superintendents Joining Together to Lead Change in Our Districts",
    author: "Dr. Jared T. Bloom, Matthew C. Gaven, Dr. Kusum Sinha",
    authorRole:
      "Superintendents, Franklin Square UFSD / Rockville Centre / Garden City UFSD",
    pageStart: 134,
    pageEnd: 139,
    tagline:
      "Three Long Island superintendents who decided not to lead AI alone.",
    summary:
      "Bloom, Gaven, and Sinha document how a weekly conversation among three superintendents grew into a real cross-district learning community. The chapter shares what they learned: that AI is best led collaboratively, that personalization is an equity strategy, and that the relationships among leaders are themselves the infrastructure for sound AI rollout.",
    keyTakeaways: [
      "Leadership in AI is a team sport — peer learning communities reduce risk and increase courage.",
      "Personalization is fundamentally an equity strategy, not just an instructional one.",
      "Cross-district trust accelerates everything — policy, pilots, communication.",
      "Unlike social media, we have the chance to lead AI proactively rather than reactively.",
    ],
    quote:
      "Building communities around AI is not a luxury — it is a necessity… AI is not an endpoint; it is a tool that helps us reimagine what is possible in education.",
    themes: ["community", "leadership", "policy", "ethics"],
    audienceFit: ["superintendent", "board"],
    toolsMentioned: [],
    discussionQuestions: [
      "Who are your two or three peer superintendents you could meet with weekly on AI — starting next week?",
      "What's a current AI question that would benefit more from peer thinking than internal staff thinking?",
      "How do you protect the trust that makes those conversations honest?",
    ],
    mondayAction:
      "Email two peer superintendents and propose a recurring 30-minute AI conversation — same time every week, no agenda required.",
  },
  {
    number: 13,
    part: 4,
    title: "Preparing for the AI Future",
    subtitle: "Building a Culture of Innovation",
    author: "Brian S. Graham, Ed.D.",
    authorRole: "Superintendent, Grand Island Central School District",
    pageStart: 140,
    pageEnd: 148,
    tagline:
      "Tools change. Culture is what determines whether they take root.",
    summary:
      "Graham closes Part 4 with a leader's roadmap for sustainable AI integration: cultivating a culture of innovation, addressing fears of displacement transparently, designing policies and infrastructure for the long haul, and centering equity. He highlights the University at Buffalo's National AI Institute for Exceptional Education as a model for AI-for-social-good.",
    keyTakeaways: [
      "A culture of innovation is built on trust, time, training, and the freedom to fail.",
      "Educators' professional identity is being reinvented, not replaced.",
      "Policy and infrastructure must keep pace with practice — not lag a year behind.",
      "AI is a force multiplier for educators when it's designed with responsibility, empathy, and purpose.",
    ],
    quote:
      "The future of AI in education will not be dictated by algorithms, but by the courage of educators who choose to lead, adapt, and reimagine what learning can be.",
    themes: ["culture", "policy", "leadership", "ethics", "sped"],
    audienceFit: ["superintendent", "principal", "tech", "board"],
    toolsMentioned: [
      "ChatGPT Advanced Voice Mode",
      "UB National AI Institute for Exceptional Education",
    ],
    discussionQuestions: [
      "What does 'permission to fail' look like in your district right now?",
      "Where are your policies behind your practice — and what's the cost of that gap?",
      "How will your district answer the displacement question honestly with staff this year?",
    ],
    mondayAction:
      "Draft a one-page 'AI principles' document for your district. Don't aim for perfect — aim for shareable.",
  },
  {
    number: 14,
    part: 4,
    title: "A Call to Action",
    author: "Brian S. Graham, Ed.D.",
    authorRole: "Superintendent, Grand Island Central School District",
    pageStart: 149,
    pageEnd: 161,
    tagline:
      "The AI revolution in education will not be shaped by code. It will be shaped by us.",
    summary:
      "Graham closes the book with an invitation: educators are the pioneers of this moment, and the transformation will be led by the values of those who choose to engage. He calls for collaboration across districts and industries, continuous improvement, and a commitment to AI as a tool that serves equity, joy, and human potential.",
    keyTakeaways: [
      "AI in education will be defined by the courage and values of its leaders, not by the tools themselves.",
      "Cross-district and cross-industry collaboration accelerates good outcomes.",
      "Lifelong learning is no longer optional — it's the job description for educators.",
      "Joy and humanity must remain at the center as we adopt powerful tools.",
    ],
    quote:
      "The AI revolution in education will not be shaped by code, hardware, or algorithms alone. It will be forged by the vision, courage, and unwavering values of the leaders and educators who choose to engage.",
    themes: ["leadership", "community", "culture", "ethics"],
    audienceFit: ["superintendent", "principal", "teacher", "board"],
    toolsMentioned: [],
    discussionQuestions: [
      "Where in your work are you already a pioneer — and where are you waiting for permission?",
      "Who is your next collaborator outside your district?",
      "What will you do this year to keep joy at the center?",
    ],
    mondayAction:
      "Write down one bold AI commitment for the next 90 days and share it with one person who will hold you to it.",
  },
];

// ----------------- CONTRIBUTORS -----------------

export type Contributor = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  chapterNumbers: number[];
  links?: { label: string; href: string }[];
};

export const CONTRIBUTORS: Contributor[] = [
  {
    slug: "brian-graham",
    name: "Brian S. Graham, Ed.D.",
    role: "Superintendent, Grand Island Central School District",
    bio: "Compiler of the book and author of five chapters. President of the Erie-Niagara School Superintendents Association, advisory board member at UB's National AI Institute for Exceptional Education, and host of the Achieving Joy and Mastery in Public Schools podcast.",
    chapterNumbers: [1, 3, 8, 13, 14],
    links: [
      { label: "BrianSGraham.com", href: "https://briansgraham.com" },
    ],
  },
  {
    slug: "danielle-sullivan",
    name: "Danielle Sullivan",
    role: "Foreword author",
    bio: "Education leader who connected Brian with Sal Khan and has championed AI integration as a vision-driven, equity-focused pursuit.",
    chapterNumbers: [],
  },
  {
    slug: "michael-lubelfeld",
    name: "Michael Lubelfeld, Ed.D.",
    role: "Superintendent, NSSD112; Author",
    bio: "Veteran superintendent who writes prolifically about district leadership and led NSSD112's #112Leads generative AI initiative.",
    chapterNumbers: [2],
  },
  {
    slug: "john-fitzpatrick",
    name: "John Fitzpatrick",
    role: "Asst. Superintendent for Curriculum, Instruction, PD & HR, Grand Island CSD",
    bio: "Over 30 years as teacher, principal, and district leader. Believes putting the human back into HR is essential to building stronger schools and communities.",
    chapterNumbers: [4],
  },
  {
    slug: "hillary-kretz-harvey",
    name: "Hillary Kretz-Harvey",
    role: "Principal, Grand Island High School",
    bio: "20+ years in education with a focus on instructional leadership, growth-mindset PD, and partnership-based pilots.",
    chapterNumbers: [5],
  },
  {
    slug: "scott-martin",
    name: "Scott Martin",
    role: "CEO, THiNKtech",
    bio: "Former social studies teacher turned ed-tech founder. Built THiNKtech around the belief that platforms should elevate teachers and human connection.",
    chapterNumbers: [6],
  },
  {
    slug: "heather-lyon",
    name: "Heather Lyon, Ph.D.",
    role: "District Administrator; Author",
    bio: "Author of *Engagement Is Not a Unicorn (It's a Narwhal)*, *The BIG Book of Engagement Strategies*, and *50 Ways to Engage Students with Google Apps*.",
    chapterNumbers: [7],
    links: [
      { label: "LyonsLetters.com", href: "https://www.lyonsletters.com" },
    ],
  },
  {
    slug: "erich-reiter",
    name: "Erich Reiter",
    role: "CEO, SAY IT Labs",
    bio: "Founder of a company building AI-driven, speech-recognition video games for speech therapy and language acquisition.",
    chapterNumbers: [9],
  },
  {
    slug: "mark-beehler",
    name: "Dr. Mark Beehler",
    role: "District Leader",
    bio: "Veteran educator focused on how AI can finally make differentiated instruction feasible at scale.",
    chapterNumbers: [10],
  },
  {
    slug: "kirk-koennecke",
    name: "Kirk Koennecke",
    role: "Superintendent, Indian Hill EVSD (OH)",
    bio: "2024 National Superintendent of the Year (NASS). National presenter and writer on educational leadership in the AI era.",
    chapterNumbers: [11],
  },
  {
    slug: "jared-bloom",
    name: "Dr. Jared T. Bloom",
    role: "Superintendent, Franklin Square UFSD (NY)",
    bio: "Co-author of the cross-district peer learning chapter — a Long Island superintendent leading collaborative AI integration.",
    chapterNumbers: [12],
  },
  {
    slug: "matthew-gaven",
    name: "Matthew C. Gaven",
    role: "Superintendent, Rockville Centre (NY)",
    bio: "Co-author of the cross-district peer learning chapter — committed to building communities around AI rather than leading alone.",
    chapterNumbers: [12],
  },
  {
    slug: "kusum-sinha",
    name: "Dr. Kusum Sinha",
    role: "Superintendent, Garden City UFSD (NY)",
    bio: "Co-author of the cross-district peer learning chapter — focused on personalization as an equity strategy.",
    chapterNumbers: [12],
  },
];

// ----------------- TOOLS LIBRARY -----------------

export type Tool = {
  name: string;
  category:
    | "Assistant"
    | "Tutor"
    | "Teacher Tool"
    | "Builder"
    | "Safety"
    | "Accessibility"
    | "Framework";
  description: string;
  whereInBook: number[]; // chapter numbers
  href?: string;
};

export const TOOLS: Tool[] = [
  {
    name: "ChatGPT",
    category: "Assistant",
    description:
      "OpenAI's general-purpose AI assistant. Used across the book for drafting, differentiation, ideation, and Advanced Voice conversations.",
    whereInBook: [1, 2, 4, 7, 8, 10, 13],
    href: "https://chatgpt.com",
  },
  {
    name: "Claude",
    category: "Assistant",
    description:
      "Anthropic's assistant. Featured especially for Artifacts — interactive, live-built code prototypes for educational games.",
    whereInBook: [1, 4, 8],
    href: "https://claude.ai",
  },
  {
    name: "Gemini",
    category: "Assistant",
    description:
      "Google DeepMind's multimodal AI. Combines text, image, and document analysis for creative classroom projects.",
    whereInBook: [1, 7, 8],
    href: "https://gemini.google.com",
  },
  {
    name: "Khanmigo",
    category: "Tutor",
    description:
      "Khan Academy's AI tutor and teacher assistant. Featured in the Grand Island High School pilot in Chapter 5.",
    whereInBook: [1, 5],
    href: "https://www.khanmigo.ai",
  },
  {
    name: "NotebookLM",
    category: "Teacher Tool",
    description:
      "Google's AI-powered notebook for organizing source materials and generating summaries, questions, and study aids.",
    whereInBook: [1],
    href: "https://notebooklm.google.com",
  },
  {
    name: "Perplexity AI",
    category: "Assistant",
    description:
      "Research assistant offering concise, cited answers — useful for student research and verifying information.",
    whereInBook: [1, 8],
    href: "https://www.perplexity.ai",
  },
  {
    name: "MagicSchool AI",
    category: "Teacher Tool",
    description:
      "Teacher-facing platform for differentiated lesson plans, leveled texts, rubrics, and classroom communications.",
    whereInBook: [1, 7, 10],
    href: "https://www.magicschool.ai",
  },
  {
    name: "SchoolAI",
    category: "Teacher Tool",
    description:
      "Suite of AI-powered teacher tools for differentiation, planning, and student engagement.",
    whereInBook: [1],
    href: "https://schoolai.com",
  },
  {
    name: "Replit",
    category: "Builder",
    description:
      "Browser-based coding platform paired with AI to let educators build web games and apps without deep technical training.",
    whereInBook: [1, 8],
    href: "https://replit.com",
  },
  {
    name: "Firebase Studio",
    category: "Builder",
    description:
      "Google's app-building platform used in Chapter 8 to deploy AI-generated educational games.",
    whereInBook: [8],
  },
  {
    name: "ZeroEyes",
    category: "Safety",
    description:
      "AI-powered weapons detection system for school safety, layered on top of existing camera infrastructure.",
    whereInBook: [1],
    href: "https://zeroeyes.com",
  },
  {
    name: "SAY IT Labs",
    category: "Accessibility",
    description:
      "Speech-recognition-powered games for speech therapy and language acquisition. Multimodal by design.",
    whereInBook: [9],
    href: "https://www.sayitlabs.com",
  },
  {
    name: "Sono",
    category: "Accessibility",
    description:
      "Voice-driven AI tool that supports younger learners and those with disabilities through conversational interfaces.",
    whereInBook: [1],
  },
  {
    name: "THiNKtech",
    category: "Teacher Tool",
    description:
      "Instructional platform built around shared student thinking — designed to amplify teachers, not replace them.",
    whereInBook: [6],
  },
  {
    name: "Engagement Framework (Lyon)",
    category: "Framework",
    description:
      "Heather Lyon's five-level framework — Non-Compliant, Compliant, Interested, Motivated, Absorbed — for diagnosing and designing engagement.",
    whereInBook: [7],
  },
  {
    name: "AI Leadership Matrix (Koennecke)",
    category: "Framework",
    description:
      "A leader's view of the work required to integrate AI ethically and sustainably across a district.",
    whereInBook: [11],
  },
  {
    name: "UNESCO AI Competency Frameworks",
    category: "Framework",
    description:
      "Two complementary frameworks — for students and for teachers — covering ethics, applications, design, and pedagogy.",
    whereInBook: [3],
    href: "https://www.unesco.org/en/articles/ai-competency-framework-teachers",
  },
  {
    name: "TeachAI Toolkit",
    category: "Framework",
    description:
      "A practitioner-oriented framework referenced for district-level AI policy and integration.",
    whereInBook: [11],
    href: "https://www.teachai.org",
  },
];

// ----------------- READINESS ASSESSMENT -----------------

export type Dimension =
  | "vision"
  | "policy"
  | "people"
  | "instruction"
  | "ethics"
  | "community";

export const DIMENSIONS: { id: Dimension; label: string; blurb: string }[] = [
  {
    id: "vision",
    label: "Vision & Leadership",
    blurb:
      "Are you setting direction, modeling curiosity, and naming what AI is for in your district?",
  },
  {
    id: "policy",
    label: "Policy & Infrastructure",
    blurb:
      "Are written policies, data agreements, and infrastructure keeping pace with practice?",
  },
  {
    id: "people",
    label: "People & Culture",
    blurb:
      "Are teachers and staff supported with time, training, and permission to experiment?",
  },
  {
    id: "instruction",
    label: "Instruction & Pedagogy",
    blurb:
      "Is AI deepening student thinking — or just speeding through coverage?",
  },
  {
    id: "ethics",
    label: "Ethics & Equity",
    blurb:
      "Are privacy, bias, access, and student-centered values explicit in your decisions?",
  },
  {
    id: "community",
    label: "Community & Collaboration",
    blurb:
      "Are you leading alone — or with peers, parents, and students at the table?",
  },
];

export type AssessmentItem = {
  id: string;
  dimension: Dimension;
  prompt: string;
  // Maps to chapter numbers that help leaders develop on this item.
  chapterRefs: number[];
};

// 18 items, three per dimension. Likert 1-5.
export const ASSESSMENT: AssessmentItem[] = [
  // Vision & Leadership
  {
    id: "v1",
    dimension: "vision",
    prompt:
      "I can articulate a clear, written vision for what AI is for — and is not for — in our schools.",
    chapterRefs: [1, 13, 14],
  },
  {
    id: "v2",
    dimension: "vision",
    prompt:
      "I personally model AI use in my own work each week (drafting, planning, learning).",
    chapterRefs: [4, 8, 11],
  },
  {
    id: "v3",
    dimension: "vision",
    prompt:
      "Our cabinet/leadership team has shared vocabulary for AI (narrow vs. general, generative, multimodal).",
    chapterRefs: [1, 11],
  },
  // Policy & Infrastructure
  {
    id: "p1",
    dimension: "policy",
    prompt:
      "We have an inventory of every AI-touching tool currently used by staff and students.",
    chapterRefs: [3, 13],
  },
  {
    id: "p2",
    dimension: "policy",
    prompt:
      "Our acceptable-use, data-privacy, and AI policies have been updated within the last 12 months.",
    chapterRefs: [3, 13],
  },
  {
    id: "p3",
    dimension: "policy",
    prompt:
      "We have a clear data-sharing standard for AI vendors before any pilot begins.",
    chapterRefs: [3, 13],
  },
  // People & Culture
  {
    id: "ppl1",
    dimension: "people",
    prompt:
      "Teachers in our district have protected time each month to learn and experiment with AI.",
    chapterRefs: [5, 11, 13],
  },
  {
    id: "ppl2",
    dimension: "people",
    prompt:
      "We have named innovation coaches or champions with bandwidth to support peers.",
    chapterRefs: [11, 5],
  },
  {
    id: "ppl3",
    dimension: "people",
    prompt:
      "Staff feel safe trying AI publicly without fear of being evaluated for early-stage attempts.",
    chapterRefs: [5, 13],
  },
  // Instruction & Pedagogy
  {
    id: "i1",
    dimension: "instruction",
    prompt:
      "Our teachers can describe how AI is deepening — not replacing — student thinking in their classrooms.",
    chapterRefs: [7, 6, 8],
  },
  {
    id: "i2",
    dimension: "instruction",
    prompt:
      "Differentiation is genuinely happening — not just on paper — for our diverse learners.",
    chapterRefs: [2, 10, 12],
  },
  {
    id: "i3",
    dimension: "instruction",
    prompt:
      "We are designing tasks where AI use is intentional, not incidental.",
    chapterRefs: [7, 8],
  },
  // Ethics & Equity
  {
    id: "e1",
    dimension: "ethics",
    prompt:
      "Students and families know what student data is collected by AI tools and how it's used.",
    chapterRefs: [3, 13],
  },
  {
    id: "e2",
    dimension: "ethics",
    prompt:
      "Equity of access (devices, connectivity, AI tool licenses) is monitored — not assumed.",
    chapterRefs: [3, 12],
  },
  {
    id: "e3",
    dimension: "ethics",
    prompt:
      "We periodically audit AI tools that touch grading, scheduling, or discipline for bias.",
    chapterRefs: [3, 13],
  },
  // Community & Collaboration
  {
    id: "c1",
    dimension: "community",
    prompt:
      "I have at least two peer leaders I learn with regularly on AI questions.",
    chapterRefs: [12, 14],
  },
  {
    id: "c2",
    dimension: "community",
    prompt:
      "We engage parents and the community proactively — not reactively — about AI.",
    chapterRefs: [12, 13],
  },
  {
    id: "c3",
    dimension: "community",
    prompt:
      "Students have a voice in how AI is used in their learning experience.",
    chapterRefs: [11, 13, 14],
  },
];

// ----------------- BOOK META -----------------

export const BOOK = {
  title: "The Future of Artificial Intelligence",
  subtitle: "Emerging Technologies and Trends in Education",
  compiler: "Brian S. Graham, Ed.D.",
  year: 2025,
  contributorCount: 13,
  chapterCount: 14,
  pageCount: 163,
  description:
    "A collaborative, leader-focused exploration of AI in K–12 education — from foundations and ethics to classroom practice and district-wide change.",
  buyUrl:
    "https://www.amazon.com/Future-Artificial-Intelligence-Technologies-Education/dp/B0FVPYCK35",
};

export const NEXT_BOOK = {
  title: "The AI Ready School Leader",
  subtitle: "The hands-on companion (coming September 2026)",
  description:
    "A practical playbook for school leaders translating the ideas in this book into weekly action — frameworks, checklists, and concrete moves.",
};
