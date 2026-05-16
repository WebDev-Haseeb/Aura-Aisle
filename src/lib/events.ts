import haveli from "@/assets/event-haveli.jpg";
import hunza from "@/assets/event-hunza.jpg";
import seaside from "@/assets/event-seaside.jpg";
import garden from "@/assets/event-garden.jpg";
import mughal from "@/assets/event-mughal.jpg";

export type Event = {
  slug: string;
  index: string;
  title: string;
  season: string;
  location: string;
  guests: string;
  image: string;
  blurb: string;
  narrative: string;
};

export const events: Event[] = [
  {
    slug: "haveli-lahore",
    index: "01",
    title: "The Marigold Threshold",
    season: "Winter 2024",
    location: "Walled City, Lahore",
    guests: "180 Guests",
    image: haveli,
    blurb:
      "A three-night residence inside a restored Mughal haveli, framed by candle-lit jharokhas and an aisle of marigold and ivory rose.",
    narrative:
      "Designed around the silence of stone at dusk. We worked with a single florist for six weeks to shape a procession that read as architecture before it read as ceremony.",
  },
  {
    slug: "hunza-valley",
    index: "02",
    title: "The Valley Vow",
    season: "Autumn 2023",
    location: "Hunza, Gilgit-Baltistan",
    guests: "60 Guests",
    image: hunza,
    blurb:
      "An intimate sunrise ceremony staged on a ridge above the Karakoram, the floral arch composed entirely of white garden rose.",
    narrative:
      "We chartered the entire valley for four days, briefed eighteen artisans, and let the landscape carry the weight of the scenography.",
  },
  {
    slug: "karachi-seaside",
    index: "03",
    title: "Of Salt and Linen",
    season: "Spring 2024",
    location: "Private Estate, Karachi",
    guests: "120 Guests",
    image: seaside,
    blurb:
      "A long ivory tablescape set against the Arabian Sea, hurricane candles tracing the shoreline as the dusk dimmed.",
    narrative:
      "Dinner was served in a single uninterrupted sweep — one hundred and twenty seats, one table, one horizon.",
  },
  {
    slug: "islamabad-garden",
    index: "04",
    title: "The Quiet Garden",
    season: "Spring 2023",
    location: "Margalla Foothills, Islamabad",
    guests: "90 Guests",
    image: garden,
    blurb:
      "A morning ceremony beneath a cascading rose arch, the lawn dressed in cream silk runners and chambered candlelight.",
    narrative:
      "We designed the ceremony to last only forty minutes — a deliberate compression, so the day might breathe afterward.",
  },
  {
    slug: "mughal-reception",
    index: "05",
    title: "The Mirror Hall",
    season: "Winter 2023",
    location: "Heritage Estate, Lahore",
    guests: "320 Guests",
    image: mughal,
    blurb:
      "A grand reception staged beneath three antique crystal chandeliers, deep velvet seating, ivory drapery falling from twelve metres.",
    narrative:
      "An exercise in restraint at scale — every flourish removed until only proportion, light, and quiet remained.",
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);