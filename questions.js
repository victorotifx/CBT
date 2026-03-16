const questions = [
  // --------- 40 Government Questions ---------
  {
    question: "What is the primary purpose of government?",
    options: ["To entertain citizens", "To manage public affairs", "To promote anarchy", "To abolish laws"],
    answer: "To manage public affairs"
  },
  {
    question: "Which principle advocates division of government powers?",
    options: ["Judicial review", "Separation of powers", "Federalism", "Universal suffrage"],
    answer: "Separation of powers"
  },
  {
    question: "A federal system of government is best for countries with:",
    options: ["Homogeneous society", "Ethnic diversity", "One religion", "Single culture"],
    answer: "Ethnic diversity"
  },
  {
    question: "The head of a parliamentary government is called the:",
    options: ["President", "Prime Minister", "Speaker", "Mayor"],
    answer: "Prime Minister"
  },
  {
    question: "Citizenship means:",
    options: ["Paying taxes only", "Having full legal rights and obligations", "Being born overseas", "Not voting"],
    answer: "Having full legal rights and obligations"
  },
  {
    question: "Which organ makes laws in a democratic government?",
    options: ["Executive", "Judiciary", "Legislature", "Army"],
    answer: "Legislature"
  },
  {
    question: "Universal adult franchise means:",
    options: ["Only adults vote", "All adults can vote regardless of status", "Only rich people vote", "Only men vote"],
    answer: "All adults can vote regardless of status"
  },
  {
    question: "The Doctrine of Separation of Powers was popularized by:",
    options: ["John Locke", "Karl Marx", "Montesquieu", "Plato"],
    answer: "Montesquieu"
  },
  {
    question: "In a democracy, the best form of participation is:",
    options: ["Violence", "Voting in elections", "Ignoring government", "Taking up arms"],
    answer: "Voting in elections"
  },
  {
    question: "Which of the following is NOT a function of government?",
    options: ["Maintaining law and order", "Protecting rights", "Producing entertainment", "Providing public goods"],
    answer: "Producing entertainment"
  },
  {
    question: "Federalism is characterized by:",
    options: ["One level of government","Two or more levels sharing power","No government","Military rule"],
    answer: "Two or more levels sharing power"
  },
  {
    question: "The judiciary interprets:",
    options: ["Laws", "Taxes", "Markets", "Festivals"],
    answer: "Laws"
  },
  {
    question: "A government with one ruler holding absolute power is called:",
    options: ["Monarchy", "Dictatorship", "Democracy", "Oligarchy"],
    answer: "Dictatorship"
  },
  {
    question: "Which of these is a feature of democracy?",
    options: ["Limited government", "No laws", "One party rule", "Unlimited government"],
    answer: "Limited government"
  },
  {
    question: "A successful election must be:",
    options: ["Free and fair", "Secretive", "Violent", "Cancelled"],
    answer: "Free and fair"
  },
  {
    question: "In a democratic government, power belongs to:",
    options: ["The military", "The citizens", "Foreign rulers", "Monarchs"],
    answer: "The citizens"
  },
  {
    question: "Which part of government enforces laws?",
    options: ["Executive", "Legislature", "Judiciary", "None"],
    answer: "Executive"
  },
  {
    question: "Majority rule means decisions are made by:",
    options: ["Minority", "Leaders alone", "Majority of citizens", "Foreign entities"],
    answer: "Majority of citizens"
  },
  {
    question: "Which of these ensures lawfulness in society?",
    options: ["Judiciary", "Market", "Farmers", "None"],
    answer: "Judiciary"
  },
  {
    question: "The constitution is best described as:",
    options: ["No rules", "Written plan of government", "Religious book", "Recipe book"],
    answer: "Written plan of government"
  },
  {
    question: "A republic is a government where:",
    options: ["Monarch rules","Citizens elect leaders","Army rules","There is no leader"],
    answer: "Citizens elect leaders"
  },
  {
    question: "Checks and balances are used to:",
    options: ["Concentrate power","Prevent abuse of power","Encourage war","Ignore laws"],
    answer: "Prevent abuse of power"
  },
  {
    question: "Federal government shares power with:",
    options: ["Only judiciary", "States/regions", "Universities", "Private businesses"],
    answer: "States/regions"
  },
  {
    question: "A two‑party system involves:",
    options: ["One party", "Two main competing parties","No parties","Three parties only"],
    answer: "Two main competing parties"
  },
  {
    question: "Civil liberties refer to:",
    options: ["Rights of citizens", "Only duties", "Taxes", "Governors"],
    answer: "Rights of citizens"
  },
  {
    question: "The term 'sovereignty' means:",
    options: ["Weak government","Supreme authority within a territory","Foreign help","Market control"],
    answer: "Supreme authority within a territory"
  },
  {
    question: "The legislative branch is responsible for:",
    options: ["Enforcing laws","Making laws","Interpreting laws","Blocking markets"],
    answer: "Making laws"
  },
  {
    question: "Judicial independence means:",
    options: ["Judges influenced by rulers","Judges free from influence","No judges","Judges elected by citizens"],
    answer: "Judges free from influence"
  },
  {
    question: "Civil rights guarantee:",
    options: ["Freedom and equality","No freedom","Only duties","Only taxes"],
    answer: "Freedom and equality"
  },
  {
    question: "The core of democracy is:",
    options: ["Dialogue","Force","Silence","Monarchy"],
    answer: "Dialogue"
  },
  {
    question: "A multi‑party system allows:",
    options: ["One party","Only two parties","Multiple parties","No parties"],
    answer: "Multiple parties"
  },
  {
    question: "The executive branch is headed by:",
    options: ["Speaker","President/Prime Minister","Judge","Mayor"],
    answer: "President/Prime Minister"
  },
  {
    question: "A democratic election must be:",
    options: ["Intimidating","Fair","Delayed","Illegal"],
    answer: "Fair"
  },
  {
    question: "Federalism helps to:",
    options: ["Centralize power","Divide power","Cancel laws","Ignore people"],
    answer: "Divide power"
  },
  {
    question: "The constitution protects:",
    options: ["Only rulers","Only wealth","Rights of citizens","Foreigners only"],
    answer: "Rights of citizens"
  },
  {
    question: "A successful government protects:",
    options: ["Rights and welfare","Only markets","Only rulers","Only taxes"],
    answer: "Rights and welfare"
  },
  {
    question: "Compulsory voting means:",
    options: ["Citizens must vote","No voting","Only rulers vote","Only adults vote"],
    answer: "Citizens must vote"
  },

  // --------- 40 Literature Questions (Lekki Headmaster) ---------
  {
    question: "Where is the primary setting of The Lekki Headmaster?",
    options: ["Abuja", "Lekki, Lagos", "Kano", "Ibadan"],
    answer: "Lekki, Lagos"
  },
  {
    question: "Who is the protagonist of The Lekki Headmaster?",
    options: ["Mr. Alabi", "Mr. Bepo", "Mr. Ojo", "Mrs. Gloss"],
    answer: "Mr. Bepo"
  },
  {
    question: "What is Mr. Bepo’s profession?",
    options: ["Doctor", "Headmaster", "Lawyer", "Engineer"],
    answer: "Headmaster"
  },
  {
    question: "The novel mainly highlights challenges in:",
    options: ["Banking", "Education", "Healthcare", "Agriculture"],
    answer: "Education"
  },
  {
    question: "A major theme in the story is:",
    options: ["Educational reform", "War", "Space travel", "Sports"],
    answer: "Educational reform"
  },
  {
    question: "The community’s initial reaction to reforms was:",
    options: ["Support", "Indifference", "Strong opposition", "Celebration"],
    answer: "Strong opposition"
  },
  {
    question: "Mr. Bepo introduced reforms by:",
    options: ["Reducing hours", "New teaching methods", "Closing school","Ignoring students"],
    answer: "New teaching methods"
  },
  {
    question: "Which character opposes Mr. Bepo’s reforms?",
    options: ["Mrs. Gloss", "Mr. Alabi", "Jide", "Banky"],
    answer: "Mr. Alabi"
  },
  {
    question: "The title ‘The Lekki Headmaster’ refers to:",
    options: ["Mr. Bepo’s job", "The city", "A festival","A school subject"],
    answer: "Mr. Bepo’s job"
  },
  {
    question: "The story explores:",
    options: ["Innovations in education","Cooking","Football","Music"],
    answer: "Innovations in education"
  },
  {
    question: "The school in the novel symbolizes:",
    options: ["Hope for community","Random building","Market","Library"],
    answer: "Hope for community"
  },
  {
    question: "What best describes Mr. Bepo’s leadership?",
    options: ["Authoritarian","Collaborative","Disinterested","Lazy"],
    answer: "Collaborative"
  },
  {
    question: "The conflict in the novel centers on:",
    options: ["Sports rivalry","Resistance to change","War","Travel"],
    answer: "Resistance to change"
  },
  {
    question: "Who supports Mr. Bepo’s initiatives?",
    options: ["Mr. Alabi","Community leaders","Mrs. Adebayo","None"],
    answer: "Mrs. Adebayo"
  },
  {
    question: "A lesson from the novel is the importance of:",
    options: ["Education","Wealth","Politics","Entertainment"],
    answer: "Education"
  },
  {
    question: "Characters in the novel symbolize:",
    options: ["Leadership and progress","Only wealth","Only sports","Only travel"],
    answer: "Leadership and progress"
  },
  {
    question: "The climax of the story involves:",
    options: ["School closure","Community acceptance","War","Holiday"],
    answer: "Community acceptance"
  },
  {
    question: "What theme reflects societal change?",
    options: ["Innovation","War","Music","Cooking"],
    answer: "Innovation"
  },
  {
    question: "The novel teaches about:",
    options: ["Teamwork","Only wealth","Travel","Music"],
    answer: "Teamwork"
  },
  {
    question: "Mr. Bepo’s character shows:",
    options: ["Resilience","Fear","Ignorance","Isolation"],
    answer: "Resilience"
  },
  {
    question: "The setting in Lekki shows:",
    options: ["Urban challenges","Rural life","Forest","River"],
    answer: "Urban challenges"
  },
  {
    question: "A symbol in the story is:",
    options: ["The river", "The school", "The market","The festival"],
    answer: "The school"
  },
  {
    question: "Mr. Alabi represents:",
    options: ["Change","Tradition","Travel","Music"],
    answer: "Tradition"
  },
  {
    question: "The story’s ending suggests:",
    options: ["Hope","Defeat","War","Closure"],
    answer: "Hope"
  },
  {
    question: "A central idea of the book is:",
    options: ["Education reform","Only sports","Only wealth","Only politics"],
    answer: "Education reform"
  },
  {
    question: "Who plays a mentoring role?",
    options: ["Mrs. Adebayo","Banky","Mr. Ojo","Mrs. Gloss"],
    answer: "Mrs. Adebayo"
  },
  {
    question: "Which setting influences change?",
    options: ["School environment","Market","Hospital","Cinema"],
    answer: "School environment"
  },
  {
    question: "Conflict resolution shows:",
    options: ["Community buy‑in","War","Escape","Neglect"],
    answer: "Community buy‑in"
  },
  {
    question: "The novel’s genre is:",
    options: ["Science fiction","Educational drama","Comedy","Mystery"],
    answer: "Educational drama"
  },
  {
    question: "The story engages readers in:",
    options: ["Educational issues","Only sports","Only music","Only cooking"],
    answer: "Educational issues"
  },
  {
    question: "Mr. Bepo’s reforms impact:",
    options: ["Academic standards","Sports only","Music","Trade"],
    answer: "Academic standards"
  }
];

export default questions;
