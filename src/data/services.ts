export interface Service {
  slug: string;
  name: string;
  summary: string;
  duration: string;
  preparation: string[];
  body: string[];
  related: string[]; // article slugs, used for internal linking
}

export const services: Service[] = [
  {
    slug: 'routine-eeg',
    name: 'Routine EEG',
    summary: 'A 30 to 60 minute recording of brain activity, used to look for seizure activity and other changes in brain function.',
    duration: '60 to 90 minutes including setup',
    preparation: [
      'Wash your hair the night before. Skip conditioner, oils and sprays.',
      'Take your usual medication unless your doctor tells you otherwise.',
      'Bring your referral letter and a list of current medications.',
    ],
    body: [
      'Small sensors are placed on your scalp with a washable paste. You rest in a reclining chair while a technologist records your brain activity.',
      'During the recording you may be asked to open and close your eyes, breathe deeply for a few minutes and look at a flashing light. These steps help bring out patterns that do not always appear at rest.',
      'A neurologist reviews the recording and your referring doctor receives the report, usually within three working days.',
    ],
    related: ['what-is-an-eeg', 'preparing-for-your-eeg'],
  },
  {
    slug: 'sleep-deprived-eeg',
    name: 'Sleep-deprived EEG',
    summary: 'An EEG recorded after a night of reduced sleep, which makes some seizure patterns easier to detect.',
    duration: '2 to 3 hours',
    preparation: [
      'Sleep no more than four hours the night before, or follow your doctor’s instructions.',
      'Avoid caffeine on the day of the test.',
      'Arrange for someone else to drive you home.',
    ],
    body: [
      'Some changes in brain activity show up mainly during drowsiness and light sleep. Reducing sleep the night before makes it more likely you will fall asleep during the recording.',
      'The setup is the same as a routine EEG. You will be encouraged to sleep in a quiet, dimmed room while the recording runs.',
    ],
    related: ['preparing-for-your-eeg', 'eeg-results-explained'],
  },
  {
    slug: 'ambulatory-eeg',
    name: 'Ambulatory EEG',
    summary: 'A portable EEG worn at home for 24 to 72 hours to capture events that do not happen during a short clinic visit.',
    duration: '1 to 3 days at home',
    preparation: [
      'Wear a shirt that buttons at the front so it is easy to change.',
      'Plan for no showers or swimming while the device is on.',
      'Keep a simple event diary. We give you a template at your first visit.',
    ],
    body: [
      'The sensors are fixed in place and connected to a small recorder you carry on a belt or shoulder strap. You go about your normal day while it records.',
      'Pressing the event button and writing in your diary when you notice symptoms helps the neurologist match what you felt to what was recorded.',
    ],
    related: ['what-is-an-eeg', 'eeg-results-explained'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
