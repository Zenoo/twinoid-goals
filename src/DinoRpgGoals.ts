import { Goal, adjustGoals } from "./common";

export const DinoRpgGoalNames = [
  'perle',
  'pteroz',
  'hippo',
  'rocky',
  'quetzu',
  'tour',
  'vener',
  'taurus',
  'msg',
  'magnet',
  'plume',
  'kaura',
  'demon',
  'pmi',
  'pda',
  'dicarb',
  'tid1',
  'belius',
  'caush',
  'fmedal',
  'labowi',
  'moves',
  'deaths',
  'pdays',
  'lvlup',
  'killm',
  'killd',
  'healpv',
  'upwood',
  'upfire',
  'upthun',
  'upair',
  'upwatr',
  'brkpel',
  'chasse',
  'cueill',
  'peche',
  'energy',
  'fouill',
  'market',
  'sbuyer',
  'clans',
  'beauty',
  'gdcatt',
  'gdcdef',
  'bgum',
  'medgol',
  'medsil',
  'medbro',
  'medpla',
  'lvlup1',
  'lvlup2',
] as const;

export type DinoRpgGoalName = typeof DinoRpgGoalNames[number];

export const DinoRpgGoals: Record<DinoRpgGoalName, Goal> = {
  perle: {
    id: 'perle',
    name: {
      en: 'Fountain Pearl',
      fr: 'Perle de la Fontaine',
      de: 'Perle aus dem Brunnen',
      es: '',
    },
    description: {
      en: 'The Fountain Pearl allows your dinoz to regenerate health every day at the Fountain of Youth.',
      fr: 'La perle de la Fontaine permet à tous vos Dinoz de pouvoir se régénerer chaque jour à la Fontaine de Jouvence.',
      de: 'Mit der Perle aus dem Brunnen können alle deine Dinoz sich jeden Tag am Jungbrunnen erholen.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_perle.gif',
      },
    ],
  },
  pteroz: {
    id: 'pteroz',
    name: {
      en: 'Pteroz Trophy',
      fr: 'Trophée des Pteroz',
      de: 'Trophäe der Pteroz',
      es: '',
    },
    description: {
      en: 'The Pteroz Trophy is awarded to players who have defeated the strange Pteroz. It also unlocks the Pteroz, making it available to buy in the Dinoz Shop.',
      fr: 'Le Trophée des Pteroz récompense les joueurs ayant vaincu le Ptéroz étrange, et donne accès aux Pteroz parmi les Dinoz disponibles dans la Boutique.',
      de: 'Die Trophäe der Pteroz ist eine Belohung für Spieler, die den seltsamen Pteroz besiegt haben. Damit habt ihr im Geschäft die Möglichkeit, Pteroz als neue Dinogattung zu kaufen.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_pteroz.gif',
      },
    ],
  },
  hippo: {
    id: 'hippo',
    name: {
      en: 'Hippoclamps Trophy',
      fr: 'Trophée des Hippoclamps',
      de: 'Trophäe der Hippoklampen',
      es: '',
    },
    description: {
      en: 'The Hippoclamps Trophy is awarded to players who have defeated the wild Hippoclamp. It also unlocks the Hippoclamps, making it available to buy in the Dinoz Shop.',
      fr: 'Le Trophée des Hippoclamps récompense les joueurs ayant vaincu l\'Hippoclamp sauvage, et donne accès aux Hippoclamps parmi les Dinoz disponibles dans la Boutique.',
      de: 'Die Trophäe der Hippoklampen ist eine Belohnung für Spieler, die den wilden Hippoklampus besiegt haben. Damit habt ihr im Geschäft die Möglichkeit, Hippoklampen als neue Dinozgattung zu kaufen.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_pteroz.gif',
      },
    ],
  },
  rocky: {
    id: 'rocky',
    name: {
      en: 'Rockies Trophy',
      fr: 'Trophée des Rockys',
      de: 'Trophäe der Rockys',
      es: '',
    },
    description: {
      en: 'The Rockies Trophy is awarded to players who have defeated the sleeping Rocky. It also unlocks the Rocky, making it available to buy in the Dinoz Shop.',
      fr: 'Le Trophée des Rockys récompense les joueurs ayant vaincu le Rocky endormi, et donne accès aux Rockys parmi les Dinoz disponibles dans la Boutique.',
      de: 'Die Trophäe der Rockys ist eine Belohnung für Spieler, die den schläfrigen Rocky besiegt haben. Damit habt ihr im Geschäft die Möglichkeit, Rockys als neue Dinozgattung zu kaufen.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_rocky.gif',
      },
    ],
  },
  quetzu: {
    id: 'quetzu',
    name: {
      en: 'Quetzu Trophy',
      fr: 'Trophée des Quetzus',
      de: 'Trophäe der Quetzu',
      es: '',
    },
    description: {
      en: 'The Quetzu Trophy is given by Mandragore to players who have defeated the Archdorogon Grizorg. This unlocks the Quetzu, making it available to buy in the Dinoz shop',
      fr: 'Le Trophée des Quetzus a été remis par Mandragore aux joueurs ayant vaincu l\'Archidorogon Grizorg, il donne accès aux Quetzu parmi les Dinoz disponibles dans la Boutique.',
      de: 'Die Trophäe wurde dir von Mandragore nach dem Sieg über den Erzdorogon Grizorg verliehen. Sie gewährt dir u.a. Zugriff auf Quetzu im Dinoz-Geschäft.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_quetzu.gif',
      },
    ],
  },
  tour: {
    id: 'tour',
    name: {
      en: 'Dinoland Tour',
      fr: 'Tour de Dinoland',
      de: 'Dinolandtour',
      es: '',
    },
    description: {
      en: 'This yellow shirt is awarded for your participation in the Dinoland Tour! You are now one of the great Dinoland explorers.',
      fr: 'Ce maillot jaune vous récompense pour votre magnifique Tour de Dinoland ! Vous faites désormais partie des grands explorateurs de Dinoland.',
      de: 'Dieses gelbe Trikot ist die Belohnung für deine großartige Dinolandtour! Du gehörst nun zu den großen Dinolanderforschern.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 200,
        icon: 'collec_tour.gif',
      },
    ],
  },
  vener: {
    id: 'vener',
    name: {
      en: 'Venerable Eye',
      fr: 'L\'oeil du Vénérable',
      de: 'Das Auge des Ehrwürdigen',
      es: '',
    },
    description: {
      en: 'The Venerable Eye is an extremely rare item. Only the finest warriors can possess it! People say that it has incredibly powerful magical abilities.',
      fr: 'L\'Oeil du Vénérable est un objet extrêmement rare. Seuls les plus grands Guerriers peuvent l\'obtenir ! On raconte qu\'il aurait des propriétés magiques incroyablement puissantes...',
      de: 'Das Auge des Ehrwürdigen ist ein extrem seltener Gegenstand. Nur die größten Krieger können ihn erhalten! Es wird erzählt, dass er unglaublich starke magische Eigenschaften hätte.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 200,
        icon: 'collec_vener.gif',
      },
    ],
  },
  taurus: {
    id: 'taurus',
    name: {
      en: 'Taurus the magnificent',
      fr: 'Taurus le magnifique',
      de: 'Der fantastische Taurus',
      es: '',
    },
    description: {
      en: 'You helped Baobob to dispatch Taurus, the infamous Moueffe, to the depths of the Dark World. You\'re not ready to meet him again yet, although word of your courage is already spreading throughout Dinoland',
      fr: 'Vous avez aidé Baobob à refouler le puissant Moueffe infernal Taurus dans les profondeurs du Monde Sombre. Vous n\'êtes pas prêt de le revoir, votre courage commence déjà à traverser les frontières de Dinoland.',
      de: 'Du hast Bao Bob dabei geholfen, den mächtigen und teuflischen Moeffe Taurus zurück in die Tiefen der dunklen Welt zu schicken. Du bist nicht bereit, ihn wiederzusehen. Dein Mut überschreitet bereits die Grenzen von Dinoland.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_taurus.gif',
      },
    ],
  },
  msg: {
    id: 'msg',
    name: {
      en: 'Official Dinoland Stamps',
      fr: 'Timbres homologués',
      de: 'Offizielle Briefmarken',
      es: '',
    },
    description: {
      en: 'This unlimited supply of stamps from the Dinoland Postal Militia is proof of your entitlement to stay in Dinoland for as long as you\'d like.',
      fr: 'Ce stock illimité de timbres homologués par les Services Postaux Dinoziens valide votre séjour à Dinoville.',
      de: 'Mit diesem unbegrenzten Vorrat an offiziellen Briefmarken der Dinoz Post AG kannst du private Nachrichten versenden.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_msg.gif',
      },
    ],
  },
  magnet: {
    id: 'magnet',
    name: {
      en: 'Negative Lodestone Shard',
      fr: 'Eclat de Magnétite Négative',
      de: 'Splitter aus negativem Magnetit',
      es: '',
    },
    description: {
      en: 'This Negative Lodestone Shard was given to you by the ing of the Rockies himself! Who knows what mysterious powers it holds.',
      fr: 'Cet éclat de Magnétite Négative vous a été offert par le Roi des Rockys en personne ! Qui sait quels pouvoirs mystérieux il possède...',
      de: 'Dieser Splitter aus negativem Magnetit wurde dir vom König der Rockys höchstpersönlich übergeben! Wer weiß was für mysteriöse Kräfte er in sich birgt...',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 300,
        icon: 'collec_magnet.gif',
      },
    ],
  },
  plume: {
    id: 'plume',
    name: {
      en: 'Sidereal Feather',
      fr: 'Plume Sidérale',
      de: 'Sternenfeder',
      es: '',
    },
    description: {
      en: 'This feather, a gift from a distant traveller, allows you to edit your presentation on your player profile',
      fr: 'Cette plume, cadeau de quelqu\'un venu de très loin, permet d\'éditer la présentation de la fiche joueur.',
      de: 'Diese Feder ist ein Geschenk von jemandem, der von seeeehr weit her gekommen ist. Mit ihr kannst du das Spielerprofil bearbeiten und in den \'Roleplay\'-Bereich gelangen, der sich im Forum befindet.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_plume.gif',
      },
    ],
  },
  kaura: {
    id: 'kaura',
    name: {
      en: 'Kabuki Aura',
      fr: 'Aura Kabuki',
      de: 'Kabuki-Aura',
      es: '',
    },
    description: {
      en: 'The Kabuki Aura gives you access to Totem Island where you may find Kabukis, survivors of the Huge Cataclysm!',
      fr: 'Cette aura permet d\'accéder à l\'Ile du Totem et d\'y retrouver - peut-être - des Kabuki ayant survécu au Grand Cataclysme !',
      de: 'Mit dieser Aura kannst du auf die Toteminsel gehen und dort - vielleicht - Kabukis antreffen, die die Große Naturkatastrophe überlebt haben!',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 300,
        icon: 'collec_kaura.gif',
      },
    ],
  },
  demon: {
    id: 'demon',
    name: {
      en: 'Demon Scroll',
      fr: 'Parchemin du Démon',
      de: 'Dämonische Pergamentrolle',
      es: '',
    },
    description: {
      en: 'This ancient scroll gives you access to the Demon Shop in the Twilight Cemetary!',
      fr: 'Cet ancien parchemin vous permettra d\'accèder à la Boutique Démoniaque au Cimetière du Crépuscule !',
      de: 'Diese alte Pergamentrolle gewährt dir Zugang zur Dämonenboutique, die sich am Friedhof des Sonnenuntergangs befindet.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_demon.gif',
      },
    ],
  },
  pmi: {
    id: 'pmi',
    name: {
      en: 'Illustrated Mission Guidebook',
      fr: 'Petit Missionaire Illustré',
      de: 'Illustriertes Missionsbuch',
      es: '',
    },
    description: {
      en: 'The Illustrated Mission Guidebook lets you see the list of missions which have been completed by your Dinoz, and which remain to be completed.',
      fr: 'Le Petit Missionnaire Illustré permet d\'avoir accés à tout moment à la liste des missions effectuées et restant à faire pour vos Dinoz.',
      de: 'Das illustrierte Missionsbuch zeigt dir alle Missionen, die deine Dinoz bereits abgeschlossen oder noch vor sich haben.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_pmi.gif',
      },
    ],
  },
  pda: {
    id: 'pda',
    name: {
      en: 'Diamantite Pebble',
      fr: 'Pierre en Diamantite Agglomérée',
      de: 'Stein aus gepresstem Diamantit',
      es: '',
    },
    description: {
      en: 'The Diamantite Pebble is a stone which is packed with a naturally occurring array of elements which, when combined under pressure, allow the owner to see all their dinoz at a glance. The diamantite, on the other hand, is only for show.',
      fr: 'La P.D.A. est une pierre remplie (chose surprenante) de technologie formée naturellement et permettant à l\'éleveur d\'avoir un aperçu de tous ses Dinoz en un simple coup d\'oeil. La Diamantite au contraire c\'est juste pour la frime.',
      de: 'Der Stein aus gepresstem Diamantit ist ein Stein, der mit natürlicher Technologie geformt wurde (was überraschend ist) und der den Züchtern erlaubt sich mit einem Blick eine Übersicht all seiner Dinoz zu verschaffen. Das Diamantit hingegen ist nur zum Angeben.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_pda.gif',
      },
    ],
  },
  dicarb: {
    id: 'dicarb',
    name: {
      en: 'Arborian Dictionary',
      fr: 'Dictionnaire Arboris',
      de: 'Wörterbuch Arborianisch',
      es: '',
    },
    description: {
      en: 'A very old book, which you have managed to open, maybe now it can be used to decipher the Arborian language',
      fr: 'Un livre très ancien, vous avez réussi à l\'ouvrir, il peut désormais servir à déchiffrer le langage Arboris.',
      de: 'Ein antikes, staubiges Buch, mit dessen Hilfe du die Sprache Arborianisch übersetzen kannst.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 400,
        icon: 'collec_dicarb.gif',
      },
    ],
  },
  tid1: {
    id: 'tid1',
    name: {
      en: 'Zen Medal',
      fr: 'Médaille zen',
      de: 'Zen Medaille',
      es: '',
    },
    description: {
      en: 'The zen medal is awarded to the top Dojo in Dinoland, there is no more powerful Dinoz master! You get all the glory, the fame and the respect of all other Dinoz masters...!!',
      fr: 'Félicitation pour avoir gagné le Tournoi Inter-Dojo ! La médaille zen récompense le meilleur Dojo existant à Dinoland, aucun maître Dinoz ne vous surpasse ! A vous la gloire, les flashs, le succès auprès des maîtres/maîtresses dinoz .... !!',
      de: 'Herzlichen Glückwunsch, du hast das Dojo Turnier gewonnen! Nur das beste Dojo erhält die Zen Medaille. Kein anderer Dinozzüchter kann dir das Wasser reichen! Genieße den Ruhm! :)',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_tid1.gif',
      },
    ],
  },
  belius: {
    id: 'belius',
    name: {
      en: 'Belius the Illustrious',
      fr: 'Belius l\'illustre',
      de: 'Belius',
      es: '',
    },
    description: {
      en: 'You have defeated the powerful Belius, the infernal Santaz. He has been sent back to the depths of the Dark World.',
      fr: 'Vous avez supprimé le puissant Santaz infernal Belius. Il est reparti dans les profondeurs du Monde Sombre.',
      de: 'Du hast den mächtigen, teuflischen Santaz Belius vernichtet. Er ist in die Tiefen der dunklen Welt zurückgekehrt.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 100,
        icon: 'collec_belius.gif',
      },
    ],
  },
  caush: {
    id: 'caush',
    name: {
      en: 'Mandragore Doll',
      fr: 'Poupée Mandragore',
      de: 'Mandragore-Puppe',
      es: '',
    },
    description: {
      en: 'A doll in the likeness of Mandragore, which can be used as a voodoo doll, punching-bag or a pillow, as you choose.	It is in pretty poor condition, the previous owner must have taken their frustrations out on it on a regular basis.',
      fr: 'Une poupée à l\'éffigie de Mandragore, elle peut servir de poupée vaudou, punching-ball ou de coussin, c\'est au choix. Elle est en piteuse état, l\'ancien propriétaire a dû passer ses nerfs dessus assez souvent.',
      de: 'Die Puppe zeigt Mandragore da und kann als Voodoopuppe, Boxsack oder Kissen dienen - je nach Wetter und Laune. Sie ist in einem miserablen Zustand. Ihrem alten Besitzer müssen ziemlich oft die Nerven durchgegangen sein.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 300,
        icon: 'collec_caush.gif',
      },
    ],
  },
  fmedal: {
    id: 'fmedal',
    name: {
      en: '3-eyed Medallion',
      fr: 'Médaillon à 3 yeux',
      de: '3-eyed Medallion',
      es: '',
    },
    description: {
      en: 'This medallion opens the portal to the celestial temple.',
      fr: 'Ce médaillon ouvre le portail vers le temple céleste.',
      de: 'This medallion opens the portal to the celestial temple.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 50,
        icon: 'collec_fmedal.gif',
      },
    ],
  },
  labowi: {
    id: 'labowi',
    name: {
      en: 'Smogs Medallion',
      fr: 'Trophée des Smogs',
      de: 'Smogs Medallion',
      es: '',
    },
    description: {
      en: 'This medallion proves that you have finished the smog quest.',
      fr: 'Ce trophée prouve que vous avez terminé la quête du Smog.',
      de: 'This medallion proves that you have finished the smog quest.',
      es: '',
    
    },
    hidden: true,
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 50,
        icon: 'collec_labowi.gif',
      },
    ],
  },
  moves: {
    id: 'moves',
    name: {
      en: 'Adventurer',
      fr: 'Aventure',
      de: 'Abenteurer',
      es: '',
    },
    description: {
      en: 'What kind of adventurer are you?',
      fr: 'Quel type d\'aventurier êtes-vous?',
      de: 'So ein Typ Abenteurer bist du',
      es: '',
    
    },
    rare: 2,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_explor.gif',
        prefix: true,
        title: {
          en: 'Tourist',
          fr: 'Touriste',
          de: 'Tourist',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        prefix: true,
        title: {
          en: 'Marcher',
          fr: 'Marcheur',
          de: 'Marschierer',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        prefix: true,
        title: {
          en: 'Walker',
          fr: 'Promeneur',
          de: 'Spaziergänger',
          es: '',
        },
      },
      {
        count: 500,
        points: 1,
        prefix: true,
        title: {
          en: 'Hiker',
          fr: 'Randonneur',
          de: 'Wanderer',
          es: '',
        },
      },
      {
        count: 1000,
        points: 1,
        prefix: true,
        title: {
          en: 'Adventurer',
          fr: 'Aventurier',
          de: 'Abenteurer',
          es: '',
        },
      },
      {
        count: 2000,
        points: 1,
        suffix: true,
        title: {
          en: 'Brave Souls',
          fr: 'téméraire',
          de: 'durch dick und dünn',
          es: '',
        },
      },
      {
        count: 5000,
        points: 1,
        title: {
          en: 'Grand Adventurer',
          fr: 'Grand aventurier',
          de: 'Großer Abenteurer',
          es: '',
        },
      },
      {
        count: 10000,
        points: 1,
        prefix: true,
        title: {
          en: 'Explorer',
          fr: 'Explorateur',
          de: 'Entdecker',
          es: '',
        },
      },
      {
        count: 25000,
        points: 0,
        suffix: true,
        title: {
          en: 'discoveries',
          fr: 'intrépide',
          de: 'ohne Furcht',
          es: '',
        },
      },
      {
        count: 40000,
        points: 0,
        title: {
          en: 'Grand Explorer',
          fr: 'Grand explorateur',
          de: 'Großer Entdecker',
          es: '',
        },
      },
      {
        count: 60000,
        points: 0,
        title: {
          en: 'Globe-trotter',
          fr: 'Globe-trotteur',
          de: 'Globetrotter',
          es: '',
        },
      },
      {
        count: 75000,
        points: 0,
        title: {
          en: 'Supreme Explorer',
          fr: 'Explorateur suprême',
          de: 'Oberster Entdecker',
          es: '',
        },
      },
      {
        count: 100000,
        points: 0,
        title: {
          en: 'Legendary Pioneer',
          fr: 'Pionnier ultime',
          de: 'Ultimativer Pionier',
          es: '',
        },
      },
      {
        count: 150000,
        points: 0,
        title: {
          en: 'Dinoland Legend',
          fr: 'Légende de Dinoland',
          de: 'Dinoland-Legende',
          es: '',
        },
      },
    ],
  },
  deaths: {
    id: 'deaths',
    name: {
      en: 'Deaths',
      fr: 'Morts',
      de: 'Tode',
      es: '',
    },
    description: {
      en: 'How many times have you died in combat?',
      fr: 'Combien de fois êtes-vous mort au combat ?',
      de: 'So oft bist du im Kampf gefallen.',
      es: '',
    
    },
    rare: 1,
    unlocks: [
      {
        count: 10,
        points: 0,
        icon: 'r_barbare.gif',
        title: {
          en: 'Spirit Dinoz master',
          fr: 'Revenant de loin',
          de: 'Wiedergänger',
          es: '',
        },
      },
      {
        count: 100,
        points: 0,
        title: {
          en: 'Comeback King',
          fr: 'Esprit torturé',
          de: 'Gequälter Geist',
          es: '',
        },
      },
      {
        count: 500,
        points: 0,
        title: {
          en: 'Master of Puppet',
          fr: 'Fantôme narcissique',
          de: 'Selbstverliebtes Gespenst',
          es: '',
        },
      },
      {
        count: 1000,
        points: 0,
        title: {
          en: 'Reincarnator 3k',
          fr: 'Réincarnator 3000',
          de: 'Reinkarnator 3000',
          es: '',
        },
      },
      {
        count: 1500,
        points: 0,
        title: {
          en: 'Mini Buddha',
          fr: 'P\'tit Bouddha',
          de: 'Kleiner Buddha',
          es: '',
        },
      },
    ],
  },
  pdays: {
    id: 'pdays',
    name: {
      en: 'Education',
      fr: 'Eleveur',
      de: 'Schüler',
      es: '',
    },
    description: {
      en: 'Number of days spent on the site',
      fr: 'Nombre de jours de présence sur le site',
      de: 'Anzahl der in Dinoland verbrachten Tage',
      es: '',
    
    },
    rare: 2,
    unlocks: [
      {
        count: 5,
        points: 1,
        icon: 'r_plume.gif',
        title: {
          en: 'Studious Pupil',
          fr: 'Elève attentif',
          de: 'Geduldiger Schüler',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Attentive Orator',
          fr: 'Orateur éclairé',
          de: 'Aufgeklärter Redner',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Gifted Preacher',
          fr: 'Prêcheur accompli',
          de: 'Vollkommener Prediger',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Experienced Narrator',
          fr: 'Raconteur aguerri',
          de: 'Abgehärteter Erzähler',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Archive Creator',
          fr: 'Grand conteur',
          de: 'Großer Märchenerzähler',
          es: '',
        },
      },
      {
        count: 300,
        points: 0,
        title: {
          en: 'Master Historian',
          fr: 'Maître Historien',
          de: 'Professor für Geschichte',
          es: '',
        },
      },
      {
        count: 600,
        points: 0,
        title: {
          en: 'Ancient Oracle',
          fr: 'Grand Ancien',
          de: 'Enzyklopädie',
          es: '',
        },
      },
    ],
  },
  lvlup: {
    id: 'lvlup',
    name: {
      en: 'Trainer',
      fr: 'Entraîneur',
      de: 'Trainer',
      es: '',
    },
    description: {
      en: 'Number of Level-ups carried out',
      fr: 'Nombre de levelup réalisés',
      de: 'Anzahl der Level-Ups',
      es: '',
    
    },
    rare: 2,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'small_lup_fix.gif',
        title: {
          en: 'Sunday Trainer',
          fr: 'Entraîneur du dimanche',
          de: 'Freizeit-Trainer',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Apprentice Trainer',
          fr: 'Apprenti entraineur',
          de: 'Trainer-Novize',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Amateur Trainer',
          fr: 'Entraîneur amateur',
          de: 'Amateur-Trainer',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Experienced Trainer',
          fr: 'Entraîneur expérimenté',
          de: 'Erfahrener Trainer',
          es: '',
        },
      },
      {
        count: 300,
        points: 1,
        title: {
          en: 'Great Trainer',
          fr: 'Grand Entraîneur',
          de: 'Großer Trainer',
          es: '',
        },
      },
      {
        count: 400,
        points: 1,
        title: {
          en: 'Ultimate Trainer',
          fr: 'Entraîneur ultime',
          de: 'Ultimativer Trainer',
          es: '',
        },
      },
      {
        count: 500,
        points: 1,
        title: {
          en: 'Grand Master',
          fr: 'Grand Maître',
          de: 'Großmeister',
          es: '',
        },
      },
    ],
  },
  killm: {
    id: 'killm',
    name: {
      en: 'Monster Killer',
      fr: 'Tueur de monstres',
      de: 'Monsterjäger',
      es: '',
    },
    description: {
      en: 'Number of monsters killed on your adventures',
      fr: 'Nombre de monstres tués durant vos aventures',
      de: 'Anzahl der von dir getöteten Monster',
      es: '',
    
    },
    rare: 2,
    unlocks: [
      {
        count: 50,
        points: 1,
        icon: 'r_monster.gif',
        title: {
          en: 'Monster Hunter',
          fr: 'Balayeur de restes',
          de: 'Freizeit-Jäger',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Scourge of Beasts',
          fr: 'Bourreau des corps',
          de: 'Leichenschinder',
          es: '',
        },
      },
      {
        count: 1000,
        points: 1,
        title: {
          en: 'Monster Killer',
          fr: 'Chasseur de monstres',
          de: 'Monsterjäger',
          es: '',
        },
      },
      {
        count: 2000,
        points: 1,
        title: {
          en: 'Monster Annihilator',
          fr: 'Tueur barbare',
          de: 'Barbarentöter',
          es: '',
        },
      },
      {
        count: 5000,
        points: 1,
        title: {
          en: 'Giant Killer',
          fr: 'Annihilateur de géant',
          de: 'Zerschmetterer der Riesen',
          es: '',
        },
      },
      {
        count: 10000,
        points: 1,
        title: {
          en: '"Barbarian Destroyer',
          fr: 'Dévastateur de colosses',
          de: 'Verheerer der Kolosse',
          es: '',
        },
      },
      {
        count: 20000,
        points: 1,
        title: {
          en: 'Reaper of Tita',
          fr: 'Exterminateur de Titans',
          de: 'Vernichter der Titanen',
          es: '',
        },
      },
      {
        count: 50000,
        points: 1,
        title: {
          en: 'King of Chao',
          fr: 'Roi du chaos',
          de: 'König des Chaos',
          es: '',
        },
      },
      {
        count: 100000,
        points: 1,
        title: {
          en: 'God of Destruction',
          fr: 'Dieu de la destruction',
          de: 'Gott der Zerstörung',
          es: '',
        },
      },
    ],
  },
  killd: {
    id: 'killd',
    name: {
      en: 'Dinoz Challenger',
      fr: 'Challenger de Dinoz',
      de: 'Dinoz-Herausforderer',
      es: '',
    },
    description: {
      en: 'Number of Dinoz defeated in events',
      fr: 'Nombre de Dinoz vaincus durant les évènements',
      de: 'Anzahl der während Events besiegter Dinoz',
      es: '',
    
    },
    rare: 1,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'small_attack.gif',
        title: {
          en: 'Timid adversary',
          fr: 'Combattant timide',
          de: 'Schüchterner Kämpfer',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Merciless Warrior',
          fr: 'Guerrier sans pitié',
          de: 'Krieger ohne Erbarmen',
          es: '',
        },
      },
      {
        count: 500,
        points: 0,
        title: {
          en: 'Night Terror',
          fr: 'Terreur nocturne',
          de: 'Schrecken der Nacht',
          es: '',
        },
      },
      {
        count: 2000,
        points: 0,
        title: {
          en: 'Walking Nightmare',
          fr: 'Cauchemar ambulant',
          de: 'Wandelnder Alptraum',
          es: '',
        },
      },
      {
        count: 5000,
        points: 0,
        title: {
          en: 'Master Reaper',
          fr: 'Faucheur absolu',
          de: 'Schnitter',
          es: '',
        },
      },
      {
        count: 10000,
        points: 0,
        title: {
          en: 'God of Death',
          fr: 'Dieu de la mort',
          de: 'Gott des Todes',
          es: '',
        },
      },
    ],
  },
  healpv: {
    id: 'healpv',
    name: {
      en: 'Health Points Recovered',
      fr: 'Point de vie récupérés',
      de: 'Wiedergewonnene Lebenspunkte',
      es: '',
    },
    description: {
      en: 'How many HP have you regained?',
      fr: 'Combien de pv avez vous regagnés ?',
      de: 'Soviele Lebenspunkte hast du wiedergewonnen',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 500,
        points: 0,
        icon: 'r_heal.gif',
        title: {
          en: 'Sexy Nurse',
          fr: 'Infirmière sexy',
          de: 'Sexy Krankenschwester',
          es: '',
        },
      },
      {
        count: 5000,
        points: 0,
        title: {
          en: 'Doctor without borders',
          fr: 'Médecin sans frontière',
          de: 'Arzt ohne Grenzen',
          es: '',
        },
      },
      {
        count: 15000,
        points: 0,
        title: {
          en: 'Superior Doctor',
          fr: 'Docteur supérieur',
          de: 'Versierter Leibarzt',
          es: '',
        },
      },
      {
        count: 50000,
        points: 0,
        title: {
          en: 'Majestic Healer',
          fr: 'Guérisseur majestueux',
          de: 'Majestätischer Medizinmann',
          es: '',
        },
      },
      {
        count: 100000,
        points: 0,
        title: {
          en: 'Chaos Surgeon',
          fr: 'Chirurgien du chaos',
          de: 'Chirurg des Chaos',
          es: '',
        },
      },
      {
        count: 500000,
        points: 0,
        title: {
          en: 'Divine Omnipractician',
          fr: 'Omnipraticien divin',
          de: 'Hippokrates',
          es: '',
        },
      },
    ],
  },
  upwood: {
    id: 'upwood',
    name: {
      en: 'Wood Specialist',
      fr: 'Spécialiste du bois',
      de: 'Holzspezialist',
      es: '',
    },
    description: {
      en: 'Number of Wood level-ups',
      fr: 'Nombre de up réalisés sur l\'élément bois',
      de: 'Anzahl der Level-Ups beim Holz-Element',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_wood.gif',
        title: {
          en: 'Tiny Acorn',
          fr: 'Jeune pi-mousse',
          de: 'Jungspund',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Young Shoot',
          fr: 'Belle au bois dormant',
          de: 'Meister Eder',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Sturdy Oak',
          fr: 'Gueule de bois',
          de: 'Erfahrener Schreiner',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Megalomaniac Carpenter',
          fr: 'Charpentier mégalomaniaque',
          de: 'Begnadeter Zimmermann',
          es: '',
        },
      },
      {
        count: 800,
        points: 0,
        title: {
          en: 'Would a woodchuck chuck wood?',
          fr: 'Bûcheron ancestral',
          de: 'Ehrwürdiger Holzfäller',
          es: '',
        },
      },
    ],
  },
  upfire: {
    id: 'upfire',
    name: {
      en: 'Fire Specialis',
      fr: 'Spécialiste du feu',
      de: 'Feuerspezialist',
      es: '',
    },
    description: {
      en: 'Number of Fire level-ups',
      fr: 'Nombre de up réalisés sur l\'élément feu',
      de: 'Anzahl der Level-Ups beim Feuer-Element',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_fire.gif',
        title: {
          en: 'Sparky',
          fr: 'Flammèche',
          de: 'Flämmchen',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Firestarter',
          fr: 'Brasier des ténèbres',
          de: 'Flamme der Finsternis',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Shadow Flame',
          fr: 'Flamme infernale',
          de: 'Infernale Flamme',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Infernal Furnace',
          fr: 'Maître du feu',
          de: 'Meister der Flammen',
          es: '',
        },
      },
      {
        count: 800,
        points: 0,
        title: {
          en: 'Divine Pyromaniac',
          fr: 'Pyromane divin',
          de: 'Göttlicher Pyromane',
          es: '',
        },
      },
    ],
  },
  upthun: {
    id: 'upthun',
    name: {
      en: 'Lightning Specialist',
      fr: 'Spécialiste de la foudre',
      de: 'Blitzspezialist',
      es: '',
    },
    description: {
      en: 'Number of Lightning level-ups',
      fr: 'Nombre de up réalisés sur l\'élément foudre',
      de: 'Anzahl der Level-Ups beim Blitz-Element',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_thunder.gif',
        title: {
          en: 'Volta',
          fr: 'Triton grillé',
          de: 'Kurzschluss',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Overload',
          fr: 'Excès de vitesse',
          de: 'Überladung',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Caged Lightning',
          fr: 'Eclair de génie',
          de: 'Blitzschlag',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Flash',
          fr: 'Guerrier foudroyant',
          de: 'Blitzschleuderer',
          es: '',
        },
      },
      {
        count: 800,
        points: 0,
        title: {
          en: 'GigaWatt',
          fr: 'Maître du Saint-Elme',
          de: 'Mister 100.000 Volt',
          es: '',
        },
      },
    ],
  },
  upair: {
    id: 'upair',
    name: {
      en: 'Air Specialist',
      fr: 'Spécialiste de l\'air',
      de: 'Luftspezialist',
      es: '',
    },
    description: {
      en: 'Number of Air level-ups',
      fr: 'Nombre de up réalisés sur l\'élément air',
      de: 'Anzahl der Level-Ups beim Luft-Element',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_air.gif',
        title: {
          en: 'Morning Breeze',
          fr: 'Gaz incolore',
          de: 'Morgenhauch',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Fresh Wind',
          fr: 'Vent vif',
          de: 'Frische Brise',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Free as the air',
          fr: 'Libre comme l’air',
          de: 'Frei wie der Wind',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Devastating Cyclone',
          fr: 'Cyclone dévastateur',
          de: 'Verheerender Zyklon',
          es: '',
        },
      },
      {
        count: 800,
        points: 0,
        title: {
          en: 'Rock you like a Hurricane',
          fr: 'Djinn furieux',
          de: 'Wütender Hurrikan',
          es: '',
        },
      },
    ],
  },
  upwatr: {
    id: 'upwatr',
    name: {
      en: 'Water Specialist',
      fr: 'Spécialiste de l\'eau',
      de: 'Wasserspezialist',
      es: '',
    },
    description: {
      en: 'Number of Water level-ups',
      fr: 'Nombre de up réalisés sur l\'élément eau',
      de: 'Anzahl der Level-Ups beim Wasser-Element',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_water.gif',
        title: {
          en: 'Rubber Duck',
          fr: 'Canard de bain',
          de: 'Gummiente',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Leaky Faucet',
          fr: 'Marin d\'eau douce',
          de: 'Tropfender Wasserhahn',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Heart of Ice',
          fr: 'Coeur de glace',
          de: 'Herz aus Ei',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Extreme flood',
          fr: 'Déluge extrême',
          de: 'Sintflut',
          es: '',
        },
      },
      {
        count: 800,
        points: 0,
        title: {
          en: 'Aqueous Abyss',
          fr: 'Faille abyssale',
          de: 'Wogender Abyss',
          es: '',
        },
      },
    ],
  },
  brkpel: {
    id: 'brkpel',
    name: {
      en: 'Shovel Smasher',
      fr: 'Casseur de pelles',
      de: 'Schaufelzerbrecher',
      es: '',
    },
    description: {
      en: 'Number of broken shovels',
      fr: 'Nombre de pelles cassées',
      de: 'Anzahl der von dir zerbrochenen Schaufeln',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 5,
        points: 1,
        icon: 'r_digger.gif',
        title: {
          en: 'Earthworm',
          fr: 'Ver de terre',
          de: 'Regenwurm',
          es: '',
        },
      },
      {
        count: 10,
        points: 1,
        title: {
          en: 'Amateur Miner',
          fr: 'Mineur amateur',
          de: 'Amateur-Bergmann',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Craftsman Miner',
          fr: 'Galibot',
          de: 'Bergmann',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'JCB',
          fr: 'Porion',
          de: 'Erfahrener Bergmann',
          es: '',
        },
      },
      {
        count: 150,
        points: 1,
        title: {
          en: 'Celebrity Excavator',
          fr: 'Taupe herculéenne',
          de: 'Herkulesmaulwurf',
          es: '',
        },
      },
      {
        count: 300,
        points: 1,
        title: {
          en: 'Manic Miner',
          fr: 'Ravineur de légende',
          de: 'Legendärer Buddler',
          es: '',
        },
      },
      {
        count: 1000,
        points: 0,
        title: {
          en: 'Half-man, half-mole',
          fr: 'Excavateur souverain',
          de: 'Ruhmreicher Gräber',
          es: '',
        },
      },
      {
        count: 2500,
        points: 0,
        title: {
          en: 'Subterranean Master',
          fr: 'Maître des profondeurs',
          de: 'Meister der Tiefen',
          es: '',
        },
      },
    ],
  },
  chasse: {
    id: 'chasse',
    name: {
      en: 'Hunter',
      fr: 'Chasseur',
      de: 'Jäger',
      es: '',
    },
    description: {
      en: 'Number of times you\'ve set out to kill stuff!',
      fr: 'Nombre d\'actions de chasses réalisées',
      de: 'Anzahl der von dir durchgeführten Jagden',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_hunt.gif',
        title: {
          en: 'Dinoville Hunt Subscriber',
          fr: 'Galinette Cendrée',
          de: 'Frischling',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Reader of Hunting, Shooting, Fishing etc.',
          fr: 'Champion d\'appeau',
          de: 'Waidmann',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Weekend Huntsman',
          fr: 'Braconnier baraqué',
          de: 'Breitschultriger Wilderer',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Sioux Trailfinder',
          fr: 'Pisteur véloce',
          de: 'Flinker Fährtenleser',
          es: '',
        },
      },
      {
        count: 500,
        points: 1,
        title: {
          en: 'Master Trapper',
          fr: 'Trappeur aguerri',
          de: 'Abgehärteter Trapper',
          es: '',
        },
      },
      {
        count: 1000,
        points: 0,
        title: {
          en: 'King of the Hunt',
          fr: 'Roi de la chasse',
          de: 'König der Jagd',
          es: '',
        },
      },
      {
        count: 2000,
        points: 0,
        title: {
          en: 'God of the Hunt',
          fr: 'Dieu de la chasse',
          de: 'Gott der Jagd',
          es: '',
        },
      },
    ],
  },
  cueill: {
    id: 'cueill',
    name: {
      en: 'Harvester',
      fr: 'Cueilleur',
      de: 'Ernter',
      es: '',
    },
    description: {
      en: 'Number of harvesting operations carried out',
      fr: 'Nombre d\'actions de cueillette réalisées',
      de: 'Anzahl der von dir durchgeführten Ernten',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_gather.gif',
        title: {
          en: 'Dinoville Harvest Subscriber',
          fr: 'Cueilleur romantique',
          de: 'Blumenpflücker',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Evil Herb Collector',
          fr: 'Ramasseur de mauvaises herbes',
          de: 'Unkrautjäter',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Time-served Picker',
          fr: 'Grapilleur expérimenté',
          de: 'Erfahrener Pflücker',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Modern Day Druid',
          fr: 'Druide des temps modernes',
          de: 'Druide der Neuzeit',
          es: '',
        },
      },
      {
        count: 500,
        points: 1,
        title: {
          en: 'Powerful Sorcerer',
          fr: 'Puissant sorcier',
          de: 'Mächtiger Hexer',
          es: '',
        },
      },
      {
        count: 1000,
        points: 0,
        title: {
          en: 'King of the Harvest',
          fr: 'Roi des récoltes',
          de: 'König der Ernte',
          es: '',
        },
      },
      {
        count: 2000,
        points: 0,
        title: {
          en: 'God of the Harvest',
          fr: 'Dieu des récoltes',
          de: 'Gott der Ernte',
          es: '',
        },
      },
    ],
  },
  peche: {
    id: 'peche',
    name: {
      en: 'Fisherman',
      fr: 'Pêcheur',
      de: 'Angler',
      es: '',
    },
    description: {
      en: 'Number of fishing trips',
      fr: 'Nombre d\'actions de pêche réalisées',
      de: 'Anzahl deiner Angelausflüge',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_peche.gif',
        title: {
          en: 'Line Fisherman',
          fr: 'Pêcheur à la ligne',
          de: 'Kescher',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Fly Fisherman',
          fr: 'Pêcheur à la mouche',
          de: 'Fliegenfischer',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Deadliest Catch',
          fr: 'Pêcheur en haute mer',
          de: 'Hochseefischer',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Fishing with Dynamite',
          fr: 'Pêcheur à la dynamite',
          de: 'Dynamit-Angler',
          es: '',
        },
      },
      {
        count: 500,
        points: 1,
        title: {
          en: 'Ultimate Fisherman',
          fr: 'Pêcheur ultime',
          de: 'Ultimativer Angler',
          es: '',
        },
      },
      {
        count: 1000,
        points: 0,
        title: {
          en: 'King Fisherman',
          fr: 'Roi de la Pêche',
          de: 'König des Angelns',
          es: '',
        },
      },
      {
        count: 2000,
        points: 0,
        title: {
          en: 'God of Fishing',
          fr: 'Dieu de la Pêche',
          de: 'Gott des Angelns',
          es: '',
        },
      },
    ],
  },
  energy: {
    id: 'energy',
    name: {
      en: 'Energizer',
      fr: 'Energétiseur',
      de: 'Energizer',
      es: '',
    },
    description: {
      en: 'Number of actions carried out which regenerate energy',
      fr: 'Nombre d\'actions d\'énergétisation réalisées',
      de: 'Anzahl der Energizer-Aktionen',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_comp.gif',
        title: {
          en: 'Energising? It\'s a bit scary',
          fr: 'Energétiser, je n\'ose pas trop',
          de: 'Energizen? Also ich weiß nicht...',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Energising? It beats eating!',
          fr: 'Energétiser, c\'est mieux que manger',
          de: 'Energizen? Besser als Essen',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Energising? I live for it!',
          fr: 'Energétiser, c\'est toute ma vie',
          de: 'Energizen? Das ist mein Leben',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Fission Researcher',
          fr: 'Chercheur en fission',
          de: 'Atomforscher',
          es: '',
        },
      },
      {
        count: 500,
        points: 1,
        title: {
          en: 'Atomic Master',
          fr: 'Maître des atomes',
          de: 'Meister der Atome',
          es: '',
        },
      },
      {
        count: 1000,
        points: 0,
        title: {
          en: 'King of Fusion',
          fr: 'Roi de la fusion',
          de: 'König der Fusion',
          es: '',
        },
      },
      {
        count: 2000,
        points: 0,
        title: {
          en: 'God of Fusion',
          fr: 'Dieu de la fusion',
          de: 'Gott der Fusion',
          es: '',
        },
      },
    ],
  },
  fouill: {
    id: 'fouill',
    name: {
      en: 'Scavenger',
      fr: 'Fouilleur',
      de: 'Graber',
      es: '',
    },
    description: {
      en: 'Number of scavenges carried out',
      fr: 'Nombre d\'actions de fouilles réalisées',
      de: 'Anzahl der von dir ausgeführten Grabungen',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_fouille.gif',
        title: {
          en: 'Pebble Collecto',
          fr: 'Ramasseur de caillou',
          de: 'Kieswühler',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Skilled Scavenger',
          fr: 'Fouilleur assidu',
          de: 'Eifriger Buddler',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Ruin Fan',
          fr: 'Amateur de ruines',
          de: 'Ruinennovize',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Documented Architect',
          fr: 'Archéologue documenté',
          de: 'Diplomierter Archäologe',
          es: '',
        },
      },
      {
        count: 500,
        points: 1,
        title: {
          en: 'Treasure Inventor',
          fr: 'Inventeur de trésor',
          de: 'Schatzfinder',
          es: '',
        },
      },
      {
        count: 1000,
        points: 0,
        title: {
          en: 'Master of Discoveries',
          fr: 'Maître des décombres',
          de: 'Herr der Ausgrabungen',
          es: '',
        },
      },
      {
        count: 2000,
        points: 0,
        title: {
          en: 'Expert on Ancient Worlds',
          fr: 'Expert des mondes Antiques',
          de: 'Fachmann für Antike',
          es: '',
        },
      },
    ],
  },
  market: {
    id: 'market',
    name: {
      en: 'Salesman',
      fr: 'Vendeur',
      de: 'Verkäufer',
      es: '',
    },
    description: {
      en: 'Number of sales made at the market',
      fr: 'Nombre de ventes conclues au marché',
      de: 'Anzahl der auf dem Markt verkauften Artikel',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 2,
        points: 1,
        icon: 'r_market.gif',
        title: {
          en: 'Soul of Camelot',
          fr: 'Âme de camelot',
          de: 'Seele von Camelot',
          es: '',
        },
      },
      {
        count: 5,
        points: 1,
        title: {
          en: 'Bric-a-brac stallkeeper',
          fr: 'Brocanteur futé',
          de: 'Pfiffiger Trödelhändler',
          es: '',
        },
      },
      {
        count: 10,
        points: 1,
        title: {
          en: 'Wise Trader',
          fr: 'Marchand avisé',
          de: 'Besonnener Verkäufer',
          es: '',
        },
      },
      {
        count: 20,
        points: 1,
        title: {
          en: 'Experienced Merchant',
          fr: 'Fournisseur expérimenté',
          de: 'Erfahrener Anbieter',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Dinoz Broker',
          fr: 'Négociant en Dinoz',
          de: 'Gordon Dino',
          es: '',
        },
      },
      {
        count: 100,
        points: 0,
        title: {
          en: 'Master Trafficker',
          fr: 'Maître Trafiquant',
          de: 'Meister der Verschieber',
          es: '',
        },
      },
      {
        count: 500,
        points: 0,
        title: {
          en: 'Traffick-King',
          fr: 'Roi Trafiquant',
          de: 'König der Verschieber',
          es: '',
        },
      },
    ],
  },
  sbuyer: {
    id: 'sbuyer',
    name: {
      en: 'Buyer',
      fr: 'Acheteur',
      de: 'Käufer',
      es: '',
    },
    description: {
      en: 'Number of purchases made in the shop',
      fr: 'Nombre d\'objets acquis en boutique',
      de: 'Anzahl der in Geschäften gekauften Artikel',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_purse.gif',
        title: {
          en: 'Bargain Hunter',
          fr: 'Chineur du dimanche',
          de: 'Schnäppchenjäger',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Aware Buyer',
          fr: 'Acheteur averti',
          de: 'Erfahrener Käufer',
          es: '',
        },
      },
      {
        count: 200,
        points: 1,
        title: {
          en: 'Compulsive Buyer',
          fr: 'Consommateur compulsif',
          de: 'Zwanghafter Käufer',
          es: '',
        },
      },
      {
        count: 500,
        points: 1,
        title: {
          en: 'Panic Buyer',
          fr: 'Acquéreur fièvreux',
          de: 'Kaufsüchtiger',
          es: '',
        },
      },
      {
        count: 2000,
        points: 1,
        title: {
          en: 'Master Promoter',
          fr: 'Maître promoteur',
          de: 'Meisterpromoter',
          es: '',
        },
      },
      {
        count: 10000,
        points: 0,
        title: {
          en: 'Caveat Emptor',
          fr: 'Géant de la consommation',
          de: 'Ungezügelter Konsument',
          es: '',
        },
      },
      {
        count: 25000,
        points: 0,
        title: {
          en: 'Hardcore Gamer',
          fr: 'Hardcore gamer',
          de: 'Hardcore-Gamer',
          es: '',
        },
      },
    ],
  },
  clans: {
    id: 'clans',
    name: {
      en: 'Community Life',
      fr: 'Vie communautaire',
      de: 'Leben in der Community',
      es: '',
    },
    description: {
      en: 'Number of clans this player has appeared in',
      fr: 'Nombre de clans dans lequel le joueur a été aperçu',
      de: 'Anzahl der Klans, in denen du schon einmal warst',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 5,
        points: 1,
        icon: 'r_mercenaire.gif',
        prefix: true,
        title: {
          en: 'Vagabond',
          fr: 'Vagabond',
          de: 'Vagabund',
          es: '',
        },
      },
      {
        count: 50,
        points: 0,
        prefix: true,
        title: {
          en: 'Mercenary',
          fr: 'Mercenaire',
          de: 'Söldner',
          es: '',
        },
      },
      {
        count: 100,
        points: 0,
        prefix: true,
        title: {
          en: 'Dorogon Knight',
          fr: 'Chevalier Dorogon',
          de: 'Ritter der Dorogon',
          es: '',
        },
      },
    ],
  },
  beauty: {
    id: 'beauty',
    name: {
      en: 'Beautician',
      fr: 'Plasticien',
      de: 'Kosmetiker',
      es: '',
    },
    description: {
      en: 'Number of Beauty Contest titles won by this player\'s dinoz',
      fr: 'Nombre de titres de beautés remportés par les Dinoz du joueur',
      de: 'Anzahl der von deinen Dinoz gewonnenen Schönheitstitel',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 2,
        points: 1,
        icon: 'r_beauty.gif',
        title: {
          en: 'Gifted Groomer',
          fr: 'Toiletteur doué',
          de: 'Begabter Friseur',
          es: '',
        },
      },
      {
        count: 5,
        points: 0,
        title: {
          en: 'Qualified Make-up Artist',
          fr: 'Maquilleur chevronné',
          de: 'Versierter Maskenbildner',
          es: '',
        },
      },
      {
        count: 10,
        points: 0,
        title: {
          en: 'Aesthetic Designer',
          fr: 'Designer esthète',
          de: 'Ästhet & Designer',
          es: '',
        },
      },
      {
        count: 20,
        points: 0,
        title: {
          en: 'Professional Beautician',
          fr: 'Plasticien professionnel',
          de: 'Schönheitschirurg',
          es: '',
        },
      },
      {
        count: 50,
        points: 0,
        title: {
          en: 'Master Aesthetician',
          fr: 'Maître Apollon',
          de: 'Meister Apollo',
          es: '',
        },
      },
    ],
  },
  gdcatt: {
    id: 'gdcatt',
    name: {
      en: 'Attacker',
      fr: 'Assaillant',
      de: 'Angreifer',
      es: '',
    },
    description: {
      en: 'Number of attacks carried out against enemy castles',
      fr: 'Nombre d\'attaques menées contre un château adverse',
      de: 'So viele Male hast du ein gegnerisches Schloss angegriffen',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_attack.gif',
        title: {
          en: 'Battlefield dwarf',
          fr: 'Nain des champs de bataille',
          de: 'Kampfzwerg',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Scourge of the Sandbox',
          fr: 'Terreur des bacs à sable',
          de: 'Sandkastenschreck',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Pit Pillager',
          fr: 'Screugnargneux',
          de: 'Schlossstürmer',
          es: '',
        },
      },
      {
        count: 300,
        points: 1,
        title: {
          en: 'Barricade Basher',
          fr: 'Barbar’apapa',
          de: 'Stürmender Barbar',
          es: '',
        },
      },
      {
        count: 800,
        points: 1,
        title: {
          en: 'Scarecrusher',
          fr: 'Epouvantraille',
          de: 'Herzloser Belagerer',
          es: '',
        },
      },
      {
        count: 1500,
        points: 0,
        title: {
          en: 'Hardcore Attacker',
          fr: 'Gros bourrin',
          de: 'Gefürchteter Schleifer',
          es: '',
        },
      },
      {
        count: 2000,
        points: 0,
        title: {
          en: 'Destructor General',
          fr: 'Roi destructeur',
          de: 'Legendärer Zerstörer',
          es: '',
        },
      },
      {
        count: 3000,
        points: 0,
        title: {
          en: 'Almighty Destroyer',
          fr: 'Dieu destructeur',
          de: 'Gott der Zerstörung',
          es: '',
        },
      },
    ],
  },
  gdcdef: {
    id: 'gdcdef',
    name: {
      en: 'Defender',
      fr: 'Defenseur',
      de: 'Verteidiger',
      es: '',
    },
    description: {
      en: 'Number of times you have defended your castl',
      fr: 'Nombre de fois où vous avez défendu votre château',
      de: 'So viele Male hast du dein Schloss verteidigt',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 10,
        points: 1,
        icon: 'r_defense.gif',
        title: {
          en: 'Thorn in the foot',
          fr: 'Epine dans le pied',
          de: 'Splitter im Fuß',
          es: '',
        },
      },
      {
        count: 50,
        points: 1,
        title: {
          en: 'Mousetrap',
          fr: 'Piège à loup',
          de: 'Wolfsfalle',
          es: '',
        },
      },
      {
        count: 100,
        points: 1,
        title: {
          en: 'Stake Pit',
          fr: 'Barricade magique',
          de: 'Magische Barrikade',
          es: '',
        },
      },
      {
        count: 300,
        points: 1,
        title: {
          en: 'Bear Trap',
          fr: 'Chevalier émérite',
          de: 'Gewandter Ritter',
          es: '',
        },
      },
      {
        count: 800,
        points: 1,
        title: {
          en: 'Brave Heart',
          fr: 'Coeur vaillant',
          de: 'Tapferes Herz',
          es: '',
        },
      },
      {
        count: 1500,
        points: 0,
        title: {
          en: 'Defender Rampant',
          fr: 'Rempart sacré',
          de: 'Gesegneter Schutzwall',
          es: '',
        },
      },
      {
        count: 2000,
        points: 0,
        title: {
          en: 'Brick Top',
          fr: 'Mur ultime',
          de: 'Unüberwindbare Mauer',
          es: '',
        },
      },
      {
        count: 3000,
        points: 0,
        title: {
          en: 'Knight of Legend',
          fr: 'Paladin légendaire',
          de: 'Legendärer Paladin',
          es: '',
        },
      },
    ],
  },
  bgum: {
    id: 'bgum',
    name: {
      en: 'Dinoland Community',
      fr: 'Médaille cool',
      de: 'Dinoland Community',
      es: '',
    },
    description: {
      en: 'The most giving of Dinoz masters',
      fr: 'La crême des maîtres Dinoz',
      de: 'Die Crème de la Crème der Dinozmeister',
      es: '',
    
    },
    rare: 1,
    unlocks: [
      {
        count: 1,
        points: 0,
        icon: 'r_bgum.gif',
        title: {
          en: 'Kiss Cool™',
          fr: 'Bisou Cool™',
          de: 'Lotse',
          es: '',
        },
      },
      {
        count: 5,
        points: 0,
        title: {
          en: 'Proven Mediator',
          fr: 'Mediator accordé',
          de: 'Beredter Vermittler',
          es: '',
        },
      },
      {
        count: 10,
        points: 0,
        title: {
          en: 'Good Time Manager',
          fr: 'Tenancier du bon goût',
          de: 'Guter Geschmack im Überfluss',
          es: '',
        },
      },
      {
        count: 15,
        points: 0,
        title: {
          en: 'Enlightener of the Dark World',
          fr: 'Eclaireur du monde sombre',
          de: 'Erleuchter der dunklen Welt',
          es: '',
        },
      },
      {
        count: 20,
        points: 0,
        title: {
          en: 'Michael the Guide v2.0',
          fr: 'Guide Michel 2.0',
          de: 'Guide Michel 2.0',
          es: '',
        },
      },
      {
        count: 30,
        points: 0,
        title: {
          en: 'Papy Joe\'s Twin',
          fr: 'Jumeau de Papy joe',
          de: 'Papy Joes Zwilling',
          es: '',
        },
      },
      {
        count: 50,
        points: 0,
        title: {
          en: 'Bao\'s Ancestor',
          fr: 'Ancêtre de Bao',
          de: 'Vorfahre Baos',
          es: '',
        },
      },
      {
        count: 100,
        points: 0,
        title: {
          en: 'Archdorogon',
          fr: 'Archidorogon',
          de: 'Erzdorogon',
          es: '',
        },
      },
      {
        count: 150,
        points: 0,
        title: {
          en: '6th Guardian of Dinoland',
          fr: '6ème Gardien de Dinoland',
          de: '6. Wächter von Dinoland',
          es: '',
        },
      },
    ],
  },
  medgol: {
    id: 'medgol',
    name: {
      en: 'Gold Medal',
      fr: 'Médaille d\'or',
      de: 'Goldmedaille',
      es: '',
    },
    description: {
      en: 'You finished first! Congratulations!',
      fr: 'Vous avez fini premier ! Félicitations !',
      de: 'Herzlichen Glückwunsch, ihr seid erster!',
      es: '',
    
    },
    rare: 1,
    unlocks: [
      {
        count: 1,
        points: 0,
        icon: 'r_medgol.gif',
      },
    ],
  },
  medsil: {
    id: 'medsil',
    name: {
      en: 'Silver medal',
      fr: 'Médaille d\'argent',
      de: 'Silbermedaille',
      es: '',
    },
    description: {
      en: 'You finished second! Bravo!',
      fr: 'Vous avez fini second ! Bravo !',
      de: 'Bravo, ihr seid zweiter!',
      es: '',
    
    },
    rare: 1,
    unlocks: [
      {
        count: 1,
        points: 0,
        icon: 'r_medsil.gif',
      },
    ],
  },
  medbro: {
    id: 'medbro',
    name: {
      en: 'Bronze Medal',
      fr: 'Médaille de bronze',
      de: 'Bronzemedaille',
      es: '',
    },
    description: {
      en: 'You finished third! Great performance!',
      fr: 'Vous avez fini troisième ! C\'est une très belle performance !',
      de: 'Ihr seid auf Rang drei. Super Leistung!',
      es: '',
    
    },
    rare: 1,
    unlocks: [
      {
        count: 1,
        points: 0,
        icon: 'r_medbro.gif',
      },
    ],
  },
  medpla: {
    id: 'medpla',
    name: {
      en: 'Participation Medal',
      fr: 'Médaille de participation',
      de: 'Teilnahmemedaille',
      es: '',
    },
    description: {
      en: 'Dinolympic Athlete - be proud of your achievements!',
      fr: 'Vous avez réussi à vous classer parmi les meilleurs participants !',
      de: 'Ihr gehört zu den besten Teilnehmern!!',
      es: '',
    
    },
    rare: 1,
    unlocks: [
      {
        count: 1,
        points: 0,
        icon: 'r_medgol.gif',
      },
    ],
  },
  lvlup1: {
    id: 'lvlup1',
    name: {
      en: '1st Limit Broken',
      fr: '1ère limite brisée',
      de: '1st Limit Broken',
      es: '',
    },
    description: {
      en: 'Your dinoz have evolved and reached level 60!',
      fr: 'Vous avez fait évoluer vos dinoz jusqu\'au niveau 60 !',
      de: 'Your dinoz have evolved and reached level 60!',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 0,
        icon: 'fx_lvlup1.gif',
      },
    ],
  },
  lvlup2: {
    id: 'lvlup2',
    name: {
      en: '2nd Limit Broken',
      fr: '2ème limite brisée',
      de: '2nd Limit Broken',
      es: '',
    },
    description: {
      en: 'Your dinoz have evolved and reached level 70!',
      fr: 'Vous avez fait évoluer vos dinoz jusqu\'au niveau 70 !',
      de: 'Your dinoz have evolved and reached level 70!',
      es: '',
    
    },
    rare: 0,
    unlocks: [
      {
        count: 1,
        points: 0,
        icon: 'fx_lvlup2.gif',
      },
    ],
  },
};

export const DinoRpgAdjustedGoals = adjustGoals(DinoRpgGoals);