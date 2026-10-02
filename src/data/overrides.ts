/**
 * LK Auto House — lkautohouse.shop
 * LK AUTO HOUSE LIMITED, company no. 17307146, Brierley Hill.
 * SIC: 45112 sale of used cars and light motor vehicles.
 *
 * Incorporated 29 June 2026, so the copy claims no history the company does
 * not have. It leans instead on what a buyer can verify for themselves: the
 * register entry, and the vehicle checks published on GOV.UK.
 */

export const overrides: Record<string, unknown> = {
  home: {
    seo: {
      title: 'Used cars in Brierley Hill',
      description:
        'LK Auto House Limited, registered in England and Wales (company no. 17307146). Used cars and light motor vehicles, sold from Emms Court, Brierley Hill.',
    },
    hero: {
      eyebrow: 'Used cars, Brierley Hill',
      titleLead: 'Every car checked,',
      titleMark: 'every answer straight',
      lead:
        'A used car is only as good as what you are told about it. We would rather lose a sale than describe a car as something it is not, and we will point you at the checks you can run yourself before you commit.',
      secondaryCta: 'What we offer',
      visualLabel: 'Registered in England and Wales',
    },
    highlights: {
      eyebrow: 'How we sell',
      title: 'What you should expect from a dealer',
      subtitle: 'Four things that separate a straight sale from a story.',
      items: [
        {
          icon: 'search',
          title: 'Check it yourself',
          text: 'The MOT and tax history of any registered vehicle is public on GOV.UK. We will give you the registration so you can look before you come.',
        },
        {
          icon: 'check-doc',
          title: 'Described as it is',
          text: 'Mileage, service history, previous keepers and known faults, told to you straight. If we do not know something, we say we do not know.',
        },
        {
          icon: 'car',
          title: 'Drive it properly',
          text: 'A test drive long enough to tell you something, not once round the block. Bring someone who knows cars if you would rather.',
        },
        {
          icon: 'shield',
          title: 'Your rights stand',
          text: 'Buying from a registered company means the Consumer Rights Act applies in full. We would rather you knew that than not.',
        },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Buying, selling and swapping',
      subtitle: 'The whole of it, from first look to driving away.',
      moreLabel: 'All services',
      cardCta: 'Read more',
    },
    process: {
      eyebrow: 'How it works',
      title: 'From enquiry to driving away',
      subtitle: 'Four steps, with nothing rushed in the middle.',
      steps: [
        {
          title: 'Tell us what you are after',
          text: 'Budget, size, fuel, mileage, what it has to do. If we have nothing suitable we will say so rather than push something else.',
        },
        {
          title: 'See it and check it',
          text: 'Look it over, run the public checks, take it out on the road. Questions answered honestly, including the awkward ones.',
        },
        {
          title: 'Agree the deal',
          text: 'Price, anything included, and part exchange if there is one. All of it written down before money changes hands.',
        },
        {
          title: 'Paperwork and away',
          text: 'The V5C transfer, the receipt and the handover done properly, so the car is legally yours and the records say so.',
        },
      ],
    },
    record: {
      eyebrow: 'Company details',
      title: 'Who you are buying from',
      subtitle: 'A registered limited company, not a name on a card.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      subtitle: 'The things worth asking any used car dealer.',
      items: [
        {
          q: 'How do I check a car before I come and see it?',
          a: 'Ask us for the registration number. With it you can look up the MOT history and the tax status free of charge on GOV.UK, which tells you the mileage recorded at each test and any advisories. We will give you the registration without being asked twice.',
        },
        {
          q: 'What are my rights if something goes wrong?',
          a: 'You are buying from a registered limited company, so the Consumer Rights Act 2015 applies. A vehicle must be of satisfactory quality, fit for purpose and as described. If it is not, you have a short-term right to reject it within thirty days, and further rights after that. Nothing we say or write takes those rights away.',
        },
        {
          q: 'Is anything included with the car?',
          a: 'Whatever is included is written down for that specific vehicle before you buy, and nothing is implied beyond what is on that document. If a car is sold with no cover at all, we tell you that plainly rather than leaving it vague.',
        },
        {
          q: 'Do you take part exchanges?',
          a: 'Yes. Bring the vehicle, its V5C and any service history, and we will give you a figure. If you would rather sell it elsewhere for more, we will tell you that too.',
        },
        {
          q: 'The company was registered recently. Does that matter?',
          a: 'It is a fair question, and the answer is on the public register: the company was incorporated on 29 June 2026. We would rather state that openly than imply a history we do not have. Judge us on how a car is described and how questions get answered.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Looking for something in particular?',
      lead: 'Tell us what you need the car to do and what you want to spend. If we have nothing right, we will say so.',
      secondaryCta: 'Company details',
    },
  },

  about: {
    seo: {
      title: 'About LK Auto House',
      description:
        'A used car dealer registered in England and Wales, based at Emms Court, Brierley Hill. Registered company details as filed at Companies House.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'The used car trade',
      titleMark: 'has a reputation',
      lead:
        'Most of it earned. The only useful answer is to be checkable: a registered company, vehicles you can look up yourself, and nothing described as better than it is.',
    },
    story: {
      title: 'How we sell',
      subtitle: 'Fewer surprises after the sale is worth more than one extra sale.',
      paragraphs: [
        'A used car has a history, and the buyer is entitled to it. We tell you the mileage, what the service record shows, how many keepers it has had and what we know to be wrong with it. Where we do not know something, we say so instead of guessing in the car’s favour.',
        'We also point buyers at the checks they can run without us. The MOT history of any vehicle is public, and it will show recorded mileages and advisories going back years. A dealer who encourages you to look at that is a dealer with nothing to hide.',
        'The company was incorporated in June 2026 and trades from a unit at Emms Court in Brierley Hill. Its number and registered office are below and on the public register.',
      ],
    },
    values: {
      title: 'What we hold to',
      items: [
        { icon: 'search', title: 'Checkable', text: 'We hand over the registration so you can run the public checks yourself.' },
        { icon: 'check-doc', title: 'Described accurately', text: 'Known faults disclosed, unknowns admitted as unknowns.' },
        { icon: 'shield', title: 'Rights intact', text: 'The Consumer Rights Act applies in full to every sale we make.' },
        { icon: 'chat', title: 'Answerable', text: 'The same people after the sale as before it.' },
      ],
    },
    record: {
      eyebrow: 'Public record',
      title: 'Registered company details',
      subtitle: 'As filed at Companies House.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Want to come and look?',
      lead: 'Get in touch first and we will tell you what is actually on site.',
      secondaryCta: 'What we offer',
    },
  },

  servicesPage: {
    seo: {
      title: 'Used car sales, part exchange and vehicle sourcing',
      description:
        'Used cars and light motor vehicles from LK Auto House Limited, Brierley Hill. Part exchange, vehicle sourcing and handover done properly.',
    },
    hero: {
      eyebrow: 'Services',
      titleLead: 'Sales, part exchange',
      titleMark: 'and finding the right one',
      lead: 'What we do, and what each part of it actually involves for you.',
    },
    quoteNote:
      'Every vehicle is priced individually against its condition, mileage and history. Nothing on this page is a fixed price or a binding offer.',
    cta: {
      eyebrow: 'Next step',
      title: 'Tell us what you are looking for',
      lead: 'Budget, size and what the car has to do. We will tell you what we have or what we can find.',
      secondaryCta: 'About the company',
    },
  },

  contact: {
    seo: {
      title: 'Contact LK Auto House, Brierley Hill',
      description:
        'Get in touch about a used car. Registered office: Unit D Emms Court, Meeting Lane, Brierley Hill, DY5 3LB. Company no. 17307146.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Tell us what you need,',
      titleMark: 'not just what you like',
      lead: 'The more we know about how the car has to be used, the less likely you are to end up with the wrong one.',
    },
    helpful: {
      title: 'Useful to include',
      items: [
        'What you want to spend, and whether that is the total or the monthly side of it.',
        'What the car has to do: commute, family, work, towing, mostly short trips.',
        'Any must-haves, such as size, fuel type, automatic or a tow bar.',
        'Whether you have something to part exchange, and its registration.',
      ],
    },
    channelsTitle: 'How to reach us',
    recordTitle: 'Registered company details',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready when you are',
      lead: 'Send the details and we will tell you honestly what we can do.',
      secondaryCta: 'What we offer',
    },
  },

  services: [
    {
      id: 'used-cars',
      icon: 'car',
      title: 'Used cars for sale',
      summary: 'Cars and light motor vehicles, described as they actually are.',
      points: [
        'Mileage, service history and previous keepers given to you up front.',
        'The registration handed over so you can run the public MOT and tax checks.',
        'Known faults disclosed before you travel, not discovered when you arrive.',
        'A test drive long enough to tell you something useful.',
      ],
    },
    {
      id: 'part-exchange',
      icon: 'refresh',
      title: 'Part exchange',
      summary: 'Your current vehicle valued against the one you are buying.',
      points: [
        'Bring the V5C, the keys and any service history for an accurate figure.',
        'The valuation explained, so you can see what is driving the number.',
        'An honest word if you would do better selling it privately.',
        'The settlement handled properly where there is outstanding finance.',
      ],
    },
    {
      id: 'sourcing',
      icon: 'search',
      title: 'Finding a specific vehicle',
      summary: 'When what you want is not on site, we go and look for it.',
      points: [
        'A written brief: model, budget, mileage ceiling, must-haves.',
        'Only vehicles we would put on our own forecourt get offered to you.',
        'The same disclosure as a car bought from stock, including the history.',
        'No pressure to take something close but not right.',
      ],
    },
    {
      id: 'handover',
      icon: 'key',
      title: 'Paperwork and handover',
      summary: 'The part that decides whether the car is properly yours.',
      points: [
        'V5C transfer completed correctly with the DVLA at the point of sale.',
        'A receipt stating the vehicle, the price and anything included.',
        'Everything included written down for that specific car.',
        'The handover unhurried, with time to look over it once more.',
      ],
    },
  ],
};
