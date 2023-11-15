import { Goal, Language } from './common';

type Json = {
  elements: {
    name: string;
    attributes: Record<string, string>;
    elements?: {
      name: string;
      attributes: Record<string, string>;
      elements?: {
        name: string;
        attributes: Record<string, string>;
        elements?: {
          type: string;
          text: string;
        }[];
      }[];
    }[];
  }[];
};

export const parseJson = (result: Record<string, Goal>, jsonString: string, language: Language) => {
  const json: Json = JSON.parse(jsonString);

  const goalsWrapper = json.elements.find((element) => element.name === 'goals');

  if (!goalsWrapper) {
    throw new Error(`No goals found for ${language}`);
  }

  const goals = goalsWrapper.elements?.filter((element) => element.name === 'goal') || [];

  for (const goal of goals) {
    if (!goal.attributes) {
      throw new Error(`Goal has no attributes (${JSON.stringify(goal)})`);
    }

    // Create goal if it doesn't exist
    if (!result[goal.attributes.id]) {
      result[goal.attributes.id] = {
        id: goal.attributes.id,
        name: {
          en: '',
          fr: '',
          de: '',
          es: '',
        },
        rare: goal.attributes.rare ? +goal.attributes.rare : 0,
        hidden: goal.attributes.hidden ? true : undefined,
        unlocks: [],
      };
    }

    // Update rare and hidden data
    if (goal.attributes.rare) result[goal.attributes.id].rare = +goal.attributes.rare;
    if (goal.attributes.hidden) result[goal.attributes.id].hidden = true;

    // Add goal name for current language
    result[goal.attributes.id].name[language] = goal.attributes.name;

    // Add goal description for current language
    if (goal.attributes.desc) {
      if (!result[goal.attributes.id].description) {
        result[goal.attributes.id].description = {
          en: '',
          fr: '',
          de: '',
          es: '',
        };
      }

      result[goal.attributes.id].description![language] = goal.attributes.desc;
    }

    // Filter out empty unlocks
    const unlocks = goal.elements?.filter((element) => ['icon', 'default', 'title', 'image'].includes(element.name)) || [];

    for (const unlock of unlocks) {
      if (!unlock.attributes) {
        throw new Error(`Unlock has no attributes (${JSON.stringify(unlock)})`);
      }

      // Check if unlock already exists
      let existingUnlock = result[goal.attributes.id].unlocks.find((u) => u.count === +unlock.attributes.k);

      // Create unlock if it doesn't exist
      if (!existingUnlock) {
        existingUnlock = {
          count: +unlock.attributes.k,
          points: unlock.attributes.points ? +unlock.attributes.points : 1,
          icon: unlock.attributes.file,
          prefix: unlock.attributes.prefix ? true : undefined,
          suffix: unlock.attributes.suffix ? true : undefined,
        };

        result[goal.attributes.id].unlocks.push(existingUnlock);
      }

      // Update unlock data
      existingUnlock.points = unlock.attributes.points ? +unlock.attributes.points : 1;
      if (unlock.attributes.file) existingUnlock.icon = unlock.attributes.file;
      if (unlock.attributes.prefix) existingUnlock.prefix = true;
      if (unlock.attributes.suffix) existingUnlock.suffix = true;

      // Add unlock title for current language
      if (unlock.name === 'title' || (unlock.name === 'icon' && unlock.attributes.name)) {
        if (!existingUnlock.title) {
          existingUnlock.title = {
            en: '',
            fr: '',
            de: '',
            es: '',
          };
        }

        existingUnlock.title[language] = unlock.attributes.name;
      }

      // Add unlock description for current language
      const descriptionNode = unlock.elements?.find((element) => element.type === 'text');
      if (descriptionNode) {
        if (!existingUnlock.description) {
          existingUnlock.description = {
            en: '',
            fr: '',
            de: '',
            es: '',
          };
        }

        existingUnlock.description[language] = descriptionNode.text.trim();
      }
    }
  }
};