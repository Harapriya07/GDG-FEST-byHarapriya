/*
 * Sponsor data and CTA configuration.
 * Set status to "CONFIRMED" only after the partnership is officially confirmed.
 * Replace destination with a verified URL to enable the CTA.
 */
export const sponsorTiers = [
  {
    key: 'title',
    label: 'TITLE PARTNER',
    note: 'Lead partner',
    sponsors: [
      { key: 'google-cloud', number: '01', name: 'Google Cloud', status: 'PROPOSED' },
    ],
  },
  {
    key: 'platinum',
    label: 'PLATINUM PARTNERS',
    note: 'Tools to scale the next idea',
    sponsors: [
      { key: 'github', number: '02', name: 'GitHub', status: 'PROPOSED' },
      { key: 'firebase', number: '03', name: 'Firebase', status: 'PROPOSED' },
    ],
  },
  {
    key: 'gold',
    label: 'GOLD PARTNERS',
    note: 'Made for teams that ship',
    sponsors: [
      { key: 'postman', number: '04', name: 'Postman', status: 'PROPOSED' },
      { key: 'jetbrains', number: '05', name: 'JetBrains', status: 'PROPOSED' },
    ],
  },
];

export const sponsorCta = {
  destination: null, // Add a verified contact or sponsorship URL to enable the button.
  note: 'Explore sponsorship opportunities with Tekno Krraft 2026.',
};
