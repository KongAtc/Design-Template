// Data for the Stack team-lunch prototype.
// Stock photos sourced from Unsplash (open license).

const RESTAURANTS = [
  {
    id: 'sweetgreen',
    name: 'Sweetgreen',
    cuisine: 'Salads · Bowls',
    rating: 4.8,
    reviews: 1240,
    eta: '20–30 min',
    fee: '$2.49',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&auto=format&fit=crop',
    tag: 'Fast',
  },
  {
    id: 'bao',
    name: 'Bao + Co.',
    cuisine: 'Asian · Buns',
    rating: 4.7,
    reviews: 880,
    eta: '25–35 min',
    fee: '$1.99',
    img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80&auto=format&fit=crop',
    tag: 'Team fave',
  },
  {
    id: 'calle',
    name: 'Calle Tacos',
    cuisine: 'Mexican · Tacos',
    rating: 4.9,
    reviews: 2100,
    eta: '15–25 min',
    fee: '$0.00',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80&auto=format&fit=crop',
    tag: 'Free delivery',
  },
  {
    id: 'pho',
    name: 'Pho Saigon',
    cuisine: 'Vietnamese · Noodles',
    rating: 4.6,
    reviews: 540,
    eta: '30–40 min',
    fee: '$2.49',
    img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80&auto=format&fit=crop',
    tag: null,
  },
  {
    id: 'roma',
    name: 'Roma Slice',
    cuisine: 'Pizza · Italian',
    rating: 4.5,
    reviews: 1480,
    eta: '20–30 min',
    fee: '$1.99',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80&auto=format&fit=crop',
    tag: null,
  },
];

const CATEGORIES = [
  { id: 'all',   label: 'All' },
  { id: 'bowls', label: 'Bowls' },
  { id: 'salad', label: 'Salads' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'asian', label: 'Asian' },
  { id: 'sweet', label: 'Sweet' },
];

// Sweetgreen menu (used for menu + item screens)
const MENU = {
  restaurant: RESTAURANTS[0],
  sections: [
    {
      id: 'signature',
      label: 'Signature bowls',
      items: [
        {
          id: 'harvest',
          name: 'Harvest Bowl',
          desc: 'Wild rice, roasted chicken, sweet potato, apples, goat cheese, almonds, balsamic vinaigrette.',
          price: 13.95,
          kcal: 705,
          img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&auto=format&fit=crop',
          tag: 'Most ordered',
        },
        {
          id: 'kale',
          name: 'Kale Caesar',
          desc: 'Chopped kale, roasted chicken, parmesan, lime squeeze, caesar dressing, focaccia croutons.',
          price: 12.50,
          kcal: 540,
          img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80&auto=format&fit=crop',
        },
        {
          id: 'crispy',
          name: 'Crispy Rice Bowl',
          desc: 'Crispy rice, edamame, avocado, cucumber, miso ginger dressing, sesame, sweet shoyu.',
          price: 13.25,
          kcal: 620,
          img: 'https://images.unsplash.com/photo-1604908554007-1ecf654ae00f?w=800&q=80&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 'warm',
      label: 'Warm bowls',
      items: [
        {
          id: 'chicken-pesto',
          name: 'Chicken Pesto Parm',
          desc: 'Hot quinoa, roasted chicken, kale, tomato, parmesan, basil pesto vinaigrette.',
          price: 13.95,
          kcal: 690,
          img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80&auto=format&fit=crop',
        },
        {
          id: 'shroomami',
          name: 'Shroomami',
          desc: 'Wild rice, mesclun, tofu, roasted mushrooms, beets, cucumber, miso sesame ginger.',
          price: 12.95,
          kcal: 580,
          img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80&auto=format&fit=crop',
        },
      ],
    },
    {
      id: 'sides',
      label: 'Sides & drinks',
      items: [
        {
          id: 'focaccia',
          name: 'Rosemary focaccia',
          desc: 'Warm, salted, served with olive oil & flaky salt.',
          price: 3.50,
          img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80&auto=format&fit=crop',
        },
        {
          id: 'lemon',
          name: 'Sparkling lemonade',
          desc: 'House-pressed lemons, ginger, mint, lightly sweetened.',
          price: 4.25,
          img: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800&q=80&auto=format&fit=crop',
        },
      ],
    },
  ],
};

// Item detail customizations (Harvest Bowl)
const ITEM_DETAIL = {
  ...MENU.sections[0].items[0],
  sizes: [
    { id: 'reg', label: 'Regular', delta: 0 },
    { id: 'lrg', label: 'Large (+30%)', delta: 3.50 },
  ],
  protein: [
    { id: 'none',    label: 'No protein',     delta: -2.00 },
    { id: 'chicken', label: 'Roasted chicken', delta: 0 },
    { id: 'tofu',    label: 'Blackened tofu', delta: 0 },
    { id: 'salmon',  label: 'Crispy salmon',  delta: 4.50 },
  ],
  addons: [
    { id: 'avocado', label: 'Avocado',         delta: 2.50 },
    { id: 'egg',     label: 'Soft egg',        delta: 1.50 },
    { id: 'kraut',   label: 'Pickled kraut',   delta: 1.00 },
    { id: 'cheese',  label: 'Extra goat cheese', delta: 1.50 },
  ],
  dressing: [
    { id: 'balsamic', label: 'Balsamic vinaigrette' },
    { id: 'caesar',   label: 'Caesar' },
    { id: 'miso',     label: 'Miso ginger' },
    { id: 'lemon',    label: 'Lemon tahini' },
  ],
};

// Group order participants
const TEAMMATES = [
  { id: 'me',    name: 'You',       color: '#FF7A59', joined: true, item: 'Harvest Bowl', sub: 'Lrg · +avocado', price: 19.95 },
  { id: 'maya',  name: 'Maya R.',   color: '#7C5CFA', joined: true, item: 'Kale Caesar',  sub: 'Reg · +egg',     price: 14.00 },
  { id: 'sam',   name: 'Sam O.',    color: '#1FB57F', joined: true, item: 'Crispy Rice',  sub: 'Reg',            price: 13.25 },
  { id: 'jordan',name: 'Jordan T.', color: '#F0B400', joined: true, item: 'Shroomami',    sub: 'Reg · no beets', price: 12.95 },
  { id: 'priya', name: 'Priya K.',  color: '#E94E77', joined: false, item: null, sub: null, price: 0 },
  { id: 'leo',   name: 'Leo W.',    color: '#3D8BFD', joined: false, item: null, sub: null, price: 0 },
];

const PAST_ORDERS = [
  {
    id: 'p1',
    when: 'Yesterday · 12:38 PM',
    rest: 'Bao + Co.',
    items: 5,
    total: 64.20,
    img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80&auto=format&fit=crop',
    members: ['You', 'Maya', 'Sam', 'Jordan', 'Priya'],
  },
  {
    id: 'p2',
    when: 'Mon · Apr 15',
    rest: 'Calle Tacos',
    items: 6,
    total: 78.40,
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80&auto=format&fit=crop',
    members: ['You', 'Maya', 'Sam', 'Jordan', 'Leo', 'Priya'],
  },
  {
    id: 'p3',
    when: 'Fri · Apr 12',
    rest: 'Sweetgreen',
    items: 4,
    total: 56.10,
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80&auto=format&fit=crop',
    members: ['You', 'Maya', 'Sam', 'Jordan'],
  },
  {
    id: 'p4',
    when: 'Wed · Apr 10',
    rest: 'Roma Slice',
    items: 3,
    total: 42.75,
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80&auto=format&fit=crop',
    members: ['You', 'Sam', 'Leo'],
  },
];

Object.assign(window, {
  RESTAURANTS, CATEGORIES, MENU, ITEM_DETAIL, TEAMMATES, PAST_ORDERS,
});
