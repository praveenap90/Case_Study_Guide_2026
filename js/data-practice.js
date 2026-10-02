window.DATA = window.DATA || {};

DATA.estimation = [
  {
    id: "tires", q: "How many car tires are sold in the US each year?", approach: "Stock and flow: tires in use / lifespan, plus tires on new vehicles.",
    steps: [
      ["US vehicles on the road (cars and light trucks)", "~335M people x ~0.85 vehicles per person", "~280M"],
      ["Tires in use", "280M x 4", "~1.1B"],
      ["Replacement life", "45,000 miles per set / 12,000 miles per year", "~3.75 years"],
      ["Replacement tires per year", "1.1B / 3.75", "~300M"],
      ["Original-equipment tires", "~15M new vehicles x 4", "~60M"],
      ["Add commercial trucks and other (~10%)", "(300M + 60M) x ~1.1", "~395M"]
    ],
    answer: "About 350 to 400 million per year.",
    sanity: "That is about 1.1 tires per person per year. One car's four tires every ~4 years gives ~1 per person-year of driving age, so it is consistent."
  },
  {
    id: "coffee", q: "How many cups of coffee are sold per day in Chicago (the city)?", approach: "Top-down: population x share who buy coffee x cups per buyer.",
    steps: [
      ["City population", "Chicago proper", "~2.7M"],
      ["Adults", "~80% of population", "~2.2M"],
      ["Coffee drinkers", "~65% of adults", "~1.4M"],
      ["Share buying a cup outside the home on a given day", "~35%", "~500K buyers"],
      ["Cups per buyer", "~1.2", "~600K"],
      ["Add commuters and tourists (~+15%)", "600K x 1.15", "~700K"]
    ],
    answer: "About 600,000 to 700,000 cups per day.",
    sanity: "Roughly one cup per four residents per day. A dense area with many cafes, so plausible."
  },
  {
    id: "smartphones", q: "How many smartphones are sold in the US each year?", approach: "Stock and flow: users x (1 / replacement cycle), plus first-time buyers.",
    steps: [
      ["US population", "", "~335M"],
      ["Smartphone users (age 10+ with a phone)", "~85% of ~335M", "~285M"],
      ["Replacement cycle", "about 3 years", "~95M per year"],
      ["New users / second devices", "~5M to 10M", "~100M to 105M"],
      ["Cross-check: households", "130M households x ~2.5 phones / 3 years", "~108M"]
    ],
    answer: "About 100 to 120 million per year.",
    sanity: "About one phone sold per 3 people each year, consistent with a ~3-year replacement cycle."
  },
  {
    id: "pizza", q: "How many pizza orders (delivery and takeout) are placed in New York City each day?", approach: "Top-down by households.",
    steps: [
      ["NYC population", "", "~8.3M"],
      ["Households", "8.3M / ~2.6 people", "~3.2M"],
      ["Households ordering pizza at least some of the time", "~70%", "~2.2M"],
      ["Orders per ordering household per month", "~2", "~4.5M per month"],
      ["Per day", "4.5M / 30", "~150K"],
      ["Add office, student and tourist orders (~+30%)", "150K x 1.3", "~200K"]
    ],
    answer: "About 150,000 to 250,000 orders per day.",
    sanity: "Roughly one order per 40 residents per day. With thousands of pizzerias at 50 to 100 orders each, it matches."
  },
  {
    id: "gas", q: "How many gas stations are there in the US?", approach: "Demand vs. supply per station.",
    steps: [
      ["Vehicles", "", "~280M"],
      ["Fill-ups per vehicle per year", "~1 every 10 days", "~36"],
      ["Total fill-ups per year", "280M x 36", "~10B"],
      ["Per day", "10B / 365", "~27M"],
      ["Fill-ups per station per day", "8 pumps x ~25 fill-ups per pump", "~200"],
      ["Number of stations", "27M / 200", "~135K"]
    ],
    answer: "About 130,000 to 150,000 stations.",
    sanity: "About one station per 2,500 people, which feels right for a car-based country."
  },
  {
    id: "cards", q: "How many credit and debit card transactions happen in the US each day?", approach: "Top-down: cardholders x transactions per day.",
    steps: [
      ["US adults", "", "~260M"],
      ["Adults with a debit or credit card", "~85%", "~220M"],
      ["Card transactions per cardholder per day", "~1.8 (coffee, groceries, online, subscriptions)", "~400M"],
      ["Cross-check: yearly", "400M x 365", "~145B per year"]
    ],
    answer: "About 400 million per day, or roughly 150 billion per year.",
    sanity: "Around 1.5 card payments per adult per day including online and recurring payments."
  },
  {
    id: "piano", q: "How many piano tuners are there in Chicago?", approach: "Classic demand vs. supply.",
    steps: [
      ["Households in Chicago", "~2.7M / 2.7 people", "~1M"],
      ["Households with a piano", "~1 in 20", "~50K"],
      ["Tunings per piano per year", "1", "~50K tunings per year"],
      ["Tunings per tuner per day", "~4 (including travel)", "-"],
      ["Working days per year", "~220", "~880 tunings per tuner"],
      ["Tuners needed", "50K / 880", "~57"]
    ],
    answer: "About 50 to 60 piano tuners (full-time equivalents).",
    sanity: "Many are part-time, so the actual headcount may be higher, while some pianos are tuned less than once a year."
  },
  {
    id: "rides", q: "How many ride-hail trips happen in the Chicago area each day?", approach: "Top-down: population x adoption x frequency.",
    steps: [
      ["Metro population", "", "~9.5M"],
      ["Adults", "~78%", "~7.4M"],
      ["Share who use ride-hail on a given day", "~3%", "~220K riders"],
      ["Trips per rider per day", "~1.3", "~290K"],
      ["Cross-check: drivers", "~15K active drivers x ~15 trips per day", "~225K"]
    ],
    answer: "Roughly 200,000 to 300,000 trips per day.",
    sanity: "Two independent estimates (riders and drivers) land within 30% of each other."
  },
  {
    id: "manholes", q: "Estimate the number of manholes in the US.", approach: "Top-down by density: segment the population into urban, suburban and rural, then apply people-per-manhole ratios.",
    steps: [
      ["US population", "", "~330M"],
      ["Segments", "Urban 60% / suburban 30% / rural 10%", "~198M / ~99M / ~33M"],
      ["Urban manholes", "198M / 75 people per manhole", "~2.6M"],
      ["Suburban manholes", "99M / 150 people per manhole", "~0.7M"],
      ["Rural allowance", "minimal coverage", "~0.1M"],
      ["Total", "2.6M + 0.7M + 0.1M", "~3.4M"]
    ],
    answer: "About 3.4M on the base case; say roughly 3 to 5 million manholes.",
    sanity: "One manhole per ~80 people nationwide gives 330M / 80 = ~4M, inside the range."
  },
  {
    id: "tennis", q: "How many tennis balls are sold in the US each year?", approach: "Segment players (casual, recreational, serious), estimate cans bought per year by each, then sum and multiply by 3 balls per can.",
    steps: [
      ["US population", "", "~330M"],
      ["Tennis players", "5% of population", "~16.5M"],
      ["Casual", "70% = 11.5M x 1 can per year", "~11.5M cans"],
      ["Recreational", "25% = 4.1M x 12 cans per year", "~49.2M cans"],
      ["Serious", "5% = 825K x 26 cans per year", "~21.5M cans"],
      ["Total cans", "11.5M + 49.2M + 21.5M", "~82.2M"],
      ["Total balls", "82.2M cans x 3 balls", "~247M"]
    ],
    answer: "About 240 to 250 million tennis balls per year.",
    sanity: "About 15 balls per player per year; recreational players drive about 60% of volume."
  }
];
