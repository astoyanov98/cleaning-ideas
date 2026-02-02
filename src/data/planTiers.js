export const planTiers = [
  {
    key: 'basic',
    tagKey: 'plans.tiers.basic.tag',
    nameKey: 'plans.tiers.basic.name',
    highlight: false,
    featureKeys: [
      'plans.features.ducts',
      'plans.features.grills',
      'plans.features.report',
      'plans.features.certificate',
    ],
  },
  {
    key: 'premium',
    tagKey: 'plans.tiers.premium.tag',
    nameKey: 'plans.tiers.premium.name',
    highlight: true,
    featureKeys: [
      'plans.features.ducts',
      'plans.features.grills',
      'plans.features.hoods',
      'plans.features.coils',
      'plans.features.report',
      'plans.features.certificate',
      'plans.features.priority',
    ],
  },
  {
    key: 'ultra',
    tagKey: 'plans.tiers.ultra.tag',
    nameKey: 'plans.tiers.ultra.name',
    highlight: false,
    featureKeys: [
      'plans.features.ducts',
      'plans.features.grills',
      'plans.features.hoods',
      'plans.features.coils',
      'plans.features.grease',
      'plans.features.emergency',
      'plans.features.inspection',
    ],
  },
];
