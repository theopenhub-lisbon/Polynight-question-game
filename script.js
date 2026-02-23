const cards = [
  // ── QUESTIONS · SOFT ──
  { type: 'question', heat: 'soft', text: "What's one thing you wish more people understood about non-monogamy?" },
  { type: 'question', heat: 'soft', text: "How did you first discover that non-monogamy was something you wanted to explore?" },
  { type: 'question', heat: 'soft', text: "What does a perfect evening with people you love look like?" },
  { type: 'question', heat: 'soft', text: "What's your love language, and do you express it differently with different people?" },
  { type: 'question', heat: 'soft', text: "What's one misconception about polyamory you've had to address at least three times?" },
  { type: 'question', heat: 'soft', text: "If you could describe your relationship style as a type of music, what would it be?" },
  { type: 'question', heat: 'soft', text: "What's something you've learned about yourself through relationships that surprised you?" },
  { type: 'question', heat: 'soft', text: "What does 'home' mean to you, is it a place, a person, a feeling?" },
  { type: 'question', heat: 'soft', text: "What's one small ritual that makes you feel connected to someone?" },
  { type: 'question', heat: 'soft', text: "Are you more of a solo adventurer or a co-explorer in relationships?" },
  { type: 'question', heat: 'soft', text: "What did your younger self think relationships were supposed to look like?" },
  { type: 'question', heat: 'soft', text: "What's the weirdest question someone has asked you about your relationship style?" },
  { type: 'question', heat: 'soft', text: "What's your favourite way to meet new people, events, apps, chance encounters?" },
  { type: 'question', heat: 'soft', text: "How do you recharge after being very social? Solo time, cosy cuddles, or more people?" },

  // ── QUESTIONS · MEDIUM ──
  { type: 'question', heat: 'medium', text: "What's your personal definition of jealousy, and what do you do with it when it shows up?" },
  { type: 'question', heat: 'medium', text: "Have you ever had compersion catch you off guard? Tell us about it." },
  { type: 'question', heat: 'medium', text: "What boundaries have you set in your relationships that actually changed your life?" },
  { type: 'question', heat: 'medium', text: "What's a relationship structure you haven't tried but are curious about?" },
  { type: 'question', heat: 'medium', text: "How do you handle the logistics of multiple relationships without losing your mind?" },
  { type: 'question', heat: 'medium', text: "What's been the hardest conversation you've had to have in a non-monogamous relationship?" },
  { type: 'question', heat: 'medium', text: "What does 'nesting partner' vs 'anchor partner' mean to you personally?" },
  { type: 'question', heat: 'medium', text: "How has your relationship with time changed since you became non-monogamous?" },
  { type: 'question', heat: 'medium', text: "What's something that used to feel like a dealbreaker that you've renegotiated since?" },
  { type: 'question', heat: 'medium', text: "Is there a relationship label that fits you perfectly, or do you prefer to go without?" },
  { type: 'question', heat: 'medium', text: "How do you communicate differently with different partners?" },
  { type: 'question', heat: 'medium', text: "What's one thing poly culture gets right that mainstream dating culture doesn't?" },
  { type: 'question', heat: 'medium', text: "Have you ever had to defend your lifestyle to family? How did it go?" },

  // ── QUESTIONS · DEEP ──
  { type: 'question', heat: 'hot', text: "What fear did you have to face to fully embrace non-monogamy?" },
  { type: 'question', heat: 'hot', text: "What's the most profound thing a relationship has taught you about yourself?" },
  { type: 'question', heat: 'hot', text: "Have you ever ended a relationship because of incompatible relationship styles? What happened?" },
  { type: 'question', heat: 'hot', text: "What does 'enough love' mean to you, is there such a thing as too much?" },
  { type: 'question', heat: 'hot', text: "If you could un-learn one thing society taught you about love, what would it be?" },
  { type: 'question', heat: 'hot', text: "What's a moment you felt most fully yourself inside a relationship?" },
  { type: 'question', heat: 'hot', text: "What do you grieve about the relationships you've closed, even when closing was right?" },
  { type: 'question', heat: 'hot', text: "What does security mean to you, where does it come from?" },
  { type: 'question', heat: 'hot', text: "What would you want a new partner to know about you before falling for you?" },
  { type: 'question', heat: 'hot', text: "What does your ideal relationship ecosystem look like in 5 years?" },
  { type: 'question', heat: 'hot', text: "What's the difference between loneliness and solitude, and how do you know which one you're feeling?" },

  // ── DARES · SOFT ──
  { type: 'dare', heat: 'soft', text: "Give someone in the room a genuine compliment that isn't about their appearance." },
  { type: 'dare', heat: 'soft', text: "Find the person you've talked to least tonight and ask them one thing about themselves." },
  { type: 'dare', heat: 'soft', text: "Describe your current mood as a weather report." },
  { type: 'dare', heat: 'soft', text: "Do your best impression of someone receiving surprising good news." },
  { type: 'dare', heat: 'soft', text: "Share the emoji you use most and explain what it actually means to you." },
  { type: 'dare', heat: 'soft', text: "Tell the group: what song would play as your entrance music tonight?" },
  { type: 'dare', heat: 'soft', text: "Swap seats with someone you haven't spoken to yet." },
  { type: 'dare', heat: 'soft', text: "Text someone you care about who isn't here one kind sentence right now." },
  { type: 'dare', heat: 'soft', text: "Give the person to your left a tiny made-up award for something you noticed about them tonight." },

  // ── DARES · MEDIUM ──
  { type: 'dare', heat: 'medium', text: "Write your relationship style in 6 words or fewer and read it aloud." },
  { type: 'dare', heat: 'medium', text: "Hold eye contact with someone across the room for 10 seconds without laughing." },
  { type: 'dare', heat: 'medium', text: "Ask someone to describe you in 3 words and sit with it quietly for a moment." },
  { type: 'dare', heat: 'medium', text: "Tell a 60-second story about the worst date you ever went on." },
  { type: 'dare', heat: 'medium', text: "Ask two people here a question you've been too shy to ask anyone." },
  { type: 'dare', heat: 'medium', text: "For 1 minute, speak only in questions. Respond to everything as a question." },
  { type: 'dare', heat: 'medium', text: "Share your 'green flag', the one thing that makes you feel immediately safe with someone new." },
  { type: 'dare', heat: 'medium', text: "Act out how you flirt, dramatically, from start to finish." },
  { type: 'dare', heat: 'medium', text: "Tell someone here why you're glad they exist. Be specific." },

  // ── DARES · DEEP ──
  { type: 'dare', heat: 'hot', text: "Share something you've never said out loud about what you actually need in relationships." },
  { type: 'dare', heat: 'hot', text: "Tell the group about a time you failed spectacularly at communication and what you learned." },
  { type: 'dare', heat: 'hot', text: "Find someone new here and tell them one thing you notice about their energy." },
  { type: 'dare', heat: 'hot', text: "Admit to something you used to judge about non-monogamy that you've since changed your mind about." },
  { type: 'dare', heat: 'hot', text: "Write down your biggest relationship fear on a napkin and tear it up." },
  { type: 'dare', heat: 'hot', text: "Ask someone to hold your hands and share one thing you're afraid of this year." },
  { type: 'dare', heat: 'hot', text: "Say out loud: 'I am enough and I am also still growing.' Three times. Mean it." },
];

let drawn = 0;
let currentType = 'all';
let currentHeat = 'all';
let usedTexts = new Set();

const heatEmoji = h => ({ soft: '🌱', medium: '🔥', hot: '💫' }[h]);

function setType(type, el) {
  currentType = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function setHeat(heat, el) {
  currentHeat = heat;
  document.querySelectorAll('.heat-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function getPool(forceType) {
  const type = forceType || currentType;
  return cards.filter(c =>
    (type === 'all' || c.type === type) &&
    (currentHeat === 'all' || c.heat === currentHeat)
  );
}

function drawCard(forceType) {
  const pool = getPool(forceType);
  if (!pool.length) return;

  let available = pool.filter(c => !usedTexts.has(c.text));
  if (!available.length) { usedTexts.clear(); available = [...pool]; }

  const card = available[Math.floor(Math.random() * available.length)];
  usedTexts.add(card.text);
  drawn++;

  const el = document.getElementById('mainCard');
  el.classList.add('flipping');

  setTimeout(() => {
    el.className = 'card ' + card.type;
    document.getElementById('cardType').textContent = card.type === 'question' ? '✦ Question' : '◆ Dare';
    document.getElementById('cardText').textContent = card.text;
    document.getElementById('cardHeat').textContent = heatEmoji(card.heat);
    document.getElementById('counter').textContent = `${drawn} card${drawn !== 1 ? 's' : ''} drawn`;
    el.classList.add('flipping');
    setTimeout(() => el.classList.remove('flipping'), 420);
  }, 210);
}

function drawSpecific(type) { drawCard(type); }
