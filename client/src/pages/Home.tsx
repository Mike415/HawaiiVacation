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
    subtitle: "OGG Arrival · Grocery Stop · Kids' Pool First · Ka'anapali Beach Walk",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Relaxed",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.hero,
        description: "Touch down at Kahului Airport (OGG) and let the warm Maui air wash over you. First stop: Costco or Target in Kahului (or Foodland Farms in Lahaina) to stock the villa kitchen with milk, fruit, snacks, and easy lunches — this one stop saves $400–600 across the week. After check-in, head to the resort's kids' pool first — after the 5h 23m Alaska nonstop (SFO 9:42am → OGG 12:05pm), the pool lets the toddlers burn energy without the sun and wind of the beach. Then end the day with a relaxed sunset walk along Ka'anapali Beach.",
        activities: [
          {
        title: "Honua Kai Check-In & Pool Time",
            detail: "Your 1-Bedroom Partial Ocean View suite at OUTRIGGER Honua Kai Resort & Spa features a king bed + double sofa bed, full kitchen (fridge, stovetop, oven, microwave), in-unit washer/dryer, and a furnished lanai. The resort has multiple pools including a dedicated kids' pool — perfect for burning off flight energy. Self-parking is $35/day (valet $40/day).",
            tip: "Request an upper-floor unit for the best unobstructed ocean views. Stock the kitchen on arrival: Costco (275 Ho'okele St, Kahului) is cheapest; Foodland Farms (345 Keawe St, Lahaina) is closer to the resort. Pool first, beach second — toddlers do better after a calm arrival.",
            image: IMAGES.westinMaui,
          },
          {
            title: "Ka'anapali Beach Sunset Walk",
            detail: "Stroll the 3-mile Ka'anapali Beachfront Walk at golden hour. Stop at Black Rock (Pu'u Keka'a) to watch cliff divers perform the traditional torch-lighting ceremony at dusk.",
            tip: "The cliff diving ceremony happens nightly at sunset — don't miss it!",
            image: IMAGES.hero,
          },
        ],
        logistics: "Arrive OGG → Rental car → Grocery stop (Costco/Target in Kahului or Foodland Farms in Lahaina) → Honua Kai check-in → Kids' pool first → Sunset beach walk",
        budget: "$0 activities today (villa & resort pool are included)",
        waypoints: [
          { label: "Kahului Airport (OGG)", address: "Kahului Airport, Kahului, Maui, HI", note: "Arrival & car rental", driveTime: "45 min", driveDist: "27 mi", lat: 20.8986, lng: -156.4305 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Check-in", driveTime: "5 min", driveDist: "1.5 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Black Rock (Pu'u Keka'a)", address: "Pu'u Keka'a Black Rock, Ka'anapali, Maui, HI", note: "Sunset cliff diving", driveTime: "3 min", driveDist: "0.8 mi", lat: 20.9255, lng: -156.6944 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return to resort", lat: 20.9352, lng: -156.6925 },
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
          { label: "Kahului Airport (OGG)", address: "Kahului Airport, Kahului, Maui, HI", note: "Arrival", driveTime: "10 min", driveDist: "7 mi", lat: 20.8986, lng: -156.4305 },
          { label: "Paia Town", address: "Paia, Maui, HI", note: "Lunch & browse", driveTime: "5 min", driveDist: "0.5 mi", lat: 20.9150, lng: -156.3700 },
          { label: "Waikomo Shave Ice", address: "Waikomo Shave Ice, Paia, Maui, HI", note: "First shave ice!", driveTime: "55 min", driveDist: "35 mi", lat: 20.9148, lng: -156.3698 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Check-in", lat: 20.9352, lng: -156.6925 },
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
        description: "Kapalua Bay is consistently ranked one of the best family beaches in Hawaii — protected by lava rock headlands that create nearly lagoon-like calm, perfect for your 2yo and 4yo. Arrive by 8:30am as parking fills by 10am in summer ($10–15/day). Note: if the kids are tired after Kapalua, skip Napili Bay and head back to the resort pool instead — Napili is only 5 minutes from Honua Kai and can easily be done on another afternoon. End the evening with dinner at Hula Grill.",
        activities: [
          {
            title: "Kapalua Bay",
            detail: "A crescent of golden sand sheltered by lava rock arms on both sides, creating almost zero wave action. The water is crystal clear and shallow near shore — ideal for toddlers. Snorkel gear rentals are available nearby for the adults.",
            tip: "Arrive by 8:30am — parking ($10–15/day) fills by 10am in summer. Bring a small soft cooler as there's limited shade. If kids are tired after Kapalua, skip Napili and head back to the resort pool — Napili is only 5 min away and can be done on another afternoon.",
            image: IMAGES.kapaluaFamily,
          },
          {
            title: "Hula Grill Ka'anapali — Dinner",
            detail: "End the day at Hula Grill, right on the sand at Whalers Village. The open-air Barefoot Bar is legendary — tables are literally on the beach. Fresh island fish, great mai tais, and a fantastic kids' menu. Live Hawaiian music most evenings. Reservations recommended.",
            tip: "Book for 5:00–5:30pm and request a table on the sand in the Barefoot Bar section. This timing means you're done before the overtired window for toddlers. Reservations recommended.",
            image: IMAGES.resortAerial,
          },
        ],
        logistics: "8:30am: Kapalua Bay (arrive early, parking fills by 10am) → Noon: Resort pool if kids are tired, or Napili Bay picnic → 5:00–5:30pm: Hula Grill Barefoot Bar dinner",
        budget: "~$80–120 for dinner at Hula Grill",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Start", driveTime: "14 min", driveDist: "5.5 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Kapalua Bay Beach", address: "Kapalua Bay, Lahaina, Maui, HI", note: "Morning beach", driveTime: "1 min", driveDist: "0.1 mi", lat: 20.9993, lng: -156.6726 },
          { label: "Napili Bay", address: "Napili Bay, Lahaina, Maui, HI", note: "Lunch picnic", driveTime: "15 min", driveDist: "6.4 mi", lat: 20.9920, lng: -156.6720 },
          { label: "Hula Grill Ka'anapali", address: "Hula Grill Ka'anapali, Lahaina, Maui, HI", note: "Barefoot Bar dinner", driveTime: "15 min", driveDist: "6.4 mi", lat: 20.9248, lng: -156.6929 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return to resort", lat: 20.9352, lng: -156.6925 },
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
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Start", driveTime: "3 min", driveDist: "0.8 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Black Rock (Pu'u Keka'a)", address: "Pu'u Keka'a Black Rock, Ka'anapali, Maui, HI", note: "Beach morning", driveTime: "2 min", driveDist: "0.5 mi", lat: 20.9255, lng: -156.6944 },
          { label: "Leilani's on the Beach", address: "Leilani's on the Beach, Whalers Village, Ka'anapali, Maui, HI", note: "Lunch", driveTime: "5 min", driveDist: "1 mi", lat: 20.9220, lng: -156.6920 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return to resort", lat: 20.9352, lng: -156.6925 },
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
            tip: "Arrive right at 9am opening — before the tour buses arrive. Kids under 3 are free; 4yo needs a child ticket (~$25). Allow about 2 hours — the touch pools and turtle lagoon are the toddler highlights.",
            image: IMAGES.oceanCenter2,
            cost: "~$55/adult · Under 3 free",
          },
          {
            title: "Lāhainā Town, Banyan Tree & Ululani's Shave Ice",
            detail: "Stroll down Front Street, lined with art galleries, boutique shops, and restaurants. Visit the famous 150-year-old Banyan Tree — the largest in the US. Then head to Ululani's Hawaiian Shave Ice — the gold standard on Maui. Ultra-fine ice, natural syrups, and add-ons like mochi, azuki beans, and ice cream inside. Note: Front Street gets hot and crowded by midday. Do the Banyan Tree + shave ice, then head back to the resort — sunset dinners in Lāhainā often mean a late bedtime for toddlers.",
            tip: "Order the 'full experience' — shave ice with ice cream inside and mochi on top. Kids will lose their minds.",
            image: IMAGES.lahainaStreet,
          },
        ],
        logistics: "9am: Maui Ocean Center (Ma'alaea) → 11:30am: Drive to Lāhainā (20 min) → Lunch & Banyan Tree stroll → Ululani's shave ice → Waterfront dinner",
        budget: "~$110–130 for Ocean Center (2 adults) + dining + shave ice",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Start", driveTime: "20 min", driveDist: "12 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Maui Ocean Center", address: "Maui Ocean Center, Ma'alaea, Maui, HI", note: "9am opening", driveTime: "20 min", driveDist: "11 mi", lat: 20.7918, lng: -156.5072 },
          { label: "Lahaina Banyan Tree", address: "Lahaina Banyan Court Mall, Lahaina, Maui, HI", note: "Iconic tree + lunch", driveTime: "2 min", driveDist: "0.3 mi", lat: 20.8726, lng: -156.6784 },
          { label: "Ululani's Shave Ice Lahaina", address: "Ululani's Hawaiian Shave Ice, Lahaina, Maui, HI", note: "Shave ice!", driveTime: "20 min", driveDist: "11 mi", lat: 20.8747, lng: -156.6786 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return to resort", lat: 20.9352, lng: -156.6925 },
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
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Start", driveTime: "18 min", driveDist: "10 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Maui Tropical Plantation", address: "Maui Tropical Plantation, Waikapu, Maui, HI", note: "Tram tour + lunch", driveTime: "15 min", driveDist: "8 mi", lat: 20.8360, lng: -156.5300 },
          { label: "Lahaina Banyan Tree", address: "Lahaina Banyan Court Mall, Lahaina, Maui, HI", note: "Shave ice & stroll", driveTime: "18 min", driveDist: "10 mi", lat: 20.8726, lng: -156.6784 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return", lat: 20.9352, lng: -156.6925 },
        ],
        mapCenter: { lat: 20.8893, lng: -156.6300 },
        mapZoom: 11,
      },
    ],
  },
  {
    id: "day4",
    number: "04",
    title: "Merriman's Kapalua & North Shore",
    subtitle: "Merriman's Kapalua Lunch · Kapalua Bay Beach · Monkeypod Option",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Special Lunch",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.kapaluaAerial,
        description: "Today is built around Merriman's Kapalua — one of Maui's finest oceanfront restaurants, just 10 minutes from Honua Kai. Perched above Kapalua Bay with sweeping Pacific views, Chef Peter Merriman pioneered Hawaii Regional Cuisine and sources nearly everything from local farms and fishermen. It's a world-class meal without the 45-minute drive or $80–120/person price tag of Mama's. Book online at merrimanshawaii.com — lunch is easier to get than dinner. After lunch, spend the afternoon at Kapalua Bay Beach, one of the calmest and most beautiful beaches on Maui.",
        activities: [
          {
            title: "Merriman's Kapalua — Oceanfront Lunch",
            detail: "Perched above Kapalua Bay with sweeping ocean views, Merriman's is one of Maui's finest farm-to-table restaurants. Chef Peter Merriman pioneered Hawaii Regional Cuisine and sources nearly everything from local farms and fishermen. The seared ahi, fresh catch, and Kula greens salad are standouts. Lunch is more relaxed than dinner and easier to book. Just 10 minutes from Honua Kai.",
            tip: "Book online at merrimanshawaii.com — lunch reservations are easier to get than dinner. Request a window table for the best ocean views over Kapalua Bay. Dress code: resort casual.",
            image: IMAGES.kapaluaFamily,
            cost: "~$50–80/person · Reservations recommended",
          },
          {
            title: "Kapalua Bay Beach — Afternoon",
            detail: "After lunch, walk down to Kapalua Bay Beach — consistently rated one of the best beaches in the US. The crescent-shaped bay is sheltered by two lava-rock points, making the water exceptionally calm and clear. Perfect for toddlers. Parking: $10–15/day in the lot, fills by 10am in summer — arrive early or come after lunch when it thins out.",
            tip: "Arrive at the beach by 1pm after lunch — the morning crowds have thinned and the water is warm. The left side of the bay near the rocks has the most shade.",
            image: IMAGES.kapaluaAerial,
            cost: "Free · Parking ~$10–15",
          },
        ],
        logistics: "10 min drive to Merriman's Kapalua for lunch → Kapalua Bay Beach afternoon → Return to resort by 3pm",
        budget: "~$100–160 for 2 adults at Merriman's · Parking ~$10–15",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Start", driveTime: "10 min", driveDist: "5 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Merriman's Kapalua", address: "Merriman's Kapalua, 1 Bay Club Pl, Lahaina, Maui, HI", note: "Oceanfront lunch", driveTime: "5 min", driveDist: "2 mi", lat: 21.0010, lng: -156.6680 },
          { label: "Kapalua Bay Beach", address: "Kapalua Bay Beach, Kapalua, Maui, HI", note: "Afternoon beach", driveTime: "10 min", driveDist: "5 mi", lat: 20.9990, lng: -156.6680 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return", lat: 20.9352, lng: -156.6925 },
        ],
        mapCenter: { lat: 20.9640, lng: -156.6810 },
        mapZoom: 12,
      },
      {
        label: "Alternative: Mama's Fish House",
        tag: "Bucket List Option",
        tagColor: "#E8714A",
        heroImage: IMAGES.lahainaTown,
        description: "If you want the full bucket-list Maui experience, Mama's Fish House on the North Shore is legendary — consistently ranked one of the top restaurants in the entire United States. The menu lists the name of the fisherman who caught each fish, and the setting in a 1940s oceanfront coconut grove in Paia is magical. Fair warning: this is the hardest day with toddlers — 45 min each way, ~$80–120/person, and a long lunch. Book 2–3 months in advance and plan to be back at the resort by 3pm.",
        activities: [
          {
            title: "Mama's Fish House — Lunch",
            detail: "Located in Paia on the North Shore, Mama's Fish House is a legendary oceanfront restaurant where the menu lists the name of the fisherman who caught each fish. The setting — a 1940s beach house surrounded by tropical gardens and coconut palms — is magical. Lunch is slightly easier to book than dinner. The whole fish, fresh catch, and coconut shrimp are standouts. Dress code: resort casual.",
            tip: "Book 2–3 months in advance online at mamasfishhouse.com. Request a window or garden table. Lunch is easier to get than dinner. Plan to be back at the resort by 3pm for toddler nap — this is a long day.",
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
        budget: "~$200–280 for 2 adults at Mama's Fish House · Plan resort return by 3pm for toddler nap",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Start", driveTime: "45 min", driveDist: "28 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Mama's Fish House", address: "Mama's Fish House, 799 Poho Pl, Paia, Maui, HI", note: "Legendary lunch", driveTime: "5 min", driveDist: "1.5 mi", lat: 20.9284, lng: -156.3630 },
          { label: "Ho'okipa Beach Lookout", address: "Ho'okipa Beach Park, Paia, Maui, HI", note: "Turtles & surfers", driveTime: "45 min", driveDist: "28 mi", lat: 20.9322, lng: -156.3493 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return", lat: 20.9352, lng: -156.6925 },
        ],
        mapCenter: { lat: 20.9281, lng: -156.5200 },
        mapZoom: 10,
      },
    ],
  },
  {
    id: "day5",
    number: "05",
    title: "Kahekili Highway Scenic Drive",
    subtitle: "West Maui Mountains · Kahakuloa Village · Poke Picnic at Ka'anapali",
    plans: [
      {
        label: "Recommended Plan",
        tag: "Scenic Drive",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.kahekili,
        description: "The Kahekili Highway (Route 340) is a narrow, winding coastal road that hugs the dramatic cliffs of West Maui. Important note: the road has sheer drops and very few guardrails, and there are no bathrooms along the route. With two car seats and a 2-year-old, the full loop can be stressful. Recommended approach: drive only to the Kahakuloa Village overlook (30–35 min from Ka'anapali), then turn around. The views are stunning and you'll be back at the resort by noon for a relaxed poke picnic on Ka'anapali Beach.",
        activities: [
          {
            title: "Kahekili Highway to Kahakuloa Overlook",
            detail: "Drive north from Ka'anapali on Route 340 — the road quickly becomes dramatic, hugging sheer cliffs above the Pacific. Stop at the Kahakuloa Village overlook for sweeping views of the remote valley and the rugged West Maui Mountains. This is one of the most striking viewpoints on the island, and it takes just 30–35 minutes from Honua Kai. Turn around here — the road beyond gets significantly narrower and has no bathrooms.",
            tip: "Drive to Kahakuloa Village overlook and turn around — you get the best scenery without the stressful narrow sections. Go early (8am) before it gets hot. No guardrails on parts of this road — take it slow.",
            image: IMAGES.kahekili2,
          },
          {
            title: "Foodland Farms Poke Picnic at Ka'anapali Beach",
            detail: "On the way back, stop at Foodland Farms in Lahaina for fresh poke bowls to go — one of the best-value meals on Maui. Grab the ahi shoyu, spicy ahi, and some local chips and drinks, then head back to Ka'anapali Beach for a relaxed afternoon picnic right in front of Honua Kai. Let the kids play in the sand while you eat.",
            tip: "Foodland Farms poke is freshest before noon — go by 11:30am. Ka'anapali Beach in front of Honua Kai has a gentle shore — perfect for a relaxed afternoon after a morning drive.",
            image: IMAGES.napaliBay,
            cost: "~$15–25/person for poke bowls",
          },
        ],
        logistics: "8am: Kahekili Highway to Kahakuloa overlook → Turn around → 11:30am: Foodland Farms poke stop → Noon: Ka'anapali Beach picnic → Afternoon: resort pool",
        budget: "~$30–50 for poke bowls and snacks (scenic drive is free)",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Depart 8am", driveTime: "35 min", driveDist: "18 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Kahakuloa Village Overlook", address: "Kahakuloa, Maui, HI", note: "Turn around here", driveTime: "35 min", driveDist: "18 mi", lat: 21.0090, lng: -156.5760 },
          { label: "Foodland Farms Lahaina", address: "Foodland Farms, Lahaina, Maui, HI", note: "Poke bowls to go", driveTime: "10 min", driveDist: "5 mi", lat: 20.8784, lng: -156.6760 },
          { label: "Ka'anapali Beach", address: "Ka'anapali Beach, Lahaina, Maui, HI", note: "Beach picnic", driveTime: "5 min", driveDist: "3 mi", lat: 20.9281, lng: -156.6950 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return to resort", lat: 20.9352, lng: -156.6925 },
        ],
        mapCenter: { lat: 20.9700, lng: -156.6350 },
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
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Depart 7am", driveTime: "50 min", driveDist: "32 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Twin Falls", address: "Twin Falls, Hana Highway, Haiku, Maui, HI", note: "Waterfall hike", driveTime: "40 min", driveDist: "19 mi", lat: 20.9100, lng: -156.2780 },
          { label: "Ke'anae Peninsula", address: "Ke'anae Peninsula, Ke'anae, Maui, HI", note: "Banana bread stand", driveTime: "1 hr 20 min", driveDist: "51 mi", lat: 20.8580, lng: -156.1560 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return by noon", lat: 20.9352, lng: -156.6925 },
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
            detail: "The most authentic luau on Maui, held on the oceanfront in Lāhainā. The feast includes kalua pig, poi, lomi salmon, haupia, and much more. The hula show tells the story of Hawaii's history from ancient Polynesia to modern times. New table-service format means food comes to you — great with toddlers.",
            tip: "Gates open 5:15pm — arrive right at opening so your kids can explore the cultural village before they get hungry or tired. Children under 3 are free; your 4-year-old needs a child ticket (~$75). Book 6–8 weeks out — it sells out nightly in summer.",
            image: IMAGES.luau,
            cost: "~$230/adult · Under 3 free",
          },
        ],
        logistics: "Morning: Free beach/pool time → 4:30pm: Drive to Lāhainā → 5:15pm: Lūʻau gates open → 9pm: Return to resort",
        budget: "~$535 for 2 adults + 1 child (4yo) · 2yo free · Arrive at 5:15pm gate opening",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Morning beach day", driveTime: "10 min", driveDist: "4 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Old Lāhainā Lūʻau", address: "Old Lahaina Luau, 1251 Front St, Lahaina, Maui, HI", note: "Gates open 5:15pm", driveTime: "10 min", driveDist: "4 mi", lat: 20.8770, lng: -156.6820 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return after luau", lat: 20.9352, lng: -156.6925 },
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
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Morning beach", driveTime: "3 min", driveDist: "0.7 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Hyatt Regency Maui", address: "Hyatt Regency Maui Resort and Spa, Ka'anapali, Maui, HI", note: "Drums of the Pacific Luau", driveTime: "3 min", driveDist: "0.7 mi", lat: 20.9220, lng: -156.6920 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return after luau", lat: 20.9352, lng: -156.6925 },
        ],
        mapCenter: { lat: 20.9281, lng: -156.6900 },
        mapZoom: 14,
      },
    ],
  },
  {
    id: "day7",
    number: "07",
    title: "South Maui Day",
    subtitle: "Baby Beach · Big Beach (Makena) · Maui Brewing Co. Kihei",
    plans: [
      {
        label: "Recommended Plan",
        tag: "South Maui",
        tagColor: "#0A4A5C",
        heroImage: IMAGES.heroBeach,
        description: "A full day exploring South Maui — the island's sunniest, driest coast. Start at Baby Beach in Lahaina for a calm, toddler-perfect morning splash, then drive south to Big Beach (Makena State Park) for the most dramatic stretch of sand on Maui. End the day at Maui Brewing Company in Kihei — excellent craft beer, great food, and one of the most family-friendly brewpubs in Hawaii.",
        activities: [
          {
            title: "Baby Beach, Lahaina",
            detail: "A calm, shallow lagoon created by a natural rock breakwater just off the main road in Lahaina. The water is barely knee-deep for 50 yards out — perfect for a 2yo and 4yo. No facilities, but street parking is easy and it's rarely crowded. A great morning stop before the drive south.",
            tip: "Park on Puunoa Place. The breakwater creates a natural pool — keep kids on the inside (lagoon side) away from the open ocean. Best before 10am before it gets hot.",
            image: IMAGES.kaanapaliKids,
          },
          {
            title: "Big Beach (Oneloa Beach) — Makena State Park",
            detail: "One of the most spectacular beaches in all of Hawaii — a sweeping half-mile crescent of golden sand with dramatic views of Molokini and Kaho'olawe. The surf here is bigger than Ka'anapali, so keep toddlers in the shallow shore break. Little Beach (clothing-optional) is a short scramble over the lava rock at the north end — skip it with kids. Facilities include restrooms and a small parking lot.",
            tip: "Arrive by 9:30am — the lot fills by 10:30am in summer. The south end of the beach near the lava rock is calmer. Bring reef-safe sunscreen — this beach has zero shade.",
            image: IMAGES.heroBeach,
            cost: "Free · Parking fills early",
          },
          {
            title: "Maui Brewing Company — Kihei",
            detail: "Maui's flagship craft brewery, located in Kihei with a massive open-air taproom, fire pits, and a full food menu. The Bikini Blonde Lager and CoCoNut PorTeR are the classics. The food is excellent — fish tacos, burgers, and a solid kids' menu. Very family-friendly with high chairs and a relaxed vibe. Live music some evenings.",
            tip: "Happy hour is 3–5pm daily. Sit on the covered outdoor patio — it's breezy and the kids can move around. The brewery tour is available if you're curious about the production side.",
            image: IMAGES.lahainaTown,
            cost: "~$60–90 for 2 adults + kids",
          },
        ],
        logistics: "9am: Baby Beach Lahaina → 10am: Drive south (35 min) → 10:30am: Big Beach Makena → 12:30–3pm: Nap window at resort → 3pm: Drive to Kihei (25 min) → 3–5pm: Maui Brewing Co. happy hour",
        budget: "~$60–90 for Maui Brewing Co. + snacks",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Start", driveTime: "5 min", driveDist: "2 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Baby Beach, Lahaina", address: "Baby Beach, Puunoa Place, Lahaina, Maui, HI", note: "Calm toddler lagoon", driveTime: "35 min", driveDist: "21 mi", lat: 20.8770, lng: -156.6820 },
          { label: "Big Beach (Makena State Park)", address: "Oneloa Beach, Makena State Park, Maui, HI", note: "Dramatic big beach", driveTime: "25 min", driveDist: "14 mi", lat: 20.6350, lng: -156.4420 },
          { label: "Maui Brewing Company", address: "Maui Brewing Company, 605 Lipoa Pkwy, Kihei, Maui, HI", note: "Happy hour 3–5pm", driveTime: "20 min", driveDist: "11 mi", lat: 20.7230, lng: -156.4460 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return", lat: 20.9352, lng: -156.6925 },
        ],
        mapCenter: { lat: 20.7800, lng: -156.5500 },
        mapZoom: 10,
      },
      {
        label: "Alternative: Kihei Caffe + Kalama Park",
        tag: "Easy & Local",
        tagColor: "#E8714A",
        heroImage: IMAGES.kaanapaliKids,
        description: "A low-key South Maui morning built around whale-shaped pancakes and a playground. Kihei Caffe is a beloved local breakfast spot — super casual, cash-friendly, and famous for its whale pancakes that will make your 4yo's entire trip. Kalama Park playground is directly across the street for post-pancake energy burns. Pair with a visit to Maui Brewing Co. for lunch or happy hour.",
        activities: [
          {
            title: "Kihei Caffe — Whale Pancakes",
            detail: "A beloved local breakfast institution in Kihei. Cash-friendly, super casual, and famous for whale-shaped pancakes that are a guaranteed hit with toddlers. Expect a short wait on weekends. The breakfast burritos and loco moco are also excellent for adults.",
            tip: "Arrive by 7:30am to avoid the wait. Cash preferred. Order the whale pancakes for the kids — it's the whole point.",
            image: IMAGES.kaanapaliKids,
            cost: "~$30–50 for the family",
          },
          {
            title: "Kalama Park Playground",
            detail: "A large, well-maintained county park directly across the street from Kihei Caffe. Playground equipment, open grass, picnic tables, and a small beach area. Perfect for burning off post-pancake energy. The park also has clean restrooms and a skate park.",
            tip: "The playground has good shade in the morning. The beach at Kalama Park is calm and good for wading.",
            image: IMAGES.resortFamily,
          },
          {
            title: "Maui Brewing Company — Lunch or Happy Hour",
            detail: "After the park, head to Maui Brewing Co. (10 min from Kalama Park) for lunch or happy hour. Excellent craft beer, fish tacos, and a solid kids' menu in a massive open-air taproom.",
            tip: "Happy hour is 3–5pm daily. The outdoor patio is breezy and kid-friendly.",
            image: IMAGES.lahainaTown,
            cost: "~$60–90 for 2 adults + kids",
          },
        ],
        logistics: "7:30am: Kihei Caffe breakfast → Kalama Park playground → Maui Brewing Co. lunch or happy hour → Drive back to Ka'anapali (35 min)",
        budget: "~$90–140 for breakfast + Maui Brewing Co.",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Start", driveTime: "35 min", driveDist: "20 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Kihei Caffe", address: "Kihei Caffe, 1945 S Kihei Rd, Kihei, Maui, HI", note: "Whale pancakes!", driveTime: "2 min", driveDist: "0.1 mi", lat: 20.7460, lng: -156.4500 },
          { label: "Kalama Park", address: "Kalama Park, S Kihei Rd, Kihei, Maui, HI", note: "Playground across the street", driveTime: "10 min", driveDist: "5 mi", lat: 20.7455, lng: -156.4490 },
          { label: "Maui Brewing Company", address: "Maui Brewing Company, 605 Lipoa Pkwy, Kihei, Maui, HI", note: "Happy hour 3–5pm", driveTime: "35 min", driveDist: "20 mi", lat: 20.7230, lng: -156.4460 },
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Return", lat: 20.9352, lng: -156.6925 },
        ],
        mapCenter: { lat: 20.8200, lng: -156.4800 },
        mapZoom: 11,
      },
    ],
  },
  {
    id: "day8",
    number: "08",
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
            detail: "Wake up early for a quiet morning walk along the beach before checkout. The light is golden, the beach is uncrowded, and the ocean is calm. A perfect, peaceful goodbye to Maui. Remember: fill up the rental car before heading to OGG — gas stations near the airport charge a significant premium.",
            tip: "Take a family photo at Black Rock (Pu'u Keka'a) — the same spot you saw the cliff divers on Day 1.",
            image: IMAGES.heroBeach,
          },
          {
            title: "Shave Ice & Depart",
            detail: "Stop at Ululani's Hawaiian Shave Ice in Lahaina for one last treat before the drive to OGG. The airport is about 45 minutes from Ka'anapali — allow extra time for car seat return and check-in.",
            tip: "Fill up at Costco gas (Kahului) or any station in Ka'anapali/Lahaina before heading to OGG — stations right near the airport charge a significant premium.",
            image: IMAGES.kaanapaliKids,
          },
        ],
        logistics: "Morning: Beach walk → Checkout by 9am → Shave ice in Lahaina → OGG Airport (Alaska AS departs 10:33am)",
        budget: "~$20–30 for shave ice and snacks",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Final beach walk & checkout", driveTime: "10 min", driveDist: "4 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Ululani's Shave Ice Lahaina", address: "Ululani's Hawaiian Shave Ice, Lahaina, Maui, HI", note: "Last shave ice", driveTime: "45 min", driveDist: "27 mi", lat: 20.8747, lng: -156.6786 },
          { label: "Kahului Airport (OGG)", address: "Kahului Airport, Kahului, Maui, HI", note: "Depart", lat: 20.8986, lng: -156.4305 },
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
            detail: "Kapalua Bay is the perfect farewell beach — calm, clear, and beautiful. The kids can wade in the shallow water one last time while you soak in the scenery. it's a 10-minute drive north of Honua Kai. Arrive early before it fills up.",
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
        logistics: "7am: Kapalua Bay final swim → 8am: Checkout → Ululani's shave ice (Kahului) → OGG Airport (Alaska AS departs 10:33am)",
        budget: "~$20–30 for shave ice and coffee",
        waypoints: [
          { label: "Honua Kai Resort & Spa", address: "OUTRIGGER Honua Kai Resort & Spa, 130 Kai Malina Pkwy, Lahaina, Maui, HI", note: "Checkout", driveTime: "14 min", driveDist: "5.5 mi", lat: 20.9352, lng: -156.6925 },
          { label: "Kapalua Bay Beach", address: "Kapalua Bay, Lahaina, Maui, HI", note: "Final swim", driveTime: "14 min", driveDist: "5.5 mi", lat: 20.9993, lng: -156.6726 },
          { label: "Ululani's Shave Ice Kahului", address: "Ululani's Hawaiian Shave Ice, 333 Dairy Rd, Kahului, Maui, HI", note: "Last shave ice", driveTime: "5 min", driveDist: "2 mi", lat: 20.8875, lng: -156.4620 },
          { label: "Kahului Airport (OGG)", address: "Kahului Airport, Kahului, Maui, HI", note: "Depart", lat: 20.8986, lng: -156.4305 },
        ],
        mapCenter: { lat: 20.9281, lng: -156.6500 },
        mapZoom: 11,
      },
    ],
  },
];

const budgetRows = [
  { item: "Flights (SFO → OGG, 4 pax, round-trip — Alaska Airlines nonstop, May 28 & Jun 5)", cost: "$1,597" },
  { item: "Honua Kai Resort & Spa — 1BR Partial Ocean View (May 28–Jun 5, via Fora Travel)", cost: "$3,274" },
  { item: "Taxes, resort fee & local tax (Honua Kai)", cost: "$1,428" },
  { item: "Car Rental (7 days, SUV)", cost: "~$700" },
  { item: "Groceries & villa meals (full kitchen saves on dining)", cost: "~$400–500" },
  { item: "Dining out (Merriman's, Hula Grill, Leilani's, Monkeypod, etc.)", cost: "~$600–800" },
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
          <DayMap waypoints={plan.waypoints} />
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
            May 28–Jun 5, 2026 · Honua Kai Resort & Spa · Family of 4 · SFO → OGG
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#FDFAF5" }}>
            Aloha, Maui.
          </h1>
          <p className="text-xl md:text-2xl max-w-xl" style={{ color: "#F5E6C8", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
            An 8-day family escape at the OUTRIGGER Honua Kai Resort & Spa — beaches, great food, and memories that last a lifetime.
          </p>
          <div className="mt-8 flex gap-6 flex-wrap">
            {[["8","Days"],["4","Travelers"],["~$9–10k","Est. Budget"]].map(([val, label]) => (
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

      {/* ─── DAY AT A GLANCE ─── */}
      <section className="py-14 md:py-20" style={{ background: "#FDFAF5", borderBottom: "1px solid #E8D5B0" }}>
        <div className="container">
          <div className="fade-in-up text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#E8714A", fontFamily: "'Lato', sans-serif" }}>Your Week at a Glance</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>7 Days in Maui</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {[
              {
                num: "01", title: "Arrival Day", icon: "✈️",
                schedule: [
                  { time: "12:05pm", label: "Land at OGG (Alaska AS nonstop)" },
                  { time: "↓ 15 min", label: "drive", drive: true },
                  { time: "12:30pm", label: "Costco / Foodland grocery run" },
                  { time: "↓ 35 min", label: "drive", drive: true },
                  { time: "2pm", label: "Check in to Honua Kai suite" },
                  { time: "2–4pm", label: "Kids' pool & settle in" },
                  { time: "5–6pm", label: "Sunset walk on Ka'anapali Beach" },
                  { time: "6:30pm", label: "Dinner at Monkeypod Ka'anapali" },
                ],
              },
              {
                num: "02", title: "Ka'anapali & Napili", icon: "🏖️",
                schedule: [
                  { time: "8:30am", label: "Kapalua Bay Beach (arrive early)" },
                  { time: "↓ 5 min", label: "drive", drive: true },
                  { time: "11:30am", label: "Napili Bay picnic (or resort pool)" },
                  { time: "12:30–3pm", label: "🛏 Nap window at villa" },
                  { time: "↓ 10 min", label: "drive", drive: true },
                  { time: "5–5:30pm", label: "Hula Grill Barefoot Bar dinner" },
                ],
              },
              {
                num: "03", title: "Lāhainā Town", icon: "🌺",
                schedule: [
                  { time: "9am", label: "Maui Ocean Center (Ma'alaea)" },
                  { time: "↓ 20 min", label: "drive", drive: true },
                  { time: "11:30am", label: "Lāhainā Banyan Tree stroll" },
                  { time: "12pm", label: "Ululani's shave ice" },
                  { time: "12:30–3pm", label: "🛏 Nap window — back to resort" },
                  { time: "↓ 10 min", label: "drive", drive: true },
                  { time: "5:30pm", label: "Leilani's on the Beach dinner" },
                ],
              },
              {
                num: "04", title: "Kapalua & Merriman's", icon: "🍽️",
                schedule: [
                  { time: "8:30am", label: "Kapalua Bay Beach (early arrival)" },
                  { time: "↓ 10 min", label: "drive", drive: true },
                  { time: "11:30am", label: "Merriman's Kapalua lunch" },
                  { time: "↓ 2 min", label: "walk", drive: true },
                  { time: "1pm", label: "Kapalua Bay Beach afternoon" },
                  { time: "↓ 10 min", label: "drive", drive: true },
                  { time: "3pm", label: "Resort pool & nap window" },
                ],
              },
              {
                num: "05", title: "Scenic West Maui", icon: "🏔️",
                schedule: [
                  { time: "8am", label: "Depart — Kahekili Hwy (Rte 340)" },
                  { time: "↓ 35 min", label: "drive", drive: true },
                  { time: "8:35am", label: "Kahakuloa overlook — turn around" },
                  { time: "↓ 35 min", label: "drive back", drive: true },
                  { time: "11:30am", label: "Foodland Farms poke stop" },
                  { time: "Noon", label: "Ka'anapali Beach poke picnic" },
                  { time: "12:30–3pm", label: "🛏 Nap window at resort" },
                ],
              },
              {
                num: "06", title: "Lūʻau Night", icon: "🌴",
                schedule: [
                  { time: "8–11am", label: "Ka'anapali Beach morning" },
                  { time: "11am–4pm", label: "Resort pool & nap window" },
                  { time: "4:30pm", label: "Drive to Old Lāhainā Lūʻau" },
                  { time: "↓ 10 min", label: "drive", drive: true },
                  { time: "5:15pm", label: "Lūʻau gates open — arrive now" },
                  { time: "9pm", label: "Drive back to resort" },
                ],
              },
              {
                num: "07", title: "South Maui Day", icon: "🍺",
                schedule: [
                  { time: "9am", label: "Baby Beach, Lahaina" },
                  { time: "↓ 35 min", label: "drive south", drive: true },
                  { time: "10:30am", label: "Big Beach (Makena State Park)" },
                  { time: "↓ 35 min", label: "drive back to resort", drive: true },
                  { time: "12:30–3pm", label: "🛏 Nap window at resort" },
                  { time: "↓ 25 min", label: "drive to Kihei", drive: true },
                  { time: "3–5pm", label: "Maui Brewing Co. happy hour" },
                ],
              },
              {
                num: "08", title: "Departure Day", icon: "🌅",
                schedule: [
                  { time: "6–7am", label: "Final sunrise walk on beach" },
                  { time: "7:30am", label: "Checkout — pack & load car" },
                  { time: "↓ 35 min", label: "drive", drive: true },
                  { time: "8:15am", label: "Ululani's shave ice (Kahului)" },
                  { time: "↓ 5 min", label: "drive", drive: true },
                  { time: "8:45am", label: "Fill gas tank near OGG" },
                  { time: "9:30am", label: "Return car & check in at OGG" },
                  { time: "10:33am", label: "Depart OGG → SFO (Alaska nonstop)" },
                ],
              },
            ].map((d) => (
              <button
                key={d.num}
                onClick={() => document.getElementById(`day${parseInt(d.num)}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="fade-in-up text-left p-4 rounded-sm transition-all hover:shadow-md group"
                style={{ background: "#FDFAF5", border: "1px solid #E8D5B0", cursor: "pointer" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{d.icon}</span>
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#E8714A", fontFamily: "'Lato', sans-serif" }}>DAY {d.num}</span>
                </div>
                <h3 className="text-sm font-bold mb-3 group-hover:underline" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>{d.title}</h3>
                <div className="space-y-1">
                  {d.schedule.map((s, si) => (
                    s.drive
                      ? <div key={si} className="flex items-center gap-1.5 py-0.5">
                          <div className="w-px h-4 mx-[7px] flex-shrink-0" style={{ background: "#D4B896" }} />
                          <span className="text-[10px] italic" style={{ color: "#A08060", fontFamily: "'Lato', sans-serif" }}>{s.time} {s.label}</span>
                        </div>
                      : <div key={si} className="flex items-start gap-2">
                          <span className="text-[10px] font-bold flex-shrink-0 mt-px w-14 text-right" style={{ color: "#E8714A", fontFamily: "'Lato', sans-serif" }}>{s.time}</span>
                          <span className="text-[10px] leading-snug" style={{ color: "#4A3728", fontWeight: 400 }}>{s.label}</span>
                        </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
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
              Estimated costs for a family of 4 (2 adults + 4yo + 2yo), 8 days / 7 nights in Ka'anapali, Maui.
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
                <span className="text-2xl font-bold" style={{ color: "#F4A07A", fontFamily: "'Playfair Display', serif" }}>~$9,300–10,500</span>
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
              { icon: "🏠", title: "Your Honua Kai Suite Has a Full Kitchen", body: "The Honua Kai 1BR suite has a full kitchen — fridge, stovetop, oven, microwave, and in-unit washer/dryer. Stock it on arrival and save $400–600 on dining costs over the week. Parking is $35/day self-park or $40/day valet." },
              { icon: "🔊", title: "Pack a White Noise Machine", body: "Essential for nap time in a new hotel environment. A portable speaker with a white noise app works just as well." },
              { icon: "🛒", title: "Order Groceries on Arrival", body: "Use Instacart or Foodland delivery to stock milk, snacks, fruit, and easy lunch items the day you arrive." },
              { icon: "🛺", title: "Bring a Beach Wagon", body: "A foldable beach wagon is a game-changer for hauling gear for two toddlers across soft sand." },
              { icon: "✈️", title: "Book Nap-Time Flights", body: "Your Alaska nonstop departs SFO at 9:42am and lands OGG at 12:05pm — a great window for kids to nap on the 5h 23m flight." },
              { icon: "📅", title: "Book Mama's & the Lūʻau Early", body: "Mama's Fish House and the Old Lāhainā Lūʻau both sell out months in advance. Book Mama's 2–3 months ahead and the Lūʻau 6–8 weeks out. Don't wait." },
              { icon: "🅿️", title: "Parking Notes", body: "Kapalua Bay lot: $10–15/day, fills by 10am in summer — arrive by 8:30am. Napili Bay: street parking only, limited spaces. Baby Beach (Lahaina or Spreckelsville) is a calm backup if Napili is full." },
              { icon: "😴", title: "Protect the Nap Window", body: "Build 12:30–3pm into every day as a nap/rest window. Toddlers will have much better evenings if you're back at the villa by early afternoon. Don't overschedule mornings." },
              { icon: "🌧️", title: "Rain & Heat Backups", body: "If it's raining or too hot: Maui Ocean Center (9am, kids under 3 free), Whalers Village shops (free hula show Tue/Thu 5:30pm), or the Honua Kai resort pool. These three cover any bad-weather day on the itinerary." },
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

      {/* ─── OTHER THINGS TO CONSIDER ─── */}
      <section className="py-20 md:py-28" style={{ background: "#FDFAF5" }}>
        <div className="container">
          <div className="fade-in-up text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#E8714A" }}>While You're There</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>Other Things to Consider</h2>
            <p className="mt-3 max-w-xl mx-auto text-base" style={{ color: "#6B5744", fontWeight: 300 }}>Extras that didn't make the main itinerary but are worth knowing about — especially with two toddlers in tow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🐢",
                category: "Wildlife",
                title: "Hawaiian Green Sea Turtles",
                body: "Honu (sea turtles) are a near-daily sight on Ka'anapali Beach and at Black Rock. They rest on the sand in the late afternoon — keep a respectful 10-foot distance and let the kids watch from nearby. No touching, ever.",
              },
              {
                icon: "🌋",
                category: "Day Trip",
                title: "Haleakalā Sunrise (Skip for Now)",
                body: "The famous Haleakalā summit sunrise requires a 2am wake-up and a 2-hour drive. With a 2yo and 4yo, this is not the trip for it — but worth knowing it exists. The crater is stunning at any time of day if you want to drive up for the view without the sunrise rush.",
              },
              {
                icon: "🛍️",
                category: "Shopping",
                title: "Whalers Village & The Shops at Wailea",
                body: "Whalers Village at Ka'anapali has a free hula show Tuesday & Thursday at 5:30pm — great for toddlers. The Shops at Wailea (30 min south) is a higher-end outdoor mall with a good mix of restaurants and a nice open-air layout for strolling.",
              },
              {
                icon: "🍦",
                category: "Food",
                title: "Shave Ice — Don't Miss It",
                body: "Ululani's Hawaiian Shave Ice is the gold standard on Maui. Hit the Lahaina location on Day 3, the Kahului location near OGG on Day 7, or the Kihei location if you venture south. Order with mochi balls and condensed milk on top. The kids will love it.",
              },
              {
                icon: "🌊",
                category: "Beaches",
                title: "Baby Beach (Lahaina) for the 2yo",
                body: "If Napili Bay is too wavy for the 2yo, Baby Beach in Lahaina is a calm, shallow lagoon protected by a breakwater — perfect for very young kids. It's small and not scenic, but the water is completely flat. Good backup on any beach day.",
              },
              {
                icon: "🌅",
                category: "Experience",
                title: "Sunrise at Ka'anapali Beach",
                body: "If anyone is up early (toddlers often are), a 6am walk on Ka'anapali Beach is magical — almost empty, golden light, and honu on the sand. Bring a coffee from the villa and let the kids splash at the water's edge. One of the best free experiences on the island.",
              },
              {
                icon: "🎶",
                category: "Free Entertainment",
                title: "Cliff Dive Ceremony at Black Rock",
                body: "Every evening at sunset, a traditional torch-lighting and cliff dive ceremony takes place at Pu'u Keka'a (Black Rock) — just a short walk from Honua Kai along Ka'anapali Beach. It's free, kid-friendly, and a beautiful Maui tradition. Gather on the beach around 6pm.",
              },
              {
                icon: "🏥",
                category: "Good to Know",
                title: "Maui Memorial Medical Center",
                body: "The main hospital is Maui Memorial Medical Center in Wailuku (~20 min from Ka'anapali). For non-emergency care, Urgent Care Maui in Wailuku and Lahaina Urgent Care are good options. Bring any prescription medications and a basic first-aid kit — sunburns and minor sand injuries are common with toddlers.",
              },
              {
                icon: "🚗",
                category: "Logistics",
                title: "Car Seat & Rental Car Tips",
                body: "Bring your own car seats — rental car seat add-ons are expensive (~$15/day each) and often poorly maintained. A compact SUV (e.g., RAV4 or CR-V) fits two car seats comfortably and handles the occasional rough road. Book through Costco Travel or Autoslash for the best rates.",
              },
              {
                icon: "☀️",
                category: "Health",
                title: "Sun & Heat Management",
                body: "Maui sun in June/July is intense. Apply reef-safe SPF 50 every 90 minutes, use rash guards and sun hats for the kids, and plan beach time before 10am and after 4pm. The Honua Kai pool has shade umbrellas — use them for the 2yo especially. Dehydration sneaks up fast.",
              },
              {
                icon: "🏗️",
                category: "Heads Up",
                title: "Honua Kai Parking Note",
                body: "Honua Kai charges $35/day for self-parking and $40/day for valet — budget ~$245–280 for the week. The resort is located at the north end of Ka'anapali Beach (130 Kai Malina Pkwy), slightly north of the main strip, which means less foot traffic and a quieter beach section.",
              },
              {
                icon: "🌺",
                category: "Culture",
                title: "Lāhainā Recovery — Visit Thoughtfully",
                body: "The August 2023 wildfire destroyed much of historic Lāhainā. The old Front Street core remains closed, but the Cannery Mall area, Mala Ocean Tavern, and Honu Oceanside are open. Spending money in Lāhainā directly supports the community's recovery. The Old Lāhainā Lūʻau is fully operational and better than ever.",
              },
              {
                icon: "🌿",
                category: "Toddler Favorite",
                title: "Maui Tropical Plantation (Waikapū)",
                body: "A low-key, low-commitment stop that toddlers genuinely enjoy: ducks and koi ponds to stare at, a short narrated tram ride through the crops, a shaded café for parents, and plenty of open space to toddle around. Clean bathrooms, no rushing, and easy to bail on if naps hit early. About 20 min south of Ka'anapali.",
              },
              {
                icon: "🥞",
                category: "Food + Activity",
                title: "Kihei Caffé + Kalama Park",
                body: "Kihei Caffé is a beloved breakfast spot famous for their whale-shaped pancakes — a guaranteed hit with a 4-year-old. It's super casual, cash-friendly, and opens early. Best of all, Kalama Park is directly across the street: a big grassy park with a playground, beach access, and room to run. Combine both into one easy morning outing (~35 min from Ka'anapali).",
              },
            ].map((item, i) => (
              <div key={i} className="fade-in-up p-6 rounded-sm" style={{ background: "#FDFAF5", border: "1px solid #E8D5B0" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#E8714A", fontFamily: "'Lato', sans-serif" }}>{item.category}</span>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#0A4A5C" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A3728", fontWeight: 300 }}>{item.body}</p>
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
                May 28 – June 5 Option
              </h2>
              <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                The Fora Travel itinerary also includes the Westin Nanea Ocean Villas — a 2BR resort-view villa at $5,309.99 all-in (May 28–June 5). Two king beds + sofa bed, full kitchen, balcony, and free WiFi. A great option if you want more space.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { label: "Room + Taxes", value: "$4,702" },
                  { label: "Flights (SFO)", value: "$1,597" },
                  { label: "Est. Total", value: "~$9.3k" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#F4A07A" }}>{s.value}</div>
                    <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/westin">
                <span className="inline-block px-6 py-3 text-sm font-bold cursor-pointer transition-opacity hover:opacity-80" style={{ background: "#E8714A", color: "#FDFAF5", fontFamily: "'Lato', sans-serif", borderRadius: "2px" }}>
                  View Westin Nanea 2BR Option →
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
