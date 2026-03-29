/**
 * Maui Family Trip 2026 — Tropical Editorial Magazine Style
 * Design: Playfair Display headings, Lato body, warm sand/teal/coral palette
 * Layout: Full-bleed hero, sticky day nav, alternating editorial day sections
 * Feature: Each day has a primary plan + alternative options toggle
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { DayMap, type Waypoint } from "@/components/DayMap";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663317271153/ST6JyvESCqw6urLu3fwLqo";

const IMAGES = {
  hero:           `${CDN}/kaanapali_sunset_bd11ada1.jpg`,
  heroBeach:      `${CDN}/kaanapali_beach_day_1e1beacc.jpg`,
  resortAerial:   `${CDN}/resort_pool_aerial_929cfc15.jpg`,
  resortFamily:   `${CDN}/resort_pool_family_3ec63504.jpg`,
  honuaKai:       `${CDN}/honua_kai_pool_091ad51a.jpg`,
  westinMaui:     `${CDN}/westin_maui_be37f80f.jpg`,
  westinMaui2:    `${CDN}/westin_maui2_4d8e523e.jpg`,
  kapaluaFamily:  `${CDN}/kapalua_family_a5a6fd18.jpg`,
  kapaluaAerial:  `${CDN}/kapalua_bay_aerial_fc2113de.jpg`,
  oceanCenter:    `${CDN}/maui_ocean_center_929071ae.webp`,
  oceanCenter2:   `${CDN}/maui_ocean_center2_f626cb77.jpg`,
  molokiniAerial: `${CDN}/molokini_aerial_eeff92a9.jpg`,
  molokiniSnorkel:`${CDN}/molokini_snorkel_9eb9cd91.jpeg`,
  lahainaTown:    `${CDN}/lahaina_town_a1c37de5.jpg`,
  lahainaStreet:  `${CDN}/lahaina_street_83a91882.jpg`,
  kahekili:       `${CDN}/kahekili_highway_368d7f0d.jpg`,
  kahekili2:      `${CDN}/kahekili_highway2_313521d3.jpg`,
  napaliBay:      `${CDN}/napili_bay_41d0245c.jpg`,
  napiliSnorkel:  `${CDN}/napili_snorkel_c4d8646d.jpg`,
  luau:           `${CDN}/old_lahaina_luau_ffd48460.jpg`,
  kaanapaliKids:  `${CDN}/kaanapali_beach_kids_17640466.jpg`,
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
  waypoints: Waypoint[];
  mapCenter: google.maps.LatLngLiteral;
  mapZoom?: number;
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
    id: "day1",
    number: "01",
    title: "Arrival & First Taste of Paradise",
    subtitle: "Ka'anapali Beach · Westin Villa Check-In · Sunset Stroll",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Relaxed",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.hero,
        description: "Touch down at Kahului Airport (OGG) and let the warm Maui air wash over you. Pick up your rental SUV and make the scenic 45-minute drive along the coast to Ka'anapali. Check in to your 1-bedroom ocean-view villa at the Westin Ka'anapali Ocean Resort Villas, let the kids splash in the pool, and end the day watching one of Maui's legendary sunsets from your private lanai.",
        activities: [
          {
            title: "Westin Villa Check-In & Pool Time",
            detail: "Your Premium Villa at the Westin Ka'anapali Ocean Resort Villas has a king bed + sofa bed, full kitchen, in-unit washer/dryer, and a private ocean-view lanai. The resort has multiple pools including a dedicated kids' pool — perfect for burning off flight energy. Self-parking is free for guests.",
            tip: "Request an upper-floor unit for the best unobstructed ocean views. The lanai is perfect for morning coffee and evening sunsets.",
            image: IMAGES.westinMaui,
          },
          {
            title: "Ka'anapali Beach Sunset Walk",
            detail: "Stroll the 3-mile Ka'anapali Beachfront Walk at golden hour. Stop at Black Rock (Pu'u Keka'a) to watch cliff divers perform the traditional torch-lighting ceremony at dusk.",
            tip: "The cliff diving ceremony happens nightly at sunset — don't miss it!",
            image: IMAGES.hero,
          },
        ],
        logistics: "Arrive OGG → Pick up rental car → Drive ~45 min to Ka'anapali → Westin check-in → Beach walk → Sunset from lanai",
        budget: "$0 activities today (villa & resort pool are included)",
        waypoints: [
          { label: "Kahului Airport (OGG)", address: "Kahului Airport, Kahului, HI 96732", note: "Arrival & car rental", driveTime: "45 min", driveDist: "27 mi" },
          { label: "Westin Ka'anapali Ocean Resort Villas", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Check-in", driveTime: "5 min", driveDist: "1.5 mi" },
          { label: "Black Rock (Pu'u Keka'a)", address: "Pu'u Keka'a, Ka'anapali, Lahaina, HI 96761", note: "Sunset cliff diving" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.6825 },
        mapZoom: 11,
      },
      {
        label: "Alternative: Explore Paia Town",
        tag: "Adventurous",
        tagColor: "#E8714A",
        heroImage: IMAGES.lahainaTown,
        description: "If you land early, skip the highway and take the scenic Hana Highway through Paia — Maui's funky surf town. Browse boutique shops, grab fish tacos at Milagros, and stop at Waikomo Shave Ice in Paia for your first taste of Maui's legendary shave ice before heading to Ka'anapali.",
        activities: [
          {
            title: "Paia Town Stroll & Lunch",
            detail: "Paia is a charming, colorful surf town on the North Shore. Walk Baldwin Avenue, stop for acai bowls or fish tacos, and browse the eclectic local shops. It's a great first taste of authentic Maui culture.",
            tip: "Flatbread Company in Paia has excellent wood-fired pizza — great for kids.",
            image: IMAGES.lahainaStreet,
          },
          {
            title: "Waikomo Shave Ice — Paia",
            detail: "Tucked behind a green building in the heart of Paia, Waikomo Shave Ice is a beloved local spot known for its ultra-fine ice and natural fruit syrups. A perfect first-day treat for the kids before the drive to Ka'anapali.",
            tip: "Try the lilikoi (passion fruit) and mango combo — a classic Maui flavor pairing.",
            image: IMAGES.kaanapaliKids,
          },
        ],
        logistics: "Land OGG → Drive through Paia (Hana Hwy) → Lunch in Paia → Waikomo Shave Ice → Drive to Ka'anapali (~1.5 hrs)",
        budget: "~$40–60 for lunch + shave ice",
        waypoints: [
          { label: "Kahului Airport (OGG)", address: "Kahului Airport, Kahului, HI 96732", note: "Arrival", driveTime: "10 min", driveDist: "7 mi" },
          { label: "Paia Town", address: "Baldwin Ave, Paia, HI 96779", note: "Lunch & browse", driveTime: "5 min", driveDist: "0.5 mi" },
          { label: "Waikomo Shave Ice", address: "Waikomo Shave Ice, Paia, HI 96779", note: "First shave ice!", driveTime: "55 min", driveDist: "35 mi" },
          { label: "Westin Ka'anapali Ocean Resort Villas", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Check-in" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.5 },
        mapZoom: 10,
      },
    ],
  },
  {
    id: "day2",
    number: "02",
    title: "Kapalua Bay Morning",
    subtitle: "Kapalua Bay · Napili Bay · Hula Grill Dinner at Whalers Village",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Beach Day",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.kapaluaAerial,
        description: "Kapalua Bay is consistently ranked one of the best family beaches in Hawaii — protected by lava rock headlands that create nearly lagoon-like calm, perfect for your 2yo and 4yo. Spend the morning here, then head to nearby Napili Bay for a change of scenery, and end the evening with dinner at Hula Grill right on Ka'anapali Beach at Whalers Village.",
        activities: [
          {
            title: "Kapalua Bay",
            detail: "A crescent of golden sand sheltered by lava rock arms on both sides, creating almost zero wave action. The water is crystal clear and shallow near shore — ideal for toddlers. Snorkel gear rentals are available nearby for the adults.",
            tip: "Arrive by 8:30am to snag a good spot. It fills up by 10am in summer.",
            image: IMAGES.kapaluaFamily,
          },
          {
            title: "Hula Grill Ka'anapali — Dinner",
            detail: "End the day at Hula Grill, right on the sand at Whalers Village. The open-air Barefoot Bar is legendary — tables are literally on the beach. Fresh island fish, great mai tais, and a fantastic kids' menu. Live Hawaiian music most evenings. Reservations recommended.",
            tip: "Request a Barefoot Bar table on the sand for the best experience. Arrive at sunset for the view.",
            image: IMAGES.resortAerial,
          },
        ],
        logistics: "Morning: Kapalua Bay (8:30am–noon) → Lunch at Napili Bay → Afternoon: Resort pool → Evening: Hula Grill dinner",
        budget: "~$80–120 for dinner at Hula Grill",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Start", driveTime: "14 min", driveDist: "5.5 mi" },
          { label: "Kapalua Bay Beach", address: "Kapalua Bay, Lahaina, HI 96761", note: "Morning beach", driveTime: "1 min", driveDist: "0.1 mi" },
          { label: "Napili Bay", address: "Napili Bay, Lahaina, HI 96761", note: "Lunch picnic", driveTime: "15 min", driveDist: "6.4 mi" },
          { label: "Hula Grill Ka'anapali", address: "2435 Kaanapali Pkwy, Lahaina, HI 96761", note: "Barefoot Bar dinner" },
        ],
        mapCenter: { lat: 20.9850, lng: -156.6700 },
        mapZoom: 13,
      },
      {
        label: "Alternative: Kā'anapali Beach Day",
        tag: "Easy & Close",
        tagColor: "#E8714A",
        heroImage: IMAGES.kaanapaliKids,
        description: "Skip the drive and spend the whole day right at your doorstep. Ka'anapali Beach is one of Maui's most iconic stretches of sand — 3 miles of golden beach with calm morning conditions, beach chair rentals, and Whalers Village steps away for lunch at Leilani's on the Beach with its sweeping ocean views.",
        activities: [
          {
            title: "Ka'anapali Beach Morning",
            detail: "The north end of Ka'anapali (near Honua Kai) is calmer and less crowded than the main strip. Build sandcastles, wade in the gentle morning surf, and let the kids explore the tide pools near Black Rock.",
            tip: "Rent a beach umbrella and chairs from the resort — worth every penny with toddlers.",
            image: IMAGES.heroBeach,
          },
          {
            title: "Leilani's on the Beach — Lunch",
            detail: "Leilani's is the crown jewel of Whalers Village — open-air dining right on Ka'anapali Beach with sweeping ocean views. Award-winning Hawaii Regional Cuisine featuring long-line caught fresh fish. The kids' menu is excellent and the Aloha Hour (3–4:30pm Mon/Thu/Sat/Sun) has great deals. After lunch, browse the free whale museum and pick up beach supplies.",
            tip: "Book a table online in advance — it's popular. Ask for a table on the lower deck closest to the beach.",
            image: IMAGES.resortAerial,
          },
        ],
        logistics: "All day at Ka'anapali → Lunch at Leilani's on the Beach (Whalers Village) → Resort pool afternoon",
        budget: "~$80–120 for lunch at Leilani's + beach chair rental",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Start", driveTime: "3 min", driveDist: "0.8 mi" },
          { label: "Black Rock Beach", address: "Pu'u Keka'a, Ka'anapali, Lahaina, HI 96761", note: "Beach morning", driveTime: "2 min", driveDist: "0.5 mi" },
          { label: "Leilani's on the Beach", address: "2435 Kaanapali Pkwy Bldg J, Lahaina, HI 96761", note: "Lunch" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.6900 },
        mapZoom: 14,
      },
    ],
  },
  {
    id: "day3",
    number: "03",
    title: "Maui Ocean Center & Lāhainā Town",
    subtitle: "Maui Ocean Center · Lāhainā Historic Town · Ululani's Shave Ice",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Culture & Discovery",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.lahainaTown,
        description: "A perfect day for a mix of discovery and culture. Start the morning at the Maui Ocean Center — Hawaii's premier aquarium and a genuine highlight for toddlers. Then head into historic Lāhainā for a stroll down Front Street, ice cream, and a waterfront dinner as the sun sets over Lāna'i.",
        activities: [
          {
            title: "Maui Ocean Center",
            detail: "Walk through a 54-foot acrylic underwater tunnel surrounded by sharks, rays, and thousands of tropical fish. The Open Ocean exhibit is the centerpiece, but the touch pools and Hawaiian green sea turtle lagoon are the toddler favorites. Plan for 2–2.5 hours.",
            tip: "Go first thing when it opens (9am) before the tour buses arrive. Kids under 3 are free.",
            image: IMAGES.oceanCenter2,
            cost: "~$55/adult · Under 3 free",
          },
          {
            title: "Lāhainā Town, Banyan Tree & Ululani's Shave Ice",
            detail: "Stroll down Front Street, lined with art galleries, boutique shops, and restaurants. Visit the famous 150-year-old Banyan Tree — the largest in the US. Then head to Ululani's Hawaiian Shave Ice — the gold standard on Maui. Ultra-fine ice, natural syrups, and add-ons like mochi, azuki beans, and ice cream inside. The Ma'alaea location is right at the Ocean Center; the Lahaina location is on Front Street.",
            tip: "Order the 'full experience' — shave ice with ice cream inside and mochi on top. Kids will lose their minds.",
            image: IMAGES.lahainaStreet,
          },
        ],
        logistics: "9am: Maui Ocean Center (Ma'alaea) → 11:30am: Drive to Lāhainā (20 min) → Lunch & Banyan Tree stroll → Ululani's shave ice → Waterfront dinner",
        budget: "~$110–130 for Ocean Center (2 adults) + dining + shave ice",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Start", driveTime: "20 min", driveDist: "12 mi" },
          { label: "Maui Ocean Center", address: "192 Ma'alaea Rd, Wailuku, HI 96793", note: "9am opening", driveTime: "20 min", driveDist: "11 mi" },
          { label: "Lahaina Banyan Tree", address: "649 Wharf St, Lahaina, HI 96761", note: "Iconic tree + lunch", driveTime: "2 min", driveDist: "0.3 mi" },
          { label: "Ululani's Shave Ice Lahaina", address: "790 Front St, Lahaina, HI 96761", note: "Shave ice!" },
        ],
        mapCenter: { lat: 20.8893, lng: -156.6600 },
        mapZoom: 11,
      },
      {
        label: "Alternative: Maui Tropical Plantation",
        tag: "Unique & Kid-Friendly",
        tagColor: "#E8714A",
        heroImage: IMAGES.resortFamily,
        description: "Instead of the aquarium, head to the Maui Tropical Plantation in Waikapu — a working farm with a narrated tram tour through fields of pineapple, sugarcane, papaya, and tropical flowers. Kids love the tram ride and the farm animals. Pair it with a stop at the Mill House restaurant for farm-to-table lunch.",
        activities: [
          {
            title: "Maui Tropical Plantation Tram Tour",
            detail: "A 40-minute narrated tram ride through 60 acres of tropical crops. You'll see and sample pineapple, coconut, macadamia nuts, papaya, and more. The guides are entertaining and great with kids. There's also a zip line for older kids (4yo is borderline — check requirements).",
            tip: "The Mill House restaurant on-site is excellent — reserve a table for lunch after the tour.",
            image: IMAGES.resortFamily,
            cost: "~$25/adult · ~$15/child (3+)",
          },
          {
            title: "Lāhainā Banyan Tree & Shave Ice",
            detail: "After the plantation, drive to Lāhainā to see the iconic Banyan Tree and grab Ululani's shave ice. The kids will love running around the massive tree's aerial roots. Keep it short — just an hour — before heading back.",
            tip: "Get the shave ice with mochi and ice cream inside — the full experience.",
            image: IMAGES.lahainaTown,
          },
        ],
        logistics: "9:30am: Maui Tropical Plantation (Waikapu) → Lunch at Mill House → 2pm: Lāhainā Banyan Tree → Back to resort",
        budget: "~$80–100 for plantation tour + lunch",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Start", driveTime: "18 min", driveDist: "10 mi" },
          { label: "Maui Tropical Plantation", address: "1670 Honoapiilani Hwy, Wailuku, HI 96793", note: "Tram tour + lunch", driveTime: "15 min", driveDist: "8 mi" },
          { label: "Lahaina Banyan Tree", address: "649 Wharf St, Lahaina, HI 96761", note: "Shave ice & stroll", driveTime: "18 min", driveDist: "10 mi" },
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Return" },
        ],
        mapCenter: { lat: 20.8893, lng: -156.6300 },
        mapZoom: 11,
      },
    ],
  },
  {
    id: "day4",
    number: "04",
    title: "Mama's Fish House & North Shore",
    subtitle: "Mama's Fish House Lunch · Paia Town · Ho'okipa Lookout",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Special Lunch",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.lahainaTown,
        description: "Today is built around the most iconic restaurant on Maui — Mama's Fish House on the North Shore. Set in a stunning oceanfront coconut grove in Paia, it's consistently ranked one of the top restaurants in the entire United States. The menu changes daily based on what the fishermen catch that morning. Book months in advance — this is the meal of the trip.",
        activities: [
          {
            title: "Mama's Fish House — Lunch",
            detail: "Located in Paia on the North Shore, Mama's Fish House is a legendary oceanfront restaurant where the menu lists the name of the fisherman who caught each fish. The setting — a 1940s beach house surrounded by tropical gardens and coconut palms — is magical. Lunch is slightly easier to book than dinner. The whole fish, fresh catch, and coconut shrimp are standouts. Dress code: resort casual.",
            tip: "Book 2–3 months in advance online at mamasfishhouse.com. Request a window or garden table. Lunch is easier to get than dinner.",
            image: IMAGES.lahainaStreet,
            cost: "~$80–120/person · Reserve well in advance",
          },
          {
            title: "Paia Town & Ho'okipa Lookout",
            detail: "After lunch, stroll through Paia — Maui's charming surf town with boutique shops, art galleries, and great people-watching. Then drive 2 minutes east to the Ho'okipa Beach lookout to watch world-class windsurfers and spot Hawaiian green sea turtles resting on the sand below.",
            tip: "Turtles are most reliably seen on Ho'okipa beach in the late afternoon. The lookout is free and takes just 15 minutes.",
            image: IMAGES.kahekili,
          },
        ],
        logistics: "Drive to Paia (~45 min from Ka'anapali) → Mama's Fish House lunch (noon) → Paia stroll → Ho'okipa lookout → Return to resort",
        budget: "~$200–280 for 2 adults at Mama's Fish House",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Start", driveTime: "45 min", driveDist: "28 mi" },
          { label: "Mama's Fish House", address: "799 Poho Pl, Paia, HI 96779", note: "Legendary lunch", driveTime: "5 min", driveDist: "1.5 mi" },
          { label: "Ho'okipa Beach Lookout", address: "Hookipa Beach Park, Paia, HI 96779", note: "Turtles & surfers", driveTime: "45 min", driveDist: "28 mi" },
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Return" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.5200 },
        mapZoom: 10,
      },
      {
        label: "Alternative: Mākena (Big Beach) Day",
        tag: "Scenic & Free",
        tagColor: "#E8714A",
        heroImage: IMAGES.kapaluaAerial,
        description: "If you'd rather save Mama's for dinner or want a pure beach day, Mākena State Park (Big Beach) is one of Maui's most spectacular beaches — a wide, dramatic crescent of golden sand backed by a cinder cone. The north end is calm and perfect for families. Pair it with a stop at Kihei for shave ice at Ululani's on the way back.",
        activities: [
          {
            title: "Big Beach (Oneloa Beach)",
            detail: "One of Maui's largest and most beautiful beaches — a half-mile of golden sand with dramatic scenery. The north end near the lava rock is calmer and great for families with toddlers. Note: the main beach has shore break that can be powerful — stay in the shallow areas and watch the waves from a safe distance.",
            tip: "Arrive early — the parking lot fills up fast. Bring all your own food and water as there are no vendors on the beach.",
            image: IMAGES.kapaluaFamily,
            cost: "Free (state park)",
          },
          {
            title: "Ululani's Shave Ice — Kihei",
            detail: "On the drive back from Mākena, stop at Ululani's Hawaiian Shave Ice in Kihei — the gold standard of Maui shave ice. Ultra-fine ice (not crushed ice), natural fruit syrups made from real fruit, and premium add-ons like mochi, azuki beans, and ice cream inside. Multiple flavors and combinations — the kids will love it.",
            tip: "Get the 'full experience': shave ice with ice cream inside and mochi on top. The lilikoi (passion fruit) and strawberry combo is a classic.",
            image: IMAGES.kaanapaliKids,
            cost: "~$8–12 per shave ice",
          },
        ],
        logistics: "Drive to Mākena State Park (~30 min from Ka'anapali) → Beach morning → Ululani's shave ice in Kihei → Lunch → Resort afternoon",
        budget: "~$30–50 for lunch + shave ice (beach is free)",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Start", driveTime: "30 min", driveDist: "19 mi" },
          { label: "Big Beach (Mākena State Park)", address: "Makena State Park, Kihei, HI 96753", note: "Beach morning", driveTime: "15 min", driveDist: "8 mi" },
          { label: "Ululani's Shave Ice Kihei", address: "61 S Kihei Rd, Kihei, HI 96753", note: "Shave ice stop", driveTime: "30 min", driveDist: "19 mi" },
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Return" },
        ],
        mapCenter: { lat: 20.8500, lng: -156.6500 },
        mapZoom: 10,
      },
    ],
  },
  {
    id: "day5",
    number: "05",
    title: "Kahekili Highway Scenic Drive",
    subtitle: "West Maui Mountains · Kahakuloa Village · Napili Bay",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Scenic Drive",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.kahekili,
        description: "The Kahekili Highway (Route 340) is a narrow, winding coastal road that hugs the dramatic cliffs of West Maui — often called the 'road nobody tells you about.' It's perfectly manageable in a standard car and rewards you with jaw-dropping ocean views, waterfalls, and zero crowds.",
        activities: [
          {
            title: "Kahekili Highway Drive",
            detail: "Drive the 20-mile stretch from Ka'anapali northward through Kahakuloa Village — a remote, traditional Hawaiian settlement clinging to the cliffs. Stop at roadside viewpoints for sweeping views of the Pacific and the jagged West Maui Mountains. The road is narrow but paved; just take it slow.",
            tip: "Drive it in the morning when the light is best and before any afternoon fog rolls in. Allow 2–3 hours for stops.",
            image: IMAGES.kahekili2,
          },
          {
            title: "Napili Bay Afternoon & Poke Picnic",
            detail: "Return to Napili Bay for a relaxed afternoon. The kids can play in the calm, shallow water while you relax on the sand. Stop at Foodland Farms in Lahaina on the way back to pick up fresh poke bowls, local chips, and drinks for a beach picnic — one of the best value meals on Maui.",
            tip: "Foodland Farms in Lahaina has some of the best poke on the island — grab the ahi shoyu and spicy ahi. Get there by noon for the freshest selection.",
            image: IMAGES.napaliBay,
          },
        ],
        logistics: "Morning: Kahekili Highway drive (depart 8am) → Foodland Farms poke stop → Afternoon: Napili Bay picnic",
        budget: "~$30–50 for poke bowls and snacks (scenic drive is free)",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Start", driveTime: "35 min", driveDist: "18 mi" },
          { label: "Kahakuloa Village", address: "Kahakuloa, HI 96793", note: "Scenic drive stop", driveTime: "25 min", driveDist: "12 mi" },
          { label: "Foodland Farms Lahaina", address: "345 Keawe St, Lahaina, HI 96761", note: "Poke bowls", driveTime: "10 min", driveDist: "5 mi" },
          { label: "Napili Bay", address: "Napili Bay, Lahaina, HI 96761", note: "Beach picnic" },
        ],
        mapCenter: { lat: 21.0000, lng: -156.6500 },
        mapZoom: 11,
      },
      {
        label: "Alternative: Road to Hana (Half Day)",
        tag: "Iconic",
        tagColor: "#E8714A",
        heroImage: IMAGES.kahekili2,
        description: "The Road to Hana is one of the world's most famous scenic drives — 52 miles of winding road through lush rainforest, past waterfalls, bamboo groves, and black sand beaches. You don't need to drive the whole thing — even the first 30 miles to Twin Falls and Wailua Falls is spectacular and manageable with toddlers. Stop at a roadside stand for legendary Maui banana bread on the way.",
        activities: [
          {
            title: "Twin Falls & Wailua Falls",
            detail: "Twin Falls is just 2 miles down the Hana Highway — an easy, flat 10-minute walk to a beautiful double waterfall with a swimming hole. Continue to mile marker 21 for the roadside Wailua Falls viewpoint. These two stops alone make for a memorable morning.",
            tip: "Start early (7am) to beat the crowds. The road gets very congested by 9am in summer.",
            image: IMAGES.kahekili,
            cost: "~$10 parking at Twin Falls",
          },
          {
            title: "Ke'anae Peninsula Lookout",
            detail: "At mile marker 17, the Ke'anae Peninsula juts into the ocean — a dramatic lava field dotted with taro fields and a historic stone church. Stop at the roadside lookout for one of the most iconic views on the entire drive. There's a local stand selling banana bread here.",
            tip: "The banana bread at the Ke'anae roadside stand is legendary. Buy a whole loaf.",
            image: IMAGES.kahekili2,
          },
        ],
        logistics: "Depart Ka'anapali 7am → Twin Falls (mile 2) → Wailua Falls (mile 21) → Ke'anae lookout → Turn around → Back by noon",
        budget: "~$10 parking + $20 for banana bread and snacks",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Depart 7am", driveTime: "50 min", driveDist: "32 mi" },
          { label: "Twin Falls", address: "Twin Falls, Haiku, HI 96708", note: "Waterfall hike", driveTime: "40 min", driveDist: "19 mi" },
          { label: "Ke'anae Peninsula", address: "Keanae Peninsula, Hana, HI 96713", note: "Banana bread stand", driveTime: "1 hr 20 min", driveDist: "51 mi" },
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Return by noon" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.3500 },
        mapZoom: 10,
      },
    ],
  },
  {
    id: "day6",
    number: "06",
    title: "Old Lāhainā Lūʻau",
    subtitle: "Beach Day · Old Lāhainā Lūʻau Evening",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Must-Do",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.luau,
        description: "Keep the day relaxed — a final morning at the beach and pool — because tonight is the crown jewel of the trip: the Old Lāhainā Lūʻau. Widely considered the most authentic luau in Hawaii, it's set in a traditional oceanfront village in historic Lāhainā and features an imu feast, traditional hula, and Hawaiian storytelling as the sun sets over the Pacific.",
        activities: [
          {
            title: "Morning Beach & Pool Day",
            detail: "A free, unstructured morning. Let the kids play in the sand, build castles, and splash in the resort pool. This is also a great morning to visit the resort's breakfast buffet and take it slow before the big evening.",
            tip: "Use this morning to pack any souvenirs and do a final grocery run.",
            image: IMAGES.kaanapaliKids,
          },
          {
            title: "Old Lāhainā Lūʻau",
            detail: "Gates open at 5:15pm. Arrive early to explore the cultural village, watch artisans weave lauhala, and get your kukui nut lei. The feast includes kalua pig, poi, lomi salmon, haupia, and much more. The hula show tells the story of Hawaii's history from ancient Polynesia to modern times.",
            tip: "Book 2–3 months ahead — this sells out every night in summer. Children under 3 are free.",
            image: IMAGES.luau,
            cost: "~$230/adult · Under 3 free",
          },
        ],
        logistics: "Morning: Free beach/pool time → 4:30pm: Drive to Lāhainā → 5:15pm: Lūʻau gates open → 9pm: Return to resort",
        budget: "~$460 for 2 adults (kids under 3 free)",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Morning beach day", driveTime: "10 min", driveDist: "4 mi" },
          { label: "Old Lāhainā Lūʻau", address: "1251 Front St, Lahaina, HI 96761", note: "Gates open 5:15pm" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.6825 },
        mapZoom: 13,
      },
      {
        label: "Alternative: Drums of the Pacific Luau",
        tag: "More Accessible",
        tagColor: "#E8714A",
        heroImage: IMAGES.resortFamily,
        description: "If the Old Lāhainā Lūʻau is sold out (it often is), the Drums of the Pacific Luau at the Hyatt Regency Ka'anapali is an excellent alternative — and it's right on Ka'anapali Beach, just a short walk or drive from your resort. It features a full Polynesian show covering Hawaii, Samoa, Tahiti, and New Zealand.",
        activities: [
          {
            title: "Drums of the Pacific Luau",
            detail: "Held on the oceanfront lawn of the Hyatt Regency Ka'anapali, this luau features a traditional imu ceremony, a full Hawaiian feast buffet, and a spectacular Polynesian revue with fire knife dancing. The setting is beautiful and the show is very family-friendly.",
            tip: "Arrive at the imu ceremony (usually 5:30pm) — watching the pig being uncovered is a highlight for kids.",
            image: IMAGES.honuaKai,
            cost: "~$175/adult · ~$90/child (3–12) · Under 3 free",
          },
          {
            title: "Sunset Cocktails at the Hyatt Pool Bar",
            detail: "Arrive early and grab drinks at the Hyatt's famous pool bar before the luau starts. The pool area and ocean views are stunning at sunset. The kids can run around the lawn while you relax.",
            tip: "The Hyatt's Seavine pool bar has great mai tais and a kids' mocktail menu.",
            image: IMAGES.resortAerial,
          },
        ],
        logistics: "Morning: Free beach/pool time → 5pm: Walk/drive to Hyatt Ka'anapali → Luau → 9pm: Walk back to resort",
        budget: "~$350–400 for 2 adults + 1 child (4yo)",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Morning beach", driveTime: "3 min", driveDist: "0.7 mi" },
          { label: "Hyatt Regency Maui", address: "200 Nohea Kai Dr, Lahaina, HI 96761", note: "Drums of the Pacific Luau" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.6900 },
        mapZoom: 14,
      },
    ],
  },
  {
    id: "day7",
    number: "07",
    title: "Final Morning & Aloha",
    subtitle: "Last Beach Walk · Shave Ice · Depart OGG",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Easy Departure",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.heroBeach,
        description: "Your last morning in Maui. Take one final walk along Ka'anapali Beach, let the kids get their feet wet one last time, and stop for shave ice before heading to the airport. The memories — the sunsets, the turtles, the luau — will last a lifetime.",
        activities: [
          {
            title: "Final Ka'anapali Beach Walk",
            detail: "Wake up early for a quiet morning walk along the beach before checkout. The light is golden, the beach is uncrowded, and the ocean is calm. A perfect, peaceful goodbye to Maui.",
            tip: "Take a family photo at Black Rock (Pu'u Keka'a) — the same spot you saw the cliff divers on Day 1.",
            image: IMAGES.heroBeach,
          },
          {
            title: "Shave Ice & Depart",
            detail: "Stop at Ululani's Hawaiian Shave Ice in Lahaina for one last treat before the drive to OGG. The airport is about 45 minutes from Ka'anapali — allow extra time for car seat return and check-in.",
            tip: "Return your rental car with a full tank — gas stations near the airport are pricey.",
            image: IMAGES.kaanapaliKids,
          },
        ],
        logistics: "Morning: Beach walk → Checkout → Shave ice in Lahaina → OGG Airport (depart afternoon)",
        budget: "~$20–30 for shave ice and snacks",
        waypoints: [
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Final beach walk & checkout", driveTime: "10 min", driveDist: "4 mi" },
          { label: "Ululani's Shave Ice Lahaina", address: "790 Front St, Lahaina, HI 96761", note: "Last shave ice", driveTime: "45 min", driveDist: "27 mi" },
          { label: "Kahului Airport (OGG)", address: "Kahului Airport, Kahului, HI 96732", note: "Depart" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.6500 },
        mapZoom: 11,
      },
      {
        label: "Alternative: Kapalua Bay & Shave Ice Farewell",
        tag: "Easy & Sweet",
        tagColor: "#E8714A",
        heroImage: IMAGES.kapaluaAerial,
        description: "If you have a late afternoon flight, spend your last morning at Kapalua Bay — the most beautiful and calm beach on Maui. Let the kids get their feet wet one last time in those impossibly clear waters, then stop for a final shave ice before the drive to OGG. The perfect, unhurried goodbye to Maui.",
        activities: [
          {
            title: "Kapalua Bay Final Morning",
            detail: "Kapalua Bay is the perfect farewell beach — calm, clear, and beautiful. The kids can wade in the shallow water one last time while you soak in the scenery. It's a 15-minute drive north of the Westin. Arrive early before it fills up.",
            tip: "Take a family photo at the water's edge — the turquoise water and golden sand make for an unforgettable shot.",
            image: IMAGES.kapaluaFamily,
          },
          {
            title: "Ululani's Shave Ice — Final Treat",
            detail: "Stop at Ululani's on the way to the airport for one last shave ice. The Kahului location (333 Dairy Rd) is the most convenient on the way to OGG — just 5 minutes from the airport. A sweet, colorful send-off for the whole family.",
            tip: "The Kahului location is open early and is the most convenient stop on the way to the airport. Don't skip it!",
            image: IMAGES.kaanapaliKids,
            cost: "~$8–12 per shave ice",
          },
        ],
        logistics: "7am: Kapalua Bay final swim → 9:30am: Checkout → Ululani's shave ice (Kahului) → OGG Airport",
        budget: "~$20–30 for shave ice and coffee",
        waypoints: [
          { label: "Kapalua Bay Beach", address: "Kapalua Bay, Lahaina, HI 96761", note: "Final swim", driveTime: "14 min", driveDist: "5.5 mi" },
          { label: "Westin Ka'anapali", address: "6 Kai Ala Dr, Lahaina, HI 96761", note: "Checkout", driveTime: "45 min", driveDist: "27 mi" },
          { label: "Ululani's Shave Ice Kahului", address: "333 Dairy Rd, Kahului, HI 96732", note: "Last shave ice", driveTime: "5 min", driveDist: "2 mi" },
          { label: "Kahului Airport (OGG)", address: "Kahului Airport, Kahului, HI 96732", note: "Depart" },
        ],
        mapCenter: { lat: 20.9281, lng: -156.6500 },
        mapZoom: 11,
      },
    ],
  },
];

const budgetRows = [
  { item: "Flights (SFO → OGG, 4 pax, round-trip — summer dates)", cost: "~$2,200" },
  { item: "Westin Ka'anapali Ocean Resort Villas (7 nights via RedWeek)", cost: "$3,077" },
  { item: "Hawaii state occupancy fees (~$28/night)", cost: "~$196" },
  { item: "Car Rental (7 days, SUV)", cost: "~$700" },
  { item: "Groceries & villa meals (full kitchen saves on dining)", cost: "~$400–500" },
  { item: "Dining out (Mama's Fish House, Hula Grill, Leilani's, etc.)", cost: "~$600–800" },
  { item: "Maui Ocean Center (2 adults · kids under 3 free)", cost: "~$110" },
  { item: "Old Lāhainā Lūʻau (2 adults · 4yo · 2yo free)", cost: "~$460" },
  { item: "Shave ice, snacks, activities & misc.", cost: "~$300" },
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
    <section id={day.id} className="py-20 md:py-28">
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
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: activePlan === pIdx ? "#FDFAF5" : p.tagColor }}
              />
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
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: "#E8714A", color: "#FDFAF5" }}
                >
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
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#4A3728", fontWeight: 300 }}>
                    {act.detail}
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-base" style={{ color: "#E8714A" }}>★</span>
                    <p className="text-xs italic" style={{ color: "#8B7355" }}>{act.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map & Logistics */}
        <div key={`${day.id}-${activePlan}-map`} className="plan-content mt-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: "#E8D5B0" }} />
            <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "#0A4A5C", fontFamily: "'Lato', sans-serif" }}>Route & Logistics</p>
            <div className="h-px flex-1" style={{ background: "#E8D5B0" }} />
          </div>
          <DayMap
            waypoints={plan.waypoints}
            center={plan.mapCenter}
            zoom={plan.mapZoom}
          />
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

export default function Home() {
  const [activeDay, setActiveDay] = useState("day1");
  const navRef = useRef<HTMLDivElement>(null);
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      for (const day of days) {
        const el = document.getElementById(day.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveDay(day.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDay = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#FDFAF5", color: "#2C1A0E" }}>

      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Ka'anapali Beach sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,30,0.75) 0%, rgba(10,20,30,0.2) 60%, transparent 100%)" }} />
        <div className="relative z-10 container pb-16 md:pb-24">
          <p className="text-sm tracking-[0.25em] uppercase mb-3" style={{ color: "#F4A07A", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            Summer 2026 · Westin Ka'anapali · Family of 4 · SFO → OGG
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#FDFAF5" }}>
            Aloha, Maui.
          </h1>
          <p className="text-xl md:text-2xl max-w-xl" style={{ color: "#F5E6C8", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            A 7-day family escape at the Westin Ka'anapali Ocean Resort Villas — beaches, great food, and memories that last a lifetime.
          </p>
          <div className="mt-8 flex gap-6 flex-wrap">
            {[["7","Nights"],["4","Travelers"],["~$8–9k","Est. Budget"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#F4A07A" }}>{val}</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: "#F5E6C8" }}>{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(232,113,74,0.25)", border: "1px solid rgba(232,113,74,0.4)" }}>
            <span className="text-xs" style={{ color: "#F4A07A" }}>✦</span>
            <span className="text-xs tracking-wide" style={{ color: "#F5E6C8" }}>Each day includes alternative options — tap to swap plans</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(253,250,245,0.6)" }}>Scroll</div>
          <div className="w-px h-10 animate-bounce" style={{ background: "rgba(253,250,245,0.5)" }} />
        </div>
      </section>

      {/* ─── STICKY DAY NAV ─── */}
      <div
        ref={navRef}
        className="sticky top-0 z-50 border-b overflow-x-auto"
        style={{ background: "#FDFAF5", borderColor: "#E8D5B0" }}
      >
        <div className="container">
          <div className="flex gap-0 min-w-max">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => scrollToDay(day.id)}
                className="px-4 py-4 text-sm transition-all relative whitespace-nowrap"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: activeDay === day.id ? 700 : 400,
                  color: activeDay === day.id ? "#0A4A5C" : "#8B7355",
                  borderBottom: activeDay === day.id ? "2px solid #E8714A" : "2px solid transparent",
                }}
              >
                <span className="mr-1.5" style={{ color: "#E8714A", fontFamily: "'Playfair Display', serif" }}>
                  {day.number}
                </span>
                <span className="hidden sm:inline">{day.title.split(" ").slice(0, 3).join(" ")}</span>
                <span className="sm:hidden">Day {parseInt(day.number)}</span>
              </button>
            ))}
            <button
              onClick={() => document.getElementById("budget")?.scrollIntoView({ behavior: "smooth" })}
              className="px-4 py-4 text-sm transition-all whitespace-nowrap"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400, color: "#8B7355" }}
            >
              Budget
            </button>
          </div>
        </div>
      </div>

      {/* ─── DAY SECTIONS ─── */}
      {days.map((day, idx) => (
        <DaySection key={day.id} day={day} idx={idx} />
      ))}

      {/* ─── BUDGET SECTION ─── */}
      <section id="budget" className="py-20 md:py-28" style={{ background: "#0A4A5C" }}>
        <div className="container">
          <div className="fade-in-up max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#F4A07A" }}>Full Trip</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#FDFAF5" }}>
              Budget Breakdown
            </h2>
            <p className="text-center mb-12" style={{ color: "rgba(245,230,200,0.7)", fontWeight: 300 }}>
              Estimated costs for a family of 4 (2 adults + 4yo + 2yo), 7 nights in Ka'anapali, Maui.
            </p>
            <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(245,230,200,0.15)" }}>
              {budgetRows.map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-6 py-4"
                  style={{
                    background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.08)",
                    borderBottom: i < budgetRows.length - 1 ? "1px solid rgba(245,230,200,0.1)" : "none",
                  }}
                >
                  <span className="text-sm" style={{ color: "#F5E6C8", fontWeight: 300 }}>{row.item}</span>
                  <span className="text-sm font-bold ml-4 flex-shrink-0" style={{ color: "#F4A07A", fontFamily: "'Playfair Display', serif" }}>{row.cost}</span>
                </div>
              ))}
              <div
                className="flex justify-between items-center px-6 py-5"
                style={{ background: "rgba(232,113,74,0.2)", borderTop: "2px solid rgba(232,113,74,0.5)" }}
              >
                <span className="text-base font-bold" style={{ color: "#FDFAF5", fontFamily: "'Playfair Display', serif" }}>Total Estimated Cost</span>
                <span className="text-2xl font-bold" style={{ color: "#F4A07A", fontFamily: "'Playfair Display', serif" }}>~$8,000–9,100</span>
              </div>
            </div>
            <p className="text-xs text-center mt-6" style={{ color: "rgba(245,230,200,0.5)" }}>
              Tip: Booking a 1-bedroom suite with a kitchen can save $400–600 on dining costs.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TIPS SECTION ─── */}
      <section className="py-20 md:py-28" style={{ background: "#F5E6C8" }}>
        <div className="container">
          <div className="fade-in-up text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#E8714A" }}>Before You Go</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>
              Toddler Travel Tips
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "🏠", title: "Your Westin Villa Has a Full Kitchen", body: "The Westin Ka'anapali 1BR villa has a full kitchen — fridge, oven, stovetop, dishwasher. Stock it on arrival and save $400–600 on dining costs over the week." },
              { icon: "🔊", title: "Pack a White Noise Machine", body: "Essential for nap time in a new hotel environment. A portable speaker with a white noise app works just as well." },
              { icon: "🛒", title: "Order Groceries on Arrival", body: "Use Instacart or Foodland delivery to stock milk, snacks, fruit, and easy lunch items the day you arrive." },
              { icon: "🛺", title: "Bring a Beach Wagon", body: "A foldable beach wagon is a game-changer for hauling gear for two toddlers across soft sand." },
              { icon: "✈️", title: "Book Nap-Time Flights", body: "A 10am or 1pm SFO departure means kids may sleep through much of the 5.5-hour flight." },
              { icon: "📅", title: "Book Mama's & the Lūʻau Early", body: "Mama's Fish House and the Old Lāhainā Lūʻau both sell out months in advance. Book Mama's 2–3 months ahead and the Lūʻau 6–8 weeks out. Don't wait." },
            ].map((tip, i) => (
              <div key={i} className="fade-in-up p-6 rounded-sm" style={{ background: "#FDFAF5" }}>
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>{tip.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A3728", fontWeight: 300 }}>{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALTERNATIVE OPTION BANNER ─── */}
      <section className="py-16" style={{ background: "#0A4A5C" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(232,113,74,0.9)", fontFamily: "'Lato', sans-serif" }}>Also Considering</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#FDFAF5" }}>
                May 29 – June 5 Option
              </h2>
              <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                A 7-night stay at the same Westin Ka'anapali Ocean Resort Villas — 1BR ocean-view villa with full kitchen, in-unit laundry, and free parking. May 29–June 5 means fewer crowds, lower airfare, and ~$2,700 in total savings vs. summer dates.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { label: "Villa Rental", value: "$3,077" },
                  { label: "Flights (SFO)", value: "$2,014" },
                  { label: "Est. Total", value: "~$8.3k" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#F4A07A" }}>{s.value}</div>
                    <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/westin">
                <span className="inline-block px-6 py-3 text-sm font-bold cursor-pointer transition-opacity hover:opacity-80" style={{ background: "#E8714A", color: "#FDFAF5", fontFamily: "'Lato', sans-serif", borderRadius: "2px" }}>
                  View Westin Ka'anapali Plan →
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                <img src={`${CDN}/westin_kaanapali_sunset_a758dd69.jpg`} alt="Westin Ka'anapali" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                <img src={`${CDN}/westin_kaanapali_balcony_dfa48bea.jpg`} alt="Villa balcony" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                <img src={`${CDN}/westin_kaanapali_villa_36b08058.jpg`} alt="Villa interior" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4/3" }}>
                <img src={`${CDN}/westin_kaanapali_pool_4c7ea2e2.jpg`} alt="Resort pool" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 text-center" style={{ background: "#2C1A0E" }}>
        <p className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#F4A07A" }}>
          Mahalo & Aloha 🌺
        </p>
        <p className="text-sm" style={{ color: "rgba(245,230,200,0.5)", fontWeight: 300 }}>
          Your family's Maui adventure awaits · Summer 2026
        </p>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
