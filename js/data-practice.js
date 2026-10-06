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
  },
  {"id": "bikes", "q": "How many bicycles are sold in the US each year?", "approach": "Stock and flow: bikes in use / average life, plus growth.", "steps": [["US population", "", "~335M"], ["Bikes in use (kids and adults)", "~335M x 0.4 bikes per person", "~135M"], ["Average life of a bike", "kids outgrow them, adults keep them ~8 years", "~8 years"], ["Replacement sales per year", "135M / 8", "~17M"], ["Add growth in the number of bikes (~5%)", "17M x 1.05", "~18M"]], "answer": "About 15 to 20 million per year.", "sanity": "Households route: 130M households x ~12% buy a bike in a year x ~1.1 bikes = ~17M. Both routes agree."},
  {"id": "taxis", "q": "How many taxi and ride-hail trips happen per day in New York City?", "approach": "Supply side: active vehicles x trips per vehicle. Demand side as a check.", "steps": [["For-hire vehicles licensed", "yellow, green and app cars", "~100K"], ["Active on a typical day", "~60% of 100K", "~60K"], ["Trips per hour on the road", "", "~1.5"], ["Hours on the road per vehicle per day", "", "~10"], ["Trips per vehicle per day", "1.5 x 10", "~15"], ["Total trips per day", "60K x 15", "~900K"]], "answer": "About 800,000 to 1.2 million trips per day.", "sanity": "Demand route: 8.3M residents x ~10% take a cab or app car on a given day = ~830K, plus ~20% for visitors and commuters = ~1.0M."},
  {"id": "gyms", "q": "How many people in the US have a gym membership?", "approach": "Top-down: adults x share who exercise x share who pay for a gym.", "steps": [["US population", "", "~335M"], ["Adults", "~78% of 335M", "~260M"], ["Adults who exercise regularly", "~50%", "~130M"], ["Of those, paying for a gym", "~55% of 130M", "~72M"], ["Add sign-ups who rarely go (~10%)", "72M x 1.1", "~79M"]], "answer": "About 65 to 85 million members.", "sanity": "Supply route: ~55,000 gyms and studios x ~1,400 members each = ~77M."},
  {"id": "bank-branches", "q": "How many ATM withdrawals happen per day in a city of 1 million people?", "approach": "Top-down: adults x ATM users x withdrawals per user.", "steps": [["Population", "", "~1M"], ["Adults", "~80%", "~800K"], ["Adults who use ATMs or a debit card", "~75% of 800K", "~600K"], ["Withdrawals per user per year", "about 1.5 per month", "~18"], ["Withdrawals per year", "600K x 18", "~10.8M"], ["Per day", "10.8M / 365", "~30K"], ["Add visitors and commuters (~10%)", "30K x 1.1", "~33K"]], "answer": "About 25,000 to 40,000 withdrawals per day.", "sanity": "Supply route: ~1.2 ATMs per 1,000 people gives ~1,200 ATMs, each doing ~25 withdrawals a day = ~30K."},
  {"id": "streaming", "q": "How many hours of streaming video do people in the US watch per day?", "approach": "Top-down: people x share who stream x hours per streamer.", "steps": [["US population", "", "~335M"], ["People who stream on a given day", "~75%", "~250M"], ["Hours on TV and laptop per streamer", "", "~1.8"], ["Hours on TV and laptop", "250M x 1.8", "~450M"], ["Extra hours on phones", "250M x ~0.3", "~75M"], ["Total hours per day", "450M + 75M", "~525M"]], "answer": "About 400 to 650 million hours per day.", "sanity": "Household route: ~130M households x ~4 hours of streaming per household per day on all screens = ~520M."},
  {"id": "cards-issued", "q": "How many new credit card applications are made per day in the US?", "approach": "Stock and flow: cards in use / card life gives new accounts, then divide by approval rate.", "steps": [["US adults", "", "~260M"], ["Adults with a credit card", "~80%", "~210M"], ["Cards in use", "210M x ~4 cards each", "~840M"], ["New accounts per year", "840M / ~7 year life", "~120M"], ["Applications per year", "120M / ~50% approval rate", "~240M"], ["Applications per day", "240M / 365", "~650K"]], "answer": "About 500,000 to 800,000 applications per day.", "sanity": "Other route: 260M adults x ~35% apply in a year x ~2.5 applications each = ~230M per year, or ~620K per day."},
  {"id": "coffeeshops", "q": "How many coffee shops are there in a mid-size city of 500,000 people?", "approach": "Demand vs supply: cups sold in coffee shops / cups a shop sells per day.", "steps": [["Population", "", "~500K"], ["Cups bought outside the home per day", "~0.25 per resident", "~125K"], ["Share sold by dedicated coffee shops", "~40% (rest: fast food, offices, stores)", "~50K"], ["Add visitors and commuters (~10%)", "50K x 1.1", "~55K"], ["Cups per shop per day", "mix of small cafes and chains", "~350"], ["Number of shops", "55K / 350", "~160"]], "answer": "About 100 to 250 coffee shops.", "sanity": "Rule of thumb: the US has roughly 60,000 coffee shops, about 1 per 5,500 people, which gives ~90 here. A city is denser than average, so ~150 is reasonable."},
  {"id": "elevators", "q": "How many elevators are there in Manhattan?", "approach": "Bottom-up: buildings with elevators x elevators per building.", "steps": [["Buildings in Manhattan", "", "~40K"], ["Buildings with an elevator", "~35% (walk-ups and low rises have none)", "~14K"], ["Elevators per such building", "1 in small ones, 20+ in towers; average ~2", "~2"], ["Elevators in these buildings", "14K x 2", "~28K"], ["Add hotels, hospitals and stations (~10%)", "28K x 1.1", "~31K"]], "answer": "About 25,000 to 40,000 elevators.", "sanity": "Space route: ~400M sq ft of offices / ~20K sq ft per elevator = ~20K, plus ~1.3M residents in elevator buildings / ~150 per elevator = ~8.5K. Total ~29K."},
  {"id": "laptops", "q": "How many laptops are sold in the US each year?", "approach": "Stock and flow: laptops in use / replacement cycle.", "steps": [["US population", "", "~335M"], ["People with a laptop (home, work or school)", "~70%", "~235M"], ["Replacement cycle", "about 4 years", "~4 years"], ["Replacement sales per year", "235M / 4", "~59M"], ["Add first-time and extra buyers (~5%)", "59M x 1.05", "~62M"]], "answer": "About 50 to 70 million per year.", "sanity": "Segment route: work 160M workers x 40% / 4 = ~16M; homes 130M x 1.3 / 4.5 = ~38M; schools 50M students / 4 = ~12M. Total ~66M."},
  {"id": "flights", "q": "How many flights are in the air over the US at 2 pm?", "approach": "Stock and flow: flights per day x flight length / active hours.", "steps": [["Airline passengers per day", "", "~2.5M"], ["Passengers per flight", "", "~100"], ["Airline flights per day", "2.5M / 100", "~25K"], ["Flight-hours per day", "25K x ~2 hours each", "~50K"], ["Planes in the air on average", "50K / ~16 active hours", "~3.1K"], ["2 pm is near the daily peak", "3.1K x 1.1", "~3.4K"], ["Add cargo, business jets, military", "3.4K x 1.3", "~4.4K"]], "answer": "About 3,500 to 5,500 flights.", "sanity": "Total route: about 45K flights of all types per day x ~1.8 hours / ~17 active hours = ~4.8K. This matches the often-quoted figure of about 5,000 aircraft at peak."},
  {"id": "data-center", "q": "How many servers does a video app with 10 million daily users need?", "approach": "Bottom-up from peak load: streaming bandwidth plus app requests.", "steps": [["Watch hours per day", "10M users x ~1 hour", "~10M"], ["Peak concurrent streams", "~10% of daily hours fall in the busiest hour", "~1M"], ["Peak bandwidth", "1M x ~3 Mbps", "~3 Tbps"], ["Streaming servers", "3,000 Gbps / ~20 Gbps per server", "~150"], ["App requests at peak", "10M x 50 per day / 86,400 s, x 3 for peak", "~17K per second"], ["App servers", "17K / ~1,000 per server", "~20"], ["Total with 50% headroom and spare", "(150 + 20) x 1.5", "~250"]], "answer": "About 200 to 400 servers, not counting video encoding and storage.", "sanity": "Per-user route: ~250 servers is 1 per 40,000 daily users. Light apps run 1 server per 10K to 50K users, so it is the right order of magnitude."},
  {"id": "data-storage", "q": "How many photos does a social app with 50 million users store per year, and how much space is that?", "approach": "Bottom-up flow: active posters x photos each x size.", "steps": [["Registered users", "", "~50M"], ["Users who post in a month", "~40%", "~20M"], ["Photos per poster per year", "~2 per week x 52", "~100"], ["Photos per year", "20M x 100", "~2B"], ["Stored size per photo", "compressed original", "~2 MB"], ["Original data per year", "2B x 2 MB", "~4 PB"], ["Add resized copies (~50%)", "4 PB x 1.5", "~6 PB"], ["Disk with 3 copies", "6 PB x 3", "~18 PB"]], "answer": "About 2 billion photos per year, around 6 PB of data (about 18 PB of disk with 3 copies).", "sanity": "Rate route: 2B per year is ~63 photos per second on average. A big photo app sees ~0.2 posts per user per day; 50M x 0.2 x 365 = ~3.7B, the same order."},
  {"id": "fraud-alerts", "q": "A bank has 20 million card accounts. How many fraud alerts must it review per day?", "approach": "Top-down funnel: transactions, then flagged, then needing a person.", "steps": [["Card accounts", "", "~20M"], ["Transactions per account per day", "about 30 per month", "~1"], ["Transactions per day", "20M x 1", "~20M"], ["Flagged by rules or a model", "~0.2%", "~40K"], ["Cleared automatically by a text to the customer", "~70%", "~28K"], ["Left for an analyst", "40K x 30%", "~12K"], ["Analysts needed", "12K / ~40 reviews each per day", "~300"]], "answer": "About 10,000 to 15,000 alerts per day need human review.", "sanity": "Fraud-rate route: ~0.1% of 20M = ~20K fraud transactions, ~3 per case = ~7K real cases. If about half the reviews are false alarms, that is ~13K reviews."},
  {"id": "support-calls", "q": "How many customer support calls does a bank with 10 million customers get per day?", "approach": "Top-down: customers x calls per customer, then staffing as a check.", "steps": [["Customers", "", "~10M"], ["Calls per customer per year", "balance, card, fraud, fees", "~2.5"], ["Calls per year", "10M x 2.5", "~25M"], ["Calls per weekday", "25M / ~250 weekdays", "~100K"], ["Agent time per weekday", "100K x ~6 min = 600K min", "~10K hours"], ["Agents needed", "10K hours / ~5 productive hours each", "~2,000"]], "answer": "About 70,000 calls per day averaged over the week, near 100,000 on a weekday.", "sanity": "Staffing route: 2,000 agents for 10M customers is 1 agent per 5,000 customers. Contact centers often run 1 agent per few thousand customers, so it fits."},
  {"id": "window-washers", "q": "How many window cleaners are needed for a city skyline of about 300 high-rises?", "approach": "Bottom-up: windows x cleanings per year / windows per washer.", "steps": [["High-rises", "", "~300"], ["Windows per tower", "~40 floors x ~100 windows", "~4,000"], ["Windows in the skyline", "300 x 4,000", "~1.2M"], ["Cleanings per year", "~4 times a year", "~4.8M"], ["Windows per washer per day", "~20 per hour x ~6 hours", "~120"], ["Windows per washer per year", "120 x ~200 working days (weather)", "~24K"], ["Washers needed", "4.8M / 24K", "~200"]], "answer": "About 150 to 300 window cleaners.", "sanity": "Area route: 300 towers x ~150K sq ft of glass x 4 = ~180M sq ft a year. A washer does ~1,000 sq ft per hour x 6 x 200 = 1.2M, so ~150 washers."}
];
