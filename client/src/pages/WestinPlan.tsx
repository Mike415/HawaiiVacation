/**
 * Westin Ka'anapali Ocean Resort Villas — May 29–June 5, 2026
 * Design: Same tropical editorial style as Home.tsx
 * 7 nights · 1BR Villa · Ocean View · Full Kitchen · SFO → OGG
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663317271153/ST6JyvESCqw6urLu3fwLqo";

const IMAGES = {
  // Westin Ka'anapali specific
  westinAerial:   `${CDN}/westin_kaanapali_aerial_b49749ba.jpg`,
  westinSunset:   `${CDN}/westin_kaanapali_sunset_a758dd69.jpg`,
  westinBeach:    `${CDN}/westin_kaanapali_beach_122ae0ab.jpg`,
  westinVilla:    `${CDN}/westin_kaanapali_villa_36b08058.jpg`,
  westinBalcony:  `${CDN}/westin_kaanapali_balcony_dfa48bea.jpg`,
  westinPool:     `${CDN}/westin_kaanapali_pool_4c7ea2e2.jpg`,
  // Shared activity images
  kapaluaFamily:  `${CDN}/kapalua_family_a5a6fd18.jpg`,
  kapaluaAerial:  `${CDN}/kapalua_bay_aerial_fc2113de.jpg`,
  oceanCenter:    `${CDN}/maui_ocean_center_929071ae.webp`,
  oceanCenter2:   `${CDN}/maui_ocean_center2_f626cb77.jpg`,
  molokiniAerial: `${CDN}/molokini_aerial_eeff92a9.jpg`,
  molokiniSnorkel:`${CDN}/molokini_snorkel_9eb9cd91.jpeg`,
  lahainaTown:    `${CDN}/lahaina_town_a1c37de5.jpg`,
  lahainaStreet:  `${CDN}/lahaina_street_83a91882.jpg`,
  kahekili:       `${CDN}/kahekili_highway_368d7f0d.jpg`,
  napaliBay:      `${CDN}/napili_bay_41d0245c.jpg`,
  napiliSnorkel:  `${CDN}/napili_snorkel_c4d8646d.jpg`,
  luau:           `${CDN}/old_lahaina_luau_ffd48460.jpg`,
  kaanapaliKids:  `${CDN}/kaanapali_beach_kids_17640466.jpg`,
  hero:           `${CDN}/kaanapali_sunset_bd11ada1.jpg`,
};

interface Activity {
  title: string;
  detail: string;
  tip: string;
  image: string;
  cost?: string;
}

interface DayPlan {
  label: string;
  tag: string;
  tagColor: string;
  heroImage: string;
  description: string;
  activities: Activity[];
  logistics: string;
  budget: string;
}

interface Day {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  plans: DayPlan[];
}

const days: Day[] = [
  {
    id: "w-day1",
    number: "01",
    title: "Arrival & Villa Check-In",
    subtitle: "Ka'anapali Beach · Westin Villas · Sunset from the Lanai",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Easy Arrival",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.westinSunset,
        description: "Touch down at Kahului Airport (OGG) and drive the scenic 45-minute coastal route to Ka'anapali. Check in to your 1-bedroom ocean-view villa at the Westin Ka'anapali Ocean Resort Villas — a full kitchen, in-unit washer/dryer, and a private lanai await. Let the kids splash in the resort pool while you unpack, then watch the sunset from your balcony with a drink in hand.",
        activities: [
          {
            title: "Villa Check-In & Pool Time",
            detail: "Your Premium Villa sleeps 4 (king bed + sofa bed), has a full kitchen, and an ocean-view lanai. The resort has multiple pools including a kids' pool — perfect for burning off that flight energy. Self-parking is free for guests.",
            tip: "Request an upper-floor unit for the best unobstructed ocean views. The lanai is a game-changer for morning coffee and evening sunsets.",
            image: IMAGES.westinVilla,
          },
          {
            title: "Ka'anapali Beach Sunset Stroll",
            detail: "The resort sits directly on Ka'anapali Beach. Take the 3-mile Beachfront Walk south toward Black Rock (Pu'u Keka'a) and watch the nightly cliff-diving torch ceremony at dusk — a free, unforgettable Maui tradition.",
            tip: "The cliff-diving ceremony happens every evening at sunset. Arrive 10 minutes early for a good viewing spot on the sand.",
            image: IMAGES.kaanapaliKids,
          },
        ],
        logistics: "Arrive OGG → Pick up rental car → Drive ~45 min to Ka'anapali → Check in → Beach walk",
        budget: "$0 activities today (villa & parking included)",
      },
      {
        label: "Alternative: Paia Town Stop",
        tag: "Scenic Route",
        tagColor: "#7A5C3A",
        heroImage: IMAGES.lahainaStreet,
        description: "If you land early (before noon), take the scenic Hana Highway through Paia — Maui's funky surf town — before heading to Ka'anapali. Browse boutique shops, grab fish tacos at Milagros, and let the kids run on Paia Bay beach. It adds about 1.5 hours but sets a perfect relaxed tone for the week.",
        activities: [
          {
            title: "Paia Town Lunch & Browse",
            detail: "Paia is a charming, laid-back surf town on the north shore. Grab lunch at Milagros Food Company (excellent fish tacos) or Café Mambo. The main street has great local shops for picking up a souvenir on day one.",
            tip: "Parking on Baldwin Ave can be tight — use the small lot behind the main street.",
            image: IMAGES.lahainaTown,
          },
          {
            title: "Ho'okipa Beach Lookout",
            detail: "Just east of Paia, Ho'okipa Beach Park is one of the world's premier windsurfing spots. Stop at the cliff lookout for a dramatic view of the waves and often dozens of windsurfers. Don't go down to the beach — the shore break is dangerous for toddlers.",
            tip: "The lookout is right off the highway — just a 2-minute stop but a great photo opportunity.",
            image: IMAGES.kahekili,
          },
        ],
        logistics: "Land OGG → Drive Hana Hwy through Paia → Lunch → Ho'okipa lookout → Drive to Ka'anapali (~1.5 hrs total)",
        budget: "~$40–60 for lunch in Paia",
      },
    ],
  },
  {
    id: "w-day2",
    number: "02",
    title: "Kapalua Bay Morning",
    subtitle: "Kapalua Bay · Napili Bay · Resort Pool Afternoon",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Beach Day",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.kapaluaFamily,
        description: "Kapalua Bay is consistently ranked one of the best family beaches in Hawaii — protected by lava rock headlands that create nearly lagoon-like calm. For a 2-year-old and 4-year-old, this is as close to perfect as it gets. Spend the morning here, then head to Napili Bay for lunch and a change of scenery before a relaxed afternoon back at the villa.",
        activities: [
          {
            title: "Kapalua Bay",
            detail: "A crescent of golden sand sheltered by lava rock on both sides, creating almost zero wave action. The water is crystal clear and shallow near shore — ideal for toddlers. Snorkel gear rentals are available nearby for the adults. The beach is a 15-minute drive north of the Westin.",
            tip: "Arrive by 8:30am to snag a good spot. It fills up by 10am in late May. Bring your own snacks — no food vendors on the beach itself.",
            image: IMAGES.kapaluaAerial,
          },
          {
            title: "Napili Bay Lunch Stop",
            detail: "Just 5 minutes south of Kapalua, Napili Bay is a quieter crescent beach with excellent beginner snorkeling right off the shore. Sea turtles are frequently spotted here. The Napili Kai Beach Resort has a casual beachside café for lunch.",
            tip: "Look for sea turtles grazing on the reef near the right side of the bay — they're almost always there.",
            image: IMAGES.napiliSnorkel,
          },
        ],
        logistics: "8:30am: Kapalua Bay → Noon: Napili Bay lunch → 2pm: Return to Westin pool",
        budget: "~$20–40 for snorkel gear rental (optional)",
      },
      {
        label: "Alternative: Full Ka'anapali Day",
        tag: "Easy & Close",
        tagColor: "#7A5C3A",
        heroImage: IMAGES.westinBeach,
        description: "Skip the drive entirely and spend the whole day right at your doorstep. Ka'anapali Beach stretches 3 miles in front of the Westin — one of the most beautiful resort beaches in Maui. With a full kitchen in your villa, pack a picnic lunch and make it a zero-effort beach day. Great option if the kids are still adjusting to the time change.",
        activities: [
          {
            title: "Ka'anapali Beach Morning",
            detail: "Walk straight from your villa to the beach. The water in front of the Westin is calm and shallow near shore, great for toddlers. Rent beach chairs and an umbrella from the resort beach hut (~$30/day) and set up camp for the morning.",
            tip: "The resort rents boogie boards and snorkel gear too — great for the 4-year-old to try their first snorkel in the calm water near Black Rock.",
            image: IMAGES.westinPool,
          },
          {
            title: "Villa Lunch & Nap Time",
            detail: "Head back to the villa for a home-cooked lunch using the full kitchen — a huge advantage over a hotel room. The toddlers can nap in the king bed while you relax on the lanai with an ocean view. Afternoon back at the pool or beach.",
            tip: "The Safeway in Lahaina (10 min drive) is the best grocery run for villa supplies — great deli, poke, and wine selection.",
            image: IMAGES.westinVilla,
          },
        ],
        logistics: "Morning: Ka'anapali Beach → Villa lunch & nap → Afternoon: Resort pool",
        budget: "~$30 beach chair rental + groceries",
      },
    ],
  },
  {
    id: "w-day3",
    number: "03",
    title: "Maui Ocean Center & Lāhainā",
    subtitle: "Maui Ocean Center · Lāhainā Town · Waterfront Dinner",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Culture & Discovery",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.oceanCenter,
        description: "A perfect day for discovery. Start at the Maui Ocean Center — Hawaii's premier aquarium and a genuine toddler highlight. Then head into historic Lāhainā for a stroll down Front Street, shave ice at Ululani's, and a waterfront dinner as the sun sets over Lāna'i. Late May means fewer crowds than peak summer.",
        activities: [
          {
            title: "Maui Ocean Center",
            detail: "Walk through a 54-foot acrylic underwater tunnel surrounded by sharks, rays, and thousands of tropical fish. The touch pools and Hawaiian green sea turtle lagoon are the toddler favorites. Plan for 2–2.5 hours. Adults ~$55, under 3 free.",
            tip: "Go first thing when it opens (9am) before tour buses arrive. Kids under 3 are free — great for your 2-year-old.",
            image: IMAGES.oceanCenter2,
            cost: "~$55/adult · Under 3 free",
          },
          {
            title: "Lāhainā Town & Banyan Tree",
            detail: "Stroll down Front Street, lined with art galleries, boutiques, and restaurants. Visit the famous 150-year-old Banyan Tree — the largest in the US — which covers an entire city block. Stop for shave ice at Ululani's Hawaiian Shave Ice, a local institution.",
            tip: "Parking on Prison Street (~$1/hour) is the easiest option. The Banyan Tree is right in the center of town.",
            image: IMAGES.lahainaTown,
          },
        ],
        logistics: "9am: Maui Ocean Center → 11:30am: Drive to Lāhainā (20 min) → Lunch & stroll → Dinner on the waterfront",
        budget: "~$110–130 for Ocean Center (2 adults) + dining",
      },
      {
        label: "Alternative: Maui Tropical Plantation",
        tag: "Kid-Friendly",
        tagColor: "#7A5C3A",
        heroImage: IMAGES.lahainaStreet,
        description: "Swap the aquarium for the Maui Tropical Plantation in Wailuku — a working farm with a narrated tram tour through fields of pineapple, sugarcane, and tropical fruit. The kids can pick their own fruit, and there's an excellent farm-to-table restaurant on site. More hands-on and outdoorsy than the aquarium.",
        activities: [
          {
            title: "Maui Tropical Plantation Tram Tour",
            detail: "A 40-minute narrated tram ride through 60 acres of working tropical farmland. You'll see and taste pineapple, papaya, coffee, macadamia nuts, and sugarcane. The guides are excellent and very kid-friendly. Adults ~$25, kids 3–12 ~$15.",
            tip: "Book the tram tour in advance online — it sells out in late May. The Mill House restaurant on site is one of Maui's best farm-to-table spots.",
            image: IMAGES.kapaluaFamily,
            cost: "~$25/adult · ~$15/child",
          },
          {
            title: "Lāhainā Afternoon",
            detail: "Head into Lāhainā after the plantation for the Banyan Tree, shave ice, and a waterfront dinner. Same as the recommended plan but with the plantation substituted for the aquarium.",
            tip: "The plantation is in Wailuku, which is actually closer to the aquarium — you could do both if you start early.",
            image: IMAGES.lahainaTown,
          },
        ],
        logistics: "9am: Maui Tropical Plantation (Wailuku) → 12pm: Drive to Lāhainā (25 min) → Lunch & stroll → Dinner",
        budget: "~$65–80 for plantation tours (2 adults + 1 child) + dining",
      },
    ],
  },
  {
    id: "w-day4",
    number: "04",
    title: "Molokini Crater Snorkel Cruise",
    subtitle: "Morning Boat Tour · Molokini Crater · Turtle Town",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Big Adventure",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.molokiniAerial,
        description: "Board a catamaran from Ma'alaea Harbor for a morning snorkel cruise to Molokini Crater — a submerged volcanic caldera teeming with over 250 species of tropical fish. Visibility can reach 150 feet. Late May is ideal: calmer seas than winter, fewer boats than July–August. Most operators also stop at Turtle Town on the return for guaranteed sea turtle encounters.",
        activities: [
          {
            title: "Molokini Crater Snorkel",
            detail: "The crescent-shaped crater sits 3 miles offshore and is a protected marine sanctuary. The inside is perfectly calm — ideal even for nervous snorkelers. Most boats provide full gear, breakfast, and a deli lunch. Book Pride of Maui or Trilogy Excursions — both welcome toddlers.",
            tip: "Late May has some of the best snorkel conditions of the year — calmer than winter, less crowded than July. Book 3–4 weeks ahead.",
            image: IMAGES.molokiniSnorkel,
            cost: "~$120–150/adult · ~$70–90/child (3+) · Under 2 free",
          },
          {
            title: "Turtle Town",
            detail: "On the return trip, the boat stops at a shallow reef near Mākena known as Turtle Town. Hawaiian green sea turtles (honu) are almost always present, grazing on the reef. It's a magical, calm snorkel for the whole family.",
            tip: "Bring reef-safe sunscreen — it's required on most boats and protects the coral.",
            image: IMAGES.napaliBay,
          },
        ],
        logistics: "Depart Ma'alaea Harbor 7:30am → Return ~12:30pm → Afternoon: villa/nap time",
        budget: "~$300–360 for 2 adults + 1 child (4yo)",
      },
      {
        label: "Alternative: Mākena (Big Beach)",
        tag: "Scenic & Free",
        tagColor: "#7A5C3A",
        heroImage: IMAGES.napaliBay,
        description: "Skip the boat and spend the day at Mākena State Beach Park — known as 'Big Beach,' one of Maui's most dramatic and beautiful shores. The wide golden sand and turquoise water are stunning. Note: the shore break can be powerful, so keep toddlers in the shallower north end. Little Beach (a short hike over the lava rock) has calmer water and excellent snorkeling.",
        activities: [
          {
            title: "Big Beach (Mākena State Park)",
            detail: "A 3,000-foot stretch of golden sand with dramatic views of Molokini and Kaho'olawe. The shore break is powerful and not suitable for toddlers, but the north end near the parking area has calmer water. Arrive early — the lot fills by 9am in late May.",
            tip: "Bring everything you need — no vendors or facilities beyond basic restrooms. The drive from Ka'anapali is about 30 minutes.",
            image: IMAGES.kapaluaAerial,
          },
          {
            title: "Little Beach Snorkel",
            detail: "A short hike over the lava rock headland at the north end of Big Beach leads to Little Beach — a smaller, more sheltered cove with excellent snorkeling right off the shore. Much calmer than Big Beach and great for beginner snorkelers.",
            tip: "Little Beach is clothing-optional — just so you're aware before bringing the kids over the rocks!",
            image: IMAGES.napiliSnorkel,
          },
        ],
        logistics: "8am: Drive to Mākena (~30 min) → Beach day → Lunch from cooler → Afternoon: return to villa",
        budget: "~$0 (free state park) + groceries for picnic",
      },
    ],
  },
  {
    id: "w-day5",
    number: "05",
    title: "Kahekili Highway Scenic Drive",
    subtitle: "West Maui Mountains · Kahakuloa Village · Napili Bay",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Scenic Drive",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.kahekili,
        description: "The Kahekili Highway (Route 340) is a narrow, winding coastal road hugging the dramatic cliffs of West Maui — often called 'the road nobody tells you about.' It's perfectly manageable in a standard car and rewards you with jaw-dropping ocean views, waterfalls, and zero crowds. Late May means lush green cliffs from winter rain.",
        activities: [
          {
            title: "Kahekili Highway Drive",
            detail: "Drive the 20-mile stretch northward through Kahakuloa Village — a remote, traditional Hawaiian settlement clinging to the cliffs. Stop at roadside viewpoints for sweeping views of the Pacific and the jagged West Maui Mountains. The road is narrow but paved; just take it slow.",
            tip: "Drive it in the morning when the light is best. Allow 2–3 hours for stops. The road is one-way in sections — go counterclockwise (north from Ka'anapali).",
            image: IMAGES.westinAerial,
          },
          {
            title: "Napili Bay Afternoon",
            detail: "Return to Napili Bay for a relaxed afternoon. The kids can play in the calm shallows while you snorkel along the reef. Pick up fresh poke bowls from Foodland Farms in Lahaina for a beach picnic.",
            tip: "Foodland Farms in Lahaina has excellent poke — grab it on your way back from the drive.",
            image: IMAGES.napaliBay,
          },
        ],
        logistics: "8am: Depart Ka'anapali northbound → Kahekili Hwy → Noon: Return via Wailuku → Napili Bay afternoon",
        budget: "~$30–50 for poke bowls (scenic drive is free)",
      },
      {
        label: "Alternative: Road to Hana (Half Day)",
        tag: "Iconic",
        tagColor: "#7A5C3A",
        heroImage: IMAGES.lahainaTown,
        description: "Do a condensed version of the famous Road to Hana — just the first half, which has the best stops and is manageable with toddlers. Drive to Twin Falls (easy 20-min hike to two beautiful waterfalls) and Ke'anae Peninsula (dramatic ocean views), then turn around. No need to do the full 52-mile route with young kids.",
        activities: [
          {
            title: "Twin Falls",
            detail: "The first major stop on the Hana Highway, just 2 miles past Haiku. An easy, flat 20-minute walk leads to two beautiful waterfalls with swimming holes. The trail is toddler-friendly and one of the most accessible waterfall hikes on Maui.",
            tip: "Go early (depart by 7am) to beat the crowds and have the falls nearly to yourself. The parking lot fills by 9am.",
            image: IMAGES.kahekili,
            cost: "~$5 parking fee",
          },
          {
            title: "Ke'anae Peninsula Lookout",
            detail: "A dramatic lava peninsula jutting into the Pacific, with crashing waves and a traditional Hawaiian village. Stop at the Ke'anae Arboretum just before for a short walk through tropical plants. The YMCA camp sells banana bread from a roadside stand — a Hana Highway tradition.",
            tip: "The banana bread stand is cash only. Bring $5–10 in small bills.",
            image: IMAGES.napaliBay,
          },
        ],
        logistics: "7am: Depart Ka'anapali → Twin Falls → Ke'anae → Turn around → Back by 1–2pm",
        budget: "~$20–30 for parking + banana bread + lunch",
      },
    ],
  },
  {
    id: "w-day6",
    number: "06",
    title: "Old Lāhainā Lūʻau Evening",
    subtitle: "Beach Day · Old Lāhainā Lūʻau · Oceanfront Feast",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Must-Do",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.luau,
        description: "Keep the day relaxed — a final morning at the villa and beach — because tonight is the crown jewel of the trip: the Old Lāhainā Lūʻau. Widely considered the most authentic luau in Hawaii, it features an imu feast, traditional hula, and Hawaiian storytelling as the sun sets over the Pacific. Late May means you're not fighting peak summer crowds for tickets.",
        activities: [
          {
            title: "Morning Villa Day",
            detail: "A free, unstructured morning. Cook breakfast in the villa kitchen, let the kids play on the beach, and use the resort pool. This is a great morning to do a grocery run to Safeway in Lahaina for the remaining days.",
            tip: "Book the Old Lāhainā Lūʻau as early as possible — it sells out weeks in advance even in late May. Book at oldlahainaluau.com.",
            image: IMAGES.westinPool,
          },
          {
            title: "Old Lāhainā Lūʻau",
            detail: "Gates open at 5:15pm. The feast includes kalua pig (cooked in an underground imu pit), poi, lomi salmon, haupia (coconut pudding), and much more. The hula performance tells the story of Hawaii's history through traditional and modern dance. Adults ~$150, kids 3–12 ~$95, under 3 free.",
            tip: "Arrive at gate opening (5:15pm) to get the best seats near the front. The oceanfront setting at sunset is magical.",
            image: IMAGES.luau,
            cost: "~$150/adult · ~$95/child (3–12) · Under 3 free",
          },
        ],
        logistics: "Morning: Villa/beach → 4:30pm: Drive to Lāhainā → 5:15pm: Lūʻau gates open → 9pm: Return to villa",
        budget: "~$395 for 2 adults + 1 child (4yo) · 2yo free",
      },
      {
        label: "Alternative: Drums of the Pacific Lūʻau",
        tag: "More Accessible",
        tagColor: "#7A5C3A",
        heroImage: IMAGES.westinBeach,
        description: "If the Old Lāhainā Lūʻau is sold out (it often is), the Drums of the Pacific Lūʻau at the Hyatt Regency Ka'anapali is an excellent alternative — and it's just a 10-minute walk along the beachfront from the Westin. Similar feast and hula performance, slightly more resort-style, but very good and much easier to book.",
        activities: [
          {
            title: "Drums of the Pacific Lūʻau",
            detail: "Held at the Hyatt Regency Ka'anapali, this luau features a full Hawaiian feast, open bar, and a Polynesian dance performance covering Hawaii, Samoa, Tahiti, and New Zealand. Adults ~$130, kids 3–12 ~$75, under 3 free.",
            tip: "Being just a short walk from the Westin makes this ideal — no driving after dinner. Book at hyatt.com/drums.",
            image: IMAGES.luau,
            cost: "~$130/adult · ~$75/child (3–12) · Under 3 free",
          },
          {
            title: "Ka'anapali Beach Sunset Walk",
            detail: "Arrive early and take the beachfront walk from the Westin to the Hyatt — a beautiful 10-minute stroll along the water at golden hour. Stop to watch the Black Rock cliff diving ceremony on the way.",
            tip: "The walk along the Ka'anapali Beachfront Walk is one of the nicest evening strolls in Maui — no car needed.",
            image: IMAGES.kaanapaliKids,
          },
        ],
        logistics: "Morning: Villa/beach → 5pm: Walk the beachfront to Hyatt → 5:30pm: Lūʻau → Walk back",
        budget: "~$335 for 2 adults + 1 child (4yo) · 2yo free",
      },
    ],
  },
  {
    id: "w-day7",
    number: "07",
    title: "Final Morning & Departure",
    subtitle: "Last Beach Sunrise · Villa Checkout · OGG",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Easy Departure",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.westinBalcony,
        description: "Check-out is Friday June 5. Spend the last morning on the lanai watching the sunrise over the ocean with a coffee from the villa kitchen. One final walk on Ka'anapali Beach before packing up. The drive to OGG is about 45 minutes — plan to arrive 2 hours before your flight.",
        activities: [
          {
            title: "Sunrise Lanai Breakfast",
            detail: "Use up the last of your villa kitchen groceries for a relaxed breakfast on the lanai. The east-facing ocean view catches the morning light beautifully. This is the moment that makes the villa format worth it over a standard hotel room.",
            tip: "Check-out is typically 10am. Ask the front desk about late check-out (sometimes available for free, otherwise ~$50–75).",
            image: IMAGES.westinBalcony,
          },
          {
            title: "Final Ka'anapali Beach Walk",
            detail: "One last barefoot walk on Ka'anapali Beach before heading to the airport. Let the kids collect a few shells to take home. The drive to OGG is 45 minutes — leave by noon for a 2pm+ flight.",
            tip: "Stop at Ululani's Shave Ice in Lahaina on the way to the airport for a final taste of Maui.",
            image: IMAGES.westinBeach,
          },
        ],
        logistics: "Morning: Sunrise breakfast on lanai → Beach walk → Check out by 10am → Drive to OGG (~45 min)",
        budget: "$0 (use remaining villa groceries)",
      },
      {
        label: "Alternative: Morning Snorkel at Honolua Bay",
        tag: "One Last Adventure",
        tagColor: "#7A5C3A",
        heroImage: IMAGES.napiliSnorkel,
        description: "If you have a late afternoon flight, squeeze in one last snorkel at Honolua Bay — one of Maui's premier snorkel spots, just 20 minutes north of Ka'anapali. The bay is a marine conservation district with incredible coral and fish density. It's a short, easy walk down to the water.",
        activities: [
          {
            title: "Honolua Bay Snorkel",
            detail: "A protected marine conservation area with some of the best snorkeling on Maui. The bay is calm in summer (May–September) and the coral coverage is exceptional. The walk down to the water is about 5 minutes on a dirt path through the jungle.",
            tip: "Go early (7–8am) before the snorkel tour boats arrive. The bay is best in the morning when the light penetrates the water.",
            image: IMAGES.kapaluaAerial,
          },
          {
            title: "Napili Bay Farewell",
            detail: "Stop at Napili Bay on the way back for one last look at the calm turquoise water. Grab a coffee at the Napili Kai café and let the kids have one final splash before heading to the airport.",
            tip: "Napili Bay is on the way from Honolua Bay back to Ka'anapali — easy 5-minute detour.",
            image: IMAGES.napaliBay,
          },
        ],
        logistics: "7am: Honolua Bay snorkel → Napili Bay stop → Return to villa → Check out → OGG",
        budget: "~$0 (free snorkel spot, bring your own gear)",
      },
    ],
  },
];

// Budget data
const budgetItems = [
  { category: "Flights (SFO → OGG round trip, family of 4)", amount: "$2,014", note: "May 29 – Jun 5" },
  { category: "Villa Rental (7 nights, RedWeek R1438266)", amount: "$3,077", note: "Westin Ka'anapali 1BR Ocean View" },
  { category: "Hawaii state occupancy fees", amount: "~$196", note: "~$28/night × 7 nights" },
  { category: "Valet/Self-parking", amount: "$0", note: "Self-parking free for guests" },
  { category: "Rental Car (7 days, SUV)", amount: "~$700–900", note: "Book early for best rates" },
  { category: "Groceries & villa meals", amount: "~$400–500", note: "Full kitchen = big savings" },
  { category: "Dining out (4–5 restaurant meals)", amount: "~$500–700", note: "Waterfront dinners, Lāhainā" },
  { category: "Molokini Snorkel Cruise", amount: "~$330–390", note: "2 adults + 1 child (4yo)" },
  { category: "Old Lāhainā Lūʻau", amount: "~$395", note: "2 adults + 1 child · 2yo free" },
  { category: "Maui Ocean Center", amount: "~$110–130", note: "2 adults · under 3 free" },
  { category: "Activities & misc (snorkel gear, beach chairs, etc.)", amount: "~$200–300", note: "" },
  { category: "TOTAL ESTIMATED", amount: "~$7,900–8,700", note: "vs. ~$11k for summer option", highlight: true },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function DaySection({ day, idx }: { day: Day; idx: number }) {
  const [activePlan, setActivePlan] = useState(0);
  const plan = day.plans[activePlan];

  return (
    <section id={day.id} className="py-20 md:py-28" style={{ borderTop: "1px solid rgba(10,74,92,0.08)" }}>
      <div className="container">
        {/* Day header */}
        <div className="fade-in-up mb-10 md:mb-12 relative">
          <div
            className="absolute -top-4 -left-4 md:-left-8 text-[120px] md:text-[180px] font-black leading-none select-none pointer-events-none"
            style={{ fontFamily: "'Playfair Display', serif", color: "rgba(10,74,92,0.06)" }}
          >
            {day.number}
          </div>
          <div className="relative">
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#E8714A" }}>
              Day {parseInt(day.number)}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>
              {day.title}
            </h2>
            <p className="text-base md:text-lg" style={{ color: "#8B7355" }}>{day.subtitle}</p>
          </div>
        </div>

        {/* Plan toggle tabs */}
        <div className="fade-in-up flex gap-2 mb-8 flex-wrap">
          {day.plans.map((p, pIdx) => (
            <button
              key={pIdx}
              onClick={() => setActivePlan(pIdx)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all"
              style={{
                background: activePlan === pIdx ? p.tagColor : "transparent",
                color: activePlan === pIdx ? "#FDFAF5" : "#8B7355",
                border: `1.5px solid ${activePlan === pIdx ? p.tagColor : "#D4B896"}`,
                fontFamily: "'Lato', sans-serif",
                fontWeight: activePlan === pIdx ? 700 : 400,
              }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: activePlan === pIdx ? "#FDFAF5" : p.tagColor }} />
              {p.label}
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: activePlan === pIdx ? "rgba(255,255,255,0.2)" : "rgba(10,74,92,0.08)",
                  color: activePlan === pIdx ? "#FDFAF5" : p.tagColor,
                }}
              >
                {p.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Hero image + description */}
        <div
          key={`${day.id}-${activePlan}`}
          className={`plan-content grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
        >
          <div className="relative overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
            <img
              src={plan.heroImage}
              alt={plan.label}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(10,74,92,0.1)" }} />
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#4A3728", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              {plan.description}
            </p>
            <div className="p-4 rounded-sm" style={{ background: "rgba(10,74,92,0.05)", borderLeft: "3px solid #E8714A" }}>
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#E8714A" }}>Logistics</p>
              <p className="text-sm" style={{ color: "#4A3728" }}>{plan.logistics}</p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div key={`${day.id}-${activePlan}-acts`} className="plan-content grid md:grid-cols-2 gap-8">
          {plan.activities.map((act, aIdx) => (
            <div key={aIdx} className="group">
              <div className="overflow-hidden rounded-sm mb-4" style={{ aspectRatio: "16/9" }}>
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: "#E8714A", color: "#FDFAF5" }}>
                  {aIdx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>
                    {act.title}
                  </h3>
                  {act.cost && (
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full mb-2" style={{ background: "rgba(232,113,74,0.12)", color: "#C05A35" }}>
                      {act.cost}
                    </span>
                  )}
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#4A3728" }}>{act.detail}</p>
                  <div className="flex items-start gap-2 p-3 rounded-sm" style={{ background: "rgba(232,113,74,0.06)" }}>
                    <span style={{ color: "#E8714A" }}>★</span>
                    <p className="text-xs leading-relaxed" style={{ color: "#7A5C3A" }}>{act.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Day budget pill */}
        <div className="plan-content mt-10 flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: "#E8D5B0" }} />
          <span className="text-xs px-4 py-1.5 rounded-full" style={{ background: "rgba(10,74,92,0.08)", color: "#0A4A5C", fontFamily: "'Lato', sans-serif" }}>
            💰 {plan.budget}
          </span>
          <div className="h-px flex-1" style={{ background: "#E8D5B0" }} />
        </div>
      </div>
    </section>
  );
}

export default function WestinPlan() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: "#FDFAF5" }}>

      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(253,250,245,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(10,74,92,0.08)" }}>
        <div className="container flex items-center justify-between py-3">
          <Link href="/">
            <span className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#0A4A5C", fontFamily: "'Lato', sans-serif" }}>
              ← Back to Summer Plan
            </span>
          </Link>
          <span className="text-xs tracking-widest uppercase" style={{ color: "#E8714A", fontFamily: "'Lato', sans-serif" }}>
            May 29 – Jun 5, 2026
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative min-h-screen flex items-end pb-20" style={{ paddingTop: "60px" }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={IMAGES.westinSunset} alt="Westin Ka'anapali" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,30,40,0.85) 0%, rgba(10,30,40,0.3) 50%, transparent 100%)" }} />
        </div>
        <div className="relative container">
          <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Lato', sans-serif" }}>
            ALTERNATIVE OPTION · REDWEEK R1438266
          </p>
          <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-none" style={{ fontFamily: "'Playfair Display', serif", color: "#FDFAF5" }}>
            Westin<br />Ka'anapali.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            A 7-night villa stay at the Westin Ka'anapali Ocean Resort Villas — full kitchen, ocean view lanai, and late May timing for fewer crowds.
          </p>
          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { label: "Nights", value: "7" },
              { label: "Travelers", value: "4" },
              { label: "Check-In", value: "May 29" },
              { label: "Check-Out", value: "Jun 5" },
              { label: "Est. Total", value: "~$8.3k" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#FDFAF5" }}>{s.value}</div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Lato', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ background: "rgba(232,113,74,0.85)", color: "#FDFAF5", fontFamily: "'Lato', sans-serif" }}>
            ✦ Each day includes alternative options — tap to swap plans
          </div>
        </div>
      </div>

      {/* Villa Details Card */}
      <section className="py-16" style={{ background: "rgba(10,74,92,0.04)" }}>
        <div className="container">
          <div className="fade-in-up mb-8">
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#E8714A" }}>The Property</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>
              Westin Ka'anapali Ocean Resort Villas
            </h2>
            <p className="text-base mt-2" style={{ color: "#8B7355" }}>1 Bedroom Premium Villa · Ocean View · Lāhainā, Maui</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="fade-in-up">
              <div className="overflow-hidden rounded-sm mb-4" style={{ aspectRatio: "4/3" }}>
                <img src={IMAGES.westinAerial} alt="Westin Ka'anapali aerial" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                  <img src={IMAGES.westinVilla} alt="Villa interior" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                  <img src={IMAGES.westinBalcony} alt="Ocean view balcony" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="fade-in-up">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: "🛏️", label: "Sleeping", value: "1 King + Sofa Bed · Sleeps 4" },
                  { icon: "🍳", label: "Kitchen", value: "Full kitchen — fridge, oven, dishwasher, stovetop" },
                  { icon: "🌊", label: "View", value: "Ocean view from private lanai" },
                  { icon: "👕", label: "Laundry", value: "In-unit washer & dryer" },
                  { icon: "❄️", label: "Comfort", value: "A/C + patio/balcony" },
                  { icon: "🅿️", label: "Parking", value: "Self-parking free for guests" },
                ].map((f) => (
                  <div key={f.label} className="p-4 rounded-sm" style={{ background: "white", border: "1px solid rgba(10,74,92,0.08)" }}>
                    <div className="text-xl mb-1">{f.icon}</div>
                    <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "#E8714A", fontFamily: "'Lato', sans-serif" }}>{f.label}</div>
                    <div className="text-sm" style={{ color: "#4A3728" }}>{f.value}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-sm mb-4" style={{ background: "rgba(232,113,74,0.08)", border: "1px solid rgba(232,113,74,0.2)" }}>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#E8714A" }}>⚠️ Construction Notice</p>
                <p className="text-sm" style={{ color: "#4A3728" }}>Interior villa renovation and exterior painting project runs April 4 – June 27, 2026. Some construction noise may be experienced. Factor this in when deciding.</p>
              </div>
              <div className="p-4 rounded-sm" style={{ background: "rgba(10,74,92,0.05)", borderLeft: "3px solid #0A4A5C" }}>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#0A4A5C" }}>Pricing</p>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm" style={{ color: "#4A3728" }}>$400/night × 7 nights</span>
                  <span className="font-bold" style={{ color: "#0A4A5C" }}>$2,800</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm" style={{ color: "#4A3728" }}>RedWeek fees & taxes</span>
                  <span className="font-bold" style={{ color: "#0A4A5C" }}>$277</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm" style={{ color: "#4A3728" }}>Hawaii state occupancy (~$28/night)</span>
                  <span className="font-bold" style={{ color: "#0A4A5C" }}>~$196</span>
                </div>
                <div className="h-px my-2" style={{ background: "#D4B896" }} />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold" style={{ color: "#0A4A5C" }}>RedWeek Total</span>
                  <span className="text-lg font-bold" style={{ color: "#E8714A" }}>$3,077</span>
                </div>
                <a href="https://www.redweek.com/posting/R1438266" target="_blank" rel="noopener noreferrer"
                  className="block mt-3 text-center py-2 rounded-sm text-sm font-bold transition-opacity hover:opacity-80"
                  style={{ background: "#0A4A5C", color: "#FDFAF5", fontFamily: "'Lato', sans-serif" }}>
                  View Listing on RedWeek →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky day nav */}
      <nav className="sticky top-[49px] z-40 overflow-x-auto" style={{ background: "rgba(253,250,245,0.97)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(10,74,92,0.08)" }}>
        <div className="container">
          <div className="flex gap-0 min-w-max">
            {days.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="px-4 py-3 text-xs whitespace-nowrap transition-colors"
                style={{ color: "#8B7355", fontFamily: "'Lato', sans-serif", borderRight: "1px solid rgba(10,74,92,0.06)" }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(d.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span style={{ color: "#E8714A" }}>{d.number}</span>
                <span className="ml-1 hidden sm:inline">{d.title.split(" ").slice(0, 3).join(" ")}</span>
              </a>
            ))}
            <a
              href="#w-budget"
              className="px-4 py-3 text-xs whitespace-nowrap transition-colors"
              style={{ color: "#8B7355", fontFamily: "'Lato', sans-serif" }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("w-budget")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Budget
            </a>
          </div>
        </div>
      </nav>

      {/* Day sections */}
      {days.map((day, idx) => (
        <DaySection key={day.id} day={day} idx={idx} />
      ))}

      {/* Budget section */}
      <section id="w-budget" className="py-20 md:py-28" style={{ background: "rgba(10,74,92,0.03)", borderTop: "1px solid rgba(10,74,92,0.08)" }}>
        <div className="container">
          <div className="fade-in-up mb-12">
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#E8714A" }}>Full Cost Breakdown</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>
              Estimated Budget
            </h2>
            <p className="text-base mt-2" style={{ color: "#8B7355" }}>May 29 – June 5, 2026 · Family of 4 · SFO → OGG</p>
          </div>
          <div className="fade-in-up max-w-3xl">
            <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(10,74,92,0.1)" }}>
              {budgetItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start gap-4 px-6 py-4"
                  style={{
                    background: item.highlight ? "rgba(10,74,92,0.06)" : i % 2 === 0 ? "white" : "rgba(245,230,200,0.2)",
                    borderTop: item.highlight ? "2px solid rgba(10,74,92,0.2)" : undefined,
                  }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: item.highlight ? "#0A4A5C" : "#4A3728", fontWeight: item.highlight ? 700 : 400 }}>
                      {item.category}
                    </p>
                    {item.note && <p className="text-xs mt-0.5" style={{ color: "#8B7355" }}>{item.note}</p>}
                  </div>
                  <span className="text-sm font-bold flex-shrink-0" style={{ color: item.highlight ? "#E8714A" : "#0A4A5C", fontSize: item.highlight ? "1.1rem" : undefined }}>
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-sm" style={{ background: "rgba(232,113,74,0.08)", border: "1px solid rgba(232,113,74,0.2)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#C05A35" }}>💡 Why this option saves ~$2,700</p>
              <ul className="text-sm space-y-1" style={{ color: "#4A3728" }}>
                <li>• <strong>Late May timing</strong> — flights are ~$600 cheaper than July/August</li>
                <li>• <strong>Villa full kitchen</strong> — saves ~$300–400 vs. eating out every meal at a hotel</li>
                <li>• <strong>Free self-parking</strong> — saves $245 vs. resort valet ($35/night)</li>
                <li>• <strong>Less crowded beaches</strong> — late May is pre-peak, so better experience overall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ background: "#0A4A5C" }}>
        <div className="container text-center">
          <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Lato', sans-serif" }}>
            Westin Ka'anapali Ocean Resort Villas · RedWeek Listing R1438266
          </p>
          <Link href="/">
            <span className="text-sm cursor-pointer" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Lato', sans-serif" }}>
              ← View Summer Plan (July Option)
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
