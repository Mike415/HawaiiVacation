/**
 * /data — Plain-text itinerary page for AI assistants and crawlers.
 * All content is rendered as readable HTML text with no JavaScript-only rendering.
 * This page is intentionally minimal so bots can parse it without executing JS.
 */

import { Link } from "wouter";

export default function DataPage() {
  return (
    <div style={{ fontFamily: "Georgia, serif", maxWidth: "860px", margin: "0 auto", padding: "40px 24px", color: "#1a1a1a", lineHeight: 1.7, fontSize: "16px" }}>

      <div style={{ marginBottom: "32px", paddingBottom: "16px", borderBottom: "2px solid #ccc" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "8px" }}>Morelli Family Maui Trip — Full Itinerary</h1>
        <p style={{ color: "#555", margin: 0 }}>
          <strong>Dates:</strong> May 29 – June 5, 2026 &nbsp;|&nbsp;
          <strong>Resort:</strong> OUTRIGGER Honua Kai Resort &amp; Spa, 130 Kai Malina Pkwy, Ka'anapali, Maui, HI &nbsp;|&nbsp;
          <strong>Travelers:</strong> 2 adults, 2 children (ages 2 &amp; 4) &nbsp;|&nbsp;
          <strong>Flights:</strong> SFO → OGG (round-trip)
        </p>
        <p style={{ color: "#555", margin: "8px 0 0" }}>
          <strong>Room:</strong> 1-Bedroom Partial Ocean View — king bed + double sofa bed, full kitchen (fridge, stovetop, oven, microwave), in-unit washer/dryer, furnished lanai.
          Parking: $35/day self-park, $40/day valet.
          Cancellation policy: fully refundable until April 29, 2026.
        </p>
        <p style={{ color: "#555", margin: "8px 0 0" }}>
          <strong>Booked via:</strong> Fora Travel (Veronica Vega, veronica.vega@fora.travel) &nbsp;|&nbsp;
          <a href="https://trips.foratravel.com/i/CgHJpOXbt9" style={{ color: "#0066cc" }}>View Fora itinerary</a>
        </p>
        <p style={{ color: "#888", fontSize: "13px", margin: "12px 0 0" }}>
          This page is a plain-text version of the itinerary for AI assistants and search engines.{" "}
          <Link href="/" style={{ color: "#0066cc" }}>View the full interactive site →</Link>
        </p>
      </div>

      {/* ── BUDGET ── */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.4rem", borderBottom: "1px solid #ddd", paddingBottom: "6px" }}>Estimated Budget</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
          <tbody>
            {[
              ["Flights (SFO → OGG, 4 pax, round-trip)", "~$2,200"],
              ["Honua Kai Resort & Spa — 1BR Partial Ocean View (7 nights, via Fora Travel)", "$3,274"],
              ["Taxes, resort fee & local tax (Honua Kai)", "$1,428"],
              ["Parking at resort ($35/day × 7)", "~$245"],
              ["Car Rental (7 days, SUV)", "~$700"],
              ["Groceries & suite meals (full kitchen saves on dining)", "~$400–500"],
              ["Dining out (Merriman's, Hula Grill, Leilani's, Monkeypod, etc.)", "~$600–800"],
              ["Maui Ocean Center (2 adults · kids under 3 free)", "~$110"],
              ["Old Lāhainā Lūʻau (2 adults · 4yo · 2yo free)", "~$460"],
              ["Shave ice, snacks, activities & misc.", "~$300"],
              ["TOTAL ESTIMATED COST", "~$9,300–10,500"],
            ].map(([item, cost]) => (
              <tr key={item} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "6px 8px", fontWeight: item.startsWith("TOTAL") ? "bold" : "normal" }}>{item}</td>
                <td style={{ padding: "6px 8px", textAlign: "right", whiteSpace: "nowrap", fontWeight: item.startsWith("TOTAL") ? "bold" : "normal", color: item.startsWith("TOTAL") ? "#c0392b" : "inherit" }}>{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: "13px", color: "#888", marginTop: "8px" }}>
          Alternative: Westin Nanea Ocean Villas 2BR resort-view villa — $5,309.99 all-in (same dates, via Fora Travel). 2 king beds + sofa bed, full kitchen, balcony. Cancellation: fully refundable until May 15, 2026.
        </p>
      </section>

      {/* ── DAY 1 ── */}
      <DaySection
        number="01" date="Friday, May 29"
        title="Arrival & First Taste of Paradise"
        subtitle="OGG Arrival · Grocery Stop · Kids' Pool First · Ka'anapali Beach Walk"
        plans={[
          {
            label: "Recommended Plan",
            description: "Touch down at Kahului Airport (OGG) and let the warm Maui air wash over you. First stop: Costco or Target in Kahului (or Foodland Farms in Lahaina) to stock the suite kitchen — this one stop saves $400–600 across the week. After check-in, head to the resort's kids' pool first. Then end the day with a relaxed sunset walk along Ka'anapali Beach.",
            activities: [
              { title: "Honua Kai Check-In & Pool Time", detail: "1-Bedroom Partial Ocean View suite. King bed + double sofa bed, full kitchen, in-unit washer/dryer, furnished lanai. Multiple pools including a dedicated kids' pool. Self-parking $35/day.", tip: "Request an upper-floor unit for the best ocean views. Stock the kitchen on arrival: Costco (275 Ho'okele St, Kahului) is cheapest; Foodland Farms (345 Keawe St, Lahaina) is closer. Pool first, beach second — toddlers do better after a calm arrival." },
              { title: "Ka'anapali Beach Sunset Walk", detail: "Stroll the 3-mile Ka'anapali Beachfront Walk at golden hour. Stop at Black Rock (Pu'u Keka'a) to watch cliff divers perform the traditional torch-lighting ceremony at dusk.", tip: "The cliff diving ceremony happens nightly at sunset — don't miss it!" },
            ],
            logistics: "Arrive OGG → Rental car → Grocery stop (Costco/Target in Kahului or Foodland Farms in Lahaina) → Honua Kai check-in → Kids' pool first → Sunset beach walk",
            budget: "$0 activities today (suite & resort pool included)",
            drive: "OGG → Costco (15 min) → Honua Kai (35 min from OGG)",
          },
          {
            label: "Alternative: Explore Paia Town",
            description: "If you land early, take the scenic Hana Highway through Paia — Maui's funky surf town. Browse boutique shops, grab fish tacos at Milagros, and stop at Waikomo Shave Ice in Paia for your first taste of Maui's legendary shave ice before heading to Ka'anapali.",
            activities: [
              { title: "Paia Town Stroll & Lunch", detail: "Charming North Shore surf town. Walk Baldwin Avenue, stop for acai bowls or fish tacos. Flatbread Company has excellent wood-fired pizza — great for kids.", tip: "" },
              { title: "Waikomo Shave Ice — Paia", detail: "Ultra-fine ice and natural fruit syrups. A perfect first-day treat before the drive to Ka'anapali.", tip: "Try the lilikoi (passion fruit) and mango combo." },
            ],
            logistics: "Land OGG → Drive through Paia (Hana Hwy) → Lunch in Paia → Waikomo Shave Ice → Drive to Ka'anapali (~1.5 hrs)",
            budget: "~$40–60 for lunch + shave ice",
            drive: "OGG → Paia (10 min) → Ka'anapali (55 min)",
          },
        ]}
      />

      {/* ── DAY 2 ── */}
      <DaySection
        number="02" date="Saturday, May 30"
        title="Kapalua Bay Morning"
        subtitle="Kapalua Bay · Napili Bay · Hula Grill Dinner at Whalers Village"
        plans={[
          {
            label: "Recommended Plan",
            description: "Kapalua Bay is consistently ranked one of the best family beaches in Hawaii — protected by lava rock headlands that create nearly lagoon-like calm, perfect for your 2yo and 4yo. Arrive by 8:30am as parking fills by 10am in summer ($10–15/day). End the evening with dinner at Hula Grill.",
            activities: [
              { title: "Kapalua Bay", detail: "A crescent of golden sand sheltered by lava rock arms on both sides, creating almost zero wave action. Crystal clear, shallow near shore — ideal for toddlers. Snorkel gear rentals available nearby.", tip: "Arrive by 8:30am — parking ($10–15/day) fills by 10am in summer. Bring a small soft cooler as there's limited shade." },
              { title: "Hula Grill Ka'anapali — Dinner", detail: "Open-air Barefoot Bar right on the sand at Whalers Village. Fresh island fish, great mai tais, fantastic kids' menu. Live Hawaiian music most evenings.", tip: "Book for 5:00–5:30pm and request a table on the sand in the Barefoot Bar section." },
            ],
            logistics: "8:30am: Kapalua Bay → Noon: Resort pool or Napili Bay picnic → 5:00–5:30pm: Hula Grill Barefoot Bar dinner",
            budget: "~$80–120 for dinner at Hula Grill",
            drive: "Honua Kai → Kapalua Bay (14 min, 5.5 mi)",
          },
          {
            label: "Alternative: Ka'anapali Beach Day",
            description: "Skip the drive and spend the whole day right at your doorstep. Ka'anapali Beach is one of Maui's most iconic stretches of sand — 3 miles of golden beach with calm morning conditions, beach chair rentals, and Whalers Village steps away for lunch at Leilani's on the Beach.",
            activities: [
              { title: "Ka'anapali Beach Morning", detail: "The north end of Ka'anapali (near Honua Kai) is calmer and less crowded. Build sandcastles, wade in the gentle morning surf, explore tide pools near Black Rock.", tip: "Rent a beach umbrella and chairs from the resort — worth every penny with toddlers." },
              { title: "Leilani's on the Beach — Lunch", detail: "Open-air dining right on Ka'anapali Beach with sweeping ocean views. Award-winning Hawaii Regional Cuisine. Excellent kids' menu. Aloha Hour (3–4:30pm Mon/Thu/Sat/Sun) has great deals.", tip: "Book a table online in advance. Ask for a table on the lower deck closest to the beach." },
            ],
            logistics: "All day at Ka'anapali → Lunch at Leilani's on the Beach (Whalers Village) → Resort pool afternoon",
            budget: "~$80–120 for lunch at Leilani's + beach chair rental",
            drive: "Walk from Honua Kai to Ka'anapali Beach (3 min)",
          },
        ]}
      />

      {/* ── DAY 3 ── */}
      <DaySection
        number="03" date="Sunday, May 31"
        title="Maui Ocean Center & Lāhainā Town"
        subtitle="Maui Ocean Center · Lāhainā Historic Town · Ululani's Shave Ice"
        plans={[
          {
            label: "Recommended Plan",
            description: "Start the morning at the Maui Ocean Center — Hawaii's premier aquarium and a genuine highlight for toddlers. Then head into historic Lāhainā for a stroll down Front Street, ice cream, and a waterfront dinner as the sun sets over Lāna'i.",
            activities: [
              { title: "Maui Ocean Center", detail: "Walk through a 54-foot acrylic underwater tunnel surrounded by sharks, rays, and thousands of tropical fish. Touch pools and Hawaiian green sea turtle lagoon are the toddler favorites. Plan for 2–2.5 hours.", tip: "Arrive right at 9am opening — before the tour buses arrive. Kids under 3 are free; 4yo needs a child ticket (~$25).", cost: "~$55/adult · Under 3 free" },
              { title: "Lāhainā Town, Banyan Tree & Ululani's Shave Ice", detail: "Stroll down Front Street. Visit the famous 150-year-old Banyan Tree — the largest in the US. Then Ululani's Hawaiian Shave Ice — the gold standard on Maui. Ultra-fine ice, natural syrups, mochi, azuki beans, and ice cream inside.", tip: "Order the 'full experience' — shave ice with ice cream inside and mochi on top." },
            ],
            logistics: "9am: Maui Ocean Center (Ma'alaea) → 11:30am: Drive to Lāhainā (20 min) → Lunch & Banyan Tree stroll → Ululani's shave ice → Waterfront dinner",
            budget: "~$110–130 for Ocean Center (2 adults) + dining + shave ice",
            drive: "Honua Kai → Maui Ocean Center (20 min, 12 mi) → Lāhainā (20 min, 11 mi) → Honua Kai (20 min)",
          },
          {
            label: "Alternative: Maui Tropical Plantation",
            description: "Head to the Maui Tropical Plantation in Waikapu — a working farm with a narrated tram tour through fields of pineapple, sugarcane, papaya, and tropical flowers. Kids love the tram ride and the farm animals. Pair it with a stop at the Mill House restaurant for farm-to-table lunch.",
            activities: [
              { title: "Maui Tropical Plantation Tram Tour", detail: "40-minute narrated tram ride through 60 acres of tropical crops. Sample pineapple, coconut, macadamia nuts, papaya. Ducks, koi pond, café, clean bathrooms, lots of space to toddle.", tip: "The Mill House restaurant on-site is excellent — reserve a table for lunch after the tour.", cost: "~$25/adult · ~$15/child (3+)" },
              { title: "Lāhainā Banyan Tree & Shave Ice", detail: "After the plantation, drive to Lāhainā to see the iconic Banyan Tree and grab Ululani's shave ice.", tip: "Get the shave ice with mochi and ice cream inside." },
            ],
            logistics: "9:30am: Maui Tropical Plantation (Waikapu) → Lunch at Mill House → 2pm: Lāhainā Banyan Tree → Back to resort",
            budget: "~$80–100 for plantation tour + lunch",
            drive: "Honua Kai → Maui Tropical Plantation (18 min, 10 mi) → Lāhainā (15 min, 8 mi) → Honua Kai (18 min)",
          },
        ]}
      />

      {/* ── DAY 4 ── */}
      <DaySection
        number="04" date="Monday, June 1"
        title="Merriman's Kapalua & North Shore"
        subtitle="Merriman's Kapalua Lunch · Kapalua Bay Beach · Monkeypod Option"
        plans={[
          {
            label: "Recommended Plan",
            description: "Today is built around Merriman's Kapalua — one of Maui's finest oceanfront restaurants, just 10 minutes from Honua Kai. Perched above Kapalua Bay with sweeping Pacific views, Chef Peter Merriman pioneered Hawaii Regional Cuisine and sources nearly everything from local farms and fishermen. Book online at merrimanshawaii.com — lunch is easier to get than dinner.",
            activities: [
              { title: "Merriman's Kapalua — Oceanfront Lunch", detail: "Perched above Kapalua Bay with sweeping ocean views. Seared ahi, fresh catch, and Kula greens salad are standouts. Lunch is more relaxed than dinner and easier to book.", tip: "Book at merrimanshawaii.com. Request a window table for the best ocean views over Kapalua Bay. Dress code: resort casual.", cost: "~$50–80/person · Reservations recommended" },
              { title: "Kapalua Bay Beach — Afternoon", detail: "Walk down to Kapalua Bay Beach — consistently rated one of the best beaches in the US. Crescent-shaped bay sheltered by two lava-rock points, making the water exceptionally calm and clear. Perfect for toddlers.", tip: "Arrive at the beach by 1pm after lunch — the morning crowds have thinned and the water is warm.", cost: "Free · Parking ~$10–15" },
            ],
            logistics: "10 min drive to Merriman's Kapalua for lunch → Kapalua Bay Beach afternoon → Return to resort by 3pm",
            budget: "~$100–160 for 2 adults at Merriman's · Parking ~$10–15",
            drive: "Honua Kai → Merriman's Kapalua (10 min, 5 mi) → Kapalua Bay Beach (5 min, 2 mi) → Honua Kai (10 min)",
          },
          {
            label: "Alternative: Mama's Fish House",
            description: "Mama's Fish House on the North Shore is legendary — consistently ranked one of the top restaurants in the entire United States. The menu lists the name of the fisherman who caught each fish. Fair warning: this is the hardest day with toddlers — 45 min each way, ~$80–120/person, and a long lunch. Book 2–3 months in advance.",
            activities: [
              { title: "Mama's Fish House — Lunch", detail: "Located in Paia on the North Shore. The setting — a 1940s beach house surrounded by tropical gardens and coconut palms — is magical. Lunch is slightly easier to book than dinner.", tip: "Book 2–3 months in advance at mamasfishhouse.com. Request a window or garden table.", cost: "~$80–120/person · Reserve well in advance" },
              { title: "Paia Town & Ho'okipa Lookout", detail: "After lunch, stroll through Paia. Then drive 2 minutes east to the Ho'okipa Beach lookout to watch world-class windsurfers and spot Hawaiian green sea turtles resting on the sand below.", tip: "Turtles are most reliably seen on Ho'okipa beach in the late afternoon." },
            ],
            logistics: "Drive to Paia (~45 min from Ka'anapali) → Mama's Fish House lunch (noon) → Paia stroll → Ho'okipa lookout → Return to resort",
            budget: "~$200–280 for 2 adults at Mama's Fish House · Plan resort return by 3pm for toddler nap",
            drive: "Honua Kai → Mama's Fish House (45 min, 28 mi) → Ho'okipa (5 min, 1.5 mi) → Honua Kai (45 min)",
          },
        ]}
      />

      {/* ── DAY 5 ── */}
      <DaySection
        number="05" date="Tuesday, June 2"
        title="Kahekili Highway Scenic Drive"
        subtitle="West Maui Mountains · Kahakuloa Village · Poke Picnic at Ka'anapali"
        plans={[
          {
            label: "Recommended Plan",
            description: "The Kahekili Highway (Route 340) hugs the dramatic cliffs of West Maui. With two car seats and a 2-year-old, the full loop can be stressful. Recommended: drive only to the Kahakuloa Village overlook (30–35 min from Ka'anapali), then turn around. The views are stunning and you'll be back at the resort by noon for a relaxed poke picnic on Ka'anapali Beach.",
            activities: [
              { title: "Kahekili Highway to Kahakuloa Overlook", detail: "Drive north from Ka'anapali on Route 340 — the road quickly becomes dramatic, hugging sheer cliffs above the Pacific. Stop at the Kahakuloa Village overlook for sweeping views. Turn around here — the road beyond gets significantly narrower and has no bathrooms.", tip: "Go early (8am) before it gets hot. No guardrails on parts of this road — take it slow." },
              { title: "Foodland Farms Poke Picnic at Ka'anapali Beach", detail: "On the way back, stop at Foodland Farms in Lahaina for fresh poke bowls to go. Grab the ahi shoyu, spicy ahi, and some local chips and drinks, then head back to Ka'anapali Beach for a relaxed afternoon picnic right in front of Honua Kai.", tip: "Foodland Farms poke is freshest before noon — go by 11:30am.", cost: "~$15–25/person for poke bowls" },
            ],
            logistics: "8am: Kahekili Highway to Kahakuloa overlook → Turn around → 11:30am: Foodland Farms poke stop → Noon: Ka'anapali Beach picnic → Afternoon: resort pool",
            budget: "~$30–50 for poke bowls and snacks (scenic drive is free)",
            drive: "Honua Kai → Kahakuloa Overlook (35 min, 18 mi) → Foodland Farms Lahaina (35 min, 18 mi) → Ka'anapali Beach (10 min, 5 mi)",
          },
          {
            label: "Alternative: Road to Hana (Half Day)",
            description: "The Road to Hana is one of the world's most famous scenic drives — 52 miles of winding road through lush rainforest, past waterfalls, bamboo groves, and black sand beaches. You don't need to drive the whole thing — even the first 30 miles to Twin Falls and Wailua Falls is spectacular and manageable with toddlers.",
            activities: [
              { title: "Twin Falls & Wailua Falls", detail: "Twin Falls is just 2 miles down the Hana Highway — an easy, flat 10-minute walk to a beautiful double waterfall with a swimming hole. Continue to mile marker 21 for the roadside Wailua Falls viewpoint.", tip: "Start early (7am) to beat the crowds. The road gets very congested by 9am in summer.", cost: "~$10 parking at Twin Falls" },
              { title: "Ke'anae Peninsula Lookout", detail: "At mile marker 17, the Ke'anae Peninsula juts into the ocean — a dramatic lava field dotted with taro fields and a historic stone church. Stop at the roadside lookout for one of the most iconic views on the entire drive. There's a local stand selling banana bread here.", tip: "The banana bread at the Ke'anae roadside stand is legendary. Buy a whole loaf." },
            ],
            logistics: "Depart Ka'anapali 7am → Twin Falls (mile 2) → Wailua Falls (mile 21) → Ke'anae lookout → Turn around → Back by noon",
            budget: "~$10 parking + $20 for banana bread and snacks",
            drive: "Honua Kai → Twin Falls (50 min, 32 mi) → Ke'anae (40 min, 19 mi) → Honua Kai (1 hr 20 min)",
          },
        ]}
      />

      {/* ── DAY 6 ── */}
      <DaySection
        number="06" date="Wednesday, June 3"
        title="Old Lāhainā Lūʻau"
        subtitle="Beach Day · Old Lāhainā Lūʻau Evening"
        plans={[
          {
            label: "Recommended Plan",
            description: "Keep the day relaxed — a final morning at the beach and pool — because tonight is the crown jewel of the trip: the Old Lāhainā Lūʻau. Widely considered the most authentic luau in Hawaii, it's set in a traditional oceanfront village in historic Lāhainā and features an imu feast, traditional hula, and Hawaiian storytelling as the sun sets over the Pacific.",
            activities: [
              { title: "Morning Beach & Pool Day", detail: "A free, unstructured morning. Let the kids play in the sand, build castles, and splash in the resort pool.", tip: "Use this morning to pack any souvenirs and do a final grocery run." },
              { title: "Old Lāhainā Lūʻau", detail: "The most authentic luau on Maui, held on the oceanfront in Lāhainā. The feast includes kalua pig, poi, lomi salmon, haupia, and much more. The hula show tells the story of Hawaii's history from ancient Polynesia to modern times. New table-service format means food comes to you — great with toddlers.", tip: "Gates open 5:15pm — arrive right at opening so your kids can explore the cultural village before they get hungry or tired. Children under 3 are free; your 4-year-old needs a child ticket (~$75). Book 6–8 weeks out — it sells out nightly in summer.", cost: "~$230/adult · Under 3 free" },
            ],
            logistics: "Morning: Free beach/pool time → 4:30pm: Drive to Lāhainā → 5:15pm: Lūʻau gates open → 9pm: Return to resort",
            budget: "~$535 for 2 adults + 1 child (4yo) · 2yo free · Arrive at 5:15pm gate opening",
            drive: "Honua Kai → Old Lāhainā Lūʻau (10 min, 4 mi)",
          },
          {
            label: "Alternative: Drums of the Pacific Luau",
            description: "If the Old Lāhainā Lūʻau is sold out (it often is), the Drums of the Pacific Luau at the Hyatt Regency Ka'anapali is an excellent alternative — right on Ka'anapali Beach, just a short walk or drive from your resort. It features a full Polynesian show covering Hawaii, Samoa, Tahiti, and New Zealand.",
            activities: [
              { title: "Drums of the Pacific Luau", detail: "Held on the oceanfront lawn of the Hyatt Regency Ka'anapali. Traditional imu ceremony, full Hawaiian feast buffet, and a spectacular Polynesian revue with fire knife dancing.", tip: "Arrive at the imu ceremony (usually 5:30pm) — watching the pig being uncovered is a highlight for kids.", cost: "~$175/adult · ~$90/child (3–12) · Under 3 free" },
              { title: "Sunset Cocktails at the Hyatt Pool Bar", detail: "Arrive early and grab drinks at the Hyatt's famous pool bar before the luau starts. The pool area and ocean views are stunning at sunset.", tip: "The Hyatt's Seavine pool bar has great mai tais and a kids' mocktail menu." },
            ],
            logistics: "Morning: Free beach/pool time → 5pm: Walk/drive to Hyatt Ka'anapali → Luau → 9pm: Walk back to resort",
            budget: "~$350–400 for 2 adults + 1 child (4yo)",
            drive: "Honua Kai → Hyatt Regency Ka'anapali (3 min, 0.7 mi — walkable)",
          },
        ]}
      />

      {/* ── DAY 7 ── */}
      <DaySection
        number="07" date="Thursday, June 4"
        title="Final Morning & Aloha"
        subtitle="Last Beach Walk · Shave Ice · Depart OGG"
        plans={[
          {
            label: "Recommended Plan",
            description: "Your last morning in Maui. Take one final walk along Ka'anapali Beach, let the kids get their feet wet one last time, and stop for shave ice before heading to the airport.",
            activities: [
              { title: "Final Ka'anapali Beach Walk", detail: "Wake up early for a quiet morning walk along the beach before checkout. The light is golden, the beach is uncrowded, and the ocean is calm. Fill up the rental car before heading to OGG — gas stations near the airport charge a significant premium.", tip: "Take a family photo at Black Rock (Pu'u Keka'a) — the same spot you saw the cliff divers on Day 1." },
              { title: "Shave Ice & Depart", detail: "Stop at Ululani's Hawaiian Shave Ice in Lahaina for one last treat before the drive to OGG. The airport is about 45 minutes from Ka'anapali — allow extra time for car seat return and check-in.", tip: "Fill up at Costco gas (Kahului) or any station in Ka'anapali/Lahaina before heading to OGG." },
            ],
            logistics: "Morning: Beach walk → Checkout → Shave ice in Lahaina → OGG Airport (depart afternoon)",
            budget: "~$20–30 for shave ice and snacks",
            drive: "Honua Kai → Ululani's Lahaina (10 min) → OGG Airport (45 min, 27 mi)",
          },
          {
            label: "Alternative: Kapalua Bay & Shave Ice Farewell",
            description: "If you have a late afternoon flight, spend your last morning at Kapalua Bay — the most beautiful and calm beach on Maui. Let the kids get their feet wet one last time, then stop for a final shave ice before the drive to OGG.",
            activities: [
              { title: "Kapalua Bay Final Morning", detail: "Calm, clear, and beautiful. The kids can wade in the shallow water one last time. It's a 10-minute drive north of Honua Kai. Arrive early before it fills up.", tip: "Take a family photo at the water's edge — the turquoise water and golden sand make for an unforgettable shot." },
              { title: "Ululani's Shave Ice — Final Treat", detail: "Stop at Ululani's on the way to the airport for one last shave ice. The Kahului location (333 Dairy Rd) is the most convenient on the way to OGG — just 5 minutes from the airport.", tip: "The Kahului location is open early and is the most convenient stop on the way to the airport.", cost: "~$8–12 per shave ice" },
            ],
            logistics: "7am: Kapalua Bay final swim → 9:30am: Checkout → Ululani's shave ice (Kahului) → OGG Airport",
            budget: "~$20–30 for shave ice and coffee",
            drive: "Honua Kai → Kapalua Bay (14 min) → Ululani's Kahului (45 min) → OGG (5 min)",
          },
        ]}
      />

      {/* ── OTHER THINGS TO CONSIDER ── */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.4rem", borderBottom: "1px solid #ddd", paddingBottom: "6px" }}>Other Things to Consider</h2>
        <ul style={{ paddingLeft: "20px", lineHeight: 2 }}>
          <li><strong>Napili Bay</strong> — Snorkeling with sea turtles, calm water, no facilities. Arrive early. ~5 min from Honua Kai.</li>
          <li><strong>Molokini Crater Snorkel Tour</strong> — Half-day boat trip from Ma'alaea Harbor. Best visibility in Hawaii. Book through Trilogy or Pride of Maui. ~$120–150/adult. 2yo may be too young.</li>
          <li><strong>Baby Beach (Lahaina)</strong> — Calm, shallow lagoon created by a natural rock breakwater. Perfect for toddlers. Free, street parking.</li>
          <li><strong>Kihei Caffe + Kalama Park</strong> — Whale-shaped pancakes, super casual breakfast spot. Kalama Park playground is directly across the street for post-pancake energy burns. ~35 min from Ka'anapali.</li>
          <li><strong>Maui Tropical Plantation (Waikapū)</strong> — Ducks, koi pond, short narrated tram ride, café. Low commitment, clean bathrooms, lots of space to toddle. ~20 min south of Ka'anapali.</li>
          <li><strong>Whalers Village Free Hula Show</strong> — Tue/Thu 5:30pm at the outdoor stage. Free, kid-friendly, right on Ka'anapali Beach.</li>
          <li><strong>Maui Brewing Company (Kihei)</strong> — Great craft beer, excellent food, very kid-friendly. ~35 min from Ka'anapali.</li>
          <li><strong>Black Rock Cliff Diving Ceremony</strong> — Free, nightly at sunset. Walk from Honua Kai along Ka'anapali Beach. Gather on the beach around 6pm.</li>
          <li><strong>Monkeypod Ka'anapali</strong> — Happy hour 3–5:30pm daily. Great food, live music, excellent kids' menu. Walking distance from Honua Kai.</li>
        </ul>
      </section>

      {/* ── PRACTICAL TIPS ── */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.4rem", borderBottom: "1px solid #ddd", paddingBottom: "6px" }}>Practical Tips</h2>
        <ul style={{ paddingLeft: "20px", lineHeight: 2 }}>
          <li><strong>Full Kitchen:</strong> The Honua Kai 1BR suite has a full kitchen — fridge, stovetop, oven, microwave, and in-unit washer/dryer. Stock it on arrival and save $400–600 on dining costs over the week.</li>
          <li><strong>Parking:</strong> Honua Kai charges $35/day for self-parking and $40/day for valet — budget ~$245–280 for the week. Kapalua Bay lot: $10–15/day, fills by 10am in summer — arrive by 8:30am.</li>
          <li><strong>Nap Window:</strong> Build 12:30–3pm into every day as a nap/rest window. Toddlers will have much better evenings if you're back at the suite by early afternoon. Don't overschedule mornings.</li>
          <li><strong>Book Early:</strong> Mama's Fish House: 2–3 months in advance. Old Lāhainā Lūʻau: 6–8 weeks out. Merriman's: 1–2 weeks. All sell out in summer.</li>
          <li><strong>Sun Safety:</strong> Maui sun in June is intense. Apply reef-safe SPF 50 every 90 minutes, use rash guards and sun hats for the kids. Plan beach time before 10am and after 4pm.</li>
          <li><strong>Cancellation Deadline:</strong> Honua Kai 1BR is fully refundable until April 29, 2026. Westin Nanea 2BR is fully refundable until May 15, 2026.</li>
          <li><strong>Gas:</strong> Fill up at Costco gas (Kahului) or any station in Ka'anapali/Lahaina before heading to OGG — stations right near the airport charge a significant premium.</li>
          <li><strong>White Noise Machine:</strong> Essential for nap time in a new hotel environment. A portable speaker with a white noise app works just as well.</li>
          <li><strong>Groceries on Arrival:</strong> Use Instacart or Foodland delivery to stock milk, snacks, fruit, and easy lunch items the day you arrive.</li>
          <li><strong>Beach Wagon:</strong> A foldable beach wagon is a game-changer for hauling gear for two toddlers across soft sand.</li>
        </ul>
      </section>

      <div style={{ borderTop: "2px solid #ccc", paddingTop: "16px", fontSize: "13px", color: "#888" }}>
        <p>This is a plain-text data page for AI assistants and crawlers. <Link href="/" style={{ color: "#0066cc" }}>View the full interactive itinerary →</Link></p>
        <p>Curated by Veronica Vega, Fora Travel — <a href="https://trips.foratravel.com/i/CgHJpOXbt9" style={{ color: "#0066cc" }}>trips.foratravel.com/i/CgHJpOXbt9</a></p>
      </div>
    </div>
  );
}

// ── Helper component ──
interface PlanData {
  label: string;
  description: string;
  activities: { title: string; detail: string; tip: string; cost?: string }[];
  logistics: string;
  budget: string;
  drive: string;
}

function DaySection({ number, date, title, subtitle, plans }: {
  number: string;
  date: string;
  title: string;
  subtitle: string;
  plans: PlanData[];
}) {
  return (
    <section style={{ marginBottom: "48px" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "2px" }}>
        Day {number} — {date}: {title}
      </h2>
      <p style={{ color: "#666", fontSize: "14px", marginBottom: "16px", fontStyle: "italic" }}>{subtitle}</p>

      {plans.map((plan, pi) => (
        <div key={pi} style={{ marginBottom: "24px", paddingLeft: "16px", borderLeft: `3px solid ${pi === 0 ? "#0A4A5C" : "#E8714A"}` }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "6px", color: pi === 0 ? "#0A4A5C" : "#c0392b" }}>
            {plan.label}
          </h3>
          <p style={{ marginBottom: "10px" }}>{plan.description}</p>

          {plan.activities.map((act, ai) => (
            <div key={ai} style={{ marginBottom: "10px", paddingLeft: "12px" }}>
              <strong>{act.title}</strong>
              {act.cost && <span style={{ color: "#888", fontSize: "13px" }}> — {act.cost}</span>}
              <p style={{ margin: "2px 0 0", fontSize: "15px" }}>{act.detail}</p>
              {act.tip && <p style={{ margin: "2px 0 0", fontSize: "13px", color: "#555" }}>💡 Tip: {act.tip}</p>}
            </div>
          ))}

          <p style={{ fontSize: "14px", color: "#444", margin: "8px 0 2px" }}>
            <strong>Logistics:</strong> {plan.logistics}
          </p>
          <p style={{ fontSize: "14px", color: "#444", margin: "2px 0" }}>
            <strong>Drive:</strong> {plan.drive}
          </p>
          <p style={{ fontSize: "14px", color: "#444", margin: "2px 0" }}>
            <strong>Budget:</strong> {plan.budget}
          </p>
        </div>
      ))}
    </section>
  );
}
