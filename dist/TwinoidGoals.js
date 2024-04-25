'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Get the total points for a game
 * @param goals
 * @returns
 */
var getTotalPoints = function (goals) { return Object.values(goals)
    .reduce(function (total, goal) { return total + goal.unlocks.reduce(function (total, unlock) { return total + unlock.points; }, 0); }, 0); };
/**
 * Adjust goal points so that the total is 1000
 * @param goals
 * @returns
 */
var adjustGoals = function (goals) {
    var totalPoints = getTotalPoints(goals);
    var adjustmentRatio = 1000 / totalPoints;
    var adjustedGoals = Object.values(goals).map(function (goal) { return (__assign(__assign({}, goal), { unlocks: goal.unlocks.map(function (unlock) { return (__assign(__assign({}, unlock), { points: Math.round(unlock.points * adjustmentRatio) })); }) })); });
    return Object.fromEntries(adjustedGoals.map(function (goal) { return [goal.id, goal]; }));
};
/**
 * Get a goal by id
 */
var getGoal = function (goals) { return function (id) {
    var goal = goals[id];
    return goal ? goal : null;
}; };
/**
 * Get the unlocked goals for a given number of points
 */
var getUnlockedGoals = function (goals) { return function (id, points) {
    var goal = getGoal(goals)(id);
    if (!goal)
        return [];
    var unlocked = goal.unlocks.filter(function (unlock) { return unlock.points <= points; });
    return unlocked;
}; };

var planets = {
	id: "planets",
	name: {
		en: "Planètes explorées",
		fr: "Planètes explorées",
		de: "Erkundete Planeten",
		es: "Planètes explorées"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "small_forum_read.gif"
		},
		{
			count: 2,
			points: 10
		},
		{
			count: 3,
			points: 10
		},
		{
			count: 4,
			points: 10
		},
		{
			count: 5,
			points: 10
		},
		{
			count: 6,
			points: 10
		},
		{
			count: 7,
			points: 10
		},
		{
			count: 8,
			points: 10
		},
		{
			count: 9,
			points: 10
		},
		{
			count: 10,
			points: 10
		},
		{
			count: 11,
			points: 10
		},
		{
			count: 12,
			points: 10
		},
		{
			count: 13,
			points: 10
		},
		{
			count: 14,
			points: 10
		},
		{
			count: 15,
			points: 10,
			icon: "small_forum.gif"
		},
		{
			count: 16,
			points: 10
		},
		{
			count: 17,
			points: 10
		},
		{
			count: 18,
			points: 10
		},
		{
			count: 19,
			points: 10
		},
		{
			count: 20,
			points: 10
		},
		{
			count: 21,
			points: 10
		}
	]
};
var earth = {
	id: "earth",
	name: {
		en: "Terre retrouvée",
		fr: "Terre retrouvée",
		de: "Wieder auf der Erde",
		es: "Terre retrouvée"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "small_earth.gif",
			title: {
				en: "Terre !",
				fr: "Terre !",
				de: "Die Erde!",
				es: "Terre !"
			}
		}
	]
};
var mission = {
	id: "mission",
	name: {
		en: "missions accomplies",
		fr: "missions accomplies",
		de: "Erledigte Missionen",
		es: "missions accomplies"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 10
		},
		{
			count: 2,
			points: 10
		},
		{
			count: 3,
			points: 10,
			icon: "small_fuel_free.gif"
		},
		{
			count: 4,
			points: 10
		},
		{
			count: 5,
			points: 10
		},
		{
			count: 6,
			points: 10
		},
		{
			count: 7,
			points: 10
		},
		{
			count: 8,
			points: 10
		},
		{
			count: 9,
			points: 10
		},
		{
			count: 10,
			points: 10,
			icon: "small_bricks.gif"
		},
		{
			count: 11,
			points: 10
		},
		{
			count: 12,
			points: 10
		},
		{
			count: 13,
			points: 10
		},
		{
			count: 14,
			points: 10
		},
		{
			count: 15,
			points: 10
		},
		{
			count: 16,
			points: 10
		},
		{
			count: 17,
			points: 10
		},
		{
			count: 18,
			points: 10
		},
		{
			count: 19,
			points: 10
		},
		{
			count: 20,
			points: 10
		},
		{
			count: 21,
			points: 10
		},
		{
			count: 22,
			points: 10
		},
		{
			count: 23,
			points: 10
		},
		{
			count: 24,
			points: 10
		},
		{
			count: 25,
			points: 10
		},
		{
			count: 26,
			points: 10
		},
		{
			count: 27,
			points: 10
		},
		{
			count: 28,
			points: 10
		},
		{
			count: 29,
			points: 10
		},
		{
			count: 30,
			points: 10,
			icon: "small_fuel.gif"
		},
		{
			count: 31,
			points: 10
		},
		{
			count: 32,
			points: 10
		},
		{
			count: 33,
			points: 10
		},
		{
			count: 34,
			points: 10
		},
		{
			count: 35,
			points: 10
		},
		{
			count: 36,
			points: 10
		},
		{
			count: 37,
			points: 10
		},
		{
			count: 38,
			points: 10
		}
	]
};
var map = {
	id: "map",
	name: {
		en: "niveaux réussis",
		fr: "niveaux réussis",
		de: "Fortschritt",
		es: "niveaux réussis"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 3,
			title: {
				en: "That's one small step for a man...",
				fr: "Un petit pas pour moi...",
				de: "Ein kleiner Schritt für mich...",
				es: "Un petit pas pour moi..."
			}
		},
		{
			count: 100,
			points: 3,
			title: {
				en: "Houston, we have a problem",
				fr: "Houston, on a un problème",
				de: "Houston, wir haben ein Problem",
				es: "Houston, on a un problème"
			}
		},
		{
			count: 1000,
			points: 3,
			title: {
				en: "Il fait noir, par ici.",
				fr: "Il fait noir, par ici.",
				de: "Es ist so dunkel hier.",
				es: "Il fait noir, par ici."
			}
		},
		{
			count: 10000,
			points: 3,
			title: {
				en: "'Coucou Laïka, il te reste des croquettes ?'",
				fr: "'Coucou Laïka, il te reste des croquettes ?'",
				de: "Laika, bist du bereit Gassi zu gehen?",
				es: "'Coucou Laïka, il te reste des croquettes ?'"
			}
		},
		{
			count: 100000,
			points: 3,
			title: {
				en: "L'univers infini, j'en ai fait le tour !",
				fr: "L'univers infini, j'en ai fait le tour !",
				de: "Einmal Universum und zurück bitte!",
				es: "L'univers infini, j'en ai fait le tour !"
			}
		}
	]
};
var escorp = {
	id: "escorp",
	name: {
		en: "Grade ESCORP atteint",
		fr: "Grade ESCORP atteint",
		de: "Dienstgrad ESCORP",
		es: "Grade ESCORP atteint"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "rank_1.gif"
		},
		{
			count: 2,
			points: 5,
			icon: "rank_2.gif"
		},
		{
			count: 3,
			points: 5,
			icon: "rank_3.gif"
		},
		{
			count: 4,
			points: 5,
			icon: "rank_4.gif"
		},
		{
			count: 5,
			points: 5,
			icon: "rank_5.gif"
		},
		{
			count: 6,
			points: 5,
			icon: "rank_6.gif"
		},
		{
			count: 7,
			points: 5,
			icon: "rank_7.gif"
		},
		{
			count: 8,
			points: 5,
			icon: "rank_8.gif"
		},
		{
			count: 9,
			points: 5,
			icon: "rank_9.gif"
		},
		{
			count: 10,
			points: 5,
			icon: "rank_10.gif"
		},
		{
			count: 11,
			points: 5,
			icon: "rank_11.gif"
		},
		{
			count: 12,
			points: 5,
			icon: "rank_12.gif"
		}
	]
};
var furi = {
	id: "furi",
	name: {
		en: "Grade FURI atteint",
		fr: "Grade FURI atteint",
		de: "Dienstgrad FURI",
		es: "Grade FURI atteint"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "rank_furi_1.gif"
		},
		{
			count: 2,
			points: 5,
			icon: "rank_furi_2.gif"
		},
		{
			count: 3,
			points: 5,
			icon: "rank_furi_3.gif"
		},
		{
			count: 4,
			points: 5,
			icon: "rank_furi_4.gif"
		},
		{
			count: 5,
			points: 5,
			icon: "rank_furi_5.gif"
		},
		{
			count: 6,
			points: 5,
			icon: "rank_furi_6.gif"
		},
		{
			count: 7,
			points: 5,
			icon: "rank_furi_7.gif"
		},
		{
			count: 8,
			points: 5,
			icon: "rank_furi_8.gif"
		},
		{
			count: 9,
			points: 5,
			icon: "rank_furi_9.gif"
		},
		{
			count: 10,
			points: 5,
			icon: "rank_furi_10.gif"
		},
		{
			count: 11,
			points: 5,
			icon: "rank_furi_11.gif"
		},
		{
			count: 12,
			points: 5,
			icon: "rank_furi_12.gif"
		}
	]
};
var alphabounceJson = {
	planets: planets,
	earth: earth,
	mission: mission,
	map: map,
	escorp: escorp,
	furi: furi
};

var hosted = {
	id: "hosted",
	name: {
		en: "Guests accommodated",
		fr: "Clients hébergés",
		de: "Beherbergte Gäste",
		es: "Clientes alojados"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 2,
			prefix: true,
			title: {
				en: "Jailer",
				fr: "Geôlier",
				de: "Kerkermeister",
				es: "Anfitrión"
			}
		},
		{
			count: 50,
			points: 5,
			prefix: true,
			title: {
				en: "Slumlord",
				fr: "Tenancier",
				de: "Vermieter",
				es: "Buen Anfitrión"
			}
		},
		{
			count: 100,
			points: 5,
			prefix: true,
			title: {
				en: "Innkeeper",
				fr: "Aubergiste",
				de: "Gastwirt",
				es: "Posadero"
			}
		},
		{
			count: 500,
			points: 10,
			prefix: true,
			title: {
				en: "Host",
				fr: "Hôte",
				de: "Gastgeber",
				es: "Hotelero"
			}
		},
		{
			count: 1000,
			points: 20,
			prefix: true,
			title: {
				en: "Hotelier",
				fr: "Maître-aubergiste",
				de: "Hotelier",
				es: "Gran Hotelero"
			}
		}
	]
};
var okbase = {
	id: "okbase",
	name: {
		en: "Well-treated guests",
		fr: "Clients bien traités",
		de: "Gut versorgte Gäste",
		es: "Clientes satisfechos"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "spec_happy.png"
		},
		{
			count: 25,
			points: 5,
			icon: "money.png"
		}
	]
};
var okvip = {
	id: "okvip",
	name: {
		en: "Well-treated VIPs",
		fr: "VIP bien traités",
		de: "Gut versorgte VIPs",
		es: "VIP encantados"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "vip.png"
		},
		{
			count: 25,
			points: 15,
			icon: "fame.png"
		},
		{
			count: 50,
			points: 10,
			prefix: true,
			title: {
				en: "Hollywood",
				fr: "Star",
				de: "Hollywood",
				es: "Estrella"
			}
		}
	]
};
var okfrnd = {
	id: "okfrnd",
	name: {
		en: "Well-treated friends",
		fr: "Amis bien traités",
		de: "Gut versorgte Freunde",
		es: "Amigos complacidos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "item_present.png"
		},
		{
			count: 5,
			points: 2,
			prefix: true,
			title: {
				en: "Landlord",
				fr: "Logeur",
				de: "Grundbesitzer",
				es: "Generoso"
			}
		},
		{
			count: 10,
			points: 2,
			icon: "item_mattress.png"
		},
		{
			count: 50,
			points: 2,
			icon: "item_present_xl.png"
		},
		{
			count: 100,
			points: 5,
			icon: "item_friend.png"
		}
	]
};
var star$1 = {
	id: "star",
	name: {
		en: "Stars earned",
		fr: "Étoiles acquises",
		de: "Verdiente Sterne",
		es: "Estrellas ganadas"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 5,
			prefix: true,
			title: {
				en: "Star",
				fr: "Étoile",
				de: "Star",
				es: "Conocido"
			}
		},
		{
			count: 3,
			points: 5,
			suffix: true,
			title: {
				en: "of Luxury Hotels",
				fr: "Grand Hôtel",
				de: "Luxushotels",
				es: "Recomendable"
			}
		},
		{
			count: 4,
			points: 10,
			icon: "item_wallet.png"
		},
		{
			count: 5,
			points: 20,
			icon: "star.png"
		},
		{
			count: 6,
			points: 20,
			title: {
				en: "Super-star",
				fr: "Super-star",
				de: "Superstar",
				es: "Prestigioso"
			}
		}
	]
};
var serv = {
	id: "serv",
	name: {
		en: "Guest services offered",
		fr: "Services rendus aux clients",
		de: "Zimmerservice!",
		es: "Servicios brindados a los clientes"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "item_buffet.png"
		},
		{
			count: 100,
			points: 5,
			icon: "item_old_buffet.png"
		}
	]
};
var room = {
	id: "room",
	name: {
		en: "Rooms constructed",
		fr: "Salles construites",
		de: "Gebaute Zimmer",
		es: "Salas construidas"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			suffix: true,
			title: {
				en: "of buildings",
				fr: "bâtiment",
				de: "Baustelle",
				es: "construcción"
			}
		},
		{
			count: 50,
			points: 5,
			icon: "more.png"
		},
		{
			count: 100,
			points: 5,
			prefix: true,
			title: {
				en: "Master Contractor",
				fr: "Maître d'oeuvre",
				de: "Bauunternehmer",
				es: "Maestro de obras"
			}
		},
		{
			count: 150,
			points: 5,
			icon: "bluep.png"
		},
		{
			count: 300,
			points: 10,
			prefix: true,
			title: {
				en: "Master Architect",
				fr: "Grand bâtisseur",
				de: "Meisterarchitekt",
				es: "Gran Constructor"
			}
		}
	]
};
var sendc = {
	id: "sendc",
	name: {
		en: "Friends visited",
		fr: "Visites à ses amis",
		de: "Besuchte Freunde",
		es: "Visitas a amigos"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			prefix: true,
			title: {
				en: "Squatter",
				fr: "Squatteur",
				de: "Hausbesetzer",
				es: "Ocupante"
			}
		},
		{
			count: 100,
			points: 5,
			prefix: true,
			title: {
				en: "Parasite",
				fr: "Parasite",
				de: "Parasit",
				es: "Parásito"
			}
		}
	]
};
var pick = {
	id: "pick",
	name: {
		en: "Objects stolen",
		fr: "Objets volés",
		de: "Einbehaltene Gegenstände",
		es: "Objetos recogidos"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			prefix: true,
			title: {
				en: "Thief",
				fr: "Chapardeur",
				de: "Dieb",
				es: "Cleptómano"
			}
		},
		{
			count: 100,
			points: 5,
			prefix: true,
			title: {
				en: "Looter",
				fr: "Pilleur",
				de: "Räuber",
				es: "Saqueador"
			}
		},
		{
			count: 250,
			points: 5,
			prefix: true,
			title: {
				en: "Crook",
				fr: "Truand",
				de: "Plünderer",
				es: "Mafioso"
			}
		},
		{
			count: 500,
			points: 5,
			prefix: true,
			title: {
				en: "Vagabond",
				fr: "Arsouille",
				de: "Fingerschmied",
				es: "Rufián"
			}
		}
	]
};
var advert = {
	id: "advert",
	name: {
		en: "Advertising Campaigns",
		fr: "Campagnes publicitaires",
		de: "Werbekampagnen",
		es: "Campañas publicitarias"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "noise.png"
		},
		{
			count: 10,
			points: 5,
			prefix: true,
			title: {
				en: "Publicist",
				fr: "Publicitaire",
				de: "Publizist",
				es: "Publicista"
			}
		},
		{
			count: 50,
			points: 5,
			icon: "tv.png"
		},
		{
			count: 100,
			points: 5,
			suffix: true,
			title: {
				en: "of marketing",
				fr: "marketing",
				de: "Marketing",
				es: "Mediático"
			}
		}
	]
};
var lab = {
	id: "lab",
	name: {
		en: "Monstrous experiments",
		fr: "Expérimentations monstrueuses",
		de: "Monströse Experimente",
		es: "Experimentos monstruosos"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "item_research.png"
		},
		{
			count: 30,
			points: 15,
			icon: "item_research_gold.png"
		}
	]
};
var croquemotelJson = {
	hosted: hosted,
	okbase: okbase,
	okvip: okvip,
	okfrnd: okfrnd,
	star: star$1,
	serv: serv,
	room: room,
	sendc: sendc,
	pick: pick,
	advert: advert,
	lab: lab
};

var perle = {
	id: "perle",
	name: {
		en: "Fountain Pearl",
		fr: "Perle de la Fontaine",
		de: "Perle aus dem Brunnen",
		es: "Perla de la Fuente"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_perle.gif"
		}
	],
	description: {
		en: "The Fountain Pearl allows your dinoz to regenerate health every day at the Fountain of Youth.",
		fr: "La perle de la Fontaine permet à tous vos Dinoz de pouvoir se régénerer chaque jour à la Fontaine de Jouvence.",
		de: "Mit der Perle aus dem Brunnen können alle deine Dinoz sich jeden Tag am Jungbrunnen erholen.",
		es: "La Perla de la Fuente permite a todos tus Dinos regenerarse cada día en la Fuente de la Juventud."
	}
};
var pteroz = {
	id: "pteroz",
	name: {
		en: "Pteroz Trophy",
		fr: "Trophée des Pteroz",
		de: "Trophäe der Pteroz",
		es: "Trofeo de los Teroz"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_pteroz.gif"
		}
	],
	description: {
		en: "The Pteroz Trophy is awarded to players who have defeated the strange Pteroz. It also unlocks the Pteroz, making it available to buy in the Dinoz Shop.",
		fr: "Le Trophée des Pteroz récompense les joueurs ayant vaincu le Ptéroz étrange, et donne accès aux Pteroz parmi les Dinoz disponibles dans la Boutique.",
		de: "Die Trophäe der Pteroz ist eine Belohung für Spieler, die den seltsamen Pteroz besiegt haben. Damit habt ihr im Geschäft die Möglichkeit, Pteroz als neue Dinogattung zu kaufen.",
		es: "El Trofeo de los Teroz recompensa a los jugadores que hayan vencido al Teroz extraño. Asimismo, este objeto da acceso a la compra de los Dinos Teroz en la Tienda."
	}
};
var hippo = {
	id: "hippo",
	name: {
		en: "Hippoclamps Trophy",
		fr: "Trophée des Hippoclamps",
		de: "Trophäe der Hippoklampen",
		es: "Trofeo de los Hippoclamp"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_hippo.gif"
		}
	],
	description: {
		en: "The Hippoclamps Trophy is awarded to players who have defeated the wild Hippoclamp. It also unlocks the Hippoclamps, making it available to buy in the Dinoz Shop.",
		fr: "Le Trophée des Hippoclamps récompense les joueurs ayant vaincu l'Hippoclamp sauvage, et donne accès aux Hippoclamps parmi les Dinoz disponibles dans la Boutique.",
		de: "Die Trophäe der Hippoklampen ist eine Belohnung für Spieler, die den wilden Hippoklampus besiegt haben. Damit habt ihr im Geschäft die Möglichkeit, Hippoklampen als neue Dinozgattung zu kaufen.",
		es: "El Trofeo de los Hippoclamps recompensa a los jugadores que hayan vencido al Hippoclamp salvaje. Asimismo, este objeto da acceso a la compra de los Dinos Hippoclamp en la Tienda."
	}
};
var rocky = {
	id: "rocky",
	name: {
		en: "Rockies Trophy",
		fr: "Trophée des Rockys",
		de: "Trophäe der Rockys",
		es: "Trofeo de los Rokkys"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_rocky.gif"
		}
	],
	description: {
		en: "The Rockies Trophy is awarded to players who have defeated the sleeping Rocky. It also unlocks the Rocky, making it available to buy in the Dinoz Shop.",
		fr: "Le Trophée des Rockys récompense les joueurs ayant vaincu le Rocky endormi, et donne accès aux Rockys parmi les Dinoz disponibles dans la Boutique.",
		de: "Die Trophäe der Rockys ist eine Belohnung für Spieler, die den schläfrigen Rocky besiegt haben. Damit habt ihr im Geschäft die Möglichkeit, Rockys als neue Dinozgattung zu kaufen.",
		es: "El Trofeo de los Rokkys recompensa a los jugadores que hayan vencido al Rokky dormido. Asimismo, este objeto da acceso a la compra de los Dinos Rokky en la Tienda."
	}
};
var quetzu = {
	id: "quetzu",
	name: {
		en: "Quetzu Trophy",
		fr: "Trophée des Quetzus",
		de: "Trophäe der Quetzu",
		es: "Trofeo de los Quetzu"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_quetzu.gif"
		}
	],
	description: {
		en: "The Quetzu Trophy is given by Mandragore to players who have defeated the Archdorogon Grizorg. This unlocks the Quetzu, making it available to buy in the Dinoz shop.",
		fr: "Le Trophée des Quetzus a été remis par Mandragore aux joueurs ayant vaincu l'Archidorogon Grizorg, il donne accès aux Quetzu parmi les Dinoz disponibles dans la Boutique.",
		de: "Die Trophäe wurde dir von Mandragore nach dem Sieg über den Erzdorogon Grizorg verliehen. Sie gewährt dir u.a. Zugriff auf Quetzu im Dinoz-Geschäft.",
		es: "El Trofeo de los Quetzu ha sido entregado por Mandrágora a los Maestros que hayan vencido al Archidorogón Grizorg. Da acceso al Dino Quetzu en la Tienda."
	}
};
var tour = {
	id: "tour",
	name: {
		en: "Dinoland Tour",
		fr: "Tour de Dinoland",
		de: "Dinolandtour",
		es: "Vuelta al mundo de Dinoland"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 200,
			icon: "collec_tour.gif"
		}
	],
	description: {
		en: "This yellow shirt is awarded for your participation in the Dinoland Tour! You are now one of the great Dinoland explorers.",
		fr: "Ce maillot jaune vous récompense pour votre magnifique Tour de Dinoland ! Vous faites désormais partie des grands explorateurs de Dinoland.",
		de: "Dieses gelbe Trikot ist die Belohnung für deine großartige Dinolandtour! Du gehörst nun zu den großen Dinolanderforschern.",
		es: "Este maillot amarillo te recompensa por la vuelta al mundo de Dinoland. Ya formas parte de los grandes exploradores de Dinoland."
	}
};
var vener = {
	id: "vener",
	name: {
		en: "Venerable Eye",
		fr: "L'oeil du Vénérable",
		de: "Das Auge des Ehrwürdigen",
		es: "El ojo del Venerable"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 300,
			icon: "collec_vener.gif"
		}
	],
	description: {
		en: "The Venerable Eye is an extremely rare item. Only the finest warriors can possess it! People say that it has incredibly powerful magical abilities.",
		fr: "L'Oeil du Vénérable est un objet extrêmement rare. Seuls les plus grands Guerriers peuvent l'obtenir ! On raconte qu'il aurait des propriétés magiques incroyablement puissantes...",
		de: "Das Auge des Ehrwürdigen ist ein extrem seltener Gegenstand. Nur die größten Krieger können ihn erhalten! Es wird erzählt, dass er unglaublich starke magische Eigenschaften hätte.",
		es: "L'Oeil du El Ojo del Venerable es un objeto extremadamente raro. Solo los más grandes Guerreros consiguen obtenerlo. Se dice que tiene propiedades mágicas increíblemente poderosas."
	}
};
var taurus = {
	id: "taurus",
	name: {
		en: "Taurus the magnificent",
		fr: "Taurus le magnifique",
		de: "Der fantastische Taurus",
		es: "Taurus el Magnífico"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_taurus.gif"
		}
	],
	description: {
		en: "You helped Baobob to dispatch Taurus, the infamous Moueffe, to the depths of the Dark World. You're not ready to meet him again yet, although word of your courage is already spreading throughout Dinoland.",
		fr: "Vous avez aidé Baobob à refouler le puissant Moueffe infernal Taurus dans les profondeurs du Monde Sombre. Vous n'êtes pas prêt de le revoir, votre courage commence déjà à traverser les frontières de Dinoland.",
		de: "Du hast Bao Bob dabei geholfen, den mächtigen und teuflischen Moeffe Taurus zurück in die Tiefen der dunklen Welt zu schicken. Du bist nicht bereit, ihn wiederzusehen. Dein Mut überschreitet bereits die Grenzen von Dinoland.",
		es: "Has ayudado a Baobob a enviar al poderoso e infernal Moueffe Taurus a las profundidades del Mundo Sombra. Las historias sobre esta hazaña ya han dado la vuelta a todo Dinoland."
	}
};
var msg$1 = {
	id: "msg",
	name: {
		en: "Official Dinoland Stamps",
		fr: "Timbres homologués",
		de: "Offizielle Briefmarken",
		es: "Sellos homologados"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_msg.gif"
		}
	],
	description: {
		en: "This unlimited supply of stamps from the Dinoland Postal Militia is proof of your entitlement to stay in Dinoland for as long as you'd like.",
		fr: "Ce stock illimité de timbres homologués par les Services Postaux Dinoziens valide votre séjour à Dinoville.",
		de: "Mit diesem unbegrenzten Vorrat an offiziellen Briefmarken der Dinoz Post AG kannst du private Nachrichten versenden.",
		es: "Este almacén ilimitado de sellos homologados por los Servicios Postales Dinonianos permite enviar mensajes privados."
	}
};
var magnet = {
	id: "magnet",
	name: {
		en: "Negative Lodestone Shard",
		fr: "Eclat de Magnétite Négative",
		de: "Splitter aus negativem Magnetit",
		es: "Trozo de Magnetita Negativa"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 300,
			icon: "collec_magnet.gif"
		}
	],
	description: {
		en: "This Negative Lodestone Shard was given to you by the ing of the Rockies himself! Who knows what mysterious powers it holds.",
		fr: "Cet éclat de Magnétite Négative vous a été offert par le Roi des Rockys en personne ! Qui sait quels pouvoirs mystérieux il possède...",
		de: "Dieser Splitter aus negativem Magnetit wurde dir vom König der Rockys höchstpersönlich übergeben! Wer weiß was für mysteriöse Kräfte er in sich birgt...",
		es: "¡El Rey de los Rokkys en persona te ha ofrecido este trozo de Magnetita Negativa! A saber los misteriosos poderes que esconde..."
	}
};
var plume$1 = {
	id: "plume",
	name: {
		en: "Sidereal Feather",
		fr: "Plume Sidérale",
		de: "Sternenfeder",
		es: "Pluma Sideral"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_plume.gif"
		}
	],
	description: {
		en: "This feather, a gift from a distant traveller, allows you to edit your presentation on your player profile.",
		fr: "Cette plume, cadeau de quelqu'un venu de très loin, permet d'éditer la présentation de la fiche joueur.",
		de: "Diese Feder ist ein Geschenk von jemandem, der von seeeehr weit her gekommen ist. Mit ihr kannst du das Spielerprofil bearbeiten und in den 'Roleplay'-Bereich gelangen, der sich im Forum befindet.",
		es: "Esta pluma es un regalo de procedencia muy lejana. Permite editar la presentación de la ficha del jugador."
	}
};
var kaura = {
	id: "kaura",
	name: {
		en: "Kabuki Aura",
		fr: "Aura Kabuki",
		de: "Kabuki-Aura",
		es: "Aura Kabuki"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 300,
			icon: "collec_kaura.gif"
		}
	],
	description: {
		en: "The Kabuki Aura gives you access to Totem Island where you may find Kabukis, survivors of the Huge Cataclysm!",
		fr: "Cette aura permet d'accéder à l'Ile du Totem et d'y retrouver - peut-être - des Kabuki ayant survécu au Grand Cataclysme !",
		de: "Mit dieser Aura kannst du auf die Toteminsel gehen und dort - vielleicht - Kabukis antreffen, die die Große Naturkatastrophe überlebt haben!",
		es: "Este aura permite acceder a la Isla del Tótem. ¡Quizás encuentres allí a Kabukis que hayan sobrevivido al Gran Cataclismo!"
	}
};
var demon = {
	id: "demon",
	name: {
		en: "Demon Scroll",
		fr: "Parchemin du Démon",
		de: "Dämonische Pergamentrolle",
		es: "Pergamino del Demonio"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_demon.gif"
		}
	],
	description: {
		en: "This ancient scroll gives you access to the Demon Shop in the Twilight Cemetary!",
		fr: "Cet ancien parchemin vous permettra d'accèder à la Boutique Démoniaque au Cimetière du Crépuscule !",
		de: "Diese alte Pergamentrolle gewährt dir Zugang zur Dämonenboutique, die sich am Friedhof des Sonnenuntergangs befindet.",
		es: "Este antiguo pergamino te permite acceder a la Tienda Demoníaca en el Cementerio del Crepúsculo."
	}
};
var pmi = {
	id: "pmi",
	name: {
		en: "Illustrated Mission Guidebook",
		fr: "Petit Missionaire Illustré",
		de: "Illustriertes Missionsbuch",
		es: "Pequeño Misionario Ilustrado"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_pmi.gif"
		}
	],
	description: {
		en: "The Illustrated Mission Guidebook lets you see the list of missions which have been completed by your Dinoz, and which remain to be completed.",
		fr: "Le Petit Missionnaire Illustré permet d'avoir accés à tout moment à la liste des missions effectuées et restant à faire pour vos Dinoz.",
		de: "Das illustrierte Missionsbuch zeigt dir alle Missionen, die deine Dinoz bereits abgeschlossen oder noch vor sich haben.",
		es: "El Pequeño Misionario Ilustrado te da acceso en todo momento a la lista de misiones efectuadas por tu Dino y las que le quedan por hacer.."
	}
};
var pda = {
	id: "pda",
	name: {
		en: "Diamantite Pebble",
		fr: "Pierre en Diamantite Agglomérée",
		de: "Stein aus gepresstem Diamantit",
		es: "Piedra en Diamantito Aglomerado"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_pda.gif"
		}
	],
	description: {
		en: "The Diamantite Pebble is a stone which is packed with a naturally occurring array of elements which, when combined under pressure, allow the owner to see all their dinoz at a glance. The diamantite, on the other hand, is only for show.",
		fr: "La P.D.A. est une pierre remplie (chose surprenante) de technologie formée naturellement et permettant à l'éleveur d'avoir un aperçu de tous ses Dinoz en un simple coup d'oeil. La Diamantite au contraire c'est juste pour la frime.",
		de: "Der Stein aus gepresstem Diamantit ist ein Stein, der mit natürlicher Technologie geformt wurde (was überraschend ist) und der den Züchtern erlaubt sich mit einem Blick eine Übersicht all seiner Dinoz zu verschaffen. Das Diamantit hingegen ist nur zum Angeben.",
		es: "La PDA es una piedra producida con una tecnología especial que permite al maestro que la posea tener una visión general de todos sus Dinos. Lo del Diamantito es sólo para chulear."
	}
};
var dicarb = {
	id: "dicarb",
	name: {
		en: "Arborian Dictionary",
		fr: "Dictionnaire Arboris",
		de: "Wörterbuch Arborianisch",
		es: "Diccionario Arboris"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 400,
			icon: "collec_dicarb.gif"
		}
	],
	description: {
		en: "A very old book, which you have managed to open, maybe now it can be used to decipher the Arborian language.",
		fr: "Un livre très ancien, vous avez réussi à l'ouvrir, il peut désormais servir à déchiffrer le langage Arboris.",
		de: "Ein antikes, staubiges Buch, mit dessen Hilfe du die Sprache Arborianisch übersetzen kannst.",
		es: "Un libro muy antiguo. ¡Has conseguido abrirlo! Ya puedes usarlo para descifrar el lenguaje Arboris."
	}
};
var tid1 = {
	id: "tid1",
	name: {
		en: "Zen Medal",
		fr: "Médaille zen",
		de: "Zen Medaille",
		es: "Medalla Zen"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_tid1.gif"
		}
	],
	description: {
		en: "The zen medal is awarded to the top Dojo in Dinoland, there is no more powerful Dinoz master! You get all the glory, the fame and the respect of all other Dinoz masters...!!",
		fr: "Félicitation pour avoir gagné le Tournoi Inter-Dojo ! La médaille zen récompense le meilleur Dojo existant à Dinoland, aucun maître Dinoz ne vous surpasse ! A vous la gloire, les flashs, le succès auprès des maîtres/maîtresses dinoz .... !!",
		de: "Herzlichen Glückwunsch, du hast das Dojo Turnier gewonnen! Nur das beste Dojo erhält die Zen Medaille. Kein anderer Dinozzüchter kann dir das Wasser reichen! Genieße den Ruhm! :)",
		es: "¡Felicitaciones por haber ganado el Torneo Inter-Dojos!"
	}
};
var belius = {
	id: "belius",
	name: {
		en: "Belius the Illustrious",
		fr: "Belius l'illustre",
		de: "Belius",
		es: "Belius EL Ilustre"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 100,
			icon: "collec_belius.gif"
		}
	],
	description: {
		en: "You have defeated the powerful Belius, the infernal Santaz. He has been sent back to the depths of the Dark World.",
		fr: "Vous avez supprimé le puissant Santaz infernal Belius. Il est reparti dans les profondeurs du Monde Sombre.",
		de: "Du hast den mächtigen, teuflischen Santaz Belius vernichtet. Er ist in die Tiefen der dunklen Welt zurückgekehrt.",
		es: "Has vencido al poderoso Polvorón Infernal Belius y hecho que vuelva a las profundidades del Mundo Sombra."
	}
};
var caush = {
	id: "caush",
	name: {
		en: "Mandragore Doll",
		fr: "Poupée Mandragore",
		de: "Mandragore-Puppe",
		es: "Muñeco de Mandrágora"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 300,
			icon: "collec_caush.gif"
		}
	],
	description: {
		en: "A doll in the likeness of Mandragore, which can be used as a voodoo doll, punching-bag or a pillow, as you choose.\tIt is in pretty poor condition, the previous owner must have taken their frustrations out on it on a regular basis.",
		fr: "Une poupée à l'éffigie de Mandragore, elle peut servir de poupée vaudou, punching-ball ou de coussin, c'est au choix. Elle est en piteuse état, l'ancien propriétaire a dû passer ses nerfs dessus assez souvent.",
		de: "Die Puppe zeigt Mandragore da und kann als Voodoopuppe, Boxsack oder Kissen dienen - je nach Wetter und Laune. Sie ist in einem miserablen Zustand. Ihrem alten Besitzer müssen ziemlich oft die Nerven durchgegangen sein.",
		es: "Un muñeco con la forma de Mandrágora puede servir como peluche o como cojín. Está en muy mal estado, su antiguo dueño debió sufrir varias crisis de nervios con él."
	}
};
var fmedal = {
	id: "fmedal",
	name: {
		en: "3-eyed Medallion",
		fr: "Médaillon à 3 yeux",
		de: "3-eyed Medallion",
		es: "Medallón de 3 ojos"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 50,
			icon: "collec_fmedal.gif"
		}
	],
	description: {
		en: "This medallion opens the portal to the celestial temple.",
		fr: "Ce médaillon ouvre le portail vers le temple céleste.",
		de: "This medallion opens the portal to the celestial temple.",
		es: "Este medallón abre las puertas del templo celeste."
	}
};
var labowi = {
	id: "labowi",
	name: {
		en: "Smogs Medallion",
		fr: "Trophée des Smogs",
		de: "",
		es: "Smogs Medallion"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 50,
			icon: "collec_labowi.gif"
		}
	],
	description: {
		en: "This medallion proves that you have finished the smog quest.",
		fr: "Ce trophée prouve que vous avez terminé la quête du Smog.",
		de: "",
		es: "This medallion proves that you have finished the smog quest."
	}
};
var moves = {
	id: "moves",
	name: {
		en: "Adventurer",
		fr: "Aventure",
		de: "Abenteurer",
		es: "Aventurero"
	},
	rare: 2,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_explor.gif",
			prefix: true,
			title: {
				en: "Tourist",
				fr: "Touriste",
				de: "Tourist",
				es: "Turista"
			},
			description: {
				en: "What kind of adventurer are you?",
				fr: "Quel type d'aventurier êtes-vous ?",
				de: "So ein Typ Abenteurer bist du",
				es: "¿Qué tipo de aventurero eres?"
			}
		},
		{
			count: 50,
			points: 1,
			prefix: true,
			title: {
				en: "Marcher",
				fr: "Marcheur",
				de: "Marschierer",
				es: "Caminante"
			}
		},
		{
			count: 100,
			points: 1,
			prefix: true,
			title: {
				en: "Walker",
				fr: "Promeneur",
				de: "Spaziergänger",
				es: "Visionario"
			}
		},
		{
			count: 500,
			points: 1,
			prefix: true,
			title: {
				en: "Hiker",
				fr: "Randonneur",
				de: "Wanderer",
				es: "Atleta"
			}
		},
		{
			count: 1000,
			points: 1,
			prefix: true,
			title: {
				en: "Adventurer",
				fr: "Aventurier",
				de: "Abenteurer",
				es: "Aventurero"
			}
		},
		{
			count: 2000,
			points: 1,
			suffix: true,
			title: {
				en: "Brave Souls",
				fr: "téméraire",
				de: "durch dick und dünn",
				es: "Temerario"
			}
		},
		{
			count: 5000,
			points: 1,
			title: {
				en: "Grand Adventurer",
				fr: "Grand aventurier",
				de: "Großer Abenteurer",
				es: "Gran Aventurero"
			}
		},
		{
			count: 10000,
			points: 1,
			prefix: true,
			title: {
				en: "Explorer",
				fr: "Explorateur",
				de: "Entdecker",
				es: "Explorador"
			}
		},
		{
			count: 25000,
			points: 1,
			suffix: true,
			title: {
				en: "discoveries",
				fr: "intrépide",
				de: "ohne Furcht",
				es: "Intrépido"
			}
		},
		{
			count: 40000,
			points: 1,
			title: {
				en: "Grand Explorer",
				fr: "Grand explorateur",
				de: "Großer Entdecker",
				es: "Gran Explorador"
			}
		},
		{
			count: 60000,
			points: 1,
			title: {
				en: "Globe-trotter",
				fr: "Globe-trotteur",
				de: "Globetrotter",
				es: "Trotamundos"
			}
		},
		{
			count: 75000,
			points: 1,
			title: {
				en: "Supreme Explorer",
				fr: "Explorateur suprême",
				de: "Oberster Entdecker",
				es: "Explorador Supremo"
			}
		},
		{
			count: 100000,
			points: 1,
			title: {
				en: "Legendary Pioneer",
				fr: "Pionnier ultime",
				de: "Ultimativer Pionier",
				es: "Pionero Legendario"
			}
		},
		{
			count: 150000,
			points: 1,
			title: {
				en: "Dinoland Legend",
				fr: "Légende de Dinoland",
				de: "Dinoland-Legende",
				es: "Leyenda de Dinoland"
			}
		}
	],
	description: {
		en: "What kind of adventurer are you?",
		fr: "Quel type d'aventurier êtes-vous?",
		de: "So ein Typ Abenteurer bist du",
		es: "¿Qué tipo de aventurero eres?"
	}
};
var deaths = {
	id: "deaths",
	name: {
		en: "Deaths",
		fr: "Morts",
		de: "Tode",
		es: "Inmortal"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_barbare.gif",
			title: {
				en: "Spirit Dinoz master",
				fr: "Revenant de loin",
				de: "Wiedergänger",
				es: "Mala Hierba"
			},
			description: {
				en: "How many times have you died in combat?",
				fr: "Combien de fois êtes-vous mort au combat ?",
				de: "So oft bist du im Kampf gefallen",
				es: "Cantidad de veces que has muerto en combate"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Comeback King",
				fr: "Esprit torturé",
				de: "Gequälter Geist",
				es: "Alma Perseverante"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Master of Puppets",
				fr: "Fantôme narcissique",
				de: "Selbstverliebtes Gespenst",
				es: "Reencanator Ultra"
			}
		},
		{
			count: 1000,
			points: 1,
			title: {
				en: "Reincarnator 3k",
				fr: "Réincarnator 3000",
				de: "Reinkarnator 3000",
				es: "Ave Fénix"
			}
		},
		{
			count: 1500,
			points: 1,
			title: {
				en: "Mini Buddha",
				fr: "P'tit Bouddha",
				de: "Kleiner Buddha",
				es: "El Inmortal"
			}
		}
	],
	description: {
		en: "How many times have you died in combat?",
		fr: "Combien de fois êtes-vous mort au combat ?",
		de: "So oft bist du im Kampf gefallen.",
		es: "Cantidad de veces que has muerto en combate"
	}
};
var pdays = {
	id: "pdays",
	name: {
		en: "Education",
		fr: "Eleveur",
		de: "Schüler",
		es: "Criador de Dinos"
	},
	rare: 2,
	unlocks: [
		{
			count: 5,
			points: 1,
			icon: "r_plume.gif",
			title: {
				en: "Studious Pupil",
				fr: "Elève attentif",
				de: "Geduldiger Schüler",
				es: "Alumno Atento"
			},
			description: {
				en: "Number of days spent on the site.",
				fr: "Nombre de jours de présence sur le site.",
				de: "Anzahl der in Dinoland verbrachten Tage",
				es: "Cantidad de días presente en el sitio."
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Attentive Orator",
				fr: "Orateur éclairé",
				de: "Aufgeklärter Redner",
				es: "Orador Luminoso"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Gifted Preacher",
				fr: "Prêcheur accompli",
				de: "Vollkommener Prediger",
				es: "Profeta en su Tierra"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Experienced Narrator",
				fr: "Raconteur aguerri",
				de: "Abgehärteter Erzähler",
				es: "Lumbrera"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Archive Creator",
				fr: "Grand conteur",
				de: "Großer Märchenerzähler",
				es: "Erudito"
			}
		},
		{
			count: 300,
			points: 1,
			title: {
				en: "Master Historian",
				fr: "Maître Historien",
				de: "Professor für Geschichte",
				es: "Eminencia"
			}
		},
		{
			count: 600,
			points: 1,
			title: {
				en: "Ancient Oracle",
				fr: "Grand Ancien",
				de: "Enzyklopädie",
				es: "Ancestro Mítico"
			}
		}
	],
	description: {
		en: "Number of days spent on the site",
		fr: "Nombre de jours de présence sur le site",
		de: "Anzahl der in Dinoland verbrachten Tage",
		es: "Cantidad de días presente en el sitio"
	}
};
var lvlup = {
	id: "lvlup",
	name: {
		en: "Trainer",
		fr: "Entraîneur",
		de: "Trainer",
		es: "Entrenador de Dinos"
	},
	rare: 2,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "small_lup_fix.gif",
			title: {
				en: "Sunday Trainer",
				fr: "Entraîneur du dimanche",
				de: "Freizeit-Trainer",
				es: "Entrenador Dominguero"
			},
			description: {
				en: "Number of Level-ups carried out.",
				fr: "Nombre de level-up réalisés.",
				de: "Anzahl der Level-Ups",
				es: "Cantidad de subida de niveles que has realizado."
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Apprentice Trainer",
				fr: "Apprenti entraineur",
				de: "Trainer-Novize",
				es: "Aprendiz de Entrenador"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Amateur Trainer",
				fr: "Entraîneur amateur",
				de: "Amateur-Trainer",
				es: "Entrenador Amateur"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Experienced Trainer",
				fr: "Entraîneur expérimenté",
				de: "Erfahrener Trainer",
				es: "Entrenador Experimentado"
			}
		},
		{
			count: 300,
			points: 1,
			title: {
				en: "Great Trainer",
				fr: "Grand Entraîneur",
				de: "Großer Trainer",
				es: "Gran Entrenador"
			}
		},
		{
			count: 400,
			points: 1,
			title: {
				en: "Ultimate Trainer",
				fr: "Entraîneur ultime",
				de: "Ultimativer Trainer",
				es: "Entrenador Supremo"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Grand Master",
				fr: "Grand Maître",
				de: "Großmeister",
				es: "Excelentísimo Maestro"
			}
		}
	],
	description: {
		en: "Number of Level-ups carried out",
		fr: "Nombre de levelup réalisés",
		de: "Anzahl der Level-Ups",
		es: "Cantidad de subidas de niveles que has realizado"
	}
};
var killm = {
	id: "killm",
	name: {
		en: "Monster Killer",
		fr: "Tueur de monstres",
		de: "Monsterjäger",
		es: "Terror de monstruos"
	},
	rare: 2,
	unlocks: [
		{
			count: 50,
			points: 1,
			icon: "r_monster.gif",
			title: {
				en: "Monster Hunter",
				fr: "Balayeur de restes",
				de: "Freizeit-Jäger",
				es: "Barredor de Restos"
			},
			description: {
				en: "Number of monsters killed on your adventures.",
				fr: "Nombre de monstres tués durant vos aventures.",
				de: "Anzahl der von dir getöteten Monster",
				es: "Cantidad de monstruos que mataste en tus aventuras."
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Scourge of Beasts",
				fr: "Bourreau des corps",
				de: "Leichenschinder",
				es: "Cazador de Monstruos"
			}
		},
		{
			count: 1000,
			points: 1,
			title: {
				en: "Monster Killer",
				fr: "Chasseur de monstres",
				de: "Monsterjäger",
				es: "Mercenario"
			}
		},
		{
			count: 2000,
			points: 1,
			title: {
				en: "Monster Annihilator",
				fr: "Tueur barbare",
				de: "Barbarentöter",
				es: "Devorador de Monstruos"
			}
		},
		{
			count: 5000,
			points: 1,
			title: {
				en: "Giant Killer",
				fr: "Annihilateur de géant",
				de: "Zerschmetterer der Riesen",
				es: "Aniquilador"
			}
		},
		{
			count: 10000,
			points: 1,
			title: {
				en: "Barbarian Destroyer",
				fr: "Dévastateur de colosses",
				de: "Verheerer der Kolosse",
				es: "Practicante del F.U.A."
			}
		},
		{
			count: 20000,
			points: 1,
			title: {
				en: "Reaper of Titans",
				fr: "Exterminateur de Titans",
				de: "Vernichter der Titanen",
				es: "Matador"
			}
		},
		{
			count: 50000,
			points: 1,
			title: {
				en: "King of Chaos",
				fr: "Roi du chaos",
				de: "König des Chaos",
				es: "Devorador de Monstruos"
			}
		},
		{
			count: 100000,
			points: 1,
			title: {
				en: "God of Destruction",
				fr: "Dieu de la destruction",
				de: "Gott der Zerstörung",
				es: "Exterminador de Monstruos"
			}
		}
	],
	description: {
		en: "Number of monsters killed on your adventures",
		fr: "Nombre de monstres tués durant vos aventures",
		de: "Anzahl der von dir getöteten Monster",
		es: "Cantidad de monstruos que mataste en tus aventuras"
	}
};
var killd = {
	id: "killd",
	name: {
		en: "Dinoz Challenger",
		fr: "Challenger de Dinoz",
		de: "Dinoz-Herausforderer",
		es: "Gladiador"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "small_attack.gif",
			title: {
				en: "Timid adversary",
				fr: "Combattant timide",
				de: "Schüchterner Kämpfer",
				es: "Combatiente Tímido"
			},
			description: {
				en: "Number of Dinoz defeated in events.",
				fr: "Nombre de Dinoz vaincus durant les évènements",
				de: "Anzahl der während Events besiegter Dinoz",
				es: "Cantidad de Dinos vencidos en los eventos"
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Merciless Warrior",
				fr: "Guerrier sans pitié",
				de: "Krieger ohne Erbarmen",
				es: "Guerrero Despiadado"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Night Terror",
				fr: "Terreur nocturne",
				de: "Schrecken der Nacht",
				es: "Terror del Enemigo"
			}
		},
		{
			count: 2000,
			points: 1,
			title: {
				en: "Walking Nightmare",
				fr: "Cauchemar ambulant",
				de: "Wandelnder Alptraum",
				es: "Pesadilla Andante"
			}
		},
		{
			count: 5000,
			points: 1,
			title: {
				en: "Master Reaper",
				fr: "Faucheur absolu",
				de: "Schnitter",
				es: "Ídolo Guerrero"
			}
		},
		{
			count: 10000,
			points: 1,
			title: {
				en: "God of Death",
				fr: "Dieu de la mort",
				de: "Gott des Todes",
				es: "Dios de la Muerte"
			}
		}
	],
	description: {
		en: "Number of Dinoz defeated in events",
		fr: "Nombre de Dinoz vaincus durant les évènements",
		de: "Anzahl der während Events besiegter Dinoz",
		es: "Cantidad de Dinos vencidos en los eventos"
	}
};
var healpv = {
	id: "healpv",
	name: {
		en: "Health Points Recovered",
		fr: "Point de vie récupérés",
		de: "Wiedergewonnene Lebenspunkte",
		es: "Puntos de vida recuperados"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "r_heal.gif",
			title: {
				en: "Sexy Nurse",
				fr: "Infirmière sexy",
				de: "Sexy Krankenschwester",
				es: "Enfermero"
			},
			description: {
				en: "How many HP have you regained?",
				fr: "Combien de pv avez vous regagné ?",
				de: "Soviele Lebenspunkte hast du wiedergewonnen",
				es: "La cantidad de puntos de vida que has recuperado"
			}
		},
		{
			count: 5000,
			points: 1,
			title: {
				en: "Doctor without borders",
				fr: "Médecin sans frontière",
				de: "Arzt ohne Grenzen",
				es: "Curandero"
			}
		},
		{
			count: 15000,
			points: 1,
			title: {
				en: "Superior Doctor",
				fr: "Docteur supérieur",
				de: "Versierter Leibarzt",
				es: "Sanador"
			}
		},
		{
			count: 50000,
			points: 1,
			title: {
				en: "Majestic Healer",
				fr: "Guérisseur majestueux",
				de: "Majestätischer Medizinmann",
				es: "Médico sin Fronteras"
			}
		},
		{
			count: 100000,
			points: 1,
			title: {
				en: "Chaos Surgeon",
				fr: "Chirurgien du chaos",
				de: "Chirurg des Chaos",
				es: "Doctor Famoso"
			}
		},
		{
			count: 500000,
			points: 1,
			title: {
				en: "Divine Omnipractician",
				fr: "Omnipraticien divin",
				de: "Hippokrates",
				es: "Cirujano Divino"
			}
		}
	],
	description: {
		en: "How many HP have you regained?",
		fr: "Combien de pv avez vous regagnés ?",
		de: "Soviele Lebenspunkte hast du wiedergewonnen",
		es: "La cantidad de puntos de vida que has recuperado"
	}
};
var upwood = {
	id: "upwood",
	name: {
		en: "Wood Specialist",
		fr: "Spécialiste du bois",
		de: "Holzspezialist",
		es: "Especialista de Madera"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_wood.gif",
			title: {
				en: "Tiny Acorn",
				fr: "Jeune pi-mousse",
				de: "Jungspund",
				es: "Oledor de Madera"
			},
			description: {
				en: "Number of Wood level-ups.",
				fr: "Nombre de up réalisés sur l'élément bois.",
				de: "Anzahl der Level-Ups beim Holz-Element",
				es: "Cantidad de subidas de nivel realizadas en elemento madera"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Young Shoot",
				fr: "Belle au bois dormant",
				de: "Meister Eder",
				es: "Recogedor de Ramas"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Sturdy Oak",
				fr: "Gueule de bois",
				de: "Erfahrener Schreiner",
				es: "Ayudante de Carpintero"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Megalomaniac Carpenter",
				fr: "Charpentier mégalomaniaque",
				de: "Begnadeter Zimmermann",
				es: "Carpintero Supremo"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Would a woodchuck chuck wood?",
				fr: "Bûcheron ancestral",
				de: "Ehrwürdiger Holzfäller",
				es: "Leñador"
			}
		}
	],
	description: {
		en: "Number of Wood level-ups",
		fr: "Nombre de up réalisés sur l'élément bois",
		de: "Anzahl der Level-Ups beim Holz-Element",
		es: "Cantidad de subidas de nivel realizadas en elemento madera"
	}
};
var upfire = {
	id: "upfire",
	name: {
		en: "Fire Specialist",
		fr: "Spécialiste du feu",
		de: "Feuerspezialist",
		es: "Especialista de Fuego"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_fire.gif",
			title: {
				en: "Sparky",
				fr: "Flammèche",
				de: "Flämmchen",
				es: "Chispa"
			},
			description: {
				en: "Number of Fire level-ups.",
				fr: "Nombre de up réalisés sur l'élément feu.",
				de: "Anzahl der Level-Ups beim Feuer-Element",
				es: "Cantidad de subidas de nivel realizadas en elemento fuego"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Firestarter",
				fr: "Brasier des ténèbres",
				de: "Flamme der Finsternis",
				es: "Flama de Vela"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Shadow Flame",
				fr: "Flamme infernale",
				de: "Infernale Flamme",
				es: "Hoguera"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Infernal Furnace",
				fr: "Maître du feu",
				de: "Meister der Flammen",
				es: "Maestro del Fuego"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Divine Pyromaniac",
				fr: "Pyromane divin",
				de: "Göttlicher Pyromane",
				es: "Piromaníaco Supremo"
			}
		}
	],
	description: {
		en: "Number of Fire level-ups",
		fr: "Nombre de up réalisés sur l'élément feu",
		de: "Anzahl der Level-Ups beim Feuer-Element",
		es: "Cantidad de subidas de nivel realizadas en elemento fuego"
	}
};
var upthun = {
	id: "upthun",
	name: {
		en: "Lightning Specialist",
		fr: "Spécialiste de la foudre",
		de: "Blitzspezialist",
		es: "Especialista del Rayo"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_thunder.gif",
			title: {
				en: "Volta",
				fr: "Triton grillé",
				de: "Kurzschluss",
				es: "Luciérnaga"
			},
			description: {
				en: "Number of Lightning level-ups.",
				fr: "Nombre de up réalisés sur l'élément foudre.",
				de: "Anzahl der Level-Ups beim Blitz-Element",
				es: "Cantidad de subidas de nivel realizadas en elemento rayo"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Overload",
				fr: "Excès de vitesse",
				de: "Überladung",
				es: "Ráfaga"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Caged Lightning",
				fr: "Eclair de génie",
				de: "Blitzschlag",
				es: "Flash"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Flash",
				fr: "Guerrier foudroyant",
				de: "Blitzschleuderer",
				es: "Guerrero del Rayo"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "GigaWatt",
				fr: "Maître du Saint-Elme",
				de: "Mister 100.000 Volt",
				es: "Dios de la Tormenta"
			}
		}
	],
	description: {
		en: "Number of Lightning level-ups",
		fr: "Nombre de up réalisés sur l'élément foudre",
		de: "Anzahl der Level-Ups beim Blitz-Element",
		es: "Cantidad de subidas de nivel realizadas en elemento rayo"
	}
};
var upair = {
	id: "upair",
	name: {
		en: "Air Specialist",
		fr: "Spécialiste de l'air",
		de: "Luftspezialist",
		es: "Especialista del Aire"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_air.gif",
			title: {
				en: "Morning Breeze",
				fr: "Gaz incolore",
				de: "Morgenhauch",
				es: "Gas"
			},
			description: {
				en: "Number of Air level-ups.",
				fr: "Nombre de up réalisés sur l'élément air.",
				de: "Anzahl der Level-Ups beim Luft-Element",
				es: "Cantidad de subidas de nivel realizadas en elemento aire."
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Fresh Wind",
				fr: "Vent vif",
				de: "Frische Brise",
				es: "Brisa"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Free as the air",
				fr: "Libre comme l’air",
				de: "Frei wie der Wind",
				es: "Viento"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Devastating Cyclone",
				fr: "Cyclone dévastateur",
				de: "Verheerender Zyklon",
				es: "Tornado"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Rock you like a Hurricane",
				fr: "Djinn furieux",
				de: "Wütender Hurrikan",
				es: "Ciclón"
			}
		}
	],
	description: {
		en: "Number of Air level-ups",
		fr: "Nombre de up réalisés sur l'élément air",
		de: "Anzahl der Level-Ups beim Luft-Element",
		es: "Cantidad de subidas de nivel realizadas en elemento aire"
	}
};
var upwatr = {
	id: "upwatr",
	name: {
		en: "Water Specialist",
		fr: "Spécialiste de l'eau",
		de: "Wasserspezialist",
		es: "Especialista en Agua"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_water.gif",
			title: {
				en: "Rubber Duck",
				fr: "Canard de bain",
				de: "Gummiente",
				es: "Pez"
			},
			description: {
				en: "Number of Water level-ups.",
				fr: "Nombre de up réalisés sur l'élément eau.",
				de: "Anzahl der Level-Ups beim Wasser-Element",
				es: "Cantidad de subidas de nivel realizadas en elemento agua"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Leaky Faucet",
				fr: "Marin d'eau douce",
				de: "Tropfender Wasserhahn",
				es: "Tiburón"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Heart of Ice",
				fr: "Coeur de glace",
				de: "Herz aus Eis",
				es: "Marea Alta"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Extreme flood",
				fr: "Déluge extrême",
				de: "Sintflut",
				es: "Tsunami"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Aqueous Abyss",
				fr: "Faille abyssale",
				de: "Wogender Abyss",
				es: "Maremoto"
			}
		}
	],
	description: {
		en: "Number of Water level-ups",
		fr: "Nombre de up réalisés sur l'élément eau",
		de: "Anzahl der Level-Ups beim Wasser-Element",
		es: "Cantidad de subidas de nivel realizadas en elemento agua"
	}
};
var brkpel = {
	id: "brkpel",
	name: {
		en: "Shovel Smasher",
		fr: "Casseur de pelles",
		de: "Schaufelzerbrecher",
		es: "Rompe-palas"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 1,
			icon: "r_digger.gif",
			title: {
				en: "Earthworm",
				fr: "Ver de terre",
				de: "Regenwurm",
				es: "Gusano"
			},
			description: {
				en: "Number of broken shovels.",
				fr: "Nombre de pelles cassées.",
				de: "Anzahl der von dir zerbrochenen Schaufeln",
				es: "Cantidad de palas rotas."
			}
		},
		{
			count: 10,
			points: 1,
			title: {
				en: "Amateur Miner",
				fr: "Mineur amateur",
				de: "Amateur-Bergmann",
				es: "Excavador"
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Craftsman Miner",
				fr: "Galibot",
				de: "Bergmann",
				es: "Ayudante de Minero"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "JCB",
				fr: "Porion",
				de: "Erfahrener Bergmann",
				es: "Minero"
			}
		},
		{
			count: 150,
			points: 1,
			title: {
				en: "Celebrity Excavator",
				fr: "Taupe herculéenne",
				de: "Herkulesmaulwurf",
				es: "Topo"
			}
		},
		{
			count: 300,
			points: 1,
			title: {
				en: "Manic Miner",
				fr: "Ravineur de légende",
				de: "Legendärer Buddler",
				es: "Escavador tectónico"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Half-man, half-mole",
				fr: "Excavateur souverain",
				de: "Ruhmreicher Gräber",
				es: "Visitante del Núcleo"
			}
		},
		{
			count: 2500,
			points: 0,
			title: {
				en: "Subterranean Master",
				fr: "Maître des profondeurs",
				de: "Meister der Tiefen",
				es: "Dios de las Profundidades"
			}
		}
	],
	description: {
		en: "Number of broken shovels",
		fr: "Nombre de pelles cassées",
		de: "Anzahl der von dir zerbrochenen Schaufeln",
		es: "Cantidad de palas rotas"
	}
};
var chasse = {
	id: "chasse",
	name: {
		en: "Hunter",
		fr: "Chasseur",
		de: "Jäger",
		es: "Cazador"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_hunt.gif",
			title: {
				en: "Dinoville Hunt Subscriber",
				fr: "Galinette Cendrée",
				de: "Frischling",
				es: "Colocador de Trampas"
			},
			description: {
				en: "Nombre d'actions de chasses réalisées.",
				fr: "Nombre d'actions de chasses réalisées.",
				de: "Anzahl der durchgeführten Jagden",
				es: "Cantidad de cazas realizadas."
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Reader of Hunting, Shooting, Fishing etc.",
				fr: "Champion d'appeau",
				de: "Waidmann",
				es: "Aprendiz de Cazador"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Weekend Huntsman",
				fr: "Braconnier baraqué",
				de: "Breitschultriger Wilderer",
				es: "Cazador Profesional"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Sioux Trailfinder",
				fr: "Pisteur véloce",
				de: "Flinker Fährtenleser",
				es: "Coleccionista"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Master Trapper",
				fr: "Trappeur aguerri",
				de: "Abgehärteter Trapper",
				es: "Gran Coleccionista"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "King of the Hunt",
				fr: "Roi de la chasse",
				de: "König der Jagd",
				es: "Rey Cazador"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "God of the Hunt",
				fr: "Dieu de la chasse",
				de: "Gott der Jagd",
				es: "Dios de la Caza"
			}
		}
	],
	description: {
		en: "Number of times you've set out to kill stuff!",
		fr: "Nombre d'actions de chasses réalisées",
		de: "Anzahl der von dir durchgeführten Jagden",
		es: "Cantidad de cazas realizadas"
	}
};
var cueill = {
	id: "cueill",
	name: {
		en: "Harvester",
		fr: "Cueilleur",
		de: "Ernter",
		es: "Recolector"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_gather.gif",
			title: {
				en: "Dinoville Harvest Subscriber",
				fr: "Cueilleur romantique",
				de: "Blumenpflücker",
				es: "Recolector Romántico"
			},
			description: {
				en: "Number of harvesting operations carried out.",
				fr: "Nombre d'actions de cueillette réalisées.",
				de: "Anzahl der von dir durchgeführten Ernten",
				es: "Cantidad de recolecciones realizadas."
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Evil Herb Collector",
				fr: "Ramasseur de mauvaises herbes",
				de: "Unkrautjäter",
				es: "Recolector Aficionado"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Time-served Picker",
				fr: "Grapilleur expérimenté",
				de: "Erfahrener Pflücker",
				es: "Recolector Experimentado"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Modern Day Druid",
				fr: "Druide des temps modernes",
				de: "Druide der Neuzeit",
				es: "Druida Moderno"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Powerful Sorcerer",
				fr: "Puissant sorcier",
				de: "Mächtiger Hexer",
				es: "Alquimista"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "King of the Harvest",
				fr: "Roi des récoltes",
				de: "König der Ernte",
				es: "Rey de la Cosecha"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "God of the Harvest",
				fr: "Dieu des récoltes",
				de: "Gott der Ernte",
				es: "Dios de la Cosecha"
			}
		}
	],
	description: {
		en: "Number of harvesting operations carried out",
		fr: "Nombre d'actions de cueillette réalisées",
		de: "Anzahl der von dir durchgeführten Ernten",
		es: "Cantidad de recolecciones realizadas"
	}
};
var peche = {
	id: "peche",
	name: {
		en: "Fisherman",
		fr: "Pêcheur",
		de: "Angler",
		es: "Pescador"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_peche.gif",
			title: {
				en: "Line Fisherman",
				fr: "Pêcheur à la ligne",
				de: "Kescher",
				es: "Ayudante de Pescador"
			},
			description: {
				en: "Number of fishing trips.",
				fr: "Nombre d'actions de pêche réalisées.",
				de: "Anzahl deiner Angelausflüge",
				es: "Cantidad de pescas realizadas."
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Fly Fisherman",
				fr: "Pêcheur à la mouche",
				de: "Fliegenfischer",
				es: "Pescador Aficionado"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Deadliest Catch",
				fr: "Pêcheur en haute mer",
				de: "Hochseefischer",
				es: "Pescador"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Fishing with Dynamite",
				fr: "Pêcheur à la dynamite",
				de: "Dynamit-Angler",
				es: "Pescador de Río"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Ultimate Fisherman",
				fr: "Pêcheur ultime",
				de: "Ultimativer Angler",
				es: "Pescador de Alta Mar"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "King Fisherman",
				fr: "Roi de la Pêche",
				de: "König des Angelns",
				es: "Rey de la Pesca"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "God of Fishing",
				fr: "Dieu de la Pêche",
				de: "Gott des Angelns",
				es: "Dios de la Pesca"
			}
		}
	],
	description: {
		en: "Number of fishing trips",
		fr: "Nombre d'actions de pêche réalisées",
		de: "Anzahl deiner Angelausflüge",
		es: "Cantidad de pescas realizadas"
	}
};
var energy = {
	id: "energy",
	name: {
		en: "Energizer",
		fr: "Energétiseur",
		de: "Energizer",
		es: "Energético"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_comp.gif",
			title: {
				en: "Energising? It's a bit scary!",
				fr: "Energétiser, je n'ose pas trop",
				de: "Energizen? Also ich weiß nicht...",
				es: "Pila AAA"
			},
			description: {
				en: "Number of actions carried out which regenerate energy.",
				fr: "Nombre d'actions d'énergétisation réalisées.",
				de: "Anzahl der Energizer-Aktionen",
				es: "Cantidad de energizaciones realizadas."
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Energising? It beats eating!",
				fr: "Energétiser, c'est mieux que manger",
				de: "Energizen? Besser als Essen",
				es: "Batería Alcalina"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Energising? I live for it!",
				fr: "Energétiser, c'est toute ma vie",
				de: "Energizen? Das ist mein Leben",
				es: "Pararrayos"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Fission Researcher",
				fr: "Chercheur en fission",
				de: "Atomforscher",
				es: "Maestro Atómico"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Atomic Master",
				fr: "Maître des atomes",
				de: "Meister der Atome",
				es: "Central Nuclear"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "King of Fusion",
				fr: "Roi de la fusion",
				de: "König der Fusion",
				es: "Rey de la Fusión"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "God of Fusion",
				fr: "Dieu de la fusion",
				de: "Gott der Fusion",
				es: "Dios de la Fusión"
			}
		}
	],
	description: {
		en: "Number of actions carried out which regenerate energy",
		fr: "Nombre d'actions d'énergétisation réalisées",
		de: "Anzahl der Energizer-Aktionen",
		es: "Cantidad de energizaciones realizadas"
	}
};
var fouill = {
	id: "fouill",
	name: {
		en: "Scavenger",
		fr: "Fouilleur",
		de: "Graber",
		es: "Buscador"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_fouille.gif",
			title: {
				en: "Pebble Collector",
				fr: "Ramasseur de cailloux",
				de: "Kieswühler",
				es: "Recogedor de piedritas"
			},
			description: {
				en: "Number of scavenges carried out.",
				fr: "Nombre d'actions de fouilles réalisées.",
				de: "Anzahl der von dir ausgeführten Grabungen",
				es: "Cantidad de excavaciones realizadas."
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Skilled Scavenger",
				fr: "Fouilleur assidu",
				de: "Eifriger Buddler",
				es: "Excavador aficionado"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Ruin Fan",
				fr: "Amateur de ruines",
				de: "Ruinennovize",
				es: "Excavador profesional"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Documented Architect",
				fr: "Archéologue documenté",
				de: "Diplomierter Archäologe",
				es: "Maestro de excavaciones"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Treasure Inventor",
				fr: "Inventeur de trésor",
				de: "Schatzfinder",
				es: "Buscatesoros"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: ">Master of Discoveries",
				fr: "Maître des décombres",
				de: "Herr der Ausgrabungen",
				es: "Arqueólogo"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Expert on Ancient Worlds",
				fr: "Expert des mondes Antiques",
				de: "Fachmann für Antike",
				es: "Gran Descubridor"
			}
		}
	],
	description: {
		en: "Number of scavenges carried out",
		fr: "Nombre d'actions de fouilles réalisées",
		de: "Anzahl der von dir ausgeführten Grabungen",
		es: "Cantidad de excavaciones realizadas"
	}
};
var market = {
	id: "market",
	name: {
		en: "Salesman",
		fr: "Vendeur",
		de: "Verkäufer",
		es: "Vendedor"
	},
	rare: 0,
	unlocks: [
		{
			count: 2,
			points: 1,
			icon: "r_market.gif",
			title: {
				en: "Soul of Camelot",
				fr: "Âme de camelot",
				de: "Seele von Camelot",
				es: "Vendedor Debutante"
			},
			description: {
				en: "Number of sales made at the market.",
				fr: "Nombre de ventes conclues au marché.",
				de: "Anzahl der auf dem Markt verkauften Artikel",
				es: "Cantidad de ventas en el Mercado."
			}
		},
		{
			count: 5,
			points: 1,
			title: {
				en: "Bric-a-brac stallkeeper",
				fr: "Brocanteur futé",
				de: "Pfiffiger Trödelhändler",
				es: "Vendedor Ocasional"
			}
		},
		{
			count: 10,
			points: 1,
			title: {
				en: "Wise Trader",
				fr: "Marchand avisé",
				de: "Besonnener Verkäufer",
				es: "Vendedor Reconocido"
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Experienced Merchant",
				fr: "Fournisseur expérimenté",
				de: "Erfahrener Anbieter",
				es: "Vendedor Experimentado"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Dinoz Broker",
				fr: "Négociant en Dinoz",
				de: "Gordon Dinoz",
				es: "Proveedor de Dinos"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Master Trafficker",
				fr: "Maître Trafiquant",
				de: "Meister der Verschieber",
				es: "Gran Distribuidor"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Traffick-King",
				fr: "Roi Trafiquant",
				de: "König der Verschieber",
				es: "Traficante de Dinos"
			}
		}
	],
	description: {
		en: "Number of sales made at the market",
		fr: "Nombre de ventes conclues au marché",
		de: "Anzahl der auf dem Markt verkauften Artikel",
		es: "Cantidad de ventas en el Mercado"
	}
};
var sbuyer = {
	id: "sbuyer",
	name: {
		en: "Buyer",
		fr: "Acheteur",
		de: "Käufer",
		es: "Comprador"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_purse.gif",
			title: {
				en: "Bargain Hunter",
				fr: "Chineur du dimanche",
				de: "Schnäppchenjäger",
				es: "Comprador Ocasional"
			},
			description: {
				en: "Number of purchases made in the shop",
				fr: "Nombre d'objet acquis en boutique",
				de: "Anzahl der in Geschäften gekauften Artikel",
				es: "Cantidad de objetos adquiridos en la tienda"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Aware Buyer",
				fr: "Acheteur averti",
				de: "Erfahrener Käufer",
				es: "Comprador Novato"
			}
		},
		{
			count: 200,
			points: 1,
			title: {
				en: "Compulsive Buyer",
				fr: "Consommateur compulsif",
				de: "Zwanghafter Käufer",
				es: "Comprador Exigente"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "Panic Buyer",
				fr: "Acquéreur fièvreux",
				de: "Kaufsüchtiger",
				es: "Comprador Exquisito"
			}
		},
		{
			count: 2000,
			points: 1,
			title: {
				en: "Master Promoter",
				fr: "Maître promoteur",
				de: "Meisterpromoter",
				es: "Casi Magnate"
			}
		},
		{
			count: 10000,
			points: 1,
			title: {
				en: "Caveat Emptor",
				fr: "Géant de la consommation",
				de: "Ungezügelter Konsument",
				es: "Magnate"
			}
		},
		{
			count: 25000,
			points: 0,
			title: {
				en: "Hardcore Gamer",
				fr: "Hardcore gamer",
				de: "Hardcore-Gamer",
				es: "Super Magnate"
			}
		}
	],
	description: {
		en: "Number of purchases made in the shop",
		fr: "Nombre d'objets acquis en boutique",
		de: "Anzahl der in Geschäften gekauften Artikel",
		es: "Cantidad de objetos adquiridos en la tienda"
	}
};
var clans = {
	id: "clans",
	name: {
		en: "Community Life",
		fr: "Vie communautaire",
		de: "Leben in der Community",
		es: "Fama"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 1,
			icon: "r_mercenaire.gif",
			prefix: true,
			title: {
				en: "Vagabond",
				fr: "Vagabond",
				de: "Vagabund",
				es: "Vagabundo"
			},
			description: {
				en: "Number of clans this player has appeared in.",
				fr: "Nombre de clans dans lequel le joueur a été aperçu.",
				de: "Anzahl der Klans, in denen du schon einmal warst",
				es: "Cantidad de clanes en los que has sido identificado."
			}
		},
		{
			count: 50,
			points: 0,
			prefix: true,
			title: {
				en: "Mercenary",
				fr: "Mercenaire",
				de: "Söldner",
				es: "Mercenario"
			}
		},
		{
			count: 100,
			points: 0,
			prefix: true,
			title: {
				en: "Dorogon Knight",
				fr: "Chevalier Dorogon",
				de: "Ritter der Dorogon",
				es: "Caballero Dorogón"
			}
		}
	],
	description: {
		en: "Number of clans this player has appeared in",
		fr: "Nombre de clans dans lequel le joueur a été aperçu",
		de: "Anzahl der Klans, in denen du schon einmal warst",
		es: "Cantidad de clanes en los que has sido identificado"
	}
};
var beauty = {
	id: "beauty",
	name: {
		en: "Beautician",
		fr: "Plasticien",
		de: "Kosmetiker",
		es: "Estrella"
	},
	rare: 0,
	unlocks: [
		{
			count: 2,
			points: 1,
			icon: "r_beauty.gif",
			title: {
				en: "Gifted Groomer",
				fr: "Toiletteur doué",
				de: "Begabter Friseur",
				es: "Ojos lindos"
			},
			description: {
				en: "Number of Beauty Contest titles won by this player's dinoz.",
				fr: "Nombre de titres de beautés remportés par les Dinoz du joueur.",
				de: "Anzahl der von deinen Dinoz gewonnenen Schönheitstitel",
				es: "Cantidad de títulos de belleza."
			}
		},
		{
			count: 5,
			points: 0,
			title: {
				en: "Qualified Make-up Artist",
				fr: "Maquilleur chevronné",
				de: "Versierter Maskenbildner",
				es: "Buena pinta"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Aesthetic Designer",
				fr: "Designer esthète",
				de: "Ästhet & Designer",
				es: "Guapo del barrrio"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Professional Beautician",
				fr: "Plasticien professionnel",
				de: "Schönheitschirurg",
				es: "Perfil Griego"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Master Aesthetician",
				fr: "Maître Apollon",
				de: "Meister Apollo",
				es: "Maestro Apolo"
			}
		}
	],
	description: {
		en: "Number of Beauty Contest titles won by this player's dinoz",
		fr: "Nombre de titres de beautés remportés par les Dinoz du joueur",
		de: "Anzahl der von deinen Dinoz gewonnenen Schönheitstitel",
		es: "Cantidad de títulos de belleza"
	}
};
var gdcatt = {
	id: "gdcatt",
	name: {
		en: "Attacker",
		fr: "Assaillant",
		de: "Angreifer",
		es: "Atacante"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_attack.gif",
			title: {
				en: "Battlefield dwarf",
				fr: "Nain des champs de bataille",
				de: "Kampfzwerg",
				es: "Duende"
			},
			description: {
				en: "Number of attacks carried out against enemy castles.",
				fr: "Nombre d'attaques menées contre un château adverse.",
				de: "So oft hast du ein gegnerisches Schloss angegriffen",
				es: "Cantidad de atacantes enviados al castillo enemigo."
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Scourge of the Sandbox",
				fr: "Terreur des bacs à sable",
				de: "Sandkastenschreck",
				es: "Bárbaro"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Pit Pillager",
				fr: "Screugnargneux",
				de: "Schlossstürmer",
				es: "Golpeador"
			}
		},
		{
			count: 300,
			points: 1,
			title: {
				en: "Barricade Basher",
				fr: "Barbar’apapa",
				de: "Stürmender Barbar",
				es: "Guerrillero"
			}
		},
		{
			count: 800,
			points: 1,
			title: {
				en: "Scarecrusher",
				fr: "Epouvantraille",
				de: "Herzloser Belagerer",
				es: "Demoledor"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Hardcore Attacker",
				fr: "Gros bourrin",
				de: "Gefürchteter Schleifer",
				es: "Rompecastillos"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Destructor General",
				fr: "Roi destructeur",
				de: "Legendärer Zerstörer",
				es: "Gran Devastador"
			}
		},
		{
			count: 3000,
			points: 0,
			title: {
				en: "Almighty Destroyer",
				fr: "Dieu destructeur",
				de: "Gott der Zerstörung",
				es: "Dios de la Guerra"
			}
		}
	],
	description: {
		en: "Number of attacks carried out against enemy castles",
		fr: "Nombre d'attaques menées contre un château adverse",
		de: "So viele Male hast du ein gegnerisches Schloss angegriffen",
		es: "Cantidad de atacantes enviados al castillo enemigo"
	}
};
var gdcdef = {
	id: "gdcdef",
	name: {
		en: "Defender",
		fr: "Defenseur",
		de: "Verteidiger",
		es: "Defensor"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "r_defense.gif",
			title: {
				en: "Thorn in the foot",
				fr: "Epine dans le pied",
				de: "Splitter im Fuß",
				es: "Vigilante"
			},
			description: {
				en: "Number of times you have defended your castle.",
				fr: "Nombre de fois où vous avez défendu votre château.",
				de: "So viele Male hast du dein Schloss verteidigt",
				es: "Cantidad de veces que has defendido tu castillo."
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Mousetrap",
				fr: "Piège à loup",
				de: "Wolfsfalle",
				es: "Guardián"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Stake Pit",
				fr: "Barricade magique",
				de: "Magische Barrikade",
				es: "Escudero"
			}
		},
		{
			count: 300,
			points: 1,
			title: {
				en: "Bear Trap",
				fr: "Chevalier émérite",
				de: "Gewandter Ritter",
				es: "Valiente"
			}
		},
		{
			count: 800,
			points: 1,
			title: {
				en: "Brave Heart",
				fr: "Coeur vaillant",
				de: "Tapferes Herz",
				es: "Corazón Valiente"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Defender Rampant",
				fr: "Rempart sacré",
				de: "Gesegneter Schutzwall",
				es: "Gran Protector"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Brick Top",
				fr: "Mur ultime",
				de: "Unüberwindbare Mauer",
				es: "Héroe Defensor"
			}
		},
		{
			count: 3000,
			points: 0,
			title: {
				en: "Knight of Legend",
				fr: "Paladin légendaire",
				de: "Legendärer Paladin",
				es: "Defensor Legendario"
			}
		}
	],
	description: {
		en: "Number of times you have defended your castle",
		fr: "Nombre de fois où vous avez défendu votre château",
		de: "So viele Male hast du dein Schloss verteidigt",
		es: "Cantidad de veces que has defendido tu castillo"
	}
};
var bgum$1 = {
	id: "bgum",
	name: {
		en: "Dinoland Community",
		fr: "Médaille cool",
		de: "Dinoland Community",
		es: "Heraldo de Dinoland"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_bgum.gif",
			title: {
				en: "Kiss Cool™",
				fr: "Bisou Cool™",
				de: "Lotse",
				es: "Simpático™"
			},
			description: {
				en: "For those who are committed to making Dinoland an even better place!",
				fr: "Vous oeuvrez pour rendre le monde de Dinoland encore meilleur !",
				de: "Du bist ein aktives Mitglieder der Dinoland-Community!",
				es: "¡Maestros como tú hacen que Dinoland sea cada vez mejor!"
			}
		},
		{
			count: 5,
			points: 0,
			title: {
				en: "Proven Mediator",
				fr: "Mediator accordé",
				de: "Beredter Vermittler",
				es: "Maestro reconocido"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Good Time Manager",
				fr: "Tenancier du bon goût",
				de: "Guter Geschmack im Überfluss",
				es: "Maestro famoso"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Enlightener of the Dark World",
				fr: "Eclaireur du monde sombre",
				de: "Erleuchter der dunklen Welt",
				es: "Iluminador del Mundo Sombra"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Michael the Guide v2.0",
				fr: "Guide Michel 2.0",
				de: "Guide Michel 2.0",
				es: "Guía Michel 2.0"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Papy Joe's Twin",
				fr: "Jumeau de Papy joe",
				de: "Papy Joes Zwilling",
				es: "Nieto de Papy Jose"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Bao's Ancestor",
				fr: "Ancêtre de Bao",
				de: "Vorfahre Baos",
				es: "Ancestro de Bao"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Archdorogon",
				fr: "Archidorogon",
				de: "Erzdorogon",
				es: "Archidorogón"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "6th Guardian of Dinoland",
				fr: "6ème Gardien de Dinoland",
				de: "6. Wächter von Dinoland",
				es: "6to Guardián de Dinoland"
			}
		}
	],
	description: {
		en: "The most giving of Dinoz masters",
		fr: "La crême des maîtres Dinoz",
		de: "Die Crème de la Crème der Dinozmeister",
		es: "Aportes al sitio y a la comunidad"
	}
};
var medgol = {
	id: "medgol",
	name: {
		en: "Gold Medal",
		fr: "Médaille d'or",
		de: "Goldmedaille",
		es: "Medalla dinolímpica de oro"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_medgol.gif",
			title: {
				en: "Gold Medal",
				fr: "Médaille d'or",
				de: "Goldmedaille",
				es: "Medallista olímpico de oro"
			},
			description: {
				en: "You finished first! Congratulations!",
				fr: "Vous avez fini premier ! Félicitations !",
				de: "Herzlichen Glückwunsch, ihr seid erster!",
				es: "¡Eres el Número 1 en los juegos Dinolímpicos! ¡Hurraa!"
			}
		}
	],
	description: {
		en: "You are the Dinolympic Games Gold Medallist! Congratulations!",
		fr: "Vous avez fini premier !",
		de: "Ihr seid erster!",
		es: "¡Eres el Número 1 en los juegos Dinolímpicos! ¡Hurraa!"
	}
};
var medsil = {
	id: "medsil",
	name: {
		en: "Silver medal",
		fr: "Médaille d'argent",
		de: "Silbermedaille",
		es: "Medalla dinolímpica de plata"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_medsil.gif",
			title: {
				en: "Silver Medal",
				fr: "Médaille d'argent",
				de: "Silbermedaille",
				es: "Medallista olímpico de plata"
			},
			description: {
				en: "You finished second! Bravo!",
				fr: "Vous avez fini second ! Bravo !",
				de: "Bravo, ihr seid zweiter!",
				es: "¡Segundo lugar en los 1ros. Juegos Dinolímpicos Internacionales!"
			}
		}
	],
	description: {
		en: "The Silver Medallist in the 1st Dinolympic Games!",
		fr: "Vous avez fini second !",
		de: "Bravo, ihr seid zweiter",
		es: "¡Segundo lugar en los 1ros. Juegos Dinolímpicos Internacionales!"
	}
};
var medbro = {
	id: "medbro",
	name: {
		en: "Bronze Medal",
		fr: "Médaille de bronze",
		de: "Bronzemedaille",
		es: "Medalla dinolímpica de bronce"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_medbro.gif",
			title: {
				en: "Bronze Medal",
				fr: "Médaille de bronze",
				de: "Bronzemedaille",
				es: "Medallista olímpico de bronce"
			},
			description: {
				en: "You finished third! Great performance!",
				fr: "Vous avez fini troisième ! C'est une très belle performance !",
				de: "Ihr seid auf Rang drei. Super Leistung!",
				es: "¡Tercer lugar en los 1ros. Juegos Dinolímpicos Internacionales!"
			}
		}
	],
	description: {
		en: "The Bronze medal winner in the 1st Dinolympic Games!",
		fr: "Vous avez fini troisième !",
		de: "Ihr seid auf Rang drei!",
		es: "¡Tercer lugar en los 1ros. Juegos Dinolímpicos Internacionales!"
	}
};
var medpla = {
	id: "medpla",
	name: {
		en: "Participation Medal",
		fr: "Médaille de participation",
		de: "Teilnahmemedaille",
		es: "Medalla dinolímpica de vidrio"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_medpla.gif",
			title: {
				en: "Dinolympic Medal",
				fr: "Médaille de participation",
				de: "Teilnahmemedaille",
				es: "Atleta olímpico"
			},
			description: {
				en: "Dinolympic Athlete - be proud of your achievements!",
				fr: "Vous avez réussi à vous classer parmi les meilleurs participants !",
				de: "Ihr gehört zu den besten Teilnehmern!!",
				es: "¡Te colocaste en el Top 10 de nuestro servidor en los 1ros. Juegos Dinolímpicos!"
			}
		}
	],
	description: {
		en: "You were ranked amongst the top Dinolympic competitors!",
		fr: "Vous avez réussi à vous classer parmi les meilleurs participants !",
		de: "Ihr gehört zu den besten Teilnehmern!",
		es: "¡Te colocaste en el Top 10 de nuestro servidor en los 1ros. Juegos Dinolímpicos!"
	}
};
var lvlup1 = {
	id: "lvlup1",
	name: {
		en: "1st Limit Broken",
		fr: "1ère limite brisée",
		de: "1st Limit Broken",
		es: "1er limite roto"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "fx_lvlup1.gif",
			title: {
				en: "2nd Limit Broken",
				fr: "1ère limite brisée",
				de: "2nd Limit Broken",
				es: "1er limite roto"
			},
			description: {
				en: "Your dinoz have evolved and reached level 60!",
				fr: "Vous avez fait évoluer vos dinoz jusqu'au niveau 60 !",
				de: "Your dinoz have evolved and reached level 60!",
				es: "¡Has hecho evolucionar tus Dinos hasta el nivel 60!"
			}
		}
	],
	description: {
		en: "Your dinoz have evolved!",
		fr: "Vos dinoz ont évolué !",
		de: "Your dinoz have evolved!",
		es: "¡Tus dinos han evolucionado!"
	}
};
var lvlup2 = {
	id: "lvlup2",
	name: {
		en: "2nd Limit Broken",
		fr: "2ème limite brisée",
		de: "2nd Limit Broken",
		es: "2do limite roto"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "fx_lvlup2.gif",
			title: {
				en: "2nd Limit Broken",
				fr: "2ème limite brisée",
				de: "2nd Limit Broken",
				es: "2do limite roto"
			},
			description: {
				en: "Your dinoz have evolved and reached level 70!",
				fr: "Vous avez fait évoluer vos dinoz jusqu'au niveau 70 !",
				de: "Your dinoz have evolved and reached level 70!",
				es: "¡Has hecho evolucionar tus Dinos hasta el nivel 70!"
			}
		}
	],
	description: {
		en: "Your dinoz have evolved!",
		fr: "Vos dinoz ont évolué !",
		de: "Your dinoz have evolved!",
		es: "¡Tus dinos han evolucionado!"
	}
};
var dinorpgJson = {
	perle: perle,
	pteroz: pteroz,
	hippo: hippo,
	rocky: rocky,
	quetzu: quetzu,
	tour: tour,
	vener: vener,
	taurus: taurus,
	msg: msg$1,
	magnet: magnet,
	plume: plume$1,
	kaura: kaura,
	demon: demon,
	pmi: pmi,
	pda: pda,
	dicarb: dicarb,
	tid1: tid1,
	belius: belius,
	caush: caush,
	fmedal: fmedal,
	labowi: labowi,
	moves: moves,
	deaths: deaths,
	pdays: pdays,
	lvlup: lvlup,
	killm: killm,
	killd: killd,
	healpv: healpv,
	upwood: upwood,
	upfire: upfire,
	upthun: upthun,
	upair: upair,
	upwatr: upwatr,
	brkpel: brkpel,
	chasse: chasse,
	cueill: cueill,
	peche: peche,
	energy: energy,
	fouill: fouill,
	market: market,
	sbuyer: sbuyer,
	clans: clans,
	beauty: beauty,
	gdcatt: gdcatt,
	gdcdef: gdcdef,
	bgum: bgum$1,
	medgol: medgol,
	medsil: medsil,
	medbro: medbro,
	medpla: medpla,
	lvlup1: lvlup1,
	lvlup2: lvlup2
};

var fbetaa = {
	id: "fbetaa",
	name: {
		en: "GrandBeta",
		fr: "GrandBeta",
		de: "Große Beta",
		es: "GrandBeta"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "EA_GrandBeta.gif",
			description: {
				en: "Grand Fever Betas!",
				fr: "Grands bêtas de Fever !",
				de: "Große BETA-Phase auf Fever!",
				es: "¡Gran Beta de Fever!"
			}
		}
	]
};
var fheart = {
	id: "fheart",
	name: {
		en: "Heart Collector",
		fr: "Ramassage de coeur",
		de: "Herzsammler",
		es: "Recolección de corazones"
	},
	rare: 1,
	unlocks: [
		{
			count: 4,
			points: 5,
			icon: "rec/pheart.gif",
			description: {
				en: "Get an extra heart!",
				fr: "Obtenu un coeur supplémentaire !",
				de: "Du hast ein zusätzliches Herz erhalten!",
				es: "Ha ganado un corazón adicional."
			}
		},
		{
			count: 40,
			points: 2,
			suffix: true,
			title: {
				en: "Full of life!",
				fr: "plein de vie !",
				de: "voller Energie!",
				es: "lleno de vida"
			},
			description: {
				en: "",
				fr: "",
				de: "40 Herzen gesammelt",
				es: ""
			}
		}
	]
};
var fchest = {
	id: "fchest",
	name: {
		en: "Chests Opened",
		fr: "Ouverture de coffres",
		de: "Truhenöffner",
		es: "Cofres abiertos"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 3,
			icon: "rec/chest_0.gif",
			description: {
				en: "10 chests opened",
				fr: "10 coffres ouverts",
				de: "10 Truhen geöffnet",
				es: "10 cofres abiertos"
			}
		},
		{
			count: 60,
			points: 2,
			icon: "rec/chest_1.gif",
			description: {
				en: "60 chests opened",
				fr: "60 coffres ouverts",
				de: "60 Truhen geöffnet",
				es: "60 cofres abiertos"
			}
		},
		{
			count: 600,
			points: 1,
			icon: "rec/chest_2.gif",
			description: {
				en: "600 chests opened",
				fr: "600 coffres ouverts",
				de: "600 Truhen geöffnet",
				es: "600 cofres abiertos"
			}
		}
	]
};
var fmonst = {
	id: "fmonst",
	name: {
		en: "Monsters Defeated",
		fr: "Monstres vaincus",
		de: "Anzahl besiegter Monster",
		es: "Monstruos vencidos"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 1,
			prefix: true,
			title: {
				en: "Penguin",
				fr: "Pingouin",
				de: "Pinguin",
				es: "Pingüino"
			},
			description: {
				en: "",
				fr: "",
				de: "10 Monster besiegt",
				es: ""
			}
		},
		{
			count: 30,
			points: 1,
			icon: "rec/monster_0.gif"
		},
		{
			count: 100,
			points: 1,
			icon: "rec/monster_1.gif"
		},
		{
			count: 500,
			points: 1,
			icon: "rec/monster_2.gif"
		},
		{
			count: 1500,
			points: 1,
			icon: "rec/monster_3.gif"
		},
		{
			count: 3000,
			points: 1,
			icon: "rec/monster_4.gif"
		},
		{
			count: 6000,
			points: 1,
			icon: "rec/monster_5.gif"
		},
		{
			count: 10000,
			points: 1,
			icon: "rec/monster_6.gif"
		},
		{
			count: 16000,
			points: 1,
			icon: "rec/monster_7.gif"
		},
		{
			count: 24000,
			points: 1,
			icon: "rec/monster_8.gif"
		},
		{
			count: 34000,
			points: 1,
			icon: "rec/monster_9.gif"
		},
		{
			count: 46000,
			points: 1,
			icon: "rec/monster_10.gif"
		},
		{
			count: 60000,
			points: 1,
			icon: "rec/monster_11.gif"
		},
		{
			count: 120000,
			points: 1,
			icon: "rec/monster_12.gif"
		},
		{
			count: 200000,
			points: 1,
			icon: "rec/monster_13.gif"
		}
	]
};
var fcoc = {
	id: "fcoc",
	name: {
		en: "Cocktail",
		fr: "Cocktail",
		de: "Cocktail",
		es: "Cóctel"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_0.gif"
		}
	]
};
var fbook = {
	id: "fbook",
	name: {
		en: "Spell Book",
		fr: "Grimoire",
		de: "Zauberbuch",
		es: "Libro de hechizos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_1.gif"
		}
	]
};
var fshoes = {
	id: "fshoes",
	name: {
		en: "Shoes",
		fr: "Chaussures",
		de: "Schuhe",
		es: "Zapatos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_2.gif"
		}
	]
};
var fmir = {
	id: "fmir",
	name: {
		en: "Mirror",
		fr: "Miroir",
		de: "Spiegel",
		es: "Espejo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_3.gif"
		}
	]
};
var fclov = {
	id: "fclov",
	name: {
		en: "Clover",
		fr: "Trèfle",
		de: "Kleeblatt",
		es: "Trébol"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_4.gif"
		}
	]
};
var fdoll = {
	id: "fdoll",
	name: {
		en: "Voodoo Doll",
		fr: "Poupée vaudou",
		de: "Voodoo-Puppe",
		es: "Muñeco vudú"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_5.gif"
		}
	]
};
var fmask = {
	id: "fmask",
	name: {
		en: "Voodoo Mask",
		fr: "Masque vaudou",
		de: "Voodoo-Maske",
		es: "Máscara vudú"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_6.gif"
		}
	]
};
var fwand = {
	id: "fwand",
	name: {
		en: "Wand",
		fr: "Baguette",
		de: "Stab",
		es: "Varita"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_7.gif"
		}
	]
};
var fgoog = {
	id: "fgoog",
	name: {
		en: "Lunettes",
		fr: "Lunettes",
		de: "Brille",
		es: "Gafas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_8.gif"
		}
	]
};
var fradar = {
	id: "fradar",
	name: {
		en: "Radar",
		fr: "Radar",
		de: "Radar",
		es: "Radar"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_9.gif"
		}
	]
};
var fprism = {
	id: "fprism",
	name: {
		en: "Prism",
		fr: "Prisme",
		de: "Prisma",
		es: "Prisma"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_10.gif"
		}
	]
};
var ffx = {
	id: "ffx",
	name: {
		en: "FeverX",
		fr: "FeverX",
		de: "FeverX",
		es: "FeverX"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_11.gif"
		}
	]
};
var fumb = {
	id: "fumb",
	name: {
		en: "Umbrella",
		fr: "Parapluie",
		de: "Regenschirm",
		es: "Paraguas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_12.gif"
		}
	]
};
var fdice = {
	id: "fdice",
	name: {
		en: "Dice",
		fr: "Dé",
		de: "Würfel",
		es: "Dado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_13.gif"
		}
	]
};
var fwind = {
	id: "fwind",
	name: {
		en: "Windmill",
		fr: "Moulin à vent",
		de: "Windmühle",
		es: "Molino"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_14.gif"
		}
	]
};
var fice = {
	id: "fice",
	name: {
		en: "Ice Lolly",
		fr: "Glace chimique",
		de: "Kunsteis",
		es: "Helado químico"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_15.gif"
		}
	]
};
var fhour = {
	id: "fhour",
	name: {
		en: "Hourglass",
		fr: "Sablier",
		de: "Sanduhr",
		es: "Reloj de arena"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_16.gif"
		}
	]
};
var fchro = {
	id: "fchro",
	name: {
		en: "ChromaX",
		fr: "ChromaX",
		de: "ChromaX",
		es: "ChromaX"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_17.gif"
		}
	]
};
var fring = {
	id: "fring",
	name: {
		en: "Magic Ring",
		fr: "Bague magique",
		de: "Zauberring",
		es: "Anillo mágico"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_18.gif"
		}
	]
};
var ffork = {
	id: "ffork",
	name: {
		en: "Enchanted Fork",
		fr: "Fourchette enchantée",
		de: "Verzauberte Gabel",
		es: "Tenedor encantado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_19.gif"
		}
	]
};
var ffil = {
	id: "ffil",
	name: {
		en: "Ariadne's Thread",
		fr: "Fil d'ariane",
		de: "Arianefaden",
		es: "Hilo de Ariadna"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "rec/item_20.gif"
		}
	]
};
var fruna = {
	id: "fruna",
	name: {
		en: "Ini Rune",
		fr: "Rune Ini",
		de: "Ini-Rune",
		es: "Runa Ini"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 3,
			icon: "rec/rune_0.gif"
		}
	]
};
var frunb = {
	id: "frunb",
	name: {
		en: "Sed Rune",
		fr: "Rune Sed",
		de: "Sed-Rune",
		es: "Runa Sed"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 3,
			icon: "rec/rune_1.gif"
		}
	]
};
var frunc = {
	id: "frunc",
	name: {
		en: "Aarg Rune",
		fr: "Rune Aarg",
		de: "Aarg-Rune",
		es: "Runa Aarg"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 3,
			icon: "rec/rune_2.gif"
		}
	]
};
var frund = {
	id: "frund",
	name: {
		en: "Olh Rune",
		fr: "Rune Olh",
		de: "Olh-Rune",
		es: "Runa Olh"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 3,
			icon: "rec/rune_3.gif"
		}
	]
};
var frune = {
	id: "frune",
	name: {
		en: "Al Rune",
		fr: "Rune Al",
		de: "Al-Rune",
		es: "Runa Al"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 3,
			icon: "rec/rune_4.gif"
		}
	]
};
var frunf = {
	id: "frunf",
	name: {
		en: "Laf Rune",
		fr: "Rune Laf",
		de: "Laf-Rune",
		es: "Runa Laf"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 3,
			icon: "rec/rune_5.gif"
		}
	]
};
var frung = {
	id: "frung",
	name: {
		en: "Hep Rune",
		fr: "Rune Hep",
		de: "Hep-Rune",
		es: "Runa Hep"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 3,
			icon: "rec/rune_6.gif"
		}
	]
};
var fcart = {
	id: "fcart",
	name: {
		en: "FeverX Cartridges",
		fr: "Cartouches de FeverX",
		de: "FeverX-Kassetten",
		es: "Cartuchos de FeverX"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 2,
			icon: "rec/cart.gif",
			description: {
				en: "5 Cartridges found",
				fr: "5 cartouches trouvées",
				de: "5 Kassetten gefunden",
				es: "5 cartuchos encontrados"
			}
		},
		{
			count: 100,
			points: 1,
			prefix: true,
			title: {
				en: "Consoled",
				fr: "Consoleux",
				de: "Consolero",
				es: "Consolero"
			},
			description: {
				en: "",
				fr: "",
				de: "100 Kassetten gefunden",
				es: ""
			}
		}
	]
};
var frbow = {
	id: "frbow",
	name: {
		en: "Rainbows",
		fr: "Arcs-en-ciel",
		de: "Regenbogen",
		es: "Arco Iris"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "rec/rainbow.gif",
			description: {
				en: "",
				fr: "",
				de: "10 Regenbögen benutzt",
				es: ""
			}
		},
		{
			count: 150,
			points: 2,
			prefix: true,
			title: {
				en: "Globe-trotter",
				fr: "Globe-trotter",
				de: "Globetrotter",
				es: "Trotamundos"
			},
			description: {
				en: "150 Rainbows used",
				fr: "150 Arcs-en-ciel utilisés",
				de: "150 Regenbögen benutzt",
				es: "150 arco iris utilizados"
			}
		}
	]
};
var fworld = {
	id: "fworld",
	name: {
		en: "Islands Visited",
		fr: "Archipels traversés",
		de: "Bereiste Archipele",
		es: "Archipiélagos atravezados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "rec/pousty_0.gif",
			suffix: true,
			title: {
				en: "Feverous",
				fr: "fiévreux",
				de: "im Fieber",
				es: "Febril"
			},
			description: {
				en: "",
				fr: "",
				de: "1 Archipel bereist",
				es: ""
			}
		},
		{
			count: 2,
			points: 1,
			icon: "rec/pousty_1.gif",
			description: {
				en: "",
				fr: "",
				de: "2 Archipele bereist",
				es: ""
			}
		},
		{
			count: 3,
			points: 1,
			icon: "rec/pousty_2.gif",
			description: {
				en: "",
				fr: "",
				de: "3 Archipele bereist",
				es: ""
			}
		},
		{
			count: 4,
			points: 1,
			icon: "rec/pousty_3.gif",
			description: {
				en: "",
				fr: "",
				de: "4 Archipele bereist",
				es: ""
			}
		}
	]
};
var fbag = {
	id: "fbag",
	name: {
		en: "Inventory full",
		fr: "Objets trouvés",
		de: "Volles Inventar",
		es: "Inventario completado"
	},
	rare: 0,
	unlocks: [
		{
			count: 28,
			points: 2,
			icon: "rec/bag.gif",
			description: {
				en: "",
				fr: "",
				de: "28 Objekte eingesammelt",
				es: ""
			}
		}
	]
};
var fvolt = {
	id: "fvolt",
	name: {
		en: "Lightning used",
		fr: "Fulgo utilisés",
		de: "Verbrauchte Fulgos",
		es: "Rayos utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 2,
			suffix: true,
			title: {
				en: "Flash",
				fr: "foudroyant",
				de: "mit Blitzen",
				es: "Fulminante"
			},
			description: {
				en: "",
				fr: "",
				de: "3 Fulgos verbraucht",
				es: ""
			}
		},
		{
			count: 100,
			points: 2,
			icon: "rec/element_0.gif",
			description: {
				en: "",
				fr: "",
				de: "100 Fulgos verbraucht",
				es: ""
			}
		}
	]
};
var ffire = {
	id: "ffire",
	name: {
		en: "Ignikits used",
		fr: "Ignik utilisés",
		de: "Verbrauchte Igniks",
		es: "Ignik utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 2,
			suffix: true,
			title: {
				en: "Boiler",
				fr: "bouillant",
				de: "aus Dampf",
				es: "Hirviente"
			},
			description: {
				en: "",
				fr: "",
				de: "3 Igniks verbraucht",
				es: ""
			}
		},
		{
			count: 60,
			points: 2,
			icon: "rec/element_1.gif",
			description: {
				en: "",
				fr: "",
				de: "60 Igniks verbraucht",
				es: ""
			}
		}
	]
};
var frasen = {
	id: "frasen",
	name: {
		en: "Rasen used",
		fr: "Rasen utilisés",
		de: "Gebrauchte Rasen",
		es: "Rasen utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 2,
			suffix: true,
			title: {
				en: "Volta",
				fr: "voltigeur",
				de: "Luftakrobat",
				es: "Acróbata"
			},
			description: {
				en: "",
				fr: "",
				de: "3 Rasen gebraucht",
				es: ""
			}
		},
		{
			count: 85,
			points: 2,
			icon: "rec/element_2.gif",
			description: {
				en: "",
				fr: "",
				de: "85 Rasen gebraucht",
				es: ""
			}
		}
	]
};
var fcam = {
	id: "fcam",
	name: {
		en: "Camemberks swallowed",
		fr: "Camembeurks avalés",
		de: "Geschluckte Camenwürgs",
		es: "Quesos tragados"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 2,
			icon: "rec/bonus_0.gif",
			description: {
				en: "",
				fr: "",
				de: "3 Camenwürgs geschluckt",
				es: ""
			}
		},
		{
			count: 100,
			points: 1,
			prefix: true,
			title: {
				en: "Dairyman",
				fr: "Crémier",
				de: "Milchhändler",
				es: "Quesero"
			},
			description: {
				en: "",
				fr: "",
				de: "100 Camenwürgs geschluckt",
				es: ""
			}
		}
	]
};
var ffeuil = {
	id: "ffeuil",
	name: {
		en: "Vol-o-vents used",
		fr: "Vol-o-vent utilisés",
		de: "Gegessene Pasteten",
		es: "Volantines utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 2,
			icon: "rec/bonus_1.gif",
			description: {
				en: "",
				fr: "",
				de: "3 Pasteten gegessen",
				es: ""
			}
		},
		{
			count: 100,
			points: 1,
			suffix: true,
			title: {
				en: "sylvestre",
				fr: "sylvestre",
				de: "Sylvester",
				es: "Silvestre"
			},
			description: {
				en: "",
				fr: "",
				de: "100 Pasteten gegessen",
				es: ""
			}
		}
	]
};
var fcut = {
	id: "fcut",
	name: {
		en: "Knives used",
		fr: "Burilames utilisés",
		de: "Verwendete Burilames",
		es: "Buriles utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 2,
			icon: "rec/bonus_2.gif",
			description: {
				en: "",
				fr: "",
				de: "3 Burilams verwendet",
				es: ""
			}
		},
		{
			count: 100,
			points: 1,
			prefix: true,
			title: {
				en: "Knife Thrower",
				fr: "Lanceur de couteaux",
				de: "Messerwerfer",
				es: "Lanzacuchillos"
			},
			description: {
				en: "",
				fr: "",
				de: "100 Burilams verwendet",
				es: ""
			}
		}
	]
};
var fisl = {
	id: "fisl",
	name: {
		en: "Clear Isles",
		fr: "Iles libérées",
		de: "Befreite Inseln",
		es: "Islas libres"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 3,
			prefix: true,
			title: {
				en: "Island Hopper",
				fr: "Palmipède",
				de: "Ruderfüßer",
				es: "Palmípedo"
			},
			description: {
				en: "",
				fr: "",
				de: "10 Inseln befreit",
				es: ""
			}
		},
		{
			count: 5000,
			points: 2,
			icon: "rec/island_1.gif",
			description: {
				en: "",
				fr: "",
				de: "5000 Inseln befreit",
				es: ""
			}
		}
	]
};
var fcube = {
	id: "fcube",
	name: {
		en: "Games found",
		fr: "Parties trouvées",
		de: "Gefundene Partien",
		es: "Partidas encontradas"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 2,
			prefix: true,
			title: {
				en: "Hibernatus",
				fr: "Hibernatus",
				de: "Hibernatus",
				es: "Hibernatus"
			},
			description: {
				en: "",
				fr: "",
				de: "5 Partien gefunden",
				es: ""
			}
		},
		{
			count: 100,
			points: 1,
			icon: "rec/ice_cube_0.gif"
		},
		{
			count: 2500,
			points: 1,
			icon: "rec/ice_cube_1.gif"
		}
	]
};
var feverJson = {
	fbetaa: fbetaa,
	fheart: fheart,
	fchest: fchest,
	fmonst: fmonst,
	fcoc: fcoc,
	fbook: fbook,
	fshoes: fshoes,
	fmir: fmir,
	fclov: fclov,
	fdoll: fdoll,
	fmask: fmask,
	fwand: fwand,
	fgoog: fgoog,
	fradar: fradar,
	fprism: fprism,
	ffx: ffx,
	fumb: fumb,
	fdice: fdice,
	fwind: fwind,
	fice: fice,
	fhour: fhour,
	fchro: fchro,
	fring: fring,
	ffork: ffork,
	ffil: ffil,
	fruna: fruna,
	frunb: frunb,
	frunc: frunc,
	frund: frund,
	frune: frune,
	frunf: frunf,
	frung: frung,
	fcart: fcart,
	frbow: frbow,
	fworld: fworld,
	fbag: fbag,
	fvolt: fvolt,
	ffire: ffire,
	frasen: frasen,
	fcam: fcam,
	ffeuil: ffeuil,
	fcut: fcut,
	fisl: fisl,
	fcube: fcube
};

var killz = {
	id: "killz",
	name: {
		en: "Zombies eliminated",
		fr: "Zombies éliminés",
		de: "Getötete Zombies",
		es: "Zombies eliminados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 5,
			icon: "r_killz.gif",
			title: {
				en: "Mutilator",
				fr: "Grosse brute",
				de: "Brutalo",
				es: "Brutal"
			},
			description: {
				en: "Total number of the living-dead that you have sent back underground by whatever means.",
				fr: "Total de créatures mort-vivantes que vous avez renvoyées sous terre par n'importe quel moyen.",
				de: "Gesamtanzahl der von dir umgebrachten Zombies. Jede Tötungsmethode wird gezählt.",
				es: "Total de zombies que volviste a enviar bajo tierra de cualquier manera."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Exterminator",
				fr: "Mutilateur",
				de: "Verstümmler",
				es: "Mutilador"
			}
		},
		{
			count: 300,
			points: 15,
			title: {
				en: "Corpse Crusher",
				fr: "Exterminateur",
				de: "Killer",
				es: "Exterminador"
			}
		},
		{
			count: 800,
			points: 20,
			title: {
				en: "The Hitman",
				fr: "Broyeur de cadavres",
				de: "Kadaverentsorger",
				es: "Descuartizador"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "The Peacemaker",
				fr: "Total annihilation",
				de: "Vernichter",
				es: "Aniquilador"
			}
		},
		{
			count: 4000,
			points: 0,
			title: {
				en: "Chuck Norris",
				fr: "Le Tueur",
				de: "Schlächter",
				es: "Masacrador"
			}
		},
		{
			count: 6000,
			points: 0,
			title: {
				en: "Jean Claude Van Damned",
				fr: "Le Pacificateur",
				de: "Friedensstifter",
				es: "Pacificador"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Go ahead, make my day!",
				fr: "J'aime les bandes décimées",
				de: "Alptraum der Traumlosen",
				es: "Mordedor de muertos"
			}
		}
	],
	description: {
		en: "Total number of the living-dead that you have sent back underground by whatever means.",
		fr: "Total de créatures mort-vivantes que vous avez renvoyées sous terre par n'importe quel moyen.",
		de: "Gesamtanzahl der von dir umgebrachten Zombies. Jede Tötungsmethode wird gezählt.",
		es: "Total de muertos vivientes que volviste a enviar bajo tierra de cualquier manera."
	}
};
var dhang = {
	id: "dhang",
	name: {
		en: "Hangings",
		fr: "Pendaisons",
		de: "Hängungen",
		es: "Horcas"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Number of towns which, in the end, just couldn't put up with your crap anymore.",
		fr: "Nombre de villes au cours desquelles on ne pouvait plus vous supporter.",
		de: "Anzahl der Städte, die dich nicht länger ertragen oder leiden konnten.",
		es: "Cantidad de pueblos en los que fuiste considerado indeseable."
	}
};
var dwater = {
	id: "dwater",
	name: {
		en: "Deaths by Dehydration",
		fr: "Morts par Déshydratation",
		de: "Dehydrationsstode",
		es: "Muertes por deshidratación"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Number of times you have died from dehydration. Yes indeed, it turns out water is important.",
		fr: "Nombre de morts par déshydratation terminale. Oui oui, l'eau, c'est important.",
		de: "Gibt die Anzahl der Dehydrationen an, an denen du gestorben bist. Doch, doch! Wasser ist wichtig.",
		es: "Cantidad de muertes por deshidratación terminal. Sí, el agua es importante."
	}
};
var dinfec = {
	id: "dinfec",
	name: {
		en: "Deaths by Infection",
		fr: "Morts par Infection",
		de: "Tödliche Infektionen",
		es: "Muertes por infección"
	},
	rare: 1,
	unlocks: [
		{
			count: 20,
			points: 0,
			icon: "r_dinfec.gif",
			title: {
				en: "Partially Putrified",
				fr: "Partiellement putréfié",
				de: "Teilweise verrottet",
				es: "Me duele la panza..."
			},
			description: {
				en: "Number of deaths from generalised infection.",
				fr: "Nombre d'extinctions des suites d'une infection virulente.",
				de: "Anzahl der Infektionen, die dich das Leben gekostet haben.",
				es: "Cantidad de fallecimientos por infecciones."
			}
		},
		{
			count: 40,
			points: 0,
			title: {
				en: "Infected with a poison",
				fr: "Porteur de la 'Maladie'",
				de: "Virenschleuder",
				es: "Portador del 'Mal'"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Blood 'n' Bile Spitter",
				fr: "Vomisseur de tripes",
				de: "Gedärmeauskotzer",
				es: "Vomitador de tripas"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Harbinger of the Plague",
				fr: "Annonciateur du fléau",
				de: "Seuchenherd",
				es: "Desahuciado"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "I've got a sore tummy...",
				fr: "J'ai mal au ventre...",
				de: "Ich habe Bauchschmerzen...",
				es: "Parcialmente putrefacto"
			}
		}
	],
	description: {
		en: "Number of deaths from generalised infection.",
		fr: "Nombre d'extinctions des suites d'une infection virulente.",
		de: "Anzahl der Infektionen, die dich das Leben gekostet haben.",
		es: "Cantidad de fallecimientos por infecciones."
	}
};
var doutsd = {
	id: "doutsd",
	name: {
		en: "Nights in the desert",
		fr: "Nuits dans le désert",
		de: "Wüstenausflüge",
		es: "Noches en el desierto"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 5,
			icon: "r_doutsd.gif",
			title: {
				en: "Moonlight Stroller",
				fr: "Randonneur égaré",
				de: "Verirrter Ausflügler",
				es: "Caminante perdido"
			},
			description: {
				en: "Little walks you took outside from which you never returned.",
				fr: "Petites promenades dehors dont vous n'êtes jamais revenu(e).",
				de: "Die Auszeichnung spiegelt die Anzahl der Wüstenausflüge wider, von denen du nicht mehr zurückgekehrt bist.",
				es: "Veces en las que saliste a pasear fuera del pueblo y nunca más volviste."
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Wild-eyed Wanderer",
				fr: "Flâneur nocturne",
				de: "Nächtlicher Spaziergänger",
				es: "Turista nocturno"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "Baby it's cold outside...",
				fr: "J'ai froid, dehors...",
				de: "Hier draußen ist es so kalt...",
				es: "Explorador incauto"
			}
		}
	],
	description: {
		en: "Little walks you took outside from which you never returned.",
		fr: "Petites promenades dehors dont vous n'êtes jamais revenu(e).",
		de: "Die Auszeichnung spiegelt die Anzahl der Wüstenausflüge wider, von denen du nicht mehr zurückgekehrt bist.",
		es: "Veces en las que saliste a pasear fuera del pueblo y nunca más volviste."
	}
};
var dcity = {
	id: "dcity",
	name: {
		en: "Dead in your bed",
		fr: "Morts dans votre lit",
		de: "In deinem Bett gestorben",
		es: "Muertes en tu cama"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Grandma, what big teeth you have... GROAR!",
		fr: "Mère grand, comme vous avez de grandes dents... GROAR !",
		de: "Großmutter, was hast du für große Zähne... Grrrooooaaar!",
		es: "¡Si me muero, mejor que sea cómodamente!"
	}
};
var ddrug = {
	id: "ddrug",
	name: {
		en: "Deaths from withdrawal",
		fr: "Morts par Manque",
		de: "Tod durch Entzug",
		es: "Muertes por abstinencia"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Nights you didn't see the other side of, due to lack of drugs...",
		fr: "Nuits que vous n'avez pas passées, par manque de drogue.",
		de: "So oft ist dein unfreiwilliger 'cold turkey' gescheitert...",
		es: "Veces que has muerto por falta de estimulantes."
	}
};
var dnucl = {
	id: "dnucl",
	name: {
		en: "Atomic deaths",
		fr: "Morts par l'atome",
		de: "Tod durch Radioaktivität",
		es: "Muertes por el átomo"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 0,
			icon: "r_dnucl.gif",
			title: {
				en: "Smoke? What smoke?",
				fr: "De la fumée ? Quelle fumée ?",
				de: "Rauch? Was für Rauch?",
				es: "¿Humo? ¿Qué humo?"
			},
			description: {
				en: "Number of existences entirely vaporized by the all-powerful atom..",
				fr: "Nombre d'existences vaporisées par la toute puissance de l'atome.",
				de: "Gibt an, wie oft du unter dem Einfluß von Radioaktivität das Zeitliche gesegnet hast.",
				es: "Cantidad de muertes por el gran poder del átomo."
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Leak Plugger",
				fr: "Colmateur de fuite",
				de: "Geigerzähler",
				es: "Reparador de fugas"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Light in the darkness",
				fr: "Lumière dans la nuit",
				de: "Licht im Dunkeln",
				es: "Luz en la noche"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "RadioactiveMan",
				fr: "RadioactiveMan",
				de: "Radioactive Man",
				es: "Hombre radioactivo"
			}
		},
		{
			count: 60,
			points: 0,
			title: {
				en: "Shiny Citizen",
				fr: "Citoyen rayonnant",
				de: "",
				es: "Habitante brillante"
			}
		},
		{
			count: 80,
			points: 0,
			title: {
				en: "Boom! When the reactor goes BOOM!!!",
				fr: "Boum ! Quand notre réacteur fait Boum !",
				de: "",
				es: "Booom! Cuando el reactor hace BOOOM!!!"
			}
		},
		{
			count: 90,
			points: 0,
			title: {
				en: "Atomic mushroom muncher",
				fr: "Cueilleur de champignons atomiques ",
				de: "",
				es: "Espectador atómico"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Irradiated right to the soul",
				fr: "Irradié jusque dans l'âme",
				de: "",
				es: "Espíritu de gusiluz"
			}
		},
		{
			count: 120,
			points: 0,
			title: {
				en: "I fricken love fission",
				fr: "La fission ça m'éclate ! ",
				de: "",
				es: "La palara es Nu-ce-lar"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Fiiii-ssion",
				fr: "Fiiii-ssion",
				de: "",
				es: "Nucelar"
			}
		}
	],
	description: {
		en: "Number of existences entirely vaporized by the all-powerful atom.",
		fr: "Nombre d'existences vaporisées par la toute puissance de l'atome.",
		de: "Gibt an, wie oft du unter dem Einfluß von Radioaktivität das Zeitliche gesegnet hast.",
		es: "Cantidad de muertes por el gran poder del átomo."
	}
};
var wound = {
	id: "wound",
	name: {
		en: "Injuries",
		fr: "Blessures",
		de: "Schwere Verletzungen",
		es: "Magulladuras"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Number of mutilations or dismemberments which didn't quite cost you your life.",
		fr: "Nombre de mutilations ou démembrements qui ne vous ont pas coûté la vie.",
		de: "Anzahl der Verstümmlungen und Gliedabtrennungen, die du erlitten hast.",
		es: "Cantidad de mutilaciones o desarticulaciones que no te quitaron la vida."
	}
};
var healed = {
	id: "healed",
	name: {
		en: "Patch-Ups",
		fr: "Rafistolages",
		de: "Heilungen",
		es: "Parches"
	},
	rare: 1,
	unlocks: [
		{
			count: 30,
			points: 5,
			icon: "r_dnucl.gif",
			title: {
				en: "Hard-boiled",
				fr: "Dur à cuire",
				de: "Harter Brocken",
				es: "Duro de matar"
			},
			description: {
				en: "Illnesses or injuries which you have been saved from, in-extremis.",
				fr: "Maladies ou blessures dont vous avez été sauvé(e) in-extremis.",
				de: "Anzahl der Krankheiten und schweren Verwundungen, die du in letzter Sekunde überlebt hast.",
				es: "Enfermedades o heridas que casi te costaron la vida."
			}
		},
		{
			count: 60,
			points: 0,
			title: {
				en: "Survivor",
				fr: "Survivor",
				de: "Überlebenskünstler",
				es: "Survivor"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Rambo",
				fr: "Rambo",
				de: "Rambo",
				es: "Rambo"
			}
		}
	],
	description: {
		en: "Illnesses or injuries which you have been saved from, in-extremis.",
		fr: "Maladies ou blessures dont vous avez été sauvé(e) in-extremis.",
		de: "Anzahl der Krankheiten und schweren Verwundungen, die du in letzter Sekunde überlebt hast.",
		es: "Enfermedades o heridas que casi te costaron la vida."
	}
};
var cannib = {
	id: "cannib",
	name: {
		en: "Cannibalism",
		fr: "Cannibalisme",
		de: "Kannibalismus",
		es: "Canibalismo"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_cannib.gif",
			title: {
				en: "Meat Muncher",
				fr: "Amateur de viande humaine",
				de: "Menschenfleischliebhaber",
				es: "Devorador de hombres"
			},
			description: {
				en: "Number of times you have dined on human flesh...",
				fr: "Nombre de repas à base de viande humaine...",
				de: "Die Anzahl der Stücke Menschenfleisch, die von dir verzehrt wurden...",
				es: "Cantidad de veces que tragaste carne humana..."
			}
		},
		{
			count: 40,
			points: 10,
			title: {
				en: "Dr Death's Dietician",
				fr: "Fan d'Hannibal",
				de: "Hannibalfan",
				es: "Fan de Hannibal"
			}
		},
		{
			count: 80,
			points: 0,
			title: {
				en: "Check out my skin sombrero!",
				fr: "Dévoreur de citoyens",
				de: "Totmacher",
				es: "Carnívoro voraz"
			}
		},
		{
			count: 120,
			points: 0,
			title: {
				en: "Lunches like Lecter",
				fr: "Croque morts",
				de: "Fido",
				es: "Muerde-gente"
			}
		},
		{
			count: 180,
			points: 0,
			title: {
				en: "Wannabe Zombie...",
				fr: "Zombie en devenir",
				de: "Fast schon ein Zombie...",
				es: "Zombie hambriento"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "It's better when they scream.",
				fr: "C'est meilleur si ça hurle.",
				de: "Schmeckt am besten wenn's noch schreit!",
				es: "Sabe mejor si grita"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Full of protein.",
				fr: "Le plein de Protéines.",
				de: "Die Macht der Proteine.",
				es: "¿Y esos dientes tan grandes?"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Holocaust Cannibal",
				fr: "Cannibales Holocauste",
				de: "Fine young cannibal",
				es: "Canibal consagrado"
			}
		}
	],
	description: {
		en: "Number of times you have dined on human flesh...",
		fr: "Nombre de repas à base de viande humaine...",
		de: "Die Anzahl der Stücke Menschenfleisch, die von dir verzehrt wurden...",
		es: "Cantidad de veces que tragaste carne humana..."
	}
};
var broken = {
	id: "broken",
	name: {
		en: "Breakages",
		fr: "Maladresses",
		de: "Schusseligkeiten",
		es: "Torpezas"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Number of objects you have broken through your own clumsiness.",
		fr: "Nombre d'objets que vous avez cassés au cours de vos expériences maladroites.",
		de: "Anzahl der Gegenstände, die du durch deine Tollpatschigkeit kaputt gemacht hast.",
		es: "Cantidad de objetos que has roto en tus experiencias fallidas."
	}
};
var theft = {
	id: "theft",
	name: {
		en: "Thefts",
		fr: "Larcins",
		de: "Diebstähle",
		es: "Hurtos"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_theft.gif",
			title: {
				en: "Tea Leaf",
				fr: "Petite frappe",
				de: "Maulheld",
				es: "Cleptómano"
			},
			description: {
				en: "Number of objects you have stolen from your fellow residents (alive).",
				fr: "Nombre d'objets volés chez vos voisins (en vie).",
				de: "Anzahl der Gegenstände, die du bei deinen (lebenden) Nachbarn geklaut hast.",
				es: "Cantidad de objetos robados a tus vecinos (en vida)."
			}
		},
		{
			count: 30,
			points: 10,
			title: {
				en: "Artful Dodger",
				fr: "Fripouille",
				de: "Lump",
				es: "Bandido"
			}
		},
		{
			count: 40,
			points: 0,
			title: {
				en: "Chiseler",
				fr: "Crapule",
				de: "Schaumschläger",
				es: "Pillo"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Ali Baba",
				fr: "Monte-en-l'air",
				de: "Dieb",
				es: "Ratero"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Rusty Ryan",
				fr: "Voleur",
				de: "Fantomas",
				es: "Amante de lo ajeno"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Danny Ocean",
				fr: "Maître cambrioleur",
				de: "Ali Baba",
				es: "Chorizo temible"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Master Thief",
				fr: "Passe-muraille",
				de: "Meisterdieb",
				es: "Caco"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Cleptomaniac",
				fr: "Arsène Lupin du désert",
				de: "Kleptomane",
				es: "Saqueador"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Your home is my home",
				fr: "Ta maison est ma maison",
				de: "Dein Haus ist mein Haus",
				es: "Tu casa es mi casa"
			}
		}
	],
	description: {
		en: "Number of objects you have stolen from your fellow residents (alive).",
		fr: "Nombre d'objets volés chez vos voisins (en vie).",
		de: "Anzahl der Gegenstände, die du bei deinen (lebenden) Nachbarn geklaut hast.",
		es: "Cantidad de objetos robados a tus vecinos (en vida)."
	}
};
var plundr = {
	id: "plundr",
	name: {
		en: "Pillages",
		fr: "Pillages de maison",
		de: "Häuserplünderungen",
		es: "Saqueos en casas"
	},
	rare: 0,
	unlocks: [
		{
			count: 30,
			points: 5,
			icon: "r_plundr.gif",
			title: {
				en: "Pillager",
				fr: "Pillard",
				de: "Plünderer",
				es: "Robamuertos"
			},
			description: {
				en: "Objects prised from the still-warm clutches of your former friends.",
				fr: "Objets arrachés au corps encore chaud de vos anciens amis.",
				de: "Anzahl der Gegenstände, die du deinen verblichenen Freunden entrissen hast.",
				es: "Objetos arrancados del cuerpo aún tibio de tus vecinos."
			}
		},
		{
			count: 60,
			points: 10,
			title: {
				en: "Plunderer",
				fr: "Vautour",
				de: "Aasgeier",
				es: "Buitre"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Viking",
				fr: "Charognard",
				de: "Hyäne",
				es: "Carroñero"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Post-mortem Pickpocket",
				fr: "Ecumeur post-mortem",
				de: "Wegelagerer post mortem",
				es: "Ladrón post-mortem"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "Hungry Jackal",
				fr: "Chacal affamé",
				de: "Hungriger Schakal",
				es: "Chacal"
			}
		},
		{
			count: 600,
			points: 0,
			title: {
				en: "Fleet-footed Coyote",
				fr: "Coyote des steppes arides",
				de: "Kojote der kargen Steppen",
				es: "Canalla"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Solicitor of the World Beyond",
				fr: "Notaire de l'outre-monde",
				de: "Fingerschmied",
				es: "Rata Infame"
			}
		}
	],
	description: {
		en: "Objects prised from the still-warm clutches of your former friends.",
		fr: "Objets arrachés au corps encore chaud de vos anciens amis.",
		de: "Anzahl der Gegenstände, die du deinen verblichenen Freunden entrissen hast.",
		es: "Objetos arrancados del cuerpo aún tibio de tus vecinos."
	}
};
var homeup = {
	id: "homeup",
	name: {
		en: "Home Improvements",
		fr: "Améliorations de maison",
		de: "Hausverbesserung",
		es: "Mejoras en casa"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Number of DIY projects succesfully completed around the house.",
		fr: "Nombre d'améliorations générales apportées à votre maison.",
		de: "Anzahl der Verbesserungen und Ausbauten, die du an deinem eigenen Haus vorgenommen hast.",
		es: "Cantidad de mejoras hechas a tu vivienda."
	}
};
var heroac = {
	id: "heroac",
	name: {
		en: "Heroic actions",
		fr: "Actions héroïques",
		de: "Heldentaten",
		es: "Acciones heroicas"
	},
	rare: 2,
	unlocks: [
		{
			count: 15,
			points: 5,
			icon: "r_heroac.gif",
			title: {
				en: "Comic book fan",
				fr: "Fan des X-men",
				de: "X-Men Leser",
				es: "Fan de X-Men"
			},
			description: {
				en: "Number of truly extraordinary things you've done.",
				fr: "Nombre de choses vraiment hors du commun que vous avez faites.",
				de: "Anzahl deiner wirklich außergewöhnlichen Heldentaten.",
				es: "Cantidad de acciones extraordinarias que has realizado."
			}
		},
		{
			count: 30,
			points: 10,
			title: {
				en: "Extraordinary citizen",
				fr: "Citoyen hors-norme",
				de: "Außergewöhnlicher Bürger",
				es: "Habitante fuera de serie"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Prodigy",
				fr: "Prodige",
				de: "Wunder",
				es: "Prodigio"
			}
		},
		{
			count: 70,
			points: 0,
			title: {
				en: "Superhero in training",
				fr: "Super-Héros en devenir",
				de: "Künftiger Superheld",
				es: "Aspirante a superhéroe"
			}
		},
		{
			count: 90,
			points: 0,
			title: {
				en: "Champion of the people",
				fr: "Héros du peuple",
				de: "Volksheld",
				es: "Héroe popular"
			}
		},
		{
			count: 120,
			points: 0,
			title: {
				en: "I'm Batman",
				fr: "L'incroyable citoyen",
				de: "Neo",
				es: "Soy una leyenda"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Saviour of Citizenkind",
				fr: "Sauveur de l'humanité",
				de: "Erlöser der Menschheit",
				es: "Salvador de la humanidad"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Legend of the World Beyond",
				fr: "Légende de l'Outre-Monde",
				de: "Außenweltlegende",
				es: "Superhéroe"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Lost World Messiah",
				fr: "Messie du monde perdu",
				de: "Messie der verlorenen Welt",
				es: "El Mesías"
			}
		},
		{
			count: 850,
			points: 0,
			title: {
				en: "My name is nobody",
				fr: "Mon nom est personne",
				de: "",
				es: "Soy tu ídolo y lo sabes"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "They named a constellation after me",
				fr: "J'ai donné mon nom à une constellation",
				de: "",
				es: "Arrodíllate a mis pies"
			}
		}
	],
	description: {
		en: "Number of truly extraordinary things you've done.",
		fr: "Nombre de choses vraiment hors du commun que vous avez faites.",
		de: "Anzahl deiner wirklich außergewöhnlichen Heldentaten.",
		es: "Cantidad de acciones extraordinarias que has realizado."
	}
};
var explor = {
	id: "explor",
	name: {
		en: "Distant Discoveries",
		fr: "Explorations avancées",
		de: "Komplexe Expeditionen",
		es: "Exploraciones avanzadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 15,
			points: 5,
			icon: "r_explor.gif",
			title: {
				en: "Dora the Explorer",
				fr: "Explorateur impétueux",
				de: "Stürmischer Kundschafter",
				es: "Explorador Impetuoso"
			},
			description: {
				en: "Number of buildings you have explored in far-flung zones.",
				fr: "Nombre de bâtiments dans des zones éloignées que vous avez explorés.",
				de: "Anzahl der entfernten Gebäude, die von dir erkundet wurden.",
				es: "Cantidad de edificios en zonas alejadas que has explorado."
			}
		},
		{
			count: 30,
			points: 10,
			title: {
				en: "Fearless adventurer",
				fr: "Aventurier sans peur",
				de: "Furchtloser Abenteurer",
				es: "Viajero sin miedo"
			}
		},
		{
			count: 70,
			points: 0,
			title: {
				en: "Guide to the World Beyond",
				fr: "Guide de l'Outre-Monde",
				de: "Wagemutiger Trapper",
				es: "Guía del Ultramundo"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Brave Prospector",
				fr: "Prospecteur courageux",
				de: "Wikinger",
				es: "Aventurero Temerario"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Tenzing Norgay",
				fr: "L'outre-monde est mon bac à sable",
				de: "Außenweltreiseführer",
				es: "Dora la Exploradora"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "I've been round the world... Twice!",
				fr: "J'ai fait le tour du monde... 2 fois !",
				de: "",
				es: "J'ai fait le tour du monde... 2 fois !"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Internet Explorer",
				fr: "Internet Explorer",
				de: "",
				es: "Internet Explorer"
			}
		},
		{
			count: 350,
			points: 0,
			title: {
				en: "I've even dug through a public toilet!",
				fr: "J'ai même fouillé les WC !",
				de: "",
				es: "J'ai même fouillé les WC !"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "Are we there yet?",
				fr: "Quand est ce qu'on arrive ?",
				de: "",
				es: "Quand est ce qu'on arrive ?"
			}
		}
	],
	description: {
		en: "Number of buildings you have explored in far-flung zones.",
		fr: "Nombre de bâtiments dans des zones éloignées que vous avez explorés.",
		de: "Anzahl der entfernten Gebäude, die von dir erkundet wurden.",
		es: "Cantidad de edificios en zonas alejadas que has explorado."
	}
};
var explo2 = {
	id: "explo2",
	name: {
		en: "Expert Expeditions",
		fr: "Explorations très lointaines",
		de: "Expertenexpeditionen",
		es: "Exploraciones muy lejanas"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 5,
			icon: "r_explo2.gif",
			title: {
				en: "Extreme Explorer",
				fr: "Explorateur vraiment impétueux",
				de: "Lebensmüder Kundschafter",
				es: "Caminante del Horizonte"
			},
			description: {
				en: "Number of buildings explored in EXTREMELY far away places.",
				fr: "Nombre de bâtiments dans des zones éloignées que vous avez explorés.",
				de: "Anzahl SEHR WEIT entfernter Gebäude, die von dir erkundet wurden.",
				es: "Cantidad de edificios que has explorado en zonas REALMENTE muy alejadas."
			}
		},
		{
			count: 15,
			points: 10,
			title: {
				en: "Expedition Expert",
				fr: "Expéditionnaire au long cours",
				de: "Draufgängerischer Expeditionsreisender",
				es: "Explorador impetuosísimo"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Horizon traveller",
				fr: "Au-delà du réel",
				de: "Nervenkitzelsucher",
				es: "Expedicionario"
			}
		},
		{
			count: 70,
			points: 0,
			title: {
				en: "Desert Shackleton",
				fr: "Champollion du désert",
				de: "Christopher Kolumbus",
				es: "Excursionista del desierto"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "To infinity and beyond!",
				fr: "Vers l'infini et au-delà !",
				de: "Neil Armstrong der Außenwelt",
				es: "Peregrino del Más Allá"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Indiana Jones and the ruins of the World Beyond",
				fr: "Indiana jones et les ruines de l'outre-monde",
				de: "Indiana Jones und die Ruinen der Außenwelt",
				es: "Indiana Jones del Ultramundo"
			}
		}
	],
	description: {
		en: "Number of buildings explored in EXTREMELY far away places.",
		fr: "Nombre de bâtiments dans des zones éloignées que vous avez explorés.",
		de: "Anzahl SEHR WEIT entfernter Gebäude, die von dir erkundet wurden.",
		es: "Cantidad de edificios que has explorado en zonas REALMENTE muy alejadas."
	}
};
var jrangr = {
	id: "jrangr",
	name: {
		en: "Professional Scout",
		fr: "Métier Éclaireur",
		de: "Beruf: Aufklärer",
		es: "Oficio Explorador"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_jrangr.gif",
			title: {
				en: "The Sneak",
				fr: "Furtif",
				de: "Pfadfinder",
				es: "Furtivo"
			},
			description: {
				en: "Days spent in the shadows as a Scout.",
				fr: "Jours passés dans les ombres en tant qu'Éclaireur.",
				de: "Anzahl der Tage, die du als Aufklärer gespielt hast.",
				es: "Días pasados en la oscuridad como Explorador."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Shadow Master",
				fr: "Maître des ombres",
				de: "Ninja",
				es: "Maestro de la oscuridad"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Dune Ranger",
				fr: "Ranger du risque",
				de: "Green Beret",
				es: "Amante del riesgo"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Sand Phantom",
				fr: "Fantôme des sables",
				de: "Schattenmann",
				es: "Fantasma de las arenas"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Taught Sam Fisher everything he knows!",
				fr: "Plus fort que Sam Fisher",
				de: "Wüstenphantom",
				es: "Discípulo de Sam Fisher"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "I think you are underestimating the sneakiness...",
				fr: "Disciple de Garrett",
				de: "Solid Snake war gestern...",
				es: "Discípulo de Garrett"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "The Invisible Man",
				fr: "Lady in Red",
				de: "Der unsichtbare Mann",
				es: "El Hombre Invisible"
			}
		}
	],
	description: {
		en: "Days spent in the shadows as a Scout.",
		fr: "Jours passés dans les ombres en tant qu'Éclaireur.",
		de: "Anzahl der Tage, die du als Aufklärer gespielt hast.",
		es: "Días pasados en la oscuridad como Explorador."
	}
};
var jguard = {
	id: "jguard",
	name: {
		en: "Professional Guardian",
		fr: "Métier Gardien",
		de: "Beruf: Wächter",
		es: "Oficio Guardián"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_jguard.gif",
			title: {
				en: "Defender",
				fr: "Défenseur",
				de: "Die Mauer",
				es: "Defensor"
			},
			description: {
				en: "Days spent behind your shield as a guardian.",
				fr: "Jours passés avec votre bouclier en tant que Gardien.",
				de: "Anzahl der Tage, die du als Wächter gespielt hast.",
				es: "Días pasados con tu escudo como Guardián."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Master Guardian",
				fr: "Maître gardien",
				de: "Höllenwächter",
				es: "Gran Guardián"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Wandering Knight",
				fr: "Paladin",
				de: "Kerberos",
				es: "Paladín"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Last Bastion",
				fr: "Dernier rempart",
				de: "Letzte Verteidigungslinie",
				es: "Último escudero"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "You... shall... not...PASS!",
				fr: "Vous.. ne.. passerez.. PAS !",
				de: "Du kommst hier NICHT durch!",
				es: "¡Usted no entra!"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Insurmountable citizen",
				fr: "Citoyen infranchissable",
				de: "Hekatoncheir",
				es: "Watchman"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Steel curtain",
				fr: "Holy F***ing Iceberg",
				de: "Mr. Unüberwindbar",
				es: "Muralla Humana"
			}
		}
	],
	description: {
		en: "Days spent shepherding the weak through the valleys of darkness and finding lost children!",
		fr: "Jours passés avec votre bouclier en tant que Gardien.",
		de: "Anzahl der Tage, die du als Wächter gespielt hast.",
		es: "Días pasados con tu escudo como Guardián."
	}
};
var jcolle = {
	id: "jcolle",
	name: {
		en: "Professional Scavenger",
		fr: "Métier Fouineur",
		de: "Beruf: Buddler",
		es: "Oficio Excavador"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_jcolle.gif",
			title: {
				en: "Seeker",
				fr: "Trouveur",
				de: "Sandarbeiter",
				es: "Husmeador"
			},
			description: {
				en: "Days spent as a scavenger, foraging around.",
				fr: "Jours passés à gratter le sol en tant que Fouineur.",
				de: "Anzahl der Tage, die du als Buddler gespielt hast.",
				es: "Días pasados escarbando el suelo como Excavador."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Master Scavenger",
				fr: "Maître Dénicheur",
				de: "Wüstenspringmaus",
				es: "Descubridor"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Check out my knick-knacks",
				fr: "Exhumeur de babioles",
				de: "Großer Ameisenbär",
				es: "Jefe Excavador"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Ultra Scavenger",
				fr: "Trouveur en chef",
				de: "Wüstenfuchs",
				es: "Maestro Excavador"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "I don't miss anything.",
				fr: "Rien ne m'échappe.",
				de: "Ich sehe alles!",
				es: "Nada se me escapa"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "I've got everything you need.",
				fr: "Une BMW ? Pas de p'oblème !",
				de: "Mehr brauch ich nicht.",
				es: "Radar Humano"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "A BMW M3? Too easy!",
				fr: "Où est Larchi ?",
				de: "Ein BMW? Kein Problem!",
				es: "Descubridor de tesoros"
			}
		}
	],
	description: {
		en: "Days spent as a scavenger, foraging around.",
		fr: "Jours passés à gratter le sol en tant que Fouineur.",
		de: "Anzahl der Tage, die du als Buddler gespielt hast.",
		es: "Días pasados escarbando el suelo como Excavador."
	}
};
var jermit = {
	id: "jermit",
	name: {
		en: "Professional Survivalist",
		fr: "Métier Ermite",
		de: "Beruf: Einsiedler",
		es: "Oficio Ermitaño"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_jermit.gif",
			title: {
				en: "Wormfinder General",
				fr: "Dégoteur de vers",
				de: "Wurmfresser",
				es: "Comegusanos"
			},
			description: {
				en: "Days spent as a survivalist, eating anything that comes to hand.",
				fr: "Jours passés à manger n'importe quoi en tant qu'Ermite.",
				de: "Anzahl der Tage, an denen du dich mit irgendetwas aus der Wüste ernährt hast.\"",
				es: "Días pasados comiendo cualquier cosa como Ermitaño."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Master Rootfinder",
				fr: "Maître dégoteur",
				de: "Meister im Würmerfinden",
				es: "Degustador"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Insatiable Citizen",
				fr: "Insatiable citoyen",
				de: "Gefräßiger Bürger",
				es: "Paladar insaciable"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Rat Roaster",
				fr: "Grand Mange-vermines",
				de: "Wüstenwurmzüchter",
				es: "Devorador de insectos"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Friends? Who needs 'em!",
				fr: "Hermitamor",
				de: "Ich brauche niemanden!",
				es: "Omnívoro"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Lonely...I'm so lonely",
				fr: "I'm a poor lonesome hermit...",
				de: "Heraklit der Außenwelt",
				es: "Ermitaño sin ascos"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Hardened Hermit",
				fr: "Cocodile dundee",
				de: "Gepanzerter Fakir",
				es: "Ermitaño Fakir"
			}
		}
	],
	description: {
		en: "Days spent as a survivalist, eating roots, worms and other such delicacies.",
		fr: "Jours passés à manger n'importe quoi en tant qu'Ermite.",
		de: "Anzahl der Tage, an denen du dich mit irgendetwas aus der Wüste ernährt hast.",
		es: "Días pasados comiendo cualquier cosa como Ermitaño."
	}
};
var jtamer = {
	id: "jtamer",
	name: {
		en: "Professional Tamer",
		fr: "Métier Apprivoiseur",
		de: "Beruf: Dompteur",
		es: "Oficio Domador"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_jtamer.gif",
			title: {
				en: "Talks to the animals",
				fr: "Ami des bêtes",
				de: "Tierliebhaber",
				es: "Amigo de los Animales"
			},
			description: {
				en: "Days spent as a Tamer, torturing Labradoodles.",
				fr: "Jours passés à torturer des bichons maltais.",
				de: "Anzahl der Tage, an denen du kleine Malteserhunde malträtiert hast.",
				es: "Días pasados torturando perritos."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Legend of Labradoodle",
				fr: "Maître-bichon",
				de: "Malteserzüchter",
				es: "Maestro Domador"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Wild Beast Tamer",
				fr: "Dresseur de bêtes sauvages",
				de: "Ich bändige Bestien",
				es: "Domador de Bestias"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Not without my dog!",
				fr: "Jamais sans mon chien !",
				de: "Nie ohne meinen Hund!",
				es: "Manimal"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Dog food doesn't taste so bad",
				fr: "La patée, c'est pas si mauvais",
				de: "Hundewurst schmeckt gar nicht schlecht!",
				es: "Aroma de Animal"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Homosapien / Labradoodle cross",
				fr: "Bichon-Garou susceptible",
				de: "Meser (halb Mensch, halb Malteser)",
				es: "Zoo-sapiens"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Certified Were-doodle",
				fr: "Titre à personnaliser",
				de: "Der Große Fido",
				es: "Animal Planet"
			}
		}
	],
	description: {
		en: "Days spent as a Tamer, torturing Labradoodles.",
		fr: "Jours passés à torturer des bichons maltais.",
		de: "Anzahl der Tage, an denen du kleine Malteserhunde malträtiert hast.",
		es: "Días pasados torturando perritos."
	}
};
var jtech = {
	id: "jtech",
	name: {
		en: "Professional Technician",
		fr: "Métier Technicien",
		de: "Beruf: Techniker",
		es: "Maestro técnico"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_jtech.gif",
			title: {
				en: "I'll let myself in...",
				fr: "Bricol' girl travesti",
				de: "Yo, wir schaffen das!",
				es: "Bricoloco"
			},
			description: {
				en: "The number of days you've spent jiggling and fiddling with pointy tools.",
				fr: "Jours passés à jouer avec des outils pointus.",
				de: "Anzahl der Tage, die du als Techniker gespielt hast.",
				es: "Días pasados jugando con herramientas."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "The BRD Screwdriver Combo",
				fr: "Amateur du PMV tournevis",
				de: "Kleiner Schraubendreher",
				es: "Destornillador Humano"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Spanners and Bump keys",
				fr: "Nuchuk à molette",
				de: "Schweizer Taschenmesser",
				es: "Mascafierros"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Tireless tumbler tickler",
				fr: "Constructeur increvable",
				de: "Unermüdlicher Schrauber",
				es: "Técnico Inagotable"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "TechnicoMecanoMegalo",
				fr: "TechnicoMecanoMegalo",
				de: "Seele des Handwerks",
				es: "Genio de la Mecánica"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Solo So-low professional",
				fr: "Ame du professionnel",
				de: "Wüsten-Scotty",
				es: "Mago de la llave inglesa"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Every day is open-doors day!",
				fr: "Titre à personnaliser",
				de: "Mâitre de Baustelle",
				es: "McGiver de Zombinoia"
			}
		}
	],
	description: {
		en: "The number of days you've spent jiggling and fiddling with pointy tools.",
		fr: "Jours passés à jouer avec des outils pointus.",
		de: "Anzahl der Tage, die du als Techniker gespielt hast.",
		es: "Días pasados jugando con herramientas."
	}
};
var jsham = {
	id: "jsham",
	name: {
		en: "Professional Shaman",
		fr: "Métier Chaman",
		de: "Beruf: Schamane",
		es: "Oficio Chamán"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 0,
			icon: "r_jsham.gif",
			title: {
				en: "Certified Charlatan",
				fr: "Aborigène curieux",
				de: "Diplomierter Scharlatan",
				es: "Aborigen curioso"
			},
			description: {
				en: "Days spent trafficking the souls of the dead.",
				fr: "Jours passés à trafiquer l'âme des morts.",
				de: "Anzahl der Tage, die du als Schamane gespielt hast.",
				es: "Días pasados jugando con almas de muertos."
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Accursed Soothsayer",
				fr: "Charlatan diplômé",
				de: "Schlimmer Finger",
				es: "Charlatán Amateur"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Soul Recycler",
				fr: "Aruspice maudit",
				de: "Seelenverwerter",
				es: "Charlatán Profesional"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Divine Mystic",
				fr: "Recycleur d'âmes",
				de: "Mystischer Seher",
				es: "Reciclador de Almas"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Voodoo Sorceror",
				fr: "Devin mystique",
				de: "Voodoopriester",
				es: "Místico"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Omniscient Shaman",
				fr: "Guide des âmes perdues",
				de: "Allwissender Schamane",
				es: "Brujo"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Guide of lost souls",
				fr: "Titre à personnaliser",
				de: "Anführer der verlorenen Seelen",
				es: "Manipulador de Almas"
			}
		}
	],
	description: {
		en: "Days spent trafficking the souls of the dead.",
		fr: "Jours passés à trafiquer l'âme des morts.",
		de: "Anzahl der Tage, die du als Schamane gespielt hast.",
		es: "Días pasados jugando con almas de muertos."
	}
};
var chstxl = {
	id: "chstxl",
	name: {
		en: "Luck",
		fr: "Chanceux",
		de: "Glückspilz",
		es: "Suertudo"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 5,
			icon: "r_chstxl.gif",
			title: {
				en: "The name's Nate Fortu",
				fr: "Spécialiste en aubaine",
				de: "Hans im Glück",
				es: "Golpe de Suerte"
			},
			description: {
				en: "Number of large metal chests you have found in the World Beyond.",
				fr: "Nombre de gros coffres en métal que vous avez dégotés dans l'Outre-Monde.",
				de: "Anzahl der Großen Metallkoffer, die du in der Außenwelt ausgegraben hast.",
				es: "Cantidad de grandes cofres de metal que has encontrado en el Ultramundo."
			}
		},
		{
			count: 10,
			points: 10,
			title: {
				en: "Do you feel lucky, punk?",
				fr: "Maître du coup de bol",
				de: "Vierklettriges Kleeblatt",
				es: "Maestro del Azar"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Windfall Catcher",
				fr: "Grand Veinard en chef",
				de: "Fortuna",
				es: "Pata de Conejo"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Jack Pott",
				fr: "Gontran Bonheur",
				de: "Gustav Gans",
				es: "Ganador de ganadores"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Lucky 7",
				fr: "Lucky 7",
				de: "Lucky 7",
				es: "Lucky 7"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Money for Nothing",
				fr: "Money for Nothing",
				de: "",
				es: ""
			}
		}
	],
	description: {
		en: "Number of large metal chests you have found in the World Beyond.",
		fr: "Nombre de gros coffres en métal que vous avez dégotés dans l'Outre-Monde.",
		de: "Anzahl der Großen Metallkoffer, die du in der Außenwelt ausgegraben hast.",
		es: "Cantidad de grandes cofres de metal que has encontrado en el Ultramundo."
	}
};
var tronco = {
	id: "tronco",
	name: {
		en: "Chainsaws",
		fr: "Tronçonneuses",
		de: "Kettensägen",
		es: "Sierras elécticas"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 0,
			icon: "r_tronco.gif",
			title: {
				en: "Chainsaw Massacre",
				fr: "Massacre à la tronçonneuse",
				de: "Kettensägenmassaker",
				es: "Masacre Mecánica"
			},
			description: {
				en: "The number of chainsaws you have built.",
				fr: "Nombre de tronçonneuses que vous avez assemblées.",
				de: "Anzahl der Kettensägen, die du zusammengebaut hast.",
				es: "Cantidad de sierras eléctricas que has armado."
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "There ain't nothing I can't take this chainsaw to...",
				fr: "Débiteur de viande",
				de: "Kanadischer Waldarbeiter",
				es: "Carnicero"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Bruce Campbell",
				fr: "Bruce Campbell",
				de: "Bruce Campbell",
				es: "Monstruo mecánico"
			}
		}
	],
	description: {
		en: "The number of chainsaws you have built.",
		fr: "Nombre de tronçonneuses que vous avez assemblées.",
		de: "Anzahl der Kettensägen, die du zusammengebaut hast.",
		es: "Cantidad de sierras eléctricas que has armado."
	}
};
var watgun = {
	id: "watgun",
	name: {
		en: "Water Guns",
		fr: "Canons à eau",
		de: "Wasserkanonen",
		es: "Cañones de agua"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 0,
			icon: "r_watgun.gif",
			title: {
				en: "Super Soaker",
				fr: "Pistolereau",
				de: "Super Soaker",
				es: "Pistolero de agua"
			},
			description: {
				en: "The number of water-based toys you have built.",
				fr: "Nombre de gros jouets à base d'eau que vous avez fabriqués.",
				de: "Anzahl an großen Wasserwaffen, die du gebaut hast.",
				es: "Cantidad de grandes juguetes de agua que has fabricado."
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "H2Operative",
				fr: "Spécialiste en pistolets à eau",
				de: "Wasserpistolenspezialist",
				es: "Plomero guerrillero"
			}
		},
		{
			count: 35,
			points: 0,
			title: {
				en: "Hydraulics Engineer",
				fr: "Ingénierie hydraulique",
				de: "Hydraulik-Ingenieur",
				es: "Ingeniero hidráulico"
			}
		},
		{
			count: 60,
			points: 0,
			title: {
				en: "Atlantean Ancestry",
				fr: "Descendant des atlantes",
				de: "Nachfahre von Atlantis",
				es: "Tsunami mortal"
			}
		}
	],
	description: {
		en: "The number of water-based toys you have built.",
		fr: "Nombre de gros jouets à base d'eau que vous avez fabriqués.",
		de: "Anzahl an großen Wasserwaffen, die du gebaut hast.",
		es: "Cantidad de grandes juguetes de agua que has fabricado."
	}
};
var batgun = {
	id: "batgun",
	name: {
		en: "Battery Launcher Builder",
		fr: "Super lance-piles",
		de: "Batteriewerferfabrikant",
		es: "Super lanzapilas"
	},
	rare: 1,
	unlocks: [
		{
			count: 15,
			points: 0,
			icon: "r_batgun.gif",
			title: {
				en: "There's a battery with your name on it...",
				fr: "Gardien de la Pile",
				de: "Durazell",
				es: "Lanzador de Pilas"
			},
			description: {
				en: "The number of Battery Launchers you have built.",
				fr: "Nombre de puissants lance-piles que vous avez fabriqués.",
				de: "Anzahl der Batteriewerfer, die du gebaut hast.",
				es: "Cantidad de lanza-pilas que has fabricado."
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Zen-ergizer",
				fr: "Détenteur de la Pile Sacrée",
				de: "Hüter der Heiligen Batterie",
				es: "Cañón de Pilas"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "The batterinator.",
				fr: "C'était pas ma guerre",
				de: "",
				es: "C'était pas ma guerre"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Is it a bird? Is it a plane? No, it's the super battery launcher!",
				fr: "C'est un oiseau, c'est un avion? Non c'est super lance pile",
				de: "",
				es: "C'est un oiseau, c'est un avion? Non c'est super lance pile"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Amped up and ready to roll",
				fr: "Ampère et contre tous",
				de: "",
				es: "Ampère et contre tous"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Hey hey, wanna see my... Battery?",
				fr: "Coucou! Tu veux voir ma pile ?",
				de: "",
				es: "Coucou! Tu veux voir ma pile ?"
			}
		}
	],
	description: {
		en: "The number of Battery Launchers you have built.",
		fr: "Nombre de puissants lance-piles que vous avez fabriqués.",
		de: "Anzahl der Batteriewerfer, die du gebaut hast.",
		es: "Cantidad de lanza-pilas que has fabricado."
	}
};
var repair = {
	id: "repair",
	name: {
		en: "Repairs",
		fr: "Réparations",
		de: "Reparaturen",
		es: "Reparaciones"
	},
	rare: 0,
	unlocks: [
		{
			count: 15,
			points: 0,
			icon: "r_repair.gif",
			title: {
				en: "Home Depot Regular",
				fr: "Bricoleur du dimanche",
				de: "Hobby-Heimwerker",
				es: "Reparador Dominguero"
			},
			description: {
				en: "Number of broken items that you've repaired.",
				fr: "Objets cassés que vous avez remis en état de marche.",
				de: "Anzahl kaputter Gegenstände, die du wieder repariert hast.",
				es: "Objetos rotos que has reparado."
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Fitter",
				fr: "Technicien",
				de: "Techniker",
				es: "Técnico Post-Venta"
			}
		},
		{
			count: 60,
			points: 0,
			title: {
				en: "Technician",
				fr: "Maître ingénieur",
				de: "Meisterbastler",
				es: "Manitas hábiles"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Craftsman",
				fr: "Ré-assembleur de choses",
				de: "Sowas wirft man doch nicht weg!",
				es: "Ingeniero Espacial"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "MacGyver of the World beyond",
				fr: "Mac Gyver de l'Outre-Monde",
				de: "Mac Gyver der Außenwelt",
				es: "Reparador Supremo"
			}
		}
	],
	description: {
		en: "Number of broken items that you've repaired.",
		fr: "Objets cassés que vous avez remis en état de marche.",
		de: "Anzahl kaputter Gegenstände, die du wieder repariert hast.",
		es: "Objetos rotos que has reparado."
	}
};
var cobaye = {
	id: "cobaye",
	name: {
		en: "Drug Tests",
		fr: "Expérimentations",
		de: "Drogenerfahrungen",
		es: "Experimentaciones"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 0,
			icon: "r_cobaye.gif",
			title: {
				en: "Guinea Pig",
				fr: "Cobaye de laboratoire",
				de: "Medikamentetester",
				es: "Conejillo de Indias"
			},
			description: {
				en: "The number of times you have tested dangerous drugs... on yourself.",
				fr: "Drogues aux effets dangereux que vous avez avalées.",
				de: "Anzahl der gefährlichen Drogen, die du genommen hast.",
				es: "Estimulantes con efectos peligrosos que has probado."
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Lab Rat",
				fr: "Expérience dangereuse",
				de: "Laborratte",
				es: "Sin miedo"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Product Tester!",
				fr: "Testeur de produits",
				de: "Pille palle, 3 Tage wach!",
				es: "Probador de productos"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "What do you mean these ain't skittles",
				fr: "Je n'aurais pas dû gober ça.",
				de: "Timothy Leary",
				es: "No debí probar eso"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "The sky is falling!!!",
				fr: "Je vois une Vallée Bleuûuue !",
				de: "Schamane",
				es: "¡Elefantes rosados!"
			}
		}
	],
	description: {
		en: "The number of times you have tested dangerous drugs... on yourself.",
		fr: "Drogues aux effets dangereux que vous avez avalées.",
		de: "Anzahl der gefährlichen Drogen, die du genommen hast.",
		es: "Estimulantes con efectos peligrosos que has probado."
	}
};
var ebuild = {
	id: "ebuild",
	name: {
		en: "Wonder Constructions",
		fr: "Construction de Merveilles",
		de: "Wunderwerke",
		es: "Construcción de Maravillas"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "r_ebuild.gif",
			title: {
				en: "Nonsense builder",
				fr: "Bâtisseur du non-sens",
				de: "Bauherr ohne Sinn und Verstand",
				es: "Albañil Dominguero"
			},
			description: {
				en: "The number of wonders you have constructed.",
				fr: "Nombre de Merveilles que vous avez réussi à construire.",
				de: "Anzahl der Wunderwerke, an deren Bau du mitgewirkt hast.",
				es: "Cantidad de maravillas que has logrado construir."
			}
		},
		{
			count: 3,
			points: 10,
			title: {
				en: "Founder of Timewasting",
				fr: "Fondateur du temps perdu",
				de: "Erbauer der verlorenen Zeit",
				es: "Obrero Amateur"
			}
		},
		{
			count: 7,
			points: 0,
			title: {
				en: "Enlightened Builder",
				fr: "Édificateur illuminé",
				de: "Erleuchteter Baumeister",
				es: "Obrero Iluminado"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Soul Mason",
				fr: "Maçon du coeur",
				de: "Maurer aus Leidenschaft",
				es: "Obrero Optimista"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Chief DIY",
				fr: "Joindre l'inutile à l'agréable ",
				de: "",
				es: "Top Chef"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Visionary Architect",
				fr: "Architecte visionnaire fou",
				de: "Visionärer Architekt der Schrägen",
				es: "Arquitecto Visionario"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "I have a plan",
				fr: "J'ai un plan ",
				de: "",
				es: "Tengo un plan"
			}
		},
		{
			count: 40,
			points: 0,
			title: {
				en: "Demented Master Builder",
				fr: "Maître d'oeuvre dément",
				de: "Meister des schwachsinnigen Schaffens",
				es: "Ingeniero Demente"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Master of futility",
				fr: "Maître de l'inutilité",
				de: "",
				es: "Maestro de la inutilidad"
			}
		},
		{
			count: 60,
			points: 0,
			title: {
				en: "Fruit Loop Engineer",
				fr: "Ingénieur complètement givré",
				de: "Komplett vereister Ingenieur",
				es: "Constructor Obsesionado"
			}
		},
		{
			count: 80,
			points: 0,
			title: {
				en: "Marvelously useless",
				fr: "Merveilleusement futile",
				de: "",
				es: "Maravillosamente inútil"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Bruce Lee of the trowel",
				fr: "Le Bruce Lee de la truelle",
				de: "Bruce Lee der Maurerkelle",
				es: "Constructor Megalómano"
			}
		},
		{
			count: 120,
			points: 0,
			title: {
				en: "The age of cathedrals is upon us",
				fr: "Il est venu le temps des cathédrales",
				de: "",
				es: "La edad de la catedral es como la nuestra"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Ain't y'all got nothin' else t'do?",
				fr: "Z'avez pas mieux à faire ?",
				de: "",
				es: "¿No tenéis nada mejor que hacer?"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "High Priestess of the temple of the Sun",
				fr: "Grande prêtresse du temple du soleil",
				de: "",
				es: "Sacerdotisa del templo del Sol"
			}
		}
	],
	description: {
		en: "The number of wonders you have constructed.",
		fr: "Nombre de Merveilles que vous avez réussi à construire.",
		de: "Anzahl der Wunderwerke, an deren Bau du mitgewirkt hast.",
		es: "Cantidad de maravillas que has logrado construir."
	}
};
var ebcrow = {
	id: "ebcrow",
	name: {
		en: "Wonder: Statue of the Crow",
		fr: "Merveille : Statue du Corbeau",
		de: "Wunderwerk: Statue des Raben",
		es: "Maravilla: Estatua del Cuervo"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 0,
			icon: "r_ebcrow.gif",
			title: {
				en: "Glory to the Crow!",
				fr: "Gloire au Corbeau !",
				de: "Huldigt den Raben!",
				es: "¡Gloria al Cuervo!"
			},
			description: {
				en: "The Crow is good, the Crow is all-powerful. [edited by the Crow]",
				fr: "Le Corbeau est bon, le Corbeau est bienfaisant. [édité par Corbilla Fortuna]",
				de: "Der Rabe ist gut, der Rabe ist ein Segen für die Stadt. [editiert vom Raben]",
				es: "El Cuervo es un tipazo, el Cuervo es bondadoso. [Firmado: El Cuervo]"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Pigeon from the outer world.",
				fr: "Pigeon de l'Outre-Monde",
				de: "",
				es: "Mensajero del otro mundo."
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Spécialiste ès corvidés",
				fr: "Spécialiste ès corvidés",
				de: "",
				es: "Especialista en córvidos"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Phoenix of the desert",
				fr: "Phoenix des hôtes de ces bois",
				de: "",
				es: "Fénix del desierto"
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Edit Piaf",
				fr: "Edit Piaf",
				de: "",
				es: "La vié en rose"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Bird of ill omen",
				fr: "Oiseau de mauvais augure",
				de: "",
				es: "Pájaro de mal agüero"
			}
		},
		{
			count: 40,
			points: 0,
			title: {
				en: "Crôôôaa !",
				fr: "Crôôôaa !",
				de: "",
				es: "¡Croooar!"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Once upon a time",
				fr: "Il était un foie...",
				de: "",
				es: "Érase una vez"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "John Snow",
				fr: "John Snow",
				de: "",
				es: "You know nothing..."
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "The crowinator",
				fr: "Le Corbeausier",
				de: "",
				es: "Hasta la vista, croooar"
			}
		}
	],
	description: {
		en: "The Crow is good, the Crow is all-powerful. [edited by the Crow]",
		fr: "Le Corbeau est bon, le Corbeau est bienfaisant. [édité par Corbilla Fortuna]",
		de: "Der Rabe ist gut, der Rabe ist ein Segen für die Stadt. [editiert vom Raben]",
		es: "El Cuervo es un tipazo, el Cuervo es bondadoso. [Firmado: El Cuervo]"
	}
};
var ebgros = {
	id: "ebgros",
	name: {
		en: "Wonder: Fearfulness Wheel",
		fr: "Merveille : Roue de Grostas",
		de: "Wunderwerk: Rad des Schreckens",
		es: "Maravilla: La Rueda del Miedo"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 0,
			icon: "r_ebgros.gif",
			title: {
				en: "I can see the zeds from here!",
				fr: "Oh on voit les zombies d'ici",
				de: "Ich sehe von hier oben die Zombies",
				es: "Oh, desde aquí puedo ver muchos zombies"
			},
			description: {
				en: "Look, I can see the zeds from up here!",
				fr: "Regardez, on voit les zombies de là haut !",
				de: "Sieh nur, man kann von da oben die Zombies sehen!",
				es: "Increíble, ¡desde aquí los zombies se ven como hormiguitas!"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Happy hampster",
				fr: "Hamster jovial",
				de: "",
				es: "Roedor feliz"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Desert showman!",
				fr: "Forain de l'Outre Monde !",
				de: "",
				es: "¡Muñeco de arena!"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Third wheel",
				fr: "5e roue du carrosse",
				de: "",
				es: "Sujetavelas"
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "I think i've got vertigo",
				fr: "J'ai le vertige",
				de: "",
				es: "Creo que tengo vertigo"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "On high",
				fr: "La-haut",
				de: "",
				es: "Colocado"
			}
		},
		{
			count: 40,
			points: 0,
			title: {
				en: "Eye of the desert",
				fr: "L'oeil du désert",
				de: "",
				es: "Ojo del desierto"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "There's gotta be 400 zombies salivating over us out there",
				fr: "4000 zombies nous contemplent",
				de: "",
				es: "Van a haber 400 zombies lamiéndonos ahí fuera"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Freewheeling",
				fr: "En roue libre",
				de: "",
				es: "Cicloturismo"
			}
		}
	],
	description: {
		en: "Look, I can see the zeds from up here!",
		fr: "Regardez, on voit les zombies de là haut !",
		de: "Sieh nur, man kann von da oben die Zombies sehen!",
		es: "Increíble, ¡desde aquí los zombies se ven como hormiguitas!"
	}
};
var ebpmv = {
	id: "ebpmv",
	name: {
		en: "Wonder: Giant BRD",
		fr: "Merveille : PMV géant",
		de: "Wunderwerk: Riesiger KVF",
		es: "Maravilla: COSA gigante"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 0,
			icon: "r_ebpmv.gif",
			title: {
				en: "BRDs for everyone! The people demand BRDs",
				fr: "Gloire au PMV !",
				de: "Huldigt den riesigen KVF!",
				es: "¡Gloria a la COSA!"
			},
			description: {
				en: "BRDs for everyone! The people demand BRDs!",
				fr: "Gloire au PMV géant !",
				de: "Huldigt den riesigen KVF!",
				es: "¡Gloria a la COSA!"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Modern obelisk!",
				fr: "Obélisque des temps modernes !",
				de: "",
				es: "¡Obelisco moderno!"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Standing ovation",
				fr: "Vibrant hommage",
				de: "",
				es: "Esperando ovación"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "One for the books",
				fr: "Restera dans les annales",
				de: "",
				es: "Uno con los libros"
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Extra large love",
				fr: "L'amour extra large",
				de: "",
				es: "Amor extra-largo"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "It was smaller in the pictures",
				fr: "Ca faisait plus petit sur le catalogue",
				de: "",
				es: "Se veía más pequeño en la foto"
			}
		},
		{
			count: 40,
			points: 0,
			title: {
				en: "Happiness over 9000",
				fr: "Bonheur de magnitude 8 ",
				de: "",
				es: "Felicidad por encima de 9000"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Gardians of pleasure",
				fr: "Gardien des plaisirs",
				de: "",
				es: "Guardianes del placer"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "A little closer to the stars",
				fr: "Un peu plus près des étoiles",
				de: "",
				es: "Un poco más cerca de las estrellas"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Heavens! What will the neighbours say?",
				fr: "Ciel ! Que vont dire les voisins ?",
				de: "",
				es: "¡Demonios! ¿Qué dirán los vecinos?"
			}
		}
	],
	description: {
		en: "BRDs for everyone! The people demand BRDs",
		fr: "Gloire au PMV géant !",
		de: "Huldigt den riesigen KVF!",
		es: "¡Gloria la COSA gigante!"
	}
};
var ebcstl = {
	id: "ebcstl",
	name: {
		en: "Wonder: Sandcastle",
		fr: "Merveille : Château de sable",
		de: "Wunderwerk: Sandschloss",
		es: "Maravilla: Castillo de arena"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 0,
			icon: "r_ebcstl.gif",
			title: {
				en: "Epitomy of uselessness!",
				fr: "Summum de l'inutile",
				de: "Gipfel des Nutzlosen",
				es: "Lo más inútil que se haya visto"
			},
			description: {
				en: "You really built that?",
				fr: "Vous avez vraiment construit ça ?",
				de: "Das hast du nicht wirklich gebaut?",
				es: "¿Realmente has construido eso?"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Guard of the seals",
				fr: "Garde des seaux",
				de: "",
				es: "Guardián de las costas"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Snake oil salesman",
				fr: "Marchand de sable",
				de: "",
				es: "Vendedor de aceite solar"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Beach martian",
				fr: "Martine à la plage",
				de: "",
				es: "Marciano playero"
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Now that's a sand... Wait, what?",
				fr: "Un vrai jeu d'enfants !",
				de: "",
				es: "Eso sí es una duna... ¿¡Qué demonios!?"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Permanant member of the sand club",
				fr: "Membre permanent du club mickey",
				de: "",
				es: "Nunca hables del Club de la Arena"
			}
		},
		{
			count: 40,
			points: 0,
			title: {
				en: "Never without my trowl",
				fr: "Jamais sans mon seau",
				de: "",
				es: "¡No sin mi buzo!"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "I've got sand in places I didn't even know I had!",
				fr: "Je sais, j'ai un grain",
				de: "",
				es: "¡Tengo arena en sitios que ni sabía que tenía!"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Mister Sandman ♫♪",
				fr: "Mister Sandman ♫♪",
				de: "",
				es: "Enter Sandman"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Exploit the ephemeral",
				fr: "Exploit de l'éphèmère",
				de: "",
				es: "Explota lo efímero"
			}
		}
	],
	description: {
		en: "You really built that?",
		fr: "Vous avez vraiment construit ça ?",
		de: "Das hast du nicht wirklich gebaut?",
		es: "¿Realmente has construido eso?"
	}
};
var drug = {
	id: "drug",
	name: {
		en: "Drugs",
		fr: "Drogues",
		de: "Drogen",
		es: "Estimulantes"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "The number of funny little pills you have swallowed (or hidden elsewhere...).",
		fr: "Nombre de petits cachets rigolos que vous avez avalés (ou placés ailleurs...).",
		de: "Anzahl kleiner lustiger Pillen, die du geschluckt oder sonstwie eingenommen hast.",
		es: "Cantidad de pequeñas pildoritas de colores que has tragado (o colocado en otra parte...)"
	}
};
var alcool = {
	id: "alcool",
	name: {
		en: "Alcohol",
		fr: "Alcools",
		de: "Alkohol",
		es: "Alcoholes"
	},
	rare: 0,
	unlocks: [
		{
			count: 30,
			points: 0,
			title: {
				en: "Just one finger!",
				fr: "Juste un doigt !",
				de: "",
				es: "Juste un doigt !"
			}
		},
		{
			count: 60,
			points: 0,
			title: {
				en: "Pilager of the liquor store.",
				fr: "Pilier de comptoir",
				de: "",
				es: "Pilier de comptoir"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Hennessy Highwayman",
				fr: "Routier du rhum",
				de: "",
				es: "Routier du rhum"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Barney Gumble of the world beyond",
				fr: "Barney Gumble de l'Outre-Monde",
				de: "",
				es: "Barney Gumble de l'Outre-Monde"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "Absinthe from drinking next time eh?!",
				fr: "Absinthe toi la prochaine fois",
				de: "",
				es: "Absinthe toi la prochaine fois"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Gimme a drink or the dog gets it! ",
				fr: "A boire ou j'tue le chien ! ",
				de: "",
				es: "A boire ou j'tue le chien ! "
			}
		},
		{
			count: 600,
			points: 0,
			title: {
				en: "If it's under 55 proof it's water!",
				fr: "Avant 55°, c'est de l'eau",
				de: "",
				es: "Avant 55°, c'est de l'eau"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Dialysis",
				fr: "Sans Foie ni Loi",
				de: "",
				es: "Sans Foie ni Loi"
			}
		}
	],
	description: {
		en: "The number of litres of home-made alcoholic substances you have consumed.",
		fr: "Litres de substances alcoolisées artisanales que vous avez avalés.",
		de: "Anzahl der Liter selbstgebrannten Alkohols, den du gesoffen hast.",
		es: "Litros de bebidas alcohólicas artesanales que has ingerido."
	}
};
var forum = {
	id: "forum",
	name: {
		en: "Messages",
		fr: "Messages",
		de: "Nachrichten",
		es: "Mensajes"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "The number of worthwhile (or otherwise) messages you have left on the town forums.",
		fr: "Quantité de messages utiles (ou pas) que vous avez laissés sur le forum de ville.",
		de: "Anzahl der sinnvollen (oder sinnlosen...) Nachrichten, die du im Stadtforum geschrieben hast.",
		es: "Cantidad de mensajes útiles (o no) que has publicado en el foro del pueblo."
	}
};
var maso = {
	id: "maso",
	name: {
		en: "Masochism",
		fr: "Masochisme",
		de: "Masochismus",
		es: "Masoquismo"
	},
	rare: 1,
	unlocks: [
		{
			count: 20,
			points: 5,
			icon: "r_maso.gif",
			title: {
				en: "Casual S+M Enthusiast",
				fr: "Adepte SM",
				de: "SM-Anhänger",
				es: "Adepto del SM"
			},
			description: {
				en: "The number of joyous moments in all this suffering.",
				fr: "Moments de bonheur dans la souffrance la plus totale.",
				de: "Anzahl der Glücksmomente, die du leidend oder schmerzgeplagt genossen hast.",
				es: "Momentos de felicidad en el sufrimiento más profundo."
			}
		},
		{
			count: 40,
			points: 10,
			title: {
				en: "Whip me harder!",
				fr: "Maître du PMV",
				de: "SM-Spezialist",
				es: "Amo de la COSA"
			}
		},
		{
			count: 60,
			points: 0,
			title: {
				en: "Attach the testicle clamps!",
				fr: "Appelez-moi Maîtresse",
				de: "Nenn mich Herrin",
				es: "Llámame como quieras"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Bring out the gimp!",
				fr: "Fais de moi ton objet",
				de: "Ich möchte dein Objekt sein.",
				es: "Tócame, soy real"
			}
		}
	],
	description: {
		en: "The number of joyous moments in all this suffering.",
		fr: "Moments de bonheur dans la souffrance la plus totale.",
		de: "Anzahl der Glücksmomente, die du leidend oder schmerzgeplagt genossen hast.",
		es: "Momentos de felicidad en el sufrimiento más profundo."
	}
};
var animal = {
	id: "animal",
	name: {
		en: "Butcher",
		fr: "Boucherie",
		de: "Metzger",
		es: "Carnicería"
	},
	rare: 0,
	unlocks: [
		{
			count: 30,
			points: 5,
			icon: "r_animal.gif",
			title: {
				en: "Local Butcher",
				fr: "30 millions d'ennemis",
				de: "Stadtmetzger",
				es: "Amigo de los animales"
			},
			description: {
				en: "The number of animals you have exterminated (by hand, with a mixer, with a saniflow macerator...).",
				fr: "Nombre d'animaux que vous avez exterminés (à la main, au mixer, au sani-broyeur...).",
				de: "Anzahl der Tiere, die du umgebracht hast (mit deinen Händen, im Mixer, in der Fäkalienhebeanlage...).",
				es: "Cantidad de animales que has exterminado (con las manos, con un machete, con una batidora...)"
			}
		},
		{
			count: 60,
			points: 10,
			title: {
				en: "Anyone for a fat-cat-kebab?",
				fr: "Responsable d'extinctions",
				de: "Spezialität: Hundesteaks",
				es: "Encargado de extinciones"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Scourge of the animal kingdom...",
				fr: "Fléau du monde animal",
				de: "Miezi? Jaaaa, komm her...",
				es: "Amenaza del mundo animal"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "If we're meant to eat vegetables, why are animals so tasty?",
				fr: "Spécialité : steak de chaton",
				de: "Fleisch ist mein Gemüse",
				es: "Especialidad: Puré de gato"
			}
		}
	],
	description: {
		en: "The number of animals you have exterminated (by hand, with a mixer, with a saniflow macerator...).",
		fr: "Nombre d'animaux que vous avez exterminés (à la main, au mixer, au sani-broyeur...).",
		de: "Anzahl der Tiere, die du umgebracht hast (mit deinen Händen, im Mixer, in der Fäkalienhebeanlage...).",
		es: "Cantidad de animales que has exterminado (con las manos, con un machete, con una batidora...)"
	}
};
var deco = {
	id: "deco",
	name: {
		en: "Decoration",
		fr: "Décoration",
		de: "Hauseinrichtung",
		es: "Decoración"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 5,
			icon: "r_deco.gif",
			title: {
				en: "Coquette",
				fr: "Coquet",
				de: "Ästhet",
				es: "Detallista"
			},
			description: {
				en: "The number of decoration points you have taken the trouble to add to your dwelling place.",
				fr: "Nombre de pointss de décoration que vous avez pris la peine d'ajouter à votre habitat.",
				de: "Anzahl der Punkte, die du durch sinnlose Einrichtungsverschönerungen gewonnen hast",
				es: "Cantidad de puntos de decoración que has agregado a tu hogar."
			}
		},
		{
			count: 250,
			points: 10,
			title: {
				en: "Good taste personified",
				fr: "Citoyen de bon goût",
				de: "Schaufenstergestalter",
				es: "Habitante con buen gusto"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Interior designer",
				fr: "Architecte d'intérieur",
				de: "Innenarchitekt",
				es: "Decorador de interiores"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Marquee Master",
				fr: "Maître-décorateur de tentes",
				de: "Möbelgourmet",
				es: "Decorador con estilo"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Aesthetics Expert",
				fr: "Maître Es-thète",
				de: "Ordnung muss sein!",
				es: "Maestro de la estética"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Style is eternal...",
				fr: "Plus belle la vie !",
				de: "E-KEA Süchtling",
				es: "¡Envidia mi mansión!"
			}
		},
		{
			count: 2500,
			points: 0,
			title: {
				en: "Welcome to the palace.",
				fr: "Grand Catalogue Kiela",
				de: "Anankastische Person",
				es: "Feria del Hogar"
			}
		}
	],
	description: {
		en: "The number of decoration points you have taken the trouble to add to your dwelling place.",
		fr: "Nombre de points de décoration que vous avez pris la peine d'ajouter à votre habitat.",
		de: "Anzahl der Punkte, die du durch sinnlose Einrichtungsverschönerungen gewonnen hast.",
		es: "Cantidad de puntos de decoración que has agregado a tu hogar."
	}
};
var digger = {
	id: "digger",
	name: {
		en: "Excavations",
		fr: "Déblaiement",
		de: "Ausgrabungsarbeiten",
		es: "Desmonte"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "r_digger.gif",
			title: {
				en: "Archaeologist",
				fr: "Forçat du désert",
				de: "Archäologielehrling",
				es: "Fuerzudo del desierto"
			},
			description: {
				en: "The number of action points you have invested in excavating ruins in the World Beyond.",
				fr: "points d'action investis dans le déblaiement d'un bâtiment dans l'Outre-Monde.",
				de: "Anzahl der Aktionspunkte, die du verbraucht hast, um eine Gebäuderuine in der Außenwelt freizulegen.",
				es: "Puntos de acción invertidos en despejar un edificio en el Ultramundo."
			}
		},
		{
			count: 300,
			points: 10,
			title: {
				en: "Sand Shifter",
				fr: "Ouvrier des sables",
				de: "Archäologe",
				es: "Conan de las arenas"
			}
		},
		{
			count: 750,
			points: 0,
			title: {
				en: "Ruin Restorer",
				fr: "Découvreur de bâtiments",
				de: "Grabungsleiter",
				es: "Hombre Caterpillar"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Indiana Jones",
				fr: "Creuseur de grands trous",
				de: "Maulwurf Grabowski",
				es: "Máquina de desmonte"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Desert Rat",
				fr: "Taupe géante",
				de: "Schliemann",
				es: "Topo biónico"
			}
		}
	],
	description: {
		en: "The number of action points you have invested in excavating ruins in the World Beyond.",
		fr: "points d'action investis dans le déblaiement d'un bâtiment dans l'Outre-Monde.",
		de: "Anzahl der Aktionspunkte, die du verbraucht hast, um eine Gebäuderuine in der Außenwelt freizulegen.",
		es: "Puntos de acción invertidos en despejar un edificio en el Ultramundo."
	}
};
var buildr = {
	id: "buildr",
	name: {
		en: "Constructions",
		fr: "Chantiers",
		de: "Baustellen",
		es: "Construcciones"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 5,
			icon: "r_buildr.gif",
			title: {
				en: "Labourer",
				fr: "Ouvrier",
				de: "Maurerlehrling",
				es: "Obrero"
			},
			description: {
				en: "The number of action / construction points you have invested in the construction projects in town.",
				fr: "points d'action et/ou de chantier investis dans l'avancement d'un chantier en ville.",
				de: "Anzahl der Aktionspunkte, die du für den Bau neuer Konstruktionen und Stadtgebäude verwendet hast.",
				es: "Puntos de acción o de construcción invertidos en el avance de una obra en el pueblo."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Builder",
				fr: "Bâtisseur",
				de: "Maurer",
				es: "Urbanista"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "Site Manager",
				fr: "Chef de chantier",
				de: "Polier",
				es: "Jefe de construcción"
			}
		},
		{
			count: 700,
			points: 0,
			title: {
				en: "Architect",
				fr: "Architecte",
				de: "Baustellenleiter",
				es: "Maestro constructor"
			}
		},
		{
			count: 1300,
			points: 0,
			title: {
				en: "Master Architect",
				fr: "Maître-architecte",
				de: "Architekt",
				es: "Mecenas de la construcción"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Town Planner",
				fr: "Créateur de villes",
				de: "Meisterarchitekt",
				es: "Magnate del ladrillo"
			}
		},
		{
			count: 3000,
			points: 0,
			title: {
				en: "Bob the builder",
				fr: "Captain Parpaing",
				de: "Oscar Niemeyer",
				es: "Ramsés del siglo XXI"
			}
		},
		{
			count: 4000,
			points: 0,
			title: {
				en: "Cement & Garfunkle",
				fr: "Ciment & Garfunkel",
				de: "",
				es: "Ciment & Garfunkel"
			}
		},
		{
			count: 5000,
			points: 0,
			title: {
				en: "The human ant",
				fr: "Colonie de fourmis humaine",
				de: "",
				es: "Colonie de fourmis humaine"
			}
		},
		{
			count: 6000,
			points: 0,
			title: {
				en: "The Great Wall of what?",
				fr: "Chapeau moellon et bottes de cuivre",
				de: "",
				es: "Chapeau moellon et bottes de cuivre"
			}
		},
		{
			count: 8000,
			points: 0,
			title: {
				en: "Pyramid shmyramid",
				fr: "Le travail, c'est la santé",
				de: "",
				es: "Le travail, c'est la santé"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "I'm working on the Sagrada",
				fr: "L'abbé Tonière",
				de: "",
				es: "L'abbé Tonière"
			}
		}
	],
	description: {
		en: "The number of action / construction points you have invested in the construction projects in town.",
		fr: "points d'action et/ou de chantier investis dans l'avancement d'un chantier en ville.",
		de: "Anzahl der Aktionspunkte, die du für den Bau neuer Konstruktionen und Stadtgebäude verwendet hast.",
		es: "Puntos de acción o de construcción invertidos en el avance de una obra en el pueblo."
	}
};
var wondrs = {
	id: "wondrs",
	name: {
		en: "Extreme Projects",
		fr: "Projets insensés",
		de: "Absurde Projekte",
		es: "Proyectos delirantes"
	},
	rare: 1,
	unlocks: [
		{
			count: 20,
			points: 5,
			icon: "r_wondrs.gif",
			title: {
				en: "Master Builder",
				fr: "Grand bâtisseur",
				de: "Großer Baumeister",
				es: "Constructor idealista"
			},
			description: {
				en: "The number of extreme projects you have carried out.",
				fr: "Nombre de projets insensés achevés de votre vivant.",
				de: "Anzahl der Absurden Projekte, deren Fertigstellung du noch erlebt hast.",
				es: "Cantidad de proyectos delirantes terminados durante tu triste vida."
			}
		},
		{
			count: 50,
			points: 10,
			title: {
				en: "Great Architect",
				fr: "Grand architecte",
				de: "Großer Architekt",
				es: "Constructor visionario"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Great Mason",
				fr: "Franc-maçon",
				de: "Freimauer",
				es: "Arquitecto estrambótico"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Terraforming Specialist",
				fr: "Spécialiste en terraformation",
				de: "Terraformingspezialist",
				es: "Gaudí de Zombinoia"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Great, benevolent, all-powerful creator",
				fr: "Grand créateur tout-puissant",
				de: "Allmächtiger Schöpfer",
				es: "Faraón del siglo XXI"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "I can recite pi to infinity!",
				fr: "Archi-maid illustrateur de Pi",
				de: "",
				es: "Archi-maid illustrateur de Pi"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Three rivers dam... That's adorable.",
				fr: "Muad'Dib",
				de: "",
				es: "Muad'Dib"
			}
		},
		{
			count: 350,
			points: 0,
			title: {
				en: "And on the 7th day, he did not rest!",
				fr: "Le 7ème jour, il créa la cage à viande",
				de: "",
				es: "Le 7ème jour, il créa la cage à viande"
			}
		}
	],
	description: {
		en: "The number of extreme projects you have carried out.",
		fr: "Nombre de projets insensés achevés de votre vivant.",
		de: "Anzahl der Absurden Projekte, deren Fertigstellung du noch erlebt hast.",
		es: "Cantidad de proyectos delirantes terminados durante tu triste vida."
	}
};
var wondr2 = {
	id: "wondr2",
	name: {
		en: "Truly ludicrous projects",
		fr: "Projets vraiment absurdes",
		de: "Lächerliche Projekte",
		es: "Proyectos realmente absurdos"
	},
	rare: 1,
	unlocks: [
		{
			count: 20,
			points: 5,
			icon: "r_wondr2.gif",
			title: {
				en: "Grand Planner",
				fr: "Grand Ordonnateur",
				de: "Großer Organisator",
				es: "Creatividad demencial"
			},
			description: {
				en: "The number of truly ludicrous projects you've carried out.",
				fr: "Nombre de projets vraiment absurdes achevés de votre vivant.",
				de: "Anzahl der Lächerlichen Projekte, deren Fertigstellung du noch erlebt hast.",
				es: "Cantidad de construcciones sin ningún sentido que realizaste en tu vida."
			}
		},
		{
			count: 50,
			points: 10,
			title: {
				en: "Creator of Marvels",
				fr: "Créateur de merveilles",
				de: "Wunderarchitekt",
				es: "Hacedor de maravillas"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Illuminato",
				fr: "Illuminati",
				de: "Illuminato",
				es: "Arquitecto chiflado"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Great Pharaoh",
				fr: "Grand Pharaon",
				de: "Großer Pharao",
				es: "Faraón incomprendido"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Hand of God",
				fr: "Main de dieu",
				de: "Schöpferhand",
				es: "Gran inconsciente"
			}
		}
	],
	description: {
		en: "The number of truly ludicrous projects you've carried out.",
		fr: "Nombre de projets vraiment absurdes achevés de votre vivant.",
		de: "Anzahl der Lächerlichen Projekte, deren Fertigstellung du noch erlebt hast.",
		es: "Cantidad de construcciones sin ningún sentido que realizaste en tu vida."
	}
};
var beta$1 = {
	id: "beta",
	name: {
		en: "In with the bricks",
		fr: "Ancien bêta-testeur",
		de: "Ehemaliger BETA-Tester",
		es: "Beta-tester"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_beta.gif",
			title: {
				en: "In with the bricks",
				fr: "Grand ancien",
				de: "Alter Hase",
				es: "Beta-tester"
			},
			description: {
				en: "An extremely rare distinction, awarded only to the very earliest citizens of Die2Nite.",
				fr: "Distinction rarissime réservée aux tout premiers citoyens de Hordes.",
				de: "Dies ist eine äußerst seltene Auszeichnung, die den ersten Spielern von 'Die Verdammten' vorbehalten ist.",
				es: "Distinción rarísima otorgada a quienes participaron en la fase Beta, los primeros jugadores de Zombinoia."
			}
		}
	],
	description: {
		en: "An extremely rare distinction, awarded only to the very earliest citizens of Die2Nite.",
		fr: "Distinction rarissime réservée aux tout premiers citoyens de Hordes.",
		de: "Dies ist eine äußerst seltene Auszeichnung, die den ersten Spielern von 'Die Verdammten' vorbehalten ist.",
		es: "Distinción rarísima otorgada a quienes participaron en la fase Beta, los primeros jugadores de Zombinoia."
	}
};
var cgarb = {
	id: "cgarb",
	name: {
		en: "Removals",
		fr: "Sorteur",
		de: "Leichenentsorger",
		es: "Lanzamuertos"
	},
	rare: 0,
	unlocks: [
		{
			count: 60,
			points: 0,
			icon: "r_cgarb.gif",
			title: {
				en: "Corpse Cop",
				fr: "Eboueur",
				de: "Müllmann",
				es: "Basurero"
			},
			description: {
				en: "The number of dead friends you've dragged out of the town.",
				fr: "Nombre d'amis morts que vous avez tirés hors de la ville.",
				de: "Anzahl deiner toten Freunde, die du außerhalb der Stadt entsorgt hast.",
				es: "Cantidad de amigos muertos que has tirado fuera del pueblo."
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Body Bouncer",
				fr: "Sorteur en chef",
				de: "Erfahrener Müllmann",
				es: "Lanzador de cadáveres"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Stiff Shifter",
				fr: "Expulseur de cadavres",
				de: "Entsorgungsfachmann",
				es: "Cañón lanzamuertos"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Apocalyptic Garbageman",
				fr: "Refouleur de macchabées",
				de: "Mülldeponiechef",
				es: "Lanzamuertos Ultra 2000"
			}
		}
	],
	description: {
		en: "The number of dead friends you've dragged out of the town.",
		fr: "Nombre d'amis morts que vous avez tirés hors de la ville.",
		de: "Anzahl deiner toten Freunde, die du außerhalb der Stadt entsorgt hast.",
		es: "Cantidad de amigos muertos que has tirado fuera del pueblo."
	}
};
var cwater = {
	id: "cwater",
	name: {
		en: "Sprinkler",
		fr: "Arroseur",
		de: "Leichenwäscher",
		es: "Mojador de muertos"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 0,
			icon: "r_cwater.gif",
			title: {
				en: "Silver Showerer",
				fr: "Grand arroseur",
				de: "Nein, das Ding fasse ich nicht an.",
				es: "Regador Ocasional"
			},
			description: {
				en: "Ceremonial showers given to corpses of citizens to ensure their non-return.",
				fr: "Cérémonies d'arrosage pratiquées sur des cadavres de citoyens.",
				de: "Anzahl der Leichenwaschzeremonien, die du mit den Körpern deiner verstorbenen Mitbürger durchgeführt hast.",
				es: "Veces que has regado con agua los cadáveres del pueblo."
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Golden Showerer",
				fr: "Mouilleur de cadavres",
				de: "Leichenhygieniker",
				es: "¿Un chorrito más señor?"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Platinum Showerer",
				fr: "Pasteur du village",
				de: "Ich liebe den Geruch von gewaschenen Leichen am Morgen.",
				es: "Mojador de la Muerte"
			}
		}
	],
	description: {
		en: "The number of ceremonial showers given to corpses of citizens to ensure their non-return.",
		fr: "Cérémonies d'arrosage pratiquées sur des cadavres de citoyens.",
		de: "Anzahl der Leichenwaschzeremonien, die du mit den Körpern deiner verstorbenen Mitbürger durchgeführt hast.",
		es: "Veces que has regado con agua los cadáveres del pueblo."
	}
};
var wrestl = {
	id: "wrestl",
	name: {
		en: "Fights of despair",
		fr: "Combats désespérés",
		de: "Kämpfe um Leben und Tod",
		es: "Combates mortales"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 0,
			icon: "r_wrestl.gif",
			title: {
				en: "Ultimate Fighter",
				fr: "Promeneur désespéré",
				de: "Ultimate Fighter",
				es: "Golpeador de zombies"
			},
			description: {
				en: "Zombies you have killed with your bare hands, using no weapons or special abilities. Wow!",
				fr: "Zombies éliminés de vos propres mains, sans arme ni capacité spéciale. Wahou.",
				de: "Anzahl der Zombies, die du mit den bloßen Händen umgebracht hast. Wow!",
				es: "Zombies que mataste con tus propias manos, sin armas ni competencias especiales. ¡Eso macho!"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Wild Beast",
				fr: "Bête sauvage",
				de: "Wilde Bestie",
				es: "Destrozador de zombies"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Son of Rambo",
				fr: "Ancêtre de Rambo",
				de: "Rambos Nachfahre",
				es: "Destripador"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "Fear? What's that then?",
				fr: "Même pas peur !",
				de: "Angst? Was ist das?",
				es: "Arrancador de cabezas"
			}
		},
		{
			count: 600,
			points: 0,
			title: {
				en: "Throwing zombies around like Strippers' bras!",
				fr: "Etripeur à mains nues",
				de: "Zombies Ausweiden macht Spaß!",
				es: "El Undertaker de Zombinoia"
			}
		}
	],
	description: {
		en: "The number of zombies you have killed with your bare hands, using no weapons or special abilities. Wow!",
		fr: "Zombies éliminés de vos propres mains, sans arme ni capacité spéciale. Wahou.",
		de: "Anzahl der Zombies, die du mit den bloßen Händen umgebracht hast. Wow!",
		es: "Zombies que mataste con tus propias manos, sin armas ni competencias especiales. ¡Eso macho!"
	}
};
var ban = {
	id: "ban",
	name: {
		en: "Banishments",
		fr: "Bannissements",
		de: "Verbannungen",
		es: "Destierros"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "The number of times you have been run out of town by a lynch mob.",
		fr: "Nombre d'exclusions définitives de la communauté.",
		de: "Anzahl der Stadtverbannungen.",
		es: "Cantidad de veces que fuiste expulsado de la comunidad."
	}
};
var surlst = {
	id: "surlst",
	name: {
		en: "Last Man Standing",
		fr: "Mort Ultime !",
		de: "Letzter Toter",
		es: "¡El Último Habitante!"
	},
	rare: 2,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_surlst.gif",
			title: {
				en: "Zombie favourite",
				fr: "Favori des zombies",
				de: "Zombieliebling",
				es: "Salvado por la campana"
			},
			description: {
				en: "You were the last to die ! Very few citizens have accomplished this feat!",
				fr: "Vous êtes le ou la dernière à mourir ! Très peu de citoyens ont réalisé cet exploit !",
				de: "Du bist der oder die Letzte, die draufgeht. Diese Ehre wird nur ganz wenigen Bürgern zuteil.",
				es: "Fuiste el último en morir en tu pueblo. ¡Muy pocos jugadores han logrado esta hazaña!"
			}
		},
		{
			count: 15,
			points: 10,
			title: {
				en: "Last Boy Scout",
				fr: "Last man standing",
				de: "Last man standing",
				es: "Amigo de los zombies"
			}
		},
		{
			count: 30,
			points: 15,
			title: {
				en: "Dances with Hordes",
				fr: "Increvable",
				de: "Der mit den Zombies tanzt",
				es: "¡El muerto eres tú!"
			}
		},
		{
			count: 50,
			points: 20,
			title: {
				en: "Me vs. the Horde!",
				fr: "Seul(e) contre les Hordes",
				de: "I will survive!",
				es: "Duro de matar"
			}
		},
		{
			count: 100,
			points: 25,
			title: {
				en: "Chuck Norris Mk.2",
				fr: "Égal de Chuck Norris",
				de: "Du = Chuck Norris",
				es: "Vencedor de la muerte"
			}
		}
	],
	description: {
		en: "You were the last to die! Very few citizens have accomplished this feat!",
		fr: "Vous êtes le ou la dernière à mourir ! Très peu de citoyens ont réalisé cet exploit !",
		de: "Du bist der oder die Letzte, die draufgeht. Diese Ehre wird nur ganz wenigen Bürgern zuteil.",
		es: "Fuiste el último en morir en tu pueblo. ¡Muy pocos jugadores han logrado esta hazaña!"
	}
};
var suhard = {
	id: "suhard",
	name: {
		en: "Last Man Standing - Hardcore!",
		fr: "Mort Ultime du Pandémonium !",
		de: "Letzter Toter Pandämoniumsstadt!",
		es: "El Último Superviviente en Pandemonio"
	},
	rare: 2,
	unlocks: [
		{
			count: 5,
			points: 5,
			icon: "r_suhard.gif",
			title: {
				en: "Hell is a walk in the park.",
				fr: "L'enfer, c'est mon quotidien.",
				de: "Ich bin in der Hölle aufgewachsen.",
				es: "El infierno es mi hogar"
			},
			description: {
				en: "You were the last to bite the bullet in a Hardcore town!",
				fr: "Vous êtes le ou la dernière à mourir au cours d'une ville du Pandémonium !",
				de: "Du bist der oder die Letzte, die in einer Pandämoniumsstadt draufgeht!",
				es: "¡Fuiste el último en morir en un pueblo del Pandemonio!"
			}
		},
		{
			count: 10,
			points: 10,
			title: {
				en: "It's just too easy.",
				fr: "C'était vraiment trop facile.",
				de: "Viel zu einfach...",
				es: "¿No había algo más difícil?"
			}
		},
		{
			count: 20,
			points: 15,
			title: {
				en: "I eat nails and sh*t bullets!",
				fr: "Je mâche le silex !",
				de: "Ich fresse Granit zum Frühstück!",
				es: "Yo como asufre puro"
			}
		},
		{
			count: 40,
			points: 20,
			title: {
				en: "Hardcore? Candy from babies...",
				fr: "Le Pandémonium ? Pff. Easy.",
				de: "Pandämonium? Kinderkram!.",
				es: "¿Pande..qué? Ah, no fue nada"
			}
		},
		{
			count: 100,
			points: 25,
			title: {
				en: "Hardcore Apostle",
				fr: "Apôtre du Pandémonium",
				de: "Apostel des Pandämoniums",
				es: "Terror del Pandemonio"
			}
		}
	],
	description: {
		en: "You were the last to bite the bullet in a Hardcore town!",
		fr: "Vous êtes le ou la dernière à mourir au cours d'une ville du Pandémonium !",
		de: "Du bist der oder die Letzte, die in einer Pandämoniumsstadt draufgeht!",
		es: "¡Fuiste el último en morir en un pueblo del Pandemonio!"
	}
};
var surgrp = {
	id: "surgrp",
	name: {
		en: "Last line of defence",
		fr: "Dernière ligne",
		de: "Letzte Verteidigungslinie",
		es: "Última línea"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Eternally second",
				fr: "Éternel second",
				de: "",
				es: "Éternel second"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "The guard may perish, but he never gives up!",
				fr: "La garde meurt, mais ne se rend pas !",
				de: "",
				es: "La garde meurt, mais ne se rend pas !"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "The second last of the Mohicans",
				fr: "L'avant-dernier des Mohicans",
				de: "",
				es: "L'avant-dernier des Mohicans"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Allllllmooooooost, ah nope, damn it!",
				fr: "Eeeeeeeet ben non",
				de: "",
				es: "Eeeeeeeet ben non"
			}
		},
		{
			count: 40,
			points: 0,
			title: {
				en: "All the way to the end and a bit further",
				fr: "Jusqu'au bout, et même un peu moins loin",
				de: "",
				es: "Jusqu'au bout, et même un peu moins loin"
			}
		},
		{
			count: 60,
			points: 0,
			title: {
				en: "Close ranks and hold on!",
				fr: "Serrez les rangs... et les fesses...",
				de: "",
				es: "Serrez les rangs... et les fesses..."
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Hello... Is there anybody out there?",
				fr: "Vous êtes là les copains?",
				de: "",
				es: "Vous êtes là les copains?"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Hold your positions men!",
				fr: "Tenez vos positions !",
				de: "",
				es: "Tenez vos positions !"
			}
		}
	],
	description: {
		en: "You were one of the last people to see the Hordes descend on the town...",
		fr: "Vous faites partie des derniers à avoir vu les Hordes déferler sur la ville... ",
		de: "Du gehörst zu den letzten Bürgern der Stadt, die die Zombiehorde 'empfangen' hat...",
		es: "Fuiste uno de los últimos en ver las hordas de zombies invadir el pueblo."
	}
};
var cooked = {
	id: "cooked",
	name: {
		en: "Extreme BBQ Chef",
		fr: "Cuisine exotique",
		de: "Grillmeister",
		es: "Cocina exótica"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "The number of former friends and fellow residents you have cooked and eaten.",
		fr: "Anciens amis que vous avez cuisinés au Cremato-cue.",
		de: "Anzahl deiner alten Freunde, die du im Kremato-Cue gegrillt hast.",
		es: "Viejos amigos a los que has cocinado en el Cremato-bar."
	}
};
var refine = {
	id: "refine",
	name: {
		en: "Craftsman",
		fr: "Artisanat",
		de: "Handwerk",
		es: "Artesano"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "The number of objects you have assembled or dismantled at the workshop.",
		fr: "Nombre de petits objets bricolés ou démolis à l'atelier.",
		de: "Anzahl der Gegenstände, die du in der Werkstatt zusammengebaut oder zerstört hast.",
		es: "Cantidad de cachivaches armados o destruidos en el taller."
	}
};
var rp = {
	id: "rp",
	name: {
		en: "Roleplayer",
		fr: "Rôliste",
		de: "Textsammler",
		es: "Rolista"
	},
	rare: 1,
	unlocks: [
		{
			count: 5,
			points: 5,
			icon: "r_rp.gif",
			title: {
				en: "Curious reader",
				fr: "Lecteur curieux",
				de: "Neugieriger Leser",
				es: "Lector curioso"
			},
			description: {
				en: "The number of documents and other uncovered 'roleplay' items.",
				fr: "Documents et autres découvertes 'roleplay'.",
				de: "Anzahl der Dokumente und Texte, die du in der Wüste gefunden hast.",
				es: "Documentos y otros descubrimientos en el juego de rol."
			}
		},
		{
			count: 10,
			points: 10,
			title: {
				en: "Storyteller",
				fr: "Conteur d'histoires",
				de: "Eifriger Leser",
				es: "Cuentacuentos"
			}
		},
		{
			count: 20,
			points: 15,
			title: {
				en: "Desert Historian",
				fr: "Historien du désert",
				de: "Wüstenhistoriker",
				es: "Historiador del desierto"
			}
		},
		{
			count: 30,
			points: 20,
			title: {
				en: "Librarian",
				fr: "Gardien des archives",
				de: "Bibliothekar",
				es: "Guardián de los archivos"
			}
		},
		{
			count: 40,
			points: 25,
			title: {
				en: "Archivist",
				fr: "Maitre rôliste",
				de: "Archivar",
				es: "Maestro Rolista"
			}
		},
		{
			count: 60,
			points: 30,
			title: {
				en: "Souvenir Collector",
				fr: "Porteur du Souvenir",
				de: "Das Gedächtnis",
				es: "Portador de memorias"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Memoirs of a Civilization",
				fr: "Mémoire de la civilisation",
				de: "Memoires of a lost civilisation",
				es: "Memoria de la Humanidad"
			}
		}
	],
	description: {
		en: "The number of documents and other uncovered 'roleplay' items.",
		fr: "Documents et autres découvertes 'roleplay'.",
		de: "Anzahl der Dokumente und Texte, die du in der Wüste gefunden hast.",
		es: "Documentos y otros descubrimientos en el juego de rol."
	}
};
var hbuild = {
	id: "hbuild",
	name: {
		en: "Homemaker",
		fr: "Travaux chez soi",
		de: "Hausarbeiten",
		es: "Trabajador hogareño"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Number of upgrades you have made to your place (improvements).",
		fr: "Nombre de petits travaux effectués dans votre maison.",
		de: "Anzahl der Ausbauten, die du an deinem Haus vorgenommen hast.",
		es: "Cantidad de pequeños trabajos hechos en casa."
	}
};
var drgmkr = {
	id: "drgmkr",
	name: {
		en: "Lab Rat",
		fr: "Laborantin",
		de: "Laborant",
		es: "Laboratorio"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_drgmkr.gif",
			title: {
				en: "Amateur Lab Rat",
				fr: "Laborantin amateur",
				de: "Amateur-Laborratte",
				es: "Laboratorista amateur"
			},
			description: {
				en: "The number of little pills created in your personal laboratory.",
				fr: "Cachets de Twinoïd produits dans votre Laboratoire personnel.",
				de: "Anzahl der kleinen bunten Pillen aus deinem  privaten Labor.",
				es: "Pastillas de Twinoid elaboradas en tu laboratorio personal"
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Potion Preparer",
				fr: "Petit préparateur",
				de: "Kleiner Präparator",
				es: "Laboratorista autodidacta"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Corner Chemist",
				fr: "Chimiste du coin",
				de: "Chemiker von um die Ecke",
				es: "Químico de barrio"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Product Tester",
				fr: "Orfèvre gobeur",
				de: "Produkttester",
				es: "Alquimista"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "Local Dealer",
				fr: "Dealer du village",
				de: "Wüstenstadt-Dealer",
				es: "Dealer del pueblo"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Better living through Twinoid",
				fr: "Je goûte tous mes produits",
				de: "Besser leben dank Twinoid",
				es: "De la pura, purita"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "You smoke that? I made it.",
				fr: "Ça se fume ? c'est de moi.",
				de: "Was du da rauchst? Das ist von mir.",
				es: "Lo mio es lo bueno"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Official Supplier of AP",
				fr: "Fournisseur officiel de PA",
				de: "Offizieller Sponsor von AP",
				es: "Proveedor seguro"
			}
		}
	],
	description: {
		en: "The number of little pills created in your personal laboratory.",
		fr: "Cachets de Twinoïd produits dans votre Laboratoire personnel.",
		de: "Anzahl der kleinen bunten Pillen aus deinem  privaten Labor.",
		es: "Pastillas de Twinoid elaboradas en tu laboratorio personal."
	}
};
var cookr = {
	id: "cookr",
	name: {
		en: "Tasty Dishes",
		fr: "Bons p'tits plats",
		de: "Hausmannskost",
		es: "Delicias"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_cookr.gif",
			title: {
				en: "Cantine Cook",
				fr: "Cuistot de cantine",
				de: "Kantinenkoch",
				es: "Ayudante de cocina"
			},
			description: {
				en: "The number of delicious meals you have prepared from dubious ingredients.",
				fr: "Délicieux mets que vous avez concoctés avec des ingrédients douteux.",
				de: "Anzahl köstlicher Speisen, die du in der Küche gezaubert hast.",
				es: "Platillos preparados con ingredientes de procedencia dudosa."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Commis Chef",
				fr: "Petit chef cuistot",
				de: "Kleiner Küchenchef",
				es: "Cocinerillo"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Demi Chef de Partie",
				fr: "Cordon bleu du village",
				de: "Meister Eintopf",
				es: "Cordon bleu del barrio"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Mama's Finest",
				fr: "Grand pâtissier du désert",
				de: "Großer Wüstenkonditor",
				es: "Cordon bleu del pueblo"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "Sous Chef",
				fr: "Maître pâtissier du désert",
				de: "Begnadeter Wüstenkonditor",
				es: "Cuchara-brava"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Master Chef",
				fr: "Cooking-mama",
				de: "Cooking Mama",
				es: "Cooking-mama"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Pukka Chef",
				fr: "Expert de la cuillère",
				de: "Meisterhafter Kochlöffelschwinger",
				es: "Ferran Adrià de Zombinoia"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Marco Pierre Die2Nite",
				fr: "Top-Chef de l'outre-monde",
				de: "Tim Mälzer der Außenwelt",
				es: "Top-Chef del Ultramundo"
			}
		}
	],
	description: {
		en: "The number of delicious meals you have prepared from dubious ingredients.",
		fr: "Délicieux mets que vous avez concoctés avec des ingrédients douteux.",
		de: "Anzahl köstlicher Speisen, die du in der Küche gezaubert hast.",
		es: "Platillos preparados con ingredientes de procedencia dudosa."
	}
};
var fjv$1 = {
	id: "fjv",
	name: {
		en: "Chair à canon du FJV'08",
		fr: "Chair à canon du FJV'08",
		de: "Chair à canon du FJV'08",
		es: "Chair à canon du FJV'08"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_fjv.gif",
			title: {
				en: "Chair à canon du FJV'08",
				fr: "Chair à canon du FJV'08",
				de: "Chair à canon du FJV'08",
				es: "Chair à canon du FJV'08"
			},
			description: {
				en: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008.",
				fr: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008.",
				de: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008.",
				es: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008."
			}
		}
	],
	description: {
		en: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008.",
		fr: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008.",
		de: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008.",
		es: "Le porteur de cette marque a participé à la grande chasse organisée au Festival du Jeu Vidéo 2008."
	}
};
var fjvani = {
	id: "fjvani",
	name: {
		en: "Geek Tracker",
		fr: "Traqueur de geeks",
		de: "Verdammt in Saarbrücken",
		es: "Traqueur de geeks"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_fjvani.gif",
			title: {
				en: "Traqueur de geeks",
				fr: "Traqueur de geeks",
				de: "Verdammt in Saarbrücken",
				es: "Traqueur de geeks"
			},
			description: {
				en: "A rare distinction reserved for organisers of the Video Games festival 2008 who were at the Motion Twin stand!",
				fr: "Marque rarissime réservée aux animateurs présents au stand Motion Twin du Festival du Jeu Vidéo 2008 à Paris !",
				de: "Teilnehmer beim Community-Treffen in Saarbrücken am 6. November 2011.",
				es: "Marque rarissime réservée aux animateurs présents au stand Motion Twin du Festival du Jeu Vidéo 2008 à Paris !"
			}
		}
	],
	description: {
		en: "A rare distinction reserved for organisers of the Video Games festival 2008 who were at the Motion Twin stand!",
		fr: "Marque rarissime réservée aux animateurs présents au stand Motion Twin du Festival du Jeu Vidéo 2008 à Paris !",
		de: "Teilnehmer beim Community-Treffen in Saarbrücken am 6. November 2011",
		es: "Marque rarissime réservée aux animateurs présents au stand Motion Twin du Festival du Jeu Vidéo 2008 à Paris !"
	}
};
var armag = {
	id: "armag",
	name: {
		en: "Armageddon Witness",
		fr: "Témoin de l'Armageddon",
		de: "Zeuge des Armageddon",
		es: "Testigo del Armagedón"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_armag.gif",
			title: {
				en: "Armageddon Witness",
				fr: "Témoin de l'Armageddon",
				de: "Zeuge des Armageddon",
				es: "Testigo del Armagedón"
			},
			description: {
				en: "A rare distinction only awarded to thos citizens who experienced the Armageddon!",
				fr: "Marque rarissime réservée aux âmes qui ont vécu le grand Armageddon de l'univers de Hordes !",
				de: "Eine seltene Auszeichnung für jene, die den Armageddon erlebt haben!",
				es: "¡Distinción rarísima reservada a las almas que han vivido el gran Armagedón en Zombionoia!"
			}
		}
	],
	description: {
		en: "A rare distinction only awarded to thos citizens who experienced the Armageddon!",
		fr: "Marque rarissime réservée aux âmes qui ont vécu le grand Armageddon de l'univers de Hordes !",
		de: "Eine seltene Auszeichnung für jene, die den Armageddon erlebt haben!",
		es: "¡Distinción rarísima reservada a las almas que han vivido el gran Armagedón en Zombionoia!"
	}
};
var ginfec = {
	id: "ginfec",
	name: {
		en: "",
		fr: "Témoin de la Grande Contamination",
		de: "",
		es: ""
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_ginfec.gif",
			title: {
				en: "",
				fr: "Témoin de la Grande Contamination",
				de: "",
				es: ""
			},
			description: {
				en: "",
				fr: "Marque rarissime réservée aux âmes qui ont vécu la Grande Contamination Hordienne !",
				de: "",
				es: ""
			}
		}
	],
	description: {
		en: "",
		fr: "Marque rarissime réservée aux âmes qui ont vécu la Grande Contamination Hordienne !",
		de: "",
		es: ""
	}
};
var solban = {
	id: "solban",
	name: {
		en: "Emancipation of the Shunned",
		fr: "Banni émancipé",
		de: "Autarker Verbannter",
		es: "Desterrado emancipado"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 0,
			icon: "r_solban.gif",
			title: {
				en: "Bin Raker",
				fr: "Fouineur de décharge",
				de: "Abstauber",
				es: "Buscatesoros"
			},
			description: {
				en: "The number of lucky finds you have stumbled across while rummaging in the town's garbage. You must be shunned to earn this distinction.",
				fr: "Nombre d'objets de fortune confectionnés à partir de débris trouvés dans les poubelles de la ville. Il faut être banni(e) pour recevoir cette distinction.",
				de: "Anzahl noch brauchbarer Gegenstände, die du in der Mülldeponie vor der Stadt gefunden hast. Nur Verbannte können diese Auszeichnung erhalten.",
				es: "Cantidad de objetos de fortuna fabricado con desechos encontrados en la basura del pueblo. Solo los desterrados pueden recibir este reconocimiento"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Dumpster Diver",
				fr: "Enquiquineur débrouillard",
				de: "Müllkind",
				es: "Pelmazo astuto"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Recycling Addict",
				fr: "Indésirable autonome",
				de: "Recyclingfan",
				es: "Indeseable autónomo"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Shunned Parasite",
				fr: "Citoyen libre !",
				de: "Autonomer Parasit",
				es: "¡Ciudadano libre!"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "Solitary Dissident",
				fr: "Tout pour ma gueule",
				de: "Ich brauche nicht viel zum Leben",
				es: "¡Yo mismo soy!"
			}
		},
		{
			count: 550,
			points: 0,
			title: {
				en: "I don't need nobody",
				fr: "Je n'ai besoin de personne",
				de: "Allesverwerter",
				es: "No necesito a nadie"
			}
		},
		{
			count: 700,
			points: 0,
			title: {
				en: "Solo Survivalist",
				fr: "Grand Ermite indépendant",
				de: "Freier Bürger",
				es: "Ermitaño independientista"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Che Guevara of the World Beyond",
				fr: "Che Guevara du désert",
				de: "Wüsten-Che Guevara",
				es: "Rebelde del desierto"
			}
		}
	],
	description: {
		en: "The number of lucky finds you have stumbled across while rummaging in the town's garbage. You must be shunned to earn this distinction.",
		fr: "Nombre d'objets de fortune confectionnés à partir de débris trouvés dans les poubelles de la ville. Il faut être banni(e) pour recevoir cette distinction.",
		de: "Anzahl noch brauchbarer Gegenstände, die du in der Mülldeponie vor der Stadt gefunden hast. Nur Verbannte können diese Auszeichnung erhalten.",
		es: "Cantidad de objetos de fortuna fabricado con desechos encontrados en la basura del pueblo. Solo los desterrados pueden recibir este reconocimiento."
	}
};
var share = {
	id: "share",
	name: {
		en: "Generosity",
		fr: "Générosité",
		de: "Großzügigkeit",
		es: "Generosidad"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 0,
			icon: "r_share.gif",
			title: {
				en: "Noble Heart",
				fr: "Ame noble",
				de: "Nobler Spender",
				es: "Buena gente"
			},
			description: {
				en: "The number of Hero days that you have given to another citizen in need.",
				fr: "Nombre de jours de mode héros que vous avez offert à un autre citoyen dans le besoin.",
				de: "Anzahl der Heldentage, die du einem anderem Bürger in Not geschenkt hast.",
				es: "Cantidad de días de Modo Héroe que regalaste a otro habitante necesitado."
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Charitable Soul",
				fr: "Donateur universel",
				de: "Immer zur Stelle",
				es: "Alma noble"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Social Support",
				fr: "Assistant social",
				de: "Samariter",
				es: "Misericordioso"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Samaritan",
				fr: "Citoyen qui tombe à pic",
				de: "Mäzen",
				es: "Habitante altruista"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "All you need is love... and Hero days",
				fr: "Messie",
				de: "Messie",
				es: "Gran Corazón"
			}
		}
	],
	description: {
		en: "The number of Hero days that you have given to another citizen in need.",
		fr: "Nombre de jours de mode héros que vous avez offert à un autre citoyen dans le besoin.",
		de: "Anzahl der Heldentage, die du einem anderem Bürger in Not geschenkt hast.",
		es: "Cantidad de días de Modo Héroe que regalaste a otro habitante necesitado."
	}
};
var nodrug = {
	id: "nodrug",
	name: {
		en: "Clean",
		fr: "Clean",
		de: "Clean",
		es: "Limpio"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 5,
			icon: "r_nodrug.gif",
			title: {
				en: "Twinoid is taboo",
				fr: "La twinoïde, c'est tabou",
				de: "Twinoid ist tabu",
				es: "Me siento bien"
			},
			description: {
				en: "Your capacity to stay clean (take no drugs) during a lifetime.",
				fr: "Capacité à rester Clair(e) (aucune drogue consommée) au cours de toute une vie.",
				de: "Anzahl der Punkte, die du erworben hast, indem du in einer Stadt komplett clean geblieben bist.",
				es: "Capacidad de rechazar el consumo de todo estimulante en tu vida."
			}
		},
		{
			count: 75,
			points: 10,
			title: {
				en: "Happy as Larry",
				fr: "Bien dans sa peau",
				de: "Keine Macht den Drogen",
				es: "Me basto y me sobro"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Never touch the stuff, me.",
				fr: "Je touche pas à ça, MOI.",
				de: "Sowas fasse ICH nicht an.",
				es: "Limpio de polvo y paja"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Just Say No!",
				fr: "Exemple pour la jeunesse",
				de: "Vorbild für die Jugend",
				es: "Yo sé cuidar mi cuerpo"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Winners don't use drugs!",
				fr: "Winners don't use drugs !",
				de: "Champions nehmen keine Drogen!",
				es: "Ejemplo para los jóvenes"
			}
		}
	],
	description: {
		en: "Your capacity to stay clean (take no drugs) during a lifetime",
		fr: "Capacité à rester Clair(e) (aucune drogue consommée) au cours de toute une vie.",
		de: "Anzahl der Punkte, die du erworben hast, indem du in einer Stadt komplett clean geblieben bist.",
		es: "Capacidad de rechazar el consumo de todo estimulante en tu vida."
	}
};
var santac = {
	id: "santac",
	name: {
		en: "Father Christmas is a little sh*t",
		fr: "Le Père Noël est une ordure",
		de: "Den Weihnachtsmann gibt es nicht",
		es: "Maldito Papá Noel"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 0,
			icon: "r_santac.gif",
			title: {
				en: "Father Christmas is a little rascal",
				fr: "Le Père Noël est un coquin",
				de: "Der Weihnachtsmann ist ein Schlawiner",
				es: "Papá Noel no existe"
			},
			description: {
				en: "The number of presents you have stolen from your friends.",
				fr: "Nombre de cadeaux volés à vos amis.",
				de: "Anzahl der Geschenke, die du deinen Freunden geklaut hast.",
				es: "Cantidad de regalos robados a amigos."
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Santa is a crook",
				fr: "Le Père Noël est un filou",
				de: "Der Weihnachtsmann ist ein Gauner",
				es: "Papá Noel es un ladrón"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Old Saint Nick is a little **it",
				fr: "Le Père Noël est une ordure",
				de: "Der Weihnachtsmann ist ein Scheißkerl",
				es: "Papá Noel es un delincuente"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Santa Claus is a thieving b*****d",
				fr: "Le Père Noël est une raclure",
				de: "Der Weihnachtsmann ist ein Lügner und Betrüger",
				es: "Papá Noel, ¡te odio!"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Prepare the gallows - we're hanging Santa!",
				fr: "Pendez le Père Noël !",
				de: "Hängt den Weihnachtsmann!",
				es: "¡Papá Noel, a la horca!"
			}
		}
	],
	description: {
		en: "The number of presents you have stolen from your friends.",
		fr: "Nombre de cadeaux volés à vos amis.",
		de: "Anzahl der Geschenke, die du deinen Freunden geklaut hast.",
		es: "Cantidad de regalos robados a amigos"
	}
};
var lepre = {
	id: "lepre",
	name: {
		en: "The leprechaun got you good",
		fr: "Le Père Noël est une ordure",
		de: "Le Père Noël est une ordure",
		es: "Duendecillo"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 0,
			icon: "r_lepre.gif",
			title: {
				en: "Irish pockets are bulging!",
				fr: "Le Père Noël est un coquin",
				de: "Le Père Noël est un coquin",
				es: "Gnomo"
			},
			description: {
				en: "Number of your friends' items you have stolen.",
				fr: "Nombre de cadeaux volés à vos amis.",
				de: "Nombre de cadeaux volés à vos amis.",
				es: "Parece que le has robado algo a un amigo."
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Where's my pot of gold, thieving pikey!",
				fr: "Le Père Noël est un filou",
				de: "Le Père Noël est un filou",
				es: "Elfo"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "This leprechaun is unstoppable.",
				fr: "Le Père Noël est une ordure",
				de: "Le Père Noël est une ordure",
				es: "Pobre duende"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Burn him, see if his ashes turn green!",
				fr: "Le Père Noël est une raclure",
				de: "Le Père Noël est une raclure",
				es: "Maldito duende"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "A caravan with no wheels???",
				fr: "Pendez le Père Noël !",
				de: "Pendez le Père Noël !",
				es: "Leprechaun"
			}
		}
	],
	description: {
		en: "Number of your friends' items you have stolen.",
		fr: "Nombre de cadeaux volés à vos amis.",
		de: "Nombre de cadeaux volés à vos amis.",
		es: "Parece que le has robado algo a un amigo."
	}
};
var camp = {
	id: "camp",
	name: {
		en: "Daredevil Camper",
		fr: "Campeur téméraire",
		de: "Mutiger Camper",
		es: "Campista temerario"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_camp.gif",
			title: {
				en: "Suicide Sleeper",
				fr: "Dormeur suicidaire",
				de: "Außenweltschläfer",
				es: "Campista suicida"
			},
			description: {
				en: "The number of nights you have spent in the World Beyond... and survived!",
				fr: "Nombre de nuits passées dehors et auxquelles vous avez survécu.",
				de: "Anzahl der Nächte, die du draußen geschlafen und überlebt hast.",
				es: "Cantidad de noches pasadas fuera del pueblo y que has sobrevivido."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Alone in the Dark",
				fr: "Seul(e) au monde",
				de: "Allein in dieser Welt",
				es: "Carpa diem"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Dances with zombies",
				fr: "Danse avec les zombies",
				de: "Der mit den Zombies tanzt",
				es: "Carnada para zombies"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "I see dead people - everywhere!",
				fr: "Je vois des morts partout",
				de: "Ich sehe überall Tote!",
				es: "Challenge Accepted!"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Don't wait up...",
				fr: "Je ne rentrerai pas ce soir...",
				de: "Ich komme heute Nacht nicht heim...",
				es: "Todo terreno"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Man vs World Beyond",
				fr: "Une fois, au stage d'été...",
				de: "Ein Mann gegen die Außenwelt",
				es: "¡Fuera de mi camino!"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "I'm allergic to something in town.",
				fr: "Allergique à la ville",
				de: "",
				es: "Allergique à la ville"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "So I guess we're not waiting for Bob?",
				fr: "Bah alors on n'attend pas Patrick ?",
				de: "",
				es: "Bah alors on n'attend pas Patrick ?"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Bear Grylls",
				fr: "Michel Fugueur",
				de: "",
				es: "Michel Fugueur"
			}
		},
		{
			count: 350,
			points: 0,
			title: {
				en: "Without a roof or a tooth.",
				fr: "Sans toit ni foie",
				de: "",
				es: "Sans toit ni foie"
			}
		}
	],
	description: {
		en: "The number of nights you have spent in the World Beyond... and survived!",
		fr: "Nombre de nuits passées dehors et auxquelles vous avez survécu.",
		de: "Anzahl der Nächte, die du draußen geschlafen und überlebt hast.",
		es: "Cantidad de noches pasadas fuera del pueblo y que has sobrevivido."
	}
};
var cmplst = {
	id: "cmplst",
	name: {
		en: "Zen Camper",
		fr: "Campeur de l'au-delà",
		de: "Camper im Jenseits",
		es: "Campista del Más Allá"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 5,
			icon: "r_cmplst.gif",
			title: {
				en: "Unshakeable Camper",
				fr: "Campeur inébranlable",
				de: "Furchtloser Camper",
				es: "Campista inquebrantable"
			},
			description: {
				en: "Number of nights survived after the town has been devastated!",
				fr: "Nombre de nuits survécues tandis que la ville était dévastée !",
				de: "Anzahl der Nächte, die du draußen überlebt hast als die Stadt schon zerstört war!",
				es: "Cantidad de noches sobrevividas mientras que el pueblo estaba devastado."
			}
		},
		{
			count: 25,
			points: 10,
			title: {
				en: "Desert Orphant",
				fr: "Orphelin du désert",
				de: "Waisenkind der Wüste",
				es: "Huérfano del desierto"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Incredible determination",
				fr: "Incroyable détermination",
				de: "Unglaubliche Entschlossenheit",
				es: "Voluntad de hierro"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "The Last Survivor",
				fr: "Le dernier survivant",
				de: "Der letzte Überlebende",
				es: "El último superviviente"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "I walk alone.",
				fr: "Je marche seul.",
				de: "Die Wüste ist mein Zuhause.",
				es: "Complejo de Adán"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Neil Armstrong of the World Beyond",
				fr: "Neil Armstrong de l'Outre Monde",
				de: "Ich überlebe alleine",
				es: "Neil Armstrong del Ultramundo"
			}
		}
	],
	description: {
		en: "Number of nights survived after the town has been devastated!",
		fr: "Nombre de nuits survécues tandis que la ville était dévastée !",
		de: "Anzahl der Nächte, die du draußen überlebt hast als die Stadt schon zerstört war!",
		es: "Cantidad de noches sobrevividas mientras que el pueblo estaba devastado."
	}
};
var kohlmb = {
	id: "kohlmb",
	name: {
		en: "Koh-Lambda Citizen",
		fr: "Citoyen Koh-Lambdais",
		de: "Citoyen Koh-Lambdais",
		es: "Habitante avanturero"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_kohlmb.gif",
			title: {
				en: "Koh-Lambda Citizen",
				fr: "Citoyen Koh-Lambdais",
				de: "Citoyen Koh-Lambdais",
				es: "Aventurero Zombinoiano"
			},
			description: {
				en: "This citizen was involved in the Reunification (last round) of the Koh-Lambda tournament!",
				fr: "Ce citoyen était présent lors de la Réunification (dernier round) du Koh-Lambda !",
				de: "Ce citoyen était présent lors de la Réunification (dernier round) du Koh-Lambda !",
				es: "Premio en evento especial"
			}
		},
		{
			count: 2,
			points: 0,
			title: {
				en: "Koh-Lambda Hero",
				fr: "Héros Koh-Lambdais",
				de: "Héros Koh-Lambdais",
				es: "Héroe Zombinoiano"
			}
		},
		{
			count: 3,
			points: 0,
			title: {
				en: "Koh-Lambda Veteran",
				fr: "Vétéran Koh-Lambdais",
				de: "Vétéran Koh-Lambdais",
				es: "Veterano Zombinoiano"
			}
		},
		{
			count: 4,
			points: 0,
			title: {
				en: "Koh-Lambda Grandmaster",
				fr: "Grand Maître Koh-Lambdais",
				de: "Grand Maître Koh-Lambdais",
				es: "Maestro Zombinoiano"
			}
		}
	],
	description: {
		en: "This citizen was involved in the Reunification (last round) of the Koh-Lambda tournament!",
		fr: "Ce citoyen était présent lors de la Réunification (dernier round) du Koh-Lambda !",
		de: "Ce citoyen était présent lors de la Réunification (dernier round) du Koh-Lambda !",
		es: "Premio en evento especial"
	}
};
var rrefer = {
	id: "rrefer",
	name: {
		en: "Golden Child",
		fr: "Riche gourou",
		de: "Reicher Guru",
		es: "Embaucador"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_rrefer.gif",
			title: {
				en: "Fund re-allocation specialist",
				fr: "Détourneur de fonds",
				de: "Kleiner Guru",
				es: "Engañador"
			},
			description: {
				en: "The number of new citizens you have convinced to come to die2nite.com AND to pay for the privilege.",
				fr: "Nombre de nouveaux citoyens que vous avez convaincu de mourir ET de payer pour ça.",
				de: "Anzahl der Bürger, die du dazu bringen konntest, bei 'Die Verdammten' zu sterben UND dafür zu bezahlen.",
				es: "Cantidad de nuevos habitantes a los que has convencido de morir y han pagado por ello."
			}
		},
		{
			count: 3,
			points: 0,
			title: {
				en: "Citizen trafficker",
				fr: "Trafiquant de citoyens",
				de: "Überzeugender Guru",
				es: "Timador astuto"
			}
		},
		{
			count: 5,
			points: 0,
			title: {
				en: "Fresh flesh peddler",
				fr: "Négociant en chair fraîche",
				de: "Frischfleischhändler",
				es: "Timador profsional"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Soul salesman",
				fr: "Marchand d'âmes",
				de: "Seelenhändler",
				es: "Seductor de almas"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Persuasive sponsor",
				fr: "Parrain très convaincant",
				de: "Erfolgreicher Seelenhändler",
				es: "Poder de convencimiento"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Desert speculator",
				fr: "Spéculateur du désert",
				de: "Seelenspekulant",
				es: "Negociante de desierto"
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Top trader",
				fr: "Trader très efficace",
				de: "Seelentrader",
				es: "Traficante de almas"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Persuadotron",
				fr: "Persuadotron-powa",
				de: "Scientologe",
				es: "Maestro de la persuación"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Come to the dark side!",
				fr: "Come to the dark side !",
				de: "Komm auf die dunkle Seite der Macht!",
				es: "Encantador de serpientes"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Golden Glaoui",
				fr: "Golden Glaouis",
				de: "Warren Buffet der Außenwelt",
				es: "Rasputín de Zombinoia"
			}
		}
	],
	description: {
		en: "The number of new citizens you have convinced to come to die2nite.com AND to pay for the privilege.",
		fr: "Nombre de nouveaux citoyens que vous avez convaincu de mourir ET de payer pour ça.",
		de: "Anzahl der Bürger, die du dazu bringen konntest, bei 'Die Verdammten' zu sterben UND dafür zu bezahlen.",
		es: "Cantidad de nuevos habitantes a los que has convencido de morir y han pagado por ello."
	}
};
var fjv2 = {
	id: "fjv2",
	name: {
		en: "Video Game Festival 2010",
		fr: "Festival du Jeu Vidéo 2010",
		de: "Festival 'Jeu Vidéo 2010'",
		es: "Festival du Jeu Vidéo 2010"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_fjv2.gif",
			title: {
				en: "Motivated Hordian Festivalgoer",
				fr: "Festivalier hordien motivé",
				de: "Motivierter Messebesucher",
				es: "Festivalier hordien motivé"
			},
			description: {
				en: "You were at the Paris Video Game festival 2010: Thanks!",
				fr: "Vous étiez présent(e) au Festival du Jeu Vidéo à Paris en 2010 : merci !",
				de: "Du hast uns 2010 auf dem 'Festival du Jeu Vidéo' in Paris besucht - Vielen Dank!",
				es: "Vous étiez présent(e) au Festival du Jeu Vidéo à Paris en 2010 : merci !"
			}
		}
	],
	description: {
		en: "You were at the Paris Video Game festival 2010: Thanks!",
		fr: "Vous étiez présent(e) au Festival du Jeu Vidéo à Paris en 2010 : merci !",
		de: "Du hast uns 2010 auf dem 'Festival du Jeu Vidéo' in Paris besucht - Vielen Dank!",
		es: "Vous étiez présent(e) au Festival du Jeu Vidéo à Paris en 2010 : merci !"
	}
};
var winthi = {
	id: "winthi",
	name: {
		en: "Competing Towns",
		fr: "Ville participante",
		de: "",
		es: ""
	},
	rare: 2,
	unlocks: [
		{
			count: 2,
			points: 0,
			icon: "r_winthi.gif",
			title: {
				en: "Cadavre débutant",
				fr: "Cadavre débutant",
				de: "",
				es: ""
			},
			description: {
				en: "The number of towns ranked in the top 35 of a previous season.",
				fr: "Nombre de villes présentes dans le classement top 35 d'une saison précédente.",
				de: "",
				es: ""
			}
		},
		{
			count: 5,
			points: 0,
			title: {
				en: "A crows best friend",
				fr: "Copain des corbeaux",
				de: "",
				es: ""
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Devil of dehydration",
				fr: "Concitoyen déshydraté",
				de: "",
				es: ""
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Sansexplorer",
				fr: "Aventurier des sables",
				de: "",
				es: ""
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "A regular amatuer",
				fr: "Amateur régulier",
				de: "",
				es: ""
			}
		}
	],
	description: {
		en: "The number of towns ranked in the top 35 of a previous season.",
		fr: "Nombre de villes présentes dans le classement top 35 d'une saison précédente.",
		de: "",
		es: ""
	}
};
var winbas = {
	id: "winbas",
	name: {
		en: "Ranked Towns",
		fr: "Ville classée",
		de: "Gerankte Stadt",
		es: "Habitante prestigioso"
	},
	rare: 2,
	unlocks: [
		{
			count: 2,
			points: 20,
			icon: "r_winbas.gif",
			title: {
				en: "Trusted Neighbour",
				fr: "Concitoyen de confiance",
				de: "Vertrauenswürdiger Bürger",
				es: "Compañero de confianza"
			},
			description: {
				en: "Number of towns which figured in last season's rankings.",
				fr: "Nombre de villes présentes dans le classement top 15 d'une saison précédente.",
				de: "Anzahl der Städte, in denen Du mitgespielt hast und die es in einer vergangenen Saison ins Ranking geschafft haben.",
				es: "Cantidad de veces en que has participado en pueblos presentes en una clasificación anterior."
			}
		},
		{
			count: 5,
			points: 30,
			title: {
				en: "Inspiration for the people",
				fr: "Inspiration pour le peuple",
				de: "Sehr erfahrener Bürger",
				es: "Inspiración para el pueblo"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Highly experienced player",
				fr: "Joueur très expérimenté",
				de: "Vorbild für das Volk",
				es: "Jugador experimentado"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Pillar of the community",
				fr: "Référence communautaire",
				de: "Richtwert der Gemeinschaft",
				es: "Modelo para la comunidad"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Decorated Veteran",
				fr: "Illustre vétéran",
				de: "Berühmter Veteran",
				es: "Ilustre veterano"
			}
		}
	],
	description: {
		en: "Number of towns which figured in last season's rankings.",
		fr: "Nombre de villes présentes dans le classement top 15 d'une saison précédente.",
		de: "Anzahl der Städte, in denen Du mitgespielt hast und die es in einer vergangenen Saison ins Ranking geschafft haben.",
		es: "Cantidad de veces en que has participado en pueblos presentes en una clasificación anterior."
	}
};
var wintop = {
	id: "wintop",
	name: {
		en: "Legendary Towns!",
		fr: "Ville légendaire !",
		de: "Legendäre Stadt!",
		es: "Ciudadano legendario"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 30,
			icon: "r_wintop.gif",
			title: {
				en: "Myth in the making",
				fr: "Mythe vivant",
				de: "Lebender Mythos",
				es: "Héroe urbano"
			},
			description: {
				en: "Number of towns which made the number one spot from previous seasons.",
				fr: "Nombre de villes arrivées en première place du classement d'une saison précédente.",
				de: "Anzahl der Städte, in denen Du mitgespielt hast und die in einer vergangenen Saison als Erste abgeschnitten haben.",
				es: "Cantidad de pueblos colocados en el primer lugar en una clasificación anterior."
			}
		},
		{
			count: 2,
			points: 0,
			title: {
				en: "I am legend.",
				fr: "Je suis une légende.",
				de: "Ich bin eine Legende.",
				es: "El Salvador del Pueblo"
			}
		},
		{
			count: 3,
			points: 0,
			title: {
				en: "If you want to live... Follow me!",
				fr: "Suis-moi si tu veux vivre",
				de: "Hör auf mich, wenn du überleben möchtest",
				es: "Sígueme si quieres sobrevivir"
			}
		}
	],
	description: {
		en: "Number of towns which made the number one spot from previous seasons.",
		fr: "Nombre de villes arrivées en première place du classement d'une saison précédente.",
		de: "Anzahl der Städte, in denen Du mitgespielt hast und die in einer vergangenen Saison als Erste abgeschnitten haben.",
		es: "Cantidad de pueblos colocados en el primer lugar en una clasificación anterior."
	}
};
var sandb = {
	id: "sandb",
	name: {
		en: "Sand balls!",
		fr: "Boules de sable !",
		de: "Sandbälle! Yeah!",
		es: "Bolas de arena"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 0,
			icon: "r_sandb.gif",
			title: {
				en: "Sandman",
				fr: "Ensableur",
				de: "Passionierter Sandballwerfer",
				es: "Lanzador de arena"
			},
			description: {
				en: "\"Number of sand balls successfully thrown at another citizen's chevy chase.",
				fr: "Nombre de boules de sable envoyées au visage d'autres joueurs.",
				de: "Anzahl der Sandbälle, die du deinen Mitspielern ins Gesicht geworfen hast. Kicher, kicher...",
				es: "Cantidad de bolas de arena lanzadas a la cara de otros jugadores."
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Desert Marksman",
				fr: "Franc-tireur sablonneux",
				de: "Freischärler der Außenwelt",
				es: "Francotirador de arena"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Christmas Stonings... over here!",
				fr: "Lapidations de Noël",
				de: "Sandsteiniger",
				es: "Enterrador en arena"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "Sandstorm Sniper",
				fr: "Sniper des bacs à sable",
				de: "Sandkasten-Scharfschütze",
				es: "Tormenta de arena"
			}
		}
	],
	description: {
		en: "Number of sand balls successfully thrown at another citizen's chevy chase.",
		fr: "Nombre de boules de sable envoyées au visage d'autres joueurs.",
		de: "Anzahl der Sandbälle, die du deinen Mitspielern ins Gesicht geworfen hast. Kicher, kicher...",
		es: "Cantidad de bolas de arena lanzadas a la cara de otros jugadores."
	}
};
var brep = {
	id: "brep",
	name: {
		en: "Building Repairs",
		fr: "Réparations de chantiers",
		de: "Gebäudereparaturen",
		es: "Reparación de construcciones"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 0,
			icon: "r_brep.gif",
			title: {
				en: "Town plasterer",
				fr: "Plâtrier de la ville",
				de: "Spachtler",
				es: "Manitas hábiles"
			},
			description: {
				en: "Action Points invested in the ongoing repairs of buildings.",
				fr: "points d'action investis dans les réparations sans fin des chantiers.",
				de: "Anzahl der Aktionspunkte, die du in Reparaturen auf der Baustelle gesteckt hast.",
				es: "Puntos de acción invertidos en reparaciones interminables."
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "All-round Handyman",
				fr: "Briqueteur conscienceux",
				de: "Gewissenhafter Maurer",
				es: "Reparador aficionado"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Masterpieces in Peril",
				fr: "Chef d'oeuvre en péril",
				de: "Meisterwerke in Gefahr",
				es: "Reparador arriesgado"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Get some Duct Tape in there.",
				fr: "Une rustine et ça repart.",
				de: "Ein Flicken und alles ist wie neu",
				es: "Reparador obstinado"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "The Fixer",
				fr: "Redresseur de Pise",
				de: "Der Ausbesserer",
				es: "Reparador conocido"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Renovator to the stars",
				fr: "Grand rénovateur",
				de: "Großrenovierer",
				es: "Renovador recomendado"
			}
		},
		{
			count: 2500,
			points: 0,
			title: {
				en: "Patch-up Specialist",
				fr: "Patch-day, no-play",
				de: "Patch-day, no-play",
				es: "Reparador exitoso"
			}
		},
		{
			count: 3000,
			points: 0,
			title: {
				en: "A crack? What crack?",
				fr: "Une fissure ? Quelle fissure ?",
				de: "Ein Riss? Was für ein Riss?",
				es: "Reparator Pro"
			}
		},
		{
			count: 3500,
			points: 0,
			title: {
				en: "That'll last another 10 years!",
				fr: "Ça tiendra encore 10 ans !",
				de: "Das wird noch 10 Jahre halten!",
				es: "Reparador garantizado"
			}
		}
	],
	description: {
		en: "Action Points invested in the ongoing repairs of buildings.",
		fr: "points d'action investis dans les réparations sans fin des chantiers.",
		de: "Anzahl der Aktionspunkte, die du in Reparaturen auf der Baustelle gesteckt hast.",
		es: "Puntos de acción invertidos en reparaciones interminables."
	}
};
var bgum = {
	id: "bgum",
	name: {
		en: "Community Awards",
		fr: "Médailles communautaires",
		de: "Event-Auszeichnungen",
		es: "Medallas comunitarias"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_bgum.gif",
			title: {
				en: "Community Companion",
				fr: "Compagnon de la communauté",
				de: "Jedes Los gewinnt",
				es: "Ganador"
			},
			description: {
				en: "Rewards earned through working with the community.",
				fr: "Récompenses obtenues dans le cadre d'animations communautaires.",
				de: "Auszeichnung für die Teilnahme an Events bei 'Die Verdammten'.",
				es: "Recompensas obtenidas en los eventos comunitarios."
			}
		},
		{
			count: 5,
			points: 0,
			title: {
				en: "Community Spirit",
				fr: "Animé de bonnes intentions",
				de: "Zinker",
				es: "Amigo de la comunidad"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Social Animal",
				fr: "Animal social",
				de: "Bingo",
				es: "Participante ocasional"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Animated Corpse",
				fr: "Défunt animé",
				de: "Sudoku ist anders",
				es: "Participante entusiasta"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Community Über-Activist",
				fr: "Hyper-activiste communautaire",
				de: "Siebenseitiger Würfel",
				es: "Participante carismático"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Soul Winner!",
				fr: "Gagnant dans l'âme !",
				de: "Einarmiger Bandit",
				es: "Espíritu ganador"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Community Soul Feeder",
				fr: "Guide des âmes communautaires",
				de: "Im Rausch der Spiele",
				es: "Activista comunitario"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Charismatic Prophet",
				fr: "Prophète charismatique",
				de: "Spielsüchtiger",
				es: "Ganador seguro"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Crow's Favourite",
				fr: "Favori du Corbeau",
				de: "Las Vegas!",
				es: "Preferido del Cuervo"
			}
		}
	],
	description: {
		en: "Rewards earned through working with the community.",
		fr: "Récompenses obtenues dans le cadre d'animations communautaires.",
		de: "Auszeichnung für die Teilnahme an Events bei 'Die Verdammten'.",
		es: "Recompensas obtenidas en los eventos comunitarios."
	}
};
var paques = {
	id: "paques",
	name: {
		en: "Crucifiction",
		fr: "Crucifixion",
		de: "Kreuzigung",
		es: "Crucificción"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_paques.gif",
			title: {
				en: "Red Cross Supporter",
				fr: "Membre de la Croix Rouge",
				de: "Mitglied des Roten Kreuzes",
				es: "Crucificator"
			},
			description: {
				en: "Rejoice! You don't need to walk any more.",
				fr: "Réjouissez vous, vous n'aurez pas eu à marcher.",
				de: "Freut euch, ihr braucht nie wieder zu Fuß gehen!",
				es: "No te quejes, desde allí tienes una buena vista."
			}
		}
	],
	description: {
		en: "Rejoice! You don't need to walk any more.",
		fr: "Réjouissez vous, vous n'aurez pas eu à marcher.",
		de: "Freut euch, ihr braucht nie wieder zu Fuß gehen!",
		es: "No te quejes, desde allí tienes una buena vista."
	}
};
var door = {
	id: "door",
	name: {
		en: "Covert Concierge",
		fr: "Ouverture de porte",
		de: "Geöffnete Tür",
		es: "Apertura de puertas"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "r_door.gif",
			title: {
				en: "Key hee hee!",
				fr: "Un p'tit Bricard ?",
				de: "Wo klemmt's?",
				es: "Ganzúa"
			},
			description: {
				en: "The number of doors you've unlocked while exploring ruin",
				fr: "Nombre de portes dévérouillées par vos soins dans les ruines.",
				de: "Anzahl der verschlossenen Türen, die du in verlassenen Gebäuden geöffnet hast.",
				es: "Cantidad de puertas abiertas en las ruinas"
			}
		},
		{
			count: 5,
			points: 10,
			title: {
				en: "How about some Chubb-ly?",
				fr: "Une petite tranche de Vachette ?",
				de: "Dietrich",
				es: "Hijo de cerrajero"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Sesame, shift your A...",
				fr: "Sésame, bouge ton c...",
				de: "Sesam, öffne dich...",
				es: "Con o sin llaves, yo entro"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Deadbolt Dick",
				fr: "Dentiste serrurier",
				de: "Türöffner",
				es: "Ábrete Sésamo"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Gentleman Robber",
				fr: "Gentleman Cambrioleur",
				de: "Gentleman-Einbrecher",
				es: "Abridor de puertas"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Capitaine Crochet",
				fr: "Capitaine Crochet",
				de: "Schlüsseldienst",
				es: "Terror de las puertas"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Shim Surgeon",
				fr: "Cerbère de la porte",
				de: "Zerberus",
				es: "Llave maestra"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Grand Key Master",
				fr: "Maître des clés",
				de: "Schlüsselmeister",
				es: "Amo Cerrajero"
			}
		}
	],
	description: {
		en: "The number of doors you've unlocked while exploring ruins.",
		fr: "Nombre de portes dévérouillées par vos soins dans les ruines.",
		de: "Anzahl der verschlossenen Türen, die du in verlassenen Gebäuden geöffnet hast",
		es: "Cantidad de puertas abiertas en las ruinas."
	}
};
var ruine = {
	id: "ruine",
	name: {
		en: "Ruin Explorations",
		fr: "Exploration de ruine",
		de: "Gebäude erkunden",
		es: "Exploración de ruinas"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 5,
			icon: "r_ruine.gif",
			title: {
				en: "Sneaky Voyager",
				fr: "Si j'aurais su, j'aurais po v'nu",
				de: "Wenn ich das nur vorher gewusst hätte...",
				es: "¡Mamá, no me dejes aquí!"
			},
			description: {
				en: "The number of times you've dared to go inside an abandoned ruin.",
				fr: "Nombre de fois où vous avez osé pénétrer dans une ruine abandonnée.",
				de: "Anzahl der verlassenen Gebäude, die du untersucht hast.",
				es: "Cantidad de veces que has osado entrar en una ruina abandonada"
			}
		},
		{
			count: 10,
			points: 10,
			title: {
				en: "Tunnel Visionary",
				fr: "Voyageur téméraire",
				de: "Verwegener Wanderer",
				es: "Explorador por accidente"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Regularly A-mazed!",
				fr: "Apnéiste confirmé",
				de: "Tunnelblicker",
				es: "Explorador de ruinas"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Compass Included",
				fr: "J'ai la dé-dale !",
				de: "Im Irrgarten",
				es: "Ruina Man"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Buried Voluntarily",
				fr: "Boussole sur patte",
				de: "Inklusive Kompass",
				es: "Brújula andante"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Tombstone Toppler",
				fr: "Enterré volontaire",
				de: "Kanalratte",
				es: "Saqueador de tumbas"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Gollum of the Labyrinths",
				fr: "Pilleur de tombeau",
				de: "Grabräuber",
				es: "Pilleur de tombeau"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "Labyrinth Master PhD",
				fr: "Gollum des labyrinthes",
				de: "Gollum der Labyrinthe",
				es: "Profanador de ruinas"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "Don't call me Junior",
				fr: "Labyrinthe master MB",
				de: "Labyrinth-Meister",
				es: "Maestro de los laberintos"
			}
		}
	],
	description: {
		en: "The number of times you've dared to go inside an abandoned ruin.",
		fr: "Nombre de fois où vous avez osé pénétrer dans une ruine abandonnée.",
		de: "Anzahl der verlassenen Gebäude, die du untersucht hast",
		es: "Cantidad de veces que has osado entrar en una ruina abandonada"
	}
};
var guide = {
	id: "guide",
	name: {
		en: "Spiritual Guide",
		fr: "Guide Spirituel",
		de: "Spiritueller Führer",
		es: "Guía Espiritual"
	},
	rare: 0,
	unlocks: [
		{
			count: 300,
			points: 5,
			icon: "r_guide.gif",
			title: {
				en: "Daylight Lantern",
				fr: "Lanterne de jour",
				de: "Laterne des Tages",
				es: "Linterna mental"
			},
			description: {
				en: "The number of days spent shepherding the newbs through the valleys of small maps and finding lost children.",
				fr: "Jours passés en tant que guide pour les noobs en Région non éloignée.",
				de: "Anzahl der Tage, die du als Führer von Anfängern in den Kleinen Regionen verbracht hast.",
				es: "Días pasados como guía en las regiones amateur."
			}
		},
		{
			count: 1000,
			points: 10,
			title: {
				en: "Pocket Companion",
				fr: "Compagnon de poche",
				de: "Taschenführer",
				es: "Compañero de camino"
			}
		},
		{
			count: 2500,
			points: 0,
			title: {
				en: "Illuminated Guide",
				fr: "Guide éclairé",
				de: "Strahlender Anführer",
				es: "Mente iluminada"
			}
		},
		{
			count: 5000,
			points: 0,
			title: {
				en: "Enlightened Preacher",
				fr: "Prêcheur illuminé",
				de: "Erleuchtetet Moralprediger",
				es: "Predicador"
			}
		},
		{
			count: 8000,
			points: 0,
			title: {
				en: "Love Guru",
				fr: "Love Gourou",
				de: "Love Guru",
				es: "Gurú"
			}
		},
		{
			count: 15000,
			points: 0,
			title: {
				en: "Hear my voice",
				fr: "Ecoutez ma voix",
				de: "Höret meine Stimme",
				es: "La voz"
			}
		},
		{
			count: 30000,
			points: 0,
			title: {
				en: "Mr Motivator",
				fr: "Inspirateur universel",
				de: "Universelle Muse",
				es: "Inspirador Universal"
			}
		}
	],
	description: {
		en: "The number of days spent shepherding the newbs through the valleys of small maps and finding lost children.",
		fr: "Jours passés en tant que guide pour les noobs en Région non éloignée.",
		de: "Anzahl der Tage, die du als Führer von Anfängern in den Kleinen Regionen verbracht hast",
		es: "Días pasados como guía en las regiones amateur."
	}
};
var collec$1 = {
	id: "collec",
	name: {
		en: "Soul Collector",
		fr: "Collecteur d'âmes",
		de: "Seelensammler",
		es: "Recolector de Almas"
	},
	rare: 0,
	unlocks: [
		{
			count: 2,
			points: 0,
			icon: "r_collec.gif",
			title: {
				en: "Type 4 Encounter",
				fr: "Rencontre du 4ème type",
				de: "Treffen der 4. Art",
				es: "Encuentros de otro mundo"
			},
			description: {
				en: "The number of dead citizens' souls collected in the World Beyond",
				fr: "Nombres d'âmes de citoyens décédés collectées dans l'outre-monde.",
				de: "Anzahl der in der Außenwelt gesammelten Seelen verschiedener Einwohner.",
				es: "Cantidad de almas recolectadas de habitantes fallecidos en el Ultramundo."
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Have you got a light?",
				fr: "Vous avez du feu ?",
				de: "Hast du mal Feuer?",
				es: "¿Tienes fuego?"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Psychic for rent",
				fr: "Médium au rabais",
				de: "Medium mit Preisnachlass",
				es: "Medium principiante"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Amophilis psychotropia",
				fr: "Amophilis psychotropes",
				de: "Amophilis psychotropes",
				es: "Medium profesional"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Blue Fire-breather",
				fr: "Cracheur de flamme bleue",
				de: "Blauer Feuerspucker",
				es: "Pescador de Almas"
			}
		},
		{
			count: 80,
			points: 0,
			title: {
				en: "I see dead people 0_0",
				fr: "I see dead people 0_0",
				de: "I see dead people 0_0",
				es: "Veo gente muerta"
			}
		},
		{
			count: 120,
			points: 0,
			title: {
				en: "Who you gonna call?",
				fr: "Aspi-rituel",
				de: "Soul Man",
				es: "Aspirador de espíritus"
			}
		},
		{
			count: 180,
			points: 0,
			title: {
				en: "Don't cross the streams",
				fr: "Collectionneur de vie",
				de: "Lebenssammler",
				es: "Coleccionista de Almas"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "I ain't afraid of no ghost",
				fr: "Faucheur de l'outre-monde",
				de: "Schnitter der Außenwelt",
				es: "Amo de los Espíritus"
			}
		}
	],
	description: {
		en: "The number of dead citizens' souls collected in the World Beyond",
		fr: "Nombres d'âmes de citoyens décédés collectées dans l'outre-monde",
		de: "Anzahl der in der Außenwelt gesammelten Seelen verschiedener Einwohner",
		es: "Cantidad de almas recolectadas de habitantes fallecidos en el Ultramundo"
	}
};
var mystic = {
	id: "mystic",
	name: {
		en: "Mystic Points",
		fr: "Mysticisme",
		de: "Mystikpunkte",
		es: "Puntos de Misticismo"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 0,
			icon: "r_mystic.gif",
			title: {
				en: "Keen Sceptic",
				fr: "Septicis-mite aïgu",
				de: "Verrückter Skeptiker",
				es: "Capataz"
			},
			description: {
				en: "The number of souls your town has managed to recycle",
				fr: "Nombre d'âmes que votre ville a pu recycler en chantier.",
				de: "Anzahl der Seelen, die deine Stadt auf der Baustelle umwandeln konnte.",
				es: "Cantidad de almas que tu pueblo pudo reciclar en las construcciones."
			}
		},
		{
			count: 25,
			points: 0,
			title: {
				en: "Soul Calipers",
				fr: "Agnos-tic",
				de: "Seelenknipser",
				es: "Capataz Espiritista"
			}
		},
		{
			count: 75,
			points: 0,
			title: {
				en: "Watches with Scouts",
				fr: "Veille avec les Scouts",
				de: "Wächter der Seelen",
				es: "Dirigente espiritual"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "The truth is elsewhere",
				fr: "La vérité est ailleurs",
				de: "Die Wahrheit ist irgendwo da draußen",
				es: "Explotador de Almas"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "I'm a believer",
				fr: "I'm a believer",
				de: "I'm a believer",
				es: "Creador de esperanza"
			}
		},
		{
			count: 800,
			points: 0,
			title: {
				en: "Sect Member",
				fr: "Membre de la secte",
				de: "Sektenmitglied",
				es: "Líder de secta"
			}
		},
		{
			count: 1500,
			points: 0,
			title: {
				en: "Cosmic Sponsor",
				fr: "Parrain cosmique",
				de: "Kosmischer Pate",
				es: "Capataz cósmico"
			}
		}
	],
	description: {
		en: "The number of souls your town has managed to recycle",
		fr: "Nombre d'âmes que votre ville a pu libérer",
		de: "Anzahl der Seelen, die deine Stadt auf der Baustelle umwandeln konnte.",
		es: "Cantidad de almas que tu pueblo pudo reciclar en las construcciones"
	}
};
var ptame = {
	id: "ptame",
	name: {
		en: "Soul Value",
		fr: "Valeur de l'âme",
		de: "Seelenpunkte",
		es: "Valor del Alma"
	},
	rare: 1,
	unlocks: [
		{
			count: 100,
			points: 20,
			icon: "r_ptame.gif",
			title: {
				en: "O Soul-e Mio",
				fr: "Leerd'âmeur nauséabond",
				de: "Bei meiner Seel",
				es: "Carne débil"
			},
			description: {
				en: "The number of soul points you have accumulated in the course of your many lives.",
				fr: "Nombres de points d'âme que vous avez obtenu au cours de vos incarnations.",
				de: "Anzahl der Seelenpunkte, die du durch deine Inkarnationen erhalten hast.",
				es: "Cantidad de Puntos de Alma que has ganado en tus reencarnaciones."
			}
		},
		{
			count: 500,
			points: 50,
			title: {
				en: "Tin-soul town",
				fr: "Fan-tomme rapé",
				de: "Für immer und seelich",
				es: "Simple mortal"
			}
		},
		{
			count: 1000,
			points: 100,
			title: {
				en: "Noble Soul",
				fr: "Ame digne",
				de: "Noble Seele",
				es: "Alma digna"
			}
		},
		{
			count: 2000,
			points: 200,
			title: {
				en: "Soul-dier",
				fr: "Spider-Ame",
				de: "Beseelt",
				es: "Alma fuerte"
			}
		},
		{
			count: 3000,
			points: 300,
			title: {
				en: "Reincarnator",
				fr: "Réincarnator",
				de: "Reinkarnator",
				es: "Reencarnator X"
			}
		},
		{
			count: 5000,
			points: 0,
			title: {
				en: "Divine Soul",
				fr: "Ame divine",
				de: "Göttliche Seele",
				es: "Alma Divina"
			}
		},
		{
			count: 7000,
			points: 0,
			title: {
				en: "Open-chakra",
				fr: "Open-chakra",
				de: "Open-chakra",
				es: "Chakra-Man"
			}
		},
		{
			count: 9000,
			points: 0,
			title: {
				en: "Thousand I-lived",
				fr: "Mille et une vie",
				de: "Tausend-und-ein-Leben",
				es: "Mil y Una Vidas"
			}
		},
		{
			count: 12000,
			points: 0,
			title: {
				en: "Buddha",
				fr: "Bouddha",
				de: "Buddha",
				es: "El Inmortal"
			}
		}
	],
	description: {
		en: "The number of soul points you have accumulated in the course of your many lives.",
		fr: "Nombres de points d'âme que vous avez obtenu au cours de vos incarnations.",
		de: "Anzahl der Seelenpunkte, die du durch deine Inkarnationen erhalten hast.",
		es: "Cantidad de Puntos de Alma que has ganado en tus reencarnaciones."
	}
};
var guard = {
	id: "guard",
	name: {
		en: "Watchman",
		fr: "Veilleur",
		de: "Stadtwächter",
		es: "Centinela"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 5,
			icon: "r_guard.gif",
			title: {
				en: "One Eye Open",
				fr: "Un Oeil ouvert",
				de: "Immer ein Auge offen",
				es: "Un ojo abierto"
			},
			description: {
				en: "The number of nights survived as a watchman.",
				fr: "Nombre de nuits survécues en tant que Veilleur.",
				de: "Anzahl der Nächte, die du als Stadtwächter überlebt hast.",
				es: "Cantidad de noches que sobreviviste como Centinela."
			}
		},
		{
			count: 40,
			points: 10,
			title: {
				en: "Both Eyes Open",
				fr: "Deux yeux ouverts",
				de: "Mit offenen Augen schlafen? Kein Problem!",
				es: "Dos ojos abiertos"
			}
		},
		{
			count: 80,
			points: 0,
			title: {
				en: "Long-sighted",
				fr: "Longue Vue",
				de: "Immer alles im Blick",
				es: "Largavista"
			}
		},
		{
			count: 120,
			points: 0,
			title: {
				en: "Uber-Aware",
				fr: "Aware",
				de: "Aufgepasst!",
				es: "Halcón humano"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Paranoid and Proud",
				fr: "Parano",
				de: "Paranoid",
				es: "Paranóico"
			}
		},
		{
			count: 400,
			points: 0,
			title: {
				en: "The Raven!",
				fr: "Le Roc !",
				de: "Dir entgeht nichts",
				es: "Súper Centinela"
			}
		},
		{
			count: 600,
			points: 0,
			title: {
				en: "Impenetrable Fortress",
				fr: "Forteresse imprenable",
				de: "Uneinnehmbare Festung",
				es: "Centinela Supremo"
			}
		}
	],
	description: {
		en: "The number of nights survived as a watchman.",
		fr: "Nombre de nuits survécues en tant que Veilleur.",
		de: "Anzahl der Nächte, die du als Stadtwächter überlebt hast.",
		es: "Cantidad de noches que sobreviviste como Centinela."
	}
};
var cdh = {
	id: "cdh",
	name: {
		en: "Choc des héros",
		fr: "Choc des héros",
		de: "Choc des héros",
		es: "Choque de Héroes"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Honorary Reward given to those involved in Hero Clash in January 2010 !",
		fr: "Récompense honorifique pour une participation au Choc des Héros !",
		de: "Récompense honorifique pour une participation au Choc des Héros !",
		es: "Recompensa honorífica por la participación en Choque de Héroes"
	}
};
var cdhwin = {
	id: "cdhwin",
	name: {
		en: "Fouineur gagnant du CDH",
		fr: "Fouineur gagnant du CDH",
		de: "Fouineur gagnant du CDH",
		es: "Excavador legendario"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_cdhwin.gif",
			title: {
				en: "Chief Shovelmaster",
				fr: "Chef-Pelleteur",
				de: "Chef-Pelleteur",
				es: "¡Nada me detiene!"
			},
			description: {
				en: "Victoire en tant que Fouineur lors du Choc des Héros 2010 !",
				fr: "Victoire en tant que Fouineur lors du Choc des Héros !",
				de: "Victoire en tant que Fouineur lors du Choc des Héros !",
				es: "Victoria como Excavador en el Choque de Héroes."
			}
		}
	],
	description: {
		en: "This award was given to the Scavengers who won the Hero Clash event in january 2010!",
		fr: "Victoire en tant que Fouineur lors du Choc des Héros !",
		de: "Victoire en tant que Fouineur lors du Choc des Héros !",
		es: "Distinción entregada a los miembros del pueblo de Excavadores que ganó el Choque de Héroes."
	}
};
var ermwin = {
	id: "ermwin",
	name: {
		en: "Clash Champion",
		fr: "Champion du Choc des héros",
		de: "Triumphator",
		es: "Ermitaño legendario"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_ermwin.gif",
			title: {
				en: "I am a god! I will live forever!",
				fr: "Chef-Ascète",
				de: "Ich bin ein Gott! Ich werde ewig leben!",
				es: "¡Aquí mando yo!"
			},
			description: {
				en: "Awarded to the Survivalists who won the Clash of the Titans.",
				fr: "Victoire en tant qu'Ermite lors du Choc des Héros !",
				de: "Diese seltene Auszeichnung wurde den Einsiedler verliehen, die mit ihrer Stadt die Schlacht der Berufe gewonnen haben.",
				es: "Distinción entregada a los miembros del pueblo de Ermitaños que ganó el Choque de Héroes."
			}
		}
	],
	description: {
		en: "Gewinner des Clash Of The Titans: Survivalist",
		fr: "Victoire en tant qu'Ermite lors du Choc des Héros !",
		de: "Diese seltene Auszeichnung wurde den Einsiedlern verliehen, die mit ihrer Stadt die Schlacht der Berufe gewonnen haben. Respekt!",
		es: "Distinción entregada a los miembros del pueblo de Ermitaños que ganó el Choque de Héroes."
	}
};
var shawin = {
	id: "shawin",
	name: {
		en: "Clash Champion",
		fr: "Champion du Choc des héros",
		de: "Triumphator",
		es: "Champion du Choc des héros"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_shawin.gif",
			title: {
				en: "Voodoo Chief",
				fr: "Chef-Vaudou",
				de: "Voodoo Chief",
				es: "Chef-Vaudou"
			},
			description: {
				en: "Awarded to the Shamans who won the Clash of the Titans!",
				fr: "Victoire en tant que Chaman lors du Choc des Héros !",
				de: "Zugesprochen an Schamane, der das Clash Of The Titans gewonnen hat!",
				es: "Victoire en tant que Chaman lors du Choc des Héros !"
			}
		}
	],
	description: {
		en: "Gewinner des Clash Of The Titans: Shaman!",
		fr: "Victoire en tant que Chaman lors du Choc des Héros !",
		de: "Gewinner des Clash Of The Titans: Schamane !",
		es: "Victoire en tant que Chaman lors du Choc des Héros !"
	}
};
var tecwin = {
	id: "tecwin",
	name: {
		en: "Clash Champion",
		fr: "Champion du Choc des héros",
		de: "Triumphator",
		es: "Champion du Choc des héros"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_tecwin.gif",
			title: {
				en: "Tech Wizard",
				fr: "Chef-Ouvrier",
				de: "Tech Wizard",
				es: "Chef-Ouvrier"
			},
			description: {
				en: "Awarded to the Technicians who won the Clash of the Titans!",
				fr: "Victoire en tant que Technicien lors du Choc des Héros !",
				de: "Zugesprochen an Techniker, der das Clash Of The Titans gewonnen hat!",
				es: "Victoire en tant que Technicien lors du Choc des Héros !"
			}
		}
	],
	description: {
		en: "Gewinner des Clash Of The Titans: Technician!",
		fr: "Victoire en tant que Technicien lors du Choc des Héros !",
		de: "Gewinner des Clash Of The Titans: Techniker!",
		es: "Victoire en tant que Technicien lors du Choc des Héros !"
	}
};
var defwin = {
	id: "defwin",
	name: {
		en: "Clash Champion",
		fr: "Champion du Choc des héros",
		de: "Triumphator",
		es: "Champion du Choc des héros"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_defwin.gif",
			title: {
				en: "Guardian Chief",
				fr: "Chef-Rempart",
				de: "Guardian Chief",
				es: "Chef-Rempart"
			},
			description: {
				en: "Awarded to the Guardians who won the Clash of the Titans!",
				fr: "Victoire en tant que Gardien lors du Choc des Héros !",
				de: "Zugesprochen an Wächter, der das Clash Of The Titans gewonnen hat!",
				es: "Victoire en tant que Gardien lors du Choc des Héros !"
			}
		}
	],
	description: {
		en: "Gewinner des Clash Of The Titans: Guardian!",
		fr: "Victoire en tant que Gardien lors du Choc des Héros !",
		de: "Gewinner des Clash Of The Titans: Wächter!",
		es: "Victoire en tant que Gardien lors du Choc des Héros !"
	}
};
var rngwin = {
	id: "rngwin",
	name: {
		en: "Clash Champion",
		fr: "Champion du Choc des héros",
		de: "Triumphator",
		es: "Champion du Choc des héros"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_rngwin.gif",
			title: {
				en: "Scout Master",
				fr: "Chef-Capuche",
				de: "Scout Master",
				es: "Chef-Capuche"
			},
			description: {
				en: "Awarded to the Scouts who won the Clash of the Titans!",
				fr: "Victoire en tant qu'Eclaireur lors du Choc des Héros !",
				de: "Zugesprochen an Aufklärer, der das Clash Of The Titans gewonnen hat!",
				es: "Victoire en tant qu'Eclaireur lors du Choc des Héros !"
			}
		}
	],
	description: {
		en: "Gewinner des Clash Of The Titans: Scout!",
		fr: "Victoire en tant qu'Eclaireur lors du Choc des Héros !",
		de: "Gewinner des Clash Of The Titans: Aufklärer!",
		es: "Victoire en tant qu'Eclaireur lors du Choc des Héros !"
	}
};
var tamwin = {
	id: "tamwin",
	name: {
		en: "Clash Champion",
		fr: "Champion du Choc des héros",
		de: "Triumphator",
		es: "Domador legendario"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_tamwin.gif",
			title: {
				en: "Chief Tamer",
				fr: "Chef-Bêbête",
				de: "Chief Tamer",
				es: "¡Soy una fiera!"
			},
			description: {
				en: "Awarded to the Tamers who won the Clash of the Titans!",
				fr: "Victoire en tant qu'Apprivoiseur lors du Choc des Héros !",
				de: "Zugesprochen an Dompteur, der das Clash Of The Titans gewonnen hat!",
				es: "Distinción entregada a los miembros del pueblo de Domadaores que ganó el Choque de Héroes."
			}
		}
	],
	description: {
		en: "Gewinner des Clash Of The Titans: Tamer!",
		fr: "Victoire en tant qu'Apprivoiseur lors du Choc des Héros !",
		de: "Gewinner des Clash Of The Titans: Dompteur!",
		es: "Distinción entregada a los miembros del pueblo domador que ganó el Choque de Héroes."
	}
};
var derwin = {
	id: "derwin",
	name: {
		en: "Clash Colossus",
		fr: "Mort Ultime du Choc",
		de: "Schlachtenlegende",
		es: "Héroe de Leyenda"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_derwin.gif",
			title: {
				en: "It is death that should be afraid of me!",
				fr: "La mort a peur de moi !",
				de: "Angst vor dem Tod? Der Sensenmann sollte MICH fürchten!",
				es: "¡No le temo a nada!"
			},
			description: {
				en: "This distinction was awarded only to only one man. A man who did what he was trained to do, what he was bred to do, what he was born to do. The last man standing out of the hundreds who participated in the first Clash of the Titans: the one and only cjmUK",
				fr: "Distinction du plus grand héros ayant survécu le plus longtemps lors du choc des héros, vous faîtes désormais parti de la légende de l'outre-monde !",
				de: "Nur ein Bürger besitzt diese Auszeichnung. Und zwar jene verdammte Seele, die als letzer Überlebender in der Stadt die Zombiehorden in der Schlacht der Berufe empfangen hat. Eine Legende!",
				es: "Esta distinción es entregada a un solo hombre, aquel que cumplió con su destino legendario y mantuvo a la muerte fuera de su camino en el Choque de Héroes."
			}
		}
	],
	description: {
		en: "This distinction was awarded only to only one man. A man who did what he was trained to do, what he was bred to do, what he was born to do. The last man standing out of the hundreds who participated in the first Clash of the Titans: the one and only cjmUK",
		fr: "Distinction du plus grand héros ayant survécu le plus longtemps lors du choc des héros, vous faîtes désormais parti de la légende de l'outre-monde !",
		de: "Nur ein Bürger besitzt diese Auszeichnung. Und zwar jene verdammte Seele, die als letzer Überlebender in der Stadt die Zombiehorden in der Schlacht der Berufe empfangen hat. Eine Legende!",
		es: "Esta distinción es entregada a un solo hombre, aquel que cumplió con su destino legendario y mantuvo a la muerte fuera de su camino en el Choque de Héroes."
	}
};
var comu = {
	id: "comu",
	name: {
		en: "Clash Team",
		fr: "Organisation du Choc",
		de: "Community-Auszeichnung",
		es: "Organisation du Choc"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_comu.gif",
			title: {
				en: "In at the deep end!",
				fr: "Dedans jusqu'au cou !",
				de: "Held der Community!",
				es: "Dedans jusqu'au cou !"
			},
			description: {
				en: "Awarded for being part of the event team in the Clash of the Titans. Reporters, Video Makers, Town Leaders, we salute you.",
				fr: "Votre organisation sans faille lors du choc des héros a permis de créer un évènement dont on parlera encore longtemps !",
				de: "Auszeichnung für außergewöhnliche Verdienste um die Community von 'Die Verdammten.",
				es: "Votre organisation sans faille lors du choc des héros a permis de créer un évènement dont on parlera encore longtemps !"
			}
		}
	],
	description: {
		en: "Awarded for being part of the event team in the Clash of the Titans. Reporters, Video Makers, Town Leaders, we salute you.",
		fr: "Votre organisation sans faille lors du choc des héros a permis de créer un évènement dont on parlera encore longtemps !",
		de: "Auszeichnung für außergewöhnliche Verdienste um die Community von 'Die Verdammten.",
		es: "Votre organisation sans faille lors du choc des héros a permis de créer un évènement dont on parlera encore longtemps !"
	}
};
var ufc = {
	id: "ufc",
	name: {
		en: "UFC",
		fr: "UFC",
		de: "",
		es: "UFC"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Honourary prize for participation in the UFC!",
		fr: "Récompense honorifique pour une participation à l'UFC !",
		de: "",
		es: "¡Premio honorario por defender la causa UFC!"
	}
};
var ufcwin = {
	id: "ufcwin",
	name: {
		en: "Champion of the UFC",
		fr: "Champion de l'UFC",
		de: "",
		es: "Campeón del UFC"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_wufc.gif",
			title: {
				en: "UFC",
				fr: "UFC",
				de: "",
				es: "UFC"
			},
			description: {
				en: "Victory during the UFC !",
				fr: "Victoire lors de l'UFC !",
				de: "",
				es: "¡Gloriosa victoria del UFC!"
			}
		}
	],
	description: {
		en: "Victory in the UFC!",
		fr: "Victoire lors de l'UFC !",
		de: "",
		es: "¡Campeón del UFC!"
	}
};
var cott = {
	id: "cott",
	name: {
		en: "Clash Titan",
		fr: "Clash Titan",
		de: "Schlachtenbummler",
		es: "Héroe de todos"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_cott.gif",
			title: {
				en: "One town to rule them all!",
				fr: "One town to rule them all!",
				de: "Eine Stadt sie zu knechten!",
				es: "Mi vida, mi pueblo"
			},
			description: {
				en: "A very rare distinction, awarded only to the intrepid few who participated in the very first Clash of the Titans.",
				fr: "A very rare distinction, awarded only to the intrepid few who participated in the very first Clash of the Titans.",
				de: "Diese seltene Auszeichnung haben nur jene Verdammten erhalten, die an der Schlacht der Berufe teilgenommen haben.",
				es: "Una distinción muy rara, entregada a los pocos intrépidos participantes en el primer Choque de Héroes."
			}
		}
	],
	description: {
		en: "A very rare distinction, awarded only to the intrepid few who participated in the very first Clash of the Titans.",
		fr: "A very rare distinction, awarded only to the intrepid few who participated in the very first Clash of the Titans.",
		de: "Diese seltene Auszeichnung haben nur jene Verdammten erhalten, die an der Schlacht der Berufe teilgenommen haben.",
		es: "Una distinción muy rara, entregada a los pocos intrépidos participantes en el primer Choque de Héroes."
	}
};
var comu2 = {
	id: "comu2",
	name: {
		en: "Clash CEO",
		fr: "Clash CEO",
		de: "Clash CEO",
		es: "Clash CEO"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_comu2.gif",
			title: {
				en: "Making things happen!",
				fr: "Making things happen!",
				de: "Making things happen!",
				es: "Making things happen!"
			},
			description: {
				en: "Awarded to the community organizers and developers involved at the cutting edge of the Clash of the Titans. Our community thanks you!",
				fr: "Awarded to the community organizers and developers involved at the cutting edge of the Clash of the Titans. Our community thanks you!",
				de: "Awarded to the community organizers and developers involved at the cutting edge of the Clash of the Titans. Our community thanks you!",
				es: "Awarded to the community organizers and developers involved at the cutting edge of the Clash of the Titans. Our community thanks you!"
			}
		}
	],
	description: {
		en: "Awarded for being one of the community organizers or developers in the Clash of the Titans. Our community thanks you!",
		fr: "Awarded for being one of the community organizers or developers in the Clash of the Titans. Our community thanks you!",
		de: "Awarded for being one of the community organizers or developers in the Clash of the Titans. Our community thanks you!",
		es: "Awarded for being one of the community organizers or developers in the Clash of the Titans. Our community thanks you!"
	}
};
var goodg = {
	id: "goodg",
	name: {
		en: "Good Guy",
		fr: "Good Guy",
		de: "Good Guy",
		es: "Good Guy"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "r_goodg.gif",
			title: {
				en: "Good guy",
				fr: "Good guy",
				de: "Good Guy",
				es: "Good guy"
			},
			description: {
				en: "You are amongst the most upstanding players in Die2Nite. For you, fair-play is more than a theory, it's a state of mind.",
				fr: "Vous faites parti des joueurs les plus intègres de Hordes, le fair-play, plus qu'un principe, c'est votre état d'esprit.",
				de: "You are amongst the most upstanding players in Die2Nite. For you, fair-play is more than a theory, it's a state of mind.",
				es: "Vous faites parti des joueurs les plus intègres de Hordes, le fair-play, plus qu'un principe, c'est votre état d'esprit."
			}
		}
	],
	description: {
		en: "You are one of the most involved players in Die2Nite. For you, fair-play is more than a theory, it's a state of mind.",
		fr: "Vous faites partis des joueurs les plus intégres de Hordes, le fair-play, plus qu'un principe, c'est un état d'esprit.",
		de: "You are amongst the most upstanding players in Die2Nite. For you, fair-play is more than a theory, it's a state of mind.",
		es: "Vous faites partis des joueurs les plus intégres de Hordes, le fair-play, plus qu'un principe, c'est un état d'esprit."
	}
};
var pande = {
	id: "pande",
	name: {
		en: "",
		fr: "Survivant de l'enfer !",
		de: "",
		es: ""
	},
	rare: 2,
	unlocks: [
		{
			count: 50,
			points: 0,
			icon: "r_pande.gif",
			title: {
				en: "",
				fr: "L'enfer, j'en mange un peu chaque matin",
				de: "",
				es: ""
			},
			description: {
				en: "",
				fr: "Vous êtes vraiment chez vous dans le mode Pandémonium !",
				de: "",
				es: ""
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "",
				fr: "Abonné au sauna du pandémonium",
				de: "",
				es: ""
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "",
				fr: "Pandémonium mon amour!",
				de: "",
				es: ""
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "",
				fr: "Partenaire de danse de Lucifer",
				de: "",
				es: ""
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "",
				fr: "Ultime explorateur Hordien",
				de: "",
				es: ""
			}
		}
	],
	description: {
		en: "",
		fr: "Vous êtes un vrai survivant de l'enfer",
		de: "",
		es: ""
	}
};
var hordesJson = {
	killz: killz,
	dhang: dhang,
	dwater: dwater,
	dinfec: dinfec,
	doutsd: doutsd,
	dcity: dcity,
	ddrug: ddrug,
	dnucl: dnucl,
	wound: wound,
	healed: healed,
	cannib: cannib,
	broken: broken,
	theft: theft,
	plundr: plundr,
	homeup: homeup,
	heroac: heroac,
	explor: explor,
	explo2: explo2,
	jrangr: jrangr,
	jguard: jguard,
	jcolle: jcolle,
	jermit: jermit,
	jtamer: jtamer,
	jtech: jtech,
	jsham: jsham,
	chstxl: chstxl,
	tronco: tronco,
	watgun: watgun,
	batgun: batgun,
	repair: repair,
	cobaye: cobaye,
	ebuild: ebuild,
	ebcrow: ebcrow,
	ebgros: ebgros,
	ebpmv: ebpmv,
	ebcstl: ebcstl,
	drug: drug,
	alcool: alcool,
	forum: forum,
	maso: maso,
	animal: animal,
	deco: deco,
	digger: digger,
	buildr: buildr,
	wondrs: wondrs,
	wondr2: wondr2,
	beta: beta$1,
	cgarb: cgarb,
	cwater: cwater,
	wrestl: wrestl,
	ban: ban,
	surlst: surlst,
	suhard: suhard,
	surgrp: surgrp,
	cooked: cooked,
	refine: refine,
	rp: rp,
	hbuild: hbuild,
	drgmkr: drgmkr,
	cookr: cookr,
	fjv: fjv$1,
	fjvani: fjvani,
	armag: armag,
	ginfec: ginfec,
	solban: solban,
	share: share,
	nodrug: nodrug,
	santac: santac,
	lepre: lepre,
	camp: camp,
	cmplst: cmplst,
	kohlmb: kohlmb,
	rrefer: rrefer,
	fjv2: fjv2,
	winthi: winthi,
	winbas: winbas,
	wintop: wintop,
	sandb: sandb,
	brep: brep,
	bgum: bgum,
	paques: paques,
	door: door,
	ruine: ruine,
	guide: guide,
	collec: collec$1,
	mystic: mystic,
	ptame: ptame,
	guard: guard,
	cdh: cdh,
	cdhwin: cdhwin,
	ermwin: ermwin,
	shawin: shawin,
	tecwin: tecwin,
	defwin: defwin,
	rngwin: rngwin,
	tamwin: tamwin,
	derwin: derwin,
	comu: comu,
	ufc: ufc,
	ufcwin: ufcwin,
	cott: cott,
	comu2: comu2,
	goodg: goodg,
	pande: pande
};

var mextra = {
	id: "mextra",
	name: {
		en: "Extraction of valuable files",
		fr: "Extraction de fichiers de valeur",
		de: "Extraction of valuable files",
		es: "Extraction of valuable files"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "",
				fr: "Super",
				de: "",
				es: ""
			}
		},
		{
			count: 50,
			points: 1,
			prefix: true,
			title: {
				en: "File thief",
				fr: "Voleur de fichiers",
				de: "File thief",
				es: "File thief"
			}
		},
		{
			count: 250,
			points: 2,
			prefix: true,
			title: {
				en: "Extractor",
				fr: "Extracteur",
				de: "Extractor",
				es: "Extractor"
			}
		},
		{
			count: 500,
			points: 2,
			icon: "storage.png",
			title: {
				en: "File Extractor",
				fr: "Extracteur de fichiers",
				de: "File Extractor",
				es: "File Extractor"
			}
		},
		{
			count: 1000,
			points: 5,
			prefix: true,
			title: {
				en: "PACK-man",
				fr: "PACK-man",
				de: "PACK-man",
				es: "PACK-man"
			}
		}
	]
};
var eextra = {
	id: "eextra",
	name: {
		en: "Resource Extraction",
		fr: "Extraction de ressources",
		de: "Resource Extraction",
		es: "Resource Extraction"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 2,
			prefix: true,
			title: {
				en: "Collector",
				fr: "Collecteur",
				de: "Collector",
				es: "Collector"
			}
		},
		{
			count: 200,
			points: 5,
			icon: "mana.png",
			title: {
				en: "Mana mana! Pampam palala.",
				fr: "Mana mana ! Pampam palala.",
				de: "Mana mana! Pampam palala.",
				es: "Mana mana! Pampam palala."
			}
		},
		{
			count: 250,
			points: 5,
			title: {
				en: "",
				fr: "Mana mana ! Pampam palala.",
				de: "",
				es: ""
			}
		}
	]
};
var av$1 = {
	id: "av",
	name: {
		en: "Anti-Virus Deletion",
		fr: "Suppression d'anti-virus",
		de: "Anti-Virus Deletion",
		es: "Anti-Virus Deletion"
	},
	rare: 0,
	unlocks: [
		{
			count: 1000,
			points: 2,
			icon: "av.png",
			title: {
				en: "Anti-virus Assassin",
				fr: "Haine des anti-virus",
				de: "Anti-virus Assassin",
				es: "Anti-virus Assassin"
			}
		}
	]
};
var corrup = {
	id: "corrup",
	name: {
		en: "Systems corrupted",
		fr: "Systèmes corrompus",
		de: "Systems corrupted",
		es: "Systems corrupted"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 2,
			prefix: true,
			title: {
				en: "Corrupteur",
				fr: "Corrupteur",
				de: "Corrupteur",
				es: "Corrupteur"
			}
		},
		{
			count: 150,
			points: 5,
			icon: "uc.png",
			title: {
				en: "Corrupteur",
				fr: "Corrupteur",
				de: "Corrupteur",
				es: "Corrupteur"
			}
		}
	]
};
var crash = {
	id: "crash",
	name: {
		en: "Systèmes crashés",
		fr: "Systèmes crashés",
		de: "Systèmes crashés",
		es: "Systèmes crashés"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 2,
			prefix: true,
			title: {
				en: "Saboteur",
				fr: "Saboteur",
				de: "Saboteur",
				es: "Saboteur"
			}
		},
		{
			count: 150,
			points: 5,
			icon: "guard.png",
			title: {
				en: "Saboteur",
				fr: "Saboteur",
				de: "Saboteur",
				es: "Saboteur"
			}
		}
	]
};
var win = {
	id: "win",
	name: {
		en: "Missions completed",
		fr: "Missions remplies",
		de: "Missions completed",
		es: "Missions completed"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "money.png",
			title: {
				en: "First contract",
				fr: "Premier contrat",
				de: "First contract",
				es: "First contract"
			}
		},
		{
			count: 25,
			points: 2,
			prefix: true,
			title: {
				en: "Agent",
				fr: "Agent",
				de: "Agent",
				es: "Agent"
			}
		},
		{
			count: 50,
			points: 5,
			icon: "id.png",
			title: {
				en: "Satisfied clients",
				fr: "Clients satisfaits",
				de: "Satisfied clients",
				es: "Satisfied clients"
			}
		},
		{
			count: 100,
			points: 5,
			prefix: true,
			title: {
				en: "Hacker",
				fr: "Hacker",
				de: "Hacker",
				es: "Hacker"
			}
		},
		{
			count: 300,
			points: 10,
			prefix: true,
			title: {
				en: "H4ck3R",
				fr: "H4ck3R",
				de: "H4ck3R",
				es: "H4ck3R"
			}
		}
	]
};
var lwin = {
	id: "lwin",
	name: {
		en: "Uber-Eleet Missions",
		fr: "Missions Uber-Eleet",
		de: "Uber-Eleet Missions",
		es: "Uber-Eleet Missions"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 2,
			suffix: true,
			title: {
				en: ": Elite Grade",
				fr: "élite",
				de: ": Elite Grade",
				es: ": Elite Grade"
			}
		},
		{
			count: 20,
			points: 5,
			suffix: true,
			title: {
				en: ": 3l33t Grade",
				fr: "3l33t",
				de: ": 3l33t Grade",
				es: ": 3l33t Grade"
			}
		},
		{
			count: 50,
			points: 5,
			suffix: true,
			title: {
				en: ": Terminal Grade",
				fr: "terminal",
				de: ": Terminal Grade",
				es: ": Terminal Grade"
			}
		},
		{
			count: 100,
			points: 10,
			suffix: true,
			title: {
				en: ": M4tr1x Grade",
				fr: "Matrice",
				de: ": M4tr1x Grade",
				es: ": M4tr1x Grade"
			}
		}
	]
};
var pwin = {
	id: "pwin",
	name: {
		en: "Missions without fail",
		fr: "Missions sans échec",
		de: "Missions without fail",
		es: "Missions without fail"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 2,
			suffix: true,
			title: {
				en: "(high-precision)",
				fr: "haute-précision",
				de: "(high-precision)",
				es: "(high-precision)"
			}
		},
		{
			count: 100,
			points: 2,
			suffix: true,
			title: {
				en: "(from CyberSpace)",
				fr: "CyberSpace",
				de: "(from CyberSpace)",
				es: "(from CyberSpace)"
			}
		}
	]
};
var passwd = {
	id: "passwd",
	name: {
		en: "Passwords cracked",
		fr: "Mots de passe cassés",
		de: "Passwords cracked",
		es: "Passwords cracked"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 2,
			icon: "screen.png",
			prefix: true,
			title: {
				en: "Scavenger",
				fr: "Fouineur",
				de: "Scavenger",
				es: "Scavenger"
			}
		},
		{
			count: 50,
			points: 5,
			icon: "admin.png",
			prefix: true,
			title: {
				en: "Automaton",
				fr: "Astucieux",
				de: "Automaton",
				es: "Automaton"
			}
		}
	]
};
var log = {
	id: "log",
	name: {
		en: "All traces deleted",
		fr: "Traces effacées",
		de: "All traces deleted",
		es: "All traces deleted"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			prefix: true,
			title: {
				en: "Cyber-Ninja",
				fr: "Cyber-Ninja",
				de: "Cyber-Ninja",
				es: "Cyber-Ninja"
			}
		},
		{
			count: 500,
			points: 5,
			prefix: true,
			title: {
				en: "Ghost",
				fr: "Ghost",
				de: "Ghost",
				es: "Ghost"
			}
		}
	]
};
var sale = {
	id: "sale",
	name: {
		en: "PACKs re-sold",
		fr: "PACKs revendus",
		de: "PACKs re-sold",
		es: "PACKs re-sold"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 2,
			suffix: true,
			title: {
				en: "of PACKs",
				fr: "PACKs",
				de: "of PACKs",
				es: "of PACKs"
			}
		},
		{
			count: 100,
			points: 5,
			icon: "pack.png",
			title: {
				en: "PACK collection",
				fr: "Collection de PACKs",
				de: "PACK collection",
				es: "PACK collection"
			}
		}
	]
};
var rsale = {
	id: "rsale",
	name: {
		en: "Rare PACKs re-sold",
		fr: "PACKs rares revendus",
		de: "Rare PACKs re-sold",
		es: "Rare PACKs re-sold"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 2,
			suffix: true,
			title: {
				en: "of PACK files",
				fr: "fichiers PACK",
				de: "of PACK files",
				es: "of PACK files"
			}
		},
		{
			count: 30,
			points: 5,
			prefix: true,
			title: {
				en: "Dealer",
				fr: "Dealer",
				de: "Dealer",
				es: "Dealer"
			}
		}
	]
};
var ccard = {
	id: "ccard",
	name: {
		en: "Bank cards exploited",
		fr: "Cartes bancaires exploitées",
		de: "Bank cards exploited",
		es: "Bank cards exploited"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 2,
			prefix: true,
			title: {
				en: "Broker",
				fr: "Courtier",
				de: "Broker",
				es: "Broker"
			}
		},
		{
			count: 50,
			points: 5,
			icon: "calim.png",
			title: {
				en: "Do you take Theiva?",
				fr: "Kikavolémacébé ?",
				de: "Do you take Theiva?",
				es: "Do you take Theiva?"
			}
		},
		{
			count: 100,
			points: 10,
			suffix: true,
			title: {
				en: " - paying with Bast**dcard",
				fr: "carte bancaire",
				de: " - paying with Bast**dcard",
				es: " - paying with Bast**dcard"
			}
		}
	]
};
var hl$1 = {
	id: "hl",
	name: {
		en: "High-level Agent",
		fr: "Agent de haut niveau",
		de: "High-level Agent",
		es: "High-level Agent"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 5,
			suffix: true,
			title: {
				en: "(professional)",
				fr: "haut niveau",
				de: "(professional)",
				es: "(professional)"
			}
		}
	]
};
var lead3 = {
	id: "lead3",
	name: {
		en: "Leader of the Platinum Challenge",
		fr: "Leader du Challenge Platine",
		de: "Leader of the Platinum Challenge",
		es: "Leader of the Platinum Challenge"
	},
	rare: 3,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "lead3.png"
		},
		{
			count: 2,
			points: 10,
			icon: "lead3.png"
		}
	]
};
var lead2 = {
	id: "lead2",
	name: {
		en: "Leader of the Gold Challenge",
		fr: "Leader du Challenge Or",
		de: "Leader of the Gold Challenge",
		es: "Leader of the Gold Challenge"
	},
	rare: 3,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "lead2.png"
		}
	]
};
var lead1 = {
	id: "lead1",
	name: {
		en: "Leader of the Silver Challenge",
		fr: "Leader du Challenge Argent",
		de: "Leader of the Silver Challenge",
		es: "Leader of the Silver Challenge"
	},
	rare: 3,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "lead1.png"
		}
	]
};
var rank3 = {
	id: "rank3",
	name: {
		en: "Platinum Challenge Grade",
		fr: "Classé au Challenge Platine",
		de: "Platinum Challenge Grade",
		es: "Platinum Challenge Grade"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 3,
			icon: "ismiley_yeah.png"
		},
		{
			count: 2,
			points: 3,
			icon: "ismiley_eek.png"
		},
		{
			count: 3,
			points: 3,
			icon: "ismiley_happy.png"
		},
		{
			count: 4,
			points: 3,
			icon: "ismiley_cool.png"
		}
	]
};
var rank2 = {
	id: "rank2",
	name: {
		en: "Gold Challenge Grade",
		fr: "Classé au Challenge Or",
		de: "Gold Challenge Grade",
		es: "Gold Challenge Grade"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "ismiley_pff.png"
		},
		{
			count: 2,
			points: 2,
			icon: "ismiley_nooo.png"
		},
		{
			count: 3,
			points: 2,
			icon: "ismiley_huh.png"
		}
	]
};
var rank1 = {
	id: "rank1",
	name: {
		en: "Silver Challenge Grade",
		fr: "Classé au Challenge Argent",
		de: "Silver Challenge Grade",
		es: "Silver Challenge Grade"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "ismiley_smile.png"
		},
		{
			count: 2,
			points: 1,
			icon: "ismiley_sad.png"
		},
		{
			count: 3,
			points: 1,
			icon: "ismiley_wink.png"
		},
		{
			count: 4,
			points: 1,
			icon: "ismiley_wink2.png"
		}
	]
};
var intrusionJson = {
	mextra: mextra,
	eextra: eextra,
	av: av$1,
	corrup: corrup,
	crash: crash,
	win: win,
	lwin: lwin,
	pwin: pwin,
	passwd: passwd,
	log: log,
	sale: sale,
	rsale: rsale,
	ccard: ccard,
	hl: hl$1,
	lead3: lead3,
	lead2: lead2,
	lead1: lead1,
	rank3: rank3,
	rank2: rank2,
	rank1: rank1
};

var unlockedGames = {
	id: "unlockedGames",
	name: {
		en: "Unlocked Games",
		fr: "Jeux débloqués",
		de: "Freigeschaltete Spiele",
		es: "Juegos liberados"
	},
	rare: 0,
	unlocks: [
	]
};
var wonGift = {
	id: "wonGift",
	name: {
		en: "Kado Prize Winner",
		fr: "Gagnant de cheque(s) Kado",
		de: "Gewinner Kado-Preis",
		es: "Ganador de cheques regalo"
	},
	rare: 0,
	unlocks: [
	]
};
var missionSteps = {
	id: "missionSteps",
	name: {
		en: "Mission Steps",
		fr: "Etapes de mission",
		de: "Missionsschritte",
		es: "Etapas de misión"
	},
	rare: 0,
	unlocks: [
	]
};
var joinedClan = {
	id: "joinedClan",
	name: {
		en: "Clan Member",
		fr: "Membre d'un clan",
		de: "Klanmitglied",
		es: "Miembro de clan"
	},
	rare: 0,
	unlocks: [
	]
};
var createdClan = {
	id: "createdClan",
	name: {
		en: "Clan Founder",
		fr: "Fondateur de clan",
		de: "Klangründer",
		es: "Fundador de clan"
	},
	rare: 0,
	unlocks: [
	]
};
var wing = {
	id: "wing",
	name: {
		en: "Piouz Wing",
		fr: "Aile de piouz",
		de: "Piouzflügel",
		es: "Ala de Piou"
	},
	rare: 1,
	unlocks: [
	]
};
var clanDefense = {
	id: "clanDefense",
	name: {
		en: "Clan Defences",
		fr: "Défenses de clan",
		de: "Klanverteidigungen",
		es: "Defensas de clan"
	},
	rare: 0,
	unlocks: [
	]
};
var clanAttack = {
	id: "clanAttack",
	name: {
		en: "Clan Attacks",
		fr: "Attaques de clan",
		de: "Klanangriffe",
		es: "Ataques de clan"
	},
	rare: 0,
	unlocks: [
	]
};
var game1 = {
	id: "game1",
	name: {
		en: "Safari Level",
		fr: "Niveau Safari",
		de: "Level bei Safari",
		es: "Nivel Safari"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Safari : Confirmed Level",
				fr: "Safari : Niveau Confirmé",
				de: "Safari: Level Weiß",
				es: "Safari: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Safari : Green Level",
				fr: "Safari : Niveau Vert",
				de: "Safari: Level Grün",
				es: "Safari: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Safari : Orange Level",
				fr: "Safari : Niveau Orange",
				de: "Safari: Level Orange",
				es: "Safari: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Safari : Red Level",
				fr: "Safari : Niveau Rouge",
				de: "Safari: Level Rot",
				es: "Safari: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Safari : Bronze Level",
				fr: "Safari : Niveau Bronze",
				de: "Safari: Level Bronze",
				es: "Safari: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Safari : Silver Level",
				fr: "Safari : Niveau Argent",
				de: "Safari: Level Silber",
				es: "Safari: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Safari : Gold Level",
				fr: "Safari : Niveau Or",
				de: "Safari: Level Gold",
				es: "Safari: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Safari : Paradise Level",
				fr: "Safari : Niveau Paradis",
				de: "Safari: Level Paradies",
				es: "Safari: Nivel Paraíso"
			}
		}
	]
};
var game2 = {
	id: "game2",
	name: {
		en: "ABC Revolution Level",
		fr: "Niveau ABC Revolution",
		de: "Level bei ABC Revolution",
		es: "Nivel ABC Revolution"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "ABC Revolution : Confirmed Level",
				fr: "ABC Revolution : Niveau Confirmé",
				de: "ABC Revolution: Level Weiß",
				es: "ABC Revolution: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "ABC Revolution : Green Level",
				fr: "ABC Revolution : Niveau Vert",
				de: "ABC Revolution: Level Grün",
				es: "ABC Revolution: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "ABC Revolution : Orange Level",
				fr: "ABC Revolution : Niveau Orange",
				de: "ABC Revolution: Level Orange",
				es: "ABC Revolution: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "ABC Revolution : Red Level",
				fr: "ABC Revolution : Niveau Rouge",
				de: "ABC Revolution: Level Rot",
				es: "ABC Revolution: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "ABC Revolution : Bronze Level",
				fr: "ABC Revolution : Niveau Bronze",
				de: "ABC Revolution: Level Bronze",
				es: "ABC Revolution: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "ABC Revolution : Silver Level",
				fr: "ABC Revolution : Niveau Argent",
				de: "ABC Revolution: Level Silber",
				es: "ABC Revolution: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "ABC Revolution : Gold Level",
				fr: "ABC Revolution : Niveau Or",
				de: "ABC Revolution: Level Gold",
				es: "ABC Revolution: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "ABC Revolution : Paradise Level",
				fr: "ABC Revolution : Niveau Paradis",
				de: "ABC Revolution: Level Paradies",
				es: "ABC Revolution: Nivel Paraíso"
			}
		}
	]
};
var game3 = {
	id: "game3",
	name: {
		en: "F1 Champion Level",
		fr: "Niveau F1 Champion",
		de: "Level bei F1 Champion",
		es: "Nivel F1 Champion"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "F1 Champion : Confirmed Level",
				fr: "F1 Champion : Niveau Confirmé",
				de: "F1 Champion: Level Weiß",
				es: "F1 Champion: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "F1 Champion : Green Level",
				fr: "F1 Champion : Niveau Vert",
				de: "F1 Champion: Level Grün",
				es: "F1 Champion: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "F1 Champion : Orange Level",
				fr: "F1 Champion : Niveau Orange",
				de: "F1 Champion: Level Orange",
				es: "F1 Champion: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "F1 Champion : Red Level",
				fr: "F1 Champion : Niveau Rouge",
				de: "F1 Champion: Level Rot",
				es: "F1 Champion: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "F1 Champion : Bronze Level",
				fr: "F1 Champion : Niveau Bronze",
				de: "F1 Champion: Level Bronze",
				es: "F1 Champion: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "F1 Champion : Silver Level",
				fr: "F1 Champion : Niveau Argent",
				de: "F1 Champion: Level Silber",
				es: "F1 Champion: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "F1 Champion : Gold Level",
				fr: "F1 Champion : Niveau Or",
				de: "F1 Champion: Level Gold",
				es: "F1 Champion: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "F1 Champion : Paradise Level",
				fr: "F1 Champion : Niveau Paradis",
				de: "F1 Champion: Level Paradies",
				es: "F1 Champion: Nivel Paraíso"
			}
		}
	]
};
var game4 = {
	id: "game4",
	name: {
		en: "Memo-Psy Level",
		fr: "Niveau Memo-Psy",
		de: "Level bei Memo-Psy",
		es: ""
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Memo-Psy : Confirmed Level",
				fr: "Memo-Psy : Niveau Confirmé",
				de: "Memo-Psy: Level Weiß",
				es: ""
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Memo-Psy : Green Level",
				fr: "Memo-Psy : Niveau Vert",
				de: "Memo-Psy: Level Grün",
				es: ""
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Memo-Psy : Orange Level",
				fr: "Memo-Psy : Niveau Orange",
				de: "Memo-Psy: Level Orange",
				es: ""
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Memo-Psy : Red Level",
				fr: "Memo-Psy : Niveau Rouge",
				de: "Memo-Psy: Level Rot",
				es: ""
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Memo-Psy : Bronze Level",
				fr: "Memo-Psy : Niveau Bronze",
				de: "Memo-Psy: Level Bronze",
				es: ""
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Memo-Psy : Silver Level",
				fr: "Memo-Psy : Niveau Argent",
				de: "Memo-Psy: Level Silber",
				es: ""
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Memo-Psy : Gold Level",
				fr: "Memo-Psy : Niveau Or",
				de: "Memo-Psy: Level Gold",
				es: ""
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Memo-Psy : Paradise Level",
				fr: "Memo-Psy : Niveau Paradis",
				de: "Memo-Psy: Level Paradies",
				es: ""
			}
		}
	]
};
var game5 = {
	id: "game5",
	name: {
		en: "Xian-Xiang Level",
		fr: "Niveau Xian-Xiang",
		de: "Level bei Xian-Xiang",
		es: "Nivel Xian-Xiang"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Xian-Xiang : Confirmed Level",
				fr: "Xian-Xiang : Niveau Confirmé",
				de: "Xian-Xiang: Level Weiß",
				es: "Xian-Xiang: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Xian-Xiang : Green Level",
				fr: "Xian-Xiang : Niveau Vert",
				de: "Xian-Xiang: Level Grün",
				es: "Xian-Xiang: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Xian-Xiang : Orange Level",
				fr: "Xian-Xiang : Niveau Orange",
				de: "Xian-Xiang: Level Orange",
				es: "Xian-Xiang: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Xian-Xiang : Red Level",
				fr: "Xian-Xiang : Niveau Rouge",
				de: "Xian-Xiang: Level Rot",
				es: "Xian-Xiang: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Xian-Xiang : Bronze Level",
				fr: "Xian-Xiang : Niveau Bronze",
				de: "Xian-Xiang: Level Bronze",
				es: "Xian-Xiang: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Xian-Xiang : Silver Level",
				fr: "Xian-Xiang : Niveau Argent",
				de: "Xian-Xiang: Level Silber",
				es: "Xian-Xiang: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Xian-Xiang : Gold Level",
				fr: "Xian-Xiang : Niveau Or",
				de: "Xian-Xiang: Level Gold",
				es: "Xian-Xiang: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Xian-Xiang : Paradise Level",
				fr: "Xian-Xiang : Niveau Paradis",
				de: "Xian-Xiang: Level Paradies",
				es: "Xian-Xiang: Nivel Paraíso"
			}
		}
	]
};
var game6 = {
	id: "game6",
	name: {
		en: "Manda Level",
		fr: "Niveau Manda",
		de: "Level bei Manda",
		es: "Nivel Manda"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Manda : Confirmed Level",
				fr: "Manda : Niveau Confirmé",
				de: "Manda: Level Weiß",
				es: "Manda: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Manda : Green Level",
				fr: "Manda : Niveau Vert",
				de: "Manda: Level Grün",
				es: "Manda: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Manda : Orange Level",
				fr: "Manda : Niveau Orange",
				de: "Manda: Level Orange",
				es: "Manda: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Manda : Red Level",
				fr: "Manda : Niveau Rouge",
				de: "Manda: Level Rot",
				es: "Manda: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Manda : Bronze Level",
				fr: "Manda : Niveau Bronze",
				de: "Manda: Level Bronze",
				es: "Manda: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Manda : Silver Level",
				fr: "Manda : Niveau Argent",
				de: "Manda: Level Silber",
				es: "Manda: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Manda : Gold Level",
				fr: "Manda : Niveau Or",
				de: "Manda: Level Gold",
				es: "Manda: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Manda : Paradise Level",
				fr: "Manda : Niveau Paradis",
				de: "Manda: Level Paradies",
				es: "Manda: Nivel Paraíso"
			}
		}
	]
};
var game7 = {
	id: "game7",
	name: {
		en: "Piou-Piou Level",
		fr: "Niveau Piou-Piou",
		de: "Level bei Piou-Piou",
		es: "Nivel Piou-Piou"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Piou-Piou : Confirmed Level",
				fr: "Piou-Piou : Niveau Confirmé",
				de: "Piou-Piou: Level Weiß",
				es: "Piou-Piou: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Piou-Piou : Green Level",
				fr: "Piou-Piou : Niveau Vert",
				de: "Piou-Piou: Level Grün",
				es: "Piou-Piou: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Piou-Piou : Orange Level",
				fr: "Piou-Piou : Niveau Orange",
				de: "Piou-Piou: Level Orange",
				es: "Piou-Piou: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Piou-Piou : Red Level",
				fr: "Piou-Piou : Niveau Rouge",
				de: "Piou-Piou: Level Rot",
				es: "Piou-Piou: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Piou-Piou : Bronze Level",
				fr: "Piou-Piou : Niveau Bronze",
				de: "Piou-Piou: Level Bronze",
				es: "Piou-Piou: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Piou-Piou : Silver Level",
				fr: "Piou-Piou : Niveau Argent",
				de: "Piou-Piou: Level Silber",
				es: "Piou-Piou: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Piou-Piou : Gold Level",
				fr: "Piou-Piou : Niveau Or",
				de: "Piou-Piou: Level Gold",
				es: "Piou-Piou: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Piou-Piou : Paradise Level",
				fr: "Piou-Piou : Niveau Paradis",
				de: "Piou-Piou: Level Paradies",
				es: "Piou-Piou: Nivel Paraíso"
			}
		}
	]
};
var game8 = {
	id: "game8",
	name: {
		en: "Flushee Level",
		fr: "Niveau Flushee",
		de: "Level bei Flushee",
		es: "Nivel Flushee"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Flushee : Confirmed Level",
				fr: "Flushee : Niveau Confirmé",
				de: "Flushee: Level Weiß",
				es: "Flushee: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Flushee : Green Level",
				fr: "Flushee : Niveau Vert",
				de: "Flushee: Level Grün",
				es: "Flushee: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Flushee : Orange Level",
				fr: "Flushee : Niveau Orange",
				de: "Flushee: Level Orange",
				es: "Flushee: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Flushee : Red Level",
				fr: "Flushee : Niveau Rouge",
				de: "Flushee: Level Rot",
				es: "Flushee: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Flushee : Bronze Level",
				fr: "Flushee : Niveau Bronze",
				de: "Flushee: Level Bronze",
				es: "Flushee: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Flushee : Silver Level",
				fr: "Flushee : Niveau Argent",
				de: "Flushee: Level Silber",
				es: "Flushee: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Flushee : Gold Level",
				fr: "Flushee : Niveau Or",
				de: "Flushee: Level Gold",
				es: "Flushee: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Flushee : Paradise Level",
				fr: "Flushee : Niveau Paradis",
				de: "Flushee: Level Paradies",
				es: "Flushee: Nivel Paraíso"
			}
		}
	]
};
var game9 = {
	id: "game9",
	name: {
		en: "QuadriKolor Level",
		fr: "Niveau QuadriKolor",
		de: "Level bei QuadriKolor",
		es: "Nivel QuadriKolor"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "QuadriKolor : Confirmed Level",
				fr: "QuadriKolor : Niveau Confirmé",
				de: "QuadriKolor: Level Weiß",
				es: "QuadriKolor: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "QuadriKolor : Green Level",
				fr: "QuadriKolor : Niveau Vert",
				de: "QuadriKolor: Level Grün",
				es: "QuadriKolor: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "QuadriKolor : Orange Level",
				fr: "QuadriKolor : Niveau Orange",
				de: "QuadriKolor: Level Orange",
				es: "QuadriKolor: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "QuadriKolor : Red Level",
				fr: "QuadriKolor : Niveau Rouge",
				de: "QuadriKolor: Level Rot",
				es: "QuadriKolor: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "QuadriKolor : Bronze Level",
				fr: "QuadriKolor : Niveau Bronze",
				de: "QuadriKolor: Level Bronze",
				es: "QuadriKolor: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "QuadriKolor : Silver Level",
				fr: "QuadriKolor : Niveau Argent",
				de: "QuadriKolor: Level Silber",
				es: "QuadriKolor: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "QuadriKolor : Gold Level",
				fr: "QuadriKolor : Niveau Or",
				de: "QuadriKolor: Level Gold",
				es: "QuadriKolor: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "QuadriKolor : Paradise Level",
				fr: "QuadriKolor : Niveau Paradis",
				de: "QuadriKolor: Level Paradies",
				es: "QuadriKolor: Nivel Paraíso"
			}
		}
	]
};
var game10 = {
	id: "game10",
	name: {
		en: "Toy Maniak Level",
		fr: "Niveau Toy Maniak",
		de: "Level bei Toy Maniak",
		es: "Nivel Toy Maniak"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Toy Maniak : Confirmed Level",
				fr: "Toy Maniak : Niveau Confirmé",
				de: "Toy Maniak: Level Weiß",
				es: "Toy Maniak: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Toy Maniak : Green Level",
				fr: "Toy Maniak : Niveau Vert",
				de: "Toy Maniak: Level Grün",
				es: "Toy Maniak: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Toy Maniak : Orange Level",
				fr: "Toy Maniak : Niveau Orange",
				de: "Toy Maniak: Level Orange",
				es: "Toy Maniak: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Toy Maniak : Red Level",
				fr: "Toy Maniak : Niveau Rouge",
				de: "Toy Maniak: Level Rot",
				es: "Toy Maniak: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Toy Maniak : Bronze Level",
				fr: "Toy Maniak : Niveau Bronze",
				de: "Toy Maniak: Level Bronze",
				es: "Toy Maniak: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Toy Maniak : Silver Level",
				fr: "Toy Maniak : Niveau Argent",
				de: "Toy Maniak: Level Silber",
				es: "Toy Maniak: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Toy Maniak : Gold Level",
				fr: "Toy Maniak : Niveau Or",
				de: "Toy Maniak: Level Gold",
				es: "Toy Maniak: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Toy Maniak : Paradise Level",
				fr: "Toy Maniak : Niveau Paradis",
				de: "Toy Maniak: Level Paradies",
				es: "Toy Maniak: Nivel Paraíso"
			}
		}
	]
};
var game11 = {
	id: "game11",
	name: {
		en: "Kanji Level",
		fr: "Niveau Kanji",
		de: "Level bei Kanji",
		es: "Nivel Kanji"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Kanji : Confirmed Level",
				fr: "Kanji : Niveau Confirmé",
				de: "Kanji: Level Weiß",
				es: "Kanji: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Kanji : Green Level",
				fr: "Kanji : Niveau Vert",
				de: "Kanji: Level Grün",
				es: "Kanji: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Kanji : Orange Level",
				fr: "Kanji : Niveau Orange",
				de: "Kanji: Level Orange",
				es: "Kanji: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Kanji : Red Level",
				fr: "Kanji : Niveau Rouge",
				de: "Kanji: Level Rot",
				es: "Kanji: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Kanji : Bronze Level",
				fr: "Kanji : Niveau Bronze",
				de: "Kanji: Level Bronze",
				es: "Kanji: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Kanji : Silver Level",
				fr: "Kanji : Niveau Argent",
				de: "Kanji: Level Silber",
				es: "Kanji: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Kanji : Gold Level",
				fr: "Kanji : Niveau Or",
				de: "Kanji: Level Gold",
				es: "Kanji: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Kanji : Paradise Level",
				fr: "Kanji : Niveau Paradis",
				de: "Kanji: Level Paradies",
				es: "Kanji: Nivel Paraíso"
			}
		}
	]
};
var game12 = {
	id: "game12",
	name: {
		en: "Kill Bulle Level",
		fr: "Niveau Kill Bulle",
		de: "Level bei Kill Bulle",
		es: "Nivel Kill Bulle"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Kill Bulle : Confirmed Level",
				fr: "Kill Bulle : Niveau Confirmé",
				de: "Kill Bulle: Level Weiß",
				es: "Kill Bulle: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Kill Bulle : Green Level",
				fr: "Kill Bulle : Niveau Vert",
				de: "Kill Bulle: Level Grün",
				es: "Kill Bulle: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Kill Bulle : Orange Level",
				fr: "Kill Bulle : Niveau Orange",
				de: "Kill Bulle: Level Orange",
				es: "Kill Bulle: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Kill Bulle : Red Level",
				fr: "Kill Bulle : Niveau Rouge",
				de: "Kill Bulle: Level Rot",
				es: "Kill Bulle: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Kill Bulle : Bronze Level",
				fr: "Kill Bulle : Niveau Bronze",
				de: "Kill Bulle: Level Bronze",
				es: "Kill Bulle: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Kill Bulle : Silver Level",
				fr: "Kill Bulle : Niveau Argent",
				de: "Kill Bulle: Level Silber",
				es: "Kill Bulle: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Kill Bulle : Gold Level",
				fr: "Kill Bulle : Niveau Or",
				de: "Kill Bulle: Level Gold",
				es: "Kill Bulle: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Kill Bulle : Paradise Level",
				fr: "Kill Bulle : Niveau Paradis",
				de: "Kill Bulle: Level Paradies",
				es: "Kill Bulle: Nivel Paraíso"
			}
		}
	]
};
var game13 = {
	id: "game13",
	name: {
		en: "Kavern Level",
		fr: "Niveau Kavern",
		de: "Level bei Kavern",
		es: "Nivel Kavern"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Kavern : Confirmed Level",
				fr: "Kavern : Niveau Confirmé",
				de: "Kavern: Level Weiß",
				es: "Kavern: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Kavern : Green Level",
				fr: "Kavern : Niveau Vert",
				de: "Kavern: Level Grün",
				es: "Kavern: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Kavern : Orange Level",
				fr: "Kavern : Niveau Orange",
				de: "Kavern: Level Orange",
				es: "Kavern: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Kavern : Red Level",
				fr: "Kavern : Niveau Rouge",
				de: "Kavern: Level Rot",
				es: "Kavern: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Kavern : Bronze Level",
				fr: "Kavern : Niveau Bronze",
				de: "Kavern: Level Bronze",
				es: "Kavern: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Kavern : Silver Level",
				fr: "Kavern : Niveau Argent",
				de: "Kavern: Level Silber",
				es: "Kavern: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Kavern : Gold Level",
				fr: "Kavern : Niveau Or",
				de: "Kavern: Level Gold",
				es: "Kavern: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Kavern : Paradise Level",
				fr: "Kavern : Niveau Paradis",
				de: "Kavern: Level Paradies",
				es: "Kavern: Nivel Paraíso"
			}
		}
	]
};
var game14 = {
	id: "game14",
	name: {
		en: "Bactery Level",
		fr: "Niveau Bactery",
		de: "Level bei Bactery",
		es: "Nivel Bactery"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Bactery : Confirmed Level",
				fr: "Bactery : Niveau Confirmé",
				de: "Bactery: Level Weiß",
				es: "Bactery: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Bactery : Green Level",
				fr: "Bactery : Niveau Vert",
				de: "Bactery: Level Grün",
				es: "Bactery: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Bactery : Orange Level",
				fr: "Bactery : Niveau Orange",
				de: "Bactery: Level Orange",
				es: "Bactery: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Bactery : Red Level",
				fr: "Bactery : Niveau Rouge",
				de: "Bactery: Level Rot",
				es: "Bactery: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Bactery : Bronze Level",
				fr: "Bactery : Niveau Bronze",
				de: "Bactery: Level Bronze",
				es: "Bactery: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Bactery : Silver Level",
				fr: "Bactery : Niveau Argent",
				de: "Bactery: Level Silber",
				es: "Bactery: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Bactery : Gold Level",
				fr: "Bactery : Niveau Or",
				de: "Bactery: Level Gold",
				es: "Bactery: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Bactery : Paradise Level",
				fr: "Bactery : Niveau Paradis",
				de: "Bactery: Level Paradies",
				es: "Bactery: Nivel Paraíso"
			}
		}
	]
};
var game15 = {
	id: "game15",
	name: {
		en: "Julianus Level",
		fr: "Niveau Julianus",
		de: "Level bei Julianus",
		es: "Nivel Julianus"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Julianus : Confirmed Level",
				fr: "Julianus : Niveau Confirmé",
				de: "Julianus: Level Weiß",
				es: "Julianus: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Julianus : Green Level",
				fr: "Julianus : Niveau Vert",
				de: "Julianus: Level Grün",
				es: "Julianus: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Julianus : Orange Level",
				fr: "Julianus : Niveau Orange",
				de: "Julianus: Level Orange",
				es: "Julianus: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Julianus : Red Level",
				fr: "Julianus : Niveau Rouge",
				de: "Julianus: Level Rot",
				es: "Julianus: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Julianus : Bronze Level",
				fr: "Julianus : Niveau Bronze",
				de: "Julianus: Level Bronze",
				es: "Julianus: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Julianus : Silver Level",
				fr: "Julianus : Niveau Argent",
				de: "Julianus: Level Silber",
				es: "Julianus: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Julianus : Gold Level",
				fr: "Julianus : Niveau Or",
				de: "Julianus: Level Gold",
				es: "Julianus: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Julianus : Paradise Level",
				fr: "Julianus : Niveau Paradis",
				de: "Julianus: Level Paradies",
				es: "Julianus: Nivel Paraíso"
			}
		}
	]
};
var game16 = {
	id: "game16",
	name: {
		en: "Magmax Level",
		fr: "Niveau Magmax",
		de: "Level bei Magmax",
		es: "Nivel Magmax"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Magmax : Confirmed Level",
				fr: "Magmax : Niveau Confirmé",
				de: "Magmax: Level Weiß",
				es: "Magmax: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Magmax : Green Level",
				fr: "Magmax : Niveau Vert",
				de: "Magmax: Level Grün",
				es: "Magmax: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Magmax : Orange Level",
				fr: "Magmax : Niveau Orange",
				de: "Magmax: Level Orange",
				es: "Magmax: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Magmax : Red Level",
				fr: "Magmax : Niveau Rouge",
				de: "Magmax: Level Rot",
				es: "Magmax: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Magmax : Bronze Level",
				fr: "Magmax : Niveau Bronze",
				de: "Magmax: Level Bronze",
				es: "Magmax: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Magmax : Silver Level",
				fr: "Magmax : Niveau Argent",
				de: "Magmax: Level Silber",
				es: "Magmax: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Magmax : Gold Level",
				fr: "Magmax : Niveau Or",
				de: "Magmax: Level Gold",
				es: "Magmax: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Magmax : Paradise Level",
				fr: "Magmax : Niveau Paradis",
				de: "Magmax: Level Paradies",
				es: "Magmax: Nivel Paraíso"
			}
		}
	]
};
var game17 = {
	id: "game17",
	name: {
		en: "ZipZap Level",
		fr: "Niveau ZipZap",
		de: "Level bei ZipZap",
		es: "Nivel ZipZap"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "ZipZap : Confirmed Level",
				fr: "ZipZap : Niveau Confirmé",
				de: "ZipZap: Level Weiß",
				es: "ZipZap: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "ZipZap : Green Level",
				fr: "ZipZap : Niveau Vert",
				de: "ZipZap: Level Grün",
				es: "ZipZap: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "ZipZap : Orange Level",
				fr: "ZipZap : Niveau Orange",
				de: "ZipZap: Level Orange",
				es: "ZipZap: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "ZipZap : Red Level",
				fr: "ZipZap : Niveau Rouge",
				de: "ZipZap: Level Rot",
				es: "ZipZap: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "ZipZap : Bronze Level",
				fr: "ZipZap : Niveau Bronze",
				de: "ZipZap: Level Bronze",
				es: "ZipZap: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "ZipZap : Silver Level",
				fr: "ZipZap : Niveau Argent",
				de: "ZipZap: Level Silber",
				es: "ZipZap: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "ZipZap : Gold Level",
				fr: "ZipZap : Niveau Or",
				de: "ZipZap: Level Gold",
				es: "ZipZap: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "ZipZap : Paradise Level",
				fr: "ZipZap : Niveau Paradis",
				de: "ZipZap: Level Paradies",
				es: "ZipZap: Nivel Paraíso"
			}
		}
	]
};
var game18 = {
	id: "game18",
	name: {
		en: "Cereal Punk Level",
		fr: "Niveau Cereal Punk",
		de: "Level bei Cereal Punk",
		es: "Nivel Cereal Punk"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Cereal Punk : Confirmed Level",
				fr: "Cereal Punk : Niveau Confirmé",
				de: "Cereal Punk: Level Weiß",
				es: "Cereal Punk: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Cereal Punk : Green Level",
				fr: "Cereal Punk : Niveau Vert",
				de: "Cereal Punk: Level Grün",
				es: "Cereal Punk: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Cereal Punk : Orange Level",
				fr: "Cereal Punk : Niveau Orange",
				de: "Cereal Punk: Level Orange",
				es: "Cereal Punk: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Cereal Punk : Red Level",
				fr: "Cereal Punk : Niveau Rouge",
				de: "Cereal Punk: Level Rot",
				es: "Cereal Punk: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Cereal Punk : Bronze Level",
				fr: "Cereal Punk : Niveau Bronze",
				de: "Cereal Punk: Level Bronze",
				es: "Cereal Punk: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Cereal Punk : Silver Level",
				fr: "Cereal Punk : Niveau Argent",
				de: "Cereal Punk: Level Silber",
				es: "Cereal Punk: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Cereal Punk : Gold Level",
				fr: "Cereal Punk : Niveau Or",
				de: "Cereal Punk: Level Gold",
				es: "Cereal Punk: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Cereal Punk : Paradise Level",
				fr: "Cereal Punk : Niveau Paradis",
				de: "Cereal Punk: Level Paradies",
				es: "Cereal Punk: Nivel Paraíso"
			}
		}
	]
};
var game19 = {
	id: "game19",
	name: {
		en: "Hypercube Level",
		fr: "Niveau Hypercube",
		de: "Level bei Hypercube",
		es: "Nivel Hypercube"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Hypercube : Confirmed Level",
				fr: "Hypercube : Niveau Confirmé",
				de: "Hypercube: Level Weiß",
				es: "Hypercube: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Hypercube : Green Level",
				fr: "Hypercube : Niveau Vert",
				de: "Hypercube: Level Grün",
				es: "Hypercube: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Hypercube : Orange Level",
				fr: "Hypercube : Niveau Orange",
				de: "Hypercube: Level Orange",
				es: "Hypercube: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Hypercube : Red Level",
				fr: "Hypercube : Niveau Rouge",
				de: "Hypercube: Level Rot",
				es: "Hypercube: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Hypercube : Bronze Level",
				fr: "Hypercube : Niveau Bronze",
				de: "Hypercube: Level Bronze",
				es: "Hypercube: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Hypercube : Silver Level",
				fr: "Hypercube : Niveau Argent",
				de: "Hypercube: Level Silber",
				es: "Hypercube: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Hypercube : Gold Level",
				fr: "Hypercube : Niveau Or",
				de: "Hypercube: Level Gold",
				es: "Hypercube: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Hypercube : Paradise Level",
				fr: "Hypercube : Niveau Paradis",
				de: "Hypercube: Level Paradies",
				es: "Hypercube: Nivel Paraíso"
			}
		}
	]
};
var game20 = {
	id: "game20",
	name: {
		en: "K-Slash! Level",
		fr: "Niveau K-Slash !",
		de: "Level bei K-Slash !",
		es: "Nivel K-Slash !"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "K-Slash ! : Confirmed Level",
				fr: "K-Slash ! : Niveau Confirmé",
				de: "K-Slash !: Level Weiß",
				es: "K-Slash !: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "K-Slash ! : Green Level",
				fr: "K-Slash ! : Niveau Vert",
				de: "K-Slash !: Level Grün",
				es: "K-Slash !: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "K-Slash ! : Orange Level",
				fr: "K-Slash ! : Niveau Orange",
				de: "K-Slash !: Level Orange",
				es: "K-Slash !: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "K-Slash ! : Red Level",
				fr: "K-Slash ! : Niveau Rouge",
				de: "K-Slash !: Level Rot",
				es: "K-Slash !: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "K-Slash ! : Bronze Level",
				fr: "K-Slash ! : Niveau Bronze",
				de: "K-Slash !: Level Bronze",
				es: "K-Slash !: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "K-Slash ! : Silver Level",
				fr: "K-Slash ! : Niveau Argent",
				de: "K-Slash !: Level Silber",
				es: "K-Slash !: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "K-Slash ! : Gold Level",
				fr: "K-Slash ! : Niveau Or",
				de: "K-Slash !: Level Gold",
				es: "K-Slash !: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "K-Slash ! : Paradise Level",
				fr: "K-Slash ! : Niveau Paradis",
				de: "K-Slash !: Level Paradies",
				es: "K-Slash !: Nivel Paraíso"
			}
		}
	]
};
var game21 = {
	id: "game21",
	name: {
		en: "Ellon In The Dark Level",
		fr: "Niveau Ellon In The Dark",
		de: "Level bei Ellon In The Dark",
		es: "Nivel Ellon In The Dark"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Ellon In The Dark : Confirmed Level",
				fr: "Ellon In The Dark : Niveau Confirmé",
				de: "Ellon In The Dark: Level Weiß",
				es: "Ellon In The Dark: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Ellon In The Dark : Green Level",
				fr: "Ellon In The Dark : Niveau Vert",
				de: "Ellon In The Dark: Level Grün",
				es: "Ellon In The Dark: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Ellon In The Dark : Orange Level",
				fr: "Ellon In The Dark : Niveau Orange",
				de: "Ellon In The Dark: Level Orange",
				es: "Ellon In The Dark: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Ellon In The Dark : Red Level",
				fr: "Ellon In The Dark : Niveau Rouge",
				de: "Ellon In The Dark: Level Rot",
				es: "Ellon In The Dark: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Ellon In The Dark : Bronze Level",
				fr: "Ellon In The Dark : Niveau Bronze",
				de: "Ellon In The Dark: Level Bronze",
				es: "Ellon In The Dark: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Ellon In The Dark : Silver Level",
				fr: "Ellon In The Dark : Niveau Argent",
				de: "Ellon In The Dark: Level Silber",
				es: "Ellon In The Dark: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Ellon In The Dark : Gold Level",
				fr: "Ellon In The Dark : Niveau Or",
				de: "Ellon In The Dark: Level Gold",
				es: "Ellon In The Dark: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Ellon In The Dark : Paradise Level",
				fr: "Ellon In The Dark : Niveau Paradis",
				de: "Ellon In The Dark: Level Paradies",
				es: "Ellon In The Dark: Nivel Paraíso"
			}
		}
	]
};
var game22 = {
	id: "game22",
	name: {
		en: "Kaskade 2 Level",
		fr: "Niveau Kaskade 2",
		de: "Level bei Kaskade 2",
		es: "Nivel Kaskade 2"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Kaskade 2 : Confirmed Level",
				fr: "Kaskade 2 : Niveau Confirmé",
				de: "Kaskade 2: Level Weiß",
				es: "Kaskade 2: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Kaskade 2 : Green Level",
				fr: "Kaskade 2 : Niveau Vert",
				de: "Kaskade 2: Level Grün",
				es: "Kaskade 2: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Kaskade 2 : Orange Level",
				fr: "Kaskade 2 : Niveau Orange",
				de: "Kaskade 2: Level Orange",
				es: "Kaskade 2: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Kaskade 2 : Red Level",
				fr: "Kaskade 2 : Niveau Rouge",
				de: "Kaskade 2: Level Rot",
				es: "Kaskade 2: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Kaskade 2 : Bronze Level",
				fr: "Kaskade 2 : Niveau Bronze",
				de: "Kaskade 2: Level Bronze",
				es: "Kaskade 2: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Kaskade 2 : Silver Level",
				fr: "Kaskade 2 : Niveau Argent",
				de: "Kaskade 2: Level Silber",
				es: "Kaskade 2: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Kaskade 2 : Gold Level",
				fr: "Kaskade 2 : Niveau Or",
				de: "Kaskade 2: Level Gold",
				es: "Kaskade 2: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Kaskade 2 : Paradise Level",
				fr: "Kaskade 2 : Niveau Paradis",
				de: "Kaskade 2: Level Paradies",
				es: "Kaskade 2: Nivel Paraíso"
			}
		}
	]
};
var game23 = {
	id: "game23",
	name: {
		en: "Paradice Level",
		fr: "Niveau Paradice",
		de: "Level bei Paradice",
		es: "Nivel Paradice"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Paradice : Confirmed Level",
				fr: "Paradice : Niveau Confirmé",
				de: "Paradice: Level Weiß",
				es: "Paradice: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Paradice : Green Level",
				fr: "Paradice : Niveau Vert",
				de: "Paradice: Level Grün",
				es: "Paradice: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Paradice : Orange Level",
				fr: "Paradice : Niveau Orange",
				de: "Paradice: Level Orange",
				es: "Paradice: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Paradice : Red Level",
				fr: "Paradice : Niveau Rouge",
				de: "Paradice: Level Rot",
				es: "Paradice: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Paradice : Bronze Level",
				fr: "Paradice : Niveau Bronze",
				de: "Paradice: Level Bronze",
				es: "Paradice: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Paradice : Silver Level",
				fr: "Paradice : Niveau Argent",
				de: "Paradice: Level Silber",
				es: "Paradice: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Paradice : Gold Level",
				fr: "Paradice : Niveau Or",
				de: "Paradice: Level Gold",
				es: "Paradice: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Paradice : Paradise Level",
				fr: "Paradice : Niveau Paradis",
				de: "Paradice: Level Paradies",
				es: "Paradice: Nivel Paraíso"
			}
		}
	]
};
var game24 = {
	id: "game24",
	name: {
		en: "Starfang Level",
		fr: "Niveau Starfang",
		de: "Level bei Starfang",
		es: "Nivel Starfang"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Starfang : Confirmed Level",
				fr: "Starfang : Niveau Confirmé",
				de: "Starfang: Level Weiß",
				es: "Starfang: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Starfang : Green Level",
				fr: "Starfang : Niveau Vert",
				de: "Starfang: Level Grün",
				es: "Starfang: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Starfang : Orange Level",
				fr: "Starfang : Niveau Orange",
				de: "Starfang: Level Orange",
				es: "Starfang: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Starfang : Red Level",
				fr: "Starfang : Niveau Rouge",
				de: "Starfang: Level Rot",
				es: "Starfang: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Starfang : Bronze Level",
				fr: "Starfang : Niveau Bronze",
				de: "Starfang: Level Bronze",
				es: "Starfang: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Starfang : Silver Level",
				fr: "Starfang : Niveau Argent",
				de: "Starfang: Level Silber",
				es: "Starfang: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Starfang : Gold Level",
				fr: "Starfang : Niveau Or",
				de: "Starfang: Level Gold",
				es: "Starfang: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Starfang : Paradise Level",
				fr: "Starfang : Niveau Paradis",
				de: "Starfang: Level Paradies",
				es: "Starfang: Nivel Paraíso"
			}
		}
	]
};
var game25 = {
	id: "game25",
	name: {
		en: "Drakhan Level",
		fr: "Niveau Drakhan",
		de: "Level bei Drakhan",
		es: "Nivel Drakhan"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Drakhan : Confirmed Level",
				fr: "Drakhan : Niveau Confirmé",
				de: "Drakhan: Level Weiß",
				es: "Drakhan: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Drakhan : Green Level",
				fr: "Drakhan : Niveau Vert",
				de: "Drakhan: Level Grün",
				es: "Drakhan: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Drakhan : Orange Level",
				fr: "Drakhan : Niveau Orange",
				de: "Drakhan: Level Orange",
				es: "Drakhan: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Drakhan : Red Level",
				fr: "Drakhan : Niveau Rouge",
				de: "Drakhan: Level Rot",
				es: "Drakhan: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Drakhan : Bronze Level",
				fr: "Drakhan : Niveau Bronze",
				de: "Drakhan: Level Bronze",
				es: "Drakhan: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Drakhan : Silver Level",
				fr: "Drakhan : Niveau Argent",
				de: "Drakhan: Level Silber",
				es: "Drakhan: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Drakhan : Gold Level",
				fr: "Drakhan : Niveau Or",
				de: "Drakhan: Level Gold",
				es: "Drakhan: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Drakhan : Paradise Level",
				fr: "Drakhan : Niveau Paradis",
				de: "Drakhan: Level Paradies",
				es: "Drakhan: Nivel Paraíso"
			}
		}
	]
};
var game26 = {
	id: "game26",
	name: {
		en: "Red Raid Level",
		fr: "Niveau Red Raid",
		de: "Level bei Red Raid",
		es: "Nivel Red Raid"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Red Raid : Confirmed Level",
				fr: "Red Raid : Niveau Confirmé",
				de: "Red Raid: Level Weiß",
				es: "Red Raid: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Red Raid : Green Level",
				fr: "Red Raid : Niveau Vert",
				de: "Red Raid: Level Grün",
				es: "Red Raid: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Red Raid : Orange Level",
				fr: "Red Raid : Niveau Orange",
				de: "Red Raid: Level Orange",
				es: "Red Raid: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Red Raid : Red Level",
				fr: "Red Raid : Niveau Rouge",
				de: "Red Raid: Level Rot",
				es: "Red Raid: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Red Raid : Bronze Level",
				fr: "Red Raid : Niveau Bronze",
				de: "Red Raid: Level Bronze",
				es: "Red Raid: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Red Raid : Silver Level",
				fr: "Red Raid : Niveau Argent",
				de: "Red Raid: Level Silber",
				es: "Red Raid: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Red Raid : Gold Level",
				fr: "Red Raid : Niveau Or",
				de: "Red Raid: Level Gold",
				es: "Red Raid: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Red Raid : Paradise Level",
				fr: "Red Raid : Niveau Paradis",
				de: "Red Raid: Level Paradies",
				es: "Red Raid: Nivel Paraíso"
			}
		}
	]
};
var game27 = {
	id: "game27",
	name: {
		en: "Opalus Level",
		fr: "Niveau Opalus",
		de: "Level bei Opalus",
		es: "Nivel Opalus"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Opalus : Confirmed Level",
				fr: "Opalus : Niveau Confirmé",
				de: "Opalus: Level Weiß",
				es: "Opalus: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Opalus : Green Level",
				fr: "Opalus : Niveau Vert",
				de: "Opalus: Level Grün",
				es: "Opalus: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Opalus : Orange Level",
				fr: "Opalus : Niveau Orange",
				de: "Opalus: Level Orange",
				es: "Opalus: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Opalus : Red Level",
				fr: "Opalus : Niveau Rouge",
				de: "Opalus: Level Rot",
				es: "Opalus: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Opalus : Bronze Level",
				fr: "Opalus : Niveau Bronze",
				de: "Opalus: Level Bronze",
				es: "Opalus: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Opalus : Silver Level",
				fr: "Opalus : Niveau Argent",
				de: "Opalus: Level Silber",
				es: "Opalus: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Opalus : Gold Level",
				fr: "Opalus : Niveau Or",
				de: "Opalus: Level Gold",
				es: "Opalus: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Opalus : Paradise Level",
				fr: "Opalus : Niveau Paradis",
				de: "Opalus: Level Paradies",
				es: "Opalus: Nivel Paraíso"
			}
		}
	]
};
var game28 = {
	id: "game28",
	name: {
		en: "Interwheel Level",
		fr: "Niveau Interwheel",
		de: "Level bei Interwheel",
		es: "Nivel Interwheel"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Interwheel : Confirmed Level",
				fr: "Interwheel : Niveau Confirmé",
				de: "Interwheel: Level Weiß",
				es: "Interwheel: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Interwheel : Green Level",
				fr: "Interwheel : Niveau Vert",
				de: "Interwheel: Level Grün",
				es: "Interwheel: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Interwheel : Orange Level",
				fr: "Interwheel : Niveau Orange",
				de: "Interwheel: Level Orange",
				es: "Interwheel: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Interwheel : Red Level",
				fr: "Interwheel : Niveau Rouge",
				de: "Interwheel: Level Rot",
				es: "Interwheel: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Interwheel : Bronze Level",
				fr: "Interwheel : Niveau Bronze",
				de: "Interwheel: Level Bronze",
				es: "Interwheel: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Interwheel : Silver Level",
				fr: "Interwheel : Niveau Argent",
				de: "Interwheel: Level Silber",
				es: "Interwheel: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Interwheel : Gold Level",
				fr: "Interwheel : Niveau Or",
				de: "Interwheel: Level Gold",
				es: "Interwheel: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Interwheel : Paradise Level",
				fr: "Interwheel : Niveau Paradis",
				de: "Interwheel: Level Paradies",
				es: "Interwheel: Nivel Paraíso"
			}
		}
	]
};
var game29 = {
	id: "game29",
	name: {
		en: "Cyclopean Level",
		fr: "Niveau Cyclopean",
		de: "Level bei Cyclopean",
		es: "Nivel Cyclopean"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Cyclopean : Confirmed Level",
				fr: "Cyclopean : Niveau Confirmé",
				de: "Cyclopean: Level Weiß",
				es: "Cyclopean: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Cyclopean : Green Level",
				fr: "Cyclopean : Niveau Vert",
				de: "Cyclopean: Level Grün",
				es: "Cyclopean: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Cyclopean : Orange Level",
				fr: "Cyclopean : Niveau Orange",
				de: "Cyclopean: Level Orange",
				es: "Cyclopean: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Cyclopean : Red Level",
				fr: "Cyclopean : Niveau Rouge",
				de: "Cyclopean: Level Rot",
				es: "Cyclopean: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Cyclopean : Bronze Level",
				fr: "Cyclopean : Niveau Bronze",
				de: "Cyclopean: Level Bronze",
				es: "Cyclopean: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Cyclopean : Silver Level",
				fr: "Cyclopean : Niveau Argent",
				de: "Cyclopean: Level Silber",
				es: "Cyclopean: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Cyclopean : Gold Level",
				fr: "Cyclopean : Niveau Or",
				de: "Cyclopean: Level Gold",
				es: "Cyclopean: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Cyclopean : Paradise Level",
				fr: "Cyclopean : Niveau Paradis",
				de: "Cyclopean: Level Paradies",
				es: "Cyclopean: Nivel Paraíso"
			}
		}
	]
};
var game30 = {
	id: "game30",
	name: {
		en: "Popcorn Level",
		fr: "Niveau Popcorn",
		de: "Level bei Popcorn",
		es: "Nivel Popcorn"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Popcorn : Confirmed Level",
				fr: "Popcorn : Niveau Confirmé",
				de: "Popcorn: Level Weiß",
				es: "Popcorn: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Popcorn : Green Level",
				fr: "Popcorn : Niveau Vert",
				de: "Popcorn: Level Grün",
				es: "Popcorn: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Popcorn : Orange Level",
				fr: "Popcorn : Niveau Orange",
				de: "Popcorn: Level Orange",
				es: "Popcorn: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Popcorn : Red Level",
				fr: "Popcorn : Niveau Rouge",
				de: "Popcorn: Level Rot",
				es: "Popcorn: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Popcorn : Bronze Level",
				fr: "Popcorn : Niveau Bronze",
				de: "Popcorn: Level Bronze",
				es: "Popcorn: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Popcorn : Silver Level",
				fr: "Popcorn : Niveau Argent",
				de: "Popcorn: Level Silber",
				es: "Popcorn: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Popcorn : Gold Level",
				fr: "Popcorn : Niveau Or",
				de: "Popcorn: Level Gold",
				es: "Popcorn: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Popcorn : Paradise Level",
				fr: "Popcorn : Niveau Paradis",
				de: "Popcorn: Level Paradies",
				es: "Popcorn: Nivel Paraíso"
			}
		}
	]
};
var game31 = {
	id: "game31",
	name: {
		en: "Invasion Level",
		fr: "Niveau Invasion",
		de: "Level bei Invasion",
		es: "Nivel Invasion"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Invasion : Confirmed Level",
				fr: "Invasion : Niveau Confirmé",
				de: "Invasion: Level Weiß",
				es: "Invasion: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Invasion : Green Level",
				fr: "Invasion : Niveau Vert",
				de: "Invasion: Level Grün",
				es: "Invasion: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Invasion : Orange Level",
				fr: "Invasion : Niveau Orange",
				de: "Invasion: Level Orange",
				es: "Invasion: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Invasion : Red Level",
				fr: "Invasion : Niveau Rouge",
				de: "Invasion: Level Rot",
				es: "Invasion: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Invasion : Bronze Level",
				fr: "Invasion : Niveau Bronze",
				de: "Invasion: Level Bronze",
				es: "Invasion: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Invasion : Silver Level",
				fr: "Invasion : Niveau Argent",
				de: "Invasion: Level Silber",
				es: "Invasion: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Invasion : Gold Level",
				fr: "Invasion : Niveau Or",
				de: "Invasion: Level Gold",
				es: "Invasion: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Invasion : Paradise Level",
				fr: "Invasion : Niveau Paradis",
				de: "Invasion: Level Paradies",
				es: "Invasion: Nivel Paraíso"
			}
		}
	]
};
var game32 = {
	id: "game32",
	name: {
		en: "Pioutch Level",
		fr: "Niveau Pioutch",
		de: "Level bei Pioutch",
		es: "Nivel Pioutch"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Pioutch : Confirmed Level",
				fr: "Pioutch : Niveau Confirmé",
				de: "Pioutch: Level Weiß",
				es: "Pioutch: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Pioutch : Green Level",
				fr: "Pioutch : Niveau Vert",
				de: "Pioutch: Level Grün",
				es: "Pioutch: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Pioutch : Orange Level",
				fr: "Pioutch : Niveau Orange",
				de: "Pioutch: Level Orange",
				es: "Pioutch: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Pioutch : Red Level",
				fr: "Pioutch : Niveau Rouge",
				de: "Pioutch: Level Rot",
				es: "Pioutch: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Pioutch : Bronze Level",
				fr: "Pioutch : Niveau Bronze",
				de: "Pioutch: Level Bronze",
				es: "Pioutch: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Pioutch : Silver Level",
				fr: "Pioutch : Niveau Argent",
				de: "Pioutch: Level Silber",
				es: "Pioutch: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Pioutch : Gold Level",
				fr: "Pioutch : Niveau Or",
				de: "Pioutch: Level Gold",
				es: "Pioutch: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Pioutch : Paradise Level",
				fr: "Pioutch : Niveau Paradis",
				de: "Pioutch: Level Paradies",
				es: "Pioutch: Nivel Paraíso"
			}
		}
	]
};
var game33 = {
	id: "game33",
	name: {
		en: "Iron Chouquette Level",
		fr: "Niveau Iron Chouquette",
		de: "Level bei Iron Chouquette",
		es: "Nivel Iron Chouquette"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Iron Chouquette : Confirmed Level",
				fr: "Iron Chouquette : Niveau Confirmé",
				de: "Iron Chouquette: Level Weiß",
				es: "Iron Chouquette: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Iron Chouquette : Green Level",
				fr: "Iron Chouquette : Niveau Vert",
				de: "Iron Chouquette: Level Grün",
				es: "Iron Chouquette: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Iron Chouquette : Orange Level",
				fr: "Iron Chouquette : Niveau Orange",
				de: "Iron Chouquette: Level Orange",
				es: "Iron Chouquette: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Iron Chouquette : Red Level",
				fr: "Iron Chouquette : Niveau Rouge",
				de: "Iron Chouquette: Level Rot",
				es: "Iron Chouquette: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Iron Chouquette : Bronze Level",
				fr: "Iron Chouquette : Niveau Bronze",
				de: "Iron Chouquette: Level Bronze",
				es: "Iron Chouquette: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Iron Chouquette : Silver Level",
				fr: "Iron Chouquette : Niveau Argent",
				de: "Iron Chouquette: Level Silber",
				es: "Iron Chouquette: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Iron Chouquette : Gold Level",
				fr: "Iron Chouquette : Niveau Or",
				de: "Iron Chouquette: Level Gold",
				es: "Iron Chouquette: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Iron Chouquette : Paradise Level",
				fr: "Iron Chouquette : Niveau Paradis",
				de: "Iron Chouquette: Level Paradies",
				es: "Iron Chouquette: Nivel Paraíso"
			}
		}
	]
};
var game34 = {
	id: "game34",
	name: {
		en: "Oursouinvader Level",
		fr: "Niveau Oursouinvader",
		de: "Level bei Oursouinvader",
		es: "Nivel Oursouinvader"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Oursouinvader : Confirmed Level",
				fr: "Oursouinvader : Niveau Confirmé",
				de: "Oursouinvader: Level Weiß",
				es: "Oursouinvader: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Oursouinvader : Green Level",
				fr: "Oursouinvader : Niveau Vert",
				de: "Oursouinvader: Level Grün",
				es: "Oursouinvader: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Oursouinvader : Orange Level",
				fr: "Oursouinvader : Niveau Orange",
				de: "Oursouinvader: Level Orange",
				es: "Oursouinvader: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Oursouinvader : Red Level",
				fr: "Oursouinvader : Niveau Rouge",
				de: "Oursouinvader: Level Rot",
				es: "Oursouinvader: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Oursouinvader : Bronze Level",
				fr: "Oursouinvader : Niveau Bronze",
				de: "Oursouinvader: Level Bronze",
				es: "Oursouinvader: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Oursouinvader : Silver Level",
				fr: "Oursouinvader : Niveau Argent",
				de: "Oursouinvader: Level Silber",
				es: "Oursouinvader: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Oursouinvader : Gold Level",
				fr: "Oursouinvader : Niveau Or",
				de: "Oursouinvader: Level Gold",
				es: "Oursouinvader: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Oursouinvader : Paradise Level",
				fr: "Oursouinvader : Niveau Paradis",
				de: "Oursouinvader: Level Paradies",
				es: "Oursouinvader: Nivel Paraíso"
			}
		}
	]
};
var game35 = {
	id: "game35",
	name: {
		en: "Puzzle-Manda Level",
		fr: "Niveau Puzzle-Manda",
		de: "Level bei Puzzle-Manda",
		es: "Nivel Puzzle-Manda"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Puzzle-Manda : Confirmed Level",
				fr: "Puzzle-Manda : Niveau Confirmé",
				de: "Puzzle-Manda: Level Weiß",
				es: "Puzzle-Manda: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Puzzle-Manda : Green Level",
				fr: "Puzzle-Manda : Niveau Vert",
				de: "Puzzle-Manda: Level Grün",
				es: "Puzzle-Manda: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Puzzle-Manda : Orange Level",
				fr: "Puzzle-Manda : Niveau Orange",
				de: "Puzzle-Manda: Level Orange",
				es: "Puzzle-Manda: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Puzzle-Manda : Red Level",
				fr: "Puzzle-Manda : Niveau Rouge",
				de: "Puzzle-Manda: Level Rot",
				es: "Puzzle-Manda: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Puzzle-Manda : Bronze Level",
				fr: "Puzzle-Manda : Niveau Bronze",
				de: "Puzzle-Manda: Level Bronze",
				es: "Puzzle-Manda: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Puzzle-Manda : Silver Level",
				fr: "Puzzle-Manda : Niveau Argent",
				de: "Puzzle-Manda: Level Silber",
				es: "Puzzle-Manda: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Puzzle-Manda : Gold Level",
				fr: "Puzzle-Manda : Niveau Or",
				de: "Puzzle-Manda: Level Gold",
				es: "Puzzle-Manda: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Puzzle-Manda : Paradise Level",
				fr: "Puzzle-Manda : Niveau Paradis",
				de: "Puzzle-Manda: Level Paradies",
				es: "Puzzle-Manda: Nivel Paraíso"
			}
		}
	]
};
var game36 = {
	id: "game36",
	name: {
		en: "Kanji's Nightmare Level",
		fr: "Niveau Kanji's Nightmare",
		de: "Level bei Kanji's Nightmare",
		es: "Nivel Kanji's Nightmare"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Kanji's Nightmare : Confirmed Level",
				fr: "Kanji's Nightmare : Niveau Confirmé",
				de: "Kanji's Nightmare: Level Weiß",
				es: "Kanji's Nightmare: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Kanji's Nightmare : Green Level",
				fr: "Kanji's Nightmare : Niveau Vert",
				de: "Kanji's Nightmare: Level Grün",
				es: "Kanji's Nightmare: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Kanji's Nightmare : Orange Level",
				fr: "Kanji's Nightmare : Niveau Orange",
				de: "Kanji's Nightmare: Level Orange",
				es: "Kanji's Nightmare: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Kanji's Nightmare : Red Level",
				fr: "Kanji's Nightmare : Niveau Rouge",
				de: "Kanji's Nightmare: Level Rot",
				es: "Kanji's Nightmare: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Kanji's Nightmare : Bronze Level",
				fr: "Kanji's Nightmare : Niveau Bronze",
				de: "Kanji's Nightmare: Level Bronze",
				es: "Kanji's Nightmare: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Kanji's Nightmare : Silver Level",
				fr: "Kanji's Nightmare : Niveau Argent",
				de: "Kanji's Nightmare: Level Silber",
				es: "Kanji's Nightmare: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Kanji's Nightmare : Gold Level",
				fr: "Kanji's Nightmare : Niveau Or",
				de: "Kanji's Nightmare: Level Gold",
				es: "Kanji's Nightmare: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Kanji's Nightmare : Paradise Level",
				fr: "Kanji's Nightmare : Niveau Paradis",
				de: "Kanji's Nightmare: Level Paradies",
				es: "Kanji's Nightmare: Nivel Paraíso"
			}
		}
	]
};
var game37 = {
	id: "game37",
	name: {
		en: "Autrement Level",
		fr: "Niveau Autrement",
		de: "Level bei Autrement",
		es: "Nivel Autrement"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Autrement : Confirmed Level",
				fr: "Autrement : Niveau Confirmé",
				de: "Autrement: Level Weiß",
				es: "Autrement: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Autrement : Green Level",
				fr: "Autrement : Niveau Vert",
				de: "Autrement: Level Grün",
				es: "Autrement: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Autrement : Orange Level",
				fr: "Autrement : Niveau Orange",
				de: "Autrement: Level Orange",
				es: "Autrement: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Autrement : Red Level",
				fr: "Autrement : Niveau Rouge",
				de: "Autrement: Level Rot",
				es: "Autrement: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Autrement : Bronze Level",
				fr: "Autrement : Niveau Bronze",
				de: "Autrement: Level Bronze",
				es: "Autrement: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Autrement : Silver Level",
				fr: "Autrement : Niveau Argent",
				de: "Autrement: Level Silber",
				es: "Autrement: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Autrement : Gold Level",
				fr: "Autrement : Niveau Or",
				de: "Autrement: Level Gold",
				es: "Autrement: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Autrement : Paradise Level",
				fr: "Autrement : Niveau Paradis",
				de: "Autrement: Level Paradies",
				es: "Autrement: Nivel Paraíso"
			}
		}
	]
};
var game38 = {
	id: "game38",
	name: {
		en: "Atlanteine Level",
		fr: "Niveau Atlanteine",
		de: "Level bei Atlanteine",
		es: "Nivel Atlanteine"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Atlanteine : Confirmed Level",
				fr: "Atlanteine : Niveau Confirmé",
				de: "Atlanteine: Level Weiß",
				es: "Atlanteine: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Atlanteine : Green Level",
				fr: "Atlanteine : Niveau Vert",
				de: "Atlanteine: Level Grün",
				es: "Atlanteine: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Atlanteine : Orange Level",
				fr: "Atlanteine : Niveau Orange",
				de: "Atlanteine: Level Orange",
				es: "Atlanteine: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Atlanteine : Red Level",
				fr: "Atlanteine : Niveau Rouge",
				de: "Atlanteine: Level Rot",
				es: "Atlanteine: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Atlanteine : Bronze Level",
				fr: "Atlanteine : Niveau Bronze",
				de: "Atlanteine: Level Bronze",
				es: "Atlanteine: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Atlanteine : Silver Level",
				fr: "Atlanteine : Niveau Argent",
				de: "Atlanteine: Level Silber",
				es: "Atlanteine: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Atlanteine : Gold Level",
				fr: "Atlanteine : Niveau Or",
				de: "Atlanteine: Level Gold",
				es: "Atlanteine: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Atlanteine : Paradise Level",
				fr: "Atlanteine : Niveau Paradis",
				de: "Atlanteine: Level Paradies",
				es: "Atlanteine: Nivel Paraíso"
			}
		}
	]
};
var game39 = {
	id: "game39",
	name: {
		en: "Klinker Surprise Level",
		fr: "Niveau Klinker Surprise",
		de: "Level bei Klinker Surprise",
		es: "Nivel Klinker Surprise"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Klinker Surprise : Confirmed Level",
				fr: "Klinker Surprise : Niveau Confirmé",
				de: "Klinker Surprise: Level Weiß",
				es: "Klinker Surprise: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Klinker Surprise : Green Level",
				fr: "Klinker Surprise : Niveau Vert",
				de: "Klinker Surprise: Level Grün",
				es: "Klinker Surprise: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Klinker Surprise : Orange Level",
				fr: "Klinker Surprise : Niveau Orange",
				de: "Klinker Surprise: Level Orange",
				es: "Klinker Surprise: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Klinker Surprise : Red Level",
				fr: "Klinker Surprise : Niveau Rouge",
				de: "Klinker Surprise: Level Rot",
				es: "Klinker Surprise: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Klinker Surprise : Bronze Level",
				fr: "Klinker Surprise : Niveau Bronze",
				de: "Klinker Surprise: Level Bronze",
				es: "Klinker Surprise: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Klinker Surprise : Silver Level",
				fr: "Klinker Surprise : Niveau Argent",
				de: "Klinker Surprise: Level Silber",
				es: "Klinker Surprise: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Klinker Surprise : Gold Level",
				fr: "Klinker Surprise : Niveau Or",
				de: "Klinker Surprise: Level Gold",
				es: "Klinker Surprise: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Klinker Surprise : Paradise Level",
				fr: "Klinker Surprise : Niveau Paradis",
				de: "Klinker Surprise: Level Paradies",
				es: "Klinker Surprise: Nivel Paraíso"
			}
		}
	]
};
var game40 = {
	id: "game40",
	name: {
		en: "Alphabounce Level",
		fr: "Niveau Alphabounce",
		de: "Level bei Alphabounce",
		es: "Nivel Alphabounce"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Alphabounce : Confirmed Level",
				fr: "Alphabounce : Niveau Confirmé",
				de: "Alphabounce: Level Weiß",
				es: "Alphabounce: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Alphabounce : Green Level",
				fr: "Alphabounce : Niveau Vert",
				de: "Alphabounce: Level Grün",
				es: "Alphabounce: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Alphabounce : Orange Level",
				fr: "Alphabounce : Niveau Orange",
				de: "Alphabounce: Level Orange",
				es: "Alphabounce: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Alphabounce : Red Level",
				fr: "Alphabounce : Niveau Rouge",
				de: "Alphabounce: Level Rot",
				es: "Alphabounce: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Alphabounce : Bronze Level",
				fr: "Alphabounce : Niveau Bronze",
				de: "Alphabounce: Level Bronze",
				es: "Alphabounce: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Alphabounce : Silver Level",
				fr: "Alphabounce : Niveau Argent",
				de: "Alphabounce: Level Silber",
				es: "Alphabounce: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Alphabounce : Gold Level",
				fr: "Alphabounce : Niveau Or",
				de: "Alphabounce: Level Gold",
				es: "Alphabounce: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Alphabounce : Paradise Level",
				fr: "Alphabounce : Niveau Paradis",
				de: "Alphabounce: Level Paradies",
				es: "Alphabounce: Nivel Paraíso"
			}
		}
	]
};
var game41 = {
	id: "game41",
	name: {
		en: "Mini-Race Level",
		fr: "Niveau Mini-Race",
		de: "Level bei Mini-Race",
		es: "Nivel Mini-Race"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Mini-Race : Confirmed Level",
				fr: "Mini-Race : Niveau Confirmé",
				de: "Mini-Race: Level Weiß",
				es: "Mini-Race: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Mini-Race : Green Level",
				fr: "Mini-Race : Niveau Vert",
				de: "Mini-Race: Level Grün",
				es: "Mini-Race: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Mini-Race : Orange Level",
				fr: "Mini-Race : Niveau Orange",
				de: "Mini-Race: Level Orange",
				es: "Mini-Race: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Mini-Race : Red Level",
				fr: "Mini-Race : Niveau Rouge",
				de: "Mini-Race: Level Rot",
				es: "Mini-Race: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Mini-Race : Bronze Level",
				fr: "Mini-Race : Niveau Bronze",
				de: "Mini-Race: Level Bronze",
				es: "Mini-Race: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Mini-Race : Silver Level",
				fr: "Mini-Race : Niveau Argent",
				de: "Mini-Race: Level Silber",
				es: "Mini-Race: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Mini-Race : Gold Level",
				fr: "Mini-Race : Niveau Or",
				de: "Mini-Race: Level Gold",
				es: "Mini-Race: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Mini-Race : Paradise Level",
				fr: "Mini-Race : Niveau Paradis",
				de: "Mini-Race: Level Paradies",
				es: "Mini-Race: Nivel Paraíso"
			}
		}
	]
};
var game42 = {
	id: "game42",
	name: {
		en: "Travoltax Level",
		fr: "Niveau Travoltax",
		de: "Level bei Travoltax",
		es: "Nivel Travoltax"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Travoltax : Confirmed Level",
				fr: "Travoltax : Niveau Confirmé",
				de: "Travoltax: Level Weiß",
				es: "Travoltax: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Travoltax : Green Level",
				fr: "Travoltax : Niveau Vert",
				de: "Travoltax: Level Grün",
				es: "Travoltax: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Travoltax : Orange Level",
				fr: "Travoltax : Niveau Orange",
				de: "Travoltax: Level Orange",
				es: "Travoltax: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Travoltax : Red Level",
				fr: "Travoltax : Niveau Rouge",
				de: "Travoltax: Level Rot",
				es: "Travoltax: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Travoltax : Bronze Level",
				fr: "Travoltax : Niveau Bronze",
				de: "Travoltax: Level Bronze",
				es: "Travoltax: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Travoltax : Silver Level",
				fr: "Travoltax : Niveau Argent",
				de: "Travoltax: Level Silber",
				es: "Travoltax: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Travoltax : Gold Level",
				fr: "Travoltax : Niveau Or",
				de: "Travoltax: Level Gold",
				es: "Travoltax: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Travoltax : Paradise Level",
				fr: "Travoltax : Niveau Paradis",
				de: "Travoltax: Level Paradies",
				es: "Travoltax: Nivel Paraíso"
			}
		}
	]
};
var game43 = {
	id: "game43",
	name: {
		en: "Schizo Fuzz Level",
		fr: "Niveau Schizo Fuzz",
		de: "Level bei Schizo Fuzz",
		es: "Nivel Schizo Fuzz"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Schizo Fuzz : Confirmed Level",
				fr: "Schizo Fuzz : Niveau Confirmé",
				de: "Schizo Fuzz: Level Weiß",
				es: "Schizo Fuzz: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Schizo Fuzz : Green Level",
				fr: "Schizo Fuzz : Niveau Vert",
				de: "Schizo Fuzz: Level Grün",
				es: "Schizo Fuzz: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Schizo Fuzz : Orange Level",
				fr: "Schizo Fuzz : Niveau Orange",
				de: "Schizo Fuzz: Level Orange",
				es: "Schizo Fuzz: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Schizo Fuzz : Red Level",
				fr: "Schizo Fuzz : Niveau Rouge",
				de: "Schizo Fuzz: Level Rot",
				es: "Schizo Fuzz: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Schizo Fuzz : Bronze Level",
				fr: "Schizo Fuzz : Niveau Bronze",
				de: "Schizo Fuzz: Level Bronze",
				es: "Schizo Fuzz: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Schizo Fuzz : Silver Level",
				fr: "Schizo Fuzz : Niveau Argent",
				de: "Schizo Fuzz: Level Silber",
				es: "Schizo Fuzz: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Schizo Fuzz : Gold Level",
				fr: "Schizo Fuzz : Niveau Or",
				de: "Schizo Fuzz: Level Gold",
				es: "Schizo Fuzz: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Schizo Fuzz : Paradise Level",
				fr: "Schizo Fuzz : Niveau Paradis",
				de: "Schizo Fuzz: Level Paradies",
				es: "Schizo Fuzz: Nivel Paraíso"
			}
		}
	]
};
var game44 = {
	id: "game44",
	name: {
		en: "Punch-In!  Level",
		fr: "Niveau Punch-In !",
		de: "Level bei Punch-In !",
		es: "Nivel Punch-In !"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Punch-In! : Confirmed Level",
				fr: "Punch-In ! : Niveau Confirmé",
				de: "Punch-In !: Level Weiß",
				es: "Punch-In !: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Punch-In! : Green Level",
				fr: "Punch-In ! : Niveau Vert",
				de: "Punch-In !: Level Grün",
				es: "Punch-In !: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Punch-In! : Orange Level",
				fr: "Punch-In ! : Niveau Orange",
				de: "Punch-In !: Level Orange",
				es: "Punch-In !: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Punch-In! : Red Level",
				fr: "Punch-In ! : Niveau Rouge",
				de: "Punch-In !: Level Rot",
				es: "Punch-In !: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Punch-In! : Bronze Level",
				fr: "Punch-In ! : Niveau Bronze",
				de: "Punch-In !: Level Bronze",
				es: "Punch-In !: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Punch-In! : Silver Level",
				fr: "Punch-In ! : Niveau Argent",
				de: "Punch-In !: Level Silber",
				es: "Punch-In !: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Punch-In! : Gold Level",
				fr: "Punch-In ! : Niveau Or",
				de: "Punch-In !: Level Gold",
				es: "Punch-In !: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Punch-In! : Paradise Level",
				fr: "Punch-In ! : Niveau Paradis",
				de: "Punch-In !: Level Paradies",
				es: "Punch-In !: Nivel Paraíso"
			}
		}
	]
};
var game45 = {
	id: "game45",
	name: {
		en: "Tubulo Level",
		fr: "Niveau Tubulo",
		de: "Level bei Tubulo",
		es: ""
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Tubulo : Confirmed Level",
				fr: "Tubulo : Niveau Confirmé",
				de: "Tubulo: Level Weiß",
				es: ""
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Tubulo : Green Level",
				fr: "Tubulo : Niveau Vert",
				de: "Tubulo: Level Grün",
				es: ""
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Tubulo : Orange Level",
				fr: "Tubulo : Niveau Orange",
				de: "Tubulo: Level Orange",
				es: ""
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Tubulo : Red Level",
				fr: "Tubulo : Niveau Rouge",
				de: "Tubulo: Level Rot",
				es: ""
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Tubulo : Bronze Level",
				fr: "Tubulo : Niveau Bronze",
				de: "Tubulo: Level Bronze",
				es: ""
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Tubulo : Silver Level",
				fr: "Tubulo : Niveau Argent",
				de: "Tubulo: Level Silber",
				es: ""
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Tubulo : Gold Level",
				fr: "Tubulo : Niveau Or",
				de: "Tubulo: Level Gold",
				es: ""
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Tubulo : Paradise Level",
				fr: "Tubulo : Niveau Paradis",
				de: "Tubulo: Level Paradies",
				es: ""
			}
		}
	]
};
var game46 = {
	id: "game46",
	name: {
		en: "Logic'O Level",
		fr: "Niveau Logic'O",
		de: "Level bei Logic'O",
		es: "Nivel Logic'O"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Logic'O : Confirmed Level",
				fr: "Logic'O : Niveau Confirmé",
				de: "Logic'O: Level Weiß",
				es: "Logic'O: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Logic'O : Green Level",
				fr: "Logic'O : Niveau Vert",
				de: "Logic'O: Level Grün",
				es: "Logic'O: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Logic'O : Orange Level",
				fr: "Logic'O : Niveau Orange",
				de: "Logic'O: Level Orange",
				es: "Logic'O: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Logic'O : Red Level",
				fr: "Logic'O : Niveau Rouge",
				de: "Logic'O: Level Rot",
				es: "Logic'O: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Logic'O : Bronze Level",
				fr: "Logic'O : Niveau Bronze",
				de: "Logic'O: Level Bronze",
				es: "Logic'O: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Logic'O : Silver Level",
				fr: "Logic'O : Niveau Argent",
				de: "Logic'O: Level Silber",
				es: "Logic'O: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Logic'O : Gold Level",
				fr: "Logic'O : Niveau Or",
				de: "Logic'O: Level Gold",
				es: "Logic'O: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Logic'O : Paradise Level",
				fr: "Logic'O : Niveau Paradis",
				de: "Logic'O: Level Paradies",
				es: "Logic'O: Nivel Paraíso"
			}
		}
	]
};
var game47 = {
	id: "game47",
	name: {
		en: "Crepuscud Level",
		fr: "Niveau Crepuscud",
		de: "Level bei Crepuscud",
		es: "Nivel Crepuscud"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Crepuscud : Confirmed Level",
				fr: "Crepuscud : Niveau Confirmé",
				de: "Crepuscud: Level Weiß",
				es: "Crepuscud: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Crepuscud : Green Level",
				fr: "Crepuscud : Niveau Vert",
				de: "Crepuscud: Level Grün",
				es: "Crepuscud: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Crepuscud : Orange Level",
				fr: "Crepuscud : Niveau Orange",
				de: "Crepuscud: Level Orange",
				es: "Crepuscud: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Crepuscud : Red Level",
				fr: "Crepuscud : Niveau Rouge",
				de: "Crepuscud: Level Rot",
				es: "Crepuscud: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Crepuscud : Bronze Level",
				fr: "Crepuscud : Niveau Bronze",
				de: "Crepuscud: Level Bronze",
				es: "Crepuscud: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Crepuscud : Silver Level",
				fr: "Crepuscud : Niveau Argent",
				de: "Crepuscud: Level Silber",
				es: "Crepuscud: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Crepuscud : Gold Level",
				fr: "Crepuscud : Niveau Or",
				de: "Crepuscud: Level Gold",
				es: "Crepuscud: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Crepuscud : Paradise Level",
				fr: "Crepuscud : Niveau Paradis",
				de: "Crepuscud: Level Paradies",
				es: "Crepuscud: Nivel Paraíso"
			}
		}
	]
};
var game48 = {
	id: "game48",
	name: {
		en: "Electrolink Level",
		fr: "Niveau Electrolink",
		de: "Level bei Electrolink",
		es: "Nivel Electrolink"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Electrolink : Confirmed Level",
				fr: "Electrolink : Niveau Confirmé",
				de: "Electrolink: Level Weiß",
				es: "Electrolink: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Electrolink : Green Level",
				fr: "Electrolink : Niveau Vert",
				de: "Electrolink: Level Grün",
				es: "Electrolink: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Electrolink : Orange Level",
				fr: "Electrolink : Niveau Orange",
				de: "Electrolink: Level Orange",
				es: "Electrolink: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Electrolink : Red Level",
				fr: "Electrolink : Niveau Rouge",
				de: "Electrolink: Level Rot",
				es: "Electrolink: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Electrolink : Bronze Level",
				fr: "Electrolink : Niveau Bronze",
				de: "Electrolink: Level Bronze",
				es: "Electrolink: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Electrolink : Silver Level",
				fr: "Electrolink : Niveau Argent",
				de: "Electrolink: Level Silber",
				es: "Electrolink: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Electrolink : Gold Level",
				fr: "Electrolink : Niveau Or",
				de: "Electrolink: Level Gold",
				es: "Electrolink: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Electrolink : Paradise Level",
				fr: "Electrolink : Niveau Paradis",
				de: "Electrolink: Level Paradies",
				es: "Electrolink: Nivel Paraíso"
			}
		}
	]
};
var game49 = {
	id: "game49",
	name: {
		en: "Cooking Lili Level",
		fr: "Niveau Cooking Lili",
		de: "Level bei Cooking Lili",
		es: "Nivel Cooking Lili"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Cooking Lili : Confirmed Level",
				fr: "Cooking Lili : Niveau Confirmé",
				de: "Cooking Lili: Level Weiß",
				es: "Cooking Lili: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Cooking Lili : Green Level",
				fr: "Cooking Lili : Niveau Vert",
				de: "Cooking Lili: Level Grün",
				es: "Cooking Lili: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Cooking Lili : Orange Level",
				fr: "Cooking Lili : Niveau Orange",
				de: "Cooking Lili: Level Orange",
				es: "Cooking Lili: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Cooking Lili : Red Level",
				fr: "Cooking Lili : Niveau Rouge",
				de: "Cooking Lili: Level Rot",
				es: "Cooking Lili: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Cooking Lili : Bronze Level",
				fr: "Cooking Lili : Niveau Bronze",
				de: "Cooking Lili: Level Bronze",
				es: "Cooking Lili: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Cooking Lili : Silver Level",
				fr: "Cooking Lili : Niveau Argent",
				de: "Cooking Lili: Level Silber",
				es: "Cooking Lili: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Cooking Lili : Gold Level",
				fr: "Cooking Lili : Niveau Or",
				de: "Cooking Lili: Level Gold",
				es: "Cooking Lili: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Cooking Lili : Paradise Level",
				fr: "Cooking Lili : Niveau Paradis",
				de: "Cooking Lili: Level Paradies",
				es: "Cooking Lili: Nivel Paraíso"
			}
		}
	]
};
var game53 = {
	id: "game53",
	name: {
		en: "Choco-Mouche Level",
		fr: "Niveau Choco-Mouche",
		de: "Level bei Choco-Mouche",
		es: "Nivel Choco-Mouche"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Choco-Mouche : Confirmed Level",
				fr: "Choco-Mouche : Niveau Confirmé",
				de: "Choco-Mouche: Level Weiß",
				es: "Choco-Mouche: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Choco-Mouche : Green Level",
				fr: "Choco-Mouche : Niveau Vert",
				de: "Choco-Mouche: Level Grün",
				es: "Choco-Mouche: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Choco-Mouche : Orange Level",
				fr: "Choco-Mouche : Niveau Orange",
				de: "Choco-Mouche: Level Orange",
				es: "Choco-Mouche: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Choco-Mouche : Red Level",
				fr: "Choco-Mouche : Niveau Rouge",
				de: "Choco-Mouche: Level Rot",
				es: "Choco-Mouche: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Choco-Mouche : Bronze Level",
				fr: "Choco-Mouche : Niveau Bronze",
				de: "Choco-Mouche: Level Bronze",
				es: "Choco-Mouche: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Choco-Mouche : Silver Level",
				fr: "Choco-Mouche : Niveau Argent",
				de: "Choco-Mouche: Level Silber",
				es: "Choco-Mouche: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Choco-Mouche : Gold Level",
				fr: "Choco-Mouche : Niveau Or",
				de: "Choco-Mouche: Level Gold",
				es: "Choco-Mouche: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Choco-Mouche : Paradise Level",
				fr: "Choco-Mouche : Niveau Paradis",
				de: "Choco-Mouche: Level Paradies",
				es: "Choco-Mouche: Nivel Paraíso"
			}
		}
	]
};
var game55 = {
	id: "game55",
	name: {
		en: "Aqua Splash Level",
		fr: "Niveau Aqua Splash",
		de: "Level bei Aqua Splash",
		es: "Nivel Aqua Splash"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Aqua Splash : Confirmed Level",
				fr: "Aqua Splash : Niveau Confirmé",
				de: "Aqua Splash: Level Weiß",
				es: "Aqua Splash: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Aqua Splash : Green Level",
				fr: "Aqua Splash : Niveau Vert",
				de: "Aqua Splash: Level Grün",
				es: "Aqua Splash: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Aqua Splash : Orange Level",
				fr: "Aqua Splash : Niveau Orange",
				de: "Aqua Splash: Level Orange",
				es: "Aqua Splash: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Aqua Splash : Red Level",
				fr: "Aqua Splash : Niveau Rouge",
				de: "Aqua Splash: Level Rot",
				es: "Aqua Splash: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Aqua Splash : Bronze Level",
				fr: "Aqua Splash : Niveau Bronze",
				de: "Aqua Splash: Level Bronze",
				es: "Aqua Splash: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Aqua Splash : Silver Level",
				fr: "Aqua Splash : Niveau Argent",
				de: "Aqua Splash: Level Silber",
				es: "Aqua Splash: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Aqua Splash : Gold Level",
				fr: "Aqua Splash : Niveau Or",
				de: "Aqua Splash: Level Gold",
				es: "Aqua Splash: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Aqua Splash : Paradise Level",
				fr: "Aqua Splash : Niveau Paradis",
				de: "Aqua Splash: Level Paradies",
				es: "Aqua Splash: Nivel Paraíso"
			}
		}
	]
};
var game56 = {
	id: "game56",
	name: {
		en: "Tout-Caen Level",
		fr: "Niveau Tout-Caen",
		de: "Level bei Tout-Caen",
		es: "Nivel Tout-Caen"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Tout-Caen : Confirmed Level",
				fr: "Tout-Caen : Niveau Confirmé",
				de: "Tout-Caen: Level Weiß",
				es: "Tout-Caen: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Tout-Caen : Green Level",
				fr: "Tout-Caen : Niveau Vert",
				de: "Tout-Caen: Level Grün",
				es: "Tout-Caen: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Tout-Caen : Orange Level",
				fr: "Tout-Caen : Niveau Orange",
				de: "Tout-Caen: Level Orange",
				es: "Tout-Caen: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Tout-Caen : Red Level",
				fr: "Tout-Caen : Niveau Rouge",
				de: "Tout-Caen: Level Rot",
				es: "Tout-Caen: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Tout-Caen : Bronze Level",
				fr: "Tout-Caen : Niveau Bronze",
				de: "Tout-Caen: Level Bronze",
				es: "Tout-Caen: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Tout-Caen : Silver Level",
				fr: "Tout-Caen : Niveau Argent",
				de: "Tout-Caen: Level Silber",
				es: "Tout-Caen: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Tout-Caen : Gold Level",
				fr: "Tout-Caen : Niveau Or",
				de: "Tout-Caen: Level Gold",
				es: "Tout-Caen: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Tout-Caen : Paradise Level",
				fr: "Tout-Caen : Niveau Paradis",
				de: "Tout-Caen: Level Paradies",
				es: "Tout-Caen: Nivel Paraíso"
			}
		}
	]
};
var game57 = {
	id: "game57",
	name: {
		en: "Hexile Level",
		fr: "Niveau Hexile",
		de: "Level bei Hexile",
		es: "Nivel Hexile"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Hexile : Confirmed Level",
				fr: "Hexile : Niveau Confirmé",
				de: "Hexile: Level Weiß",
				es: "Hexile: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Hexile : Green Level",
				fr: "Hexile : Niveau Vert",
				de: "Hexile: Level Grün",
				es: "Hexile: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Hexile : Orange Level",
				fr: "Hexile : Niveau Orange",
				de: "Hexile: Level Orange",
				es: "Hexile: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Hexile : Red Level",
				fr: "Hexile : Niveau Rouge",
				de: "Hexile: Level Rot",
				es: "Hexile: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Hexile : Bronze Level",
				fr: "Hexile : Niveau Bronze",
				de: "Hexile: Level Bronze",
				es: "Hexile: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Hexile : Silver Level",
				fr: "Hexile : Niveau Argent",
				de: "Hexile: Level Silber",
				es: "Hexile: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Hexile : Gold Level",
				fr: "Hexile : Niveau Or",
				de: "Hexile: Level Gold",
				es: "Hexile: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Hexile : Paradise Level",
				fr: "Hexile : Niveau Paradis",
				de: "Hexile: Level Paradies",
				es: "Hexile: Nivel Paraíso"
			}
		}
	]
};
var game58 = {
	id: "game58",
	name: {
		en: "Twin Spirit Level",
		fr: "Niveau Twin Spirit",
		de: "Level bei Twin Spirit",
		es: "Nivel Twin Spirit"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Twin Spirit : Confirmed Level",
				fr: "Twin Spirit : Niveau Confirmé",
				de: "Twin Spirit: Level Weiß",
				es: "Twin Spirit: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Twin Spirit : Green Level",
				fr: "Twin Spirit : Niveau Vert",
				de: "Twin Spirit: Level Grün",
				es: "Twin Spirit: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Twin Spirit : Orange Level",
				fr: "Twin Spirit : Niveau Orange",
				de: "Twin Spirit: Level Orange",
				es: "Twin Spirit: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Twin Spirit : Red Level",
				fr: "Twin Spirit : Niveau Rouge",
				de: "Twin Spirit: Level Rot",
				es: "Twin Spirit: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Twin Spirit : Bronze Level",
				fr: "Twin Spirit : Niveau Bronze",
				de: "Twin Spirit: Level Bronze",
				es: "Twin Spirit: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Twin Spirit : Silver Level",
				fr: "Twin Spirit : Niveau Argent",
				de: "Twin Spirit: Level Silber",
				es: "Twin Spirit: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Twin Spirit : Gold Level",
				fr: "Twin Spirit : Niveau Or",
				de: "Twin Spirit: Level Gold",
				es: "Twin Spirit: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Twin Spirit : Paradise Level",
				fr: "Twin Spirit : Niveau Paradis",
				de: "Twin Spirit: Level Paradies",
				es: "Twin Spirit: Nivel Paraíso"
			}
		}
	]
};
var game59 = {
	id: "game59",
	name: {
		en: "Binary Level",
		fr: "Niveau Binary",
		de: "Level bei Binary",
		es: "Nivel Binary"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Binary : Confirmed Level",
				fr: "Binary : Niveau Confirmé",
				de: "Binary: Level Weiß",
				es: "Binary: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Binary : Green Level",
				fr: "Binary : Niveau Vert",
				de: "Binary: Level Grün",
				es: "Binary: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Binary : Orange Level",
				fr: "Binary : Niveau Orange",
				de: "Binary: Level Orange",
				es: "Binary: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Binary : Red Level",
				fr: "Binary : Niveau Rouge",
				de: "Binary: Level Rot",
				es: "Binary: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Binary : Bronze Level",
				fr: "Binary : Niveau Bronze",
				de: "Binary: Level Bronze",
				es: "Binary: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Binary : Silver Level",
				fr: "Binary : Niveau Argent",
				de: "Binary: Level Silber",
				es: "Binary: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Binary : Gold Level",
				fr: "Binary : Niveau Or",
				de: "Binary: Level Gold",
				es: "Binary: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Binary : Paradise Level",
				fr: "Binary : Niveau Paradis",
				de: "Binary: Level Paradies",
				es: "Binary: Nivel Paraíso"
			}
		}
	]
};
var game60 = {
	id: "game60",
	name: {
		en: "Synapses Level",
		fr: "Niveau Synapses",
		de: "Level bei Synapses",
		es: "Nivel Synapses"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Synapses : Confirmed Level",
				fr: "Synapses : Niveau Confirmé",
				de: "Synapses: Level Weiß",
				es: "Synapses: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Synapses : Green Level",
				fr: "Synapses : Niveau Vert",
				de: "Synapses: Level Grün",
				es: "Synapses: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Synapses : Orange Level",
				fr: "Synapses : Niveau Orange",
				de: "Synapses: Level Orange",
				es: "Synapses: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Synapses : Red Level",
				fr: "Synapses : Niveau Rouge",
				de: "Synapses: Level Rot",
				es: "Synapses: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Synapses : Bronze Level",
				fr: "Synapses : Niveau Bronze",
				de: "Synapses: Level Bronze",
				es: "Synapses: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Synapses : Silver Level",
				fr: "Synapses : Niveau Argent",
				de: "Synapses: Level Silber",
				es: "Synapses: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Synapses : Gold Level",
				fr: "Synapses : Niveau Or",
				de: "Synapses: Level Gold",
				es: "Synapses: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Synapses : Paradise Level",
				fr: "Synapses : Niveau Paradis",
				de: "Synapses: Level Paradies",
				es: "Synapses: Nivel Paraíso"
			}
		}
	]
};
var game61 = {
	id: "game61",
	name: {
		en: "Digestomax Level",
		fr: "Niveau Digestomax",
		de: "Level bei Digestomax",
		es: "Nivel Digestomax"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Digestomax : Confirmed Level",
				fr: "Digestomax : Niveau Confirmé",
				de: "Digestomax: Level Weiß",
				es: "Digestomax: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Digestomax : Green Level",
				fr: "Digestomax : Niveau Vert",
				de: "Digestomax: Level Grün",
				es: "Digestomax: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Digestomax : Orange Level",
				fr: "Digestomax : Niveau Orange",
				de: "Digestomax: Level Orange",
				es: "Digestomax: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Digestomax : Red Level",
				fr: "Digestomax : Niveau Rouge",
				de: "Digestomax: Level Rot",
				es: "Digestomax: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Digestomax : Bronze Level",
				fr: "Digestomax : Niveau Bronze",
				de: "Digestomax: Level Bronze",
				es: "Digestomax: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Digestomax : Silver Level",
				fr: "Digestomax : Niveau Argent",
				de: "Digestomax: Level Silber",
				es: "Digestomax: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Digestomax : Gold Level",
				fr: "Digestomax : Niveau Or",
				de: "Digestomax: Level Gold",
				es: "Digestomax: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Digestomax : Paradise Level",
				fr: "Digestomax : Niveau Paradis",
				de: "Digestomax: Level Paradies",
				es: "Digestomax: Nivel Paraíso"
			}
		}
	]
};
var game62 = {
	id: "game62",
	name: {
		en: "Kanji's Adventure Level",
		fr: "Niveau Kanji's Adventure",
		de: "Level bei Kanji's Adventure",
		es: "Nivel Kanji's Adventure"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Kanji's Adventure : Confirmed Level",
				fr: "Kanji's Adventure : Niveau Confirmé",
				de: "Kanji's Adventure: Level Weiß",
				es: "Kanji's Adventure: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Kanji's Adventure : Green Level",
				fr: "Kanji's Adventure : Niveau Vert",
				de: "Kanji's Adventure: Level Grün",
				es: "Kanji's Adventure: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Kanji's Adventure : Orange Level",
				fr: "Kanji's Adventure : Niveau Orange",
				de: "Kanji's Adventure: Level Orange",
				es: "Kanji's Adventure: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Kanji's Adventure : Red Level",
				fr: "Kanji's Adventure : Niveau Rouge",
				de: "Kanji's Adventure: Level Rot",
				es: "Kanji's Adventure: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Kanji's Adventure : Bronze Level",
				fr: "Kanji's Adventure : Niveau Bronze",
				de: "Kanji's Adventure: Level Bronze",
				es: "Kanji's Adventure: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Kanji's Adventure : Silver Level",
				fr: "Kanji's Adventure : Niveau Argent",
				de: "Kanji's Adventure: Level Silber",
				es: "Kanji's Adventure: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Kanji's Adventure : Gold Level",
				fr: "Kanji's Adventure : Niveau Or",
				de: "Kanji's Adventure: Level Gold",
				es: "Kanji's Adventure: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Kanji's Adventure : Paradise Level",
				fr: "Kanji's Adventure : Niveau Paradis",
				de: "Kanji's Adventure: Level Paradies",
				es: "Kanji's Adventure: Nivel Paraíso"
			}
		}
	]
};
var game63 = {
	id: "game63",
	name: {
		en: "Cosmo Crash Level",
		fr: "Niveau Cosmo Crash",
		de: "Level bei Cosmo Crash",
		es: "Nivel Cosmo Crash"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Cosmo Crash : Confirmed Level",
				fr: "Cosmo Crash : Niveau Confirmé",
				de: "Cosmo Crash: Level Weiß",
				es: "Cosmo Crash: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Cosmo Crash : Green Level",
				fr: "Cosmo Crash : Niveau Vert",
				de: "Cosmo Crash: Level Grün",
				es: "Cosmo Crash: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Cosmo Crash : Orange Level",
				fr: "Cosmo Crash : Niveau Orange",
				de: "Cosmo Crash: Level Orange",
				es: "Cosmo Crash: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Cosmo Crash : Red Level",
				fr: "Cosmo Crash : Niveau Rouge",
				de: "Cosmo Crash: Level Rot",
				es: "Cosmo Crash: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Cosmo Crash : Bronze Level",
				fr: "Cosmo Crash : Niveau Bronze",
				de: "Cosmo Crash: Level Bronze",
				es: "Cosmo Crash: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Cosmo Crash : Silver Level",
				fr: "Cosmo Crash : Niveau Argent",
				de: "Cosmo Crash: Level Silber",
				es: "Cosmo Crash: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Cosmo Crash : Gold Level",
				fr: "Cosmo Crash : Niveau Or",
				de: "Cosmo Crash: Level Gold",
				es: "Cosmo Crash: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Cosmo Crash : Paradise Level",
				fr: "Cosmo Crash : Niveau Paradis",
				de: "Cosmo Crash: Level Paradies",
				es: "Cosmo Crash: Nivel Paraíso"
			}
		}
	]
};
var game64 = {
	id: "game64",
	name: {
		en: "Kanji Gaiden Level",
		fr: "Niveau Kanji Gaiden",
		de: "Level bei Kanji Gaiden",
		es: "Nivel Kanji Gaiden"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Kanji Gaiden : Confirmed Level",
				fr: "Kanji Gaiden : Niveau Confirmé",
				de: "Kanji Gaiden: Level Weiß",
				es: "Kanji Gaiden: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Kanji Gaiden : Green Level",
				fr: "Kanji Gaiden : Niveau Vert",
				de: "Kanji Gaiden: Level Grün",
				es: "Kanji Gaiden: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Kanji Gaiden : Orange Level",
				fr: "Kanji Gaiden : Niveau Orange",
				de: "Kanji Gaiden: Level Orange",
				es: "Kanji Gaiden: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Kanji Gaiden : Red Level",
				fr: "Kanji Gaiden : Niveau Rouge",
				de: "Kanji Gaiden: Level Rot",
				es: "Kanji Gaiden: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Kanji Gaiden : Bronze Level",
				fr: "Kanji Gaiden : Niveau Bronze",
				de: "Kanji Gaiden: Level Bronze",
				es: "Kanji Gaiden: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Kanji Gaiden : Silver Level",
				fr: "Kanji Gaiden : Niveau Argent",
				de: "Kanji Gaiden: Level Silber",
				es: "Kanji Gaiden: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Kanji Gaiden : Gold Level",
				fr: "Kanji Gaiden : Niveau Or",
				de: "Kanji Gaiden: Level Gold",
				es: "Kanji Gaiden: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Kanji Gaiden : Paradise Level",
				fr: "Kanji Gaiden : Niveau Paradis",
				de: "Kanji Gaiden: Level Paradies",
				es: "Kanji Gaiden: Nivel Paraíso"
			}
		}
	]
};
var game65 = {
	id: "game65",
	name: {
		en: "Spiroule Level",
		fr: "Niveau Spiroule",
		de: "Level bei Spiroule",
		es: "Nivel Spiroule"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Spiroule : Confirmed Level",
				fr: "Spiroule : Niveau Confirmé",
				de: "Spiroule: Level Weiß",
				es: "Spiroule: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Spiroule : Green Level",
				fr: "Spiroule : Niveau Vert",
				de: "Spiroule: Level Grün",
				es: "Spiroule: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Spiroule : Orange Level",
				fr: "Spiroule : Niveau Orange",
				de: "Spiroule: Level Orange",
				es: "Spiroule: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Spiroule : Red Level",
				fr: "Spiroule : Niveau Rouge",
				de: "Spiroule: Level Rot",
				es: "Spiroule: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Spiroule : Bronze Level",
				fr: "Spiroule : Niveau Bronze",
				de: "Spiroule: Level Bronze",
				es: "Spiroule: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Spiroule : Silver Level",
				fr: "Spiroule : Niveau Argent",
				de: "Spiroule: Level Silber",
				es: "Spiroule: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Spiroule : Gold Level",
				fr: "Spiroule : Niveau Or",
				de: "Spiroule: Level Gold",
				es: "Spiroule: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Spiroule : Paradise Level",
				fr: "Spiroule : Niveau Paradis",
				de: "Spiroule: Level Paradies",
				es: "Spiroule: Nivel Paraíso"
			}
		}
	]
};
var game66 = {
	id: "game66",
	name: {
		en: "Razor Level",
		fr: "Niveau Razor",
		de: "Level bei Razor",
		es: "Nivel Razor"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Razor : Confirmed Level",
				fr: "Razor : Niveau Confirmé",
				de: "Razor: Level Weiß",
				es: "Razor: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Razor : Green Level",
				fr: "Razor : Niveau Vert",
				de: "Razor: Level Grün",
				es: "Razor: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Razor : Orange Level",
				fr: "Razor : Niveau Orange",
				de: "Razor: Level Orange",
				es: "Razor: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Razor : Red Level",
				fr: "Razor : Niveau Rouge",
				de: "Razor: Level Rot",
				es: "Razor: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Razor : Bronze Level",
				fr: "Razor : Niveau Bronze",
				de: "Razor: Level Bronze",
				es: "Razor: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Razor : Silver Level",
				fr: "Razor : Niveau Argent",
				de: "Razor: Level Silber",
				es: "Razor: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Razor : Gold Level",
				fr: "Razor : Niveau Or",
				de: "Razor: Level Gold",
				es: "Razor: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Razor : Paradise Level",
				fr: "Razor : Niveau Paradis",
				de: "Razor: Level Paradies",
				es: "Razor: Nivel Paraíso"
			}
		}
	]
};
var game67 = {
	id: "game67",
	name: {
		en: "Judo Commando Level",
		fr: "Niveau Judo Commando",
		de: "Level bei Judo Commando",
		es: "Nivel Judo Commando"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Judo Commando : Confirmed Level",
				fr: "Judo Commando : Niveau Confirmé",
				de: "Judo Commando: Level Weiß",
				es: "Judo Commando: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Judo Commando : Green Level",
				fr: "Judo Commando : Niveau Vert",
				de: "Judo Commando: Level Grün",
				es: "Judo Commando: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Judo Commando : Orange Level",
				fr: "Judo Commando : Niveau Orange",
				de: "Judo Commando: Level Orange",
				es: "Judo Commando: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Judo Commando : Red Level",
				fr: "Judo Commando : Niveau Rouge",
				de: "Judo Commando: Level Rot",
				es: "Judo Commando: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Judo Commando : Bronze Level",
				fr: "Judo Commando : Niveau Bronze",
				de: "Judo Commando: Level Bronze",
				es: "Judo Commando: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Judo Commando : Silver Level",
				fr: "Judo Commando : Niveau Argent",
				de: "Judo Commando: Level Silber",
				es: "Judo Commando: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Judo Commando : Gold Level",
				fr: "Judo Commando : Niveau Or",
				de: "Judo Commando: Level Gold",
				es: "Judo Commando: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Judo Commando : Paradise Level",
				fr: "Judo Commando : Niveau Paradis",
				de: "Judo Commando: Level Paradies",
				es: "Judo Commando: Nivel Paraíso"
			}
		}
	]
};
var game68 = {
	id: "game68",
	name: {
		en: "Chakré Bouddha Level",
		fr: "Niveau Chakré Bouddha",
		de: "Level bei Chakré Bouddha",
		es: "Nivel Chakré Bouddha"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Chakré Bouddha : Confirmed Level",
				fr: "Chakré Bouddha : Niveau Confirmé",
				de: "Chakré Bouddha: Level Weiß",
				es: "Chakré Bouddha: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Chakré Bouddha : Green Level",
				fr: "Chakré Bouddha : Niveau Vert",
				de: "Chakré Bouddha: Level Grün",
				es: "Chakré Bouddha: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Chakré Bouddha : Orange Level",
				fr: "Chakré Bouddha : Niveau Orange",
				de: "Chakré Bouddha: Level Orange",
				es: "Chakré Bouddha: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Chakré Bouddha : Red Level",
				fr: "Chakré Bouddha : Niveau Rouge",
				de: "Chakré Bouddha: Level Rot",
				es: "Chakré Bouddha: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Chakré Bouddha : Bronze Level",
				fr: "Chakré Bouddha : Niveau Bronze",
				de: "Chakré Bouddha: Level Bronze",
				es: "Chakré Bouddha: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Chakré Bouddha : Silver Level",
				fr: "Chakré Bouddha : Niveau Argent",
				de: "Chakré Bouddha: Level Silber",
				es: "Chakré Bouddha: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Chakré Bouddha : Gold Level",
				fr: "Chakré Bouddha : Niveau Or",
				de: "Chakré Bouddha: Level Gold",
				es: "Chakré Bouddha: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Chakré Bouddha : Paradise Level",
				fr: "Chakré Bouddha : Niveau Paradis",
				de: "Chakré Bouddha: Level Paradies",
				es: "Chakré Bouddha: Nivel Paraíso"
			}
		}
	]
};
var game69 = {
	id: "game69",
	name: {
		en: "K-Train Level",
		fr: "Niveau K-Train",
		de: "Level bei K-Train",
		es: "Nivel K-Train"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "K-Train : Confirmed Level",
				fr: "K-Train : Niveau Confirmé",
				de: "K-Train: Level Weiß",
				es: "K-Train: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "K-Train : Green Level",
				fr: "K-Train : Niveau Vert",
				de: "K-Train: Level Grün",
				es: "K-Train: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "K-Train : Orange Level",
				fr: "K-Train : Niveau Orange",
				de: "K-Train: Level Orange",
				es: "K-Train: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "K-Train : Red Level",
				fr: "K-Train : Niveau Rouge",
				de: "K-Train: Level Rot",
				es: "K-Train: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "K-Train : Bronze Level",
				fr: "K-Train : Niveau Bronze",
				de: "K-Train: Level Bronze",
				es: "K-Train: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "K-Train : Silver Level",
				fr: "K-Train : Niveau Argent",
				de: "K-Train: Level Silber",
				es: "K-Train: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "K-Train : Gold Level",
				fr: "K-Train : Niveau Or",
				de: "K-Train: Level Gold",
				es: "K-Train: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "K-Train : Paradise Level",
				fr: "K-Train : Niveau Paradis",
				de: "K-Train: Level Paradies",
				es: "K-Train: Nivel Paraíso"
			}
		}
	]
};
var game70 = {
	id: "game70",
	name: {
		en: "PacifiK Level",
		fr: "Niveau PacifiK",
		de: "Level bei PacifiK",
		es: "Nivel PacifiK"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "PacifiK : Confirmed Level",
				fr: "PacifiK : Niveau Confirmé",
				de: "PacifiK: Level Weiß",
				es: "PacifiK: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "PacifiK : Green Level",
				fr: "PacifiK : Niveau Vert",
				de: "PacifiK: Level Grün",
				es: "PacifiK: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "PacifiK : Orange Level",
				fr: "PacifiK : Niveau Orange",
				de: "PacifiK: Level Orange",
				es: "PacifiK: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "PacifiK : Red Level",
				fr: "PacifiK : Niveau Rouge",
				de: "PacifiK: Level Rot",
				es: "PacifiK: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "PacifiK : Bronze Level",
				fr: "PacifiK : Niveau Bronze",
				de: "PacifiK: Level Bronze",
				es: "PacifiK: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "PacifiK : Silver Level",
				fr: "PacifiK : Niveau Argent",
				de: "PacifiK: Level Silber",
				es: "PacifiK: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "PacifiK : Gold Level",
				fr: "PacifiK : Niveau Or",
				de: "PacifiK: Level Gold",
				es: "PacifiK: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "PacifiK : Paradise Level",
				fr: "PacifiK : Niveau Paradis",
				de: "PacifiK: Level Paradies",
				es: "PacifiK: Nivel Paraíso"
			}
		}
	]
};
var game71 = {
	id: "game71",
	name: {
		en: "Tianan Man Level",
		fr: "Niveau Tianan Man",
		de: "Level bei Tianan Man",
		es: "Nivel Tianan Man"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Tianan Man : Confirmed Level",
				fr: "Tianan Man : Niveau Confirmé",
				de: "Tianan Man: Level Weiß",
				es: "Tianan Man: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Tianan Man : Green Level",
				fr: "Tianan Man : Niveau Vert",
				de: "Tianan Man: Level Grün",
				es: "Tianan Man: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Tianan Man : Orange Level",
				fr: "Tianan Man : Niveau Orange",
				de: "Tianan Man: Level Orange",
				es: "Tianan Man: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Tianan Man : Red Level",
				fr: "Tianan Man : Niveau Rouge",
				de: "Tianan Man: Level Rot",
				es: "Tianan Man: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Tianan Man : Bronze Level",
				fr: "Tianan Man : Niveau Bronze",
				de: "Tianan Man: Level Bronze",
				es: "Tianan Man: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Tianan Man : Silver Level",
				fr: "Tianan Man : Niveau Argent",
				de: "Tianan Man: Level Silber",
				es: "Tianan Man: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Tianan Man : Gold Level",
				fr: "Tianan Man : Niveau Or",
				de: "Tianan Man: Level Gold",
				es: "Tianan Man: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Tianan Man : Paradise Level",
				fr: "Tianan Man : Niveau Paradis",
				de: "Tianan Man: Level Paradies",
				es: "Tianan Man: Nivel Paraíso"
			}
		}
	]
};
var game72 = {
	id: "game72",
	name: {
		en: "Opalus Factory Level",
		fr: "Niveau Opalus Factory",
		de: "Level bei Opalus Factory",
		es: "Nivel Opalus Factory"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Opalus Factory : Confirmed Level",
				fr: "Opalus Factory : Niveau Confirmé",
				de: "Opalus Factory: Level Weiß",
				es: "Opalus Factory: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Opalus Factory : Green Level",
				fr: "Opalus Factory : Niveau Vert",
				de: "Opalus Factory: Level Grün",
				es: "Opalus Factory: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Opalus Factory : Orange Level",
				fr: "Opalus Factory : Niveau Orange",
				de: "Opalus Factory: Level Orange",
				es: "Opalus Factory: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Opalus Factory : Red Level",
				fr: "Opalus Factory : Niveau Rouge",
				de: "Opalus Factory: Level Rot",
				es: "Opalus Factory: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Opalus Factory : Bronze Level",
				fr: "Opalus Factory : Niveau Bronze",
				de: "Opalus Factory: Level Bronze",
				es: "Opalus Factory: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Opalus Factory : Silver Level",
				fr: "Opalus Factory : Niveau Argent",
				de: "Opalus Factory: Level Silber",
				es: "Opalus Factory: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Opalus Factory : Gold Level",
				fr: "Opalus Factory : Niveau Or",
				de: "Opalus Factory: Level Gold",
				es: "Opalus Factory: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Opalus Factory : Paradise Level",
				fr: "Opalus Factory : Niveau Paradis",
				de: "Opalus Factory: Level Paradies",
				es: "Opalus Factory: Nivel Paraíso"
			}
		}
	]
};
var game73 = {
	id: "game73",
	name: {
		en: "Linea Level",
		fr: "Niveau Linea",
		de: "Level bei Linea",
		es: "Nivel Linea"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Linea : Confirmed Level",
				fr: "Linea : Niveau Confirmé",
				de: "Linea: Level Weiß",
				es: "Linea: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Linea : Green Level",
				fr: "Linea : Niveau Vert",
				de: "Linea: Level Grün",
				es: "Linea: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Linea : Orange Level",
				fr: "Linea : Niveau Orange",
				de: "Linea: Level Orange",
				es: "Linea: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Linea : Red Level",
				fr: "Linea : Niveau Rouge",
				de: "Linea: Level Rot",
				es: "Linea: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Linea : Bronze Level",
				fr: "Linea : Niveau Bronze",
				de: "Linea: Level Bronze",
				es: "Linea: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Linea : Silver Level",
				fr: "Linea : Niveau Argent",
				de: "Linea: Level Silber",
				es: "Linea: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Linea : Gold Level",
				fr: "Linea : Niveau Or",
				de: "Linea: Level Gold",
				es: "Linea: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Linea : Paradise Level",
				fr: "Linea : Niveau Paradis",
				de: "Linea: Level Paradies",
				es: "Linea: Nivel Paraíso"
			}
		}
	]
};
var game74 = {
	id: "game74",
	name: {
		en: "Happy Pti Tank Level",
		fr: "Niveau Happy Pti Tank",
		de: "Level bei Happy Pti Tank",
		es: "Nivel Happy Pti Tank"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Happy Pti Tank : Confirmed Level",
				fr: "Happy Pti Tank : Niveau Confirmé",
				de: "Happy Pti Tank: Level Weiß",
				es: "Happy Pti Tank: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Happy Pti Tank : Green Level",
				fr: "Happy Pti Tank : Niveau Vert",
				de: "Happy Pti Tank: Level Grün",
				es: "Happy Pti Tank: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Happy Pti Tank : Orange Level",
				fr: "Happy Pti Tank : Niveau Orange",
				de: "Happy Pti Tank: Level Orange",
				es: "Happy Pti Tank: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Happy Pti Tank : Red Level",
				fr: "Happy Pti Tank : Niveau Rouge",
				de: "Happy Pti Tank: Level Rot",
				es: "Happy Pti Tank: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Happy Pti Tank : Bronze Level",
				fr: "Happy Pti Tank : Niveau Bronze",
				de: "Happy Pti Tank: Level Bronze",
				es: "Happy Pti Tank: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Happy Pti Tank : Silver Level",
				fr: "Happy Pti Tank : Niveau Argent",
				de: "Happy Pti Tank: Level Silber",
				es: "Happy Pti Tank: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Happy Pti Tank : Gold Level",
				fr: "Happy Pti Tank : Niveau Or",
				de: "Happy Pti Tank: Level Gold",
				es: "Happy Pti Tank: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Happy Pti Tank : Paradise Level",
				fr: "Happy Pti Tank : Niveau Paradis",
				de: "Happy Pti Tank: Level Paradies",
				es: "Happy Pti Tank: Nivel Paraíso"
			}
		}
	]
};
var game75 = {
	id: "game75",
	name: {
		en: "Phagocytoz Level",
		fr: "Niveau Phagocytoz",
		de: "Level bei Phagocytoz",
		es: "Nivel Phagocytoz"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Phagocytoz : Confirmed Level",
				fr: "Phagocytoz : Niveau Confirmé",
				de: "Phagocytoz: Level Weiß",
				es: "Phagocytoz: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Phagocytoz : Green Level",
				fr: "Phagocytoz : Niveau Vert",
				de: "Phagocytoz: Level Grün",
				es: "Phagocytoz: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Phagocytoz : Orange Level",
				fr: "Phagocytoz : Niveau Orange",
				de: "Phagocytoz: Level Orange",
				es: "Phagocytoz: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Phagocytoz : Red Level",
				fr: "Phagocytoz : Niveau Rouge",
				de: "Phagocytoz: Level Rot",
				es: "Phagocytoz: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Phagocytoz : Bronze Level",
				fr: "Phagocytoz : Niveau Bronze",
				de: "Phagocytoz: Level Bronze",
				es: "Phagocytoz: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Phagocytoz : Silver Level",
				fr: "Phagocytoz : Niveau Argent",
				de: "Phagocytoz: Level Silber",
				es: "Phagocytoz: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Phagocytoz : Gold Level",
				fr: "Phagocytoz : Niveau Or",
				de: "Phagocytoz: Level Gold",
				es: "Phagocytoz: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Phagocytoz : Paradise Level",
				fr: "Phagocytoz : Niveau Paradis",
				de: "Phagocytoz: Level Paradies",
				es: "Phagocytoz: Nivel Paraíso"
			}
		}
	]
};
var game76 = {
	id: "game76",
	name: {
		en: "Alchimie Level",
		fr: "Niveau Alchimie",
		de: "Level bei Alchimie",
		es: "Nivel Alchimie"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Alchimie : Confirmed Level",
				fr: "Alchimie : Niveau Confirmé",
				de: "Alchimie: Level Weiß",
				es: "Alchimie: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "Alchimie : Green Level",
				fr: "Alchimie : Niveau Vert",
				de: "Alchimie: Level Grün",
				es: "Alchimie: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "Alchimie : Orange Level",
				fr: "Alchimie : Niveau Orange",
				de: "Alchimie: Level Orange",
				es: "Alchimie: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "Alchimie : Red Level",
				fr: "Alchimie : Niveau Rouge",
				de: "Alchimie: Level Rot",
				es: "Alchimie: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Alchimie : Bronze Level",
				fr: "Alchimie : Niveau Bronze",
				de: "Alchimie: Level Bronze",
				es: "Alchimie: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "Alchimie : Silver Level",
				fr: "Alchimie : Niveau Argent",
				de: "Alchimie: Level Silber",
				es: "Alchimie: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "Alchimie : Gold Level",
				fr: "Alchimie : Niveau Or",
				de: "Alchimie: Level Gold",
				es: "Alchimie: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "Alchimie : Paradise Level",
				fr: "Alchimie : Niveau Paradis",
				de: "Alchimie: Level Paradies",
				es: "Alchimie: Nivel Paraíso"
			}
		}
	]
};
var game77 = {
	id: "game77",
	name: {
		en: "El Tortuga nemesis Level",
		fr: "Niveau El Tortuga nemesis",
		de: "Level bei El Tortuga nemesis",
		es: "Nivel El Tortuga nemesis"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "El Tortuga nemesis : Confirmed Level",
				fr: "El Tortuga nemesis : Niveau Confirmé",
				de: "El Tortuga nemesis: Level Weiß",
				es: "El Tortuga nemesis: Nivel Iniciado"
			}
		},
		{
			count: 2,
			points: 2,
			title: {
				en: "El Tortuga nemesis : Green Level",
				fr: "El Tortuga nemesis : Niveau Vert",
				de: "El Tortuga nemesis: Level Grün",
				es: "El Tortuga nemesis: Nivel Verde"
			}
		},
		{
			count: 3,
			points: 3,
			title: {
				en: "El Tortuga nemesis : Orange Level",
				fr: "El Tortuga nemesis : Niveau Orange",
				de: "El Tortuga nemesis: Level Orange",
				es: "El Tortuga nemesis: Nivel Naranja"
			}
		},
		{
			count: 4,
			points: 4,
			title: {
				en: "El Tortuga nemesis : Red Level",
				fr: "El Tortuga nemesis : Niveau Rouge",
				de: "El Tortuga nemesis: Level Rot",
				es: "El Tortuga nemesis: Nivel Rojo"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "El Tortuga nemesis : Bronze Level",
				fr: "El Tortuga nemesis : Niveau Bronze",
				de: "El Tortuga nemesis: Level Bronze",
				es: "El Tortuga nemesis: Nivel Bronce"
			}
		},
		{
			count: 6,
			points: 6,
			title: {
				en: "El Tortuga nemesis : Silver Level",
				fr: "El Tortuga nemesis : Niveau Argent",
				de: "El Tortuga nemesis: Level Silber",
				es: "El Tortuga nemesis: Nivel Plata"
			}
		},
		{
			count: 7,
			points: 7,
			title: {
				en: "El Tortuga nemesis : Gold Level",
				fr: "El Tortuga nemesis : Niveau Or",
				de: "El Tortuga nemesis: Level Gold",
				es: "El Tortuga nemesis: Nivel Oro"
			}
		},
		{
			count: 8,
			points: 8,
			title: {
				en: "El Tortuga nemesis : Paradise Level",
				fr: "El Tortuga nemesis : Niveau Paradis",
				de: "El Tortuga nemesis: Level Paradies",
				es: "El Tortuga nemesis: Nivel Paraíso"
			}
		}
	]
};
var kadokadoJson = {
	unlockedGames: unlockedGames,
	wonGift: wonGift,
	missionSteps: missionSteps,
	joinedClan: joinedClan,
	createdClan: createdClan,
	wing: wing,
	clanDefense: clanDefense,
	clanAttack: clanAttack,
	game1: game1,
	game2: game2,
	game3: game3,
	game4: game4,
	game5: game5,
	game6: game6,
	game7: game7,
	game8: game8,
	game9: game9,
	game10: game10,
	game11: game11,
	game12: game12,
	game13: game13,
	game14: game14,
	game15: game15,
	game16: game16,
	game17: game17,
	game18: game18,
	game19: game19,
	game20: game20,
	game21: game21,
	game22: game22,
	game23: game23,
	game24: game24,
	game25: game25,
	game26: game26,
	game27: game27,
	game28: game28,
	game29: game29,
	game30: game30,
	game31: game31,
	game32: game32,
	game33: game33,
	game34: game34,
	game35: game35,
	game36: game36,
	game37: game37,
	game38: game38,
	game39: game39,
	game40: game40,
	game41: game41,
	game42: game42,
	game43: game43,
	game44: game44,
	game45: game45,
	game46: game46,
	game47: game47,
	game48: game48,
	game49: game49,
	game53: game53,
	game55: game55,
	game56: game56,
	game57: game57,
	game58: game58,
	game59: game59,
	game60: game60,
	game61: game61,
	game62: game62,
	game63: game63,
	game64: game64,
	game65: game65,
	game66: game66,
	game67: game67,
	game68: game68,
	game69: game69,
	game70: game70,
	game71: game71,
	game72: game72,
	game73: game73,
	game74: game74,
	game75: game75,
	game76: game76,
	game77: game77
};

var empero = {
	id: "empero",
	name: {
		en: "Emperor",
		fr: "Empereur",
		de: "Kaiser",
		es: "Emperador"
	},
	rare: 3,
	unlocks: [
		{
			count: 1,
			points: 20,
			icon: "l_emperor.png",
			description: {
				en: "Become an Emperor!",
				fr: "Obtenu le titre d'Empereur !",
				de: "Du wurdest zum Kaiser gekrönt!",
				es: "Lleva el título de Emperador."
			}
		}
	]
};
var king = {
	id: "king",
	name: {
		en: "King",
		fr: "Roi",
		de: "König",
		es: "Rey"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "l_king.png",
			description: {
				en: "Become a King!",
				fr: "Obtenu le titre de Roi !",
				de: "Du wurdest zum König gekrönt!",
				es: "Lleva el título de Rey."
			}
		}
	]
};
var food = {
	id: "food",
	name: {
		en: "Waste of Food",
		fr: "Gaspillage de Nourriture",
		de: "Nahrungsproduzent",
		es: "Desperdicio de Alimentos"
	},
	rare: 0,
	unlocks: [
		{
			count: 5000,
			points: 5,
			icon: "small/res_food.gif"
		},
		{
			count: 100000,
			points: 3,
			suffix: true,
			title: {
				en: "Greedy Guts",
				fr: "Macdo",
				de: "bei McDonald's",
				es: "Hambrunator"
			}
		}
	]
};
var gold = {
	id: "gold",
	name: {
		en: "Waste of Gold",
		fr: "Gaspillage d'Or",
		de: "Goldfinger",
		es: "Desperdicio de Oro"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 5,
			icon: "small/res_gold.gif"
		},
		{
			count: 50000,
			points: 10,
			suffix: true,
			title: {
				en: "Rogue Trader",
				fr: "gaspillage",
				de: "aus Fort Knox",
				es: "Despilfarrador"
			}
		}
	]
};
var wood = {
	id: "wood",
	name: {
		en: "Waste of Wood",
		fr: "Gaspillage de Bois",
		de: "Holzfäller",
		es: "Desperdicio de Madera"
	},
	rare: 0,
	unlocks: [
		{
			count: 20000,
			points: 5,
			icon: "small/res_wood.gif"
		},
		{
			count: 50000,
			points: 3,
			suffix: true,
			title: {
				en: "Eco-Enemy",
				fr: "Kyoto",
				de: "wie im Amazonas",
				es: "Anti-Ecológico"
			}
		}
	]
};
var metal = {
	id: "metal",
	name: {
		en: "Metal Mining",
		fr: "Miné du Métal",
		de: "Metallurge",
		es: "Mina de Metal"
	},
	rare: 1,
	unlocks: [
		{
			count: 1000,
			points: 3,
			icon: "small/res_metal.gif",
			title: {
				en: "Novice Miner",
				fr: "Mineur Débutant",
				de: "Junger Minenarbeiter",
				es: "Minero Debutante"
			}
		},
		{
			count: 3000,
			points: 8,
			prefix: true,
			title: {
				en: "Miner",
				fr: "Mineur",
				de: "Minenarbeiter",
				es: "Minero"
			}
		}
	]
};
var lin = {
	id: "lin",
	name: {
		en: "Cotton Harvest",
		fr: "Récolte de Lin",
		de: "Baumwollernter",
		es: "Recolección de Lino"
	},
	rare: 1,
	unlocks: [
		{
			count: 2000,
			points: 3,
			icon: "small/res_lin.gif",
			title: {
				en: "Novice Weaver",
				fr: "Tisseur Débutant",
				de: "Weber",
				es: "Tejedor debutante"
			}
		},
		{
			count: 5000,
			points: 8,
			prefix: true,
			title: {
				en: "Weaver",
				fr: "Tisseur",
				de: "Meisterweber",
				es: "Tejedor"
			}
		}
	]
};
var horse = {
	id: "horse",
	name: {
		en: "Horse Taming",
		fr: "Apprivoisé des chevaux",
		de: "Pferdenarr",
		es: "Cría de caballos"
	},
	rare: 1,
	unlocks: [
		{
			count: 500,
			points: 3,
			icon: "small/res_horse.gif",
			title: {
				en: "Novice Tamer",
				fr: "Eleveur Débutant",
				de: "Junger Pferdezüchter",
				es: "Criador Debutante"
			}
		},
		{
			count: 2000,
			points: 8,
			prefix: true,
			title: {
				en: "Whisperer",
				fr: "Eleveur",
				de: "Meisterzüchter",
				es: "Criador"
			}
		}
	]
};
var kingdomJson = {
	empero: empero,
	king: king,
	food: food,
	gold: gold,
	wood: wood,
	metal: metal,
	lin: lin,
	horse: horse
};

var lava = {
	id: "lava",
	name: {
		en: "Death by Lava",
		fr: "Morts par lave",
		de: "In der Lava verbrannt",
		es: "Muertos en lava"
	},
	rare: 0,
	unlocks: [
	]
};
var water = {
	id: "water",
	name: {
		en: "Drank Kiji Water",
		fr: "Eau vitales bues",
		de: "Wasser getrunken",
		es: "Aguas vitales bebidas"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 100,
			points: 2,
			prefix: true,
			title: {
				en: "Drinker",
				fr: "Buveur",
				de: "Schluckspecht",
				es: "Bebedor"
			}
		}
	]
};
var swim = {
	id: "swim",
	name: {
		en: "Drowned",
		fr: "Morts par noyade",
		de: "Ertrunken",
		es: "Muertos ahogados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "bouee.png"
		}
	]
};
var dtc = {
	id: "dtc",
	name: {
		en: "Used Teleporter",
		fr: "DTC Utilisés",
		de: "Teleporter benutzt",
		es: "DTC utilizados"
	},
	rare: 0,
	unlocks: [
	]
};
var photo = {
	id: "photo",
	name: {
		en: "Photos Saved",
		fr: "Photos Enregistrées",
		de: "Gespeicherte Fotos",
		es: "Fotos guardadas"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 2,
			icon: "photo.gif"
		}
	]
};
var days = {
	id: "days",
	name: {
		en: "Days of Rent",
		fr: "Jours de location",
		de: "Tage gemietet",
		es: "Días de alquiler"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "locked.gif"
		}
	]
};
var telep = {
	id: "telep",
	name: {
		en: "Teleportations",
		fr: "Téléportations",
		de: "Teleportationen",
		es: "Teleportaciones"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "home.gif"
		}
	]
};
var zones = {
	id: "zones",
	name: {
		en: "Zones Discovered",
		fr: "Zones Découvertes",
		de: "Entdeckte Zonen",
		es: "Zonas descubiertas"
	},
	rare: 1,
	unlocks: [
		{
			count: 25,
			points: 2,
			icon: "map1.png"
		},
		{
			count: 250,
			points: 5,
			icon: "map2.png"
		},
		{
			count: 2500,
			points: 10,
			icon: "map3.png"
		},
		{
			count: 25000,
			points: 15,
			prefix: true,
			title: {
				en: "Cartographer",
				fr: "Cartographe",
				de: "Kartograph",
				es: "Cartógrafo"
			}
		}
	]
};
var chest = {
	id: "chest",
	name: {
		en: "Chests Opened",
		fr: "Coffres Ouverts",
		de: "Geöffnete Truhen",
		es: "Cofres abiertos"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 5,
			icon: "play.gif"
		}
	]
};
var build = {
	id: "build",
	name: {
		en: "Megakubes Built",
		fr: "Mégakubes transmutés",
		de: "Gebaute Mega-Kubes",
		es: "Megacubos convertidos"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 2,
			icon: "unlocked.gif"
		}
	]
};
var kubes = {
	id: "kubes",
	name: {
		en: "Kubes Discovered",
		fr: "Kubes découverts",
		de: "Entdeckte Kubes",
		es: "Cubos descubiertos"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 2,
			icon: "decouverte1.png"
		},
		{
			count: 40,
			points: 5,
			icon: "decouverte2.png"
		},
		{
			count: 60,
			points: 10,
			prefix: true,
			suffix: true,
			title: {
				en: "Kubed",
				fr: "kubes",
				de: "Würfel",
				es: "cubos"
			}
		}
	]
};
var action = {
	id: "action",
	name: {
		en: "Kubes Picked Up/Dropped",
		fr: "Kube pris/posés",
		de: "Eingesammelte/abgelegte Kubes",
		es: "Cubos cogidos/colocados"
	},
	rare: 1,
	unlocks: [
		{
			count: 500,
			points: 2,
			icon: "pose1.png"
		},
		{
			count: 5000,
			points: 5,
			icon: "pose2.png"
		},
		{
			count: 50000,
			points: 10,
			icon: "pose3.png"
		},
		{
			count: 500000,
			points: 15,
			prefix: true,
			title: {
				en: "Architect",
				fr: "Architecte",
				de: "Architekt",
				es: "Arquitecto"
			}
		}
	]
};
var kubeJson = {
	lava: lava,
	water: water,
	swim: swim,
	dtc: dtc,
	photo: photo,
	days: days,
	telep: telep,
	zones: zones,
	chest: chest,
	build: build,
	kubes: kubes,
	action: action
};

var perfec = {
	id: "perfec",
	name: {
		en: "Perfect",
		fr: "Perfect!",
		de: "Perfekt!",
		es: "¡Perfecto!"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			suffix: true,
			title: {
				en: "Flawless",
				fr: "sans accroc",
				de: "ohne Zwischenfälle",
				es: "Magnífico"
			}
		}
	]
};
var dodge = {
	id: "dodge",
	name: {
		en: "Dodge",
		fr: "Esquive",
		de: "Ausweichen",
		es: "Amago"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			suffix: true,
			title: {
				en: "Into The Sky",
				fr: "into the sky",
				de: "am Himmel",
				es: "Veloz"
			}
		}
	]
};
var parade = {
	id: "parade",
	name: {
		en: "Show",
		fr: "Parade",
		de: "Show",
		es: "Parada"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			suffix: true,
			title: {
				en: "Falcon",
				fr: "faucon",
				de: "Falke",
				es: "Duro"
			}
		}
	]
};
var disarm = {
	id: "disarm",
	name: {
		en: "Disarmament",
		fr: "Désarmement",
		de: "Entwaffnung",
		es: "Desarme"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			suffix: true,
			title: {
				en: "Peacemaker",
				fr: "pacificateur",
				de: "Friedensstifter",
				es: "Pacificador"
			}
		}
	]
};
var ripost = {
	id: "ripost",
	name: {
		en: "Replies",
		fr: "Rispostes",
		de: "Gegenschläge",
		es: "Réplica"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			suffix: true,
			title: {
				en: "Avenger",
				fr: "vengeur",
				de: "voller Rachsucht",
				es: "Vengador"
			}
		}
	]
};
var countr = {
	id: "countr",
	name: {
		en: "Counter Attacks",
		fr: "Contre-Attaques",
		de: "Gegenangriffe",
		es: "Contrataques"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			suffix: true,
			title: {
				en: "Damages",
				fr: "abimes",
				de: "am Abgrund",
				es: "Sin Piedad"
			}
		}
	]
};
var folfra = {
	id: "folfra",
	name: {
		en: "Animal Exterminator",
		fr: "Exterminateur d'Animaux",
		de: "Tierzerstörer",
		es: "Exterminador de animales"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			prefix: true,
			title: {
				en: "Trapper",
				fr: "Trappeur",
				de: "Trapper",
				es: "Cazador"
			}
		}
	]
};
var barbar = {
	id: "barbar",
	name: {
		en: "Barbarian",
		fr: "Barbare",
		de: "Barbar",
		es: "Bárbaro"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			prefix: true,
			title: {
				en: "Barbaric",
				fr: "Barbare",
				de: "Barbar",
				es: "Bárbaro"
			}
		}
	]
};
var brute = {
	id: "brute",
	name: {
		en: "Brute",
		fr: "Brute",
		de: "Brutalo",
		es: "Bruto"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			prefix: true,
			title: {
				en: "Brutal",
				fr: "Brute",
				de: "Brutalo",
				es: "Bruto"
			}
		}
	]
};
var tornad = {
	id: "tornad",
	name: {
		en: "Tornado",
		fr: "Tornade",
		de: "Tornado",
		es: "Tornado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			prefix: true,
			title: {
				en: "Whirlwind",
				fr: "Vol-au-vent",
				de: "Vom Winde verweht",
				es: "Genio"
			}
		}
	]
};
var dca = {
	id: "dca",
	name: {
		en: "Missile",
		fr: "Projectiles",
		de: "Projektile",
		es: "Proyectiles"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			prefix: true,
			title: {
				en: "Ninja",
				fr: "Ninja",
				de: "Ninja",
				es: "Ninja"
			}
		}
	]
};
var legend = {
	id: "legend",
	name: {
		en: "Legendary",
		fr: "Légendaire",
		de: "Legendär",
		es: "Legendario"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 20,
			suffix: true,
			title: {
				en: "legendary",
				fr: "légendaire",
				de: "aus Legenden",
				es: "Legendario"
			}
		}
	]
};
var pro = {
	id: "pro",
	name: {
		en: "Severed Ears",
		fr: "Oreilles Coupées",
		de: "Ohrringe",
		es: "Orejas cortadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "oreille.gif"
		},
		{
			count: 3,
			points: 10,
			icon: "oreille_or.gif"
		},
		{
			count: 10,
			points: 15,
			prefix: true,
			title: {
				en: "Nero",
				fr: "Oreiller",
				de: "Nero",
				es: "Cortaorejas"
			}
		}
	]
};
var labruteJson = {
	perfec: perfec,
	dodge: dodge,
	parade: parade,
	disarm: disarm,
	ripost: ripost,
	countr: countr,
	folfra: folfra,
	barbar: barbar,
	brute: brute,
	tornad: tornad,
	dca: dca,
	legend: legend,
	pro: pro
};

var plays = {
	id: "plays",
	name: {
		en: "Parties Jouées",
		fr: "Parties Jouées",
		de: "Parties Jouées",
		es: "Parties Jouées"
	},
	rare: 0,
	unlocks: [
		{
			count: 200,
			points: 5,
			icon: "a2.png"
		}
	]
};
var wins = {
	id: "wins",
	name: {
		en: "Victoires",
		fr: "Victoires",
		de: "Victoires",
		es: "Victoires"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "bronze.png"
		},
		{
			count: 100,
			points: 0,
			icon: "gold.png"
		},
		{
			count: 200,
			points: 0,
			prefix: true,
			title: {
				en: "Mouton",
				fr: "Mouton",
				de: "Mouton",
				es: "Mouton"
			}
		}
	]
};
var pchelm = {
	id: "pchelm",
	name: {
		en: "Petit Chelem",
		fr: "Petit Chelem",
		de: "Petit Chelem",
		es: "Petit Chelem"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "a1.png"
		}
	]
};
var chelem = {
	id: "chelem",
	name: {
		en: "Grand Chelem",
		fr: "Grand Chelem",
		de: "Grand Chelem",
		es: "Grand Chelem"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "a0.png"
		},
		{
			count: 30,
			points: 5,
			icon: "sheep.png"
		}
	]
};
var good = {
	id: "good",
	name: {
		en: "Majorités",
		fr: "Majorités",
		de: "Majorités",
		es: "Majorités"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 0,
			suffix: true,
			title: {
				en: "majoritaire",
				fr: "majoritaire",
				de: "majoritaire",
				es: "majoritaire"
			}
		}
	]
};
var bad = {
	id: "bad",
	name: {
		en: "Minorités",
		fr: "Minorités",
		de: "Minorités",
		es: "Minorités"
	},
	rare: 0,
	unlocks: [
		{
			count: 2000,
			points: 5,
			suffix: true,
			title: {
				en: "minoritaire",
				fr: "minoritaire",
				de: "minoritaire",
				es: "minoritaire"
			}
		}
	]
};
var unani1 = {
	id: "unani1",
	name: {
		en: "Unanimité à 10",
		fr: "Unanimité à 10",
		de: "Unanimité à 10",
		es: "Unanimité à 10"
	},
	rare: 0,
	unlocks: [
	]
};
var unani2 = {
	id: "unani2",
	name: {
		en: "Unanimité à 20",
		fr: "Unanimité à 20",
		de: "Unanimité à 20",
		es: "Unanimité à 20"
	},
	rare: 0,
	unlocks: [
	]
};
var unani3 = {
	id: "unani3",
	name: {
		en: "Mégunanimité",
		fr: "Mégunanimité",
		de: "Mégunanimité",
		es: "Mégunanimité"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "leader.png"
		}
	]
};
var eq$1 = {
	id: "eq",
	name: {
		en: "Egalités",
		fr: "Egalités",
		de: "Egalités",
		es: "Egalités"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 10,
			suffix: true,
			title: {
				en: "égalitaire",
				fr: "égalitaire",
				de: "égalitaire",
				es: "égalitaire"
			}
		}
	]
};
var mdr1 = {
	id: "mdr1",
	name: {
		en: "S'amuse tout seul",
		fr: "S'amuse tout seul",
		de: "S'amuse tout seul",
		es: "S'amuse tout seul"
	},
	rare: 0,
	unlocks: [
	]
};
var mdr2 = {
	id: "mdr2",
	name: {
		en: "Amusant",
		fr: "Amusant",
		de: "Amusant",
		es: "Amusant"
	},
	rare: 0,
	unlocks: [
	]
};
var mdr3 = {
	id: "mdr3",
	name: {
		en: "Rire général",
		fr: "Rire général",
		de: "Rire général",
		es: "Rire général"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 5,
			icon: "mdr.png"
		}
	]
};
var ten = {
	id: "ten",
	name: {
		en: "Seul contre Dix",
		fr: "Seul contre Dix",
		de: "Seul contre Dix",
		es: "Seul contre Dix"
	},
	rare: 0,
	unlocks: [
	]
};
var twenty = {
	id: "twenty",
	name: {
		en: "Seul contre Vingt",
		fr: "Seul contre Vingt",
		de: "Seul contre Vingt",
		es: "Seul contre Vingt"
	},
	rare: 0,
	unlocks: [
	]
};
var alone = {
	id: "alone",
	name: {
		en: "Seul contre Tous",
		fr: "Seul contre Tous",
		de: "Seul contre Tous",
		es: "Seul contre Tous"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "alone.png"
		}
	]
};
var majorityJson = {
	plays: plays,
	wins: wins,
	pchelm: pchelm,
	chelem: chelem,
	good: good,
	bad: bad,
	unani1: unani1,
	unani2: unani2,
	unani3: unani3,
	eq: eq$1,
	mdr1: mdr1,
	mdr2: mdr2,
	mdr3: mdr3,
	ten: ten,
	twenty: twenty,
	alone: alone
};

var bfacet = {
	id: "bfacet",
	name: {
		en: "Balle a Facettes",
		fr: "Balle a Facettes",
		de: "Balle a Facettes",
		es: "Balle a Facettes"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "6072e.gif"
		}
	]
};
var bnorma = {
	id: "bnorma",
	name: {
		en: "Bumper Classique",
		fr: "Bumper Classique",
		de: "Bumper Classique",
		es: "Bumper Classique"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "2177c.gif"
		}
	]
};
var btime = {
	id: "btime",
	name: {
		en: "Bumper Temps",
		fr: "Bumper Temps",
		de: "Bumper Temps",
		es: "Bumper Temps"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "e0f57.gif"
		}
	]
};
var bdeath = {
	id: "bdeath",
	name: {
		en: "Bumper Mortel",
		fr: "Bumper Mortel",
		de: "Bumper Mortel",
		es: "Bumper Mortel"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "9e3f8.gif"
		}
	]
};
var bmagne = {
	id: "bmagne",
	name: {
		en: "Bumper Magnetique",
		fr: "Bumper Magnetique",
		de: "Bumper Magnetique",
		es: "Bumper Magnetique"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "a1a82.gif"
		}
	]
};
var bshado = {
	id: "bshado",
	name: {
		en: "Bumper Invisible",
		fr: "Bumper Invisible",
		de: "Bumper Invisible",
		es: "Bumper Invisible"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "b703b.gif"
		}
	]
};
var oeil = {
	id: "oeil",
	name: {
		en: "Oeil du Poulpe",
		fr: "Oeil du Poulpe",
		de: "Oeil du Poulpe",
		es: "Oeil du Poulpe"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "84547.gif"
		}
	]
};
var masque = {
	id: "masque",
	name: {
		en: "Masque de TourneBoule",
		fr: "Masque de TourneBoule",
		de: "Masque de TourneBoule",
		es: "Masque de TourneBoule"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "adfc0.gif"
		}
	]
};
var ecaz = {
	id: "ecaz",
	name: {
		en: "Ecaille Eau",
		fr: "Ecaille Eau",
		de: "Ecaille Eau",
		es: "Ecaille Eau"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "22897.gif"
		}
	]
};
var eca1 = {
	id: "eca1",
	name: {
		en: "Ecaille Feu",
		fr: "Ecaille Feu",
		de: "Ecaille Feu",
		es: "Ecaille Feu"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "37028.gif"
		}
	]
};
var eca2 = {
	id: "eca2",
	name: {
		en: "Ecaille Air",
		fr: "Ecaille Air",
		de: "Ecaille Air",
		es: "Ecaille Air"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "3392c.gif"
		}
	]
};
var eca3 = {
	id: "eca3",
	name: {
		en: "Ecaille Terre",
		fr: "Ecaille Terre",
		de: "Ecaille Terre",
		es: "Ecaille Terre"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "738a6.gif"
		}
	]
};
var symbz = {
	id: "symbz",
	name: {
		en: "Symbole Eau",
		fr: "Symbole Eau",
		de: "Symbole Eau",
		es: "Symbole Eau"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "9a97b.gif"
		}
	]
};
var symb1 = {
	id: "symb1",
	name: {
		en: "Symbole Feu",
		fr: "Symbole Feu",
		de: "Symbole Feu",
		es: "Symbole Feu"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "2c118.gif"
		}
	]
};
var symb2 = {
	id: "symb2",
	name: {
		en: "Symbole Air",
		fr: "Symbole Air",
		de: "Symbole Air",
		es: "Symbole Air"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "47250.gif"
		}
	]
};
var symb3 = {
	id: "symb3",
	name: {
		en: "Symbole Terre",
		fr: "Symbole Terre",
		de: "Symbole Terre",
		es: "Symbole Terre"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "5da73.gif"
		}
	]
};
var c1 = {
	id: "c1",
	name: {
		en: "Balle Jaune",
		fr: "Balle Jaune",
		de: "Balle Jaune",
		es: "Balle Jaune"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "37cb2.gif"
		}
	]
};
var c1arge = {
	id: "c1arge",
	name: {
		en: "Balle Jaune Argent",
		fr: "Balle Jaune Argent",
		de: "Balle Jaune Argent",
		es: "Balle Jaune Argent"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "2d5a0.gif"
		}
	]
};
var c1or = {
	id: "c1or",
	name: {
		en: "Balle Jaune Or",
		fr: "Balle Jaune Or",
		de: "Balle Jaune Or",
		es: "Balle Jaune Or"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 4,
			icon: "10e15.gif"
		}
	]
};
var c2 = {
	id: "c2",
	name: {
		en: "Balle Verte",
		fr: "Balle Verte",
		de: "Balle Verte",
		es: "Balle Verte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "6b072.gif"
		}
	]
};
var c2arge = {
	id: "c2arge",
	name: {
		en: "Balle Verte Argent",
		fr: "Balle Verte Argent",
		de: "Balle Verte Argent",
		es: "Balle Verte Argent"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "46b34.gif"
		}
	]
};
var c2or = {
	id: "c2or",
	name: {
		en: "Balle Verte Or",
		fr: "Balle Verte Or",
		de: "Balle Verte Or",
		es: "Balle Verte Or"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 4,
			icon: "9232a.gif"
		}
	]
};
var c3 = {
	id: "c3",
	name: {
		en: "Balle Rouge",
		fr: "Balle Rouge",
		de: "Balle Rouge",
		es: "Balle Rouge"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "1748a.gif"
		}
	]
};
var c3arge = {
	id: "c3arge",
	name: {
		en: "Balle Rouge Argent",
		fr: "Balle Rouge Argent",
		de: "Balle Rouge Argent",
		es: "Balle Rouge Argent"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "3cacf.gif"
		}
	]
};
var c3or = {
	id: "c3or",
	name: {
		en: "Balle Rouge Or",
		fr: "Balle Rouge Or",
		de: "Balle Rouge Or",
		es: "Balle Rouge Or"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 4,
			icon: "3a578.gif"
		}
	]
};
var c4 = {
	id: "c4",
	name: {
		en: "Balle Orange",
		fr: "Balle Orange",
		de: "Balle Orange",
		es: "Balle Orange"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "3d359.gif"
		}
	]
};
var c4arge = {
	id: "c4arge",
	name: {
		en: "Balle Orange Argent",
		fr: "Balle Orange Argent",
		de: "Balle Orange Argent",
		es: "Balle Orange Argent"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "7f8c9.gif"
		}
	]
};
var c4or = {
	id: "c4or",
	name: {
		en: "Balle Orange Or",
		fr: "Balle Orange Or",
		de: "Balle Orange Or",
		es: "Balle Orange Or"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 4,
			icon: "e6bbe.gif"
		}
	]
};
var c5 = {
	id: "c5",
	name: {
		en: "Balle Bleue",
		fr: "Balle Bleue",
		de: "Balle Bleue",
		es: "Balle Bleue"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "5cf7e.gif"
		}
	]
};
var c5arge = {
	id: "c5arge",
	name: {
		en: "Balle Bleue Argent",
		fr: "Balle Bleue Argent",
		de: "Balle Bleue Argent",
		es: "Balle Bleue Argent"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "50c10.gif"
		}
	]
};
var c5or = {
	id: "c5or",
	name: {
		en: "Balle Bleue Or",
		fr: "Balle Bleue Or",
		de: "Balle Bleue Or",
		es: "Balle Bleue Or"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 4,
			icon: "417db.gif"
		}
	]
};
var ca$1 = {
	id: "ca",
	name: {
		en: "Balle Metal",
		fr: "Balle Metal",
		de: "Balle Metal",
		es: "Balle Metal"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "c2a9e.gif"
		}
	]
};
var caarge = {
	id: "caarge",
	name: {
		en: "Balle Metal Argent",
		fr: "Balle Metal Argent",
		de: "Balle Metal Argent",
		es: "Balle Metal Argent"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "3d7d6.gif"
		}
	]
};
var caor = {
	id: "caor",
	name: {
		en: "Balle Metal Or",
		fr: "Balle Metal Or",
		de: "Balle Metal Or",
		es: "Balle Metal Or"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 4,
			icon: "36692.gif"
		}
	]
};
var cb$1 = {
	id: "cb",
	name: {
		en: "Balle Violette",
		fr: "Balle Violette",
		de: "Balle Violette",
		es: "Balle Violette"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "618c78.gif"
		}
	]
};
var cbarge = {
	id: "cbarge",
	name: {
		en: "Balle Violette Argent",
		fr: "Balle Violette Argent",
		de: "Balle Violette Argent",
		es: "Balle Violette Argent"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			icon: "99502.gif"
		}
	]
};
var cbor = {
	id: "cbor",
	name: {
		en: "Balle Violette Or",
		fr: "Balle Violette Or",
		de: "Balle Violette Or",
		es: "Balle Violette Or"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 4,
			icon: "3f7d9.gif"
		}
	]
};
var montionball2Json = {
	bfacet: bfacet,
	bnorma: bnorma,
	btime: btime,
	bdeath: bdeath,
	bmagne: bmagne,
	bshado: bshado,
	oeil: oeil,
	masque: masque,
	ecaz: ecaz,
	eca1: eca1,
	eca2: eca2,
	eca3: eca3,
	symbz: symbz,
	symb1: symb1,
	symb2: symb2,
	symb3: symb3,
	c1: c1,
	c1arge: c1arge,
	c1or: c1or,
	c2: c2,
	c2arge: c2arge,
	c2or: c2or,
	c3: c3,
	c3arge: c3arge,
	c3or: c3or,
	c4: c4,
	c4arge: c4arge,
	c4or: c4or,
	c5: c5,
	c5arge: c5arge,
	c5or: c5or,
	ca: ca$1,
	caarge: caarge,
	caor: caor,
	cb: cb$1,
	cbarge: cbarge,
	cbor: cbor
};

var signal_fire = {
	id: "signal_fire",
	name: {
		en: "Fire Reports",
		fr: "Signalements d'Incendies",
		de: "Fire Reports",
		es: "Señalamientos de incendios"
	},
	rare: 0,
	unlocks: [
	]
};
var win_nova = {
	id: "win_nova",
	name: {
		en: "Legendary Adventurer",
		fr: "Aventurier légendaire",
		de: "Legendary Adventurer",
		es: "Aventurero legendario"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/win_nova.png",
			title: {
				en: "Super Nova",
				fr: "Super Nova",
				de: "Super Nova",
				es: "Super Nova"
			},
			description: {
				en: "You were the greatest adventurer in the universe during a season of Mush.",
				fr: "Vous avez été le plus grand aventurier de l'univers durant un épisode de Mush.",
				de: "You were the greatest adventurer in the universe during a season of Mush.",
				es: "Has sido el mayor aventurero del universo durante un episodio de Mush."
			}
		}
	]
};
var win_triumph = {
	id: "win_triumph",
	name: {
		en: "Legendary Hero",
		fr: "Héros légendaire",
		de: "Legendary Hero",
		es: "Héroe legendario"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/win_triumph.png",
			title: {
				en: "Super Héros",
				fr: "Super Héros",
				de: "Super Héros",
				es: "Super Héroe"
			},
			description: {
				en: "You were the greatest hero of all time... during a season of Mush.",
				fr: "Vous avez été le plus grand héros de tous les temps... durant un épisode de Mush.",
				de: "You were the greatest hero of all time... during a season of Mush.",
				es: "Has sido el mayor héroe de todos los tiempos durante un episodio de Mush."
			}
		}
	]
};
var other_nova = {
	id: "other_nova",
	name: {
		en: "Space Adventurer",
		fr: "Aventurier de l'espace",
		de: "Space Adventurer",
		es: "Aventurero del Espacio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/other_nova.png",
			title: {
				en: "Nova-boy",
				fr: "Nova-boy",
				de: "Nova-boy",
				es: "Nova-boy"
			},
			description: {
				en: "You were a great space adventurer in an episode of Mush.",
				fr: "Vous avez été un grand aventurier de l'univers durant un épisode de Mush.",
				de: "You were a great space adventurer in an episode of Mush.",
				es: "Has sido un gran aventurero espacial durante un episodio de Mush."
			}
		}
	]
};
var other_triumph = {
	id: "other_triumph",
	name: {
		en: "Space Hero",
		fr: "Héros de l'espace",
		de: "Space Hero",
		es: "Héroe Espacial"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/other_triumph.png",
			title: {
				en: "Space Hero",
				fr: "Héros de l'espace",
				de: "Space Hero",
				es: "Héroe Espacial"
			},
			description: {
				en: "You were one of the universe's great heroes... during an episode of Mush.",
				fr: "Vous avez été un grand héros de l'univers... durant un épisode de Mush.",
				de: "You were one of the universe's great heroes... during an episode of Mush.",
				es: "Has sido un gran héroe durante un episodio de Mush."
			}
		}
	]
};
var extinguish_fire = {
	id: "extinguish_fire",
	name: {
		en: "Fire Extinguisher",
		fr: "Extinction d'Incendies",
		de: "Fire Extinguisher",
		es: "Extinción de Incendios"
	},
	rare: 0,
	unlocks: [
	]
};
var signal_equip = {
	id: "signal_equip",
	name: {
		en: "Breakdown Reporter",
		fr: "Signalement de pannes",
		de: "Breakdown Reporter",
		es: "Señalamiento de averías"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/reported.png",
			title: {
				en: "Surface Agent",
				fr: "Agent de surface",
				de: "Surface Agent",
				es: "Tripulante observador"
			},
			description: {
				en: "The number of broken pieces of equipment you have reported.",
				fr: "Nombre d'équipements endommagés que vous avez signalés.",
				de: "The number of broken pieces of equipment you have reported.",
				es: "Cantidad de equipos averiados que has señalado."
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Maintenance Operative",
				fr: "Agent de maintenance",
				de: "Maintenance Operative",
				es: "Agente de mantenimiento"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Equipment Supervisor",
				fr: "Préposé aux équipements",
				de: "Equipment Supervisor",
				es: "Amigo de las máquinas"
			}
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Equipmenteer",
				fr: "Equipementier",
				de: "Equipmenteer",
				es: "Experto en equipos"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Finished Product Inspector",
				fr: "inspecteur des travaux finis",
				de: "Finished Product Inspector",
				es: "Inspector técnico"
			}
		}
	]
};
var gagged = {
	id: "gagged",
	name: {
		en: "Gagged",
		fr: "Bailloné",
		de: "Gagged",
		es: "Amordazado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/status/gagged.png",
			title: {
				en: "Bailloné",
				fr: "Bailloné",
				de: "Bailloné",
				es: "Amordazado"
			},
			description: {
				en: "The number of times you have been gagged.",
				fr: "Nombre de fois où vous avez été baillonés.",
				de: "The number of times you have been gagged.",
				es: "Cantidad de veces que has sido amordazado(a)."
			}
		}
	]
};
var game_without_sleep = {
	id: "game_without_sleep",
	name: {
		en: "Days without sleep",
		fr: "Jours sans s'endormir",
		de: "Days without sleep",
		es: "Días sin dormir"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "ui/awake.png",
			title: {
				en: "Awakened",
				fr: "Eveillé",
				de: "Awakened",
				es: "Despierto"
			},
			description: {
				en: "Number of trips you have completed without sleep.\r\n\t\t\tThis trophy is only awarded if you survive beyond day 6.",
				fr: "Nombre de voyages que vous avez effectués sans jamais vous endormir.\r\n\t\t\tCe trophée n'est accordé que si vous survivez au delà du jour 6.",
				de: "Number of trips you have completed without sleep.\r\n\t\t\tThis trophy is only awarded if you survive beyond day 6.",
				es: "Cantidad de viajes que has realizado sin dormir.\r\n\t\t\tEste trofeo es otorgado solo si sobrevives después del día 6."
			}
		},
		{
			count: 20,
			points: 5,
			title: {
				en: "Insomniac",
				fr: "Insomniaque",
				de: "Insomniac",
				es: "Insomnio"
			}
		},
		{
			count: 100,
			points: 5,
			title: {
				en: "Ultrawake",
				fr: "Extralucide",
				de: "Ultrawake",
				es: "Lúcido"
			}
		}
	]
};
var explorer = {
	id: "explorer",
	name: {
		en: "Explorer",
		fr: "Explorateur",
		de: "Explorer",
		es: "Explorador"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "ui/survival.png",
			title: {
				en: "Explorer",
				fr: "Explorateur",
				de: "Explorer",
				es: "Expedicionario"
			},
			description: {
				en: "Number of times you have explored a planet and come back alive.",
				fr: "Nombre de fois où vous avez exploré une planète et en êtes revenu vivant.",
				de: "Number of times you have explored a planet and come back alive.",
				es: "Cantidad de veces que has explorado un planeta y has vuelto vivo(a)."
			}
		},
		{
			count: 50,
			points: 5,
			title: {
				en: "Great Explorer",
				fr: "Grand explorateur",
				de: "Great Explorer",
				es: "Gran Expedicionario"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Boundary Breaker",
				fr: "Repousseur de frontière",
				de: "Boundary Breaker",
				es: "Sin fronteras"
			}
		},
		{
			count: 1000,
			points: 5,
			title: {
				en: "Christopher Colon",
				fr: "Christophe Colomb",
				de: "Christopher Colon",
				es: "Starship Trooper"
			}
		}
	]
};
var triumph = {
	id: "triumph",
	name: {
		en: "Glory",
		fr: "Triomphe",
		de: "Glory",
		es: "Gloria"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "ui/triumph.png",
			title: {
				en: "Acquaintance",
				fr: "Connaissance",
				de: "Acquaintance",
				es: "Pasante"
			},
			description: {
				en: "Triomphe total.",
				fr: "Triomphe total.",
				de: "Triomphe total.",
				es: "Gloria total."
			}
		},
		{
			count: 50,
			points: 5,
			title: {
				en: "Celebrity",
				fr: "Célébrité",
				de: "Celebrity",
				es: "Celebridad"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Historical Figure",
				fr: "Personnage Historique",
				de: "Historical Figure",
				es: "Personaje Histórico"
			}
		},
		{
			count: 500,
			points: 20,
			title: {
				en: "Legend",
				fr: "Légende",
				de: "Legend",
				es: "Leyenda"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Myth",
				fr: "Mythe",
				de: "Myth",
				es: "Mito"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Messiah",
				fr: "Messie",
				de: "Messiah",
				es: "Glorioso"
			}
		},
		{
			count: 3000,
			points: 0,
			title: {
				en: "Creator",
				fr: "Demiurge",
				de: "Creator",
				es: "Ordenador del Mundo"
			}
		}
	]
};
var door_repaired = {
	id: "door_repaired",
	name: {
		en: "Doors repaired",
		fr: "Portes réparées",
		de: "Doors repaired",
		es: "Puertas reparadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "ui/door.png",
			title: {
				en: "Locksmith",
				fr: "Serrurier",
				de: "Locksmith",
				es: "Cerrajero"
			},
			description: {
				en: "Doors you have repaired with TLC.",
				fr: "Portes que vous avez amoureusement réparées.",
				de: "Doors you have repaired with TLC.",
				es: "Puertas que has reparado con mucho amor."
			}
		}
	]
};
var planet_scanned = {
	id: "planet_scanned",
	name: {
		en: "Planets Detected",
		fr: "Planètes Détectées",
		de: "Planets Detected",
		es: "Planetas detectados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "ui/planet.png",
			title: {
				en: "Navigator",
				fr: "Navigateur",
				de: "Navigator",
				es: "Navegante"
			},
			description: {
				en: "Planets Detected.",
				fr: "Planètes détectées.",
				de: "Planets Detected.",
				es: "Planetas detectados."
			}
		}
	]
};
var mushed = {
	id: "mushed",
	name: {
		en: "Infected",
		fr: "Infecté",
		de: "Infected",
		es: "Infectado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "ui/mush.png",
			title: {
				en: "Infected",
				fr: "Infecté",
				de: "Infected",
				es: "Infectado"
			},
			description: {
				en: "Number of times you have been infected and this has become a generalized infection.",
				fr: "Nombre de fois où vous avez été contaminé jusqu'à l'infection totale.",
				de: "Number of times you have been infected and this has become a generalized infection.",
				es: "Cantidad de veces que has sido contaminado(a) hasta la infección total."
			}
		}
	]
};
var has_mushed = {
	id: "has_mushed",
	name: {
		en: "Contaminator",
		fr: "Infecteur",
		de: "Contaminator",
		es: "Infectador"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Infectious Agent",
				fr: "Agent infectieux",
				de: "Infectious Agent",
				es: "Mal bicho"
			}
		}
	],
	description: {
		en: "Number of times you have contaminated a member of the crew and this has become a generalized infection.",
		fr: "Nombre de fois où vous avez contaminé un membre de l'équipage jusqu'à l'infection totale.",
		de: "Number of times you have contaminated a member of the crew and this has become a generalized infection.",
		es: "Cantidad de veces que has contaminado a un miembro de la tripulación hasta la infección total."
	}
};
var sleeper = {
	id: "sleeper",
	name: {
		en: "Siesta Time",
		fr: "Siestes",
		de: "Siesta Time",
		es: "Siestas"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "ui/sleepy.png",
			title: {
				en: "Rip van Shroom",
				fr: "Ronfleur",
				de: "Rip van Shroom",
				es: "Roncador"
			},
			description: {
				en: "Number of times you have fallen asleep...",
				fr: "Nombre de fois où vous vous êtes endormi...",
				de: "Number of times you have fallen asleep...",
				es: "Cantidad de veces que has dormido..."
			}
		}
	]
};
var tutorial = {
	id: "tutorial",
	name: {
		en: "Apprenticeship Completed",
		fr: "Apprentissage Achevé",
		de: "Apprenticeship Completed",
		es: "Instrucción terminada"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "ui/book.png",
			title: {
				en: "Equipier",
				fr: "Equipier",
				de: "Equipier",
				es: "Compañero"
			},
			description: {
				en: "Number of times you have completed training mode.",
				fr: "Nombre de fois où vous avez accompli le mode Apprentissage.",
				de: "Number of times you have completed training mode.",
				es: "Cantidad de veces que has completado el Modo Instrucción."
			}
		}
	]
};
var explo_feed = {
	id: "explo_feed",
	name: {
		en: "Quartermaster",
		fr: "Approvisionneur",
		de: "Quartermaster",
		es: "Abastecedor"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "ui/stock.png",
			title: {
				en: "Berry Harvester",
				fr: "Cueilleur De Baie",
				de: "Berry Harvester",
				es: "Recolector de frutos"
			},
			description: {
				en: "Food brought back from expeditions.\r\n\t\t\tYou must have survived...",
				fr: "Nourriture Rapportée D'Expédition.\r\n\t\t\tVous devez avoir survécu...",
				de: "Food brought back from expeditions.\r\n\t\t\tYou must have survived...",
				es: "Alimentos traídos durante una expedición.\r\n\t\t\tDebes haber sobrevivido..."
			}
		},
		{
			count: 50,
			points: 5,
			title: {
				en: "Hunter",
				fr: "Chasseur",
				de: "Hunter",
				es: "Cazador"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Safari Leader",
				fr: "Meneur De Safari",
				de: "Safari Leader",
				es: "Safari"
			}
		},
		{
			count: 500,
			points: 20,
			title: {
				en: "Agent of Genocide",
				fr: "Génocideur de Monde",
				de: "Agent of Genocide",
				es: "Devastador"
			}
		},
		{
			count: 1000,
			points: 40,
			title: {
				en: "Grand Destroyer of Solar Systems",
				fr: "Grand Destructeur De Système Solaire",
				de: "Grand Destroyer of Solar Systems",
				es: "Arrazador"
			}
		}
	]
};
var new_plants = {
	id: "new_plants",
	name: {
		en: "Plantations",
		fr: "Plantations",
		de: "Plantations",
		es: "Plantaciones"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Aphid",
				fr: "Puceron",
				de: "Aphid",
				es: "Sembrador"
			}
		}
	],
	description: {
		en: "Plants you have raised",
		fr: "Plantes que vous avez fait naître",
		de: "Plants you have raised",
		es: "Plantas a las que has dado vida"
	}
};
var give_mission = {
	id: "give_mission",
	name: {
		en: "Missions",
		fr: "Missions",
		de: "Missions",
		es: "Misiones"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Soldier",
				fr: "Troufion",
				de: "Soldier",
				es: "Jefe"
			}
		},
		{
			count: 10,
			points: 1,
			title: {
				en: "Chief",
				fr: "Chef",
				de: "Chief",
				es: "Patrón"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Captain",
				fr: "Capitaine",
				de: "Captain",
				es: "Autoridad"
			}
		},
		{
			count: 100,
			points: 1,
			title: {
				en: "Commandant",
				fr: "Commandant",
				de: "Commandant",
				es: "Capataz"
			}
		},
		{
			count: 500,
			points: 1,
			title: {
				en: "General",
				fr: "Général",
				de: "General",
				es: "Dictador"
			}
		}
	],
	description: {
		en: "Missions you have delegated which have been accepted",
		fr: "Missions que vous avez données et qui ont été acceptées",
		de: "Missions you have delegated which have been accepted",
		es: "Misiones que has dado y que han sido aceptadas"
	}
};
var daily_order = {
	id: "daily_order",
	name: {
		en: "General Announcement",
		fr: "Annonce Générale",
		de: "General Announcement",
		es: "Anuncio general"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Orator",
				fr: "Annonceur",
				de: "Orator",
				es: "Anunciante"
			}
		},
		{
			count: 10,
			points: 1,
			title: {
				en: "Loudspeaker",
				fr: "Haut-Parleur",
				de: "Loudspeaker",
				es: "Bocina"
			}
		},
		{
			count: 20,
			points: 1,
			title: {
				en: "Herald",
				fr: "Herault",
				de: "Herald",
				es: "Heraldo"
			}
		}
	],
	description: {
		en: "General Announcements sent",
		fr: "Annonces générales passées",
		de: "General Announcements sent",
		es: "Anuncios generales emitidos"
	}
};
var hunter_down = {
	id: "hunter_down",
	name: {
		en: "Hunters Defeated",
		fr: "Hunters Abattus",
		de: "Hunters Defeated",
		es: "Hunters derribados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Cockroach",
				fr: "Cancrelat",
				de: "Cockroach",
				es: "Tirapiedras"
			}
		},
		{
			count: 20,
			points: 1,
			prefix: true,
			title: {
				en: "Pilot",
				fr: "Pilote",
				de: "Pilot",
				es: "Piloto"
			}
		},
		{
			count: 50,
			points: 1,
			prefix: true,
			title: {
				en: "Hunter",
				fr: "Chasseur",
				de: "Hunter",
				es: "Piloto de caza"
			}
		},
		{
			count: 100,
			points: 1,
			prefix: true,
			title: {
				en: "Elite Pilot",
				fr: "Pilote D'Elite",
				de: "Elite Pilot",
				es: "Artillero espacial"
			}
		},
		{
			count: 500,
			points: 1,
			prefix: true,
			title: {
				en: "Fungal Flea",
				fr: "Fléau Fongique",
				de: "Fungal Flea",
				es: "Destroyer"
			}
		}
	],
	description: {
		en: "Hunters you have defeated",
		fr: "Hunters abattus par vos soins",
		de: "Hunters you have defeated",
		es: "Hunters derribados por ti"
	}
};
var day_5_reached = {
	id: "day_5_reached",
	name: {
		en: "Day 5 Reached",
		fr: "Jour 5 Atteint",
		de: "Day 5 Reached",
		es: "Día 5 alcanzado"
	},
	rare: 3,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Survivor",
				fr: "Survivant",
				de: "Survivor",
				es: "Superviviente"
			}
		}
	]
};
var day_10_reached = {
	id: "day_10_reached",
	name: {
		en: "Day 10 Reached",
		fr: "Jour 10 Atteint",
		de: "Day 10 Reached",
		es: "Día 10 alcanzado"
	},
	rare: 4,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Hero",
				fr: "Héros",
				de: "Hero",
				es: "Héroe"
			}
		}
	]
};
var day_15_reached = {
	id: "day_15_reached",
	name: {
		en: "Day 15 Reached",
		fr: "Jour 15 Atteint",
		de: "Day 15 Reached",
		es: "Día 15 alcanzado"
	},
	rare: 5,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Elder",
				fr: "Ancien",
				de: "Elder",
				es: "Antiguo"
			}
		}
	]
};
var day_20_reached = {
	id: "day_20_reached",
	name: {
		en: "Day 20 Reached",
		fr: "Jour 20 Atteint",
		de: "Day 20 Reached",
		es: "Día 20 alcanzado"
	},
	rare: 6,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Divinity",
				fr: "Divinité",
				de: "Divinity",
				es: "Divinidad"
			}
		}
	]
};
var day_30_reached = {
	id: "day_30_reached",
	name: {
		en: "Day 30 Reached",
		fr: "Jour 30 Atteint",
		de: "Day 30 Reached",
		es: "Día 30 alcanzado"
	},
	rare: 7,
	unlocks: [
	]
};
var ration_cooked = {
	id: "ration_cooked",
	name: {
		en: "Dishes Cooked",
		fr: "Plats cuisinés",
		de: "Dishes Cooked",
		es: "Platos cocinados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Commis",
				fr: "Commis",
				de: "Commis",
				es: "Chef"
			}
		}
	]
};
var plasma_shield = {
	id: "plasma_shield",
	name: {
		en: "Plasma Shield",
		fr: "Bouclier Plasma",
		de: "Plasma Shield",
		es: "Escudo plasma"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Protector",
				fr: "Protecteur",
				de: "Protector",
				es: "Protector"
			}
		}
	],
	description: {
		en: "Number of times that the plasma shield has been used by your crew during a journey",
		fr: "Nombre de fois où le Bouclier Plasma a été mis en service par votre équipage durant un voyage",
		de: "Number of times that the plasma shield has been used by your crew during a journey",
		es: "Cantidad de veces que el Escudo Plasma ha sido activado por la tripulación durante el viaje"
	}
};
var surgeon = {
	id: "surgeon",
	name: {
		en: "Surgeon",
		fr: "Chirurgien",
		de: "Surgeon",
		es: "Cirujano"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Surgeon",
				fr: "Chirurgien",
				de: "Surgeon",
				es: "Cirujano de Bergerac"
			}
		}
	],
	description: {
		en: "Surgical procedures carried out",
		fr: "Actes de chirurgie réussies",
		de: "Surgical procedures carried out",
		es: "Operaciones quirúrgicas exitosas"
	}
};
var butcher = {
	id: "butcher",
	name: {
		en: "Butcher",
		fr: "Boucher",
		de: "Butcher",
		es: "Carnicero"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Butcher",
				fr: "Boucher",
				de: "Butcher",
				es: "Carnicero"
			}
		}
	],
	description: {
		en: "Surgical procedure fails",
		fr: "Actes de chirurgie ratés",
		de: "Surgical procedure fails",
		es: "Cirugías fallidas"
	}
};
var shrinker = {
	id: "shrinker",
	name: {
		en: "Complete Psychoanalysis",
		fr: "Psychanalyse Totale",
		de: "Complete Psychoanalysis",
		es: "Psicoanálista"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Psychoanalyst",
				fr: "Psychanaliste",
				de: "Psychoanalyst",
				es: "Psicoanalista"
			}
		},
		{
			count: 10,
			points: 1,
			prefix: true,
			title: {
				en: "Psychiatrist",
				fr: "Psychiatre",
				de: "Psychiatrist",
				es: "Psiquiatra"
			}
		},
		{
			count: 50,
			points: 1,
			prefix: true,
			title: {
				en: "Guru",
				fr: "Gourou",
				de: "Guru",
				es: "Gurú"
			}
		}
	],
	description: {
		en: "Psychological Illnesses Treated",
		fr: "Maladies Psychologiques guéries",
		de: "Psychological Illnesses Treated",
		es: "Enfermedades psicológicas curadas"
	}
};
var physicist = {
	id: "physicist",
	name: {
		en: "Physician's Core",
		fr: "Personnel Soignant",
		de: "Physician's Core",
		es: "Sanador"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Nurse",
				fr: "Infirmier",
				de: "Nurse",
				es: "Practicante"
			}
		},
		{
			count: 10,
			points: 1,
			prefix: true,
			title: {
				en: "Intern",
				fr: "Interne",
				de: "Intern",
				es: "Enfermero"
			}
		},
		{
			count: 50,
			points: 1,
			prefix: true,
			title: {
				en: "Doctor",
				fr: "Docteur",
				de: "Doctor",
				es: "Doctor"
			}
		}
	],
	description: {
		en: "Physical Issues Healed",
		fr: "Maladies Physiques guéries",
		de: "Physical Issues Healed",
		es: "Enfermedades físicas curadas"
	}
};
var politician = {
	id: "politician",
	name: {
		en: "Politician",
		fr: "Homme Politique",
		de: "Politician",
		es: "Político"
	},
	rare: 4,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Town Counsellor",
				fr: "Conseiller Municipal",
				de: "Town Counsellor",
				es: "Parlanchín"
			}
		},
		{
			count: 10,
			points: 1,
			prefix: true,
			title: {
				en: "Mayor",
				fr: "Maire",
				de: "Mayor",
				es: "Charlatán"
			}
		},
		{
			count: 50,
			points: 1,
			prefix: true,
			title: {
				en: "Swindler",
				fr: "Escroc",
				de: "Swindler",
				es: "Embustero"
			}
		}
	],
	description: {
		en: "Speeches given in front of at least 8 Spectators",
		fr: "Discours prononcé avec plus de 8 Spectateurs.",
		de: "Speeches given in front of at least 8 Spectators",
		es: "Discurso dado a más de 8 espectadores."
	}
};
var artefact_coll = {
	id: "artefact_coll",
	name: {
		en: "Artefacts collected",
		fr: "Artefacts collectés",
		de: "Artefacts collected",
		es: "Artefactos colectados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Unknown Archaeologist",
				fr: "Archéologue Inconnu",
				de: "Unknown Archaeologist",
				es: "Arqueólogo desconocido"
			}
		},
		{
			count: 10,
			points: 10,
			prefix: true,
			title: {
				en: "Allan Grant",
				fr: "Allan Grant",
				de: "Allan Grant",
				es: "Buscatesoros"
			}
		},
		{
			count: 15,
			points: 50,
			prefix: true,
			title: {
				en: "Indiana Jones",
				fr: "Indiana Jones",
				de: "Indiana Jones",
				es: "Coleccionista"
			}
		}
	],
	description: {
		en: "Artefacts recovered on expeditions throughout your career.",
		fr: "Artefacts collectés en expédition tout au long de votre carrière.",
		de: "Artefacts recovered on expeditions throughout your career.",
		es: "Artefactos colectados en expedición a lo largo de tu carrera."
	}
};
var artefact_specialist = {
	id: "artefact_specialist",
	name: {
		en: "Artefact Specialist",
		fr: "Spécialiste en artefacts",
		de: "Artefact Specialist",
		es: "Especialista en artefactos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Sweeper",
				fr: "Balayeur",
				de: "Sweeper",
				es: "Barredor"
			}
		},
		{
			count: 2,
			points: 5,
			prefix: true,
			title: {
				en: "Scavenger",
				fr: "Fouineur",
				de: "Scavenger",
				es: "Recogedor"
			}
		},
		{
			count: 3,
			points: 10,
			prefix: true,
			title: {
				en: "Seeker",
				fr: "Chercheur",
				de: "Seeker",
				es: "Buscón"
			}
		},
		{
			count: 4,
			points: 20,
			prefix: true,
			title: {
				en: "Explorer",
				fr: "Explorateur",
				de: "Explorer",
				es: "Pillo"
			}
		},
		{
			count: 5,
			points: 1,
			prefix: true,
			title: {
				en: "Guardian",
				fr: "Gardien",
				de: "Guardian",
				es: "Guardián"
			}
		},
		{
			count: 6,
			points: 1,
			prefix: true,
			title: {
				en: "Shaman",
				fr: "Shaman",
				de: "Shaman",
				es: "Brujo"
			}
		},
		{
			count: 7,
			points: 1,
			prefix: true,
			title: {
				en: "Magician",
				fr: "Magicien",
				de: "Magician",
				es: "Mago"
			}
		},
		{
			count: 8,
			points: 1,
			prefix: true,
			title: {
				en: "Prophet",
				fr: "Prophète",
				de: "Prophet",
				es: "Profeta"
			}
		}
	],
	description: {
		en: "The maximum number of different types of artefact collected by your crew on an expedition during a single game",
		fr: "Nombre maximal d'artefacts différents collectés en expédition par votre équipage au cours d'une seule partie.",
		de: "The maximum number of different types of artefact collected by your crew on an expedition during a single game",
		es: "Cantidad máxima de artefactos diferentes colectados en expedición por tu equipo durante una sola partida."
	}
};
var tags_complete = {
	id: "tags_complete",
	name: {
		en: "Total Clearance",
		fr: "Balayages Complets",
		de: "Total Clearance",
		es: "Sectores revelados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Mad Scanner",
				fr: "Scanneur Fou",
				de: "Mad Scanner",
				es: "Loco del scanner"
			}
		}
	],
	description: {
		en: "The number of planets where all sectors have been revealed by your crew during a single game.",
		fr: "Nombre de planètes dont toutes les sections ont été révélées par votre équipage durant une partie.",
		de: "The number of planets where all sectors have been revealed by your crew during a single game.",
		es: "Cantidad de planetas cuyos sectores han sido revelados por tu equipo durante una partida."
	}
};
var research_team = {
	id: "research_team",
	name: {
		en: "Research Team",
		fr: "Equipe De Chercheurs",
		de: "Research Team",
		es: "Equipo de investigadores"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Lab Rat",
				fr: "Rat De Laboratoire",
				de: "Lab Rat",
				es: "Rata de laboratorio"
			}
		},
		{
			count: 2,
			points: 2,
			prefix: true,
			title: {
				en: "PhD Student",
				fr: "Doctorant",
				de: "PhD Student",
				es: "Auxiliar"
			}
		},
		{
			count: 4,
			points: 5,
			prefix: true,
			title: {
				en: "Researcher",
				fr: "Chercheur",
				de: "Researcher",
				es: "Investigador"
			}
		},
		{
			count: 8,
			points: 10,
			prefix: true,
			title: {
				en: "Professor",
				fr: "Professeur",
				de: "Professor",
				es: "Profesor"
			}
		},
		{
			count: 16,
			points: 5,
			prefix: true,
			title: {
				en: "Omniscient",
				fr: "Omniscient",
				de: "Omniscient",
				es: "Científico loco"
			}
		}
	],
	description: {
		en: "Most research ever carried out by one of your crews.",
		fr: "Nombre maximal de Recherches jamais atteint par un de vos équipages.",
		de: "Most research ever carried out by one of your crews.",
		es: "Cantidad máxima de investigaciones científicas realizadas por uno de tus equipos."
	}
};
var project_team = {
	id: "project_team",
	name: {
		en: "Technical Team",
		fr: "Equipe Technique",
		de: "Technical Team",
		es: "Equipo técnico"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Maintenance Tech",
				fr: "Agent de Maintenance",
				de: "Maintenance Tech",
				es: "Manutencionario"
			}
		},
		{
			count: 2,
			points: 2,
			prefix: true,
			title: {
				en: "Technician",
				fr: "Technicien",
				de: "Technician",
				es: "Manitas"
			}
		},
		{
			count: 4,
			points: 5,
			prefix: true,
			title: {
				en: "Mechanic",
				fr: "Mécanicien",
				de: "Mechanic",
				es: "Técnico"
			}
		},
		{
			count: 8,
			points: 10,
			prefix: true,
			title: {
				en: "Engineer",
				fr: "Ingénieur",
				de: "Engineer",
				es: "Especialista"
			}
		},
		{
			count: 16,
			points: 5,
			prefix: true,
			title: {
				en: "Omnipotent",
				fr: "Omnipotent",
				de: "Omnipotent",
				es: "Ingeniero"
			}
		}
	],
	description: {
		en: "Maximum number of projects ever carried out by one of your crews.",
		fr: "Nombre maximal de Projets jamais développés par un de vos équipages.",
		de: "Maximum number of projects ever carried out by one of your crews.",
		es: "Cantidad máxima de proyectos desarrollados por uno de tus equipos."
	}
};
var team_all_rebels = {
	id: "team_all_rebels",
	name: {
		en: "Revolution!",
		fr: "Revolution !",
		de: "Revolution!",
		es: "¡Revolución!"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Commune",
				fr: "Commune",
				de: "Commune",
				es: "Insurrección"
			}
		},
		{
			count: 5,
			points: 1,
			prefix: true,
			title: {
				en: "Revolution",
				fr: "Révolution",
				de: "Revolution",
				es: "Revolución"
			}
		},
		{
			count: 10,
			points: 1,
			prefix: true,
			title: {
				en: "Liberation",
				fr: "Libération",
				de: "Liberation",
				es: "Liberación"
			}
		}
	],
	description: {
		en: "Your team decoded all rebel transmissions during a voyage.",
		fr: "Votre équipe a décodé tous les signaux rebelles durant un voyage.",
		de: "Your team decoded all rebel transmissions during a voyage.",
		es: "Tu equipo ha descifrado todos los mensajes rebeldes durante un viaje."
	}
};
var team_rebels = {
	id: "team_rebels",
	name: {
		en: "Rebellion!",
		fr: "Rébellion !",
		de: "Rebellion!",
		es: "¡Rebelión!"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Dissident",
				fr: "Dissident",
				de: "Dissident",
				es: "Disidente"
			}
		},
		{
			count: 3,
			points: 1,
			prefix: true,
			title: {
				en: "Rebel",
				fr: "Rebelle",
				de: "Rebel",
				es: "Rebelde"
			}
		},
		{
			count: 6,
			points: 1,
			prefix: true,
			title: {
				en: "Terrorist",
				fr: "Terroriste",
				de: "Terrorist",
				es: "Terrorista"
			}
		}
	],
	description: {
		en: "Maximum number of rebel transmissions decoded by your team during a voyage",
		fr: "Nombre maximal de signaux rebelles décodés par votre équipage durant un voyage.",
		de: "Maximum number of rebel transmissions decoded by your team during a voyage",
		es: "Cantidad máxima de señales rebeldes decodificadas por tu equipo durante un viaje."
	}
};
var rebels = {
	id: "rebels",
	name: {
		en: "Read all about it!",
		fr: "5ème Colonne",
		de: "Read all about it!",
		es: "Contacto rebelde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			suffix: true,
			title: {
				en: "Pirate Radio",
				fr: "Radio Pirate",
				de: "Pirate Radio",
				es: "Radio Pirata"
			}
		}
	],
	description: {
		en: "Rebel bases personally contacted",
		fr: "Bases rebelles contactées par vos soins.",
		de: "Rebel bases personally contacted",
		es: "Bases rebeldes contactadas por ti."
	}
};
var kivanc_contacted = {
	id: "kivanc_contacted",
	name: {
		en: "Kivanç Terzi contacted",
		fr: "Kivanç Terzi contacté",
		de: "Kivanç Terzi contacted",
		es: "Kivanç Terzi contactado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Rebel Chief",
				fr: "Chef Rebelle",
				de: "Rebel Chief",
				es: "Cabecilla"
			}
		}
	],
	description: {
		en: "The ship's crew has managed to contact Kivanç Terzi",
		fr: "L'équipage du vaisseau a contacté Kivanç Terzi.",
		de: "The ship's crew has managed to contact Kivanç Terzi",
		es: "La tripulación ha contactado con Kivanç Terzi."
	}
};
var nils_contacted = {
	id: "nils_contacted",
	name: {
		en: "Nils contacted",
		fr: "Nils contacté",
		de: "Nils contacted",
		es: "Nils contactado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Scientific Authority",
				fr: "Autorité Scientifique",
				de: "Scientific Authority",
				es: "Autoridad científica"
			}
		}
	],
	description: {
		en: "The ship's crew has successfully contacted Nils Carlsson",
		fr: "L'équipage du vaisseau a contacté Nils Carlsson.",
		de: "The ship's crew has successfully contacted Nils Carlsson",
		es: "La tripulación ha contactado con Nils Carlsson."
	}
};
var mage_books_learned = {
	id: "mage_books_learned",
	name: {
		en: "Skill books",
		fr: "Apprentrons",
		de: "Skill books",
		es: "Librotrones"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			suffix: true,
			title: {
				en: "Savant",
				fr: "Savant",
				de: "Savant",
				es: "Sabio"
			}
		}
	],
	description: {
		en: "Skill book",
		fr: "Apprentrons consultés",
		de: "Skill book",
		es: "Librotrones consultados"
	}
};
var back_to_root = {
	id: "back_to_root",
	name: {
		en: "Sol",
		fr: "Sol",
		de: "Sol",
		es: "Sistema Solar"
	},
	rare: 6,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Citizen of Sol",
				fr: "Citoyen de Sol",
				de: "Citizen of Sol",
				es: "Todos vuelven"
			}
		}
	],
	description: {
		en: "Number of return trips made to Sol. How was the trip?",
		fr: "Nombre de trajets de retour vers Sol effectués. Content du voyage ?",
		de: "Number of return trips made to Sol. How was the trip?",
		es: "Cantidad de viajes de vuelta al Sistema Solar realizados."
	}
};
var pilgred_back_online = {
	id: "pilgred_back_online",
	name: {
		en: "PILGRED IS BACK!",
		fr: "PILGRED EST DE RETOUR !",
		de: "PILGRED IS BACK!",
		es: "¡PILGRED ESTÁ DE VUELTA!"
	},
	rare: 8,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Next Generation Propulsion",
				fr: "Propulsion De Prochaine Génération",
				de: "Next Generation Propulsion",
				es: "Propulsión de Última Generación"
			}
		}
	],
	description: {
		en: "Number of trips on which you've managed to get PILGRED back online.",
		fr: "Nombre de voyages où votre équipage a réussi à remettre PILGRED en ligne.",
		de: "Number of trips on which you've managed to get PILGRED back online.",
		es: "Cantidad de viajes en los que la tripulación volvió a poner a PILGRED en línea."
	}
};
var drugs_taken = {
	id: "drugs_taken",
	name: {
		en: "Little treats you've helped yourself to!",
		fr: "Laissez manger les petits cachets !",
		de: "Little treats you've helped yourself to!",
		es: "¡Las pastillitas son mías!"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			suffix: true,
			title: {
				en: "Pillhead",
				fr: "Cacheton",
				de: "Pillhead",
				es: "Automedicado"
			}
		}
	],
	description: {
		en: "Pills popped",
		fr: "Gourmandises avalées",
		de: "Pills popped",
		es: "Pastillas y otras sustancias consumidas"
	}
};
var coffee_taken = {
	id: "coffee_taken",
	name: {
		en: "16 coffees please!",
		fr: "Un café pour la 16 !",
		de: "16 coffees please!",
		es: "¡Un cafecito por favor!"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			suffix: true,
			title: {
				en: "COFFEE!",
				fr: "CAFE !",
				de: "COFFEE!",
				es: "¡RÁPIDO, CAFÉ!"
			}
		},
		{
			count: 500,
			points: 10,
			title: {
				en: "Caffeine-o-holic",
				fr: "Cafféinomae",
				de: "Caffeine-o-holic",
				es: "Cafeinómano"
			}
		}
	],
	description: {
		en: "Coffees you have had",
		fr: "Cafés avalés",
		de: "Coffees you have had",
		es: "Cafés consumidos"
	}
};
var cooked_taken = {
	id: "cooked_taken",
	name: {
		en: "Cooked rations eaten",
		fr: "Rations cuisinées avalées",
		de: "Cooked rations eaten",
		es: "Raciones cocinadas consumidas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Max Nomnom",
				fr: "Morfal",
				de: "Max Nomnom",
				es: "Tragón"
			}
		}
	]
};
var ration_taken = {
	id: "ration_taken",
	name: {
		en: "Rations eaten",
		fr: "Rations avalées",
		de: "Rations eaten",
		es: "Raciones consumidas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Greedy Pig",
				fr: "Goinfre",
				de: "Greedy Pig",
				es: "Glotón"
			}
		}
	]
};
var frozen_taken = {
	id: "frozen_taken",
	name: {
		en: "Frozen food eaten",
		fr: "Aliments Congelés avalés",
		de: "Frozen food eaten",
		es: "Alimentos congelados consumidos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Yeti",
				fr: "Yéti",
				de: "Yeti",
				es: "Yeti"
			}
		}
	]
};
var grenadier = {
	id: "grenadier",
	name: {
		en: "Grenadier",
		fr: "Grenadier",
		de: "Grenadier",
		es: "Granadero"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Grenadier",
				fr: "Grenadier",
				de: "Grenadier",
				es: "Granadero"
			}
		}
	],
	description: {
		en: "Grenades used by your team on expeditions",
		fr: "Nombre de grenades utilisées en expédition par votre équipe.",
		de: "Grenades used by your team on expeditions",
		es: "Cantidad de granadas utilizadas en expedición por tu equipo."
	}
};
var natamist = {
	id: "natamist",
	name: {
		en: "Natamist",
		fr: "Natamiste",
		de: "Natamist",
		es: "Fusilador"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Rifleman",
				fr: "Lepiocidaire",
				de: "Rifleman",
				es: "Fusilador"
			}
		}
	],
	description: {
		en: "Represents ofstroyed with the Natamy Rifle",
		fr: "Représentant Mush détruit au Fusil Natamy",
		de: "Represents ofstroyed with the Natamy Rifle",
		es: "Mush destruido por un Fusil Natamy"
	}
};
var mush_killed = {
	id: "mush_killed",
	name: {
		en: "Shroom Killer",
		fr: "Bourreau Des Mush",
		de: "Shroom Killer",
		es: "Verdugo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Sporophobe",
				fr: "Sporophobe",
				de: "Sporophobe",
				es: "Matamush"
			}
		}
	],
	description: {
		en: "You have wasted Mush with your own two hands!",
		fr: "Mush que vous avez tués de vos propres mains !",
		de: "You have wasted Mush with your own two hands!",
		es: "¡Mush que has matado con tus propias manos!"
	}
};
var team_mush_killed = {
	id: "team_mush_killed",
	name: {
		en: "Soldier of Humanity",
		fr: "Soldat de l'Humanité",
		de: "Soldier of Humanity",
		es: "Defensor de la Humanidad"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			title: {
				en: "Agaric Eater",
				fr: "Mangeur D'Agaric",
				de: "Agaric Eater",
				es: "Miradas amenazadoras"
			}
		},
		{
			count: 50,
			points: 8,
			title: {
				en: "Puffball Exploder",
				fr: "Exploseur De Vesse De Loup",
				de: "Puffball Exploder",
				es: "Matones"
			}
		},
		{
			count: 100,
			points: 10,
			title: {
				en: "Boletus Crusher",
				fr: "Ecraseur de Bolet",
				de: "Boletus Crusher",
				es: "Pandillero"
			}
		},
		{
			count: 200,
			points: 20,
			title: {
				en: "Shroom Broom",
				fr: "Ravageur Du Père Magotte",
				de: "Shroom Broom",
				es: "Gangster"
			}
		},
		{
			count: 500,
			points: 30,
			title: {
				en: "Meadow Menace",
				fr: "Cauchemard Des Prés",
				de: "Meadow Menace",
				es: "Pesadilla"
			}
		},
		{
			count: 750,
			points: 40,
			title: {
				en: "Great Myconian Plague",
				fr: "Grand Fléau Myconien",
				de: "Great Myconian Plague",
				es: "Cuadrilla"
			}
		},
		{
			count: 1000,
			points: 50,
			title: {
				en: "Great Tribal Leader of the Devourers of Phallic Amanite",
				fr: "Chef De Caste Des Dévoreurs D'Amanite Phalloïde",
				de: "Great Tribal Leader of the Devourers of Phallic Amanite",
				es: "Jefe de tropa antimushiana"
			}
		},
		{
			count: 2000,
			points: 30,
			title: {
				en: "Grand Temporal Rhizome Destroyer",
				fr: "Archi Déchireur Des Rhizomes Temporels",
				de: "Grand Temporal Rhizome Destroyer",
				es: "Archienemigo del Mush"
			}
		},
		{
			count: 4000,
			points: 30,
			title: {
				en: "Great Ancient Purifier of Cheaters of Death",
				fr: "Purificateur Des Trompes De La Mort Des Grandes Anciennes",
				de: "Great Ancient Purifier of Cheaters of Death",
				es: "Aniquilador de Mush"
			}
		}
	],
	description: {
		en: "Mush invaders decimated by the crews with which you have travelled",
		fr: "Envahisseurs Mush décimés par les équipages avec lesquels vous avez voyagé.",
		de: "Mush invaders decimated by the crews with which you have travelled",
		es: "Invasores Mush aniquilados por el equipo con el que viajabas."
	}
};
var camera_installed = {
	id: "camera_installed",
	name: {
		en: "Telegenius",
		fr: "Télégénie",
		de: "Telegenius",
		es: "Broadcaster"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			suffix: true,
			title: {
				en: "Telegenic",
				fr: "Télégénique",
				de: "Telegenic",
				es: "Mediático"
			}
		}
	],
	description: {
		en: "Cameras Installed",
		fr: "Caméras installées",
		de: "Cameras Installed",
		es: "Cámaras instaladas"
	}
};
var cat_cuddled = {
	id: "cat_cuddled",
	name: {
		en: "Cat Cuddles",
		fr: "Chats câlinés",
		de: "Cat Cuddles",
		es: "Gatos acariciados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			suffix: true,
			title: {
				en: "Felinophile",
				fr: "Felinophile",
				de: "Felinophile",
				es: "Gatubelo"
			}
		}
	],
	description: {
		en: "Number of times you have caught Schrödinger",
		fr: "Nombre de fois où vous avez attrapé Schrödinger.",
		de: "Number of times you have caught Schrödinger",
		es: "Cantidad de veces en las que has atrapado a Schrödinger."
	}
};
var disease_contracted = {
	id: "disease_contracted",
	name: {
		en: "Disease Contracted",
		fr: "Maladies contractées",
		de: "Disease Contracted",
		es: "Enfermedades contraídas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			suffix: true,
			title: {
				en: "Hypocondriac",
				fr: "Hypocondriaque",
				de: "Hypocondriac",
				es: "Hipocondríaco"
			}
		},
		{
			count: 10,
			points: 0,
			suffix: true,
			title: {
				en: "Sicknote",
				fr: "Chétif",
				de: "Sicknote",
				es: "Bajas Defensas"
			}
		},
		{
			count: 20,
			points: 0,
			prefix: true,
			title: {
				en: "Chronic Sufferer",
				fr: "Malade Chronique",
				de: "Chronic Sufferer",
				es: "Enfermo Crónico"
			}
		},
		{
			count: 50,
			points: 0,
			prefix: true,
			title: {
				en: "Needs to man up",
				fr: "Grand Soufreteux",
				de: "Needs to man up",
				es: "Paciente de Oro"
			}
		}
	],
	description: {
		en: "Vomiting, coughs, colds and other complaints...",
		fr: "Vomissement, Toux, Grippe, et autres désagréments...",
		de: "Vomiting, coughs, colds and other complaints...",
		es: "Vómitos, Tos, Gripe, y demás..."
	}
};
var venerian_disease = {
	id: "venerian_disease",
	name: {
		en: "Venereal Diseases Caught",
		fr: "Maladies vénériennes contractées",
		de: "Venereal Diseases Caught",
		es: "Enfermedades venéreas contraídas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			prefix: true,
			title: {
				en: "Hedonist",
				fr: "Hédoniste",
				de: "Hedonist",
				es: "Promiscuo"
			}
		}
	],
	description: {
		en: "...",
		fr: "...",
		de: "...",
		es: "..."
	}
};
var mankarog_down = {
	id: "mankarog_down",
	name: {
		en: "Mankarogs Killed",
		fr: "Mankarogs Abattus",
		de: "Mankarogs Killed",
		es: "Mankarogs abatidos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Davy Crockett of Infinite Space",
				fr: "Davy Crockett De L'Infini ",
				de: "Davy Crockett of Infinite Space",
				es: "Cazador de lo Extremo"
			}
		}
	],
	description: {
		en: "Mankarogs killed by your team during expeditions",
		fr: "Mankarogs tués par votre équipe en expédition",
		de: "Mankarogs killed by your team during expeditions",
		es: "Mankarogs abatidos por tu equipo en expedición"
	}
};
var succeeded_inspection = {
	id: "succeeded_inspection",
	name: {
		en: "Successful Inspections",
		fr: "Inspections Réussies",
		de: "Successful Inspections",
		es: "Inspecciones exitosas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Elijah Baley",
				fr: "Elijah Baley",
				de: "Elijah Baley",
				es: "Elijah Baley"
			}
		}
	],
	description: {
		en: "He who searches, finds!",
		fr: "Qui cherche trouve !",
		de: "He who searches, finds!",
		es: "¡El que busca, encuentra!"
	}
};
var kind_person = {
	id: "kind_person",
	name: {
		en: "Psychological Support",
		fr: "Soutiens Psychologiques",
		de: "Psychological Support",
		es: "Ayudas psicológicas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Psychologist of the ages",
				fr: "Psychologue Des Eons",
				de: "Psychologist of the ages",
				es: "Psicólogo Espacial"
			}
		}
	],
	description: {
		en: "On this occasion, you managed to find the perfect words...",
		fr: "A ce moment là, vous avez su trouvez les mots justes...",
		de: "On this occasion, you managed to find the perfect words...",
		es: "Todo comenzó una vez, cuando ..."
	}
};
var coffee_man = {
	id: "coffee_man",
	name: {
		en: "Caffeine Junkie",
		fr: "Squatteur De Cafetière",
		de: "Caffeine Junkie",
		es: "Adicto al café"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Coffee Barprop",
				fr: "Pilier De Comptoir",
				de: "Coffee Barprop",
				es: "Bebedor Compulsivo"
			}
		}
	],
	description: {
		en: "Number of coffees taken from the machine.",
		fr: "Nombre de cafés retirés en machine.",
		de: "Number of coffees taken from the machine.",
		es: "Cantidad de cafés retirados de la máquina."
	}
};
var commander_should_go_last = {
	id: "commander_should_go_last",
	name: {
		en: "Last Commandant",
		fr: "Dernier Commandant",
		de: "Last Commandant",
		es: "Último comandante"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 20,
			title: {
				en: "Last Commandant",
				fr: "Dernier Commandant",
				de: "Last Commandant",
				es: "Último Comandante"
			}
		},
		{
			count: 2,
			points: 20,
			title: {
				en: "Last Commandant of the Ages",
				fr: "Dernier Commandant Des Abymes",
				de: "Last Commandant of the Ages",
				es: "Último Comandante del Bote"
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Last Commandant of the Eons",
				fr: "Dernier Commandant Des Eons",
				de: "Last Commandant of the Eons",
				es: "Último Comandante del Barco"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Last Galactic Commandant",
				fr: "Dernier Commandant De La Galaxie",
				de: "Last Galactic Commandant",
				es: "Último Comandante del Crucero"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Last Warp Commandant",
				fr: "Dernier Commandant Des Cordes",
				de: "Last Warp Commandant",
				es: "Último Comandante del Navío"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Last Universal Commandant",
				fr: "Dernier Commandant De L'Univers",
				de: "Last Universal Commandant",
				es: "Último Comandante del Espacio"
			}
		}
	],
	description: {
		en: "The Commandant must always be the last to leave the ship.",
		fr: "Le Commandant doit être le dernier à quitter le vaisseau.",
		de: "The Commandant must always be the last to leave the ship.",
		es: "El comandante siempre es el último en abandonar la nave."
	}
};
var last_member = {
	id: "last_member",
	name: {
		en: "Last Man Standing",
		fr: "Dernier survivant",
		de: "Last Man Standing",
		es: "Último superviviente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 10,
			title: {
				en: "Hero of Sol",
				fr: "Héros De Sol",
				de: "Hero of Sol",
				es: "Héroe de Esquina"
			}
		},
		{
			count: 2,
			points: 10,
			title: {
				en: "Wrestling Champion",
				fr: "Champion De La Lutte",
				de: "Wrestling Champion",
				es: "Duro de Matar"
			}
		},
		{
			count: 5,
			points: 20,
			title: {
				en: "Ultimate Martyr",
				fr: "Martyr Ultime",
				de: "Ultimate Martyr",
				es: "Mártir por Excelencia"
			}
		},
		{
			count: 10,
			points: 5,
			title: {
				en: "Last Hope",
				fr: "Dernier Espoir",
				de: "Last Hope",
				es: "Última Esperanza"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Infinite Warrior",
				fr: "Combattant De L'Infini",
				de: "Infinite Warrior",
				es: "Combatiente sin Igual"
			}
		},
		{
			count: 100,
			points: 1,
			prefix: true,
			title: {
				en: "Immortal",
				fr: "Immortel",
				de: "Immortal",
				es: "Soy Inmortal"
			}
		}
	],
	description: {
		en: "You held out until the end. You have become part of History!",
		fr: "Vous avez tenu bon jusqu'à la fin. Vous faites partie de l'Histoire !",
		de: "You held out until the end. You have become part of History!",
		es: "¡Has sobrevivido hasta el final, eres parte de la historia!"
	}
};
var communicator = {
	id: "communicator",
	name: {
		en: "Communications Expert",
		fr: "Responsable Des Communications",
		de: "Communications Expert",
		es: "Oficial de comunicaciones"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Communications Officer",
				fr: "Responsable Des Communications",
				de: "Communications Officer",
				es: "Oficial de Comunicaciones"
			}
		},
		{
			count: 5,
			points: 1,
			title: {
				en: "Head of Communications",
				fr: "Chef Des Communications",
				de: "Head of Communications",
				es: "Ministro de Comunicaciones"
			}
		}
	],
	description: {
		en: "During one of your voyages, your crew successfully completed a series of legendary tasks using the communications module.",
		fr: "Durant un de vos voyages, votre équipage a réussi à effectuer une quantité de tâches légendaire dans le module de Communication",
		de: "During one of your voyages, your crew successfully completed a series of legendary tasks using the communications module.",
		es: "Durante uno de tus viajes, tu equipo ha logrado realizar una gran cantidad de tareas en el módulo de comunicación"
	}
};
var mush_genome = {
	id: "mush_genome",
	name: {
		en: "Enigma Decoder",
		fr: "Décrypteur de l'Enigme",
		de: "Enigma Decoder",
		es: "Revelador de enigmas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Mush Authority",
				fr: "Expert En Mush",
				de: "Mush Authority",
				es: "Experto en Mush"
			}
		}
	],
	description: {
		en: "During one of your voyages, your team solved the Mush enigma.",
		fr: "Durant un de vos voyages, votre équipage a résolu l'énigme du Gênome Mush.",
		de: "During one of your voyages, your team solved the Mush enigma.",
		es: "Durante uno de tus viajes, tu equipo ha resuelto el enigma del genoma Mush."
	}
};
var research_digged = {
	id: "research_digged",
	name: {
		en: "Researcher",
		fr: "Chercheur",
		de: "Researcher",
		es: "Investigador"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Laboratory Technician",
				fr: "Technicien De Laboratoire",
				de: "Laboratory Technician",
				es: "Laboratorista"
			}
		}
	],
	description: {
		en: "Research projects completed",
		fr: "Nombre de recherches achevées",
		de: "Research projects completed",
		es: "Cantidad de investigaciones científicas terminadas"
	}
};
var project_digged = {
	id: "project_digged",
	name: {
		en: "Designer",
		fr: "Concepteur",
		de: "Designer",
		es: "Creador"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			prefix: true,
			title: {
				en: "Designer",
				fr: "Concepteur",
				de: "Designer",
				es: "Inventor"
			}
		}
	],
	description: {
		en: "Number of projects completed",
		fr: "Nombre de Projets achevés",
		de: "Number of projects completed",
		es: "Cantidad de proyectos acabados"
	}
};
var day_max = {
	id: "day_max",
	name: {
		en: "Longest Voyage",
		fr: "Voyage Le Plus Long",
		de: "Longest Voyage",
		es: "El viaje más largo"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Day Of The Locusts",
				fr: "Day Of The Locusts",
				de: "Day Of The Locusts",
				es: "El día de la langosta"
			}
		},
		{
			count: 4,
			points: 1,
			title: {
				en: "Hero Of The Day",
				fr: "Hero Of The Day",
				de: "Hero Of The Day",
				es: "Héroe del día"
			}
		},
		{
			count: 5,
			points: 1,
			title: {
				en: "If Today Was Your Last Day",
				fr: "If Today Was Your Last Day",
				de: "If Today Was Your Last Day",
				es: "El día de mi suerte"
			}
		},
		{
			count: 6,
			points: 1,
			title: {
				en: "One More Rainy Day",
				fr: "One More Rainy Day",
				de: "One More Rainy Day",
				es: "Días aquellos"
			}
		},
		{
			count: 7,
			points: 1,
			title: {
				en: "Day Sleeper",
				fr: "Day Sleeper",
				de: "Day Sleeper",
				es: "El día trajo la oscuridad"
			}
		},
		{
			count: 8,
			points: 1,
			title: {
				en: "Eight Days A Week",
				fr: "Eight Days A Week",
				de: "Eight Days A Week",
				es: "Un buen día para morir"
			}
		},
		{
			count: 9,
			points: 1,
			title: {
				en: "Rainy Day Dream Away",
				fr: "Rainy Day Dream Away",
				de: "Rainy Day Dream Away",
				es: "Los últimos días"
			}
		},
		{
			count: 10,
			points: 1,
			title: {
				en: "A Hard Day's Night",
				fr: "A Hard Day's Night",
				de: "A Hard Day's Night",
				es: "A Hard Day's Night"
			}
		},
		{
			count: 11,
			points: 5,
			title: {
				en: "Perfect Day",
				fr: "Perfect Day",
				de: "Perfect Day",
				es: "Día perfecto"
			}
		},
		{
			count: 12,
			points: 0,
			title: {
				en: "Glory Days",
				fr: "Glory Days",
				de: "Glory Days",
				es: "Días de gloria"
			}
		},
		{
			count: 13,
			points: 0,
			title: {
				en: "Oh Happy Days",
				fr: "Oh Happy Days",
				de: "Oh Happy Days",
				es: "Días felices"
			}
		}
	],
	description: {
		en: "Number of days of your longest voyage aboard the Daedalus",
		fr: "Durée en jours de votre plus long voyage à bord du Daedalus.",
		de: "Number of days of your longest voyage aboard the Daedalus",
		es: "El viaje más largo en tiempo que has realizado a bordo del Daedalus."
	}
};
var quasar_first = {
	id: "quasar_first",
	name: {
		en: "Golden Supernova",
		fr: "Super Nova d'Or",
		de: "Golden Supernova",
		es: "Super Nova de Oro"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	],
	description: {
		en: "You placed first in the Triumph rankings",
		fr: "Vous avez été premier au classement de Triomphe",
		de: "You placed first in the Triumph rankings",
		es: "Has sido el primero en la Clasificación de Gloria"
	}
};
var quasar_second = {
	id: "quasar_second",
	name: {
		en: "Supernova of Excellence",
		fr: "Super Nova d'Excellence",
		de: "Supernova of Excellence",
		es: "Super Nova del Valor"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	],
	description: {
		en: "You placed second in the Triumph rankings",
		fr: "Vous avez été second au classement de Triomphe",
		de: "You placed second in the Triumph rankings",
		es: "Has sido el segundo en la Clasificación de Gloria"
	}
};
var quasar_third = {
	id: "quasar_third",
	name: {
		en: "Honorable Supernova",
		fr: "Super Nova d'Honneur",
		de: "Honorable Supernova",
		es: "Super Nova de Honor"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	],
	description: {
		en: "You placed third in the Triumph rankings",
		fr: "Vous avez été troisième au classement de Triomphe",
		de: "You placed third in the Triumph rankings",
		es: "Has sido el tercero en la Clasificación de Gloria"
	}
};
var quasar_fourth = {
	id: "quasar_fourth",
	name: {
		en: "Discovered Supernova",
		fr: "Super Nova Révélée",
		de: "Discovered Supernova",
		es: "Super Nova Sideral"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	],
	description: {
		en: "You placed fourth in the Triumph rankings",
		fr: "Vous avez été quatrième au classement de Triomphe",
		de: "You placed fourth in the Triumph rankings",
		es: "Has sido cuarto en la Clasificación de Gloria"
	}
};
var quasar_special = {
	id: "quasar_special",
	name: {
		en: "Special Nova",
		fr: "Nova Spécial",
		de: "Special Nova",
		es: "Nova Especial"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	],
	description: {
		en: "You made it into the top 7 of the Triumph rankings",
		fr: "Vous avez fait partie des 7 premiers au classement de Triomphe",
		de: "You made it into the top 7 of the Triumph rankings",
		es: "Has sido uno de los 7 primeros en la Clasificación de Gloria"
	}
};
var quasar_figurant = {
	id: "quasar_figurant",
	name: {
		en: "Nova",
		fr: "Nova",
		de: "Nova",
		es: "Nova"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	],
	description: {
		en: "Number of times you've made it into the last 9",
		fr: "Nombre de fois où vous avez fait partie des 9 derniers",
		de: "Number of times you've made it into the last 9",
		es: "Cantidad de veces en que has sido uno de los 9 últimos"
	}
};
var mush_tease_EW = {
	id: "mush_tease_EW",
	name: {
		en: "Mini Mush Portrait of Eleesha",
		fr: "Mini Portrait Mush de Eleesha",
		de: "Mini Mush Portrait of Eleesha",
		es: "Miniretrato Mush de Eleesha"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_FK = {
	id: "mush_tease_FK",
	name: {
		en: "Mini Mush Portrait of Finola",
		fr: "Mini Portrait Mush de Finola",
		de: "Mini Mush Portrait of Finola",
		es: "Miniretrato Mush de Finola"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_FB = {
	id: "mush_tease_FB",
	name: {
		en: "Mini Mush Portrait of Frieda",
		fr: "Mini Portrait Mush de Frieda",
		de: "Mini Mush Portrait of Frieda",
		es: "Miniretrato Mush de Frieda"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_GR = {
	id: "mush_tease_GR",
	name: {
		en: "Mini Mush Portrait of Gioele",
		fr: "Mini Portrait Mush de Gioele",
		de: "Mini Mush Portrait of Gioele",
		es: "Miniretrato Mush de Gioele"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_IS = {
	id: "mush_tease_IS",
	name: {
		en: "Mini Mush Portrait of Ian",
		fr: "Mini Portrait Mush de Ian",
		de: "Mini Mush Portrait of Ian",
		es: "Miniretrato Mush de Ian"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_JK = {
	id: "mush_tease_JK",
	name: {
		en: "Mini Mush Portrait of Janice",
		fr: "Mini Portrait Mush de Janice",
		de: "Mini Mush Portrait of Janice",
		es: "Miniretrato Mush de Janice"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_JH = {
	id: "mush_tease_JH",
	name: {
		en: "Mini Mush Portrait of Hua",
		fr: "Mini Portrait Mush de Hua",
		de: "Mini Mush Portrait of Hua",
		es: "Miniretrato Mush de Hua"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_KJS = {
	id: "mush_tease_KJS",
	name: {
		en: "Mini Mush Portrait of Jin Su",
		fr: "Mini Portrait Mush de Jin Su",
		de: "Mini Mush Portrait of Jin Su",
		es: "Miniretrato Mush de Jin Su"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_LKT = {
	id: "mush_tease_LKT",
	name: {
		en: "Mini Mush Portrait of Kuan Ti",
		fr: "Mini Portrait Mush de Kuan Ti",
		de: "Mini Mush Portrait of Kuan Ti",
		es: "Miniretrato Mush de Kuan Ti"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_PR = {
	id: "mush_tease_PR",
	name: {
		en: "Mini Mush Portrait of Paola",
		fr: "Mini Portrait Mush de Paola",
		de: "Mini Mush Portrait of Paola",
		es: "Miniretrato Mush de Paola"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_RT = {
	id: "mush_tease_RT",
	name: {
		en: "Mini Mush Portrait of Raluca",
		fr: "Mini Portrait Mush de Raluca",
		de: "Mini Mush Portrait of Raluca",
		es: "Miniretrato Mush de Raluca"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_RZ = {
	id: "mush_tease_RZ",
	name: {
		en: "Mini Mush Portrait of Roland",
		fr: "Mini Portrait Mush de Roland",
		de: "Mini Mush Portrait of Roland",
		es: "Miniretrato Mush de Roland"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_SS = {
	id: "mush_tease_SS",
	name: {
		en: "Mini Mush Portrait of Stephen",
		fr: "Mini Portrait Mush de Stephen",
		de: "Mini Mush Portrait of Stephen",
		es: "Miniretrato Mush de Stephen"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_TA = {
	id: "mush_tease_TA",
	name: {
		en: "Mini Mush Portrait of Terrence",
		fr: "Mini Portrait Mush de Terrence",
		de: "Mini Mush Portrait of Terrence",
		es: "Miniretrato Mush de Terrence"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_WC = {
	id: "mush_tease_WC",
	name: {
		en: "Mini Mush Portrait of Chao",
		fr: "Mini Portrait Mush de Chao",
		de: "Mini Mush Portrait of Chao",
		es: "Miniretrato Mush de Chao"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_ZC = {
	id: "mush_tease_ZC",
	name: {
		en: "Mini Mush Portrait of Chun",
		fr: "Mini Portrait Mush de Chun",
		de: "Mini Mush Portrait of Chun",
		es: "Miniretrato Mush de Chun"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var mush_tease_SCH = {
	id: "mush_tease_SCH",
	name: {
		en: "Mini Mush Portrait of Schrödinger",
		fr: "Mini Portrait Mush de Schrödinger",
		de: "Mini Mush Portrait of Schrödinger",
		es: "Miniretrato Mush de Schrödinger"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var jin_su = {
	id: "jin_su",
	name: {
		en: "Number of cycles won playing as the chief",
		fr: "Nombre de cycles passés à jouer au chef",
		de: "Number of cycles won playing as the chief",
		es: "Ciclos pasados jugando al jefe"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/jinsu.png",
			title: {
				en: "FDS Bootlicker",
				fr: "Fayot de la FDS",
				de: "FDS Bootlicker",
				es: "Yo no soy marinero..."
			},
			description: {
				en: "You were the captain of the Daedalus, so... how did it feel? All-powerful?",
				fr: "Vous avez été dans la peau du commandant du Daedalus, alors... comment on se sent, tout puissant ?",
				de: "You were the captain of the Daedalus, so... how did it feel? All-powerful?",
				es: "Has estado en los zapatos del comandante del Daedalus. ¿Qué se siente tener el poder?"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Oye Oye! Captain Abandoned",
				fr: "Ohé, ohé, capitaine abandonné",
				de: "Oye Oye! Captain Abandoned",
				es: "Soy capitán, soy capitán... Bamba-bamba"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Admiral-ien",
				fr: "Amirâl'eur",
				de: "Admiral-ien",
				es: "Almirante"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "The boss",
				fr: "The boss",
				de: "The boss",
				es: "El jefe"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Supreme Commander-in-Chief",
				fr: "Commandant suprême en chef",
				de: "Supreme Commander-in-Chief",
				es: "Comandante supremo"
			}
		}
	]
};
var frieda = {
	id: "frieda",
	name: {
		en: "Number of cycles won reading the cards",
		fr: "Nombre de cycles passés à lire des cartes",
		de: "Number of cycles won reading the cards",
		es: "Ciclos pasados leyendo mapas"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/frieda.png",
			title: {
				en: "Navigator-mented",
				fr: "Navi-gâteux",
				de: "Navigator-mented",
				es: "Timón de papel"
			},
			description: {
				en: "You were the navigator of the Daedalus, so... how did it feel? Dizzying?",
				fr: "Vous avez été dans la peau de la navigatrice du Daedalus, alors... comment on se sent, désorienté ?",
				de: "You were the navigator of the Daedalus, so... how did it feel? Dizzying?",
				es: "Has estado en el puesto de la experta en navegación del Daedalus, ¿qué se siente perderse?"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "After the nebula, take a right",
				fr: "Après la nebuleuse, tournez à droite",
				de: "After the nebula, take a right",
				es: "Más allá de la nebulosa"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Compass in the eye",
				fr: "Compas dans l'oeil",
				de: "Compass in the eye",
				es: "Ojo de astrolabio"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Astro-Physico-Navigato",
				fr: "Astro-Physico-Navigato",
				de: "Astro-Physico-Navigato",
				es: "Astronavegante"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Encyclopedia Universalo",
				fr: "Encyclopedia Universalis",
				de: "Encyclopedia Universalo",
				es: "GPS espacial"
			}
		}
	]
};
var kuan_ti = {
	id: "kuan_ti",
	name: {
		en: "Number of cycles won contemplating your work",
		fr: "Nombre de cycles à contempler son oeuvre",
		de: "Number of cycles won contemplating your work",
		es: "Ciclos pasados admirando tu obra"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/kuanti.png",
			title: {
				en: "Lego system",
				fr: "Lego system",
				de: "Lego system",
				es: "Campeón de Lego"
			},
			description: {
				en: "You were the designer of the Daedalus, so... how did you feel? Proud?",
				fr: "Vous avez été dans la peau du concepteur du Daedalus, alors... comment on se sent, fier ?",
				de: "You were the designer of the Daedalus, so... how did you feel? Proud?",
				es: "Has estado en el lugar de un creador Daedalus. ¿Orgulloso?"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Steel plated and diamond studded",
				fr: "Blindé d'argent et d'acier",
				de: "Steel plated and diamond studded",
				es: "Diseñador de naves"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Space-iceberg proof",
				fr: "A l'épreuve des icebergs spatiaux",
				de: "Space-iceberg proof",
				es: "Yo construí esa nave, ¿y tu?"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Backwards-compatible Architect",
				fr: "Architecte retro-compatible",
				de: "Backwards-compatible Architect",
				es: "Noé moderno"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Universally Classy",
				fr: "La grande classe universelle",
				de: "Universally Classy",
				es: "Soy el padre del Daedalus"
			}
		}
	]
};
var janice = {
	id: "janice",
	name: {
		en: "Number of cycles won... listening to others",
		fr: "Nombre de cycles passés à allu...écouter les autres",
		de: "Number of cycles won... listening to others",
		es: "Ciclos pasados escuchando a los demás"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/janice.png",
			title: {
				en: "zZz....zZzz...",
				fr: "zZz....zZzz...",
				de: "zZz....zZzz...",
				es: "Amor cibernético"
			},
			description: {
				en: "You were the psychologist of the Daedalus, so... how did you feel? Mad?",
				fr: "Vous avez été dans la peau de la psychologue du Daedalus, alors... comment on se sent, folle ?",
				de: "You were the psychologist of the Daedalus, so... how did you feel? Mad?",
				es: "Has sido psicólogo(a) en el Daedalus. ¿De verdad están todos locos?"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Gnan Gnan Style",
				fr: "Gnan Gnan Style",
				de: "Gnan Gnan Style",
				es: "Psy Coreano"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "In the eyes, I read it in your eyes!",
				fr: "Dans les yeux, j'ai dit dans les yeux !",
				de: "In the eyes, I read it in your eyes!",
				es: "¡Mírame a los ojos cuando hablo!"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Psycho-Bimbo",
				fr: "Psycho-Bimbo",
				de: "Psycho-Bimbo",
				es: "Psyco-Bimbo"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Janice S. Freud",
				fr: "Janice S. Freud",
				de: "Janice S. Freud",
				es: "Janice S. Freud"
			}
		}
	]
};
var roland = {
	id: "roland",
	name: {
		en: "Number of cycles won running round in circles",
		fr: "Nombre de cycles à tourner en rond",
		de: "Number of cycles won running round in circles",
		es: "Ciclos en una nave de caza"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/roland.png",
			title: {
				en: "Choo choo!",
				fr: "Tchou tchou !",
				de: "Choo choo!",
				es: "¡Arranca!"
			},
			description: {
				en: "You were the most feared hunter aboard the Daedalus... In saying that, there weren't that many hunters...",
				fr: "Vous avez été dans la peau d'un des plus redoutable chasseur du Daedalus... Bon, vous n'êtes pas très nombreux non plus...",
				de: "You were the most feared hunter aboard the Daedalus... In saying that, there weren't that many hunters...",
				es: "Has sido un piloto de caza en el Daedalus... ¡Bam, bam, BUUUUM!"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Full speed ahead!",
				fr: "Full speed !",
				de: "Full speed ahead!",
				es: "¡A toda velocidad!"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Ever further, ever faster!",
				fr: "Toujours plus vite, toujours plus loin !",
				de: "Ever further, ever faster!",
				es: "Vuelo low cost"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Spatio-temporal Interlooper",
				fr: "Interlooper spatio-temporel",
				de: "Spatio-temporal Interlooper",
				es: "Piloto chiflado"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Ace of all ace space-cases",
				fr: "As des As de l'esp-As",
				de: "Ace of all ace space-cases",
				es: "Top Gun del espacio"
			}
		}
	]
};
var hua = {
	id: "hua",
	name: {
		en: "Number of cycles won, spent with the others",
		fr: "Nombre de cycles passés à fréquenter des 3èmes types",
		de: "Number of cycles won, spent with the others",
		es: "Ciclos pasados con contactos del tercer tipo"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/hua.png",
			title: {
				en: "A mars and we're off",
				fr: "Un mars et ça repart",
				de: "A mars and we're off",
				es: "Yo traigo las bebidas"
			},
			description: {
				en: "You were a legendary explorer, how did it go... were you disappointed not to have 3 eyes?",
				fr: "Vous avez été dans la peau d'une exploratrice légendaire, alors... déçu de ne pas avoir 3 yeux ?",
				de: "You were a legendary explorer, how did it go... were you disappointed not to have 3 eyes?",
				es: "Has sido una exploradora legendaria. Te hubiese gustado tener 3 ojos, ¿verdad?"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Dude, where's my ship?",
				fr: "Hé mec, Il est où mon vaisseau ?",
				de: "Dude, where's my ship?",
				es: "Cuando tu vas, yo ya volví"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "You don't exactly look like a lucky charm!",
				fr: "Toi, t'as pas une gueule de porte-bonheur !",
				de: "You don't exactly look like a lucky charm!",
				es: "Viajar conmigo es un placer"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Everyone is lost bar me?! ",
				fr: "Tout le monde est perdu sauf moi ?! ",
				de: "Everyone is lost bar me?! ",
				es: "Todos se pierden, menos yo"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "The Epic voyages of Jiang Hua",
				fr: "Les voyages de Jiang Hua",
				de: "The Epic voyages of Jiang Hua",
				es: "Jiang Hua Tours"
			}
		}
	]
};
var paola = {
	id: "paola",
	name: {
		en: "Number of cycles spent surfing the lowest frequencies",
		fr: "Nombre de cycles passés à surfer sur les basses fréquences",
		de: "Number of cycles spent surfing the lowest frequencies",
		es: "Ciclos pasados buscando en las bajas frecuencias"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/paola.png",
			title: {
				en: "bzzzz...Bzzztt!",
				fr: "bzzzz...Bzzzitt !",
				de: "bzzzz...Bzzztt!",
				es: "Shhhh... ¡Silencio!"
			},
			description: {
				en: "You have been an intrepid system rebel, nothing and nobody can distract you from the truth!",
				fr: "Vous avez été dans la peau d'une intrépide rebelle au système, rien ni personne ne peut vous détourner de la vérité !",
				de: "You have been an intrepid system rebel, nothing and nobody can distract you from the truth!",
				es: "Has sido una rebelde intrépida. Un modelo a seguir en las próximas misiones."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Purple tuft emitter",
				fr: "Purple touffe émettrice",
				de: "Purple tuft emitter",
				es: "Me quema el chisme"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Radiohead",
				fr: "Radiohead",
				de: "Radiohead",
				es: "Radiohead"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Video killed, radio star",
				fr: "Video killed, radio star",
				de: "Video killed, radio star",
				es: "Cuéntamelo todo y exagera"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "2.21 GigaHertz!",
				fr: "2,21 GigaHertz !",
				de: "2.21 GigaHertz!",
				es: "¡Lo sabía!"
			}
		}
	]
};
var chao = {
	id: "chao",
	name: {
		en: "Number of cycles spent taking stuff out",
		fr: "Nombre de cycles passés à dégommer des trucs",
		de: "Number of cycles spent taking stuff out",
		es: "Ciclos pasados disparándole a cosas"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/chao.png",
			title: {
				en: "Boom! hahahaha...",
				fr: "Boom! héhéhé...",
				de: "Boom! hahahaha...",
				es: "¡Bim-Bam-BUUUM!"
			},
			description: {
				en: "You have been a galactic sharp-shooter, are you still as trigger-happy?",
				fr: "Vous avez été dans la peau d'un franc-tireur de l'espace, vous avez encore la gachette facile ?",
				de: "You have been a galactic sharp-shooter, are you still as trigger-happy?",
				es: "Has sido un francotirador del espacio. ¡Ya deja de apuntarme!"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Keep your griends close, and your enemies closer.",
				fr: "Garde tes amis près de toi, et tes ennemis encore plus près.",
				de: "Keep your griends close, and your enemies closer.",
				es: "¡Te tengo en la mira!"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "If you're asking the question, Doctor Caliber has the answer.",
				fr: "Si vous posez une question, monsieur calibre donne la réponse.",
				de: "If you're asking the question, Doctor Caliber has the answer.",
				es: "Ven con papi, eso es"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "If any of you move, I will execute every last one of you!",
				fr: "Le premier qui bouge, je lui fais frire la cervelle !",
				de: "If any of you move, I will execute every last one of you!",
				es: "¡Mi bala en tu frente!"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Last Action Weirdo",
				fr: "Last action barjo",
				de: "Last Action Weirdo",
				es: "Ya perdiste"
			}
		}
	]
};
var finola = {
	id: "finola",
	name: {
		en: "Number of cycles examining the infinitely small",
		fr: "Nombre de cycles passés à scruter l'infiniment petit",
		de: "Number of cycles examining the infinitely small",
		es: "Ciclos viendo la vida a través de un microscopio"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/finola.png",
			title: {
				en: "What on earth am I doing?",
				fr: "Mais qu'est ce que je fais là ?",
				de: "What on earth am I doing?",
				es: "Quisiera ser un microbito"
			},
			description: {
				en: "You were a renowned scientist, could you be persuaded to refute that for a tasty bonus?",
				fr: "Vous avez été dans la peau d'une scientifique de renom, vous ne diriez pas non pour un petit prélévement de plus ?",
				de: "You were a renowned scientist, could you be persuaded to refute that for a tasty bonus?",
				es: "Has sido un científico de renombre intergaláctico. Nunca pensaste ser tan inteligente, ¿verdad?"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Neutrino mutation detected",
				fr: "Neutrino crochu",
				de: "Neutrino mutation detected",
				es: "Bicho malo pillé"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "The universe in 10²²",
				fr: "L'univers en 10²²",
				de: "The universe in 10²²",
				es: "Friki de la ciencia"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Plancking in the labs again",
				fr: "Plancké dans le mur",
				de: "Plancking in the labs again",
				es: "Científico Geek"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Master of the universe",
				fr: "Master of the universe",
				de: "Master of the universe",
				es: "Quinto Elemento"
			}
		}
	]
};
var stephen = {
	id: "stephen",
	name: {
		en: "Number of cycles spent cooking up suspect dishes",
		fr: "Nombre de cycles passés à cuisiner des plats suspects",
		de: "Number of cycles spent cooking up suspect dishes",
		es: "Ciclos pasados cocinando platillos sospechosos"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/stephen.png",
			title: {
				en: "Dinner's ready!",
				fr: "A table !",
				de: "Dinner's ready!",
				es: "¡A la mesa!"
			},
			description: {
				en: "Lesson 1, Act 1 : Where is Stephen ? Stephen is ... in the kitchen !",
				fr: "Leçon 1, Acte 1 : Where is Stephen ? Stephen is ... in the kitchen !",
				de: "Lesson 1, Act 1 : Where is Stephen ? Stephen is ... in the kitchen !",
				es: "Has sido el mejor cocinero del espacio, pero... ¿por qué nunca comes lo que cocinas?"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "No, I also cook.",
				fr: "Non, je fais aussi la cuisine.",
				de: "No, I also cook.",
				es: "¡Ya deja de masticar y traga!"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Hokuto of the Kitchen",
				fr: "Maître du hokuto de cuisine",
				de: "Hokuto of the Kitchen",
				es: "¡Sabor a mí!"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Descendant of Casey Ryback",
				fr: "Descendant de Casey Ryback",
				de: "Descendant of Casey Ryback",
				es: "Al diablo la dieta"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Master chief",
				fr: "Master chef",
				de: "Master chief",
				es: "Master chef"
			}
		}
	]
};
var ian = {
	id: "ian",
	name: {
		en: "Number of cycles spent cultivating psychotropic plants",
		fr: "Nombre de cycles passés à cultiver des plantes hallucinogènes",
		de: "Number of cycles spent cultivating psychotropic plants",
		es: "Ciclos pasados cultivando plantas alucinógenas"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/ian.png",
			title: {
				en: "She likes a little, a lot...",
				fr: "Elle m'aime un peu, beaucoup...",
				de: "She likes a little, a lot...",
				es: "Me quiere, no me quiere..."
			},
			description: {
				en: "You were once a nature lover, at the end of your days you'll surely make good fertilizer.",
				fr: "Vous avez été dans la peau d'un amoureux de la nature, à la fin de votre existence vous ferez sûrement du bon engrais.",
				de: "You were once a nature lover, at the end of your days you'll surely make good fertilizer.",
				es: "Has sido un amante de la naturaleza, cuando mueras serás un buen abono."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "The friend of Triffids",
				fr: "L'ami des monstroplantes",
				de: "The friend of Triffids",
				es: "Amigo de las plantas"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Fruitician",
				fr: "Fruti-magicien",
				de: "Fruitician",
				es: "Hierbamán"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Is that a banana in your pocket!",
				fr: "J'ai la banane !",
				de: "Is that a banana in your pocket!",
				es: "Apocalipto"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Flower power",
				fr: "Flower master",
				de: "Flower power",
				es: "Flower power"
			}
		}
	]
};
var chun = {
	id: "chun",
	name: {
		en: "Number of cycles you've spent providing blood samples",
		fr: "Nombre de cycles passés à se faire préléver des échantillons sanguins",
		de: "Number of cycles you've spent providing blood samples",
		es: "Ciclos pasados haciéndose sacar muestras de sangre"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/chun.png",
			title: {
				en: "At... atmush!",
				fr: "At... atmush !",
				de: "At... atmush!",
				es: "Soy importante"
			},
			description: {
				en: "You lived in the body of the most popular of human guinea pigs, although this wasn't exactly the type of celebrity you dreamed of becoming!",
				fr: "Vous avez vécu dans la peau du cobaye humain le plus prisé ces derniers temps, pas le genre de célébrité dont vous réviez !",
				de: "You lived in the body of the most popular of human guinea pigs, although this wasn't exactly the type of celebrity you dreamed of becoming!",
				es: "Siempre quisiste aportar a la ciencia, ¡pero no de esa manera!"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "You will not contaminate me!",
				fr: "Vous ne me contaminerez pas !",
				de: "You will not contaminate me!",
				es: "Espécimen raro"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Biological Reinforcements",
				fr: "Rempart biologique",
				de: "Biological Reinforcements",
				es: "Único en mi especie"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "DNA++ v2",
				fr: "ADN++ v2",
				de: "DNA++ v2",
				es: "ADN valioso"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Humanity's Last Hope",
				fr: "Dernier espoir de l'humanité",
				de: "Humanity's Last Hope",
				es: "La Última Esperanza"
			}
		}
	]
};
var raluca = {
	id: "raluca",
	name: {
		en: "Number of cycles spent stroking your cat",
		fr: "Nombre de cycles passés à passer son temps à caresser son chat",
		de: "Number of cycles spent stroking your cat",
		es: "Ciclos pasados acariciando al gato"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/raluca.png",
			title: {
				en: "Miaow Miaow",
				fr: "Miou miou",
				de: "Miaow Miaow",
				es: "Qué me miras"
			},
			description: {
				en: "Yeah, nobody pretends to understand a single word you say, maybe now would be a good time to come back to the land of the mortals.",
				fr: "Oui, personne ne comprend un traître mot de ce que vous dîtes, peut-être serait'il bon de revenir parmi le commun des mortels.",
				de: "Yeah, nobody pretends to understand a single word you say, maybe now would be a good time to come back to the land of the mortals.",
				es: "Eres un personaje tan inteligente pero tan misterioso..."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Reverso-combustible-spatio-temporal convector functional",
				fr: "Convecteur combusto-réversiblo-spatio-temporel en marche",
				de: "Reverso-combustible-spatio-temporal convector functional",
				es: "¡A toda máquina!"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Bedtime NERON! You too Schrödinger!",
				fr: "Couché Néron ! Toi aussi Schrödinger !",
				de: "Bedtime NERON! You too Schrödinger!",
				es: "Forever alone"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Pilgred in love",
				fr: "Pilgred in love",
				de: "Pilgred in love",
				es: "Pilgred in love"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "In Pilgred we trust",
				fr: "In Pilgred we trust",
				de: "In Pilgred we trust",
				es: "Genio de la física"
			}
		}
	]
};
var gioele = {
	id: "gioele",
	name: {
		en: "Number of turns spent counting your cash",
		fr: "Nombre de cycles passés à compter ses billets",
		de: "Number of turns spent counting your cash",
		es: "Ciclos pasados contando billetes"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/gioele.png",
			title: {
				en: "Me first!",
				fr: "Moi d'abord !",
				de: "Me first!",
				es: "¡Yo primero!"
			},
			description: {
				en: "Being a billionaire is a dream on Earth... But in space, with a Mush on board...",
				fr: "Etre milliardaire, c'est le rêve de tout homme sur terre... Mais dans l'espace, et avec un Mush à bord...",
				de: "Being a billionaire is a dream on Earth... But in space, with a Mush on board...",
				es: "En la tierra tus billetes valen mucho... pero en el espacio, y con un Mush a bordo..."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "There's nothing for people like you round here!",
				fr: "Cash toi de là !",
				de: "There's nothing for people like you round here!",
				es: "Money, money, money"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Are you talking to me?",
				fr: "C'est à moi que tu parles ?",
				de: "Are you talking to me?",
				es: "Tanto tienes, tanto vales"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "There's cash to be made here, I can smell it!",
				fr: "Y'a du fric à se faire, je le sens !",
				de: "There's cash to be made here, I can smell it!",
				es: "Te propongo un negocio"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "The guy's worth 3 billion and change!",
				fr: "L'homme qui valait 3 milliards et des brouettes",
				de: "The guy's worth 3 billion and change!",
				es: "Bling bling"
			}
		}
	]
};
var eleesha = {
	id: "eleesha",
	name: {
		en: "Number of cycles spent fixing your barnet fair.",
		fr: "Nombre de cycles passés à coiffer sa touffe.",
		de: "Number of cycles spent fixing your barnet fair.",
		es: "Ciclos pasados bailando música Disco"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/eleesha.png",
			title: {
				en: "Funk Soul Lover",
				fr: "Tardiflette",
				de: "Funk Soul Lover",
				es: "Sigue mi ritmo"
			},
			description: {
				en: "You've been bopping round the corridors to the rhythm of disco-pop, it's a shame this costume doesn't have sequins...",
				fr: "Vous avez arpenté les couloirs du Daedalus sur le rythme du disco-pop, dommage que ce costume manque de paillette...",
				de: "You've been bopping round the corridors to the rhythm of disco-pop, it's a shame this costume doesn't have sequins...",
				es: "Fuiste quien le puso ritmo a la travesía espacial."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Daddy Cool",
				fr: "Daddy cool",
				de: "Daddy Cool",
				es: "Sexy dance"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "The tigress of the Daedalus",
				fr: "La tigresse du Daedalus",
				de: "The tigress of the Daedalus",
				es: "Daedalus party"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Live on Eleesha TV",
				fr: "En direct sur Eleesha TV",
				de: "Live on Eleesha TV",
				es: "Soy una estrella"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Undercover Lover",
				fr: "Au coeur de l'info",
				de: "Undercover Lover",
				es: "Pop Star"
			}
		}
	]
};
var terrence = {
	id: "terrence",
	name: {
		en: "Number of cycles spent sulking in a corner.",
		fr: "Nombre de cycles passés à bouder dans son coin.",
		de: "Number of cycles spent sulking in a corner.",
		es: "Ciclos pasados de mal humor"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/terrence.png",
			title: {
				en: "Rock n Roll!",
				fr: "Attendez que je passe la seconde !",
				de: "Rock n Roll!",
				es: "Habla con mi mano"
			},
			description: {
				en: "You lived as a brilliant engineer, and those who underestimated you regret it bitterly!",
				fr: "Vous avez vécu dans la peau d'un brillant ingénieur, ceux qui vous ont sous-estimé le regrette encore amèrement !",
				de: "You lived as a brilliant engineer, and those who underestimated you regret it bitterly!",
				es: "Felizmente fuiste ingeniero y no un animador de fiestas infantiles."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Roll with the punches!",
				fr: "Roule ma poule !",
				de: "Roll with the punches!",
				es: "Sin pelos en la lengua"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "The Downhill Don",
				fr: "La terreur des couloirs",
				de: "The Downhill Don",
				es: "El terror de los pasillos"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "T-4000 concept",
				fr: "T-4000 conceptor",
				de: "T-4000 concept",
				es: "Renegado"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "They see me rollin'",
				fr: "Maîtres des bots",
				de: "They see me rollin'",
				es: "Mente brillante"
			}
		}
	]
};
var derek = {
	id: "derek",
	name: {
		en: "Number of cycles spent as an intergalactic Don Juan.",
		fr: "Nombre de cycles passés à draguer à tout va.",
		de: "Number of cycles spent as an intergalactic Don Juan.",
		es: "Ciclos pasados seduciendo compañeros."
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/derek.png",
			title: {
				en: "Space Virgin",
				fr: "Puceau de l'espace",
				de: "Space Virgin",
				es: "Galán"
			},
			description: {
				en: "You lived as a self-proclaimed intergalactic super hero, and those who mocked you will be reminded of it one day!",
				fr: "Vous avez vécu dans la peau d'un super héros intergalactique auto-proclamé, ceux qui se moque de vous s'en souviendront un jour !",
				de: "You lived as a self-proclaimed intergalactic super hero, and those who mocked you will be reminded of it one day!",
				es: "Fuiste un héroe intergaláctico, ¡con una reputación dudosa pero famoso al fin!"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Who wants me?",
				fr: "Quelqu'un me demande ?",
				de: "Who wants me?",
				es: "Guapo"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Fire on anything that twitches!",
				fr: "Tire sur tout ce qui bouge !",
				de: "Fire on anything that twitches!",
				es: "Cachondo"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Eyes on the prize!",
				fr: "Les yeux revolvers",
				de: "Eyes on the prize!",
				es: "Adonis"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Zero-Gravity Casanova",
				fr: "Casanova intergalactique",
				de: "Zero-Gravity Casanova",
				es: "Casanova de las galaxias"
			}
		}
	]
};
var andie = {
	id: "andie",
	name: {
		en: "Number of cycles spent honoring the SDF.",
		fr: "Nombre de cycles passés à vénérer la fédération.",
		de: "Number of cycles spent honoring the SDF.",
		es: "Ciclos pasados gritando ¡Viva la Federación!"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/andie.png",
			title: {
				en: "I believe in the federation!",
				fr: "Dans la fédération je crois !",
				de: "I believe in the federation!",
				es: "¡Viva la FDS!"
			},
			description: {
				en: "You have lived as a pawn of the Federation. It's time to change teams!",
				fr: "Vous avez vécu dans la peau d'un pion de la fédération, il serait temps de changer de bord !",
				de: "You have lived as a pawn of the Federation. It's time to change teams!",
				es: "Fuiste un peón de la FDS en el Daedalus, ¿de qué lado estás?"
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Something strange is going on!",
				fr: "Y'a quelque chose de louche !",
				de: "Something strange is going on!",
				es: "¡Algo huele mal aquí!"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Did they lie to me?",
				fr: "On m'aurait menti(e) ?",
				de: "Did they lie to me?",
				es: "Super Agente"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Idol of the youth",
				fr: "L'idole des jeunes",
				de: "Idol of the youth",
				es: "Prodigio militar"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "A brilliant future awaits!",
				fr: "Promis à un brillant avenir !",
				de: "A brilliant future awaits!",
				es: "Brillante porvenir"
			}
		}
	]
};
var mushxp = {
	id: "mushxp",
	name: {
		en: "Number of cycles spent fungifying in a dark corner",
		fr: "Nombre de cycles passés à phongiférer dans son coin",
		de: "Number of cycles spent fungifying in a dark corner",
		es: "Ciclos pasados como el malo de la película"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 5,
			icon: "ui/mushxp.png",
			title: {
				en: "Mushi mushi?",
				fr: "Mushi mushi ?",
				de: "Mushi mushi?",
				es: "Te gusto, lo sé"
			},
			description: {
				en: "Gnarf, shnarf... brarf... Reproduction... Mushhhh!",
				fr: "Gnouarf, shnarf... beuarf... Reproduction... Mushhhh !",
				de: "Gnarf, shnarf... brarf... Reproduction... Mushhhh!",
				es: "Fuiste uno de los villanos más temidos del espacio. Es más, el juego lleva tu nombre."
			}
		},
		{
			count: 200,
			points: 10,
			title: {
				en: "Bright eyes and a bushy skin?!",
				fr: "L'oeil vif, le pelage rugeux !",
				de: "Bright eyes and a bushy skin?!",
				es: "Ser casi perfecto"
			}
		},
		{
			count: 500,
			points: 5,
			title: {
				en: "Passenger 16",
				fr: "Le 16ème passager",
				de: "Passenger 16",
				es: "El 16º pasajero"
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Day of the tentacle",
				fr: "Day of the tentacle",
				de: "Day of the tentacle",
				es: "Musho gusto"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Total Mushification",
				fr: "Total Mushisation",
				de: "Total Mushification",
				es: "El malo de la película"
			}
		}
	]
};
var beta = {
	id: "beta",
	name: {
		en: "Xyloph Pioneer",
		fr: "Pionnier de Xyloph",
		de: "Xyloph Pioneer",
		es: "Pionero beta-tester"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/beta.png",
			title: {
				en: "Xyloph Pioneer",
				fr: "Pionnier de Xyloph",
				de: "Xyloph Pioneer",
				es: "Pionero beta-tester"
			},
			description: {
				en: "Title uniquely awarded to Mush beta testers.",
				fr: "Titre uniquement décerné aux beta-testeurs de Mush.",
				de: "Title uniquely awarded to Mush beta testers.",
				es: "Título exclusivo para los beta-testers de Mush."
			}
		}
	]
};
var avt_prems = {
	id: "avt_prems",
	name: {
		en: "Insider",
		fr: "Initié",
		de: "Insider",
		es: "Primero de la fila"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/medal.png",
			title: {
				en: "Insider",
				fr: "Initié",
				de: "Insider",
				es: "Primero de la fila"
			},
			description: {
				en: "Title uniquely awarded to players in the sneak preview of Mush.",
				fr: "Titre uniquement décerné aux joueurs de l'avant-première de Mush.",
				de: "Title uniquely awarded to players in the sneak preview of Mush.",
				es: "Título exclusivo para los participantes en el Pre-Estreno de Mush."
			}
		}
	]
};
var neron_flu = {
	id: "neron_flu",
	name: {
		en: "NERON Flu",
		fr: "Grippe de NERON",
		de: "NERON Flu",
		es: "Gripe de NERON"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/neron_fluw.png",
			title: {
				en: "Flu Survivor",
				fr: "Grippé",
				de: "Flu Survivor",
				es: "Resistente"
			},
			description: {
				en: "Title uniquely awarded to survivers of the NERON Flu epidemic.",
				fr: "Titre réservé aux survivants de l'épisode grippal de NERON.",
				de: "Title uniquely awarded to survivers of the NERON Flu epidemic.",
				es: "Título reservado a los supervivientes del ataque gripal de NERON."
			}
		}
	]
};
var eden = {
	id: "eden",
	name: {
		en: "Eden, the promised land",
		fr: "Eden, terre promise",
		de: "Eden, the promised land",
		es: "Edén, tierra prometida"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "ui/eden1.png",
			title: {
				en: "Don't hate the player!",
				fr: "Te''e à t'ibo'd !",
				de: "Don't hate the player!",
				es: "Vacacionista"
			},
			description: {
				en: "Title uniquely awarded to survivors of the Daedalus who reached Eden, the promised land.",
				fr: "Titre réservé aux survivants du Daedalus ayant atteint Eden, la terre promise.",
				de: "Title uniquely awarded to survivors of the Daedalus who reached Eden, the promised land.",
				es: "Título exclusivo para los supervivientes del Daedalus que llegaron a Edén, la tierra prometida."
			}
		},
		{
			count: 5,
			points: 5,
			title: {
				en: "Where's Eden?",
				fr: "Il où dédé'n ?",
				de: "Where's Eden?",
				es: "¡Yo estuve ahí!"
			}
		},
		{
			count: 10,
			points: 5,
			title: {
				en: "Eden Pioneer",
				fr: "Pionnier d'Eden",
				de: "Eden Pioneer",
				es: "Pionero del Edén"
			}
		},
		{
			count: 20,
			points: 5,
			title: {
				en: "Edenian",
				fr: "Edenien",
				de: "Edenian",
				es: "Privilegiado"
			}
		},
		{
			count: 50,
			points: 5,
			title: {
				en: "Founder of the Order of Eden",
				fr: "Fondateur de l'ordre d'Eden",
				de: "Founder of the Order of Eden",
				es: "Paraíso prometido"
			}
		}
	]
};
var eden_contaminated = {
	id: "eden_contaminated",
	name: {
		en: "Eden, the contaminated land",
		fr: "Eden, terre contaminée",
		de: "Eden, the contaminated land",
		es: "Edén, tierra contaminada"
	},
	rare: 2,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "ui/eden2.png",
			title: {
				en: "Devourer of worlds",
				fr: "Dévoreur des mondes",
				de: "Devourer of worlds",
				es: "Devorador de mundos"
			},
			description: {
				en: "Title uniquely awarded to Mush agents who infested Eden, the contaminated land.",
				fr: "Titre réservé aux Mush ayant infesté Eden, la terre contaminée !",
				de: "Title uniquely awarded to Mush agents who infested Eden, the contaminated land.",
				es: "Título reservado a los Mush que contaminaron el Edén."
			}
		}
	]
};
var likemush = {
	id: "likemush",
	name: {
		en: "Everybody loves you!",
		fr: "Tout le monde vous aime !",
		de: "Everybody loves you!",
		es: "¡Todo el mundo te ama!"
	},
	rare: 0,
	unlocks: [
	]
};
var no_mush = {
	id: "no_mush",
	name: {
		en: "Part Timer",
		fr: "Petit joueur",
		de: "Part Timer",
		es: "Pequeño jugador"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/no_mush.png",
			title: {
				en: "Part Timer",
				fr: "Petit joueur",
				de: "Part Timer",
				es: "Pequeño jugador"
			},
			description: {
				en: "Title reserved for thosewho don't like to be disturbed while they're growing radishes or whatever it is they do.",
				fr: "Titre réservé à ceux qui n'aime pas qu'on les embêtent pendant qu'ils cultivent leurs radis.",
				de: "Title reserved for thosewho don't like to be disturbed while they're growing radishes or whatever it is they do.",
				es: "Título reservado a quienes no les gusta ser molestados cuando juegan."
			}
		}
	]
};
var three_mush = {
	id: "three_mush",
	name: {
		en: "Triple Victory",
		fr: "Triple Victoire",
		de: "Triple Victory",
		es: "Triple victoria"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/three_mush.png",
			title: {
				en: "Hat-trick",
				fr: "Pinuts",
				de: "Hat-trick",
				es: "Pinuts"
			},
			description: {
				en: "One more, one less, I take care of business!",
				fr: "Un de plus, un de moins, j'en fais mon affaire !",
				de: "One more, one less, I take care of business!",
				es: "Uno más, uno menos, igual ya gané."
			}
		}
	]
};
var fungal_battle = {
	id: "fungal_battle",
	name: {
		en: "Fungal Survivor",
		fr: "Survivant Fongique",
		de: "Fungal Survivor",
		es: "Superviviente Mush"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/fungal_battle.png",
			title: {
				en: "Death Cup",
				fr: "Amanite",
				de: "Death Cup",
				es: "Hongo fuerte"
			},
			description: {
				en: "You have emerged victorious from a fungal battle.",
				fr: "Vous avez triomphé lors d'une bataille fongique.",
				de: "You have emerged victorious from a fungal battle.",
				es: "Has vencido en una batalla mushiana."
			}
		}
	]
};
var fast_cycle = {
	id: "fast_cycle",
	name: {
		en: "Precocious Mushroom",
		fr: "Champignon précoce",
		de: "Precocious Mushroom",
		es: "Hongo precoz"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/fast_cycle.png",
			title: {
				en: "'Stooled Up",
				fr: "Oronge mécanique",
				de: "'Stooled Up",
				es: "Hongo mecánico"
			},
			description: {
				en: "Done and dusted. Job's a good one.",
				fr: "Vite fait, bien fait, emballé c'est pesé.",
				de: "Done and dusted. Job's a good one.",
				es: "Fue rápido y sin dolor."
			}
		}
	]
};
var blitz_cycle = {
	id: "blitz_cycle",
	name: {
		en: "Mushroom Blitz",
		fr: "Champignon acidulé",
		de: "Mushroom Blitz",
		es: "Hongo ácido"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/blitz_cycle.png",
			title: {
				en: "Turboterror",
				fr: "Turboronge",
				de: "Turboterror",
				es: "Hongo mortal"
			},
			description: {
				en: "I'm quick as bro. 1 winner, 16 losers. Quick smart",
				fr: "Je suis rapide. 1 gagnant, 16 perdants. Rapide",
				de: "I'm quick as bro. 1 winner, 16 losers. Quick smart",
				es: "Solo hubo un ganador y fuiste tú."
			}
		}
	]
};
var slow_cycle = {
	id: "slow_cycle",
	name: {
		en: "Mature Mushroom",
		fr: "Champignon mûre",
		de: "Mature Mushroom",
		es: "Hongo maduro"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/slow_cycle.png",
			title: {
				en: "Sequoia",
				fr: "Sequoia",
				de: "Sequoia",
				es: "Hongo macho"
			},
			description: {
				en: "You're here for the long game. Good work!",
				fr: "Vous les préférez bien longues vos parties. Super !",
				de: "You're here for the long game. Good work!",
				es: "Prefieres las partidas largas, como los grandes."
			}
		}
	]
};
var no_mush_bar = {
	id: "no_mush_bar",
	name: {
		en: "Hidden Shroom",
		fr: "Champignon caché",
		de: "Hidden Shroom",
		es: "Hongo oculto"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/no_mush_bar.png",
			title: {
				en: "Nocturnum",
				fr: "Nocturnum",
				de: "Nocturnum",
				es: "Hongo bongo"
			},
			description: {
				en: "You never saw this one coming...",
				fr: "Vous l'avez pas vu venir celui là...",
				de: "You never saw this one coming...",
				es: "Ese que no se deja ver..."
			}
		}
	]
};
var mush_progressive = {
	id: "mush_progressive",
	name: {
		en: "Bigger by the day",
		fr: "Peti champi deviendra grand",
		de: "Bigger by the day",
		es: "Honguito"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/mush_progressive.png",
			title: {
				en: "Agaric",
				fr: "Agaric",
				de: "Agaric",
				es: "Hongo en potencia"
			},
			description: {
				en: "Little by little!",
				fr: "Tu quoque mi fungi !",
				de: "Little by little!",
				es: "¿Qué quieres ser cuando seas grande?"
			}
		}
	]
};
var chun_battle = {
	id: "chun_battle",
	name: {
		en: "You have survived a fungal battle as Chun!",
		fr: "Rempart de l'humanité",
		de: "You have survived a fungal battle as Chun!",
		es: "Has sobrevivido a una batalla mushiana siendo Chun"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/chun_battle.png",
			title: {
				en: "Last Bastion of Humanity",
				fr: "Rempart de l'humanité",
				de: "Last Bastion of Humanity",
				es: "Escudo humano"
			},
			description: {
				en: "You have survived a fungal battle as Chun!",
				fr: "Vous avez survécu à une bataille fongique en étant Chun !",
				de: "You have survived a fungal battle as Chun!",
				es: "Has sobrevivido a una batalla mushiana siendo Chun."
			}
		}
	]
};
var ep1 = {
	id: "ep1",
	name: {
		en: "All aboard the Daedalus!.",
		fr: "Embarquement sur le Daedalus",
		de: "All aboard the Daedalus!.",
		es: "Primer Episodio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/ep1.png",
			title: {
				en: "Episode 1: All Aboard the Daedalus",
				fr: "Episode 1 : Embarquement sur le Daedalus",
				de: "Episode 1: All Aboard the Daedalus",
				es: "Episodio 1"
			},
			description: {
				en: "You' were strolling around the Deadalus in Episode 1 of Mush",
				fr: "Vous avez arpenté le Daedalus durant le premier épisode de Mush.",
				de: "You' were strolling around the Deadalus in Episode 1 of Mush",
				es: "Participaste en el primer episodio de Mush."
			}
		}
	]
};
var ep2 = {
	id: "ep2",
	name: {
		en: "Crystallite Shards",
		fr: "Cristallites aigus",
		de: "Crystallite Shards",
		es: "Segundo Episodio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/ep2.png",
			title: {
				en: "Episode 2 : Crystallite Shards",
				fr: "Episode 2 : Cristallites aigus",
				de: "Episode 2 : Crystallite Shards",
				es: "Episodio 2"
			},
			description: {
				en: "You' were strolling around the Deadalus during Episode 2 of Mush",
				fr: "Vous avez arpenté le Daedalus durant le deuxième épisode de Mush.",
				de: "You' were strolling around the Deadalus during Episode 2 of Mush",
				es: "Participaste en el segundo episodio de Mush."
			}
		}
	]
};
var ep3 = {
	id: "ep3",
	name: {
		en: "Neron is watching you",
		fr: "Sus aux parasites !",
		de: "Neron is watching you",
		es: "Tercer Episodio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/ep3.png",
			title: {
				en: "Episode 3 : Neron is watching you",
				fr: "Episode 3 : Neron vous regarde",
				de: "Episode 3 : Neron is watching you",
				es: "Episodio 3"
			},
			description: {
				en: "You' were strolling around the Deadalus during Episode 3 of Mush",
				fr: "Vous avez arpenté le Daedalus durant le troisième épisode de Mush.",
				de: "You' were strolling around the Deadalus during Episode 3 of Mush",
				es: "Participaste en el tercer episodio de Mush."
			}
		}
	]
};
var ep4 = {
	id: "ep4",
	name: {
		en: "New Generations",
		fr: "Nouvelles générations",
		de: "New Generations",
		es: "Cuarto Episodio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/ep4.png",
			title: {
				en: "Episode 4 : New Generations",
				fr: "Episode 4 : Nouvelles générations",
				de: "Episode 4 : New Generations",
				es: "Episodio 4"
			},
			description: {
				en: "You' were strolling around the Deadalus during Episode 4 of Mush.",
				fr: "Vous avez arpenté le Daedalus durant le quatrième épisode de Mush.",
				de: "You' were strolling around the Deadalus during Episode 4 of Mush.",
				es: "Participaste en el cuarto episodio de Mush."
			}
		}
	]
};
var ep5 = {
	id: "ep5",
	name: {
		en: "Old Friends",
		fr: "Vieilles connaissances",
		de: "Old Friends",
		es: "Quinto episodio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/ep5.png",
			title: {
				en: "Episode 5 : Vieilles connaissances",
				fr: "Episode 5 : Vieilles connaissances",
				de: "Episode 5 : Vieilles connaissances",
				es: "Episodio 5"
			},
			description: {
				en: "You were aboard the Daedalus during Episode 5 of Mush.",
				fr: "Vous avez erré sur le Daedalus durant le cinquième épisode de Mush.",
				de: "You were aboard the Daedalus during Episode 5 of Mush.",
				es: "Participaste en el quinto episodio de Mush."
			}
		}
	]
};
var ep6 = {
	id: "ep6",
	name: {
		en: "",
		fr: "Sommeil fongique",
		de: "",
		es: ""
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/ep6.png",
			title: {
				en: "",
				fr: "Episode 6 : Sommeil fongique",
				de: "",
				es: ""
			},
			description: {
				en: "",
				fr: "Vous avez erré sur le Daedalus durant le sixième épisode de Mush.",
				de: "",
				es: ""
			}
		}
	]
};
var ticket = {
	id: "ticket",
	name: {
		en: "Supporter",
		fr: "Supporter",
		de: "Supporter",
		es: "Has financiado el juego. ¡Gracias!"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/ticket.png",
			title: {
				en: "Supporter",
				fr: "Supporter",
				de: "Supporter",
				es: "Honoris causa"
			},
			description: {
				en: "You have supported Mush and with your help, it has evolved. Thank you!",
				fr: "Vous avez soutenu Mush et grâce à vous on l'a fait avancer, merci !",
				de: "You have supported Mush and with your help, it has evolved. Thank you!",
				es: "Has apoyado al desarrollo del juego. ¡Gracias!"
			}
		}
	]
};
var altruisme = {
	id: "altruisme",
	name: {
		en: "You have already supported your community by sending a gift to another player, bravo!",
		fr: "Altruiste",
		de: "You have already supported your community by sending a gift to another player, bravo!",
		es: "Has sido generoso enviando un regalo a un jugador. ¡Bravo!"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ui/gold.png",
			title: {
				en: "Altruist",
				fr: "Altruiste",
				de: "Altruist",
				es: "Altruista"
			},
			description: {
				en: "You have already supported your community by sending a gift to another player, bravo!",
				fr: "Vous avez déjà soutenu votre communauté en envoyant un cadeau à un joueur, bravo !",
				de: "You have already supported your community by sending a gift to another player, bravo!",
				es: "Has sido generoso enviando un regalo a un jugador. ¡Bravo!"
			}
		}
	]
};
var mushJson = {
	signal_fire: signal_fire,
	win_nova: win_nova,
	win_triumph: win_triumph,
	other_nova: other_nova,
	other_triumph: other_triumph,
	extinguish_fire: extinguish_fire,
	signal_equip: signal_equip,
	gagged: gagged,
	game_without_sleep: game_without_sleep,
	explorer: explorer,
	triumph: triumph,
	door_repaired: door_repaired,
	planet_scanned: planet_scanned,
	mushed: mushed,
	has_mushed: has_mushed,
	sleeper: sleeper,
	tutorial: tutorial,
	explo_feed: explo_feed,
	new_plants: new_plants,
	give_mission: give_mission,
	daily_order: daily_order,
	hunter_down: hunter_down,
	day_5_reached: day_5_reached,
	day_10_reached: day_10_reached,
	day_15_reached: day_15_reached,
	day_20_reached: day_20_reached,
	day_30_reached: day_30_reached,
	ration_cooked: ration_cooked,
	plasma_shield: plasma_shield,
	surgeon: surgeon,
	butcher: butcher,
	shrinker: shrinker,
	physicist: physicist,
	politician: politician,
	artefact_coll: artefact_coll,
	artefact_specialist: artefact_specialist,
	tags_complete: tags_complete,
	research_team: research_team,
	project_team: project_team,
	team_all_rebels: team_all_rebels,
	team_rebels: team_rebels,
	rebels: rebels,
	kivanc_contacted: kivanc_contacted,
	nils_contacted: nils_contacted,
	mage_books_learned: mage_books_learned,
	back_to_root: back_to_root,
	pilgred_back_online: pilgred_back_online,
	drugs_taken: drugs_taken,
	coffee_taken: coffee_taken,
	cooked_taken: cooked_taken,
	ration_taken: ration_taken,
	frozen_taken: frozen_taken,
	grenadier: grenadier,
	natamist: natamist,
	mush_killed: mush_killed,
	team_mush_killed: team_mush_killed,
	camera_installed: camera_installed,
	cat_cuddled: cat_cuddled,
	disease_contracted: disease_contracted,
	venerian_disease: venerian_disease,
	mankarog_down: mankarog_down,
	succeeded_inspection: succeeded_inspection,
	kind_person: kind_person,
	coffee_man: coffee_man,
	commander_should_go_last: commander_should_go_last,
	last_member: last_member,
	communicator: communicator,
	mush_genome: mush_genome,
	research_digged: research_digged,
	project_digged: project_digged,
	day_max: day_max,
	quasar_first: quasar_first,
	quasar_second: quasar_second,
	quasar_third: quasar_third,
	quasar_fourth: quasar_fourth,
	quasar_special: quasar_special,
	quasar_figurant: quasar_figurant,
	mush_tease_EW: mush_tease_EW,
	mush_tease_FK: mush_tease_FK,
	mush_tease_FB: mush_tease_FB,
	mush_tease_GR: mush_tease_GR,
	mush_tease_IS: mush_tease_IS,
	mush_tease_JK: mush_tease_JK,
	mush_tease_JH: mush_tease_JH,
	mush_tease_KJS: mush_tease_KJS,
	mush_tease_LKT: mush_tease_LKT,
	mush_tease_PR: mush_tease_PR,
	mush_tease_RT: mush_tease_RT,
	mush_tease_RZ: mush_tease_RZ,
	mush_tease_SS: mush_tease_SS,
	mush_tease_TA: mush_tease_TA,
	mush_tease_WC: mush_tease_WC,
	mush_tease_ZC: mush_tease_ZC,
	mush_tease_SCH: mush_tease_SCH,
	jin_su: jin_su,
	frieda: frieda,
	kuan_ti: kuan_ti,
	janice: janice,
	roland: roland,
	hua: hua,
	paola: paola,
	chao: chao,
	finola: finola,
	stephen: stephen,
	ian: ian,
	chun: chun,
	raluca: raluca,
	gioele: gioele,
	eleesha: eleesha,
	terrence: terrence,
	derek: derek,
	andie: andie,
	mushxp: mushxp,
	beta: beta,
	avt_prems: avt_prems,
	neron_flu: neron_flu,
	eden: eden,
	eden_contaminated: eden_contaminated,
	likemush: likemush,
	no_mush: no_mush,
	three_mush: three_mush,
	fungal_battle: fungal_battle,
	fast_cycle: fast_cycle,
	blitz_cycle: blitz_cycle,
	slow_cycle: slow_cycle,
	no_mush_bar: no_mush_bar,
	mush_progressive: mush_progressive,
	chun_battle: chun_battle,
	ep1: ep1,
	ep2: ep2,
	ep3: ep3,
	ep4: ep4,
	ep5: ep5,
	ep6: ep6,
	ticket: ticket,
	altruisme: altruisme
};

var ccl = {
	id: "ccl",
	name: {
		en: "ChouetteEx 1",
		fr: "ChouetteEx 1",
		de: "ChouetteEx 1",
		es: "ChouetteEx 1"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "c_class.gif",
			title: {
				en: "ChouetteEx 1",
				fr: "ChouetteEx 1",
				de: "ChouetteEx 1",
				es: "ChouetteEx 1"
			}
		}
	]
};
var cmm = {
	id: "cmm",
	name: {
		en: "ChouetteEx 2",
		fr: "ChouetteEx 2",
		de: "ChouetteEx 2",
		es: "ChouetteEx 2"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "c_mmm.gif",
			title: {
				en: "ChouetteEx 2",
				fr: "ChouetteEx 2",
				de: "ChouetteEx 2",
				es: "ChouetteEx 2"
			}
		}
	]
};
var cnaz = {
	id: "cnaz",
	name: {
		en: "ChouetteEx 3",
		fr: "ChouetteEx 3",
		de: "ChouetteEx 3",
		es: "ChouetteEx 3"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "c_naz.gif",
			title: {
				en: "ChouetteEx 3",
				fr: "ChouetteEx 3",
				de: "ChouetteEx 3",
				es: "ChouetteEx 3"
			}
		}
	]
};
var cok = {
	id: "cok",
	name: {
		en: "ChouetteEx 4",
		fr: "ChouetteEx 4",
		de: "ChouetteEx 4",
		es: "ChouetteEx 4"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "c_ok.gif",
			title: {
				en: "ChouetteEx 4",
				fr: "ChouetteEx 4",
				de: "ChouetteEx 4",
				es: "ChouetteEx 4"
			}
		}
	]
};
var chro = {
	id: "chro",
	name: {
		en: "Chronium",
		fr: "Chronium",
		de: "Chronium",
		es: "Chronium"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "chronium.gif",
			title: {
				en: "Chronium",
				fr: "Chronium",
				de: "Chronium",
				es: "Chronium"
			}
		}
	]
};
var poum = {
	id: "poum",
	name: {
		en: "poum",
		fr: "poum",
		de: "poum",
		es: "poum"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var pevil = {
	id: "pevil",
	name: {
		en: "pevil",
		fr: "pevil",
		de: "pevil",
		es: "pevil"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var plove = {
	id: "plove",
	name: {
		en: "plove",
		fr: "plove",
		de: "plove",
		es: "plove"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var pchamp = {
	id: "pchamp",
	name: {
		en: "pchamp",
		fr: "pchamp",
		de: "pchamp",
		es: "pchamp"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var pygold = {
	id: "pygold",
	name: {
		en: "pygold",
		fr: "pygold",
		de: "pygold",
		es: "pygold"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var carg = {
	id: "carg",
	name: {
		en: "carg",
		fr: "carg",
		de: "carg",
		es: "carg"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var ccute = {
	id: "ccute",
	name: {
		en: "ccute",
		fr: "ccute",
		de: "ccute",
		es: "ccute"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var cninja = {
	id: "cninja",
	name: {
		en: "cninja",
		fr: "cninja",
		de: "cninja",
		es: "cninja"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var csmile = {
	id: "csmile",
	name: {
		en: "csmile",
		fr: "csmile",
		de: "csmile",
		es: "csmile"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var cwhat = {
	id: "cwhat",
	name: {
		en: "cwhat",
		fr: "cwhat",
		de: "cwhat",
		es: "cwhat"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var sdoc = {
	id: "sdoc",
	name: {
		en: "sdoc",
		fr: "sdoc",
		de: "sdoc",
		es: "sdoc"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var happy = {
	id: "happy",
	name: {
		en: "happy",
		fr: "happy",
		de: "happy",
		es: "happy"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var snonono = {
	id: "snonono",
	name: {
		en: "snonono",
		fr: "snonono",
		de: "snonono",
		es: "snonono"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var ssad = {
	id: "ssad",
	name: {
		en: "ssad",
		fr: "ssad",
		de: "ssad",
		es: "ssad"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var ssmile = {
	id: "ssmile",
	name: {
		en: "ssmile",
		fr: "ssmile",
		de: "ssmile",
		es: "ssmile"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var guSmall = {
	id: "guSmall",
	name: {
		en: "guSmall",
		fr: "guSmall",
		de: "guSmall",
		es: "guSmall"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var apSmall = {
	id: "apSmall",
	name: {
		en: "apSmall",
		fr: "apSmall",
		de: "apSmall",
		es: "apSmall"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var jzSmall = {
	id: "jzSmall",
	name: {
		en: "jzSmall",
		fr: "jzSmall",
		de: "jzSmall",
		es: "jzSmall"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var gmSmall = {
	id: "gmSmall",
	name: {
		en: "gmSmall",
		fr: "gmSmall",
		de: "gmSmall",
		es: "gmSmall"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var skSmall = {
	id: "skSmall",
	name: {
		en: "skSmall",
		fr: "skSmall",
		de: "skSmall",
		es: "skSmall"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var gu$1 = {
	id: "gu",
	name: {
		en: "gu",
		fr: "gu",
		de: "gu",
		es: "gu"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var ap$1 = {
	id: "ap",
	name: {
		en: "ap",
		fr: "ap",
		de: "ap",
		es: "ap"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var jz$1 = {
	id: "jz",
	name: {
		en: "jz",
		fr: "jz",
		de: "jz",
		es: "jz"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var gm$1 = {
	id: "gm",
	name: {
		en: "gm",
		fr: "gm",
		de: "gm",
		es: "gm"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var sk = {
	id: "sk",
	name: {
		en: "sk",
		fr: "sk",
		de: "sk",
		es: "sk"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var xmcool = {
	id: "xmcool",
	name: {
		en: "xmcool",
		fr: "xmcool",
		de: "xmcool",
		es: "xmcool"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var xmhu = {
	id: "xmhu",
	name: {
		en: "xmhu",
		fr: "xmhu",
		de: "xmhu",
		es: "xmhu"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var xmyeah = {
	id: "xmyeah",
	name: {
		en: "xmyeah",
		fr: "xmyeah",
		de: "xmyeah",
		es: "xmyeah"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var pkm = {
	id: "pkm",
	name: {
		en: "pkm",
		fr: "pkm",
		de: "pkm",
		es: "pkm"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var pko = {
	id: "pko",
	name: {
		en: "pko",
		fr: "pko",
		de: "pko",
		es: "pko"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var pky = {
	id: "pky",
	name: {
		en: "pky",
		fr: "pky",
		de: "pky",
		es: "pky"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var cstp = {
	id: "cstp",
	name: {
		en: "cstp",
		fr: "cstp",
		de: "cstp",
		es: "cstp"
	},
	rare: 0,
	hidden: true,
	unlocks: [
	]
};
var quest = {
	id: "quest",
	name: {
		en: "Quêtes accomplies",
		fr: "Quêtes accomplies",
		de: "Quêtes accomplies",
		es: "Quêtes accomplies"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 5
		},
		{
			count: 15,
			points: 10,
			title: {
				en: "Un coup de main c'est sympa",
				fr: "Un coup de main c'est sympa",
				de: "Un coup de main c'est sympa",
				es: "Un coup de main c'est sympa"
			}
		},
		{
			count: 25,
			points: 10
		},
		{
			count: 35,
			points: 10
		},
		{
			count: 45,
			points: 10
		},
		{
			count: 55,
			points: 10
		},
		{
			count: 60,
			points: 5,
			title: {
				en: "Grand résolveur de tracas",
				fr: "Grand résolveur de tracas",
				de: "Grand résolveur de tracas",
				es: "Grand résolveur de tracas"
			}
		},
		{
			count: 70,
			points: 10
		},
		{
			count: 80,
			points: 10
		},
		{
			count: 90,
			points: 10
		},
		{
			count: 100,
			points: 10
		},
		{
			count: 110,
			points: 10
		},
		{
			count: 120,
			points: 10,
			title: {
				en: "Le royaume lui doit tout",
				fr: "Le royaume lui doit tout",
				de: "Le royaume lui doit tout",
				es: "Le royaume lui doit tout"
			}
		},
		{
			count: 130,
			points: 10
		},
		{
			count: 140,
			points: 10
		},
		{
			count: 150,
			points: 10
		},
		{
			count: 160,
			points: 10
		},
		{
			count: 170,
			points: 10
		},
		{
			count: 177,
			points: 7
		},
		{
			count: 200,
			points: 0,
			title: {
				en: "Sauveur de l'humanité",
				fr: "Sauveur de l'humanité",
				de: "Sauveur de l'humanité",
				es: "Sauveur de l'humanité"
			}
		}
	]
};
var xp = {
	id: "xp",
	name: {
		en: "Niveau atteint",
		fr: "Niveau atteint",
		de: "Niveau atteint",
		es: "Niveau atteint"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2
		},
		{
			count: 2,
			points: 3
		},
		{
			count: 3,
			points: 5
		},
		{
			count: 4,
			points: 8
		},
		{
			count: 5,
			points: 10
		},
		{
			count: 6,
			points: 10
		},
		{
			count: 7,
			points: 10
		},
		{
			count: 8,
			points: 10
		},
		{
			count: 9,
			points: 10
		},
		{
			count: 10,
			points: 10
		},
		{
			count: 11,
			points: 10
		},
		{
			count: 12,
			points: 10
		},
		{
			count: 13,
			points: 10
		},
		{
			count: 14,
			points: 10
		},
		{
			count: 15,
			points: 10
		}
	]
};
var repgu = {
	id: "repgu",
	name: {
		en: "Réputation Guilde",
		fr: "Réputation Guilde",
		de: "Réputation Guilde",
		es: "Réputation Guilde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5
		},
		{
			count: 2,
			points: 5
		},
		{
			count: 3,
			points: 5
		},
		{
			count: 4,
			points: 5
		},
		{
			count: 5,
			points: 5
		}
	]
};
var repap = {
	id: "repap",
	name: {
		en: "Réputation Audepint",
		fr: "Réputation Audepint",
		de: "Réputation Audepint",
		es: "Réputation Audepint"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5
		},
		{
			count: 2,
			points: 5
		},
		{
			count: 3,
			points: 5
		},
		{
			count: 4,
			points: 5
		},
		{
			count: 5,
			points: 5
		}
	]
};
var repjz = {
	id: "repjz",
	name: {
		en: "Réputation Jeezara",
		fr: "Réputation Jeezara",
		de: "Réputation Jeezara",
		es: "Réputation Jeezara"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5
		},
		{
			count: 2,
			points: 5
		},
		{
			count: 3,
			points: 5
		},
		{
			count: 4,
			points: 5
		},
		{
			count: 5,
			points: 5
		}
	]
};
var repgm = {
	id: "repgm",
	name: {
		en: "Réputation Gemini",
		fr: "Réputation Gemini",
		de: "Réputation Gemini",
		es: "Réputation Gemini"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5
		},
		{
			count: 2,
			points: 5
		},
		{
			count: 3,
			points: 5
		},
		{
			count: 4,
			points: 5
		},
		{
			count: 5,
			points: 5
		}
	]
};
var repsk = {
	id: "repsk",
	name: {
		en: "Réputation Shang-Kah",
		fr: "Réputation Shang-Kah",
		de: "Réputation Shang-Kah",
		es: "Réputation Shang-Kah"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5
		},
		{
			count: 2,
			points: 5
		},
		{
			count: 3,
			points: 5
		},
		{
			count: 4,
			points: 5
		},
		{
			count: 5,
			points: 5
		}
	]
};
var rdone = {
	id: "rdone",
	name: {
		en: "Recettes réussies",
		fr: "Recettes réussies",
		de: "Recettes réussies",
		es: "Recettes réussies"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 3,
			title: {
				en: "Faiseurs de recettes",
				fr: "Faiseurs de recettes",
				de: "Faiseurs de recettes",
				es: "Faiseurs de recettes"
			}
		},
		{
			count: 80,
			points: 5,
			title: {
				en: "Spécialiste ès transmutation",
				fr: "Spécialiste ès transmutation",
				de: "Spécialiste ès transmutation",
				es: "Spécialiste ès transmutation"
			}
		},
		{
			count: 150,
			points: 5,
			title: {
				en: "Résident de la salle des chaudrons",
				fr: "Résident de la salle des chaudrons",
				de: "Résident de la salle des chaudrons",
				es: "Résident de la salle des chaudrons"
			}
		},
		{
			count: 300,
			points: 5,
			title: {
				en: "Transmuteur universel",
				fr: "Transmuteur universel",
				de: "Transmuteur universel",
				es: "Transmuteur universel"
			}
		}
	]
};
var rfail = {
	id: "rfail",
	name: {
		en: "Recettes ratées",
		fr: "Recettes ratées",
		de: "Recettes ratées",
		es: "Recettes ratées"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 0,
			title: {
				en: "Alchimiste distrait",
				fr: "Alchimiste distrait",
				de: "Alchimiste distrait",
				es: "Alchimiste distrait"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Pas les yeux en face des trous",
				fr: "Pas les yeux en face des trous",
				de: "Pas les yeux en face des trous",
				es: "Pas les yeux en face des trous"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Mister Bean du chaudron",
				fr: "Mister Bean du chaudron",
				de: "Mister Bean du chaudron",
				es: "Mister Bean du chaudron"
			}
		},
		{
			count: 150,
			points: 0,
			title: {
				en: "Plus grand gâchis de l'alchimie moderne",
				fr: "Plus grand gâchis de l'alchimie moderne",
				de: "Plus grand gâchis de l'alchimie moderne",
				es: "Plus grand gâchis de l'alchimie moderne"
			}
		}
	]
};
var rconf = {
	id: "rconf",
	name: {
		en: "Recettes confisquées",
		fr: "Recettes confisquées",
		de: "Recettes confisquées",
		es: "Recettes confisquées"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Flagrant délit",
				fr: "Flagrant délit",
				de: "Flagrant délit",
				es: "Flagrant délit"
			}
		},
		{
			count: 5,
			points: 0,
			title: {
				en: "Alchimiste récidiviste",
				fr: "Alchimiste récidiviste",
				de: "Alchimiste récidiviste",
				es: "Alchimiste récidiviste"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Un règlement ? Quel règlement ? ",
				fr: "Un règlement ? Quel règlement ? ",
				de: "Un règlement ? Quel règlement ? ",
				es: "Un règlement ? Quel règlement ? "
			}
		}
	]
};
var rforb = {
	id: "rforb",
	name: {
		en: "Recettes de guilde interdites réussies",
		fr: "Recettes de guilde interdites réussies",
		de: "Recettes de guilde interdites réussies",
		es: "Recettes de guilde interdites réussies"
	},
	rare: 0,
	unlocks: [
		{
			count: 2,
			points: 1,
			title: {
				en: "Petit canaillou",
				fr: "Petit canaillou",
				de: "Petit canaillou",
				es: "Petit canaillou"
			}
		},
		{
			count: 10,
			points: 1,
			title: {
				en: "Arsène Lupin des chaudrons",
				fr: "Arsène Lupin des chaudrons",
				de: "Arsène Lupin des chaudrons",
				es: "Arsène Lupin des chaudrons"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Génie du mal",
				fr: "Génie du mal",
				de: "Génie du mal",
				es: "Génie du mal"
			}
		}
	]
};
var cten = {
	id: "cten",
	name: {
		en: "Top Ten de son école pour la Coupe",
		fr: "Top Ten de son école pour la Coupe",
		de: "Top Ten de son école pour la Coupe",
		es: "Top Ten de son école pour la Coupe"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			title: {
				en: "Alchimiste combatif",
				fr: "Alchimiste combatif",
				de: "Alchimiste combatif",
				es: "Alchimiste combatif"
			}
		},
		{
			count: 5,
			points: 2,
			title: {
				en: "Une valeur sûre",
				fr: "Une valeur sûre",
				de: "Une valeur sûre",
				es: "Une valeur sûre"
			}
		},
		{
			count: 20,
			points: 2,
			title: {
				en: "Combattant acharné",
				fr: "Combattant acharné",
				de: "Combattant acharné",
				es: "Combattant acharné"
			}
		},
		{
			count: 50,
			points: 2,
			title: {
				en: "Psychopathe du classement",
				fr: "Psychopathe du classement",
				de: "Psychopathe du classement",
				es: "Psychopathe du classement"
			}
		}
	]
};
var cbest = {
	id: "cbest",
	name: {
		en: "Premier du classement de la Coupe des écoles",
		fr: "Premier du classement de la Coupe des écoles",
		de: "Premier du classement de la Coupe des écoles",
		es: "Premier du classement de la Coupe des écoles"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			title: {
				en: "Vainqueur de la Coupe",
				fr: "Vainqueur de la Coupe",
				de: "Vainqueur de la Coupe",
				es: "Vainqueur de la Coupe"
			}
		},
		{
			count: 3,
			points: 2,
			title: {
				en: "Maradona de la potion verte",
				fr: "Maradona de la potion verte",
				de: "Maradona de la potion verte",
				es: "Maradona de la potion verte"
			}
		},
		{
			count: 10,
			points: 4,
			title: {
				en: "Tellement fortiche que ça fatigue tout le monde",
				fr: "Tellement fortiche que ça fatigue tout le monde",
				de: "Tellement fortiche que ça fatigue tout le monde",
				es: "Tellement fortiche que ça fatigue tout le monde"
			}
		},
		{
			count: 50,
			points: 4,
			title: {
				en: "Légende du royaume",
				fr: "Légende du royaume",
				de: "Légende du royaume",
				es: "Légende du royaume"
			}
		}
	]
};
var schang = {
	id: "schang",
	name: {
		en: "Changements d'école",
		fr: "Changements d'école",
		de: "Changements d'école",
		es: "Changements d'école"
	},
	rare: 0,
	unlocks: [
		{
			count: 2,
			points: 0,
			title: {
				en: "Alchimiste indécis",
				fr: "Alchimiste indécis",
				de: "Alchimiste indécis",
				es: "Alchimiste indécis"
			}
		},
		{
			count: 5,
			points: 0,
			title: {
				en: "Celui-là. Non... celui-ci. Euh, attendez un peu...",
				fr: "Celui-là. Non... celui-ci. Euh, attendez un peu...",
				de: "Celui-là. Non... celui-ci. Euh, attendez un peu...",
				es: "Celui-là. Non... celui-ci. Euh, attendez un peu..."
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Bon c'est fini oui ? ",
				fr: "Bon c'est fini oui ? ",
				de: "Bon c'est fini oui ? ",
				es: "Bon c'est fini oui ? "
			}
		}
	]
};
var zone = {
	id: "zone",
	name: {
		en: "Lieux visités",
		fr: "Lieux visités",
		de: "Lieux visités",
		es: "Lieux visités"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 6,
			title: {
				en: "Randonneur premier dan",
				fr: "Randonneur premier dan",
				de: "Randonneur premier dan",
				es: "Randonneur premier dan"
			}
		},
		{
			count: 26,
			points: 10,
			title: {
				en: "Docteur Livingstone, je présume ?",
				fr: "Docteur Livingstone, je présume ?",
				de: "Docteur Livingstone, je présume ?",
				es: "Docteur Livingstone, je présume ?"
			}
		},
		{
			count: 34,
			points: 10,
			title: {
				en: "Flagada Jones, je lui ai tout appris.",
				fr: "Flagada Jones, je lui ai tout appris.",
				de: "Flagada Jones, je lui ai tout appris.",
				es: "Flagada Jones, je lui ai tout appris."
			}
		}
	]
};
var chaine = {
	id: "chaine",
	name: {
		en: "Chaînes alchimiques dévoilées",
		fr: "Chaînes alchimiques dévoilées",
		de: "Chaînes alchimiques dévoilées",
		es: "Chaînes alchimiques dévoilées"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 8,
			title: {
				en: "Dévoileur de mystères",
				fr: "Dévoileur de mystères",
				de: "Dévoileur de mystères",
				es: "Dévoileur de mystères"
			}
		},
		{
			count: 15,
			points: 12,
			title: {
				en: "Jusqu'au boutiste ! ",
				fr: "Jusqu'au boutiste ! ",
				de: "Jusqu'au boutiste ! ",
				es: "Jusqu'au boutiste ! "
			}
		},
		{
			count: 30,
			points: 12,
			title: {
				en: "Grand ordonnateur des éléments",
				fr: "Grand ordonnateur des éléments",
				de: "Grand ordonnateur des éléments",
				es: "Grand ordonnateur des éléments"
			}
		}
	]
};
var opa = {
	id: "opa",
	name: {
		en: "Potions de vigueur avalées",
		fr: "Potions de vigueur avalées",
		de: "Potions de vigueur avalées",
		es: "Potions de vigueur avalées"
	},
	rare: 0,
	unlocks: [
		{
			count: 30,
			points: 0,
			title: {
				en: "Plus haut. Plus loin. Plus vite.",
				fr: "Plus haut. Plus loin. Plus vite.",
				de: "Plus haut. Plus loin. Plus vite.",
				es: "Plus haut. Plus loin. Plus vite."
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Boire un petit coup c'est agréable",
				fr: "Boire un petit coup c'est agréable",
				de: "Boire un petit coup c'est agréable",
				es: "Boire un petit coup c'est agréable"
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "Une petite dernière pour la route",
				fr: "Une petite dernière pour la route",
				de: "Une petite dernière pour la route",
				es: "Une petite dernière pour la route"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "Mes pieds sont pas plats, ils sont usés",
				fr: "Mes pieds sont pas plats, ils sont usés",
				de: "Mes pieds sont pas plats, ils sont usés",
				es: "Mes pieds sont pas plats, ils sont usés"
			}
		}
	]
};
var kubor = {
	id: "kubor",
	name: {
		en: "Plus grande fortune jamais possédée",
		fr: "Plus grande fortune jamais possédée",
		de: "Plus grande fortune jamais possédée",
		es: "Plus grande fortune jamais possédée"
	},
	rare: 0,
	unlocks: [
		{
			count: 5000,
			points: 0,
			title: {
				en: "Alchimiste épargnant",
				fr: "Alchimiste épargnant",
				de: "Alchimiste épargnant",
				es: "Alchimiste épargnant"
			}
		},
		{
			count: 30000,
			points: 0,
			title: {
				en: "Le Kubor, c'est ma grande passion",
				fr: "Le Kubor, c'est ma grande passion",
				de: "Le Kubor, c'est ma grande passion",
				es: "Le Kubor, c'est ma grande passion"
			}
		},
		{
			count: 150000,
			points: 0,
			title: {
				en: "Super Picsou Géant",
				fr: "Super Picsou Géant",
				de: "Super Picsou Géant",
				es: "Super Picsou Géant"
			}
		},
		{
			count: 600000,
			points: 0,
			title: {
				en: "Plus grande fortune d'après le Guildian Express",
				fr: "Plus grande fortune d'après le Guildian Express",
				de: "Plus grande fortune d'après le Guildian Express",
				es: "Plus grande fortune d'après le Guildian Express"
			}
		}
	]
};
var ksell = {
	id: "ksell",
	name: {
		en: "Kubors gagnés en vendant des trucs",
		fr: "Kubors gagnés en vendant des trucs",
		de: "Kubors gagnés en vendant des trucs",
		es: "Kubors gagnés en vendant des trucs"
	},
	rare: 0,
	unlocks: [
		{
			count: 1000,
			points: 0,
			title: {
				en: "Vendeur à la sauvette",
				fr: "Vendeur à la sauvette",
				de: "Vendeur à la sauvette",
				es: "Vendeur à la sauvette"
			}
		},
		{
			count: 4000,
			points: 0,
			title: {
				en: "Fibre commerciale intégrale",
				fr: "Fibre commerciale intégrale",
				de: "Fibre commerciale intégrale",
				es: "Fibre commerciale intégrale"
			}
		},
		{
			count: 12000,
			points: 0,
			title: {
				en: "Où est le cadeau que tu m'as offert ? Euh...",
				fr: "Où est le cadeau que tu m'as offert ? Euh...",
				de: "Où est le cadeau que tu m'as offert ? Euh...",
				es: "Où est le cadeau que tu m'as offert ? Euh..."
			}
		}
	]
};
var msg = {
	id: "msg",
	name: {
		en: "Messages postés",
		fr: "Messages postés",
		de: "Messages postés",
		es: "Messages postés"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 0,
			title: {
				en: "Papoteur impénitent",
				fr: "Papoteur impénitent",
				de: "Papoteur impénitent",
				es: "Papoteur impénitent"
			}
		},
		{
			count: 500,
			points: 0,
			title: {
				en: "Eh ben moi je pense que...",
				fr: "Eh ben moi je pense que...",
				de: "Eh ben moi je pense que...",
				es: "Eh ben moi je pense que..."
			}
		},
		{
			count: 2000,
			points: 0,
			title: {
				en: "Teneur de crachoir depuis 1524",
				fr: "Teneur de crachoir depuis 1524",
				de: "Teneur de crachoir depuis 1524",
				es: "Teneur de crachoir depuis 1524"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Qui n'a pas vu mes amygdales ?",
				fr: "Qui n'a pas vu mes amygdales ?",
				de: "Qui n'a pas vu mes amygdales ?",
				es: "Qui n'a pas vu mes amygdales ?"
			}
		}
	]
};
var obj = {
	id: "obj",
	name: {
		en: "Objets magiques utilisés en jeu",
		fr: "Objets magiques utilisés en jeu",
		de: "Objets magiques utilisés en jeu",
		es: "Objets magiques utilisés en jeu"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			title: {
				en: "Alchimiste suréquipé",
				fr: "Alchimiste suréquipé",
				de: "Alchimiste suréquipé",
				es: "Alchimiste suréquipé"
			}
		},
		{
			count: 40,
			points: 1,
			title: {
				en: "Castor junior de la pépite d'or",
				fr: "Castor junior de la pépite d'or",
				de: "Castor junior de la pépite d'or",
				es: "Castor junior de la pépite d'or"
			}
		},
		{
			count: 150,
			points: 1,
			title: {
				en: "Gogogadgetobjetmagique ! ",
				fr: "Gogogadgetobjetmagique ! ",
				de: "Gogogadgetobjetmagique ! ",
				es: "Gogogadgetobjetmagique ! "
			}
		}
	]
};
var rhave = {
	id: "rhave",
	name: {
		en: "Recettes possédées",
		fr: "Recettes possédées",
		de: "Recettes possédées",
		es: "Recettes possédées"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 3
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Collectionneur de recettes",
				fr: "Collectionneur de recettes",
				de: "Collectionneur de recettes",
				es: "Collectionneur de recettes"
			}
		},
		{
			count: 20,
			points: 3
		},
		{
			count: 30,
			points: 3
		},
		{
			count: 40,
			points: 3
		},
		{
			count: 50,
			points: 3,
			title: {
				en: "Encyclopédie sur pattes",
				fr: "Encyclopédie sur pattes",
				de: "Encyclopédie sur pattes",
				es: "Encyclopédie sur pattes"
			}
		},
		{
			count: 60,
			points: 3
		},
		{
			count: 70,
			points: 3
		},
		{
			count: 80,
			points: 3
		},
		{
			count: 90,
			points: 3
		},
		{
			count: 100,
			points: 3
		},
		{
			count: 110,
			points: 3
		},
		{
			count: 120,
			points: 3,
			title: {
				en: "Je sais tout ! Tout ! Mouahahahah ! ",
				fr: "Je sais tout ! Tout ! Mouahahahah ! ",
				de: "Je sais tout ! Tout ! Mouahahahah ! ",
				es: "Je sais tout ! Tout ! Mouahahahah ! "
			}
		},
		{
			count: 130,
			points: 3
		},
		{
			count: 140,
			points: 3
		},
		{
			count: 150,
			points: 3
		},
		{
			count: 160,
			points: 3
		},
		{
			count: 170,
			points: 3
		},
		{
			count: 180,
			points: 3
		},
		{
			count: 190,
			points: 3
		},
		{
			count: 200,
			points: 3
		}
	]
};
var rcos = {
	id: "rcos",
	name: {
		en: "Recettes cosmétiques réussies",
		fr: "Recettes cosmétiques réussies",
		de: "Recettes cosmétiques réussies",
		es: "Recettes cosmétiques réussies"
	},
	rare: 0,
	unlocks: [
		{
			count: 15,
			points: 1,
			title: {
				en: "Alchimiste coquet",
				fr: "Alchimiste coquet",
				de: "Alchimiste coquet",
				es: "Alchimiste coquet"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "J'vous jure, tout est vrai ! 100% naturel ! ",
				fr: "J'vous jure, tout est vrai ! 100% naturel ! ",
				de: "J'vous jure, tout est vrai ! 100% naturel ! ",
				es: "J'vous jure, tout est vrai ! 100% naturel ! "
			}
		},
		{
			count: 120,
			points: 1,
			title: {
				en: "Alchimiste bien conservé. Et sans formol !",
				fr: "Alchimiste bien conservé. Et sans formol !",
				de: "Alchimiste bien conservé. Et sans formol !",
				es: "Alchimiste bien conservé. Et sans formol !"
			}
		}
	]
};
var relem = {
	id: "relem",
	name: {
		en: "Recettes élémentaires réussies",
		fr: "Recettes élémentaires réussies",
		de: "Recettes élémentaires réussies",
		es: "Recettes élémentaires réussies"
	},
	rare: 0,
	unlocks: [
		{
			count: 15,
			points: 1,
			title: {
				en: "Adepte des bidouilles d'éléments",
				fr: "Adepte des bidouilles d'éléments",
				de: "Adepte des bidouilles d'éléments",
				es: "Adepte des bidouilles d'éléments"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Appelez-moi Watson",
				fr: "Appelez-moi Watson",
				de: "Appelez-moi Watson",
				es: "Appelez-moi Watson"
			}
		},
		{
			count: 120,
			points: 1,
			title: {
				en: "Seigneur des éléments",
				fr: "Seigneur des éléments",
				de: "Seigneur des éléments",
				es: "Seigneur des éléments"
			}
		}
	]
};
var rvest = {
	id: "rvest",
	name: {
		en: "Recettes vestimentaires réussies",
		fr: "Recettes vestimentaires réussies",
		de: "Recettes vestimentaires réussies",
		es: "Recettes vestimentaires réussies"
	},
	rare: 0,
	unlocks: [
		{
			count: 15,
			points: 1,
			title: {
				en: "Fashion attitude forever",
				fr: "Fashion attitude forever",
				de: "Fashion attitude forever",
				es: "Fashion attitude forever"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "La mode, c'est moi",
				fr: "La mode, c'est moi",
				de: "La mode, c'est moi",
				es: "La mode, c'est moi"
			}
		},
		{
			count: 120,
			points: 1,
			title: {
				en: "I'm in ur dressingz, trying ur cloozes ! ",
				fr: "I'm in ur dressingz, trying ur cloozes ! ",
				de: "I'm in ur dressingz, trying ur cloozes ! ",
				es: "I'm in ur dressingz, trying ur cloozes ! "
			}
		}
	]
};
var rcomb = {
	id: "rcomb",
	name: {
		en: "Recettes de combat réussies",
		fr: "Recettes de combat réussies",
		de: "Recettes de combat réussies",
		es: "Recettes de combat réussies"
	},
	rare: 0,
	unlocks: [
		{
			count: 15,
			points: 1,
			title: {
				en: "On est jamais trop bien équipé",
				fr: "On est jamais trop bien équipé",
				de: "On est jamais trop bien équipé",
				es: "On est jamais trop bien équipé"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Mais pourquoi est-il aussi méchant ? ",
				fr: "Mais pourquoi est-il aussi méchant ? ",
				de: "Mais pourquoi est-il aussi méchant ? ",
				es: "Mais pourquoi est-il aussi méchant ? "
			}
		},
		{
			count: 120,
			points: 1,
			title: {
				en: "Fabriquant d'armes depuis 1509",
				fr: "Fabriquant d'armes depuis 1509",
				de: "Fabriquant d'armes depuis 1509",
				es: "Fabriquant d'armes depuis 1509"
			}
		}
	]
};
var rstup = {
	id: "rstup",
	name: {
		en: "Recettes d'inutilité publique réussies",
		fr: "Recettes d'inutilité publique réussies",
		de: "Recettes d'inutilité publique réussies",
		es: "Recettes d'inutilité publique réussies"
	},
	rare: 0,
	unlocks: [
		{
			count: 15,
			points: 1,
			title: {
				en: "Alchimiste futile",
				fr: "Alchimiste futile",
				de: "Alchimiste futile",
				es: "Alchimiste futile"
			}
		},
		{
			count: 50,
			points: 1,
			title: {
				en: "Et vous trouvez ça drôle ?",
				fr: "Et vous trouvez ça drôle ?",
				de: "Et vous trouvez ça drôle ?",
				es: "Et vous trouvez ça drôle ?"
			}
		},
		{
			count: 120,
			points: 1,
			title: {
				en: "Spécialiste en machins idiots",
				fr: "Spécialiste en machins idiots",
				de: "Spécialiste en machins idiots",
				es: "Spécialiste en machins idiots"
			}
		}
	]
};
var skat = {
	id: "skat",
	name: {
		en: "Skats pulvérisés",
		fr: "Skats pulvérisés",
		de: "Skats pulvérisés",
		es: "Skats pulvérisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 200,
			points: 1,
			title: {
				en: "Exterminateur junior",
				fr: "Exterminateur junior",
				de: "Exterminateur junior",
				es: "Exterminateur junior"
			}
		},
		{
			count: 1000,
			points: 1,
			title: {
				en: "Monstre sans coeur",
				fr: "Monstre sans coeur",
				de: "Monstre sans coeur",
				es: "Monstre sans coeur"
			}
		},
		{
			count: 5000,
			points: 1,
			title: {
				en: "Skavalier de la Skapocalypse",
				fr: "Skavalier de la Skapocalypse",
				de: "Skavalier de la Skapocalypse",
				es: "Skavalier de la Skapocalypse"
			}
		}
	]
};
var block = {
	id: "block",
	name: {
		en: "Pyrite détruite",
		fr: "Pyrite détruite",
		de: "Pyrite détruite",
		es: "Pyrite détruite"
	},
	rare: 0,
	unlocks: [
		{
			count: 200,
			points: 1,
			title: {
				en: "Casseur de caillou",
				fr: "Casseur de caillou",
				de: "Casseur de caillou",
				es: "Casseur de caillou"
			}
		},
		{
			count: 1000,
			points: 1,
			title: {
				en: "Déboucheur alchimique diplômé",
				fr: "Déboucheur alchimique diplômé",
				de: "Déboucheur alchimique diplômé",
				es: "Déboucheur alchimique diplômé"
			}
		},
		{
			count: 5000,
			points: 1,
			title: {
				en: "J'avoue, Jéricho c'est ma faute",
				fr: "J'avoue, Jéricho c'est ma faute",
				de: "J'avoue, Jéricho c'est ma faute",
				es: "J'avoue, Jéricho c'est ma faute"
			}
		}
	]
};
var eor = {
	id: "eor",
	name: {
		en: "Pépites d'or récupérées",
		fr: "Pépites d'or récupérées",
		de: "Pépites d'or récupérées",
		es: "Pépites d'or récupérées"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Des pépites plein les yeux",
				fr: "Des pépites plein les yeux",
				de: "Des pépites plein les yeux",
				es: "Des pépites plein les yeux"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Orpailleur patenté",
				fr: "Orpailleur patenté",
				de: "Orpailleur patenté",
				es: "Orpailleur patenté"
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "La pierre philosophale, c'est moi",
				fr: "La pierre philosophale, c'est moi",
				de: "La pierre philosophale, c'est moi",
				es: "La pierre philosophale, c'est moi"
			}
		}
	]
};
var eabys = {
	id: "eabys",
	name: {
		en: "Abyssonnes récupérées",
		fr: "Abyssonnes récupérées",
		de: "Abyssonnes récupérées",
		es: "Abyssonnes récupérées"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Pas peur de se mouiller",
				fr: "Pas peur de se mouiller",
				de: "Pas peur de se mouiller",
				es: "Pas peur de se mouiller"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Alchimiste des abysses",
				fr: "Alchimiste des abysses",
				de: "Alchimiste des abysses",
				es: "Alchimiste des abysses"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Commandant Cousteau",
				fr: "Commandant Cousteau",
				de: "Commandant Cousteau",
				es: "Commandant Cousteau"
			}
		}
	]
};
var emag = {
	id: "emag",
	name: {
		en: "Magmas récupérés",
		fr: "Magmas récupérés",
		de: "Magmas récupérés",
		es: "Magmas récupérés"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Attention, c'est chaud",
				fr: "Attention, c'est chaud",
				de: "Attention, c'est chaud",
				es: "Attention, c'est chaud"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Pyromane avéré",
				fr: "Pyromane avéré",
				de: "Pyromane avéré",
				es: "Pyromane avéré"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "J'vais vous faire une bonne flambée moi, z'allez voir",
				fr: "J'vais vous faire une bonne flambée moi, z'allez voir",
				de: "J'vais vous faire une bonne flambée moi, z'allez voir",
				es: "J'vais vous faire une bonne flambée moi, z'allez voir"
			}
		}
	]
};
var eprim = {
	id: "eprim",
	name: {
		en: "Primoterres récupérées",
		fr: "Primoterres récupérées",
		de: "Primoterres récupérées",
		es: "Primoterres récupérées"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Ami de la nature",
				fr: "Ami de la nature",
				de: "Ami de la nature",
				es: "Ami de la nature"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Motoculteur alchimique",
				fr: "Motoculteur alchimique",
				de: "Motoculteur alchimique",
				es: "Motoculteur alchimique"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Casse-croûte terrestre",
				fr: "Casse-croûte terrestre",
				de: "Casse-croûte terrestre",
				es: "Casse-croûte terrestre"
			}
		}
	]
};
var evort = {
	id: "evort",
	name: {
		en: "Coeurs de vortex récupérés",
		fr: "Coeurs de vortex récupérés",
		de: "Coeurs de vortex récupérés",
		es: "Coeurs de vortex récupérés"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Alchimiste qui décoiffe",
				fr: "Alchimiste qui décoiffe",
				de: "Alchimiste qui décoiffe",
				es: "Alchimiste qui décoiffe"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Maître des vents",
				fr: "Maître des vents",
				de: "Maître des vents",
				es: "Maître des vents"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Wind waker inside",
				fr: "Wind waker inside",
				de: "Wind waker inside",
				es: "Wind waker inside"
			}
		}
	]
};
var echro = {
	id: "echro",
	name: {
		en: "Chroniums récupérés",
		fr: "Chroniums récupérés",
		de: "Chroniums récupérés",
		es: "Chroniums récupérés"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Maître chronophage",
				fr: "Maître chronophage",
				de: "Maître chronophage",
				es: "Maître chronophage"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Joueur hardcore officiel",
				fr: "Joueur hardcore officiel",
				de: "Joueur hardcore officiel",
				es: "Joueur hardcore officiel"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Légende vivante du royaume",
				fr: "Légende vivante du royaume",
				de: "Légende vivante du royaume",
				es: "Légende vivante du royaume"
			}
		}
	]
};
var adyn = {
	id: "adyn",
	name: {
		en: "Dynamites utilisées",
		fr: "Dynamites utilisées",
		de: "Dynamites utilisées",
		es: "Dynamites utilisées"
	},
	rare: 0,
	unlocks: [
		{
			count: 4,
			points: 0,
			title: {
				en: "Artificier amateur",
				fr: "Artificier amateur",
				de: "Artificier amateur",
				es: "Artificier amateur"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Demolition man",
				fr: "Demolition man",
				de: "Demolition man",
				es: "Demolition man"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "J'ai un rencard samedi avec Brenda ! Wouhou ! ",
				fr: "J'ai un rencard samedi avec Brenda ! Wouhou ! ",
				de: "J'ai un rencard samedi avec Brenda ! Wouhou ! ",
				es: "J'ai un rencard samedi avec Brenda ! Wouhou ! "
			}
		}
	]
};
var agren = {
	id: "agren",
	name: {
		en: "Charcleurs utilisés",
		fr: "Charcleurs utilisés",
		de: "Charcleurs utilisés",
		es: "Charcleurs utilisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 4,
			points: 0,
			title: {
				en: "Petit mais costaud",
				fr: "Petit mais costaud",
				de: "Petit mais costaud",
				es: "Petit mais costaud"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Petite frappe chirurgicale",
				fr: "Petite frappe chirurgicale",
				de: "Petite frappe chirurgicale",
				es: "Petite frappe chirurgicale"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Fan absolu de Torgul Schrap",
				fr: "Fan absolu de Torgul Schrap",
				de: "Fan absolu de Torgul Schrap",
				es: "Fan absolu de Torgul Schrap"
			}
		}
	]
};
var apick = {
	id: "apick",
	name: {
		en: "Mains du mentor et Patchinkrops utilisés",
		fr: "Mains du mentor et Patchinkrops utilisés",
		de: "Mains du mentor et Patchinkrops utilisés",
		es: "Mains du mentor et Patchinkrops utilisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 4,
			points: 0,
			title: {
				en: "Je veux ça et rien d'autre ! ",
				fr: "Je veux ça et rien d'autre ! ",
				de: "Je veux ça et rien d'autre ! ",
				es: "Je veux ça et rien d'autre ! "
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Kleptomane alchimique",
				fr: "Kleptomane alchimique",
				de: "Kleptomane alchimique",
				es: "Kleptomane alchimique"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "J'ai des goûts très très très précis, vous savez",
				fr: "J'ai des goûts très très très précis, vous savez",
				de: "J'ai des goûts très très très précis, vous savez",
				es: "J'ai des goûts très très très précis, vous savez"
			}
		}
	]
};
var adolly = {
	id: "adolly",
	name: {
		en: "Dollyxirs utilisés",
		fr: "Dollyxirs utilisés",
		de: "Dollyxirs utilisés",
		es: "Dollyxirs utilisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 4,
			points: 0,
			title: {
				en: "Par deux c'est mieux",
				fr: "Par deux c'est mieux",
				de: "Par deux c'est mieux",
				es: "Par deux c'est mieux"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Docteur, je vois double",
				fr: "Docteur, je vois double",
				de: "Docteur, je vois double",
				es: "Docteur, je vois double"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Une pépite achetée, la deuxième offerte ! ",
				fr: "Une pépite achetée, la deuxième offerte ! ",
				de: "Une pépite achetée, la deuxième offerte ! ",
				es: "Une pépite achetée, la deuxième offerte ! "
			}
		}
	]
};
var araz = {
	id: "araz",
	name: {
		en: "Razkrölls utilisés",
		fr: "Razkrölls utilisés",
		de: "Razkrölls utilisés",
		es: "Razkrölls utilisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 4,
			points: 0,
			title: {
				en: "Jamais content",
				fr: "Jamais content",
				de: "Jamais content",
				es: "Jamais content"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "C'était mieux avant...",
				fr: "C'était mieux avant...",
				de: "C'était mieux avant...",
				es: "C'était mieux avant..."
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "I can't get nooooo satisfaction",
				fr: "I can't get nooooo satisfaction",
				de: "I can't get nooooo satisfaction",
				es: "I can't get nooooo satisfaction"
			}
		}
	]
};
var awomb = {
	id: "awomb",
	name: {
		en: "Branle-bas de wombats utilisés",
		fr: "Branle-bas de wombats utilisés",
		de: "Branle-bas de wombats utilisés",
		es: "Branle-bas de wombats utilisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 4,
			points: 0,
			title: {
				en: "Ami des bêtes",
				fr: "Ami des bêtes",
				de: "Ami des bêtes",
				es: "Ami des bêtes"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Chef de meute",
				fr: "Chef de meute",
				de: "Chef de meute",
				es: "Chef de meute"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Eleveur de wombats depuis 1542",
				fr: "Eleveur de wombats depuis 1542",
				de: "Eleveur de wombats depuis 1542",
				es: "Eleveur de wombats depuis 1542"
			}
		}
	]
};
var tbeta = {
	id: "tbeta",
	name: {
		en: "Beta-test de naturalchimie effectué",
		fr: "Beta-test de naturalchimie effectué",
		de: "Beta-test de naturalchimie effectué",
		es: "Beta-test de naturalchimie effectué"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Beta-testeur qui se la pète",
				fr: "Beta-testeur qui se la pète",
				de: "Beta-testeur qui se la pète",
				es: "Beta-testeur qui se la pète"
			}
		}
	]
};
var fjv = {
	id: "fjv",
	name: {
		en: "Connexion sur la borne au FJV 2010",
		fr: "Connexion sur la borne au FJV 2010",
		de: "Connexion sur la borne au FJV 2010",
		es: "Connexion sur la borne au FJV 2010"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Je suis venu, j'ai vu, je me suis connectu",
				fr: "Je suis venu, j'ai vu, je me suis connectu",
				de: "Je suis venu, j'ai vu, je me suis connectu",
				es: "Je suis venu, j'ai vu, je me suis connectu"
			}
		}
	]
};
var gfcas = {
	id: "gfcas",
	name: {
		en: "Casquettes Chouettex récupérées",
		fr: "Casquettes Chouettex récupérées",
		de: "Casquettes Chouettex récupérées",
		es: "Casquettes Chouettex récupérées"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Chouette parrain",
				fr: "Chouette parrain",
				de: "Chouette parrain",
				es: "Chouette parrain"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Ras la casquette !",
				fr: "Ras la casquette !",
				de: "Ras la casquette !",
				es: "Ras la casquette !"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Supporter officiel Chouettex",
				fr: "Supporter officiel Chouettex",
				de: "Supporter officiel Chouettex",
				es: "Supporter officiel Chouettex"
			}
		}
	]
};
var hair = {
	id: "hair",
	name: {
		en: "Visite chez Surtouffe",
		fr: "Visite chez Surtouffe",
		de: "Visite chez Surtouffe",
		es: "Visite chez Surtouffe"
	},
	rare: 0,
	unlocks: [
		{
			count: 2,
			points: 0,
			title: {
				en: "On fait comme d'habitude ? ",
				fr: "On fait comme d'habitude ? ",
				de: "On fait comme d'habitude ? ",
				es: "On fait comme d'habitude ? "
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Parce que je le vaux bien",
				fr: "Parce que je le vaux bien",
				de: "Parce que je le vaux bien",
				es: "Parce que je le vaux bien"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Oscar Surtouffe, mon ami pour la vie",
				fr: "Oscar Surtouffe, mon ami pour la vie",
				de: "Oscar Surtouffe, mon ami pour la vie",
				es: "Oscar Surtouffe, mon ami pour la vie"
			}
		}
	]
};
var pumpk = {
	id: "pumpk",
	name: {
		en: "Courgesprits récupérées",
		fr: "Courgesprits récupérées",
		de: "Courgesprits récupérées",
		es: "Courgesprits récupérées"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 0,
			title: {
				en: "Alchimiste à la main verte",
				fr: "Alchimiste à la main verte",
				de: "Alchimiste à la main verte",
				es: "Alchimiste à la main verte"
			}
		},
		{
			count: 5000,
			points: 0,
			title: {
				en: "Roi de la binette",
				fr: "Roi de la binette",
				de: "Roi de la binette",
				es: "Roi de la binette"
			}
		},
		{
			count: 50000,
			points: 0,
			title: {
				en: "Du jus de courge dans les veines",
				fr: "Du jus de courge dans les veines",
				de: "Du jus de courge dans les veines",
				es: "Du jus de courge dans les veines"
			}
		}
	]
};
var xmph = {
	id: "xmph",
	name: {
		en: "Nombre de photos souvenirs prises",
		fr: "Nombre de photos souvenirs prises",
		de: "Nombre de photos souvenirs prises",
		es: "Nombre de photos souvenirs prises"
	},
	rare: 0,
	unlocks: [
		{
			count: 2,
			points: 0,
			title: {
				en: "Petit malin",
				fr: "Petit malin",
				de: "Petit malin",
				es: "Petit malin"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Accro de la magouille",
				fr: "Accro de la magouille",
				de: "Accro de la magouille",
				es: "Accro de la magouille"
			}
		},
		{
			count: 35,
			points: 0,
			title: {
				en: "Super transformiste",
				fr: "Super transformiste",
				de: "Super transformiste",
				es: "Super transformiste"
			}
		}
	]
};
var xmbn = {
	id: "xmbn",
	name: {
		en: "Nombre de boules de Noël récupérées",
		fr: "Nombre de boules de Noël récupérées",
		de: "Nombre de boules de Noël récupérées",
		es: "Nombre de boules de Noël récupérées"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Alchimiste de Noël",
				fr: "Alchimiste de Noël",
				de: "Alchimiste de Noël",
				es: "Alchimiste de Noël"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "C'est joli ces petits machins",
				fr: "C'est joli ces petits machins",
				de: "C'est joli ces petits machins",
				es: "C'est joli ces petits machins"
			}
		},
		{
			count: 300,
			points: 0,
			title: {
				en: "Quelqu'un aurait un très très gros sapin ? ",
				fr: "Quelqu'un aurait un très très gros sapin ? ",
				de: "Quelqu'un aurait un très très gros sapin ? ",
				es: "Quelqu'un aurait un très très gros sapin ? "
			}
		}
	]
};
var xmch = {
	id: "xmch",
	name: {
		en: "Nombre de chocolats avalés",
		fr: "Nombre de chocolats avalés",
		de: "Nombre de chocolats avalés",
		es: "Nombre de chocolats avalés"
	},
	rare: 0,
	unlocks: [
		{
			count: 5,
			points: 0,
			title: {
				en: "Slurp Miam Crunch",
				fr: "Slurp Miam Crunch",
				de: "Slurp Miam Crunch",
				es: "Slurp Miam Crunch"
			}
		},
		{
			count: 20,
			points: 0,
			title: {
				en: "Ch'est gras mais ch'est bon",
				fr: "Ch'est gras mais ch'est bon",
				de: "Ch'est gras mais ch'est bon",
				es: "Ch'est gras mais ch'est bon"
			}
		},
		{
			count: 100,
			points: 0,
			title: {
				en: "Je... J'me sens pas super bien, là...",
				fr: "Je... J'me sens pas super bien, là...",
				de: "Je... J'me sens pas super bien, là...",
				es: "Je... J'me sens pas super bien, là..."
			}
		}
	]
};
var xmsm = {
	id: "xmsm",
	name: {
		en: "Nombre de transformations en bonhomme de neige",
		fr: "Nombre de transformations en bonhomme de neige",
		de: "Nombre de transformations en bonhomme de neige",
		es: "Nombre de transformations en bonhomme de neige"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Ah c'est malin. Très drôle. Très amusant...",
				fr: "Ah c'est malin. Très drôle. Très amusant...",
				de: "Ah c'est malin. Très drôle. Très amusant...",
				es: "Ah c'est malin. Très drôle. Très amusant..."
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "J'ai fffff-rrrr-fr froiiiid-d-d ! ",
				fr: "J'ai fffff-rrrr-fr froiiiid-d-d ! ",
				de: "J'ai fffff-rrrr-fr froiiiid-d-d ! ",
				es: "J'ai fffff-rrrr-fr froiiiid-d-d ! "
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "Vivement le printemps, c'est moi qui vous le dit !",
				fr: "Vivement le printemps, c'est moi qui vous le dit !",
				de: "Vivement le printemps, c'est moi qui vous le dit !",
				es: "Vivement le printemps, c'est moi qui vous le dit !"
			}
		}
	]
};
var rssch = {
	id: "rssch",
	name: {
		en: "Participations à la lutte des classes avec la même école",
		fr: "Participations à la lutte des classes avec la même école",
		de: "Participations à la lutte des classes avec la même école",
		es: "Participations à la lutte des classes avec la même école"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 0,
			title: {
				en: "Mon école, c'est ma grande passion.",
				fr: "Mon école, c'est ma grande passion.",
				de: "Mon école, c'est ma grande passion.",
				es: "Mon école, c'est ma grande passion."
			}
		}
	]
};
var rsjz = {
	id: "rsjz",
	name: {
		en: "Participations à la lutte des classes avec Jeezara",
		fr: "Participations à la lutte des classes avec Jeezara",
		de: "Participations à la lutte des classes avec Jeezara",
		es: "Participations à la lutte des classes avec Jeezara"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 0,
			title: {
				en: "Jeezara, tu l'aimes ou tu la quittes.",
				fr: "Jeezara, tu l'aimes ou tu la quittes.",
				de: "Jeezara, tu l'aimes ou tu la quittes.",
				es: "Jeezara, tu l'aimes ou tu la quittes."
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Jeezara et moi, c'est pour la vie !",
				fr: "Jeezara et moi, c'est pour la vie !",
				de: "Jeezara et moi, c'est pour la vie !",
				es: "Jeezara et moi, c'est pour la vie !"
			}
		}
	]
};
var rsap = {
	id: "rsap",
	name: {
		en: "Participations à la lutte des classes avec Audepint",
		fr: "Participations à la lutte des classes avec Audepint",
		de: "Participations à la lutte des classes avec Audepint",
		es: "Participations à la lutte des classes avec Audepint"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 0,
			title: {
				en: "Audepint, tu l'aimes ou tu la quittes.",
				fr: "Audepint, tu l'aimes ou tu la quittes.",
				de: "Audepint, tu l'aimes ou tu la quittes.",
				es: "Audepint, tu l'aimes ou tu la quittes."
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Audepint et moi, c'est pour la vie !",
				fr: "Audepint et moi, c'est pour la vie !",
				de: "Audepint et moi, c'est pour la vie !",
				es: "Audepint et moi, c'est pour la vie !"
			}
		}
	]
};
var rssk = {
	id: "rssk",
	name: {
		en: "Participations à la lutte des classes avec Shang-Kah",
		fr: "Participations à la lutte des classes avec Shang-Kah",
		de: "Participations à la lutte des classes avec Shang-Kah",
		es: "Participations à la lutte des classes avec Shang-Kah"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 0,
			title: {
				en: "Shang-Kah, tu l'aimes ou tu la quittes.",
				fr: "Shang-Kah, tu l'aimes ou tu la quittes.",
				de: "Shang-Kah, tu l'aimes ou tu la quittes.",
				es: "Shang-Kah, tu l'aimes ou tu la quittes."
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Shang-Kah et moi, c'est pour la vie !",
				fr: "Shang-Kah et moi, c'est pour la vie !",
				de: "Shang-Kah et moi, c'est pour la vie !",
				es: "Shang-Kah et moi, c'est pour la vie !"
			}
		}
	]
};
var rsgm = {
	id: "rsgm",
	name: {
		en: "Participations à la lutte des classes avec Gemini",
		fr: "Participations à la lutte des classes avec Gemini",
		de: "Participations à la lutte des classes avec Gemini",
		es: "Participations à la lutte des classes avec Gemini"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 0,
			title: {
				en: "Gemini, tu l'aimes ou tu la quittes.",
				fr: "Gemini, tu l'aimes ou tu la quittes.",
				de: "Gemini, tu l'aimes ou tu la quittes.",
				es: "Gemini, tu l'aimes ou tu la quittes."
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Gemini et moi, c'est pour la vie !",
				fr: "Gemini et moi, c'est pour la vie !",
				de: "Gemini et moi, c'est pour la vie !",
				es: "Gemini et moi, c'est pour la vie !"
			}
		}
	]
};
var rnbing = {
	id: "rnbing",
	name: {
		en: "Nombre d'ingrédients donnés au puits hermétique",
		fr: "Nombre d'ingrédients donnés au puits hermétique",
		de: "Nombre d'ingrédients donnés au puits hermétique",
		es: "Nombre d'ingrédients donnés au puits hermétique"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 0,
			title: {
				en: "J'ai fait un voeu, au cas où...",
				fr: "J'ai fait un voeu, au cas où...",
				de: "J'ai fait un voeu, au cas où...",
				es: "J'ai fait un voeu, au cas où..."
			}
		},
		{
			count: 1000,
			points: 0,
			title: {
				en: "J'vais te sauver, royaume adoré !",
				fr: "J'vais te sauver, royaume adoré !",
				de: "J'vais te sauver, royaume adoré !",
				es: "J'vais te sauver, royaume adoré !"
			}
		},
		{
			count: 20000,
			points: 0,
			title: {
				en: "On va bien finir par reboucher ce trou...",
				fr: "On va bien finir par reboucher ce trou...",
				de: "On va bien finir par reboucher ce trou...",
				es: "On va bien finir par reboucher ce trou..."
			}
		}
	]
};
var rnbobj = {
	id: "rnbobj",
	name: {
		en: "Nombre d'objectifs finalisés",
		fr: "Nombre d'objectifs finalisés",
		de: "Nombre d'objectifs finalisés",
		es: "Nombre d'objectifs finalisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "C'est moi qui l'ai fait ! ",
				fr: "C'est moi qui l'ai fait ! ",
				de: "C'est moi qui l'ai fait ! ",
				es: "C'est moi qui l'ai fait ! "
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Un petit pas pour moi, un grand pas pour mon école",
				fr: "Un petit pas pour moi, un grand pas pour mon école",
				de: "Un petit pas pour moi, un grand pas pour mon école",
				es: "Un petit pas pour moi, un grand pas pour mon école"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Un travail d'équipe, mais heureusement que je suis là. ",
				fr: "Un travail d'équipe, mais heureusement que je suis là. ",
				de: "Un travail d'équipe, mais heureusement que je suis là. ",
				es: "Un travail d'équipe, mais heureusement que je suis là. "
			}
		}
	]
};
var rbestc = {
	id: "rbestc",
	name: {
		en: "Nombre de fois 'meilleure classe de la lutte'",
		fr: "Nombre de fois 'meilleure classe de la lutte'",
		de: "Nombre de fois 'meilleure classe de la lutte'",
		es: "Nombre de fois 'meilleure classe de la lutte'"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "La planète peut nous dire merci ! ",
				fr: "La planète peut nous dire merci ! ",
				de: "La planète peut nous dire merci ! ",
				es: "La planète peut nous dire merci ! "
			}
		},
		{
			count: 5,
			points: 0,
			title: {
				en: "La classe internationale",
				fr: "La classe internationale",
				de: "La classe internationale",
				es: "La classe internationale"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Anobli par la Guilde pour service rendu à la nation",
				fr: "Anobli par la Guilde pour service rendu à la nation",
				de: "Anobli par la Guilde pour service rendu à la nation",
				es: "Anobli par la Guilde pour service rendu à la nation"
			}
		}
	]
};
var rdonk = {
	id: "rdonk",
	name: {
		en: "Nombre de kubors donnés à la classe",
		fr: "Nombre de kubors donnés à la classe",
		de: "Nombre de kubors donnés à la classe",
		es: "Nombre de kubors donnés à la classe"
	},
	rare: 0,
	unlocks: [
		{
			count: 1000,
			points: 0,
			title: {
				en: "T'as pas 2 kubors ? ",
				fr: "T'as pas 2 kubors ? ",
				de: "T'as pas 2 kubors ? ",
				es: "T'as pas 2 kubors ? "
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Fournisseur officiel de Kubors",
				fr: "Fournisseur officiel de Kubors",
				de: "Fournisseur officiel de Kubors",
				es: "Fournisseur officiel de Kubors"
			}
		},
		{
			count: 100000,
			points: 0,
			title: {
				en: "Et hop, je déduis tout ça de mes impôts ! ",
				fr: "Et hop, je déduis tout ça de mes impôts ! ",
				de: "Et hop, je déduis tout ça de mes impôts ! ",
				es: "Et hop, je déduis tout ça de mes impôts ! "
			}
		}
	]
};
var rdonr = {
	id: "rdonr",
	name: {
		en: "Quantité de réputation donnée à la classe",
		fr: "Quantité de réputation donnée à la classe",
		de: "Quantité de réputation donnée à la classe",
		es: "Quantité de réputation donnée à la classe"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 0,
			title: {
				en: "Trafiquant d'influence",
				fr: "Trafiquant d'influence",
				de: "Trafiquant d'influence",
				es: "Trafiquant d'influence"
			}
		},
		{
			count: 1200,
			points: 0,
			title: {
				en: "Au village, sans prétention, j'ai mauvaise réputation",
				fr: "Au village, sans prétention, j'ai mauvaise réputation",
				de: "Au village, sans prétention, j'ai mauvaise réputation",
				es: "Au village, sans prétention, j'ai mauvaise réputation"
			}
		},
		{
			count: 10000,
			points: 0,
			title: {
				en: "Gourou alchimique",
				fr: "Gourou alchimique",
				de: "Gourou alchimique",
				es: "Gourou alchimique"
			}
		}
	]
};
var rtp = {
	id: "rtp",
	name: {
		en: "Utilisation du téléporteur vers le puits hermétique",
		fr: "Utilisation du téléporteur vers le puits hermétique",
		de: "Utilisation du téléporteur vers le puits hermétique",
		es: "Utilisation du téléporteur vers le puits hermétique"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 0,
			title: {
				en: "J'arrive tout de suite, monsieur Spock ! ",
				fr: "J'arrive tout de suite, monsieur Spock ! ",
				de: "J'arrive tout de suite, monsieur Spock ! ",
				es: "J'arrive tout de suite, monsieur Spock ! "
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Shazam ! ",
				fr: "Shazam ! ",
				de: "Shazam ! ",
				es: "Shazam ! "
			}
		},
		{
			count: 250,
			points: 0,
			title: {
				en: "M m mais non c c'est p-pas d-d-dangereux pour la s-santé",
				fr: "M m mais non c c'est p-pas d-d-dangereux pour la s-santé",
				de: "M m mais non c c'est p-pas d-d-dangereux pour la s-santé",
				es: "M m mais non c c'est p-pas d-d-dangereux pour la s-santé"
			}
		}
	]
};
var agrte = {
	id: "agrte",
	name: {
		en: "Charcleurs téléguidés utilisés",
		fr: "Charcleurs téléguidés utilisés",
		de: "Charcleurs téléguidés utilisés",
		es: "Charcleurs téléguidés utilisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Sans maîtrise, la puissance n'est rien",
				fr: "Sans maîtrise, la puissance n'est rien",
				de: "Sans maîtrise, la puissance n'est rien",
				es: "Sans maîtrise, la puissance n'est rien"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Prends-ça, pépite d'or ! Euh non, attendez...",
				fr: "Prends-ça, pépite d'or ! Euh non, attendez...",
				de: "Prends-ça, pépite d'or ! Euh non, attendez...",
				es: "Prends-ça, pépite d'or ! Euh non, attendez..."
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Ca ne marche pas avec les casse-pieds, dommage...",
				fr: "Ca ne marche pas avec les casse-pieds, dommage...",
				de: "Ca ne marche pas avec les casse-pieds, dommage...",
				es: "Ca ne marche pas avec les casse-pieds, dommage..."
			}
		}
	]
};
var apelu = {
	id: "apelu",
	name: {
		en: "Peluchards utilisés",
		fr: "Peluchards utilisés",
		de: "Peluchards utilisés",
		es: "Peluchards utilisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Ami des bêtes. Les skats hein, pas mes collègues.",
				fr: "Ami des bêtes. Les skats hein, pas mes collègues.",
				de: "Ami des bêtes. Les skats hein, pas mes collègues.",
				es: "Ami des bêtes. Les skats hein, pas mes collègues."
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "J'en fais des vidéos que je poste partout ! ",
				fr: "J'en fais des vidéos que je poste partout ! ",
				de: "J'en fais des vidéos que je poste partout ! ",
				es: "J'en fais des vidéos que je poste partout ! "
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "L'exterminateur me déteste",
				fr: "L'exterminateur me déteste",
				de: "L'exterminateur me déteste",
				es: "L'exterminateur me déteste"
			}
		}
	]
};
var aslid = {
	id: "aslid",
	name: {
		en: "Pendulors et Turbulors utilisés",
		fr: "Pendulors et Turbulors utilisés",
		de: "Pendulors et Turbulors utilisés",
		es: "Pendulors et Turbulors utilisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Un peu plus à droite... Encore... Voilà",
				fr: "Un peu plus à droite... Encore... Voilà",
				de: "Un peu plus à droite... Encore... Voilà",
				es: "Un peu plus à droite... Encore... Voilà"
			}
		},
		{
			count: 15,
			points: 0,
			title: {
				en: "Roi de la glissade",
				fr: "Roi de la glissade",
				de: "Roi de la glissade",
				es: "Roi de la glissade"
			}
		},
		{
			count: 50,
			points: 0,
			title: {
				en: "Je finis un rubik's cube les yeux fermés !",
				fr: "Je finis un rubik's cube les yeux fermés !",
				de: "Je finis un rubik's cube les yeux fermés !",
				es: "Je finis un rubik's cube les yeux fermés !"
			}
		}
	]
};
var wmiss = {
	id: "wmiss",
	name: {
		en: "Premier au classement de la semaine du mode 'Mission'",
		fr: "Premier au classement de la semaine du mode 'Mission'",
		de: "Premier au classement de la semaine du mode 'Mission'",
		es: "Premier au classement de la semaine du mode 'Mission'"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Je vois des jardiniers morts",
				fr: "Je vois des jardiniers morts",
				de: "Je vois des jardiniers morts",
				es: "Je vois des jardiniers morts"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Directeur du Climatex",
				fr: "Directeur du Climatex",
				de: "Directeur du Climatex",
				es: "Directeur du Climatex"
			}
		}
	]
};
var wdig = {
	id: "wdig",
	name: {
		en: "Premier au classement de la semaine du mode 'Tais-toi et creuse'",
		fr: "Premier au classement de la semaine du mode 'Tais-toi et creuse'",
		de: "Premier au classement de la semaine du mode 'Tais-toi et creuse'",
		es: "Premier au classement de la semaine du mode 'Tais-toi et creuse'"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Alchimiste des profondeurs",
				fr: "Alchimiste des profondeurs",
				de: "Alchimiste des profondeurs",
				es: "Alchimiste des profondeurs"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Just one more block...",
				fr: "Just one more block...",
				de: "Just one more block...",
				es: "Just one more block..."
			}
		}
	]
};
var wice = {
	id: "wice",
	name: {
		en: "Premier au classement de la semaine du mode 'Ice Attack'",
		fr: "Premier au classement de la semaine du mode 'Ice Attack'",
		de: "Premier au classement de la semaine du mode 'Ice Attack'",
		es: "Premier au classement de la semaine du mode 'Ice Attack'"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Ils sont pas frais, mes éléments ? ! ",
				fr: "Ils sont pas frais, mes éléments ? ! ",
				de: "Ils sont pas frais, mes éléments ? ! ",
				es: "Ils sont pas frais, mes éléments ? ! "
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Un petit glaçon ? - Juste un seau, merci. ",
				fr: "Un petit glaçon ? - Juste un seau, merci. ",
				de: "Un petit glaçon ? - Juste un seau, merci. ",
				es: "Un petit glaçon ? - Juste un seau, merci. "
			}
		}
	]
};
var wwind = {
	id: "wwind",
	name: {
		en: "Premier au classement de la semaine du mode 'Vents stellaires'",
		fr: "Premier au classement de la semaine du mode 'Vents stellaires'",
		de: "Premier au classement de la semaine du mode 'Vents stellaires'",
		es: "Premier au classement de la semaine du mode 'Vents stellaires'"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			title: {
				en: "Mistral gagnant !",
				fr: "Mistral gagnant !",
				de: "Mistral gagnant !",
				es: "Mistral gagnant !"
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "C'est moi, l'ouragan des éléments",
				fr: "C'est moi, l'ouragan des éléments",
				de: "C'est moi, l'ouragan des éléments",
				es: "C'est moi, l'ouragan des éléments"
			}
		}
	]
};
var wdflt = {
	id: "wdflt",
	name: {
		en: "Premier au classement général de la semaine",
		fr: "Premier au classement général de la semaine",
		de: "Premier au classement général de la semaine",
		es: "Premier au classement général de la semaine"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 3,
			title: {
				en: "Cette semaine, c'est moi l'chef ! ",
				fr: "Cette semaine, c'est moi l'chef ! ",
				de: "Cette semaine, c'est moi l'chef ! ",
				es: "Cette semaine, c'est moi l'chef ! "
			}
		},
		{
			count: 10,
			points: 0,
			title: {
				en: "Moi, je fais partie du gratin des alchimistes",
				fr: "Moi, je fais partie du gratin des alchimistes",
				de: "Moi, je fais partie du gratin des alchimistes",
				es: "Moi, je fais partie du gratin des alchimistes"
			}
		},
		{
			count: 30,
			points: 0,
			title: {
				en: "Etre le meilleur, c'est pas sorcier.",
				fr: "Etre le meilleur, c'est pas sorcier.",
				de: "Etre le meilleur, c'est pas sorcier.",
				es: "Etre le meilleur, c'est pas sorcier."
			}
		}
	]
};
var amanif = {
	id: "amanif",
	name: {
		en: "Participation à la manifestation",
		fr: "Participation à la manifestation",
		de: "Participation à la manifestation",
		es: "Participation à la manifestation"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Une seule solution, la manifestation",
				fr: "Une seule solution, la manifestation",
				de: "Une seule solution, la manifestation",
				es: "Une seule solution, la manifestation"
			}
		}
	]
};
var naturalchimie2Json = {
	ccl: ccl,
	cmm: cmm,
	cnaz: cnaz,
	cok: cok,
	chro: chro,
	poum: poum,
	pevil: pevil,
	plove: plove,
	pchamp: pchamp,
	pygold: pygold,
	carg: carg,
	ccute: ccute,
	cninja: cninja,
	csmile: csmile,
	cwhat: cwhat,
	sdoc: sdoc,
	happy: happy,
	snonono: snonono,
	ssad: ssad,
	ssmile: ssmile,
	guSmall: guSmall,
	apSmall: apSmall,
	jzSmall: jzSmall,
	gmSmall: gmSmall,
	skSmall: skSmall,
	gu: gu$1,
	ap: ap$1,
	jz: jz$1,
	gm: gm$1,
	sk: sk,
	xmcool: xmcool,
	xmhu: xmhu,
	xmyeah: xmyeah,
	pkm: pkm,
	pko: pko,
	pky: pky,
	cstp: cstp,
	quest: quest,
	xp: xp,
	repgu: repgu,
	repap: repap,
	repjz: repjz,
	repgm: repgm,
	repsk: repsk,
	rdone: rdone,
	rfail: rfail,
	rconf: rconf,
	rforb: rforb,
	cten: cten,
	cbest: cbest,
	schang: schang,
	zone: zone,
	chaine: chaine,
	opa: opa,
	kubor: kubor,
	ksell: ksell,
	msg: msg,
	obj: obj,
	rhave: rhave,
	rcos: rcos,
	relem: relem,
	rvest: rvest,
	rcomb: rcomb,
	rstup: rstup,
	skat: skat,
	block: block,
	eor: eor,
	eabys: eabys,
	emag: emag,
	eprim: eprim,
	evort: evort,
	echro: echro,
	adyn: adyn,
	agren: agren,
	apick: apick,
	adolly: adolly,
	araz: araz,
	awomb: awomb,
	tbeta: tbeta,
	fjv: fjv,
	gfcas: gfcas,
	hair: hair,
	pumpk: pumpk,
	xmph: xmph,
	xmbn: xmbn,
	xmch: xmch,
	xmsm: xmsm,
	rssch: rssch,
	rsjz: rsjz,
	rsap: rsap,
	rssk: rssk,
	rsgm: rsgm,
	rnbing: rnbing,
	rnbobj: rnbobj,
	rbestc: rbestc,
	rdonk: rdonk,
	rdonr: rdonr,
	rtp: rtp,
	agrte: agrte,
	apelu: apelu,
	aslid: aslid,
	wmiss: wmiss,
	wdig: wdig,
	wice: wice,
	wwind: wwind,
	wdflt: wdflt,
	amanif: amanif
};

var compas = {
	id: "compas",
	name: {
		en: "Boussoles Obtenues",
		fr: "Boussoles Obtenues",
		de: "Boussoles Obtenues",
		es: "Boussoles Obtenues"
	},
	rare: 0,
	unlocks: [
		{
			count: 20,
			points: 5,
			prefix: true,
			title: {
				en: "Navigateur",
				fr: "Navigateur",
				de: "Navigateur",
				es: "Navigateur"
			}
		},
		{
			count: 100,
			points: 10,
			suffix: true,
			title: {
				en: "Olympe",
				fr: "Olympe",
				de: "Olympe",
				es: "Olympe"
			}
		},
		{
			count: 1000,
			points: 10,
			prefix: true,
			title: {
				en: "Titan",
				fr: "Titan",
				de: "Titan",
				es: "Titan"
			}
		}
	]
};
var triton = {
	id: "triton",
	name: {
		en: "Conque des Tritons",
		fr: "Conque des Tritons",
		de: "Conque des Tritons",
		es: "Conque des Tritons"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_triton.png"
		}
	]
};
var ring$1 = {
	id: "ring",
	name: {
		en: "Bague de Mariage",
		fr: "Bague de Mariage",
		de: "Bague de Mariage",
		es: "Bague de Mariage"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_ring.png"
		}
	]
};
var axe = {
	id: "axe",
	name: {
		en: "Hache Brisée d’Héphaïstos",
		fr: "Hache Brisée d’Héphaïstos",
		de: "Hache Brisée d’Héphaïstos",
		es: "Hache Brisée d’Héphaïstos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_axe.png"
		}
	]
};
var axefor = {
	id: "axefor",
	name: {
		en: "Hache d’Héphaïstos",
		fr: "Hache d’Héphaïstos",
		de: "Hache d’Héphaïstos",
		es: "Hache d’Héphaïstos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_axeforge.png"
		}
	]
};
var lotos = {
	id: "lotos",
	name: {
		en: "Feuilles de Lotos",
		fr: "Feuilles de Lotos",
		de: "Feuilles de Lotos",
		es: "Feuilles de Lotos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_lotos.png"
		}
	]
};
var moly = {
	id: "moly",
	name: {
		en: "Racines de Moly",
		fr: "Racines de Moly",
		de: "Racines de Moly",
		es: "Racines de Moly"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_moly.png"
		}
	]
};
var kmedal = {
	id: "kmedal",
	name: {
		en: "Médaille de Kabal",
		fr: "Médaille de Kabal",
		de: "Médaille de Kabal",
		es: "Médaille de Kabal"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_kmedal.png"
		}
	]
};
var blaze = {
	id: "blaze",
	name: {
		en: "Blason d'Halberti",
		fr: "Blason d'Halberti",
		de: "Blason d'Halberti",
		es: "Blason d'Halberti"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_blaze.png"
		}
	]
};
var crosto = {
	id: "crosto",
	name: {
		en: "Pierre de Cronos",
		fr: "Pierre de Cronos",
		de: "Pierre de Cronos",
		es: "Pierre de Cronos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_crostone.png"
		}
	]
};
var savmap = {
	id: "savmap",
	name: {
		en: "Carte de la Mer Sauvage",
		fr: "Carte de la Mer Sauvage",
		de: "Carte de la Mer Sauvage",
		es: "Carte de la Mer Sauvage"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_savmap.png"
		}
	]
};
var mirror = {
	id: "mirror",
	name: {
		en: "Miroir de Circé",
		fr: "Miroir de Circé",
		de: "Miroir de Circé",
		es: "Miroir de Circé"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_mirror.png"
		}
	]
};
var hypmap = {
	id: "hypmap",
	name: {
		en: "Carte de la Mer d'Hypothésis",
		fr: "Carte de la Mer d'Hypothésis",
		de: "Carte de la Mer d'Hypothésis",
		es: "Carte de la Mer d'Hypothésis"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_hypmap.png"
		}
	]
};
var galupi = {
	id: "galupi",
	name: {
		en: "Plume de Galupin",
		fr: "Plume de Galupin",
		de: "Plume de Galupin",
		es: "Plume de Galupin"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_galupin.png"
		}
	]
};
var nstar = {
	id: "nstar",
	name: {
		en: "Étoile du Nord",
		fr: "Étoile du Nord",
		de: "Étoile du Nord",
		es: "Étoile du Nord"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_nstar.png"
		}
	]
};
var rose = {
	id: "rose",
	name: {
		en: "Rose d'Airain",
		fr: "Rose d'Airain",
		de: "Rose d'Airain",
		es: "Rose d'Airain"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_rose.png"
		}
	]
};
var ribon = {
	id: "ribon",
	name: {
		en: "Ruban de Flora",
		fr: "Ruban de Flora",
		de: "Ruban de Flora",
		es: "Ruban de Flora"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_ribon.png"
		}
	]
};
var drod = {
	id: "drod",
	name: {
		en: "Baguette des Drünes",
		fr: "Baguette des Drünes",
		de: "Baguette des Drünes",
		es: "Baguette des Drünes"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_drod.png"
		}
	]
};
var zlance = {
	id: "zlance",
	name: {
		en: "Lance de Zeus",
		fr: "Lance de Zeus",
		de: "Lance de Zeus",
		es: "Lance de Zeus"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_zlance.png"
		}
	]
};
var zpenda = {
	id: "zpenda",
	name: {
		en: "Pendentif de Zeus",
		fr: "Pendentif de Zeus",
		de: "Pendentif de Zeus",
		es: "Pendentif de Zeus"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_zpendant.png"
		}
	]
};
var pempty = {
	id: "pempty",
	name: {
		en: "Potions Vides",
		fr: "Potions Vides",
		de: "Potions Vides",
		es: "Potions Vides"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_pempty.png"
		}
	]
};
var mcard = {
	id: "mcard",
	name: {
		en: "Carte de Marchand",
		fr: "Carte de Marchand",
		de: "Carte de Marchand",
		es: "Carte de Marchand"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_mcard.png"
		}
	]
};
var scard = {
	id: "scard",
	name: {
		en: "Carte de Sommelier",
		fr: "Carte de Sommelier",
		de: "Carte de Sommelier",
		es: "Carte de Sommelier"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_scard.png"
		}
	]
};
var cane1 = {
	id: "cane1",
	name: {
		en: "Canne du Débutant",
		fr: "Canne du Débutant",
		de: "Canne du Débutant",
		es: "Canne du Débutant"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_cane1.png"
		}
	]
};
var cane2 = {
	id: "cane2",
	name: {
		en: "Canne Intermédiaire",
		fr: "Canne Intermédiaire",
		de: "Canne Intermédiaire",
		es: "Canne Intermédiaire"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_cane2.png"
		}
	]
};
var cane3 = {
	id: "cane3",
	name: {
		en: "Canne Professionnelle",
		fr: "Canne Professionnelle",
		de: "Canne Professionnelle",
		es: "Canne Professionnelle"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_cane3.png"
		}
	]
};
var fish1 = {
	id: "fish1",
	name: {
		en: "Girelle des Nuages",
		fr: "Girelle des Nuages",
		de: "Girelle des Nuages",
		es: "Girelle des Nuages"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_fish1.png"
		}
	]
};
var fish2 = {
	id: "fish2",
	name: {
		en: "Barracuda Zébré",
		fr: "Barracuda Zébré",
		de: "Barracuda Zébré",
		es: "Barracuda Zébré"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_fish2.png"
		}
	]
};
var fish3 = {
	id: "fish3",
	name: {
		en: "Rascasse Géante Arc-en-Ciel",
		fr: "Rascasse Géante Arc-en-Ciel",
		de: "Rascasse Géante Arc-en-Ciel",
		es: "Rascasse Géante Arc-en-Ciel"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_fish3.png"
		}
	]
};
var alette = {
	id: "alette",
	name: {
		en: "Lettre Royale",
		fr: "Lettre Royale",
		de: "Lettre Royale",
		es: "Lettre Royale"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_aletter.png"
		}
	]
};
var food1 = {
	id: "food1",
	name: {
		en: "Fruit Appétissant",
		fr: "Fruit Appétissant",
		de: "Fruit Appétissant",
		es: "Fruit Appétissant"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_food1.png"
		}
	]
};
var food2 = {
	id: "food2",
	name: {
		en: "Gros Légume",
		fr: "Gros Légume",
		de: "Gros Légume",
		es: "Gros Légume"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_food2.png"
		}
	]
};
var food3 = {
	id: "food3",
	name: {
		en: "Viande Grillée",
		fr: "Viande Grillée",
		de: "Viande Grillée",
		es: "Viande Grillée"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_food3.png"
		}
	]
};
var monste = {
	id: "monste",
	name: {
		en: "Monstre Étrange",
		fr: "Monstre Étrange",
		de: "Monstre Étrange",
		es: "Monstre Étrange"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_monster.png"
		}
	]
};
var beche = {
	id: "beche",
	name: {
		en: "Bêche à Légumes",
		fr: "Bêche à Légumes",
		de: "Bêche à Légumes",
		es: "Bêche à Légumes"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_beche.png"
		}
	]
};
var amadou = {
	id: "amadou",
	name: {
		en: "Amadou Allume-feu",
		fr: "Amadou Allume-feu",
		de: "Amadou Allume-feu",
		es: "Amadou Allume-feu"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_amadou.png"
		}
	]
};
var coton = {
	id: "coton",
	name: {
		en: "Balle de Coton",
		fr: "Balle de Coton",
		de: "Balle de Coton",
		es: "Balle de Coton"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_coton.png"
		}
	]
};
var sail = {
	id: "sail",
	name: {
		en: "Voile Antiphon",
		fr: "Voile Antiphon",
		de: "Voile Antiphon",
		es: "Voile Antiphon"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_sail.png"
		}
	]
};
var oldham = {
	id: "oldham",
	name: {
		en: "Vieux Marteau Rouillé",
		fr: "Vieux Marteau Rouillé",
		de: "Vieux Marteau Rouillé",
		es: "Vieux Marteau Rouillé"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_oldham.png"
		}
	]
};
var hammer = {
	id: "hammer",
	name: {
		en: "Marteau Hypypyx",
		fr: "Marteau Hypypyx",
		de: "Marteau Hypypyx",
		es: "Marteau Hypypyx"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_hammer.png"
		}
	]
};
var flower = {
	id: "flower",
	name: {
		en: "Perce-sable",
		fr: "Perce-sable",
		de: "Perce-sable",
		es: "Perce-sable"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_flower.png"
		}
	]
};
var crane = {
	id: "crane",
	name: {
		en: "Crâne de Ptéros",
		fr: "Crâne de Ptéros",
		de: "Crâne de Ptéros",
		es: "Crâne de Ptéros"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_crane.png"
		}
	]
};
var scar = {
	id: "scar",
	name: {
		en: "Cicatrice Maloas",
		fr: "Cicatrice Maloas",
		de: "Cicatrice Maloas",
		es: "Cicatrice Maloas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_scar.png"
		}
	]
};
var bsexta = {
	id: "bsexta",
	name: {
		en: "Sextant Brisé",
		fr: "Sextant Brisé",
		de: "Sextant Brisé",
		es: "Sextant Brisé"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_bsextant.png"
		}
	]
};
var sextan = {
	id: "sextan",
	name: {
		en: "Sextant Réparé",
		fr: "Sextant Réparé",
		de: "Sextant Réparé",
		es: "Sextant Réparé"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_sextant.png"
		}
	]
};
var helm = {
	id: "helm",
	name: {
		en: "Gouvernail Maloas",
		fr: "Gouvernail Maloas",
		de: "Gouvernail Maloas",
		es: "Gouvernail Maloas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_helm.png"
		}
	]
};
var epi = {
	id: "epi",
	name: {
		en: "Épi de Blé",
		fr: "Épi de Blé",
		de: "Épi de Blé",
		es: "Épi de Blé"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_epi.png"
		}
	]
};
var carot = {
	id: "carot",
	name: {
		en: "Carottes de Drüne",
		fr: "Carottes de Drüne",
		de: "Carottes de Drüne",
		es: "Carottes de Drüne"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_carot.png"
		}
	]
};
var cabbag = {
	id: "cabbag",
	name: {
		en: "Choux de Kabal",
		fr: "Choux de Kabal",
		de: "Choux de Kabal",
		es: "Choux de Kabal"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_cabbage.png"
		}
	]
};
var poem = {
	id: "poem",
	name: {
		en: "Page de Poème",
		fr: "Page de Poème",
		de: "Page de Poème",
		es: "Page de Poème"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_poem.png"
		}
	]
};
var headac = {
	id: "headac",
	name: {
		en: "Mal à la Tête",
		fr: "Mal à la Tête",
		de: "Mal à la Tête",
		es: "Mal à la Tête"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_headache.png"
		}
	]
};
var stones = {
	id: "stones",
	name: {
		en: "Petits Cailloux",
		fr: "Petits Cailloux",
		de: "Petits Cailloux",
		es: "Petits Cailloux"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_stones.png"
		}
	]
};
var cocon = {
	id: "cocon",
	name: {
		en: "Cocon de Ver",
		fr: "Cocon de Ver",
		de: "Cocon de Ver",
		es: "Cocon de Ver"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_cocon.png"
		}
	]
};
var fil = {
	id: "fil",
	name: {
		en: "Fil d'Ariane",
		fr: "Fil d'Ariane",
		de: "Fil d'Ariane",
		es: "Fil d'Ariane"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_fil.png"
		}
	]
};
var coral = {
	id: "coral",
	name: {
		en: "Corail Arc-en-Ciel",
		fr: "Corail Arc-en-Ciel",
		de: "Corail Arc-en-Ciel",
		es: "Corail Arc-en-Ciel"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_coral.png"
		}
	]
};
var rlette = {
	id: "rlette",
	name: {
		en: "Courrier Égaré",
		fr: "Courrier Égaré",
		de: "Courrier Égaré",
		es: "Courrier Égaré"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_rletter.png"
		}
	]
};
var stamp = {
	id: "stamp",
	name: {
		en: "Timbres Royaux",
		fr: "Timbres Royaux",
		de: "Timbres Royaux",
		es: "Timbres Royaux"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_stamp.png"
		}
	]
};
var oshiel = {
	id: "oshiel",
	name: {
		en: "Bouclier Rouillé",
		fr: "Bouclier Rouillé",
		de: "Bouclier Rouillé",
		es: "Bouclier Rouillé"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_oshield.png"
		}
	]
};
var helmet = {
	id: "helmet",
	name: {
		en: "Casque d'Orichalque",
		fr: "Casque d'Orichalque",
		de: "Casque d'Orichalque",
		es: "Casque d'Orichalque"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_helmet.png"
		}
	]
};
var shield = {
	id: "shield",
	name: {
		en: "Bouclier d'Orichalque",
		fr: "Bouclier d'Orichalque",
		de: "Bouclier d'Orichalque",
		es: "Bouclier d'Orichalque"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_shield.png"
		}
	]
};
var sword = {
	id: "sword",
	name: {
		en: "Épée d'Orichalque",
		fr: "Épée d'Orichalque",
		de: "Épée d'Orichalque",
		es: "Épée d'Orichalque"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_sword.png"
		}
	]
};
var armor = {
	id: "armor",
	name: {
		en: "Armure d'Orichalque",
		fr: "Armure d'Orichalque",
		de: "Armure d'Orichalque",
		es: "Armure d'Orichalque"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_armor.png"
		}
	]
};
var mecha = {
	id: "mecha",
	name: {
		en: "Cristaux de Mecha",
		fr: "Cristaux de Mecha",
		de: "Cristaux de Mecha",
		es: "Cristaux de Mecha"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_mecha.png"
		}
	]
};
var hmap = {
	id: "hmap",
	name: {
		en: "Carte des Mines",
		fr: "Carte des Mines",
		de: "Carte des Mines",
		es: "Carte des Mines"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_hmap.png"
		}
	]
};
var paxos = {
	id: "paxos",
	name: {
		en: "Journal du bord du Cpt. Paxos",
		fr: "Journal du bord du Cpt. Paxos",
		de: "Journal du bord du Cpt. Paxos",
		es: "Journal du bord du Cpt. Paxos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_paxos.png"
		}
	]
};
var pmap = {
	id: "pmap",
	name: {
		en: "Carte de Paxos",
		fr: "Carte de Paxos",
		de: "Carte de Paxos",
		es: "Carte de Paxos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_pmap.png"
		}
	]
};
var memory = {
	id: "memory",
	name: {
		en: "Mémoires de Paxos",
		fr: "Mémoires de Paxos",
		de: "Mémoires de Paxos",
		es: "Mémoires de Paxos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_memory.png"
		}
	]
};
var cloche = {
	id: "cloche",
	name: {
		en: "Clochette Translucide",
		fr: "Clochette Translucide",
		de: "Clochette Translucide",
		es: "Clochette Translucide"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_clochet.png"
		}
	]
};
var seal = {
	id: "seal",
	name: {
		en: "Sceau de la Maison Royale",
		fr: "Sceau de la Maison Royale",
		de: "Sceau de la Maison Royale",
		es: "Sceau de la Maison Royale"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_seal.png"
		}
	]
};
var scisso = {
	id: "scisso",
	name: {
		en: "Ciseaux Fins",
		fr: "Ciseaux Fins",
		de: "Ciseaux Fins",
		es: "Ciseaux Fins"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_scissors.png"
		}
	]
};
var plate = {
	id: "plate",
	name: {
		en: "Planche",
		fr: "Planche",
		de: "Planche",
		es: "Planche"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_plate.png"
		}
	]
};
var starfi = {
	id: "starfi",
	name: {
		en: "Etoile de Mer à Sept Branches",
		fr: "Etoile de Mer à Sept Branches",
		de: "Etoile de Mer à Sept Branches",
		es: "Etoile de Mer à Sept Branches"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_starfish.png"
		}
	]
};
var bmecha = {
	id: "bmecha",
	name: {
		en: "Cristaux Altérés",
		fr: "Cristaux Altérés",
		de: "Cristaux Altérés",
		es: "Cristaux Altérés"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_bmecha.png"
		}
	]
};
var nectar = {
	id: "nectar",
	name: {
		en: "Nectar",
		fr: "Nectar",
		de: "Nectar",
		es: "Nectar"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_nectar.png"
		}
	]
};
var harmo = {
	id: "harmo",
	name: {
		en: "Collier d'Harmonie",
		fr: "Collier d'Harmonie",
		de: "Collier d'Harmonie",
		es: "Collier d'Harmonie"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "icon_harmo.png"
		}
	]
};
var heratu = {
	id: "heratu",
	name: {
		en: "Hératus",
		fr: "Hératus",
		de: "Hératus",
		es: "Hératus"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/heratus.png"
		}
	]
};
var celeid = {
	id: "celeid",
	name: {
		en: "Céleïde",
		fr: "Céleïde",
		de: "Céleïde",
		es: "Céleïde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/celeide.png"
		}
	]
};
var gloria = {
	id: "gloria",
	name: {
		en: "Gloria",
		fr: "Gloria",
		de: "Gloria",
		es: "Gloria"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/gloria.png"
		}
	]
};
var dolski = {
	id: "dolski",
	name: {
		en: "Dolskin",
		fr: "Dolskin",
		de: "Dolskin",
		es: "Dolskin"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/dolskin.png"
		}
	]
};
var tiber = {
	id: "tiber",
	name: {
		en: "Tiber",
		fr: "Tiber",
		de: "Tiber",
		es: "Tiber"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/tiber.png"
		}
	]
};
var epivon = {
	id: "epivon",
	name: {
		en: "Epivone",
		fr: "Epivone",
		de: "Epivone",
		es: "Epivone"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/epivone.png"
		}
	]
};
var horas = {
	id: "horas",
	name: {
		en: "Horas",
		fr: "Horas",
		de: "Horas",
		es: "Horas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/horas.png"
		}
	]
};
var stiren = {
	id: "stiren",
	name: {
		en: "Stirenx",
		fr: "Stirenx",
		de: "Stirenx",
		es: "Stirenx"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/stirenx.png"
		}
	]
};
var torkis = {
	id: "torkis",
	name: {
		en: "Torkish",
		fr: "Torkish",
		de: "Torkish",
		es: "Torkish"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/torkish.png"
		}
	]
};
var antone = {
	id: "antone",
	name: {
		en: "Antones",
		fr: "Antones",
		de: "Antones",
		es: "Antones"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/antones.png"
		}
	]
};
var egoine = {
	id: "egoine",
	name: {
		en: "Egoïne",
		fr: "Egoïne",
		de: "Egoïne",
		es: "Egoïne"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/egoine.png"
		}
	]
};
var maugri = {
	id: "maugri",
	name: {
		en: "Maugrine",
		fr: "Maugrine",
		de: "Maugrine",
		es: "Maugrine"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/maugrine.png"
		}
	]
};
var espiro = {
	id: "espiro",
	name: {
		en: "Espiroth",
		fr: "Espiroth",
		de: "Espiroth",
		es: "Espiroth"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/espiroth.png"
		}
	]
};
var tasuly = {
	id: "tasuly",
	name: {
		en: "Tasulys",
		fr: "Tasulys",
		de: "Tasulys",
		es: "Tasulys"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/tasulys.png"
		}
	]
};
var keperi = {
	id: "keperi",
	name: {
		en: "Keperi",
		fr: "Keperi",
		de: "Keperi",
		es: "Keperi"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/keperi.png"
		}
	]
};
var tatsi = {
	id: "tatsi",
	name: {
		en: "Tatsi",
		fr: "Tatsi",
		de: "Tatsi",
		es: "Tatsi"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "heroes/tatsi.png"
		}
	]
};
var balla = {
	id: "balla",
	name: {
		en: "Epée",
		fr: "Epée",
		de: "Epée",
		es: "Epée"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_0.png"
		}
	]
};
var ballb = {
	id: "ballb",
	name: {
		en: "Masse",
		fr: "Masse",
		de: "Masse",
		es: "Masse"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_1.png"
		}
	]
};
var ballc = {
	id: "ballc",
	name: {
		en: "Hache",
		fr: "Hache",
		de: "Hache",
		es: "Hache"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_2.png"
		}
	]
};
var balld = {
	id: "balld",
	name: {
		en: "Epée rouge",
		fr: "Epée rouge",
		de: "Epée rouge",
		es: "Epée rouge"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_3.png"
		}
	]
};
var balle = {
	id: "balle",
	name: {
		en: "Arc",
		fr: "Arc",
		de: "Arc",
		es: "Arc"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_4.png"
		}
	]
};
var ballg = {
	id: "ballg",
	name: {
		en: "Bouclier",
		fr: "Bouclier",
		de: "Bouclier",
		es: "Bouclier"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_6.png"
		}
	]
};
var ballh = {
	id: "ballh",
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Potion",
		es: "Potion"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_7.png"
		}
	]
};
var balli = {
	id: "balli",
	name: {
		en: "Navet",
		fr: "Navet",
		de: "Navet",
		es: "Navet"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_8.png"
		}
	]
};
var ballj = {
	id: "ballj",
	name: {
		en: "Patate",
		fr: "Patate",
		de: "Patate",
		es: "Patate"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_9.png"
		}
	]
};
var ballk = {
	id: "ballk",
	name: {
		en: "Carotte",
		fr: "Carotte",
		de: "Carotte",
		es: "Carotte"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_10.png"
		}
	]
};
var balll = {
	id: "balll",
	name: {
		en: "Flamme",
		fr: "Flamme",
		de: "Flamme",
		es: "Flamme"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_11.png"
		}
	]
};
var ballm = {
	id: "ballm",
	name: {
		en: "Glace",
		fr: "Glace",
		de: "Glace",
		es: "Glace"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_12.png"
		}
	]
};
var balln = {
	id: "balln",
	name: {
		en: "Poison",
		fr: "Poison",
		de: "Poison",
		es: "Poison"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_13.png"
		}
	]
};
var ballo = {
	id: "ballo",
	name: {
		en: "Cristal de Mecha",
		fr: "Cristal de Mecha",
		de: "Cristal de Mecha",
		es: "Cristal de Mecha"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_14.png"
		}
	]
};
var ballp = {
	id: "ballp",
	name: {
		en: "Chaines",
		fr: "Chaines",
		de: "Chaines",
		es: "Chaines"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_15.png"
		}
	]
};
var ballq = {
	id: "ballq",
	name: {
		en: "Pierre",
		fr: "Pierre",
		de: "Pierre",
		es: "Pierre"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_16.png"
		}
	]
};
var ballv = {
	id: "ballv",
	name: {
		en: "Souffle de glace",
		fr: "Souffle de glace",
		de: "Souffle de glace",
		es: "Souffle de glace"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_21.png"
		}
	]
};
var ballw = {
	id: "ballw",
	name: {
		en: "Rage",
		fr: "Rage",
		de: "Rage",
		es: "Rage"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_22.png"
		}
	]
};
var ballx = {
	id: "ballx",
	name: {
		en: "Solo de l'enfer",
		fr: "Solo de l'enfer",
		de: "Solo de l'enfer",
		es: "Solo de l'enfer"
	},
	rare: 0,
	unlocks: [
		{
			count: 1000,
			points: 1,
			icon: "balls/ball_23.png"
		}
	]
};
var bally = {
	id: "bally",
	name: {
		en: "Fleur",
		fr: "Fleur",
		de: "Fleur",
		es: "Fleur"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_24.png"
		}
	]
};
var ballz = {
	id: "ballz",
	name: {
		en: "Coeur de la forêt",
		fr: "Coeur de la forêt",
		de: "Coeur de la forêt",
		es: "Coeur de la forêt"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_25.png"
		}
	]
};
var ballaa = {
	id: "ballaa",
	name: {
		en: "Méditation",
		fr: "Méditation",
		de: "Méditation",
		es: "Méditation"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_26.png"
		}
	]
};
var ballab = {
	id: "ballab",
	name: {
		en: "Dart empoisonné",
		fr: "Dart empoisonné",
		de: "Dart empoisonné",
		es: "Dart empoisonné"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 1,
			icon: "balls/ball_27.png"
		}
	]
};
var ballac = {
	id: "ballac",
	name: {
		en: "Sedatifs",
		fr: "Sedatifs",
		de: "Sedatifs",
		es: "Sedatifs"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "balls/ball_28.png"
		}
	]
};
var ballad = {
	id: "ballad",
	name: {
		en: "Courage",
		fr: "Courage",
		de: "Courage",
		es: "Courage"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 1,
			icon: "balls/ball_29.png"
		}
	]
};
var ballae = {
	id: "ballae",
	name: {
		en: "Analyse",
		fr: "Analyse",
		de: "Analyse",
		es: "Analyse"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_30.png"
		}
	]
};
var ballag = {
	id: "ballag",
	name: {
		en: "Folie",
		fr: "Folie",
		de: "Folie",
		es: "Folie"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_32.png"
		}
	]
};
var ballah = {
	id: "ballah",
	name: {
		en: "Mélange-tout",
		fr: "Mélange-tout",
		de: "Mélange-tout",
		es: "Mélange-tout"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 1,
			icon: "balls/ball_33.png"
		}
	]
};
var ballai = {
	id: "ballai",
	name: {
		en: "Pilule",
		fr: "Pilule",
		de: "Pilule",
		es: "Pilule"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 1,
			icon: "balls/ball_34.png"
		}
	]
};
var ballaj = {
	id: "ballaj",
	name: {
		en: "Kunai",
		fr: "Kunai",
		de: "Kunai",
		es: "Kunai"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_35.png"
		}
	]
};
var ballak = {
	id: "ballak",
	name: {
		en: "Botte secrète",
		fr: "Botte secrète",
		de: "Botte secrète",
		es: "Botte secrète"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 1,
			icon: "balls/ball_36.png"
		}
	]
};
var ballal = {
	id: "ballal",
	name: {
		en: "Piège explosif",
		fr: "Piège explosif",
		de: "Piège explosif",
		es: "Piège explosif"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 1,
			icon: "balls/ball_37.png"
		}
	]
};
var ballam = {
	id: "ballam",
	name: {
		en: "Vol à la tire",
		fr: "Vol à la tire",
		de: "Vol à la tire",
		es: "Vol à la tire"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_38.png"
		}
	]
};
var ballan = {
	id: "ballan",
	name: {
		en: "Bombe fumigène",
		fr: "Bombe fumigène",
		de: "Bombe fumigène",
		es: "Bombe fumigène"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 1,
			icon: "balls/ball_39.png"
		}
	]
};
var ballao = {
	id: "ballao",
	name: {
		en: "Jarre",
		fr: "Jarre",
		de: "Jarre",
		es: "Jarre"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_40.png"
		}
	]
};
var ballaq = {
	id: "ballaq",
	name: {
		en: "Jarre de poison",
		fr: "Jarre de poison",
		de: "Jarre de poison",
		es: "Jarre de poison"
	},
	rare: 0,
	unlocks: [
		{
			count: 200,
			points: 1,
			icon: "balls/ball_42.png"
		}
	]
};
var ballar = {
	id: "ballar",
	name: {
		en: "Frénésie",
		fr: "Frénésie",
		de: "Frénésie",
		es: "Frénésie"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_43.png"
		}
	]
};
var ballas = {
	id: "ballas",
	name: {
		en: "Maîtrise de Soi",
		fr: "Maîtrise de Soi",
		de: "Maîtrise de Soi",
		es: "Maîtrise de Soi"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_44.png"
		}
	]
};
var ballat = {
	id: "ballat",
	name: {
		en: "Brise",
		fr: "Brise",
		de: "Brise",
		es: "Brise"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_45.png"
		}
	]
};
var ballau = {
	id: "ballau",
	name: {
		en: "Harmattan",
		fr: "Harmattan",
		de: "Harmattan",
		es: "Harmattan"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "balls/ball_46.png"
		}
	]
};
var ballav = {
	id: "ballav",
	name: {
		en: "Bourgeon",
		fr: "Bourgeon",
		de: "Bourgeon",
		es: "Bourgeon"
	},
	rare: 0,
	unlocks: [
		{
			count: 200,
			points: 1,
			icon: "balls/ball_47.png"
		}
	]
};
var ballax = {
	id: "ballax",
	name: {
		en: "Bombe de Mecha",
		fr: "Bombe de Mecha",
		de: "Bombe de Mecha",
		es: "Bombe de Mecha"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "balls/ball_49.png"
		}
	]
};
var ballaz = {
	id: "ballaz",
	name: {
		en: "Goutte magique",
		fr: "Goutte magique",
		de: "Goutte magique",
		es: "Goutte magique"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "balls/ball_51.png"
		}
	]
};
var ballba = {
	id: "ballba",
	name: {
		en: "Trident",
		fr: "Trident",
		de: "Trident",
		es: "Trident"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 1,
			icon: "balls/ball_52.png"
		}
	]
};
var ballbb = {
	id: "ballbb",
	name: {
		en: "Colère",
		fr: "Colère",
		de: "Colère",
		es: "Colère"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "balls/ball_53.png"
		}
	]
};
var ballbc = {
	id: "ballbc",
	name: {
		en: "Marteau de guerre",
		fr: "Marteau de guerre",
		de: "Marteau de guerre",
		es: "Marteau de guerre"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "balls/ball_54.png"
		}
	]
};
var ballbd = {
	id: "ballbd",
	name: {
		en: "Couronne",
		fr: "Couronne",
		de: "Couronne",
		es: "Couronne"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "balls/ball_55.png"
		}
	]
};
var ballbe = {
	id: "ballbe",
	name: {
		en: "Echarde de Mecha",
		fr: "Echarde de Mecha",
		de: "Echarde de Mecha",
		es: "Echarde de Mecha"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_56.png"
		}
	]
};
var ballbf = {
	id: "ballbf",
	name: {
		en: "Espoir",
		fr: "Espoir",
		de: "Espoir",
		es: "Espoir"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_57.png"
		}
	]
};
var ballbk = {
	id: "ballbk",
	name: {
		en: "Mirroir",
		fr: "Mirroir",
		de: "Mirroir",
		es: "Mirroir"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "balls/ball_62.png"
		}
	]
};
var ballbl = {
	id: "ballbl",
	name: {
		en: "Oeil du cyclope",
		fr: "Oeil du cyclope",
		de: "Oeil du cyclope",
		es: "Oeil du cyclope"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 1,
			icon: "balls/ball_63.png"
		}
	]
};
var bfroze = {
	id: "bfroze",
	name: {
		en: "Rune Gelée",
		fr: "Rune Gelée",
		de: "Rune Gelée",
		es: "Rune Gelée"
	},
	rare: 0,
	unlocks: [
		{
			count: 10000,
			points: 1,
			icon: "balls/ball_frozen.png"
		}
	]
};
var odysseyJson = {
	compas: compas,
	triton: triton,
	ring: ring$1,
	axe: axe,
	axefor: axefor,
	lotos: lotos,
	moly: moly,
	kmedal: kmedal,
	blaze: blaze,
	crosto: crosto,
	savmap: savmap,
	mirror: mirror,
	hypmap: hypmap,
	galupi: galupi,
	nstar: nstar,
	rose: rose,
	ribon: ribon,
	drod: drod,
	zlance: zlance,
	zpenda: zpenda,
	pempty: pempty,
	mcard: mcard,
	scard: scard,
	cane1: cane1,
	cane2: cane2,
	cane3: cane3,
	fish1: fish1,
	fish2: fish2,
	fish3: fish3,
	alette: alette,
	food1: food1,
	food2: food2,
	food3: food3,
	monste: monste,
	beche: beche,
	amadou: amadou,
	coton: coton,
	sail: sail,
	oldham: oldham,
	hammer: hammer,
	flower: flower,
	crane: crane,
	scar: scar,
	bsexta: bsexta,
	sextan: sextan,
	helm: helm,
	epi: epi,
	carot: carot,
	cabbag: cabbag,
	poem: poem,
	headac: headac,
	stones: stones,
	cocon: cocon,
	fil: fil,
	coral: coral,
	rlette: rlette,
	stamp: stamp,
	oshiel: oshiel,
	helmet: helmet,
	shield: shield,
	sword: sword,
	armor: armor,
	mecha: mecha,
	hmap: hmap,
	paxos: paxos,
	pmap: pmap,
	memory: memory,
	cloche: cloche,
	seal: seal,
	scisso: scisso,
	plate: plate,
	starfi: starfi,
	bmecha: bmecha,
	nectar: nectar,
	harmo: harmo,
	heratu: heratu,
	celeid: celeid,
	gloria: gloria,
	dolski: dolski,
	tiber: tiber,
	epivon: epivon,
	horas: horas,
	stiren: stiren,
	torkis: torkis,
	antone: antone,
	egoine: egoine,
	maugri: maugri,
	espiro: espiro,
	tasuly: tasuly,
	keperi: keperi,
	tatsi: tatsi,
	balla: balla,
	ballb: ballb,
	ballc: ballc,
	balld: balld,
	balle: balle,
	ballg: ballg,
	ballh: ballh,
	balli: balli,
	ballj: ballj,
	ballk: ballk,
	balll: balll,
	ballm: ballm,
	balln: balln,
	ballo: ballo,
	ballp: ballp,
	ballq: ballq,
	ballv: ballv,
	ballw: ballw,
	ballx: ballx,
	bally: bally,
	ballz: ballz,
	ballaa: ballaa,
	ballab: ballab,
	ballac: ballac,
	ballad: ballad,
	ballae: ballae,
	ballag: ballag,
	ballah: ballah,
	ballai: ballai,
	ballaj: ballaj,
	ballak: ballak,
	ballal: ballal,
	ballam: ballam,
	ballan: ballan,
	ballao: ballao,
	ballaq: ballaq,
	ballar: ballar,
	ballas: ballas,
	ballat: ballat,
	ballau: ballau,
	ballav: ballav,
	ballax: ballax,
	ballaz: ballaz,
	ballba: ballba,
	ballbb: ballbb,
	ballbc: ballbc,
	ballbd: ballbd,
	ballbe: ballbe,
	ballbf: ballbf,
	ballbk: ballbk,
	ballbl: ballbl,
	bfroze: bfroze
};

var questa = {
	id: "questa",
	name: {
		en: "Target Scores",
		fr: "Score à atteindre",
		de: "Zu erreichende Punktezahl",
		es: "Score a alcanzar"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 20000,
			points: 5,
			prefix: true,
			title: {
				en: "Serpentin",
				fr: "Serpentin",
				de: "Serpentine",
				es: "Serpentín"
			},
			description: {
				en: "Reach 20000 points in the arena",
				fr: "Dépasser 20000 points dans l'arène",
				de: "Erspiele ueber 20.000 Punkte in der Arena",
				es: "Logra mas de 20000 puntos en la arena"
			}
		},
		{
			count: 100000,
			points: 10,
			prefix: true,
			title: {
				en: "HippoGlouton",
				fr: "HippoGlouton",
				de: "HippoGlouton",
				es: "HipoGlotón"
			},
			description: {
				en: "Reach 100000 points in the arena",
				fr: "Dépasser 100000 points dans l'arène",
				de: "Erspiele ueber 100.000 Punkte in der Arena",
				es: "Logra mas de 100000 puntos en la arena"
			}
		}
	]
};
var questb = {
	id: "questb",
	name: {
		en: "Fruits To Discover",
		fr: "Fruits à découvrir ",
		de: "Zu entdeckende Früchte",
		es: "Frutas a descubrir"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 100,
			points: 10,
			prefix: true,
			title: {
				en: "Apprentice Fructologist",
				fr: "Apprenti fructologue",
				de: "Früchte-Azubi",
				es: "Aprendíz Frutólogo"
			},
			description: {
				en: "Discover 100 fruits in the encyclopefruit",
				fr: "Découvrir 100 fruits dans l'encyclopéfruit",
				de: "Entdecke 100 Fruechte vom Fruchtlexikon",
				es: "Descubre 100 frutas en la Enciclofruta"
			}
		}
	]
};
var questc = {
	id: "questc",
	name: {
		en: "Exact Score Obtained",
		fr: "Score exact réalisé",
		de: "Exakte Punktzahl erreicht",
		es: "Score exacto realizado"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 30000,
			points: 5,
			prefix: true,
			title: {
				en: "Accountant",
				fr: "Comptable",
				de: "Buchhalter",
				es: "Contador"
			},
			description: {
				en: "Score exactly 30000 points",
				fr: "Obtenir un score exact de 30000 points",
				de: "Erreiche genau 30.000 Punkte",
				es: "Haz un score exacto de 30000 puntos"
			}
		}
	]
};
var questd = {
	id: "questd",
	name: {
		en: "Target Score",
		fr: "Score à atteindre",
		de: "Zu erreichender Score",
		es: "Score a alcanzar"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 300000,
			points: 10,
			suffix: true,
			title: {
				en: "constrictor",
				fr: "constrictor",
				de: "Riesenschlange",
				es: "Constrictor"
			},
			description: {
				en: "Get more than 300000 points in the arena",
				fr: "Dépasser 300000 points dans l'arène",
				de: "Erspiele ueber 300.000 Punkte in der Arena",
				es: "Logra mas 300000 puntos en la arena"
			}
		}
	]
};
var queste = {
	id: "queste",
	name: {
		en: "More Fruits to Discover",
		fr: "Fruits à découvrir ",
		de: "Zu entdeckende Früchte",
		es: "Frutas a descubrir"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 300,
			points: 10,
			prefix: true,
			title: {
				en: "Fruitfiend",
				fr: "Frutivorace",
				de: "Früchteverschlinger",
				es: "Frutivoraz"
			},
			description: {
				en: "Discover 300 fruits in the Encyclopefruit",
				fr: "Découvrir 300 fruits dans l'encyclopéfruit",
				de: "Entdecke 300 Fruechte vom Fruchtlexikon",
				es: "Descubre 300 frutas en la Enciclofruta"
			}
		}
	]
};
var questf = {
	id: "questf",
	name: {
		en: "Pokarans Swallowed",
		fr: "Pokarans avalés",
		de: "Verschlungene Pokarans",
		es: "Pocaranes tragados"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1000,
			points: 10,
			suffix: true,
			title: {
				en: "Craving",
				fr: "obnubilé",
				de: "für alle Zeiten",
				es: "Obstinado"
			},
			description: {
				en: "Swallow 1000 Pokarans",
				fr: "Avaler 1000 Pokarans",
				de: "Friss 1.000 Pokarans",
				es: "Traga 1000 pocaranes"
			}
		}
	]
};
var lot = {
	id: "lot",
	name: {
		en: "Lottery Winner",
		fr: "Gagnant de la loterie",
		de: "Lotteriegewinner",
		es: "Ganador de la lotería"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 2,
			prefix: true,
			title: {
				en: "Lucky Sod",
				fr: "Gros chanceux",
				de: "Großer Glückspilz",
				es: "Gran Suertudo"
			}
		},
		{
			count: 3,
			points: 1,
			suffix: true,
			title: {
				en: "Outrageous Fortune",
				fr: "bordé de nouilles",
				de: "voller Glück",
				es: "Afortunado"
			}
		}
	]
};
var collec = {
	id: "collec",
	name: {
		en: "Holds all the cards",
		fr: "Possède toutes les cartes",
		de: "Besitzer aller Karten",
		es: "Poseedor de todas las cartas"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			prefix: true,
			title: {
				en: "Cardsharp",
				fr: "Cartophile",
				de: "Kartenliebhaber",
				es: "Cartófilo"
			}
		}
	]
};
var wdraft = {
	id: "wdraft",
	name: {
		en: "Tournament Winner",
		fr: "Gagnant d'un tournoi",
		de: "Turniergewinner",
		es: "Ganador de torneo"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 2,
			suffix: true,
			title: {
				en: "The Brain",
				fr: "fortiche",
				de: "stolz wie Oskar",
				es: "Experto"
			}
		},
		{
			count: 5,
			points: 1,
			suffix: true,
			title: {
				en: "Gifted",
				fr: "trop balèze",
				de: "allein auf weiter Flur",
				es: "Invencible"
			}
		}
	]
};
var a = {
	id: "a",
	name: {
		en: "Shampapple",
		fr: "pomme shampoing",
		de: "Shampooapfel",
		es: "Manzana shampoo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_001.gif"
		}
	]
};
var b = {
	id: "b",
	name: {
		en: "Chokeberry",
		fr: "groudinasse de Jauret",
		de: "Flaschenbeere",
		es: "Grudinasia de Juárez"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_002.gif"
		}
	]
};
var c = {
	id: "c",
	name: {
		en: "Pear",
		fr: "Perpendiculine survette",
		de: "Säuerliches Amulett",
		es: "Perpendiculina jugosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_003.gif"
		}
	]
};
var d = {
	id: "d",
	name: {
		en: "Quindong",
		fr: "Gromarin silmonet",
		de: "Rosemarine",
		es: "Gromarín silmoneto"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_004.gif"
		}
	]
};
var e = {
	id: "e",
	name: {
		en: "Aromapple",
		fr: "prunillo doré",
		de: "Goldzwetschki",
		es: "Prunillo dorado"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_005.gif"
		}
	]
};
var f = {
	id: "f",
	name: {
		en: "Persilemon",
		fr: "Bolange",
		de: "Lila Drops",
		es: "Bolanio"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_006.gif"
		}
	]
};
var g = {
	id: "g",
	name: {
		en: "Dazzleberry",
		fr: "frasile",
		de: "Erdbärchen",
		es: "Frasila"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_007.gif"
		}
	]
};
var h = {
	id: "h",
	name: {
		en: "Sunfruit",
		fr: "Garnade",
		de: "Garnate",
		es: "Ganardia"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_008.gif"
		}
	]
};
var i = {
	id: "i",
	name: {
		en: "Apricot",
		fr: "baltenaine",
		de: "Grummgurke",
		es: "Baltenana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_009.gif"
		}
	]
};
var j = {
	id: "j",
	name: {
		en: "Cherry",
		fr: "goussiniere blanche d'erythree",
		de: "Weiße erithreische Schote",
		es: "Gusinaria blanca de Eritea"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_010.gif"
		}
	]
};
var k = {
	id: "k",
	name: {
		en: "Chokecherry",
		fr: "casperole",
		de: "Karpfel",
		es: "Casperola"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_011.gif"
		}
	]
};
var l = {
	id: "l",
	name: {
		en: "Grapple",
		fr: "boursine autrichienne",
		de: "Österreichische Herzfrucht",
		es: "Bursina austriaca"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_012.gif"
		}
	]
};
var m = {
	id: "m",
	name: {
		en: "Peach",
		fr: "Kassenangue",
		de: "Flamango",
		es: "Kasenanga"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_013.gif"
		}
	]
};
var n = {
	id: "n",
	name: {
		en: "Plumplumb",
		fr: "Berries de celine",
		de: "Celine-Beeren",
		es: "Cerecillas de Celina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_014.gif"
		}
	]
};
var o = {
	id: "o",
	name: {
		en: "Boquila",
		fr: "abido",
		de: "Maracananas",
		es: "Abido"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_015.gif"
		}
	]
};
var p = {
	id: "p",
	name: {
		en: "Goumi",
		fr: "chateignoux curieux",
		de: "Neugierige Astanie",
		es: "Castañuela curiosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_016.gif"
		}
	]
};
var q = {
	id: "q",
	name: {
		en: "Keule",
		fr: "Berries satyres",
		de: "Waldgeistbeeren",
		es: "Cerecillas satiras"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_017.gif"
		}
	]
};
var r = {
	id: "r",
	name: {
		en: "Zidanut",
		fr: "Poustillou",
		de: "Kaschote",
		es: "Ponahoria"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_018.gif"
		}
	]
};
var s = {
	id: "s",
	name: {
		en: "Maquiqala",
		fr: "porêche ventura",
		de: "Bitschi",
		es: "Perilla ventura"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_019.gif"
		}
	]
};
var t = {
	id: "t",
	name: {
		en: "Pawpaw",
		fr: "noix de zidoune",
		de: "Unreifel",
		es: "Nuez de Ziduna"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_020.gif"
		}
	]
};
var u = {
	id: "u",
	name: {
		en: "Elasticocoa",
		fr: "kokalank",
		de: "Faschingsbeere",
		es: "Kokalank"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_021.gif"
		}
	]
};
var v = {
	id: "v",
	name: {
		en: "Pinkpear",
		fr: "chaustigne",
		de: "Pfefferblüte",
		es: "Chistania"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_022.gif"
		}
	]
};
var w = {
	id: "w",
	name: {
		en: "Almondice",
		fr: "pigneule cretoise",
		de: "Spitze Nuss",
		es: "Pinola creticia"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_023.gif"
		}
	]
};
var x = {
	id: "x",
	name: {
		en: "Loganberry",
		fr: "poire",
		de: "Birne",
		es: "Pera"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_024.gif"
		}
	]
};
var y = {
	id: "y",
	name: {
		en: "Raspberry",
		fr: "noix",
		de: "Nuss",
		es: "Nuez"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_025.gif"
		}
	]
};
var z = {
	id: "z",
	name: {
		en: "Salmonberry",
		fr: "pilmaude",
		de: "Grüner Birnling",
		es: "Pilmuesa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_026.gif"
		}
	]
};
var aa = {
	id: "aa",
	name: {
		en: "Thimbleberry",
		fr: "tramontine",
		de: "Windbeere",
		es: "Trimontina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_027.gif"
		}
	]
};
var ab = {
	id: "ab",
	name: {
		en: "Snazzyberry",
		fr: "tasteraine siffulée",
		de: "Schleiffrucht",
		es: "Tastarina sifúnea"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_028.gif"
		}
	]
};
var ac = {
	id: "ac",
	name: {
		en: "Blood Prune",
		fr: "sourire de lepreux",
		de: "Lepralächeln",
		es: "Sonrisa de leproso"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_029.gif"
		}
	]
};
var ad = {
	id: "ad",
	name: {
		en: "Bileberry",
		fr: "frubillon",
		de: "Fruchtstrudel",
		es: "Frubillón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_030.gif"
		}
	]
};
var ae = {
	id: "ae",
	name: {
		en: "Blueberry",
		fr: "prunelle de sangre",
		de: "Blutzwetschki",
		es: "Higo de sangría"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_031.gif"
		}
	]
};
var af = {
	id: "af",
	name: {
		en: "Crowberry",
		fr: "fastecosse",
		de: "Luftballonfrucht",
		es: "Fastecosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_032.gif"
		}
	]
};
var ag = {
	id: "ag",
	name: {
		en: "Puertorange",
		fr: "doucejarette",
		de: "Orangeose",
		es: "Dulcerillo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_033.gif"
		}
	]
};
var ah = {
	id: "ah",
	name: {
		en: "Wangleberry",
		fr: "dorepion",
		de: "Grucuja",
		es: "Dorepión"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_034.gif"
		}
	]
};
var ai = {
	id: "ai",
	name: {
		en: "Huckleberry",
		fr: "orange",
		de: "Orange",
		es: "Naranja"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_035.gif"
		}
	]
};
var aj = {
	id: "aj",
	name: {
		en: "Lingonberry",
		fr: "Racteronce",
		de: "Bromtoffel",
		es: "Racteroncio"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_036.gif"
		}
	]
};
var ak = {
	id: "ak",
	name: {
		en: "Strawberry",
		fr: "mangrole",
		de: "Mangaya",
		es: "Mangerola"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_037.gif"
		}
	]
};
var al = {
	id: "al",
	name: {
		en: "Barberry",
		fr: "petite disette",
		de: "Hungerfrucht",
		es: "Hambrunilla"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_038.gif"
		}
	]
};
var am = {
	id: "am",
	name: {
		en: "Currant",
		fr: "cissenerve",
		de: "Tomapfel",
		es: "Reganillo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_039.gif"
		}
	]
};
var an = {
	id: "an",
	name: {
		en: "Elderberry",
		fr: "maugruche",
		de: "Lianenpfirsich",
		es: "Mogroche"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_040.gif"
		}
	]
};
var ao = {
	id: "ao",
	name: {
		en: "Gooseberry",
		fr: "gland",
		de: "Eichel",
		es: "Bellota"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_041.gif"
		}
	]
};
var ap = {
	id: "ap",
	name: {
		en: "Hackberry",
		fr: "bolange geruvienne",
		de: "Gefleckter Drops",
		es: "Bolanio geruviano"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_042.gif"
		}
	]
};
var aq = {
	id: "aq",
	name: {
		en: "Honeysuckle",
		fr: "olive",
		de: "Olive",
		es: "Oliva"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_043.gif"
		}
	]
};
var ar = {
	id: "ar",
	name: {
		en: "Mildberry",
		fr: "courgestine",
		de: "Paradiesgurke",
		es: "Calabestina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_044.gif"
		}
	]
};
var as = {
	id: "as",
	name: {
		en: "Mayapple",
		fr: "prunemate d'Abidjan",
		de: "Pflauge",
		es: "Ciruela de Abidján"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_045.gif"
		}
	]
};
var at = {
	id: "at",
	name: {
		en: "Nannyberry",
		fr: "champoucte cruciere",
		de: "Bröselnuss",
		es: "Champucia crucina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_046.gif"
		}
	]
};
var au = {
	id: "au",
	name: {
		en: "Ugliberry",
		fr: "mazoulette",
		de: "Baumtraube",
		es: "Mazuleta"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_047.gif"
		}
	]
};
var av = {
	id: "av",
	name: {
		en: "Wolfberry",
		fr: "pokaran",
		de: "Pokhaki",
		es: "Pocarán"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_048.gif"
		}
	]
};
var aw = {
	id: "aw",
	name: {
		en: "Bearpear",
		fr: "petite-rave",
		de: "Rosrübe",
		es: "Ravinia"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_049.gif"
		}
	]
};
var ax = {
	id: "ax",
	name: {
		en: "Fluffifig",
		fr: "pokaran granit",
		de: "Granitpokhaki",
		es: "Pocarán granito"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_050.gif"
		}
	]
};
var ay = {
	id: "ay",
	name: {
		en: "Grape",
		fr: "ephemeruine",
		de: "Fliederbeere",
		es: "Efemerina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_051.gif"
		}
	]
};
var az = {
	id: "az",
	name: {
		en: "Pomegranate",
		fr: "musillo",
		de: "Falterdbeere",
		es: "Musillo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_052.gif"
		}
	]
};
var ba = {
	id: "ba",
	name: {
		en: "Sycamore",
		fr: "carrilude",
		de: "Microwassermelone",
		es: "Carriluda"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_053.gif"
		}
	]
};
var bb = {
	id: "bb",
	name: {
		en: "Blood Orange",
		fr: "frankepoise",
		de: "Berbse",
		es: "Frankeposa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_054.gif"
		}
	]
};
var bc = {
	id: "bc",
	name: {
		en: "Citron",
		fr: "maltechat",
		de: "Grananas",
		es: "Maltecia"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_055.gif"
		}
	]
};
var bd = {
	id: "bd",
	name: {
		en: "Clementhin",
		fr: "buiscuine",
		de: "Kiroge",
		es: "Biscuina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_056.gif"
		}
	]
};
var be = {
	id: "be",
	name: {
		en: "Grapefruit",
		fr: "arcosse brune",
		de: "Hellbraune Gurke",
		es: "Arcosa morena"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_057.gif"
		}
	]
};
var bf = {
	id: "bf",
	name: {
		en: "Deep Fried Fig",
		fr: "bidoulon cornu",
		de: "Hörnerschote",
		es: "Bidolón cornio"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_058.gif"
		}
	]
};
var bg = {
	id: "bg",
	name: {
		en: "Lemon",
		fr: "rupinio",
		de: "Robone",
		es: "Rupinio"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_059.gif"
		}
	]
};
var bh = {
	id: "bh",
	name: {
		en: "Slime",
		fr: "ultrabricot",
		de: "Ultraprikose",
		es: "Ultradurazno"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_060.gif"
		}
	]
};
var bi = {
	id: "bi",
	name: {
		en: "Key Lime",
		fr: "frozine",
		de: "Frostbeere",
		es: "Frozino"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_061.gif"
		}
	]
};
var bj = {
	id: "bj",
	name: {
		en: "Persian Lime",
		fr: "palmanzor",
		de: "Palmenfrucht",
		es: "Palmanzor"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_062.gif"
		}
	]
};
var bk = {
	id: "bk",
	name: {
		en: "Kaffir Lime",
		fr: "bastimolle d'octonante",
		de: "Affentomate",
		es: "Bastimolla de octona"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_063.gif"
		}
	]
};
var bl = {
	id: "bl",
	name: {
		en: "Mandarin",
		fr: "sageprune",
		de: "Darmpflaume",
		es: "Sagepruna"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_064.gif"
		}
	]
};
var bm = {
	id: "bm",
	name: {
		en: "Narrtjie",
		fr: "poirette sauvage",
		de: "Wildbirne",
		es: "Perilla salvaje"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_065.gif"
		}
	]
};
var bn = {
	id: "bn",
	name: {
		en: "Pomelo",
		fr: "cissenerve orientale",
		de: "Orientalische Tomate",
		es: "Reganillo oriental"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_066.gif"
		}
	]
};
var bo = {
	id: "bo",
	name: {
		en: "Liberaisin",
		fr: "gourmine du clerc",
		de: "Herzpapaya",
		es: "Gurmina del norte"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_067.gif"
		}
	]
};
var bp = {
	id: "bp",
	name: {
		en: "Kabosu",
		fr: "Epiphede de Tanzanie",
		de: "Litschimuschel aus Tansania",
		es: "Epífeda de Tanzania"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_068.gif"
		}
	]
};
var bq = {
	id: "bq",
	name: {
		en: "Oroblanco",
		fr: "poire elite",
		de: "Premiumbirne",
		es: "Pera élite"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_069.gif"
		}
	]
};
var br = {
	id: "br",
	name: {
		en: "Tangerine",
		fr: "chenibe",
		de: "Pustelmaroni",
		es: "Chenibí"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_070.gif"
		}
	]
};
var bs = {
	id: "bs",
	name: {
		en: "Orangelo",
		fr: "i' d'oedipe",
		de: "Ödipus-Zucchini",
		es: "Idedipo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_071.gif"
		}
	]
};
var bt = {
	id: "bt",
	name: {
		en: "Hamyam",
		fr: "grande geluge",
		de: "Große Erdölpflaume",
		es: "Gelania grande"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_072.gif"
		}
	]
};
var bu = {
	id: "bu",
	name: {
		en: "Rangpur",
		fr: "chank-sar",
		de: "Chank-Sar",
		es: "Chankasar"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_073.gif"
		}
	]
};
var bv = {
	id: "bv",
	name: {
		en: "Ugli",
		fr: "bolterouge",
		de: "Rote Nierenfrucht",
		es: "Bolteroja"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_074.gif"
		}
	]
};
var bw = {
	id: "bw",
	name: {
		en: "Avacado",
		fr: "kouss-pouss",
		de: "Knubbelorange",
		es: "Kusposa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_075.gif"
		}
	]
};
var bx = {
	id: "bx",
	name: {
		en: "Malakawa",
		fr: "abricot",
		de: "Aprikose",
		es: "Durazno"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_076.gif"
		}
	]
};
var by = {
	id: "by",
	name: {
		en: "Arctic Apple",
		fr: "louki",
		de: "Loki",
		es: "Luki"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_077.gif"
		}
	]
};
var bz = {
	id: "bz",
	name: {
		en: "Guava",
		fr: "manguerite",
		de: "Mangorita",
		es: "Manguerita"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_078.gif"
		}
	]
};
var ca = {
	id: "ca",
	name: {
		en: "Longan",
		fr: "pomme grande gueule",
		de: "Großmaulapfel",
		es: "Manzana testaruda"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_079.gif"
		}
	]
};
var cb = {
	id: "cb",
	name: {
		en: "Lychee",
		fr: "citron",
		de: "Zitrone",
		es: "Limón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_080.gif"
		}
	]
};
var cc = {
	id: "cc",
	name: {
		en: "Passionfruit",
		fr: "pulminost",
		de: "Tropfquitte",
		es: "Pulminosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_081.gif"
		}
	]
};
var cd = {
	id: "cd",
	name: {
		en: "Peanut",
		fr: "loncourge siamoise",
		de: "Siamenische Langgurke",
		es: "Loncabaza siamesa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_082.gif"
		}
	]
};
var ce = {
	id: "ce",
	name: {
		en: "Paleberry",
		fr: "glastouine",
		de: "Blutmandarine",
		es: "Golastina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_083.gif"
		}
	]
};
var cf = {
	id: "cf",
	name: {
		en: "Strawberry Guava",
		fr: "faritiere",
		de: "Goldbierbirne",
		es: "Faritesa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_084.gif"
		}
	]
};
var cg = {
	id: "cg",
	name: {
		en: "Tamarillo",
		fr: "Pastelite",
		de: "Icacopflaume",
		es: "Pastelita"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_085.gif"
		}
	]
};
var ch = {
	id: "ch",
	name: {
		en: "Morococoa",
		fr: "bouverest",
		de: "Boverest",
		es: "Buveresta"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_086.gif"
		}
	]
};
var ci = {
	id: "ci",
	name: {
		en: "Blushberry",
		fr: "terropostule",
		de: "Tomatillo Vallisto",
		es: "Terropóstula"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_087.gif"
		}
	]
};
var cj = {
	id: "cj",
	name: {
		en: "Nere",
		fr: "grosse grubine d'anniversaire",
		de: "Große Geburtstagsmelone",
		es: "Gran grubino de aniversario"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_088.gif"
		}
	]
};
var ck = {
	id: "ck",
	name: {
		en: "Abiu",
		fr: "pamplemouk",
		de: "Pampelmuck",
		es: "Pamplimon"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_089.gif"
		}
	]
};
var cl = {
	id: "cl",
	name: {
		en: "Stilacar",
		fr: "carcaoule",
		de: "Kakaoapfel",
		es: "Carcuelo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_090.gif"
		}
	]
};
var cm = {
	id: "cm",
	name: {
		en: "Custard Apple",
		fr: "langue de vieille",
		de: "Katzenzunge",
		es: "Lengua de suegra"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_091.gif"
		}
	]
};
var cn = {
	id: "cn",
	name: {
		en: "Nimblenip",
		fr: "kogredon",
		de: "Birnentraube",
		es: "Kogredón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_092.gif"
		}
	]
};
var co = {
	id: "co",
	name: {
		en: "Cherry Orange",
		fr: "barsouine versicolore",
		de: "Regenbogenfenchel",
		es: "Barsulín versicolor"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_093.gif"
		}
	]
};
var cp = {
	id: "cp",
	name: {
		en: "Allspice",
		fr: "sertoine",
		de: "Madagassische Dschungelquitte",
		es: "Sertón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_094.gif"
		}
	]
};
var cq = {
	id: "cq",
	name: {
		en: "Almond",
		fr: "pacoblemide",
		de: "Mebohne",
		es: "Pacolemida"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_095.gif"
		}
	]
};
var cr = {
	id: "cr",
	name: {
		en: "Ambarella",
		fr: "boteliane d'hygrone",
		de: "Hydrogerberium",
		es: "Boteliana de hygrona"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_096.gif"
		}
	]
};
var cs = {
	id: "cs",
	name: {
		en: "Araza",
		fr: "chantegore",
		de: "Barockfrucht",
		es: "Chantegora"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_097.gif"
		}
	]
};
var ct = {
	id: "ct",
	name: {
		en: "Limplime",
		fr: "mono-iote",
		de: "Mangomonobeere",
		es: "Mono-yote"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_098.gif"
		}
	]
};
var cu = {
	id: "cu",
	name: {
		en: "Babaco",
		fr: "pankersh",
		de: "Pankersh",
		es: "Pancresh"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_099.gif"
		}
	]
};
var cv = {
	id: "cv",
	name: {
		en: "Bacupari",
		fr: "vareche du malin",
		de: "Eiterapfel",
		es: "Varecha de Malín"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_100.gif"
		}
	]
};
var cw = {
	id: "cw",
	name: {
		en: "Bacuri",
		fr: "raisin bordelais",
		de: "Bordeauxtraube",
		es: "Uva de Burdeos"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_101.gif"
		}
	]
};
var cx = {
	id: "cx",
	name: {
		en: "Bael",
		fr: "gorgonde de Molister",
		de: "Korgonenfrucht",
		es: "Gorgondo de Molister"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_102.gif"
		}
	]
};
var cy = {
	id: "cy",
	name: {
		en: "Banana",
		fr: "gencive de truie",
		de: "Zahnfleischgranadilla",
		es: "Encia de marrana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_103.gif"
		}
	]
};
var cz = {
	id: "cz",
	name: {
		en: "Barbadine",
		fr: "justeprune",
		de: "Prüde Pflaume",
		es: "Justaguinda"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_104.gif"
		}
	]
};
var da = {
	id: "da",
	name: {
		en: "Indicherry",
		fr: "crysto-mangue",
		de: "Lava-Mango",
		es: "Crysto-mango"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_105.gif"
		}
	]
};
var db = {
	id: "db",
	name: {
		en: "Betel Nut",
		fr: "banane",
		de: "Banane",
		es: "Banana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_106.gif"
		}
	]
};
var dc = {
	id: "dc",
	name: {
		en: "Bignay",
		fr: "dalinette",
		de: "Vampirbeete",
		es: "Dalineta"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_107.gif"
		}
	]
};
var dd = {
	id: "dd",
	name: {
		en: "Bilimbi",
		fr: "Goulumide",
		de: "Erdbeertraube",
		es: "Golumida"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_108.gif"
		}
	]
};
var de = {
	id: "de",
	name: {
		en: "Biribi",
		fr: "taroudon",
		de: "Tennispomelo",
		es: "Tarudón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_109.gif"
		}
	]
};
var df = {
	id: "df",
	name: {
		en: "Glumplum",
		fr: "vautrille",
		de: "Duftbirne",
		es: "Votrilla"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_110.gif"
		}
	]
};
var dg = {
	id: "dg",
	name: {
		en: "Blazeball",
		fr: "bangalosh d'Akoupi",
		de: "Bengalesische Akalosch",
		es: "Bangalo de Akupi"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_111.gif"
		}
	]
};
var dh = {
	id: "dh",
	name: {
		en: "Heaven Lemon",
		fr: "gonfle gelose",
		de: "Rosa Zwergbanane",
		es: "Hincha gelosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_112.gif"
		}
	]
};
var di = {
	id: "di",
	name: {
		en: "Brazilberry",
		fr: "amande carnivore",
		de: "Fleischfressende Mandel",
		es: "Manda carnívora"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_113.gif"
		}
	]
};
var dj = {
	id: "dj",
	name: {
		en: "Bedenfruit",
		fr: "noubab géant",
		de: "Riesennakub",
		es: "Nubab gigante"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_114.gif"
		}
	]
};
var dk = {
	id: "dk",
	name: {
		en: "Bileberry",
		fr: "postichonne",
		de: "Gelbe Capsica",
		es: "Postichona"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_115.gif"
		}
	]
};
var dl = {
	id: "dl",
	name: {
		en: "Burmese Grape",
		fr: "rupekt",
		de: "Bolivianische Affenbeere",
		es: "Rupe"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_116.gif"
		}
	]
};
var dm = {
	id: "dm",
	name: {
		en: "Caimitron",
		fr: "fruit-du-grouin",
		de: "Libellenfrucht",
		es: "Fruta du grodín"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_117.gif"
		}
	]
};
var dn = {
	id: "dn",
	name: {
		en: "Calablum",
		fr: "sac-a-bile",
		de: "Roter Gallensack",
		es: "Biliosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_118.gif"
		}
	]
};
var dp = {
	id: "dp",
	name: {
		en: "Cannooseberry",
		fr: "marron strié",
		de: "Gestreifte Maroni",
		es: "Marrón estriado"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_120.gif"
		}
	]
};
var dq = {
	id: "dq",
	name: {
		en: "Capucin Cherry",
		fr: "driane de Moss",
		de: "Mossfrucht",
		es: "Driana de moss"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_121.gif"
		}
	]
};
var dr = {
	id: "dr",
	name: {
		en: "Carambola",
		fr: "noix de Gernide",
		de: "Karamellnuss",
		es: "Nuez de gernida"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_122.gif"
		}
	]
};
var ds = {
	id: "ds",
	name: {
		en: "Caranda",
		fr: "poistule",
		de: "Fleckschote",
		es: "Puastula"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_123.gif"
		}
	]
};
var dt = {
	id: "dt",
	name: {
		en: "Cardamom",
		fr: "bonzerone",
		de: "Toblorone",
		es: "Bonzerona"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_124.gif"
		}
	]
};
var du = {
	id: "du",
	name: {
		en: "Carob",
		fr: "triangustine",
		de: "Pyramelone",
		es: "Triangustina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_125.gif"
		}
	]
};
var dv = {
	id: "dv",
	name: {
		en: "Cashew",
		fr: "radoux",
		de: "Dombrowski-Pfirsisch",
		es: "Radú"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_126.gif"
		}
	]
};
var dw = {
	id: "dw",
	name: {
		en: "Casablanana",
		fr: "sadentro",
		de: "Streifentraube",
		es: "Sadentro"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_127.gif"
		}
	]
};
var dx = {
	id: "dx",
	name: {
		en: "Ghanapple",
		fr: "grogofurile",
		de: "Siamesische Orange",
		es: "Grogofurilo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_128.gif"
		}
	]
};
var dy = {
	id: "dy",
	name: {
		en: "Ceriman",
		fr: "lookar chapelé",
		de: "Purpurunus",
		es: "Lukara castellana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_129.gif"
		}
	]
};
var dz = {
	id: "dz",
	name: {
		en: "Gooseberry",
		fr: "sarsulene",
		de: "Nusskiwi",
		es: "Sarsulén"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_130.gif"
		}
	]
};
var ea = {
	id: "ea",
	name: {
		en: "Puertopecan",
		fr: "auberlune",
		de: "Wilde Jaboticaba",
		es: "Oberluna"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_131.gif"
		}
	]
};
var eb = {
	id: "eb",
	name: {
		en: "Graypefruit",
		fr: "fugione codeinée",
		de: "Codeinhaltige Wildkirsche",
		es: "Higona codínea"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_132.gif"
		}
	]
};
var ec = {
	id: "ec",
	name: {
		en: "Fancitron",
		fr: "sabot d'Obyrinthe",
		de: "Violaine",
		es: "Zueco de obirinta"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_133.gif"
		}
	]
};
var ed = {
	id: "ed",
	name: {
		en: "Chupa-Chupa",
		fr: "fongiole purpide",
		de: "Herbeere",
		es: "Higona purpida"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_134.gif"
		}
	]
};
var ee = {
	id: "ee",
	name: {
		en: "Cinnamon",
		fr: "boulange",
		de: "Brötchenmelone",
		es: "Bulanga"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_135.gif"
		}
	]
};
var ef = {
	id: "ef",
	name: {
		en: "Clove",
		fr: "gorank-sakkar",
		de: "Gorank-Sakkar",
		es: "Goran-sakkar"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_136.gif"
		}
	]
};
var eg = {
	id: "eg",
	name: {
		en: "Coco Plum",
		fr: "fourmalie",
		de: "Schmuckblatt-Calypso",
		es: "Furmalia"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_137.gif"
		}
	]
};
var eh = {
	id: "eh",
	name: {
		en: "Coconut",
		fr: "coustoron",
		de: "Schnullerfrucht",
		es: "Custorón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_138.gif"
		}
	]
};
var ei = {
	id: "ei",
	name: {
		en: "Cola Nut",
		fr: "sochon de Panurge",
		de: "Caushemesh Chili",
		es: "Sochon de panurga"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_139.gif"
		}
	]
};
var ej = {
	id: "ej",
	name: {
		en: "Cupuassu",
		fr: "mouladre",
		de: "Edelrosette",
		es: "Muladra"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_140.gif"
		}
	]
};
var ek = {
	id: "ek",
	name: {
		en: "Curry Leaf",
		fr: "sabirone craquelée",
		de: "Brüchiger Zabione",
		es: "Sabirona craquelada"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_141.gif"
		}
	]
};
var el = {
	id: "el",
	name: {
		en: "Cherimoya",
		fr: "langolfier",
		de: "Ongolfier",
		es: "Langolfier"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_142.gif"
		}
	]
};
var em = {
	id: "em",
	name: {
		en: "Chili Pepper",
		fr: "pouladiche",
		de: "Dreieckige Anananaskirsche",
		es: "Puladicha"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_143.gif"
		}
	]
};
var en = {
	id: "en",
	name: {
		en: "Chinese Jujube",
		fr: "tribaie de Mireillon",
		de: "Dreifaltige Mirabelle",
		es: "Tribaya de mireillon"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_144.gif"
		}
	]
};
var eo = {
	id: "eo",
	name: {
		en: "Chinese Olive",
		fr: "sarule fraisière de synthèse",
		de: "Spanische synthetische Erdbeere",
		es: "Sarula fresia amazonica"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_145.gif"
		}
	]
};
var ep = {
	id: "ep",
	name: {
		en: "Caimito",
		fr: "Marveloune",
		de: "Dunkle Kumquat",
		es: "Marveluna"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_146.gif"
		}
	]
};
var eq = {
	id: "eq",
	name: {
		en: "Clove",
		fr: "joint-de-boise",
		de: "Klebrige Himbeere",
		es: "Arbolada"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_147.gif"
		}
	]
};
var er = {
	id: "er",
	name: {
		en: "Cosicoa",
		fr: "dolastige",
		de: "Tabaskina",
		es: "Dolastiga"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_148.gif"
		}
	]
};
var es = {
	id: "es",
	name: {
		en: "Coffee Bean",
		fr: "sauf-kinède",
		de: "Zahnlose Dionaea",
		es: "Salvakinda"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_149.gif"
		}
	]
};
var et = {
	id: "et",
	name: {
		en: "Cupuaçu",
		fr: "personde de Bruges",
		de: "Uva coloniae",
		es: "Personda de brujas"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_150.gif"
		}
	]
};
var eu = {
	id: "eu",
	name: {
		en: "Custard Apple",
		fr: "picotoze",
		de: "Croissant-Satsuma",
		es: "Picotoza"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_151.gif"
		}
	]
};
var ev = {
	id: "ev",
	name: {
		en: "Doodleberry",
		fr: "carotte bleue de jean-prune",
		de: "Blaue Karottenbeere",
		es: "Zanahora azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_152.gif"
		}
	]
};
var ew = {
	id: "ew",
	name: {
		en: "Paraguava",
		fr: "boutignole",
		de: "Schottischer Pfirsich",
		es: "Butiniol"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_153.gif"
		}
	]
};
var ex = {
	id: "ex",
	name: {
		en: "Plumb",
		fr: "mangrume",
		de: "Schamanentraum",
		es: "Mangruma"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_154.gif"
		}
	]
};
var ey = {
	id: "ey",
	name: {
		en: "Dragonfruit",
		fr: "kiste",
		de: "Warzenfrucht",
		es: "Nistia"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_155.gif"
		}
	]
};
var ez = {
	id: "ez",
	name: {
		en: "Dukudodd",
		fr: "pamplehue",
		de: "Pampel-hui",
		es: "Pamplegue"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_156.gif"
		}
	]
};
var fa = {
	id: "fa",
	name: {
		en: "Klutzkawa",
		fr: "pangine corsée",
		de: "Potente Pangina",
		es: "Pangina corsa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_157.gif"
		}
	]
};
var fb = {
	id: "fb",
	name: {
		en: "Elephant Apple",
		fr: "frulonque",
		de: "Eichelclementine",
		es: "Frulonca"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_158.gif"
		}
	]
};
var fc = {
	id: "fc",
	name: {
		en: "Peach Pepino",
		fr: "griste veruleuse",
		de: "Bandwurmkirsche",
		es: "Grista verulosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_159.gif"
		}
	]
};
var fd = {
	id: "fd",
	name: {
		en: "Fehnjoa",
		fr: "ballon d'Emiplegianne",
		de: "Kasachischer Ameisenbaloon",
		es: "Balón de emiplegiana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_160.gif"
		}
	]
};
var fe = {
	id: "fe",
	name: {
		en: "Gambogey",
		fr: "Espigoune",
		de: "Meteorkokos",
		es: "Espigona"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_161.gif"
		}
	]
};
var ff = {
	id: "ff",
	name: {
		en: "Gingernip",
		fr: "nonehime",
		de: "Sächsische Fruchtgurke",
		es: "Nonehima"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_162.gif"
		}
	]
};
var fg = {
	id: "fg",
	name: {
		en: "Giant Granadilla",
		fr: "pourinade",
		de: "Danielfrucht",
		es: "Purinada"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_163.gif"
		}
	]
};
var fh = {
	id: "fh",
	name: {
		en: "Golden Apple",
		fr: "fessedange",
		de: "Engelpopo",
		es: "Pieldangel"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_164.gif"
		}
	]
};
var fi = {
	id: "fi",
	name: {
		en: "Peach Tomato",
		fr: "parugraine",
		de: "Granatbeere",
		es: "Parugrana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_165.gif"
		}
	]
};
var fj = {
	id: "fj",
	name: {
		en: "Granadilla",
		fr: "drigelon amer",
		de: "Bittere Schimmelnuss",
		es: "Drigelón amargo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_166.gif"
		}
	]
};
var fk = {
	id: "fk",
	name: {
		en: "Grumichama",
		fr: "choux kibilien",
		de: "Malaischer Krabbenkohl",
		es: "Col kibiliana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_167.gif"
		}
	]
};
var fl = {
	id: "fl",
	name: {
		en: "Guanabana",
		fr: "piligrone",
		de: "Limettenbirne",
		es: "Piligrona"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_168.gif"
		}
	]
};
var fm = {
	id: "fm",
	name: {
		en: "Javuarana",
		fr: "Kramkram",
		de: "Afrikanische Schrumpelbeere",
		es: "Cramcram"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_169.gif"
		}
	]
};
var fn = {
	id: "fn",
	name: {
		en: "Grittiuava",
		fr: "saunecosse",
		de: "Herbe Kelchkiwi",
		es: "Sonecosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_170.gif"
		}
	]
};
var fo = {
	id: "fo",
	name: {
		en: "Rumberry",
		fr: "soucixte",
		de: "Schluftbaloon",
		es: "Sucixta"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_171.gif"
		}
	]
};
var fp = {
	id: "fp",
	name: {
		en: "Horned Melon",
		fr: "apophèse poreuse",
		de: "Aztekten-Ingwer",
		es: "Apopea porosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_172.gif"
		}
	]
};
var fq = {
	id: "fq",
	name: {
		en: "Huitolive",
		fr: "kovak",
		de: "Kavok",
		es: "Kovac"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_173.gif"
		}
	]
};
var fr = {
	id: "fr",
	name: {
		en: "Ice Cream Bean",
		fr: "bouton d'ame",
		de: "Sterntraube",
		es: "Botón de santo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_174.gif"
		}
	]
};
var fs = {
	id: "fs",
	name: {
		en: "Indian Almond",
		fr: "chankor-pak",
		de: "Chankor-Pak",
		es: "Chancor-pak"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_175.gif"
		}
	]
};
var ft = {
	id: "ft",
	name: {
		en: "Silkberry",
		fr: "albuzides",
		de: "Surinamikürbis",
		es: "Albúsides"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_176.gif"
		}
	]
};
var fu = {
	id: "fu",
	name: {
		en: "Indian Gooseberry",
		fr: "courgeazur",
		de: "Paradieszucchini",
		es: "Calabazul"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_177.gif"
		}
	]
};
var fv = {
	id: "fv",
	name: {
		en: "Perumari",
		fr: "grizline",
		de: "Camino",
		es: "Grizlina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_178.gif"
		}
	]
};
var fw = {
	id: "fw",
	name: {
		en: "Indian Prune",
		fr: "atlanteole",
		de: "Atlantinische Tomate",
		es: "Atlanteola"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_179.gif"
		}
	]
};
var fx = {
	id: "fx",
	name: {
		en: "Jaboticaba",
		fr: "baie d'octarus",
		de: "Octarusbeere",
		es: "Kiwi de octarus"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_180.gif"
		}
	]
};
var fy = {
	id: "fy",
	name: {
		en: "Jackfruit",
		fr: "carion sylvain d'extripude",
		de: "Grasmimosa",
		es: "Almendro de extripuda"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_181.gif"
		}
	]
};
var fz = {
	id: "fz",
	name: {
		en: "Wineberry",
		fr: "prunasse nocturne golumine",
		de: "Saftige Nachtpflaume",
		es: "Albaricoque nocturno golumino"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_182.gif"
		}
	]
};
var ga = {
	id: "ga",
	name: {
		en: "Jatobá",
		fr: "fonzyrave",
		de: "Rubiginosa monacensia",
		es: "Fonziravia"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_183.gif"
		}
	]
};
var gb = {
	id: "gb",
	name: {
		en: "Jelly Plum",
		fr: "pochon verruleux de Cossemard",
		de: "Warziger Schokoladenwein",
		es: "Pochón veruloso de cosemar"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_184.gif"
		}
	]
};
var gc = {
	id: "gc",
	name: {
		en: "Jocote",
		fr: "noix surimane",
		de: "Rousseau-Betelnuss",
		es: "Nuez surimana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_185.gif"
		}
	]
};
var gd = {
	id: "gd",
	name: {
		en: "Kaffir Lime",
		fr: "baie-glande d'oursepoil",
		de: "Testiculi ursorum",
		es: "Caqui de ursepelo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_186.gif"
		}
	]
};
var ge = {
	id: "ge",
	name: {
		en: "Kei Apple",
		fr: "fusillons gogremule",
		de: "Grogzwetschge",
		es: "Fusillones grómulos"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_187.gif"
		}
	]
};
var gf = {
	id: "gf",
	name: {
		en: "Keppel fruit",
		fr: "baie frokelone de Tanzanie",
		de: "Tansanesische Schlingbeere",
		es: "Guayabo de Tanzania"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_188.gif"
		}
	]
};
var gg$1 = {
	id: "gg",
	name: {
		en: "Kitembilla",
		fr: "goozblou",
		de: "Violette Nasenzwickfrucht",
		es: "Guzblú"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_189.gif"
		}
	]
};
var gh = {
	id: "gh",
	name: {
		en: "Kiwano",
		fr: "noix de Gondomar",
		de: "Gondomarnuss",
		es: "Nuez de gondomar"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_190.gif"
		}
	]
};
var gi = {
	id: "gi",
	name: {
		en: "Kiwifruit",
		fr: "piwi rose",
		de: "Rosa Piwi",
		es: "Piwi rosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_191.gif"
		}
	]
};
var gj = {
	id: "gj",
	name: {
		en: "Guyanaguava",
		fr: "baie d'Ouen",
		de: "Majoquina",
		es: "Chirimoya de Guén"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_192.gif"
		}
	]
};
var gk = {
	id: "gk",
	name: {
		en: "Kandis",
		fr: "saccarolme",
		de: "Rindzungenblüte",
		es: "Sacarolma"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_193.gif"
		}
	]
};
var gl = {
	id: "gl",
	name: {
		en: "Korlan",
		fr: "oignon du Sahel",
		de: "Sahelzwiebel",
		es: "Cebolla de Sahel"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_194.gif"
		}
	]
};
var gm = {
	id: "gm",
	name: {
		en: "Kundong",
		fr: "olivion confit",
		de: "Eingelegte Olive",
		es: "Olivón confite"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_195.gif"
		}
	]
};
var gn = {
	id: "gn",
	name: {
		en: "Lablab",
		fr: "nouaztek",
		de: "Granatkiwi",
		es: "Nuaztek"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_196.gif"
		}
	]
};
var go = {
	id: "go",
	name: {
		en: "Lakoocha",
		fr: "poustil",
		de: "Ohrpaprika",
		es: "Pustil"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_197.gif"
		}
	]
};
var gp = {
	id: "gp",
	name: {
		en: "Oysterfruit",
		fr: "gramade",
		de: "Multibutte",
		es: "Gramado"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_198.gif"
		}
	]
};
var gq = {
	id: "gq",
	name: {
		en: "Uruguyabo",
		fr: "fraise feroce d'outre-sang",
		de: "Warmblutbeere",
		es: "Fresa feroz sanguínea"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_199.gif"
		}
	]
};
var gr = {
	id: "gr",
	name: {
		en: "Leyssone",
		fr: "jacquelin bossu",
		de: "Jacqueline-Aprikose",
		es: "Jacquelin melón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_200.gif"
		}
	]
};
var gs = {
	id: "gs",
	name: {
		en: "Lovinut",
		fr: "pêche papuleuse",
		de: "Prinzessinnenpfirsich",
		es: "Durzano papuloso"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_201.gif"
		}
	]
};
var gt = {
	id: "gt",
	name: {
		en: "Lime",
		fr: "pelote ougandaise",
		de: "Fliederfarbene Aurelia",
		es: "Pelota ugandesa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_202.gif"
		}
	]
};
var gu = {
	id: "gu",
	name: {
		en: "Limeberry",
		fr: "prune triomphante",
		de: "Ruhmvolle Mirabelle",
		es: "Ciruela triunfante"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_203.gif"
		}
	]
};
var gv = {
	id: "gv",
	name: {
		en: "Limequatze",
		fr: "bogueraide",
		de: "Favo",
		es: "Bogueray"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_204.gif"
		}
	]
};
var gw = {
	id: "gw",
	name: {
		en: "Longan",
		fr: "moltereaux",
		de: "Zwirne",
		es: "Molteró"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_205.gif"
		}
	]
};
var gx = {
	id: "gx",
	name: {
		en: "Loquat",
		fr: "merangue crispée",
		de: "Madame Meringue",
		es: "Merengue crispado"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_206.gif"
		}
	]
};
var gy = {
	id: "gy",
	name: {
		en: "Jumboplum",
		fr: "paire de bolchevine",
		de: "Sowjetische Knorpelkirsche",
		es: "Bolchevina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_207.gif"
		}
	]
};
var gz = {
	id: "gz",
	name: {
		en: "Lucuma",
		fr: "pruneau",
		de: "Backpflaume",
		es: "Ciruela pasa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_208.gif"
		}
	]
};
var ha = {
	id: "ha",
	name: {
		en: "Lycheechee",
		fr: "cosse foraine",
		de: "Jahrmarktbeutel",
		es: "Vaina foranea"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_209.gif"
		}
	]
};
var hb = {
	id: "hb",
	name: {
		en: "Mabolo",
		fr: "cerises guillaume géantes",
		de: "Wilhelminische Riesenkirschen",
		es: "Cerezas guillerminas"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_210.gif"
		}
	]
};
var hc = {
	id: "hc",
	name: {
		en: "Macadamia",
		fr: "tomates cireuses du Mexique",
		de: "Mexikanische Wachstomaten",
		es: "Tomates cerosos mexicanos"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_211.gif"
		}
	]
};
var hd = {
	id: "hd",
	name: {
		en: "Madrono",
		fr: "chavenagre",
		de: "Pappiger Hanfapfel",
		es: "Chevanagre"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_212.gif"
		}
	]
};
var he = {
	id: "he",
	name: {
		en: "Robustapple",
		fr: "citron velu d'escampette",
		de: "Haarige Tuvaluzitrone",
		es: "Limón escampado"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_213.gif"
		}
	]
};
var hf = {
	id: "hf",
	name: {
		en: "Milkyapple",
		fr: "gousse géante de camérile",
		de: "Riesige Caymanschote",
		es: "Vaina gigante de cameril"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_214.gif"
		}
	]
};
var hg = {
	id: "hg",
	name: {
		en: "Mamey",
		fr: "polkine",
		de: "Schöne Petra",
		es: "Polquina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_215.gif"
		}
	]
};
var hh = {
	id: "hh",
	name: {
		en: "Mamoncello",
		fr: "opalin des malouines",
		de: "Griechischer Bergfenchel",
		es: "Opalín de Malvinas"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_216.gif"
		}
	]
};
var hi = {
	id: "hi",
	name: {
		en: "Mandarin",
		fr: "regal de mirmelin",
		de: "Untrennbare Waschbärenolive",
		es: "Regal de mirmelín"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_217.gif"
		}
	]
};
var hj = {
	id: "hj",
	name: {
		en: "Mangaba",
		fr: "coulemele géante",
		de: "Geheimnisvolle Hermine",
		es: "Columelo gigante"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_218.gif"
		}
	]
};
var hk = {
	id: "hk",
	name: {
		en: "Meatmango",
		fr: "pranterase",
		de: "Glatte kanadische Pitaya",
		es: "Pranteresa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_219.gif"
		}
	]
};
var hl = {
	id: "hl",
	name: {
		en: "Mangosteen",
		fr: "noix de coco géante",
		de: "Riesige Kokosnuss",
		es: "Coco gigante"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_220.gif"
		}
	]
};
var hm = {
	id: "hm",
	name: {
		en: "Mintrang",
		fr: "malpanguede",
		de: "Augenkirsche",
		es: "Malpangueda"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_221.gif"
		}
	]
};
var hn = {
	id: "hn",
	name: {
		en: "Maypop",
		fr: "larme de coquebin",
		de: "Harzige Koalaträne",
		es: "Lágrima de coquebino"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_222.gif"
		}
	]
};
var ho = {
	id: "ho",
	name: {
		en: "Medlar",
		fr: "prunes totemiques d'Abigaël",
		de: "Erbsenförmige Pythagoras-Assai",
		es: "Ciruelas totem de Abigaíl"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_223.gif"
		}
	]
};
var hp = {
	id: "hp",
	name: {
		en: "Sicksloe",
		fr: "calebasse du wigam",
		de: "Eleganter Flaschenkürbis",
		es: "Calabaza de Wigam"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_224.gif"
		}
	]
};
var hq = {
	id: "hq",
	name: {
		en: "Melon Pear",
		fr: "touillebine",
		de: "Riesiger Frühlingscornichon",
		es: "Tejilla"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_225.gif"
		}
	]
};
var hr = {
	id: "hr",
	name: {
		en: "Miracle Fruit",
		fr: "libernucle des songes",
		de: "Steinharte Leguanbeere",
		es: "Libernucla de sondas"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_226.gif"
		}
	]
};
var hs = {
	id: "hs",
	name: {
		en: "Mombin",
		fr: "navet sclereux de croche-poule",
		de: "Südafrikanische Hühnerrübe",
		es: "Navo escleroso"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_227.gif"
		}
	]
};
var ht = {
	id: "ht",
	name: {
		en: "Monstera",
		fr: "fraîche espandille",
		de: "Vielfarbiges Pinselblatt",
		es: "Espandilla fresca"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_228.gif"
		}
	]
};
var hu = {
	id: "hu",
	name: {
		en: "Morinda",
		fr: "i' d'oedipe congestipé",
		de: "Verstopfte Humboldtbirne",
		es: "Idedipo congestionado"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_229.gif"
		}
	]
};
var hv = {
	id: "hv",
	name: {
		en: "Mountain Mango",
		fr: "carotte de neptune",
		de: "Neptunkarotte",
		es: "Zanahoria de neptuno"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_230.gif"
		}
	]
};
var hw = {
	id: "hw",
	name: {
		en: "Jackfruit",
		fr: "poirosang",
		de: "Blutbirne",
		es: "Puerrosangre"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_231.gif"
		}
	]
};
var hx = {
	id: "hx",
	name: {
		en: "Mundu",
		fr: "tomerote courbée",
		de: "Tomelone",
		es: "Tomarote curvo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_232.gif"
		}
	]
};
var hy = {
	id: "hy",
	name: {
		en: "Tapiok",
		fr: "gousse-folle d'estrangulites",
		de: "Verrückte Brombeere",
		es: "Vaina loca de estrangulitas"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_233.gif"
		}
	]
};
var hz = {
	id: "hz",
	name: {
		en: "Muskmelon",
		fr: "tonce de Biscarosse",
		de: "Pinkfarbene Wolfsbeere",
		es: "Toncia de biscarosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_234.gif"
		}
	]
};
var ia = {
	id: "ia",
	name: {
		en: "Nance",
		fr: "courgette souple d'andromède",
		de: "Weiche Andromedagurke",
		es: "Calabaza de andromada"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_235.gif"
		}
	]
};
var ib = {
	id: "ib",
	name: {
		en: "Naranjilla",
		fr: "prune vermillone",
		de: "Beaujolais-Zwetschge",
		es: "Ciruelo rojillón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_236.gif"
		}
	]
};
var ic = {
	id: "ic",
	name: {
		en: "Jollijoba",
		fr: "navet marin d'iodefine",
		de: "Jodsalzrübe",
		es: "Navo marino de Yodefín"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_237.gif"
		}
	]
};
var id = {
	id: "id",
	name: {
		en: "Jamjube",
		fr: "fruit du moine",
		de: "Mönchsfrucht",
		es: "Fruto de monje"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_238.gif"
		}
	]
};
var ie = {
	id: "ie",
	name: {
		en: "Sugar Free Fig",
		fr: "apuron sauvage",
		de: "Wilde Bikina",
		es: "Apuron salvaje"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_239.gif"
		}
	]
};
var ig = {
	id: "ig",
	name: {
		en: "Palmnut",
		fr: "noix chicte de Boterang",
		de: "Chruselbeeri",
		es: "Nuez de Boteranga"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_241.gif"
		}
	]
};
var ih = {
	id: "ih",
	name: {
		en: "Papaya",
		fr: "sar-kotolys",
		de: "Totemfrucht",
		es: "Sarkotolys"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_242.gif"
		}
	]
};
var ii = {
	id: "ii",
	name: {
		en: "Passionfruit",
		fr: "germillante de Kor",
		de: "Chamäleonkeimling",
		es: "Germillante de kor"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_243.gif"
		}
	]
};
var ij = {
	id: "ij",
	name: {
		en: "Pawsome",
		fr: "ficheloutre",
		de: "Knospenbeere der Verliebten",
		es: "Fichelutri"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_244.gif"
		}
	]
};
var ik = {
	id: "ik",
	name: {
		en: "Peach Palm",
		fr: "moguechoucte",
		de: "Mugashuk",
		es: "Moguechucta"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_245.gif"
		}
	]
};
var il = {
	id: "il",
	name: {
		en: "Peanut Butter Fruit",
		fr: "Labsket brun",
		de: "Brauner Labsket",
		es: "Aguaje moreno"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_246.gif"
		}
	]
};
var im = {
	id: "im",
	name: {
		en: "Pecan",
		fr: "pokaran boursoufflé",
		de: "Aufgeblähter Pokaran",
		es: "Pocarán ampuloso"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_247.gif"
		}
	]
};
var io = {
	id: "io",
	name: {
		en: "Pequi",
		fr: "palmus",
		de: "Palmus",
		es: "Palmus"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_249.gif"
		}
	]
};
var ip = {
	id: "ip",
	name: {
		en: "Persimmon",
		fr: "perle blanche",
		de: "Litschiperle",
		es: "Perla blanca"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_250.gif"
		}
	]
};
var iq = {
	id: "iq",
	name: {
		en: "Potatome",
		fr: "perle dorée",
		de: "Goldperle",
		es: "Perla dorada"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_251.gif"
		}
	]
};
var ir = {
	id: "ir",
	name: {
		en: "Breadfruit",
		fr: "tolmine supre d'Astirmin",
		de: "ESCORP Astronautenorange",
		es: "Tolmina supra de astirmin"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_252.gif"
		}
	]
};
var is = {
	id: "is",
	name: {
		en: "Pilinut",
		fr: "souffricine",
		de: "Braune Auberginenmarille",
		es: "Sufricina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_253.gif"
		}
	]
};
var it = {
	id: "it",
	name: {
		en: "Pindo Palm",
		fr: "kiwi",
		de: "Kiwi",
		es: "Kiwi"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_254.gif"
		}
	]
};
var iu = {
	id: "iu",
	name: {
		en: "Pinyapple",
		fr: "vulcanide",
		de: "Vulcanina",
		es: "Vulcánida"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_255.gif"
		}
	]
};
var iv = {
	id: "iv",
	name: {
		en: "Picetacchio",
		fr: "sagipoine",
		de: "Dumbopflaume",
		es: "Sagipuana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_256.gif"
		}
	]
};
var iw = {
	id: "iw",
	name: {
		en: "Pitomba",
		fr: "aubergigite",
		de: "Auberginenbirne",
		es: "Berengjilla"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_257.gif"
		}
	]
};
var ix = {
	id: "ix",
	name: {
		en: "Beer Nut",
		fr: "tugeron",
		de: "Straffe Beerentomate",
		es: "Tugerón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_258.gif"
		}
	]
};
var iy = {
	id: "iy",
	name: {
		en: "Ice Cream Bean",
		fr: "sanglepoire",
		de: "Saure Klappbirne",
		es: "Sanglepera"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_259.gif"
		}
	]
};
var iz = {
	id: "iz",
	name: {
		en: "Pommegranite",
		fr: "doudeline",
		de: "Mariannen-Drachenfrucht",
		es: "Dudelina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_260.gif"
		}
	]
};
var ja = {
	id: "ja",
	name: {
		en: "Pulasan",
		fr: "citrouillène de Brumes",
		de: "Tintenfischtomate",
		es: "Limonillo de brumas"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_261.gif"
		}
	]
};
var jb = {
	id: "jb",
	name: {
		en: "Pummelo",
		fr: "courgeveine",
		de: "Naga Jolokia",
		es: "Calabacelo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_262.gif"
		}
	]
};
var jc = {
	id: "jc",
	name: {
		en: "Pupunha",
		fr: "loquepoire",
		de: "Kohlbirne",
		es: "Loquepera"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_263.gif"
		}
	]
};
var jd = {
	id: "jd",
	name: {
		en: "Purple Mombin",
		fr: "frumille",
		de: "Hagebuttenbeere",
		es: "Frumilla"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_264.gif"
		}
	]
};
var je = {
	id: "je",
	name: {
		en: "Satinapple",
		fr: "Gorgeron d'Ipenile",
		de: "Bohnenkirsche",
		es: "Gorgerón d'Ipenila"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_265.gif"
		}
	]
};
var jf = {
	id: "jf",
	name: {
		en: "Riberry",
		fr: "tuline coeur-de-veau",
		de: "Kalbsherzfrucht",
		es: "Tulina corazon"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_266.gif"
		}
	]
};
var jg = {
	id: "jg",
	name: {
		en: "Yummyucca",
		fr: "groseilles",
		de: "Johannisbeeren",
		es: "Grosellas"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_267.gif"
		}
	]
};
var jh = {
	id: "jh",
	name: {
		en: "Rollinapple",
		fr: "anqueponche",
		de: "Dreitaschenpaprika",
		es: "Anqueponche"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_268.gif"
		}
	]
};
var ji = {
	id: "ji",
	name: {
		en: "Rose Apple",
		fr: "molderoche",
		de: "Moldosch",
		es: "Molderoche"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_269.gif"
		}
	]
};
var jj = {
	id: "jj",
	name: {
		en: "Safounote",
		fr: "migrelon",
		de: "Bitterpapaya",
		es: "Migrelón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_270.gif"
		}
	]
};
var jk = {
	id: "jk",
	name: {
		en: "Salakili",
		fr: "murion",
		de: "Bromkirsche",
		es: "Murino"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_271.gif"
		}
	]
};
var jl = {
	id: "jl",
	name: {
		en: "Santolive",
		fr: "rabus bilevin",
		de: "Kinderrübe",
		es: "Rabus bilevino"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_272.gif"
		}
	]
};
var jm = {
	id: "jm",
	name: {
		en: "Sapodilla",
		fr: "roblochone piquée",
		de: "Paprikose",
		es: "Roblochone picado"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_273.gif"
		}
	]
};
var jn = {
	id: "jn",
	name: {
		en: "Sea Grape",
		fr: "korosan-ker",
		de: "Wasserfall-Zwetschge",
		es: "Korosan-ker"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_274.gif"
		}
	]
};
var jo = {
	id: "jo",
	name: {
		en: "Soncoya",
		fr: "marleane d'execution",
		de: "Hochwald-Marlise",
		es: "Marleana de ejecución"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_275.gif"
		}
	]
};
var jp = {
	id: "jp",
	name: {
		en: "Soursorb",
		fr: "cibouline",
		de: "Blaue Honigbeere",
		es: "Cebollina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_276.gif"
		}
	]
};
var jq = {
	id: "jq",
	name: {
		en: "Diarapple",
		fr: "noix bruconite",
		de: "Maulwurfsnuss",
		es: "Nuez bruconita"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_277.gif"
		}
	]
};
var jr = {
	id: "jr",
	name: {
		en: "Star Apple",
		fr: "biscuine sultane de Salatiba",
		de: "Sultankaki aus Salatiba",
		es: "Biscuina sultana de salatiba"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_278.gif"
		}
	]
};
var js = {
	id: "js",
	name: {
		en: "Strawberry Guava",
		fr: "danzague",
		de: "Braune Sarrazinbohne",
		es: "Danzagua"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_279.gif"
		}
	]
};
var jt = {
	id: "jt",
	name: {
		en: "Strawberry Pear",
		fr: "jardinianes pourpres",
		de: "Purpurrote Jardinia",
		es: "Jardinianas purpuras"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_280.gif"
		}
	]
};
var ju = {
	id: "ju",
	name: {
		en: "Sugar Apple",
		fr: "meron",
		de: "Meron",
		es: "Merón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_281.gif"
		}
	]
};
var jv = {
	id: "jv",
	name: {
		en: "Soulebean",
		fr: "boursouflette",
		de: "Cerebrale Paprika",
		es: "Bursufleta"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_282.gif"
		}
	]
};
var jw = {
	id: "jw",
	name: {
		en: "Surinam Cherry",
		fr: "sagalte",
		de: "Miquelon Zuckerschote",
		es: "Sagalte"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_283.gif"
		}
	]
};
var jx = {
	id: "jx",
	name: {
		en: "Snappapple",
		fr: "bouton de ficheloutre",
		de: "Stachelknopf",
		es: "Botón de fichelutri"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_284.gif"
		}
	]
};
var jy = {
	id: "jy",
	name: {
		en: "Pepperberry",
		fr: "sauf-kinède naine",
		de: "Zwergen-Dionaea",
		es: "Salvakinda enana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_285.gif"
		}
	]
};
var jz = {
	id: "jz",
	name: {
		en: "Sweetsoap",
		fr: "coulemele",
		de: "Kulumele",
		es: "Culemelo"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_286.gif"
		}
	]
};
var ka = {
	id: "ka",
	name: {
		en: "Toasted Tamarind",
		fr: "gorank-siksik",
		de: "Gorank-Siksik",
		es: "Gorank-siksik"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_287.gif"
		}
	]
};
var kb = {
	id: "kb",
	name: {
		en: "Vanilla Pod",
		fr: "sugrelide docte de Burdelon",
		de: "Burdanesischer Sugrelid",
		es: "Sugrélida docte de burdelón"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_288.gif"
		}
	]
};
var kc = {
	id: "kc",
	name: {
		en: "Wampee",
		fr: "sok-rok",
		de: "Thailändischer Sok-Rok",
		es: "Sok-rok"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_289.gif"
		}
	]
};
var kd = {
	id: "kd",
	name: {
		en: "Water Apple",
		fr: "noizeuil",
		de: "Zyklopnuss",
		es: "Nuazil"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_290.gif"
		}
	]
};
var ke = {
	id: "ke",
	name: {
		en: "Wax Jambu",
		fr: "noix grasse de Loporez",
		de: "Ölige Loporezwalnuss",
		es: "Nuez grasa de Loreto"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_291.gif"
		}
	]
};
var kf = {
	id: "kf",
	name: {
		en: "Tenderlime",
		fr: "pomme lourde de sanctebuse",
		de: "Mandrabula",
		es: "Manzana de Arauco"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_292.gif"
		}
	]
};
var kg = {
	id: "kg",
	name: {
		en: "White Sapote",
		fr: "glurinette amollie",
		de: "Weiche Paulette",
		es: "Glurineta amolada"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_293.gif"
		}
	]
};
var kh = {
	id: "kh",
	name: {
		en: "Winged Bean",
		fr: "courge de gruyène",
		de: "Nobelzucchini",
		es: "Calabaza de guyana"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_294.gif"
		}
	]
};
var ki = {
	id: "ki",
	name: {
		en: "Wood Apple",
		fr: "pursière revancharde",
		de: "Flamingoschalotte",
		es: "Pitanga revanchera"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_295.gif"
		}
	]
};
var kj = {
	id: "kj",
	name: {
		en: "Monkeylime",
		fr: "tumerain",
		de: "Kikaki",
		es: "Tamarín"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_296.gif"
		}
	]
};
var kk = {
	id: "kk",
	name: {
		en: "Wild Mangosteen",
		fr: "bolte de Gosh",
		de: "Mungo-Rhabarber",
		es: "Babaco de Cartagena"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_297.gif"
		}
	]
};
var kl = {
	id: "kl",
	name: {
		en: "Sailor Berry",
		fr: "baie roses des Hydres",
		de: "Pferdejohannisbeere",
		es: "Baya rosa de hidras"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_298.gif"
		}
	]
};
var km = {
	id: "km",
	name: {
		en: "Swazilemon",
		fr: "estrangulites en suspension",
		de: "Metroidbeere",
		es: "Estrangulitas en suspensión"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_299.gif"
		}
	]
};
var kn = {
	id: "kn",
	name: {
		en: "Raspberry",
		fr: "pousse de barsouine",
		de: "Regenbogenpaprika",
		es: "Brote de barsuina"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_300.gif"
		}
	]
};
var ko = {
	id: "ko",
	name: {
		en: "Apple",
		fr: "caca",
		de: "Kacka",
		es: "Excremento"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_301.gif"
		}
	]
};
var snakeJson = {
	questa: questa,
	questb: questb,
	questc: questc,
	questd: questd,
	queste: queste,
	questf: questf,
	lot: lot,
	collec: collec,
	wdraft: wdraft,
	a: a,
	b: b,
	c: c,
	d: d,
	e: e,
	f: f,
	g: g,
	h: h,
	i: i,
	j: j,
	k: k,
	l: l,
	m: m,
	n: n,
	o: o,
	p: p,
	q: q,
	r: r,
	s: s,
	t: t,
	u: u,
	v: v,
	w: w,
	x: x,
	y: y,
	z: z,
	aa: aa,
	ab: ab,
	ac: ac,
	ad: ad,
	ae: ae,
	af: af,
	ag: ag,
	ah: ah,
	ai: ai,
	aj: aj,
	ak: ak,
	al: al,
	am: am,
	an: an,
	ao: ao,
	ap: ap,
	aq: aq,
	ar: ar,
	as: as,
	at: at,
	au: au,
	av: av,
	aw: aw,
	ax: ax,
	ay: ay,
	az: az,
	ba: ba,
	bb: bb,
	bc: bc,
	bd: bd,
	be: be,
	bf: bf,
	bg: bg,
	bh: bh,
	bi: bi,
	bj: bj,
	bk: bk,
	bl: bl,
	bm: bm,
	bn: bn,
	bo: bo,
	bp: bp,
	bq: bq,
	br: br,
	bs: bs,
	bt: bt,
	bu: bu,
	bv: bv,
	bw: bw,
	bx: bx,
	by: by,
	bz: bz,
	ca: ca,
	cb: cb,
	cc: cc,
	cd: cd,
	ce: ce,
	cf: cf,
	cg: cg,
	ch: ch,
	ci: ci,
	cj: cj,
	ck: ck,
	cl: cl,
	cm: cm,
	cn: cn,
	co: co,
	cp: cp,
	cq: cq,
	cr: cr,
	cs: cs,
	ct: ct,
	cu: cu,
	cv: cv,
	cw: cw,
	cx: cx,
	cy: cy,
	cz: cz,
	da: da,
	db: db,
	dc: dc,
	dd: dd,
	de: de,
	df: df,
	dg: dg,
	dh: dh,
	di: di,
	dj: dj,
	dk: dk,
	dl: dl,
	dm: dm,
	dn: dn,
	"do": {
	id: "do",
	name: {
		en: "Calamapple",
		fr: "tazerade geminite",
		de: "Riesencasheena",
		es: "Tazerada geminita"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_119.gif"
		}
	]
},
	dp: dp,
	dq: dq,
	dr: dr,
	ds: ds,
	dt: dt,
	du: du,
	dv: dv,
	dw: dw,
	dx: dx,
	dy: dy,
	dz: dz,
	ea: ea,
	eb: eb,
	ec: ec,
	ed: ed,
	ee: ee,
	ef: ef,
	eg: eg,
	eh: eh,
	ei: ei,
	ej: ej,
	ek: ek,
	el: el,
	em: em,
	en: en,
	eo: eo,
	ep: ep,
	eq: eq,
	er: er,
	es: es,
	et: et,
	eu: eu,
	ev: ev,
	ew: ew,
	ex: ex,
	ey: ey,
	ez: ez,
	fa: fa,
	fb: fb,
	fc: fc,
	fd: fd,
	fe: fe,
	ff: ff,
	fg: fg,
	fh: fh,
	fi: fi,
	fj: fj,
	fk: fk,
	fl: fl,
	fm: fm,
	fn: fn,
	fo: fo,
	fp: fp,
	fq: fq,
	fr: fr,
	fs: fs,
	ft: ft,
	fu: fu,
	fv: fv,
	fw: fw,
	fx: fx,
	fy: fy,
	fz: fz,
	ga: ga,
	gb: gb,
	gc: gc,
	gd: gd,
	ge: ge,
	gf: gf,
	gg: gg$1,
	gh: gh,
	gi: gi,
	gj: gj,
	gk: gk,
	gl: gl,
	gm: gm,
	gn: gn,
	go: go,
	gp: gp,
	gq: gq,
	gr: gr,
	gs: gs,
	gt: gt,
	gu: gu,
	gv: gv,
	gw: gw,
	gx: gx,
	gy: gy,
	gz: gz,
	ha: ha,
	hb: hb,
	hc: hc,
	hd: hd,
	he: he,
	hf: hf,
	hg: hg,
	hh: hh,
	hi: hi,
	hj: hj,
	hk: hk,
	hl: hl,
	hm: hm,
	hn: hn,
	ho: ho,
	hp: hp,
	hq: hq,
	hr: hr,
	hs: hs,
	ht: ht,
	hu: hu,
	hv: hv,
	hw: hw,
	hx: hx,
	hy: hy,
	hz: hz,
	ia: ia,
	ib: ib,
	ic: ic,
	id: id,
	ie: ie,
	"if": {
	id: "if",
	name: {
		en: "Peach Husk",
		fr: "grenoule",
		de: "Dangrenschote",
		es: "Grenula"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_240.gif"
		}
	]
},
	ig: ig,
	ih: ih,
	ii: ii,
	ij: ij,
	ik: ik,
	il: il,
	im: im,
	"in": {
	id: "in",
	name: {
		en: "Peripino",
		fr: "tenebiges feutrées",
		de: "Pustelige Strauchaprikose",
		es: "Tenebigas rotuladas"
	},
	rare: 0,
	unlocks: [
		{
			count: 500,
			points: 1,
			icon: "fruits_248.gif"
		}
	]
},
	io: io,
	ip: ip,
	iq: iq,
	ir: ir,
	is: is,
	it: it,
	iu: iu,
	iv: iv,
	iw: iw,
	ix: ix,
	iy: iy,
	iz: iz,
	ja: ja,
	jb: jb,
	jc: jc,
	jd: jd,
	je: je,
	jf: jf,
	jg: jg,
	jh: jh,
	ji: ji,
	jj: jj,
	jk: jk,
	jl: jl,
	jm: jm,
	jn: jn,
	jo: jo,
	jp: jp,
	jq: jq,
	jr: jr,
	js: js,
	jt: jt,
	ju: ju,
	jv: jv,
	jw: jw,
	jx: jx,
	jy: jy,
	jz: jz,
	ka: ka,
	kb: kb,
	kc: kc,
	kd: kd,
	ke: ke,
	kf: kf,
	kg: kg,
	kh: kh,
	ki: ki,
	kj: kj,
	kk: kk,
	kl: kl,
	km: km,
	kn: kn,
	ko: ko
};

var wapp = {
	id: "wapp",
	name: {
		en: "Mobile Game",
		fr: "Jeu mobile",
		de: "Mobile Game",
		es: "Partida en móvil"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/icons/icon_mobile.png"
		}
	]
};
var wgames = {
	id: "wgames",
	name: {
		en: "Games played",
		fr: "Parties jouées",
		de: "Games played",
		es: "Partidas jugadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 2
		},
		{
			count: 100,
			points: 3
		},
		{
			count: 1000,
			points: 10
		}
	]
};
var wquests = {
	id: "wquests",
	name: {
		en: "Quests accomplished",
		fr: "Quêtes accomplies",
		de: "Quests accomplished",
		es: "Misiones cumplidas"
	},
	rare: 0,
	unlocks: [
		{
			count: 10,
			points: 2,
			icon: "/img/icons/icon_quest.png"
		},
		{
			count: 100,
			points: 5,
			title: {
				en: "Quest Master",
				fr: "Maître des quêtes",
				de: "Quest Master",
				es: "Maestro de las misiones"
			}
		},
		{
			count: 1000,
			points: 10,
			title: {
				en: "The omnipresent",
				fr: "Sitôt dit sitôt fait",
				de: "The omnipresent",
				es: "Dicho y hecho"
			}
		}
	]
};
var wwords = {
	id: "wwords",
	name: {
		en: "Words played",
		fr: "Mots posés",
		de: "Words played",
		es: "Palabras colocadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 50,
			points: 1,
			title: {
				en: "Lexicologist",
				fr: "Poseur de mots",
				de: "Lexicologist",
				es: "Don Armando Palabras"
			}
		},
		{
			count: 500,
			points: 3,
			title: {
				en: "Etymologist",
				fr: "Remplisseur de plateau",
				de: "Etymologist",
				es: "Palabrero"
			}
		},
		{
			count: 1000,
			points: 5,
			title: {
				en: "Linguist",
				fr: "Mot-nomaniaque",
				de: "Linguist",
				es: "Palabra de líder"
			}
		},
		{
			count: 10000,
			points: 10,
			title: {
				en: "The dictionary incarnate",
				fr: "Encyclopedia Universalis",
				de: "The dictionary incarnate",
				es: "Encyclopedia Universalis"
			}
		}
	]
};
var wvictories = {
	id: "wvictories",
	name: {
		en: "Games won",
		fr: "Parties gagnées",
		de: "Games won",
		es: "Partidas ganadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 2,
			title: {
				en: "Victory is mine!",
				fr: "La victoire est pour moi",
				de: "Victory is mine!",
				es: "La victoria es mía"
			}
		},
		{
			count: 100,
			points: 5,
			title: {
				en: "Letter master",
				fr: "Maître des lettres",
				de: "Letter master",
				es: "Voz fuerte"
			}
		},
		{
			count: 1000,
			points: 10,
			title: {
				en: "Wordsmith",
				fr: "Champion des mots",
				de: "Wordsmith",
				es: "Palabras que matan"
			}
		}
	]
};
var w_Recycle = {
	id: "w_Recycle",
	name: {
		en: "Recycles used",
		fr: "Recyclages utilisés",
		de: "Recycles used",
		es: "Reciclajes utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_recycle.png"
		}
	]
};
var w_Joker = {
	id: "w_Joker",
	name: {
		en: "Jokers used",
		fr: "Jokers utilisés",
		de: "Jokers used",
		es: "Comodines utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_joker.png"
		}
	]
};
var w_DragonPunch = {
	id: "w_DragonPunch",
	name: {
		en: "Vortexes used",
		fr: "Vortex utilisés",
		de: "Vortexes used",
		es: "Vórtices utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_dragonpunch.png"
		}
	]
};
var w_Bomb = {
	id: "w_Bomb",
	name: {
		en: "Bombs used",
		fr: "Bombes utilisés",
		de: "Bombs used",
		es: "Bombas utilizadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_bomb.png"
		}
	]
};
var w_Double = {
	id: "w_Double",
	name: {
		en: "Two Timings used",
		fr: "x2 utilisés",
		de: "Two Timings used",
		es: "x2 utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_double.png"
		}
	]
};
var w_LootView = {
	id: "w_LootView",
	name: {
		en: "Visions used",
		fr: "Visions utilisés",
		de: "Visions used",
		es: "Visiones utilizadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_lootview.png"
		}
	]
};
var w_Thief = {
	id: "w_Thief",
	name: {
		en: "Thieves used",
		fr: "Trocs utilisés",
		de: "Thieves used",
		es: "Cambiazos utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_thief.png"
		}
	]
};
var w_Tornado = {
	id: "w_Tornado",
	name: {
		en: "Hurricanes used",
		fr: "Vents sacrés utilisés",
		de: "Hurricanes used",
		es: "Vientos sagrados utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_tornado.png"
		}
	]
};
var w_Mine = {
	id: "w_Mine",
	name: {
		en: "Mines used",
		fr: "Mines utilisés",
		de: "Mines used",
		es: "Minas utilizadas"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_mine.png"
		}
	]
};
var w_TrapBonusPoints = {
	id: "w_TrapBonusPoints",
	name: {
		en: "Combos used",
		fr: "Combos utilisés",
		de: "Combos used",
		es: "Combos utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_trapbonuspoints.png"
		}
	]
};
var w_letter_a = {
	id: "w_letter_a",
	name: {
		en: "A used",
		fr: "A utilisés",
		de: "A used",
		es: "A utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_a.png"
		}
	]
};
var w_letter_b = {
	id: "w_letter_b",
	name: {
		en: "B used",
		fr: "B utilisés",
		de: "B used",
		es: "B utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_b.png"
		}
	]
};
var w_letter_c = {
	id: "w_letter_c",
	name: {
		en: "C used",
		fr: "C utilisés",
		de: "C used",
		es: "C utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_c.png"
		}
	]
};
var w_letter_d = {
	id: "w_letter_d",
	name: {
		en: "D used",
		fr: "D utilisés",
		de: "D used",
		es: "D utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_d.png"
		}
	]
};
var w_letter_e = {
	id: "w_letter_e",
	name: {
		en: "E used",
		fr: "E utilisés",
		de: "E used",
		es: "E utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_e.png"
		}
	]
};
var w_letter_f = {
	id: "w_letter_f",
	name: {
		en: "F used",
		fr: "F utilisés",
		de: "F used",
		es: "F utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_f.png"
		}
	]
};
var w_letter_g = {
	id: "w_letter_g",
	name: {
		en: "G used",
		fr: "G utilisés",
		de: "G used",
		es: "G utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_g.png"
		}
	]
};
var w_letter_h = {
	id: "w_letter_h",
	name: {
		en: "H used",
		fr: "H utilisés",
		de: "H used",
		es: "H utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_h.png"
		}
	]
};
var w_letter_i = {
	id: "w_letter_i",
	name: {
		en: "I used",
		fr: "I utilisés",
		de: "I used",
		es: "I utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_i.png"
		}
	]
};
var w_letter_j = {
	id: "w_letter_j",
	name: {
		en: "J used",
		fr: "J utilisés",
		de: "J used",
		es: "J utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_j.png"
		}
	]
};
var w_letter_k = {
	id: "w_letter_k",
	name: {
		en: "K used",
		fr: "K utilisés",
		de: "K used",
		es: "K utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_k.png"
		}
	]
};
var w_letter_l = {
	id: "w_letter_l",
	name: {
		en: "L used",
		fr: "L utilisés",
		de: "L used",
		es: "L utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_l.png"
		}
	]
};
var w_letter_m = {
	id: "w_letter_m",
	name: {
		en: "M used",
		fr: "M utilisés",
		de: "M used",
		es: "M utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_m.png"
		}
	]
};
var w_letter_n = {
	id: "w_letter_n",
	name: {
		en: "N used",
		fr: "N utilisés",
		de: "N used",
		es: "N utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_n.png"
		}
	]
};
var w_letter_o = {
	id: "w_letter_o",
	name: {
		en: "O used",
		fr: "O utilisés",
		de: "O used",
		es: "O utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_o.png"
		}
	]
};
var w_letter_p = {
	id: "w_letter_p",
	name: {
		en: "P used",
		fr: "P utilisés",
		de: "P used",
		es: "P utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_p.png"
		}
	]
};
var w_letter_q = {
	id: "w_letter_q",
	name: {
		en: "Q used",
		fr: "Q utilisés",
		de: "Q used",
		es: "Q utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_q.png"
		}
	]
};
var w_letter_r = {
	id: "w_letter_r",
	name: {
		en: "R used",
		fr: "R utilisés",
		de: "R used",
		es: "R utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_r.png"
		}
	]
};
var w_letter_s = {
	id: "w_letter_s",
	name: {
		en: "S used",
		fr: "S utilisés",
		de: "S used",
		es: "S utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_s.png"
		}
	]
};
var w_letter_t = {
	id: "w_letter_t",
	name: {
		en: "T used",
		fr: "T utilisés",
		de: "T used",
		es: "T utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_t.png"
		}
	]
};
var w_letter_u = {
	id: "w_letter_u",
	name: {
		en: "U used",
		fr: "U utilisés",
		de: "U used",
		es: "U utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_u.png"
		}
	]
};
var w_letter_v = {
	id: "w_letter_v",
	name: {
		en: "V used",
		fr: "V utilisés",
		de: "V used",
		es: "V utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_v.png"
		}
	]
};
var w_letter_w = {
	id: "w_letter_w",
	name: {
		en: "W used",
		fr: "W utilisés",
		de: "W used",
		es: "W utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_w.png"
		}
	]
};
var w_letter_x = {
	id: "w_letter_x",
	name: {
		en: "X used",
		fr: "X utilisés",
		de: "X used",
		es: "X utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_x.png"
		}
	]
};
var w_letter_y = {
	id: "w_letter_y",
	name: {
		en: "Y used",
		fr: "Y utilisés",
		de: "Y used",
		es: "Y utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_y.png"
		}
	]
};
var w_letter_z = {
	id: "w_letter_z",
	name: {
		en: "Z used",
		fr: "Z utilisés",
		de: "Z used",
		es: "Z utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_z.png"
		}
	]
};
var streetwriterJson = {
	wapp: wapp,
	wgames: wgames,
	wquests: wquests,
	wwords: wwords,
	wvictories: wvictories,
	w_Recycle: w_Recycle,
	w_Joker: w_Joker,
	w_DragonPunch: w_DragonPunch,
	w_Bomb: w_Bomb,
	w_Double: w_Double,
	w_LootView: w_LootView,
	w_Thief: w_Thief,
	w_Tornado: w_Tornado,
	w_Mine: w_Mine,
	w_TrapBonusPoints: w_TrapBonusPoints,
	w_letter_a: w_letter_a,
	w_letter_b: w_letter_b,
	w_letter_c: w_letter_c,
	w_letter_d: w_letter_d,
	w_letter_e: w_letter_e,
	w_letter_f: w_letter_f,
	w_letter_g: w_letter_g,
	w_letter_h: w_letter_h,
	w_letter_i: w_letter_i,
	w_letter_j: w_letter_j,
	w_letter_k: w_letter_k,
	w_letter_l: w_letter_l,
	w_letter_m: w_letter_m,
	w_letter_n: w_letter_n,
	w_letter_o: w_letter_o,
	w_letter_p: w_letter_p,
	w_letter_q: w_letter_q,
	w_letter_r: w_letter_r,
	w_letter_s: w_letter_s,
	w_letter_t: w_letter_t,
	w_letter_u: w_letter_u,
	w_letter_v: w_letter_v,
	w_letter_w: w_letter_w,
	w_letter_x: w_letter_x,
	w_letter_y: w_letter_y,
	w_letter_z: w_letter_z,
	"w_letter_ñ": {
	id: "w_letter_ñ",
	name: {
		en: "Ñ used",
		fr: "Ñ utilisés",
		de: "Ñ used",
		es: "Ñ utilizados"
	},
	rare: 0,
	unlocks: [
		{
			count: 100,
			points: 2,
			icon: "/img/icons/icon_ene.png"
		}
	]
}
};

var mega = {
	id: "mega",
	name: {
		en: "Champion Megaquiz",
		fr: "Champion Megaquiz",
		de: "Champion Megaquiz",
		es: "Champion Megaquiz"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "boxe_01.png",
			description: {
				en: "Plus de 3 perfects en salon Megaquiz",
				fr: "Plus de 3 perfects en salon Megaquiz",
				de: "Plus de 3 perfects en salon Megaquiz",
				es: "Plus de 3 perfects en salon Megaquiz"
			}
		}
	],
	description: {
		en: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Megaquiz.",
		fr: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Megaquiz.",
		de: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Megaquiz.",
		es: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Megaquiz."
	}
};
var cult = {
	id: "cult",
	name: {
		en: "Champion Culture",
		fr: "Champion Culture",
		de: "Champion Culture",
		es: "Champion Culture"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "boxe_02.png",
			description: {
				en: "Plus de 3 perfects en salon Culture",
				fr: "Plus de 3 perfects en salon Culture",
				de: "Plus de 3 perfects en salon Culture",
				es: "Plus de 3 perfects en salon Culture"
			}
		}
	],
	description: {
		en: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Culture.",
		fr: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Culture.",
		de: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Culture.",
		es: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Culture."
	}
};
var spect = {
	id: "spect",
	name: {
		en: "Champion Spectacle",
		fr: "Champion Spectacle",
		de: "Champion Spectacle",
		es: "Champion Spectacle"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "boxe_03.png",
			description: {
				en: "Plus de 3 perfects en salon Spectacle",
				fr: "Plus de 3 perfects en salon Spectacle",
				de: "Plus de 3 perfects en salon Spectacle",
				es: "Plus de 3 perfects en salon Spectacle"
			}
		}
	],
	description: {
		en: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Spectacle.",
		fr: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Spectacle.",
		de: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Spectacle.",
		es: "Ce petit gant de boxe s'obtient en réalisant 3 perfects dans le salon Spectacle."
	}
};
var mega2 = {
	id: "mega2",
	name: {
		en: "Super Champion Megaquiz",
		fr: "Super Champion Megaquiz",
		de: "Super Champion Megaquiz",
		es: "Super Champion Megaquiz"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 15,
			icon: "big_boxe_01.png"
		}
	],
	description: {
		en: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Megaquiz.",
		fr: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Megaquiz.",
		de: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Megaquiz.",
		es: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Megaquiz."
	}
};
var cult2 = {
	id: "cult2",
	name: {
		en: "Super Champion Culture",
		fr: "Super Champion Culture",
		de: "Super Champion Culture",
		es: "Super Champion Culture"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 15,
			icon: "big_boxe_02.png"
		}
	],
	description: {
		en: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Culture.",
		fr: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Culture.",
		de: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Culture.",
		es: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Culture."
	}
};
var spect2 = {
	id: "spect2",
	name: {
		en: "Super Champion Spectacle",
		fr: "Super Champion Spectacle",
		de: "Super Champion Spectacle",
		es: "Super Champion Spectacle"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 15,
			icon: "big_boxe_03.png"
		}
	],
	description: {
		en: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Spectacle.",
		fr: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Spectacle.",
		de: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Spectacle.",
		es: "Ce gros gant de boxe s'obtient en réalisant 10 perfects dans le salon Spectacle."
	}
};
var star = {
	id: "star",
	name: {
		en: "Vedette",
		fr: "Vedette",
		de: "Vedette",
		es: "Vedette"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 1,
			title: {
				en: "Vedette",
				fr: "Vedette",
				de: "Vedette",
				es: "Vedette"
			}
		}
	],
	description: {
		en: "Vous êtes la vedette de Studio Quiz, au sommet de la Gloire !",
		fr: "Vous êtes la vedette de Studio Quiz, au sommet de la Gloire !",
		de: "Vous êtes la vedette de Studio Quiz, au sommet de la Gloire !",
		es: "Vous êtes la vedette de Studio Quiz, au sommet de la Gloire !"
	}
};
var fayo = {
	id: "fayo",
	name: {
		en: "Fayot Suprême",
		fr: "Fayot Suprême",
		de: "Fayot Suprême",
		es: "Fayot Suprême"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 1,
			title: {
				en: "Fayot Suprême",
				fr: "Fayot Suprême",
				de: "Fayot Suprême",
				es: "Fayot Suprême"
			}
		}
	],
	description: {
		en: "Si vous atteignez un jour la première place du Podium de la Gloire, vous pourrez converser en privé avec James Norray en personne sur Twinoid, dans la mesure de sa disponibilité.\r\nAttention ! Si vous perdez votre première place, vous ne serez plus digne de figurer dans la liste d'ami de James Norray, et il refusera de continuer à discuter avec vous.",
		fr: "Si vous atteignez un jour la première place du Podium de la Gloire, vous pourrez converser en privé avec James Norray en personne sur Twinoid, dans la mesure de sa disponibilité.\r\nAttention ! Si vous perdez votre première place, vous ne serez plus digne de figurer dans la liste d'ami de James Norray, et il refusera de continuer à discuter avec vous.",
		de: "Si vous atteignez un jour la première place du Podium de la Gloire, vous pourrez converser en privé avec James Norray en personne sur Twinoid, dans la mesure de sa disponibilité.\r\nAttention ! Si vous perdez votre première place, vous ne serez plus digne de figurer dans la liste d'ami de James Norray, et il refusera de continuer à discuter avec vous.",
		es: "Si vous atteignez un jour la première place du Podium de la Gloire, vous pourrez converser en privé avec James Norray en personne sur Twinoid, dans la mesure de sa disponibilité.\r\nAttention ! Si vous perdez votre première place, vous ne serez plus digne de figurer dans la liste d'ami de James Norray, et il refusera de continuer à discuter avec vous."
	}
};
var goldb = {
	id: "goldb",
	name: {
		en: "Golden Glove",
		fr: "Golden Glove",
		de: "Golden Glove",
		es: "Golden Glove"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "golden_glove.gif"
		}
	],
	description: {
		en: "un trophée en or massif. Ne tapez pas trop fort avec.",
		fr: "un trophée en or massif. Ne tapez pas trop fort avec.",
		de: "un trophée en or massif. Ne tapez pas trop fort avec.",
		es: "un trophée en or massif. Ne tapez pas trop fort avec."
	}
};
var goldm = {
	id: "goldm",
	name: {
		en: "Golden Glove",
		fr: "Golden Glove",
		de: "Golden Glove",
		es: "Golden Glove"
	},
	rare: 0,
	hidden: true,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "golden_glove_mini.png"
		}
	],
	description: {
		en: "un petit trophée en or massif. Mais ne tapez pas trop fort avec non plus.",
		fr: "un petit trophée en or massif. Mais ne tapez pas trop fort avec non plus.",
		de: "un petit trophée en or massif. Mais ne tapez pas trop fort avec non plus.",
		es: "un petit trophée en or massif. Mais ne tapez pas trop fort avec non plus."
	}
};
var vip = {
	id: "vip",
	name: {
		en: "VIP",
		fr: "VIP",
		de: "VIP",
		es: "VIP"
	},
	rare: 1,
	unlocks: [
		{
			count: 10,
			points: 1,
			title: {
				en: "VIP",
				fr: "VIP",
				de: "VIP",
				es: "VIP"
			}
		}
	],
	description: {
		en: "En accèdant aux 5 premières place du Classement de Gloire, vous êtes devenu une Very Importante Personne pour l'éternité",
		fr: "En accèdant aux 5 premières place du Classement de Gloire, vous êtes devenu une Very Importante Personne pour l'éternité",
		de: "En accèdant aux 5 premières place du Classement de Gloire, vous êtes devenu une Very Importante Personne pour l'éternité",
		es: "En accèdant aux 5 premières place du Classement de Gloire, vous êtes devenu une Very Importante Personne pour l'éternité"
	}
};
var micror = {
	id: "micror",
	name: {
		en: "Micro d'Or VIP",
		fr: "Micro d'Or VIP",
		de: "Micro d'Or VIP",
		es: "Micro d'Or VIP"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "micro_vip.png"
		}
	],
	description: {
		en: "Vous voilà VIP. Ca, c'est le micro doré super classe qui va avec.",
		fr: "Vous voilà VIP. Ca, c'est le micro doré super classe qui va avec.",
		de: "Vous voilà VIP. Ca, c'est le micro doré super classe qui va avec.",
		es: "Vous voilà VIP. Ca, c'est le micro doré super classe qui va avec."
	}
};
var scienc = {
	id: "scienc",
	name: {
		en: "Champion du premier Quiz Spécial",
		fr: "Champion du premier Quiz Spécial",
		de: "Champion du premier Quiz Spécial",
		es: "Champion du premier Quiz Spécial"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "science_off.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var sjames = {
	id: "sjames",
	name: {
		en: "Smiley James Norray",
		fr: "Smiley James Norray",
		de: "Smiley James Norray",
		es: "Smiley James Norray"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "smiley_james.png"
		}
	],
	description: {
		en: "Vous avez remporté ce smiley lors d'une interro surprise de James Norray.",
		fr: "Vous avez remporté ce smiley lors d'une interro surprise de James Norray.",
		de: "Vous avez remporté ce smiley lors d'une interro surprise de James Norray.",
		es: "Vous avez remporté ce smiley lors d'une interro surprise de James Norray."
	}
};
var smarc = {
	id: "smarc",
	name: {
		en: "Smiley Marc Mazotti",
		fr: "Smiley Marc Mazotti",
		de: "Smiley Marc Mazotti",
		es: "Smiley Marc Mazotti"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "smiley_marc.png"
		}
	],
	description: {
		en: "Vous avez remporté ce smiley lors d'un quiz spécial présenté par Marc Mazzoti.",
		fr: "Vous avez remporté ce smiley lors d'un quiz spécial présenté par Marc Mazzoti.",
		de: "Vous avez remporté ce smiley lors d'un quiz spécial présenté par Marc Mazzoti.",
		es: "Vous avez remporté ce smiley lors d'un quiz spécial présenté par Marc Mazzoti."
	}
};
var scharl = {
	id: "scharl",
	name: {
		en: "Smiley Charlotte",
		fr: "Smiley Charlotte",
		de: "Smiley Charlotte",
		es: "Smiley Charlotte"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "smiley_charlotte.png"
		}
	],
	description: {
		en: "Vous avez remporté ce smiley lors d'un goûter organisé par Charlotte.",
		fr: "Vous avez remporté ce smiley lors d'un goûter organisé par Charlotte.",
		de: "Vous avez remporté ce smiley lors d'un goûter organisé par Charlotte.",
		es: "Vous avez remporté ce smiley lors d'un goûter organisé par Charlotte."
	}
};
var cervel = {
	id: "cervel",
	name: {
		en: "Cervelle",
		fr: "Cervelle",
		de: "Cervelle",
		es: "Cervelle"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_cervelle.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var cinema = {
	id: "cinema",
	name: {
		en: "Cinema",
		fr: "Cinema",
		de: "Cinema",
		es: "Cinema"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_cinema.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var crayon = {
	id: "crayon",
	name: {
		en: "Crayon ",
		fr: "Crayon ",
		de: "Crayon ",
		es: "Crayon "
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_crayon.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var cygne = {
	id: "cygne",
	name: {
		en: "Cygne",
		fr: "Cygne",
		de: "Cygne",
		es: "Cygne"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_cygne.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var elepha = {
	id: "elepha",
	name: {
		en: "Elephant",
		fr: "Elephant",
		de: "Elephant",
		es: "Elephant"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_elephant.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var livref = {
	id: "livref",
	name: {
		en: "Livre fermé",
		fr: "Livre fermé",
		de: "Livre fermé",
		es: "Livre fermé"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_livreferme.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var livreo = {
	id: "livreo",
	name: {
		en: "Livre ouvert",
		fr: "Livre ouvert",
		de: "Livre ouvert",
		es: "Livre ouvert"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_livreouvert.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var lunett = {
	id: "lunett",
	name: {
		en: "Lunettes",
		fr: "Lunettes",
		de: "Lunettes",
		es: "Lunettes"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_lunettes.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var manett = {
	id: "manett",
	name: {
		en: "Manette",
		fr: "Manette",
		de: "Manette",
		es: "Manette"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_manette.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var mask = {
	id: "mask",
	name: {
		en: "Masque",
		fr: "Masque",
		de: "Masque",
		es: "Masque"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_mask.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var micro = {
	id: "micro",
	name: {
		en: "Micro",
		fr: "Micro",
		de: "Micro",
		es: "Micro"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_micro.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var plume = {
	id: "plume",
	name: {
		en: "Plume",
		fr: "Plume",
		de: "Plume",
		es: "Plume"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_plume.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var pomme$1 = {
	id: "pomme",
	name: {
		en: "Pomme",
		fr: "Pomme",
		de: "Pomme",
		es: "Pomme"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_pomme.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var rouage = {
	id: "rouage",
	name: {
		en: "Rouages",
		fr: "Rouages",
		de: "Rouages",
		es: "Rouages"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_rouages.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var souris = {
	id: "souris",
	name: {
		en: "Souris",
		fr: "Souris",
		de: "Souris",
		es: "Souris"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_souris.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var tele = {
	id: "tele",
	name: {
		en: "Télé",
		fr: "Télé",
		de: "Télé",
		es: "Télé"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_tele.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var temple = {
	id: "temple",
	name: {
		en: "Temple",
		fr: "Temple",
		de: "Temple",
		es: "Temple"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "rwrd_temple.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var ampoff = {
	id: "ampoff",
	name: {
		en: "Ampoule éteinte",
		fr: "Ampoule éteinte",
		de: "Ampoule éteinte",
		es: "Ampoule éteinte"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "science_off.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var ampon = {
	id: "ampon",
	name: {
		en: "Ampoule allumée",
		fr: "Ampoule allumée",
		de: "Ampoule allumée",
		es: "Ampoule allumée"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "science_on.png"
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		fr: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		de: "Vous avez remporté ce trophée lors d'un quiz spécial.",
		es: "Vous avez remporté ce trophée lors d'un quiz spécial."
	}
};
var pink = {
	id: "pink",
	name: {
		en: "Gant de boxe de Charlotte",
		fr: "Gant de boxe de Charlotte",
		de: "Gant de boxe de Charlotte",
		es: "Gant de boxe de Charlotte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "gant_charlotte.png"
		}
	],
	description: {
		en: "Gant unique personnalisé par Charlotte en personne. Elle vous le prêtera à chaque fois que vous gagnerez 160 points dans le salon Spectacle",
		fr: "Gant unique personnalisé par Charlotte en personne. Elle vous le prêtera à chaque fois que vous gagnerez 160 points dans le salon Spectacle",
		de: "Gant unique personnalisé par Charlotte en personne. Elle vous le prêtera à chaque fois que vous gagnerez 160 points dans le salon Spectacle",
		es: "Gant unique personnalisé par Charlotte en personne. Elle vous le prêtera à chaque fois que vous gagnerez 160 points dans le salon Spectacle"
	}
};
var ane = {
	id: "ane",
	name: {
		en: "Bonnet d'âne",
		fr: "Bonnet d'âne",
		de: "Bonnet d'âne",
		es: "Bonnet d'âne"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "ane.png"
		}
	]
};
var smurf = {
	id: "smurf",
	name: {
		en: "Bonnet d'âne bricolé par Charlotte",
		fr: "Bonnet d'âne bricolé par Charlotte",
		de: "Bonnet d'âne bricolé par Charlotte",
		es: "Bonnet d'âne bricolé par Charlotte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "smurf.png"
		}
	]
};
var oreil = {
	id: "oreil",
	name: {
		en: "Oreille d'un bonnet d'âne",
		fr: "Oreille d'un bonnet d'âne",
		de: "Oreille d'un bonnet d'âne",
		es: "Oreille d'un bonnet d'âne"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "oreille.png"
		}
	]
};
var starm1 = {
	id: "starm1",
	name: {
		en: "Champion quiz spécial Motion Twin",
		fr: "Champion quiz spécial Motion Twin",
		de: "Champion quiz spécial Motion Twin",
		es: "Champion quiz spécial Motion Twin"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "star_mt_big.png"
		}
	],
	description: {
		en: "Bravo !",
		fr: "Bravo !",
		de: "Bravo !",
		es: "Bravo !"
	}
};
var starmt = {
	id: "starmt",
	name: {
		en: "Champion quiz spécial Motion Twin",
		fr: "Champion quiz spécial Motion Twin",
		de: "Champion quiz spécial Motion Twin",
		es: "Champion quiz spécial Motion Twin"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "star_mt.png"
		}
	],
	description: {
		en: "Bravo !",
		fr: "Bravo !",
		de: "Bravo !",
		es: "Bravo !"
	}
};
var footb = {
	id: "footb",
	name: {
		en: "Ballon de foot",
		fr: "Ballon de foot",
		de: "Ballon de foot",
		es: "Ballon de foot"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "sport_soccer.png",
			title: {
				en: "Champion Marathon Sport",
				fr: "Champion Marathon Sport",
				de: "Champion Marathon Sport",
				es: "Champion Marathon Sport"
			}
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		fr: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		de: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		es: "Vous avez remporté ce trophée lors d'un quiz Marathon."
	}
};
var baskt = {
	id: "baskt",
	name: {
		en: "Ballon de basket",
		fr: "Ballon de basket",
		de: "Ballon de basket",
		es: "Ballon de basket"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "sport_basketball.png",
			title: {
				en: "Champion Marathon Sport",
				fr: "Champion Marathon Sport",
				de: "Champion Marathon Sport",
				es: "Champion Marathon Sport"
			}
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		fr: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		de: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		es: "Vous avez remporté ce trophée lors d'un quiz Marathon."
	}
};
var rugby = {
	id: "rugby",
	name: {
		en: "Ballon de rugby",
		fr: "Ballon de rugby",
		de: "Ballon de rugby",
		es: "Ballon de rugby"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "sport_football.png",
			title: {
				en: "Champion Marathon Sport",
				fr: "Champion Marathon Sport",
				de: "Champion Marathon Sport",
				es: "Champion Marathon Sport"
			}
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		fr: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		de: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		es: "Vous avez remporté ce trophée lors d'un quiz Marathon."
	}
};
var billa = {
	id: "billa",
	name: {
		en: "Boule de billard",
		fr: "Boule de billard",
		de: "Boule de billard",
		es: "Boule de billard"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "sport_8ball.png",
			title: {
				en: "Champion Marathon Sport",
				fr: "Champion Marathon Sport",
				de: "Champion Marathon Sport",
				es: "Champion Marathon Sport"
			}
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		fr: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		de: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		es: "Vous avez remporté ce trophée lors d'un quiz Marathon."
	}
};
var tennis$1 = {
	id: "tennis",
	name: {
		en: "Balle de tennis",
		fr: "Balle de tennis",
		de: "Balle de tennis",
		es: "Balle de tennis"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "sport_tennis.png",
			title: {
				en: "Champion Marathon Sport",
				fr: "Champion Marathon Sport",
				de: "Champion Marathon Sport",
				es: "Champion Marathon Sport"
			}
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		fr: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		de: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		es: "Vous avez remporté ce trophée lors d'un quiz Marathon."
	}
};
var golf = {
	id: "golf",
	name: {
		en: "Balle de golf",
		fr: "Balle de golf",
		de: "Balle de golf",
		es: "Balle de golf"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "sport_golf.png",
			title: {
				en: "Champion Marathon Sport",
				fr: "Champion Marathon Sport",
				de: "Champion Marathon Sport",
				es: "Champion Marathon Sport"
			}
		}
	],
	description: {
		en: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		fr: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		de: "Vous avez remporté ce trophée lors d'un quiz Marathon.",
		es: "Vous avez remporté ce trophée lors d'un quiz Marathon."
	}
};
var belt1 = {
	id: "belt1",
	name: {
		en: "Ceinture blanche-jaune",
		fr: "Ceinture blanche-jaune",
		de: "Ceinture blanche-jaune",
		es: "Ceinture blanche-jaune"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt1.png"
		}
	],
	description: {
		en: "Vous êtes ceinture blanche-jaune sur 3 salons permanents !",
		fr: "Vous êtes ceinture blanche-jaune sur 3 salons permanents !",
		de: "Vous êtes ceinture blanche-jaune sur 3 salons permanents !",
		es: "Vous êtes ceinture blanche-jaune sur 3 salons permanents !"
	}
};
var belt2 = {
	id: "belt2",
	name: {
		en: "Ceinture jaune",
		fr: "Ceinture jaune",
		de: "Ceinture jaune",
		es: "Ceinture jaune"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt2.png"
		}
	],
	description: {
		en: "Vous êtes ceinture jaune sur 3 salons permanents !",
		fr: "Vous êtes ceinture jaune sur 3 salons permanents !",
		de: "Vous êtes ceinture jaune sur 3 salons permanents !",
		es: "Vous êtes ceinture jaune sur 3 salons permanents !"
	}
};
var belt3 = {
	id: "belt3",
	name: {
		en: "Ceinture jaune-orange",
		fr: "Ceinture jaune-orange",
		de: "Ceinture jaune-orange",
		es: "Ceinture jaune-orange"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt3.png"
		}
	],
	description: {
		en: "Vous êtes ceinture jaune-orange sur 3 salons permanents !",
		fr: "Vous êtes ceinture jaune-orange sur 3 salons permanents !",
		de: "Vous êtes ceinture jaune-orange sur 3 salons permanents !",
		es: "Vous êtes ceinture jaune-orange sur 3 salons permanents !"
	}
};
var belt4 = {
	id: "belt4",
	name: {
		en: "Ceinture orange",
		fr: "Ceinture orange",
		de: "Ceinture orange",
		es: "Ceinture orange"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt4.png"
		}
	],
	description: {
		en: "Vous êtes ceinture orange sur 3 salons permanents !",
		fr: "Vous êtes ceinture orange sur 3 salons permanents !",
		de: "Vous êtes ceinture orange sur 3 salons permanents !",
		es: "Vous êtes ceinture orange sur 3 salons permanents !"
	}
};
var belt5 = {
	id: "belt5",
	name: {
		en: "Ceinture orange-verte",
		fr: "Ceinture orange-verte",
		de: "Ceinture orange-verte",
		es: "Ceinture orange-verte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt5.png"
		}
	],
	description: {
		en: "Vous êtes ceinture orange-verte sur 3 salons permanents !",
		fr: "Vous êtes ceinture orange-verte sur 3 salons permanents !",
		de: "Vous êtes ceinture orange-verte sur 3 salons permanents !",
		es: "Vous êtes ceinture orange-verte sur 3 salons permanents !"
	}
};
var belt33 = {
	id: "belt33",
	name: {
		en: "Ceinture verte",
		fr: "Ceinture verte",
		de: "Ceinture verte",
		es: "Ceinture verte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt6.png"
		}
	],
	description: {
		en: "Vous êtes ceinture verte sur 3 salons permanents !",
		fr: "Vous êtes ceinture verte sur 3 salons permanents !",
		de: "Vous êtes ceinture verte sur 3 salons permanents !",
		es: "Vous êtes ceinture verte sur 3 salons permanents !"
	}
};
var belt34 = {
	id: "belt34",
	name: {
		en: "Ceinture bleue",
		fr: "Ceinture bleue",
		de: "Ceinture bleue",
		es: "Ceinture bleue"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt7.png"
		}
	],
	description: {
		en: "Vous êtes ceinture bleue sur 3 salons permanents !",
		fr: "Vous êtes ceinture bleue sur 3 salons permanents !",
		de: "Vous êtes ceinture bleue sur 3 salons permanents !",
		es: "Vous êtes ceinture bleue sur 3 salons permanents !"
	}
};
var belt44 = {
	id: "belt44",
	name: {
		en: "Ceinture marron",
		fr: "Ceinture marron",
		de: "Ceinture marron",
		es: "Ceinture marron"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt8.png"
		}
	],
	description: {
		en: "Vous êtes ceinture marron sur 3 salons permanents ! Encore un petit effort, vous y êtes presque !",
		fr: "Vous êtes ceinture marron sur 3 salons permanents ! Encore un petit effort, vous y êtes presque !",
		de: "Vous êtes ceinture marron sur 3 salons permanents ! Encore un petit effort, vous y êtes presque !",
		es: "Vous êtes ceinture marron sur 3 salons permanents ! Encore un petit effort, vous y êtes presque !"
	}
};
var belt54 = {
	id: "belt54",
	name: {
		en: "Ceinture noire",
		fr: "Ceinture noire",
		de: "Ceinture noire",
		es: "Ceinture noire"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "belt9.png"
		}
	],
	description: {
		en: "Vous êtes ceinture noire sur 3 salons permanents, la distinction ultime du vétéran !",
		fr: "Vous êtes ceinture noire sur 3 salons permanents, la distinction ultime du vétéran !",
		de: "Vous êtes ceinture noire sur 3 salons permanents, la distinction ultime du vétéran !",
		es: "Vous êtes ceinture noire sur 3 salons permanents, la distinction ultime du vétéran !"
	}
};
var card1 = {
	id: "card1",
	name: {
		en: "Carte de Candidat",
		fr: "Carte de Candidat",
		de: "Carte de Candidat",
		es: "Carte de Candidat"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "card1.png"
		}
	],
	description: {
		en: "Délivrée après 3 parties en Débutant. Permet de participer aux salons Megaquiz, Culture, et Spectacle.",
		fr: "Délivrée après 3 parties en Débutant. Permet de participer aux salons Megaquiz, Culture, et Spectacle.",
		de: "Délivrée après 3 parties en Débutant. Permet de participer aux salons Megaquiz, Culture, et Spectacle.",
		es: "Délivrée après 3 parties en Débutant. Permet de participer aux salons Megaquiz, Culture, et Spectacle."
	}
};
var card2 = {
	id: "card2",
	name: {
		en: "Candidat Spécial",
		fr: "Candidat Spécial",
		de: "Candidat Spécial",
		es: "Candidat Spécial"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "card2.png"
		}
	],
	description: {
		en: "Vous avez déjà participé à un quiz spécial de la Saison 2 en ayant fait au moins 5 parties.",
		fr: "Vous avez déjà participé à un quiz spécial de la Saison 2 en ayant fait au moins 5 parties.",
		de: "Vous avez déjà participé à un quiz spécial de la Saison 2 en ayant fait au moins 5 parties.",
		es: "Vous avez déjà participé à un quiz spécial de la Saison 2 en ayant fait au moins 5 parties."
	}
};
var card3 = {
	id: "card3",
	name: {
		en: "Candidat Enflammé",
		fr: "Candidat Enflammé",
		de: "Candidat Enflammé",
		es: "Candidat Enflammé"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "cardenflamF2.png"
		}
	],
	description: {
		en: "Vous avez déjà participé à 3 quiz spéciaux de la Saison 2 en ayant fait au moins 10 parties dans chaque.",
		fr: "Vous avez déjà participé à 3 quiz spéciaux de la Saison 2 en ayant fait au moins 10 parties dans chaque.",
		de: "Vous avez déjà participé à 3 quiz spéciaux de la Saison 2 en ayant fait au moins 10 parties dans chaque.",
		es: "Vous avez déjà participé à 3 quiz spéciaux de la Saison 2 en ayant fait au moins 10 parties dans chaque."
	}
};
var card4 = {
	id: "card4",
	name: {
		en: "Candidat de l'Extrême",
		fr: "Candidat de l'Extrême",
		de: "Candidat de l'Extrême",
		es: "Candidat de l'Extrême"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "cardextrmeC3.png"
		}
	],
	description: {
		en: "Vous avez déjà participé à 10 quiz spéciaux de la Saison 2 en ayant fait au moins 10 parties dans chaque.",
		fr: "Vous avez déjà participé à 10 quiz spéciaux de la Saison 2 en ayant fait au moins 10 parties dans chaque.",
		de: "Vous avez déjà participé à 10 quiz spéciaux de la Saison 2 en ayant fait au moins 10 parties dans chaque.",
		es: "Vous avez déjà participé à 10 quiz spéciaux de la Saison 2 en ayant fait au moins 10 parties dans chaque."
	}
};
var vol1 = {
	id: "vol1",
	name: {
		en: "Volume 1 : Megaquiz",
		fr: "Volume 1 : Megaquiz",
		de: "Volume 1 : Megaquiz",
		es: "Volume 1 : Megaquiz"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 20,
			icon: "vol1.png"
		}
	],
	description: {
		en: "100 points dans le salon Megaquiz permettent d'obtenir le tome 1 de l'encyclopédie SQ : l'édition Megaquiz. Dédicacé par Marc Mazzoti.",
		fr: "100 points dans le salon Megaquiz permettent d'obtenir le tome 1 de l'encyclopédie SQ : l'édition Megaquiz. Dédicacé par Marc Mazzoti.",
		de: "100 points dans le salon Megaquiz permettent d'obtenir le tome 1 de l'encyclopédie SQ : l'édition Megaquiz. Dédicacé par Marc Mazzoti.",
		es: "100 points dans le salon Megaquiz permettent d'obtenir le tome 1 de l'encyclopédie SQ : l'édition Megaquiz. Dédicacé par Marc Mazzoti."
	}
};
var vol2 = {
	id: "vol2",
	name: {
		en: "Volume 2 : Culture",
		fr: "Volume 2 : Culture",
		de: "Volume 2 : Culture",
		es: "Volume 2 : Culture"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 20,
			icon: "vol2.png"
		}
	],
	description: {
		en: "100 points dans le salon Culture permettent d'obtenir le tome 2 de l'encyclopédie SQ : l'édition Culture. Dédicacé par James Norray.",
		fr: "100 points dans le salon Culture permettent d'obtenir le tome 2 de l'encyclopédie SQ : l'édition Culture. Dédicacé par James Norray.",
		de: "100 points dans le salon Culture permettent d'obtenir le tome 2 de l'encyclopédie SQ : l'édition Culture. Dédicacé par James Norray.",
		es: "100 points dans le salon Culture permettent d'obtenir le tome 2 de l'encyclopédie SQ : l'édition Culture. Dédicacé par James Norray."
	}
};
var vol3 = {
	id: "vol3",
	name: {
		en: "Volume 3 : Spectacle",
		fr: "Volume 3 : Spectacle",
		de: "Volume 3 : Spectacle",
		es: "Volume 3 : Spectacle"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 20,
			icon: "vol3.png"
		}
	],
	description: {
		en: "100 points dans le salon Spectacle permettent d'obtenir le tome 3 de l'encyclopédie SQ : l'édition Spectacle. Dédicacé par Charlotte.",
		fr: "100 points dans le salon Spectacle permettent d'obtenir le tome 3 de l'encyclopédie SQ : l'édition Spectacle. Dédicacé par Charlotte.",
		de: "100 points dans le salon Spectacle permettent d'obtenir le tome 3 de l'encyclopédie SQ : l'édition Spectacle. Dédicacé par Charlotte.",
		es: "100 points dans le salon Spectacle permettent d'obtenir le tome 3 de l'encyclopédie SQ : l'édition Spectacle. Dédicacé par Charlotte."
	}
};
var bible = {
	id: "bible",
	name: {
		en: "La Connaissance",
		fr: "La Connaissance",
		de: "La Connaissance",
		es: "La Connaissance"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 40,
			icon: "bible.png"
		}
	],
	description: {
		en: "C'est une encyclopédie écrite par James Norray répertoriant tous les secrets de l'univers. Pour mériter la Connaissance, il faut obtenir à la fois 1000 points en Megaquiz, 1000 pts en Culture, et 1000 pts en spectacle.",
		fr: "C'est une encyclopédie écrite par James Norray répertoriant tous les secrets de l'univers. Pour mériter la Connaissance, il faut obtenir à la fois 1000 points en Megaquiz, 1000 pts en Culture, et 1000 pts en spectacle.",
		de: "C'est une encyclopédie écrite par James Norray répertoriant tous les secrets de l'univers. Pour mériter la Connaissance, il faut obtenir à la fois 1000 points en Megaquiz, 1000 pts en Culture, et 1000 pts en spectacle.",
		es: "C'est une encyclopédie écrite par James Norray répertoriant tous les secrets de l'univers. Pour mériter la Connaissance, il faut obtenir à la fois 1000 points en Megaquiz, 1000 pts en Culture, et 1000 pts en spectacle."
	}
};
var sqrd = {
	id: "sqrd",
	name: {
		en: "Badge de la S.Q.R.D.",
		fr: "Badge de la S.Q.R.D.",
		de: "Badge de la S.Q.R.D.",
		es: "Badge de la S.Q.R.D."
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 25,
			icon: "sqrd.png"
		}
	],
	description: {
		en: "Si vous êtes encore là après tant de parties jouées, c'est que vous avez respecté les règles du plateau.\r\nLe chef de la sécurité vous félicite et vous remet cette décoration : le badge de la Studio Quiz Robot Defense. Une haute distinction ! Soyez en digne.",
		fr: "Si vous êtes encore là après tant de parties jouées, c'est que vous avez respecté les règles du plateau.\r\nLe chef de la sécurité vous félicite et vous remet cette décoration : le badge de la Studio Quiz Robot Defense. Une haute distinction ! Soyez en digne.",
		de: "Si vous êtes encore là après tant de parties jouées, c'est que vous avez respecté les règles du plateau.\r\nLe chef de la sécurité vous félicite et vous remet cette décoration : le badge de la Studio Quiz Robot Defense. Une haute distinction ! Soyez en digne.",
		es: "Si vous êtes encore là après tant de parties jouées, c'est que vous avez respecté les règles du plateau.\r\nLe chef de la sécurité vous félicite et vous remet cette décoration : le badge de la Studio Quiz Robot Defense. Une haute distinction ! Soyez en digne."
	}
};
var facepl = {
	id: "facepl",
	name: {
		en: "Smiley consommable 'face palm'",
		fr: "Smiley consommable 'face palm'",
		de: "Smiley consommable 'face palm'",
		es: "Smiley consommable 'face palm'"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Soupirs... consternation... Mettez en évidence les fails de vos amis maladroits grâce au grand James Norray. Il vous le permettra tant que vous entretenez sérieusement votre culture sur son salon. Il donne ce smiley consommable aux 2 premiers de chaque quiz Culture.",
		fr: "Soupirs... consternation... Mettez en évidence les fails de vos amis maladroits grâce au grand James Norray. Il vous le permettra tant que vous entretenez sérieusement votre culture sur son salon. Il donne ce smiley consommable aux 2 premiers de chaque quiz Culture.",
		de: "Soupirs... consternation... Mettez en évidence les fails de vos amis maladroits grâce au grand James Norray. Il vous le permettra tant que vous entretenez sérieusement votre culture sur son salon. Il donne ce smiley consommable aux 2 premiers de chaque quiz Culture.",
		es: "Soupirs... consternation... Mettez en évidence les fails de vos amis maladroits grâce au grand James Norray. Il vous le permettra tant que vous entretenez sérieusement votre culture sur son salon. Il donne ce smiley consommable aux 2 premiers de chaque quiz Culture."
	}
};
var gg = {
	id: "gg",
	name: {
		en: "Smiley consommable 'GG'",
		fr: "Smiley consommable 'GG'",
		de: "Smiley consommable 'GG'",
		es: "Smiley consommable 'GG'"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "GG ! Pour vous remercier d'être fidèle à ses quiz, Marc Mazzoti vous aide à féliciter vos amis sur tous les espaces communautaires de Twinoid. Il distribue ce smiley consommable aux 4 premiers de chaque quiz Megaquiz.",
		fr: "GG ! Pour vous remercier d'être fidèle à ses quiz, Marc Mazzoti vous aide à féliciter vos amis sur tous les espaces communautaires de Twinoid. Il distribue ce smiley consommable aux 4 premiers de chaque quiz Megaquiz.",
		de: "GG ! Pour vous remercier d'être fidèle à ses quiz, Marc Mazzoti vous aide à féliciter vos amis sur tous les espaces communautaires de Twinoid. Il distribue ce smiley consommable aux 4 premiers de chaque quiz Megaquiz.",
		es: "GG ! Pour vous remercier d'être fidèle à ses quiz, Marc Mazzoti vous aide à féliciter vos amis sur tous les espaces communautaires de Twinoid. Il distribue ce smiley consommable aux 4 premiers de chaque quiz Megaquiz."
	}
};
var choupi = {
	id: "choupi",
	name: {
		en: "Smiley consommable 'trop choupi'",
		fr: "Smiley consommable 'trop choupi'",
		de: "Smiley consommable 'trop choupi'",
		es: "Smiley consommable 'trop choupi'"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Faites briller les yeux de Charlotte devant les photos de chatons mignons ! Elle vous prète son regard pétillant pour vous remercier de venir souvent à ses quiz Spectacle. Elle offre ce smiley consommable à 5 participants choisis au hasard à chacun de ses quiz.",
		fr: "Faites briller les yeux de Charlotte devant les photos de chatons mignons ! Elle vous prète son regard pétillant pour vous remercier de venir souvent à ses quiz Spectacle. Elle offre ce smiley consommable à 5 participants choisis au hasard à chacun de ses quiz.",
		de: "Faites briller les yeux de Charlotte devant les photos de chatons mignons ! Elle vous prète son regard pétillant pour vous remercier de venir souvent à ses quiz Spectacle. Elle offre ce smiley consommable à 5 participants choisis au hasard à chacun de ses quiz.",
		es: "Faites briller les yeux de Charlotte devant les photos de chatons mignons ! Elle vous prète son regard pétillant pour vous remercier de venir souvent à ses quiz Spectacle. Elle offre ce smiley consommable à 5 participants choisis au hasard à chacun de ses quiz."
	}
};
var facep2 = {
	id: "facep2",
	name: {
		en: "Smiley consommable 'face palm'",
		fr: "Smiley consommable 'face palm'",
		de: "Smiley consommable 'face palm'",
		es: "Smiley consommable 'face palm'"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Le smiley Face Palm du jeune James Norray en avant première !",
		fr: "Le smiley Face Palm du jeune James Norray en avant première !",
		de: "Le smiley Face Palm du jeune James Norray en avant première !",
		es: "Le smiley Face Palm du jeune James Norray en avant première !"
	}
};
var objm = {
	id: "objm",
	name: {
		en: "Dédicace de Marc Mazzoti",
		fr: "Dédicace de Marc Mazzoti",
		de: "Dédicace de Marc Mazzoti",
		es: "Dédicace de Marc Mazzoti"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "A chaque palier de 80 points obtenus dans le salon Megaquiz, Marc Mazzoti se fera un plaisir de vous dédicacer une paire de lunettes de soleil jetables ! Soyez classe, soyez fun, soyez sun !",
		fr: "A chaque palier de 80 points obtenus dans le salon Megaquiz, Marc Mazzoti se fera un plaisir de vous dédicacer une paire de lunettes de soleil jetables ! Soyez classe, soyez fun, soyez sun !",
		de: "A chaque palier de 80 points obtenus dans le salon Megaquiz, Marc Mazzoti se fera un plaisir de vous dédicacer une paire de lunettes de soleil jetables ! Soyez classe, soyez fun, soyez sun !",
		es: "A chaque palier de 80 points obtenus dans le salon Megaquiz, Marc Mazzoti se fera un plaisir de vous dédicacer une paire de lunettes de soleil jetables ! Soyez classe, soyez fun, soyez sun !"
	}
};
var objc = {
	id: "objc",
	name: {
		en: "Gant de Charlotte",
		fr: "Gant de Charlotte",
		de: "Gant de Charlotte",
		es: "Gant de Charlotte"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Tous les 160 points gagnés dans le salon Spectacle, Charlotte vous prètera son gant de boxe personnalisé ! Vous pourrez vous défendre si on vous embête et répendre la justice sur les forums. Mais prenez-en soin ! Vous avez intérêt à lui rendre en bon état si vous ne voulez pas y gouter.",
		fr: "Tous les 160 points gagnés dans le salon Spectacle, Charlotte vous prètera son gant de boxe personnalisé ! Vous pourrez vous défendre si on vous embête et répendre la justice sur les forums. Mais prenez-en soin ! Vous avez intérêt à lui rendre en bon état si vous ne voulez pas y gouter.",
		de: "Tous les 160 points gagnés dans le salon Spectacle, Charlotte vous prètera son gant de boxe personnalisé ! Vous pourrez vous défendre si on vous embête et répendre la justice sur les forums. Mais prenez-en soin ! Vous avez intérêt à lui rendre en bon état si vous ne voulez pas y gouter.",
		es: "Tous les 160 points gagnés dans le salon Spectacle, Charlotte vous prètera son gant de boxe personnalisé ! Vous pourrez vous défendre si on vous embête et répendre la justice sur les forums. Mais prenez-en soin ! Vous avez intérêt à lui rendre en bon état si vous ne voulez pas y gouter."
	}
};
var objj = {
	id: "objj",
	name: {
		en: "Approbation de James Norray",
		fr: "Approbation de James Norray",
		de: "Approbation de James Norray",
		es: "Approbation de James Norray"
	},
	rare: 1,
	unlocks: [
	],
	description: {
		en: "Probablement la récompense la plus extraordinaire du jeu. A chaque palier de 300 points obtenus dans le salon Culture, James Norray vous permettra d'approuver un de vos prochains messages (Nexus, forums...) avec son impressionante signature.",
		fr: "Probablement la récompense la plus extraordinaire du jeu. A chaque palier de 300 points obtenus dans le salon Culture, James Norray vous permettra d'approuver un de vos prochains messages (Nexus, forums...) avec son impressionante signature.",
		de: "Probablement la récompense la plus extraordinaire du jeu. A chaque palier de 300 points obtenus dans le salon Culture, James Norray vous permettra d'approuver un de vos prochains messages (Nexus, forums...) avec son impressionante signature.",
		es: "Probablement la récompense la plus extraordinaire du jeu. A chaque palier de 300 points obtenus dans le salon Culture, James Norray vous permettra d'approuver un de vos prochains messages (Nexus, forums...) avec son impressionante signature."
	}
};
var pates = {
	id: "pates",
	name: {
		en: "Pâtes au saumon fumé de James Norray",
		fr: "Pâtes au saumon fumé de James Norray",
		de: "Pâtes au saumon fumé de James Norray",
		es: "Pâtes au saumon fumé de James Norray"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Vous avez été invité au banquet spécial présenté par James Norray ! Vous avez obtenu une assiette de ses célèbres pâtes au saumon fumé : tagliatelles fines al dente, 2 cuillères à soupe de crème fraiche, une poignée d'émmental fin, de l'émincé de saumon fumé aux cinq baies, un filet d'huile d'olive, un jaune d'oeuf, un brin de persil, une pincée de muscade, et le savoir faire de James Norray. Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire. Les plats cuisinés par James Norray ne périment pas.",
		fr: "Vous avez été invité au banquet spécial présenté par James Norray ! Vous avez obtenu une assiette de ses célèbres pâtes au saumon fumé : tagliatelles fines al dente, 2 cuillères à soupe de crème fraiche, une poignée d'émmental fin, de l'émincé de saumon fumé aux cinq baies, un filet d'huile d'olive, un jaune d'oeuf, un brin de persil, une pincée de muscade, et le savoir faire de James Norray. Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire. Les plats cuisinés par James Norray ne périment pas.",
		de: "Vous avez été invité au banquet spécial présenté par James Norray ! Vous avez obtenu une assiette de ses célèbres pâtes au saumon fumé : tagliatelles fines al dente, 2 cuillères à soupe de crème fraiche, une poignée d'émmental fin, de l'émincé de saumon fumé aux cinq baies, un filet d'huile d'olive, un jaune d'oeuf, un brin de persil, une pincée de muscade, et le savoir faire de James Norray. Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire. Les plats cuisinés par James Norray ne périment pas.",
		es: "Vous avez été invité au banquet spécial présenté par James Norray ! Vous avez obtenu une assiette de ses célèbres pâtes au saumon fumé : tagliatelles fines al dente, 2 cuillères à soupe de crème fraiche, une poignée d'émmental fin, de l'émincé de saumon fumé aux cinq baies, un filet d'huile d'olive, un jaune d'oeuf, un brin de persil, une pincée de muscade, et le savoir faire de James Norray. Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire. Les plats cuisinés par James Norray ne périment pas."
	}
};
var pizza = {
	id: "pizza",
	name: {
		en: "Pizza Mazzoti",
		fr: "Pizza Mazzoti",
		de: "Pizza Mazzoti",
		es: "Pizza Mazzoti"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Vous avez été invité au banquet spécial présenté par Marc Mazzoti ! Il vous a préparé une magnifique pizza Mazzoti italienne surgelée !... Oui, la cusine n'est pas son fort... Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire.  !Attention! Ne jamais recongeler un produit décongelé.",
		fr: "Vous avez été invité au banquet spécial présenté par Marc Mazzoti ! Il vous a préparé une magnifique pizza Mazzoti italienne surgelée !... Oui, la cusine n'est pas son fort... Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire.  !Attention! Ne jamais recongeler un produit décongelé.",
		de: "Vous avez été invité au banquet spécial présenté par Marc Mazzoti ! Il vous a préparé une magnifique pizza Mazzoti italienne surgelée !... Oui, la cusine n'est pas son fort... Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire.  !Attention! Ne jamais recongeler un produit décongelé.",
		es: "Vous avez été invité au banquet spécial présenté par Marc Mazzoti ! Il vous a préparé une magnifique pizza Mazzoti italienne surgelée !... Oui, la cusine n'est pas son fort... Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire.  !Attention! Ne jamais recongeler un produit décongelé."
	}
};
var fraise = {
	id: "fraise",
	name: {
		en: "Charlotte aux fraises de Charlotte",
		fr: "Charlotte aux fraises de Charlotte",
		de: "Charlotte aux fraises de Charlotte",
		es: "Charlotte aux fraises de Charlotte"
	},
	rare: 0,
	unlocks: [
	],
	description: {
		en: "Vous avez été invité au banquet spécial présenté par Charlotte ! Elle vous préparé une Charlotte aux fraises personnalisée au chocolat et à la mayonnaise. Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire. En cas de maux d'estomac, veuillez consulter votre médecin.",
		fr: "Vous avez été invité au banquet spécial présenté par Charlotte ! Elle vous préparé une Charlotte aux fraises personnalisée au chocolat et à la mayonnaise. Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire. En cas de maux d'estomac, veuillez consulter votre médecin.",
		de: "Vous avez été invité au banquet spécial présenté par Charlotte ! Elle vous préparé une Charlotte aux fraises personnalisée au chocolat et à la mayonnaise. Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire. En cas de maux d'estomac, veuillez consulter votre médecin.",
		es: "Vous avez été invité au banquet spécial présenté par Charlotte ! Elle vous préparé une Charlotte aux fraises personnalisée au chocolat et à la mayonnaise. Vous pouvez soit consommer ce picto en le postant UNE SEULE FOIS sur un espace communautaire de Twinoïd, soit le conserver dans votre inventaire. En cas de maux d'estomac, veuillez consulter votre médecin."
	}
};
var studioquizJson = {
	mega: mega,
	cult: cult,
	spect: spect,
	mega2: mega2,
	cult2: cult2,
	spect2: spect2,
	star: star,
	fayo: fayo,
	goldb: goldb,
	goldm: goldm,
	vip: vip,
	micror: micror,
	scienc: scienc,
	sjames: sjames,
	smarc: smarc,
	scharl: scharl,
	cervel: cervel,
	cinema: cinema,
	crayon: crayon,
	cygne: cygne,
	elepha: elepha,
	livref: livref,
	livreo: livreo,
	lunett: lunett,
	manett: manett,
	mask: mask,
	micro: micro,
	plume: plume,
	pomme: pomme$1,
	rouage: rouage,
	souris: souris,
	tele: tele,
	temple: temple,
	ampoff: ampoff,
	ampon: ampon,
	pink: pink,
	ane: ane,
	smurf: smurf,
	oreil: oreil,
	starm1: starm1,
	starmt: starmt,
	footb: footb,
	baskt: baskt,
	rugby: rugby,
	billa: billa,
	tennis: tennis$1,
	golf: golf,
	belt1: belt1,
	belt2: belt2,
	belt3: belt3,
	belt4: belt4,
	belt5: belt5,
	belt33: belt33,
	belt34: belt34,
	belt44: belt44,
	belt54: belt54,
	card1: card1,
	card2: card2,
	card3: card3,
	card4: card4,
	vol1: vol1,
	vol2: vol2,
	vol3: vol3,
	bible: bible,
	sqrd: sqrd,
	facepl: facepl,
	gg: gg,
	choupi: choupi,
	facep2: facep2,
	objm: objm,
	objc: objc,
	objj: objj,
	pates: pates,
	pizza: pizza,
	fraise: fraise
};

var colec = {
	id: "colec",
	name: {
		en: "Educollector",
		fr: "Professionneur",
		de: "Educollector",
		es: "´Collector"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/coffre.png",
			title: {
				en: "Educollector",
				fr: "Professionneur",
				de: "Educollector",
				es: "Coleccionista Pro"
			}
		}
	],
	description: {
		en: "Proud owner of the entire collection of confiscatable objects.",
		fr: "Possède les 101 premiers objets confiscables. Depuis, il y en a d'autres, argll...",
		de: "Proud owner of the entire collection of confiscatable objects.",
		es: "Posee los 101 primeros objetos confiscables."
	}
};
var allcolec = {
	id: "allcolec",
	name: {
		en: "Kleptomaniac",
		fr: "Kleptoman",
		de: "Kleptomaniac",
		es: "Clepto-Man"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			title: {
				en: "Kleptomaniac",
				fr: "Kleptoman",
				de: "Kleptomaniac",
				es: "Cleptoman"
			}
		}
	],
	description: {
		en: "That's your lot, you own all of the objects in the game! Assuming there are no more updates! ",
		fr: "Cette fois ça y est, vous avez tous les objets du jeu ! Pourvu qu'il n'y ait plus de mise à jour ! ",
		de: "That's your lot, you own all of the objects in the game! Assuming there are no more updates! ",
		es: "¡Esta vez sí tienes todos los objetos! A menos si hay una nueva actualización."
	}
};
var betats = {
	id: "betats",
	name: {
		en: "Applied Beta Tester",
		fr: "Beta-testeur appliqué",
		de: "Applied Beta Tester",
		es: "Beta-tester aplicado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			title: {
				en: "Here before the bell rang",
				fr: "Arrivé avant la sonnerie",
				de: "Here before the bell rang",
				es: "Llegué antes de la campana"
			}
		}
	],
	description: {
		en: "Participated in the beta test",
		fr: "a participé au Beta-test du jeu",
		de: "Participated in the beta test",
		es: "Participó en la beta del juego"
	}
};
var bobj = {
	id: "bobj",
	name: {
		en: "Completed objective bonuses",
		fr: "Objectifs bonus réussis",
		de: "Completed objective bonuses",
		es: "Retos bonus logrados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/loc/es/notes/Plus1.png"
		},
		{
			count: 10,
			points: 2,
			icon: "/img/loc/es/notes/Zero.png"
		},
		{
			count: 200,
			points: 3,
			icon: "/img/loc/es/notes/Non.png"
		},
		{
			count: 1000,
			points: 3,
			icon: "/img/loc/es/notes/GrandArt.png"
		}
	],
	description: {
		en: "Number of pupils you have defeated which were sent by your friends",
		fr: "Nombre d'élèves envoyés par vos amis que vous avez vaincu",
		de: "Number of pupils you have defeated which were sent by your friends",
		es: "Cantidad de alumnos enviados por tus amigos que has vencido"
	}
};
var oneshot = {
	id: "oneshot",
	name: {
		en: "One-shots !",
		fr: "One-shots !",
		de: "One-shots !",
		es: "One-shots!"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/loc/es/notes/OldSmiley.png"
		},
		{
			count: 50,
			points: 2,
			icon: "/img/loc/es/notes/PeutMieux.png"
		},
		{
			count: 500,
			points: 3,
			icon: "/img/loc/es/notes/20.png"
		},
		{
			count: 5000,
			points: 3,
			icon: "/img/loc/es/notes/Tb.png"
		}
	],
	description: {
		en: "Number of pupils defeated in one turn",
		fr: "Nombre d'élèves battus en un coup",
		de: "Number of pupils defeated in one turn",
		es: "Cantidad de alumnos vencidos con un solo golpe"
	}
};
var val1 = {
	id: "val1",
	name: {
		en: "Authority",
		fr: "Autorité",
		de: "Authority",
		es: "Autoridad"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/hat1.png",
			prefix: true,
			suffix: true,
			title: {
				en: "Apache",
				fr: "Grand Canyon",
				de: "Apache",
				es: "Gran Cañón"
			}
		}
	],
	description: {
		en: "Represented by Sheriff John Norray - Born in 1864, disappeared on horseback on the 21st of December 1901 at Groom Lake.",
		fr: "Représentée par le shérif John Norray - Né en 1864, disparu à cheval le 21 décembre 1901 à Groom Lake.",
		de: "Represented by Sheriff John Norray - Born in 1864, disappeared on horseback on the 21st of December 1901 at Groom Lake.",
		es: "Representado por el sheriff John Norray. Nacido en 1864, desapareció cabalgando el 21 de diciembre de 1901 en Groom Lake."
	}
};
var val2 = {
	id: "val2",
	name: {
		en: "Discovery",
		fr: "Découverte",
		de: "Discovery",
		es: "Descubrimiento"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/hat2.png",
			prefix: true,
			suffix: true,
			title: {
				en: "Siren",
				fr: "Atlantique",
				de: "Siren",
				es: "Atlántico"
			}
		}
	],
	description: {
		en: "Represented by Captain Jack McNorroy - Born in 1702, disappeared at sea on the 21st of December 1740 off the north west of Puerto Rico.",
		fr: "Représentée par le capitaine Jack Mc Norroy - Né en 1702, disparu en mer le 21 décembre 1740 au nord-ouest de Porto Rico.",
		de: "Represented by Captain Jack McNorroy - Born in 1702, disappeared at sea on the 21st of December 1740 off the north west of Puerto Rico.",
		es: "Representado por el capitán Jack Mc Norroy. Nacido en 1702, desapareció navegando el 21 de diciembre  de 1740 cerca del Triángulo de las Bermudas."
	}
};
var val3 = {
	id: "val3",
	name: {
		en: "Duty",
		fr: "Devoir",
		de: "Duty",
		es: "Deber"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/hat3.png",
			prefix: true,
			suffix: true,
			title: {
				en: "of Knowledge",
				fr: "Connaissance",
				de: "of Knowledge",
				es: "Cataluña"
			}
		}
	],
	description: {
		en: "Represented by the Knight Templar Jean Nauret - Born in 1410, mysteriously disappeared on the 21st of December 1482 at the summit of Bugarach.",
		fr: "Représenté par le templier Jean de Nauret - Né en 1410, disparu mystérieusement le 21 décembre 1482 au pic de Bugarach.",
		de: "Represented by the Knight Templar Jean Nauret - Born in 1410, mysteriously disappeared on the 21st of December 1482 at the summit of Bugarach.",
		es: "Representado por Don Juan de Norriez. Nacido en 1410, desapareció misteriosamente el 21 de diciembre de 1482 en los Pirineos."
	}
};
var val4 = {
	id: "val4",
	name: {
		en: "Respect",
		fr: "Respect",
		de: "Respect",
		es: "Respeto"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/hat4.png",
			prefix: true,
			suffix: true,
			title: {
				en: "Emperor",
				fr: "Senat",
				de: "Emperor",
				es: "Shangri-La"
			}
		}
	],
	description: {
		en: "Represented by General Julius Caius Norius - Born in 52BC, disappeared during the night of 21st of December in the year 0 in the Archipelago of San Torini.",
		fr: "Représenté par le général Julius Caius Norius - Né en -52 av JC, disparu la nuit du 21 décembre en 0 pendant JC dans l'archipel de Santorin.",
		de: "Represented by General Julius Caius Norius - Born in 52BC, disappeared during the night of 21st of December in the year 0 in the Archipelago of San Torini.",
		es: "Representado por el general Julius Caius Norius. Nacido en el año 52 a.C., desapareció la noche del 21 de diciembre del año 1 en el camino a Pompeya."
	}
};
var val5 = {
	id: "val5",
	name: {
		en: "Knowledge",
		fr: "Savoir",
		de: "Knowledge",
		es: "Saber"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/hat5.png",
			prefix: true,
			suffix: true,
			title: {
				en: "Royalty",
				fr: "Gizeh",
				de: "Royalty",
				es: "Imperios"
			}
		}
	],
	description: {
		en: "Represented by the Architect Noris - Born in approximately 2000BC, disappeared mysteriously one 21st of December on the Giza Plateau.",
		fr: "Représenté par l'architecte Noris - Né aux environs de -7000 av JC, disparu mystérieusement un 21 décembre sur le plateau de Gizeh.",
		de: "Represented by the Architect Noris - Born in approximately 2000BC, disappeared mysteriously one 21st of December on the Giza Plateau.",
		es: "Representado por el magnífico arquitecto Noris. Nacido por el año 3000 a.C., desapareció misteriosamente un 21 de diciembre mientras se dirigía a las orillas del Nilo."
	}
};
var val6 = {
	id: "val6",
	name: {
		en: "Loyalty",
		fr: "Loyauté",
		de: "Loyalty",
		es: "Lealtad"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/hat6.png",
			prefix: true,
			suffix: true,
			title: {
				en: "Spirit",
				fr: "Soleil",
				de: "Spirit",
				es: "Sol"
			}
		}
	],
	description: {
		en: "Represented by the High Priest Naruhatl - Born in approximately 12000BC, disappeared mysteriously one 21st of December at Puma Punku.",
		fr: "Représentée par le grand prêtre Naruhatl - Né aux environs de -12000 av JC, disparu mystérieusement un 21 décembre à Puma Punku.",
		de: "Represented by the High Priest Naruhatl - Born in approximately 12000BC, disappeared mysteriously one 21st of December at Puma Punku.",
		es: "Representado por el gran sacerdote Naruhatuc. Nacido por los años 500 d.C., desapareció sin dejar huella durante un eclipse solar en Sudamérica."
	}
};
var val7 = {
	id: "val7",
	name: {
		en: "Sharing",
		fr: "Partage",
		de: "Sharing",
		es: "Generosidad"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/hat7.png",
			prefix: true,
			suffix: true,
			title: {
				en: "from the beyond",
				fr: "Au Dela",
				de: "from the beyond",
				es: "Dimensiones Paralelas"
			}
		}
	],
	description: {
		en: "Represented by the hunter Noru'k - Appeared mysteriously during the Cretaceous period 65 million years ago in the Yucatan.",
		fr: "Représenté par le chasseur Noru'k - Apparu mystérieusement au Crétacé il y a 65 millions d'années dans le Yucatan.",
		de: "Represented by the hunter Noru'k - Appeared mysteriously during the Cretaceous period 65 million years ago in the Yucatan.",
		es: "Representado por el cazador Noru'k. Sus huellas datan del Cretácico, hace 65 mil años cerca de Yucatán, México."
	}
};
var val8 = {
	id: "val8",
	name: {
		en: "Patience",
		fr: "Patience",
		de: "Patience",
		es: "Paciencia"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/hat8.png",
			prefix: true,
			title: {
				en: "I'm a Legend",
				fr: "Je suis une Légende",
				de: "I'm a Legend",
				es: "Invictus"
			}
		}
	],
	description: {
		en: "The Value of the Present moment. Represented by the Professor James Norray.",
		fr: "La Valeur du Présent. Représentée par le professeur James Norray.",
		de: "The Value of the Present moment. Represented by the Professor James Norray.",
		es: "El valor del presente. Representado por el profesor James Norray."
	}
};
var rabsolu = {
	id: "rabsolu",
	name: {
		en: "Gardian of Ultra Pink",
		fr: "Gardienne du Rose Absolu",
		de: "Gardian of Ultra Pink",
		es: "Guardián del Rosa Absoluto"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/icons/rabsolu.png",
			title: {
				en: "Guardian of Ultra Pink",
				fr: "Gardienne du Rose Absolu",
				de: "Guardian of Ultra Pink",
				es: "Guardián del Rosa Absoluto"
			}
		}
	],
	description: {
		en: "You are now in possession of all the pink objects that can be confiscated. You are now a Guardian of Ultra Pink. Congratulations!",
		fr: "Vous êtes en possession de tous les objets roses confiscables du jeu. Vous êtes maintenant une gardienne du Rose Absolu. Félicitations !",
		de: "You are now in possession of all the pink objects that can be confiscated. You are now a Guardian of Ultra Pink. Congratulations!",
		es: "Posees todos los objetos rosados. Ahora eres la Guardiana del Rosa Absoluto.¡Enhorabuena!"
	}
};
var ponyland = {
	id: "ponyland",
	name: {
		en: "For Ponyland !",
		fr: "For Ponyland !",
		de: "For Ponyland !",
		es: "¡Héroe de Ponyland!"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/icons/PonyLogo.png",
			title: {
				en: "For Ponyland!",
				fr: "For Ponyland !",
				de: "For Ponyland!",
				es: "¡Héroe de Ponyland!"
			}
		}
	],
	description: {
		en: "You have saved all the little ponies in the game. You are now a member of a famous secret society. Congratulations...",
		fr: "Vous avez sauvé tous les petits poney du jeu. Vous faites maintenant partie d'une célèbre société secrète. Félicitations...",
		de: "You have saved all the little ponies in the game. You are now a member of a famous secret society. Congratulations...",
		es: "Ha salvado a todos los ponys del juego. Bienvenido a la Sociedad Secreta de Amigos de Ponys. ¡Enhorabuena!"
	}
};
var vision = {
	id: "vision",
	name: {
		en: "Sight Beyond Sight",
		fr: "La vision par delà la vision",
		de: "Sight Beyond Sight",
		es: "Ver más allá de lo evidente"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/Epee.png",
			title: {
				en: "Sight Beyond Sight",
				fr: "La vision par delà la vision",
				de: "Sight Beyond Sight",
				es: "Ver más allá de lo evidente"
			}
		}
	],
	description: {
		en: "Thunder... Thunder... Thunder...",
		fr: "Cosmo... Cosmo... Cosmo...",
		de: "Thunder... Thunder... Thunder...",
		es: "Thunder... Thunder... Thunder..."
	}
};
var trolls = {
	id: "trolls",
	name: {
		en: "Troll Master",
		fr: "Eleveur de trolls",
		de: "Troll Master",
		es: "Criador de trolls"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/Trolls.png",
			title: {
				en: "Troll Master",
				fr: "Eleveur de trolls",
				de: "Troll Master",
				es: "Criador de trolls"
			}
		}
	],
	description: {
		en: "You have acquired the full troll collection. Those little guys with the 80s hair that you've been confiscating.",
		fr: "Vous avez acquis l'ensemble de la collection de trolls, les petites figurines avec des cheveux que vous avez confisqué.",
		de: "You have acquired the full troll collection. Those little guys with the 80s hair that you've been confiscating.",
		es: "Has completado tu colección de trolls. Serás la envidia de toda la escuela."
	}
};
var frogs = {
	id: "frogs",
	name: {
		en: "Frog Master",
		fr: "Maitre des grenouilles",
		de: "Frog Master",
		es: "Rey de las ranas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/Frogs.png",
			title: {
				en: "Frog Master",
				fr: "Maître des grenouilles",
				de: "Frog Master",
				es: "Rey de las ranas"
			}
		}
	],
	description: {
		en: "You've finally captured all of these wretched paper beasts! They're now yours though, they will obey your beck and call.",
		fr: "Vous les avez enfin attrapées ces satanées bestioles en papier ! Elles sont maintenant à vous, elles vous obéïssent au doigt et à l'oeil.",
		de: "You've finally captured all of these wretched paper beasts! They're now yours though, they will obey your beck and call.",
		es: "¡Por fin tienes todas las ranitas de papel! Ahora son tus fieles compañeras. ¡Cuidado, una se escapa!"
	}
};
var puces = {
	id: "puces",
	name: {
		en: "Flea Master",
		fr: "Dompteur de puces",
		de: "Flea Master",
		es: "Domador de pulgas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/Puces.png",
			title: {
				en: "Flea Master",
				fr: "Dompteur de puces",
				de: "Flea Master",
				es: "Domador de pulgas"
			}
		}
	],
	description: {
		en: "You have acquired all existing rubber fleas. Flick me!",
		fr: "Vous avez attrapé les diférentes puces existantes. Ca gratte...",
		de: "You have acquired all existing rubber fleas. Flick me!",
		es: "Has atrapado todas las frutipulgas existentes. ¡Fiúúúúú!"
	}
};
var totoc = {
	id: "totoc",
	name: {
		en: "Legendary Dummysucker",
		fr: "Totocheur légendaire",
		de: "Legendary Dummysucker",
		es: "Chupetero legendario"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/Totoc.png",
			title: {
				en: "Legendary Dummysucker",
				fr: "Totocheur légendaire",
				de: "Legendary Dummysucker",
				es: "Chupetero legendario"
			}
		}
	],
	description: {
		en: "You possess the entire collection of Dummies. including the black one!",
		fr: "Vous avez enfin toute la collection de totoches, même la noire !",
		de: "You possess the entire collection of Dummies. including the black one!",
		es: "¡Tienes todos los chupones, incluso el mítico chupón negro!"
	}
};
var dark = {
	id: "dark",
	name: {
		en: "Black Hell Professor",
		fr: "Professeur sombre des Enfers",
		de: "Black Hell Professor",
		es: "Profesor del Demonio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/Dark.png",
			title: {
				en: "Black Hell Professor",
				fr: "Professeur sombre des Enfers",
				de: "Black Hell Professor",
				es: "Profesor del Demonio"
			}
		}
	],
	description: {
		en: "A black jumping flea, a black dummy, a black spinning top and a black pen cap. With this selection you are the darkest teacher in school!",
		fr: "Une puce noire, une totoche noire, une toupie noire et un capuchon noir. Avec ça, vous êtes le professeur le plus dark de l'école !",
		de: "A black jumping flea, a black dummy, a black spinning top and a black pen cap. With this selection you are the darkest teacher in school!",
		es: "Frutipulga negra, chupón negro, trompo negro y un capuchón de boli negro. ¡Con eso eres el profesor más dark de la escuela!"
	}
};
var franc = {
	id: "franc",
	name: {
		en: "Freemason",
		fr: "Franc-Maçon",
		de: "Freemason",
		es: "Francomasón"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/items/Freemasson.png",
			title: {
				en: "Freemason",
				fr: "Franc-Maçon",
				de: "Freemason",
				es: "Francomasón"
			}
		}
	],
	description: {
		en: "You have rebuilt the insignia of one of your ancestors with the elements he sent to you across the centuries and throughout the school's history. He knew you'd find them.",
		fr: "Vous avez recomposé l'insigne d'un de vos ancêtres avec les objets qu'il vous a transmis à travers les siècles par l'histoire de cette école. Il savait que vous les retrouveriez.",
		de: "You have rebuilt the insignia of one of your ancestors with the elements he sent to you across the centuries and throughout the school's history. He knew you'd find them.",
		es: "Has vuelto a armar el emblema de tus ancestros con elementos que perduraron por siglos. Lo que se hereda, no se hurta."
	}
};
var jedi = {
	id: "jedi",
	name: {
		en: "Educational Jedi",
		fr: "Jedi de l'Education",
		de: "Educational Jedi",
		es: "Jedi de la Educación"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/Jedi.png",
			title: {
				en: "Educational Jedi",
				fr: "Jedi de l'Education",
				de: "Educational Jedi",
				es: "Jedi de la Educación"
			}
		}
	],
	description: {
		en: "You possess the 4 different colored lazer pointers. With the chalk dust, you can clearly see the beam. VVVvvvv... VVVvvvv...",
		fr: "Vous possédez les quatre pointeurs lasers colorés. Avec de la poussière de craie, on voit clairement le faisceau. VVVvvvv... VVVvvvv...",
		de: "You possess the 4 different colored lazer pointers. With the chalk dust, you can clearly see the beam. VVVvvvv... VVVvvvv...",
		es: "Posees los 4 punteros láser de colores. Con el polvo de la tiza, es espectacular. VVVvvvv... VVVvvvv..."
	}
};
var bijou = {
	id: "bijou",
	name: {
		en: "Jewel Expert",
		fr: "Expert bijoutier",
		de: "Jewel Expert",
		es: "Experto joyero"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/Bijou.png",
			title: {
				en: "Jewel Expert",
				fr: "Expert bijoutier",
				de: "Jewel Expert",
				es: "Experto joyero"
			}
		}
	],
	description: {
		en: "You have confiscated all 5 fake gemstones. However you know that one of them is genuine!",
		fr: "Vous avez confisqué les cinq fausses pierres précieuses. Mais vous savez qu'il y en a une authentique !",
		de: "You have confiscated all 5 fake gemstones. However you know that one of them is genuine!",
		es: "Has confiscado las 5 (falsas) piedras preciosas. ¡Aunque una sí parece auténtica!"
	}
};
var sugar = {
	id: "sugar",
	name: {
		en: "Sugar Master",
		fr: "Maître du sucre",
		de: "Sugar Master",
		es: "Rey azúcar"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/items/Sucre.png",
			title: {
				en: "Sugar Master",
				fr: "Maître du sucre",
				de: "Sugar Master",
				es: "Rey azúcar"
			}
		}
	],
	description: {
		en: "You have collected all the flavours of Chupi Chupa. In the world of school, He who controls the suckers is King!",
		fr: "Vous avez récupéré tous les parfum des sucettes Chupi Chupa. Dans le monde du collège, le maître du sucre est roi !",
		de: "You have collected all the flavours of Chupi Chupa. In the world of school, He who controls the suckers is King!",
		es: "Ahora tienes todos los sabores de los chupetes Chupi Chupa. ¡Eres taaaaan dulce!"
	}
};
var ghost = {
	id: "ghost",
	name: {
		en: "Spellingbusters",
		fr: "Wordbusters",
		de: "Spellingbusters",
		es: "Wordbuster"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/ghost.png",
			title: {
				en: "Spellingbusters",
				fr: "Wordbusters",
				de: "Spellingbusters",
				es: "Wordbuster"
			}
		}
	],
	description: {
		en: "You have recovered Charlotte's anti-ghost pack: potron pack, Goast Trapp, Psikothurmomatur, Pecto Goglies, and Peekayee.",
		fr: "Vous avez retrouvé l'arsenal anti-fantômes de Charlotte : pac a poltron, piaige a feNthome, gigot mette, pécto lunnettes, et pécaheu.",
		de: "You have recovered Charlotte's anti-ghost pack: potron pack, Goast Trapp, Psikothurmomatur, Pecto Goglies, and Peekayee.",
		es: "Has completado el equipo de cazafantasmas de Charlotte: el 'Quipo de potrones', el 'Sicotemónetro', las Gafas 'Héctor', el 'Pecae' y la 'Trampa pa' Fantashmash'."
	}
};
var plush = {
	id: "plush",
	name: {
		en: "Soft Toy Trainer",
		fr: "Eleveur de peluches",
		de: "Soft Toy Trainer",
		es: "Criador de peluches"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/plush.png",
			title: {
				en: "Cromagnanamous",
				fr: "Cromignone",
				de: "Cromagnanamous",
				es: "Peluchón"
			}
		}
	],
	description: {
		en: "You've adopted all the pupils' soft toys!",
		fr: "Vous avez adopté toutes les peluches des élèves !",
		de: "You've adopted all the pupils' soft toys!",
		es: "¡Has adoptado todos los peluches de los alumnos!"
	}
};
var kissmAll = {
	id: "kissmAll",
	name: {
		en: "Comedian!",
		fr: "Sacré comique !",
		de: "Comedian!",
		es: "¡Qué chistoso!"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/kissmAll.png",
			title: {
				en: "LOL",
				fr: "LOL",
				de: "LOL",
				es: "Carcajada"
			}
		}
	],
	description: {
		en: "You're a walking compendium of Teehee Toffee jokes.",
		fr: "Le roi des blagues Kissmar, c'est vous.",
		de: "You're a walking compendium of Teehee Toffee jokes.",
		es: "Eres el más gracioso gracias al chicle Chiste Globo"
	}
};
var allStar = {
	id: "allStar",
	name: {
		en: "WWE Champion",
		fr: "Champion de la WWE",
		de: "WWE Champion",
		es: "Campeón de la WWE"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/icons/allStar.png",
			title: {
				en: "Hoo-yah !!!",
				fr: "Bwaaaaarrrh !!!",
				de: "Hoo-yah !!!",
				es: "¡¡Grrrrrr!!"
			}
		}
	],
	description: {
		en: "You have the whole collection of wrestling figurines.",
		fr: "Vous possédez la collection complète des superstars du catch.",
		de: "You have the whole collection of wrestling figurines.",
		es: "Posees toda la colección de luchadores"
	}
};
var allschmoll = {
	id: "allschmoll",
	name: {
		en: "Lucky Charm Addict",
		fr: "T'as pas une gueule de porte-bonheur...",
		de: "Lucky Charm Addict",
		es: "Cara bonita"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/icons/allschmoll.png",
			title: {
				en: "Charming man",
				fr: "Prédatrice",
				de: "Charming man",
				es: "Guapo"
			}
		}
	],
	description: {
		en: "You've hunted all the Schmolls in school",
		fr: "Vous avez chassé tous les Schmolls de l'école. Une belle collection de trophées !",
		de: "You've hunted all the Schmolls in school",
		es: "¡Tienes todos los Schmolls de la escuela!"
	}
};
var allfschmoll = {
	id: "allfschmoll",
	name: {
		en: "Space Zombies",
		fr: "les zonzons de l'espace",
		de: "Space Zombies",
		es: "Cabeza brillante"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/allfschmoll.png",
			title: {
				en: "Space Zed",
				fr: "Zonzon de l'espace",
				de: "Space Zed",
				es: "Mente brillante"
			}
		}
	],
	description: {
		en: "You've collected all the neon Schmolls in school.",
		fr: "Vous avez récupéré toutes les versions phosphorescentes des Schmolls de l'école.",
		de: "You've collected all the neon Schmolls in school.",
		es: "TO-DO"
	}
};
var allColle = {
	id: "allColle",
	name: {
		en: "Glue Pot",
		fr: "Pot de colle",
		de: "Glue Pot",
		es: "Pegajoso"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/allColle.png",
			title: {
				en: "Glue Pot",
				fr: "Pot de colle",
				de: "Glue Pot",
				es: "Pegajoso"
			}
		}
	],
	description: {
		en: "You've confiscated all the sticky stuff in school",
		fr: "Vous avez confisqué tous les trucs qui collent de l'école.",
		de: "You've confiscated all the sticky stuff in school",
		es: "Tienes todos los objetos que sirven para pegar."
	}
};
var science = {
	id: "science",
	name: {
		en: "Sorceror's Apprentice",
		fr: "Apprenti sorcier",
		de: "Sorceror's Apprentice",
		es: "Aprendiz de hechicero"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/icons/science.png",
			title: {
				en: "Apprentice Sorceress",
				fr: "Apprentie sorcière",
				de: "Apprentice Sorceress",
				es: "Futuro científico"
			}
		}
	],
	description: {
		en: "Here's everything you need  to carry out some interesting experiments outwith physics and spirit",
		fr: "Voilà de quoi faire quelques expériences intéressantes au delà de la physique et l'esprit.",
		de: "Here's everything you need  to carry out some interesting experiments outwith physics and spirit",
		es: "Te encantan los objetos para hacer experimentos locos."
	}
};
var allbilles = {
	id: "allbilles",
	name: {
		en: "Marble Master",
		fr: "Maître des billes",
		de: "Marble Master",
		es: "Amo de las canicas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/icons/allbilles.png",
			title: {
				en: "Marble Mistress",
				fr: "Maîtresse des billes",
				de: "Marble Mistress",
				es: "Señor de las Esferas"
			}
		}
	],
	description: {
		en: "You have confiscated all types of marble currently available",
		fr: "Vous avez confisqué tous les types de billes existants pour le moment.",
		de: "You have confiscated all types of marble currently available",
		es: "Tienes todos los modelos de canicas existentes actualmente."
	}
};
var allapn = {
	id: "allapn",
	name: {
		en: "Paparazzi",
		fr: "Paparazzi",
		de: "Paparazzi",
		es: "Paparazzi"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/items/FullAPN.png",
			title: {
				en: "Paparazzi",
				fr: "Paparazzi",
				de: "Paparazzi",
				es: "Paparazzi"
			}
		}
	],
	description: {
		en: "The flash and the objective are mounted on the body. It's not professional-grade equipment, but uit seems prett good.",
		fr: "Le flash et l'objectif ont été montés sur le boitier. Ce n'est pas du matos de pro, mais la qualité semble correcte.",
		de: "The flash and the objective are mounted on the body. It's not professional-grade equipment, but uit seems prett good.",
		es: "Has armado la cámara fotográfica."
	}
};
var allyoyo = {
	id: "allyoyo",
	name: {
		en: "It comes and goes",
		fr: "Ça s'en va et ça revient",
		de: "It comes and goes",
		es: "Todo lo que sube, baja"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/allyoyo.png",
			title: {
				en: "It comes and goes",
				fr: "Ça s'en va et ça revient",
				de: "It comes and goes",
				es: "¡Yo lo hice!"
			}
		}
	],
	description: {
		en: "Like my affection...",
		fr: "C'est fait de tout petits riens.",
		de: "Like my affection...",
		es: "Está hecho de todo tipo de cositas."
	}
};
var alldolly = {
	id: "alldolly",
	name: {
		en: "DollyPickPocket",
		fr: "Pick Pocket",
		de: "DollyPickPocket",
		es: "Malvado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/icons/alldolly.png",
			title: {
				en: "Dolly Dimple",
				fr: "Pick Pockette",
				de: "Dolly Dimple",
				es: "¡Eso es mío!"
			}
		}
	],
	description: {
		en: "You've confiscated all the little girls' toys... and they will lay their vengeance upon thee!",
		fr: "Vous avez confisqué tous les jouets des petites filles... Leur vengeance sera terrible !",
		de: "You've confiscated all the little girls' toys... and they will lay their vengeance upon thee!",
		es: "Has confiscado todos los objetos de niñas. Cuídate, la venganza será terrible."
	}
};
var allbrutes = {
	id: "allbrutes",
	name: {
		en: "Latex Brutal Legend",
		fr: "Légende brutale en latex",
		de: "Latex Brutal Legend",
		es: "Leyenda brutal"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/icons/allbrutes.png",
			title: {
				en: "Latex Brute",
				fr: "Légende Brutale",
				de: "Latex Brute",
				es: "¡Qué bruto!"
			}
		}
	],
	description: {
		en: "You have found all the Brutes, and gaines the MyBrute title, 'Brutal Legend' ",
		fr: "Vous avez récupéré toutes les brutes, et même le titre 'Légende Brutale' de Labrute !",
		de: "You have found all the Brutes, and gaines the MyBrute title, 'Brutal Legend' ",
		es: "¡Tienes todos los muñequitos de El Bruto!"
	}
};
var allgort = {
	id: "allgort",
	name: {
		en: "Cybernetician",
		fr: "Cybernéticien",
		de: "Cybernetician",
		es: "Cibernético"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/icons/allgort.png",
			title: {
				en: "Cybernetics Specialist",
				fr: "Cybernéticienne",
				de: "Cybernetics Specialist",
				es: "Mister Roboto"
			}
		}
	],
	description: {
		en: "You've found the prototype of Gort, the humanoid robot invented by Charlotte and designed by Kevin Norray.",
		fr: "Vous avez récupéré le prototype de Gort, le robot humanoïde imaginé par Charlotte et conçu par Kevin Norray.",
		de: "You've found the prototype of Gort, the humanoid robot invented by Charlotte and designed by Kevin Norray.",
		es: "Has juntado las piezas del robot Gort."
	}
};
var gortv2 = {
	id: "gortv2",
	name: {
		en: "Cybernetiician V2",
		fr: "Cybernéticien V2",
		de: "Cybernetiician V2",
		es: "Cibernético V2"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/gort2.png",
			title: {
				en: "Cybernetiician V2",
				fr: "Cybernéticien V2",
				de: "Cybernetiician V2",
				es: "Cibernético V2"
			}
		}
	],
	description: {
		en: "You have assembled Gort Mk2.",
		fr: "Vous avez assemblé la version Mark II de Gort.",
		de: "You have assembled Gort Mk2.",
		es: "Has ensamblado la versión Mark II de Gort."
	}
};
var gametrot = {
	id: "gametrot",
	name: {
		en: "Game Trotter - level 1",
		fr: "Game Trotter - niveau 1",
		de: "Game Trotter - level 1",
		es: "Game Trotter - nivel 1"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/gametrot.png",
			title: {
				en: "Game Trotter - level 1",
				fr: "Game Trotter - niveau 1",
				de: "Game Trotter - level 1",
				es: "Game Trotter - nivel 1"
			}
		}
	],
	description: {
		en: "Your video game knowledge is so extensive that you've earned the title of Game Trotter.",
		fr: "Vos connaissances en jeux vidéo sont suffisantes pour prétendre au premier niveau du titre Game Trotter.",
		de: "Your video game knowledge is so extensive that you've earned the title of Game Trotter.",
		es: "Tu conocimiento del mundo de los videojuegos te hacen merecedor del título de Game Trotter."
	}
};
var smileyb = {
	id: "smileyb",
	name: {
		en: "Smilectionner",
		fr: "Smilectionneur",
		de: "Smilectionner",
		es: "Sonrisitas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/smileyb.png",
			title: {
				en: "Smilectionner",
				fr: "Smilectionneur",
				de: "Smilectionner",
				es: "Sonrisitas"
			}
		}
	],
	description: {
		en: "Vous avez récupéré la première saison de la collection des badges Smileys.",
		fr: "Vous avez récupéré la première saison de la collection des badges Smileys.",
		de: "Vous avez récupéré la première saison de la collection des badges Smileys.",
		es: "Tienes tanto carisma que una sola sonrisa no te basta."
	}
};
var pattes = {
	id: "pattes",
	name: {
		en: "Hands off!",
		fr: "Bas les pattes !",
		de: "Hands off!",
		es: "Pégate a mi"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/pattes.png",
			title: {
				en: "Hands off!",
				fr: "Bas les pattes !",
				de: "Hands off!",
				es: "Pégate a mi"
			}
		}
	],
	description: {
		en: "You've collected the whole range of dirty sticky stuff. They're all covered in dust, crumbs and goodness knows what else... Beurk !",
		fr: "Vous avez récupéré la collection des sales paluches collantes. Elles sont toutes recouvertes de poussière et de miettes diverses... Beurk !",
		de: "You've collected the whole range of dirty sticky stuff. They're all covered in dust, crumbs and goodness knows what else... Beurk !",
		es: "Has completado tu colección de manos pegajosas. ¡Y todas pegan muy bien!"
	}
};
var noeltroll = {
	id: "noeltroll",
	name: {
		en: "Xmas Troll",
		fr: "Mon beau sapin",
		de: "Xmas Troll",
		es: "Troll de Navidad"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/icons/noel2013.png",
			title: {
				en: "Xmas Troll",
				fr: "Mon beau sapin",
				de: "Xmas Troll",
				es: "Troll de Navidad"
			}
		}
	],
	description: {
		en: "You have confiscated all the Xmas objects from the little children... Nice work!",
		fr: "Alors... Boule de neige, boule de noël, branche de sapin, cadeau pourri, boite de chocolats, peluche Jésus, et peluche Moïse... Le compte y est, vous avez confisqué tous les trucs de Noël des élèves. bravo !",
		de: "You have confiscated all the Xmas objects from the little children... Nice work!",
		es: "Has confiscado los objetos de navidad de tus alumnos. ¡Bravo!"
	}
};
var phone = {
	id: "phone",
	name: {
		en: "Mobile Phone",
		fr: "Téléphone portable",
		de: "Mobile Phone",
		es: "Teléfono móvil"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/PinkPhone.png"
		}
	],
	description: {
		en: "A pink mobile phone with a little good luck troll hanging off it.",
		fr: "C'est un téléphone portable rose avec un petit troll accroché dessus.",
		de: "A pink mobile phone with a little good luck troll hanging off it.",
		es: "Un modelo de Ñoquia rosado que lleva un troll enganchado como llavero."
	}
};
var talky = {
	id: "talky",
	name: {
		en: "Special Forces Walkie Talkie",
		fr: "Talkie walkie des Forces Spéciales",
		de: "Special Forces Walkie Talkie",
		es: "Walkie-talkie de las Fuerzas Especiales"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Talkie.png"
		}
	],
	description: {
		en: "A genuine military walkie talkie!",
		fr: "Un vrai talkie walkie militaire. Il est lourd !",
		de: "A genuine military walkie talkie!",
		es: "Un verdadero walkie-talkie militar. ¡Y cómo pesa!"
	}
};
var telec = {
	id: "telec",
	name: {
		en: "Etch-a-sketch",
		fr: "Télécran",
		de: "Etch-a-sketch",
		es: "Pantalla mágica"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Telecran.png"
		}
	],
	description: {
		en: "A screen filled with sand. You can draw things by turning the wheels!!",
		fr: "C'est un écran rempli de sable. On peut dessiner des trucs en tournant les molettes !",
		de: "A screen filled with sand. You can draw things by turning the wheels!!",
		es: "Es una pantalla llena de arena. ¡Se puede dibujar haciendo girar las manivelas!"
	}
};
var ball1 = {
	id: "ball1",
	name: {
		en: "White ping pong ball",
		fr: "Balle de ping pong blanche",
		de: "White ping pong ball",
		es: "Pelota blanca de ping pong "
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/WhitePong.png"
		}
	],
	description: {
		en: "A white three star ping pong ball.",
		fr: "Une balle de ping pong blanche trois étoiles.",
		de: "A white three star ping pong ball.",
		es: "La pelotita blanca que todos conocemos."
	}
};
var ball2 = {
	id: "ball2",
	name: {
		en: "Orange ping pong ball",
		fr: "Balle de ping pong orange",
		de: "Orange ping pong ball",
		es: "Pelota naranja de ping pong"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/OrangePong.png"
		}
	],
	description: {
		en: "An orange three star ping pong ball.",
		fr: "Une balle de ping pong orange trois étoiles.",
		de: "An orange three star ping pong ball.",
		es: "Esta es especial. ¡Es naranja!"
	}
};
var totoJ = {
	id: "totoJ",
	name: {
		en: "Yellow pacifier",
		fr: "Totoche jaune",
		de: "Yellow pacifier",
		es: "Chupete amarillo de la suerte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TotocheJ.png"
		}
	],
	description: {
		en: "A yellow pacifier. They're very in at the moment, pacifiers...",
		fr: "Une totoche jaune. C'est la mode en ce moment, les totoches.",
		de: "A yellow pacifier. They're very in at the moment, pacifiers...",
		es: "¡La moda de los chupetes de plástico ha vuelto!"
	}
};
var totoV = {
	id: "totoV",
	name: {
		en: "Green pacifier",
		fr: "Totoche verte",
		de: "Green pacifier",
		es: "Chupete verde de la suerte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TotocheV.png"
		}
	],
	description: {
		en: "A green pacifier. Green is a nice color. Reminds me of Fruitiparc.",
		fr: "Une totoche verte. C'est joli le vert. Ca rappelle Frutiparc.",
		de: "A green pacifier. Green is a nice color. Reminds me of Fruitiparc.",
		es: "¡La moda de los chupetes de plástico ha vuelto!"
	}
};
var totoR = {
	id: "totoR",
	name: {
		en: "Pink pacifier",
		fr: "Totoche rose",
		de: "Pink pacifier",
		es: "Chupete rosado de la suerte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TotocheR.png"
		}
	],
	description: {
		en: "Check it out, a pink pacifier. You don't have one of those yet...",
		fr: "Tiens, une totoche rose. Vous ne l'aviez pas celle-là...",
		de: "Check it out, a pink pacifier. You don't have one of those yet...",
		es: "¡La moda de los chupetes de plástico ha vuelto!"
	}
};
var totoB = {
	id: "totoB",
	name: {
		en: "Blue pacifier",
		fr: "Totoche bleue",
		de: "Blue pacifier",
		es: "Chupete azul de la suerte"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TotocheB.png"
		}
	],
	description: {
		en: "A blue pacifier.",
		fr: "Une totoche bleue.",
		de: "A blue pacifier.",
		es: "¡La moda de los chupetes de plástico ha vuelto!"
	}
};
var totoN = {
	id: "totoN",
	name: {
		en: "Kick-ass black pacifier",
		fr: "Totoche noire des Enfers",
		de: "Kick-ass black pacifier",
		es: "Chupete de la suerte Negro Infierno"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/items/TotocheN.png"
		}
	],
	description: {
		en: "A super rare kick-ass black pacifier! A massive stroke of luck!",
		fr: "Une totoche noire des Enfers super rare ! Quelle chance !",
		de: "A super rare kick-ass black pacifier! A massive stroke of luck!",
		es: "¡Es un modelo rarísimo! ¡Qué suerte!"
	}
};
var capN = {
	id: "capN",
	name: {
		en: "Black pen cap",
		fr: "Capuchon noir",
		de: "Black pen cap",
		es: "Capuchón negro"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/CapuchonN.png"
		}
	],
	description: {
		en: "A black pen cap.",
		fr: "C'est un capuchon de stylo noir.",
		de: "A black pen cap.",
		es: "Un bolígrafo negro fue víctima de un niño."
	}
};
var capB = {
	id: "capB",
	name: {
		en: "Blue pen cap",
		fr: "Capuchon bleu",
		de: "Blue pen cap",
		es: "Capuchón azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/CapuchonB.png"
		}
	],
	description: {
		en: "Bleugh, a chewed up pen cap... This one is blue..",
		fr: "Beurk, un capuchon tout mordillé... Celui-ci est bleu.",
		de: "Bleugh, a chewed up pen cap... This one is blue..",
		es: "Puaj, un capuchón de bolígrafo azul todo masticado..."
	}
};
var capR = {
	id: "capR",
	name: {
		en: "Red pen cap",
		fr: "Capuchon rouge",
		de: "Red pen cap",
		es: "Capuchón rojo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/CapuchonR.png"
		}
	],
	description: {
		en: "A pen cap that's been well chewed... This one is red, and... Oh! There's even a little bit of saliva in it!",
		fr: "Un capuchon tout mordillé... Celui-ci est rouge, et... Ho ! Il reste même un peu de salive dedans !",
		de: "A pen cap that's been well chewed... This one is red, and... Oh! There's even a little bit of saliva in it!",
		es: "Un capuchón de bolígrafo rojo lleno de saliva,  ajjj..."
	}
};
var capV = {
	id: "capV",
	name: {
		en: "Green pen cap",
		fr: "Capuchon vert",
		de: "Green pen cap",
		es: "Capuchón  verde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/CapuchonV.png"
		}
	],
	description: {
		en: "A green pen cap.",
		fr: "C'est un capuchon de stylo vert.",
		de: "A green pen cap.",
		es: "Lo que quedó de un bolígrafo verde tras su encuentro con un niño ansioso..."
	}
};
var compa = {
	id: "compa",
	name: {
		en: "Compas",
		fr: "Compas",
		de: "Compas",
		es: "Compás"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/items/Compas.png"
		}
	],
	description: {
		en: "A golden compass. It looks like some of these creatures don't have any budget problems...",
		fr: "Un compas doré. Certains n'ont pas de problème de budget on dirait...",
		de: "A golden compass. It looks like some of these creatures don't have any budget problems...",
		es: "Un compás dorado. Debe ser de una finísima colección..."
	}
};
var equer = {
	id: "equer",
	name: {
		en: "Equerre",
		fr: "Equerre",
		de: "Equerre",
		es: "Escuadra"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/items/Equerre.png"
		}
	],
	description: {
		en: "A solid gold set square. There's probably a matching compass..",
		fr: "Une équerre en or massif.",
		de: "A solid gold set square. There's probably a matching compass..",
		es: "Una escuadra de oro. Parece que venía con un compás. Vaya objeto."
	}
};
var elast = {
	id: "elast",
	name: {
		en: "Elastic Band",
		fr: "Elastique",
		de: "Elastic Band",
		es: "Liga"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Elastique.png"
		}
	],
	description: {
		en: "An elastic band. This one stings... It still stings actually...",
		fr: "Un élastique. Il a fait mal celui-là... Ça pique encore.",
		de: "An elastic band. This one stings... It still stings actually...",
		es: "Una liga que ya hizo daño a más de 869,504 personas... Sí, la misma."
	}
};
var bReb = {
	id: "bReb",
	name: {
		en: "Bouncy Ball",
		fr: "Balle rebondissante",
		de: "Bouncy Ball",
		es: "Pelotita saltarina"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/ReBall.png"
		}
	],
	description: {
		en: "A bouncy ball. Not an easy one to catch!!",
		fr: "Une balle rebondissante. Elle n'était pas facile à attraper !",
		de: "A bouncy ball. Not an easy one to catch!!",
		es: "Rebota mucho. ¡Es casi imposible atraparla!"
	}
};
var bReb2 = {
	id: "bReb2",
	name: {
		en: "Giant Bouncy Ball",
		fr: "Balle rebondissante géante",
		de: "Giant Bouncy Ball",
		es: "Pelota saltarina gigante"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BigReBall.png"
		}
	],
	description: {
		en: "A big bouncy ball. So tempting to launch it against the wall as hard as possible.",
		fr: "Une grosse balle rebondissante. C'est très tentant de la balancer très fort contre le mur.",
		de: "A big bouncy ball. So tempting to launch it against the wall as hard as possible.",
		es: "La versión XL de un clásico de los recreos. Da muchas ganas da lanzarla contra un muro."
	}
};
var tennis = {
	id: "tennis",
	name: {
		en: "Tennis Ball",
		fr: "Balle de tennis",
		de: "Tennis Ball",
		es: "Pelota de tenis"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TennisBall.png"
		}
	],
	description: {
		en: "A tennis ball. Reminds you of a match this weekend at Roland Garros.",
		fr: "Une balle de tennis. Ça vous rappelle que vous avez un match ce week-end à Roland Garros.",
		de: "A tennis ball. Reminds you of a match this weekend at Roland Garros.",
		es: "Esta cayó en la tribuna de Roland Garros y nunca fue devuelta."
	}
};
var puceV = {
	id: "puceV",
	name: {
		en: "Green flea",
		fr: "Puce verte",
		de: "Green flea",
		es: "Frutipulga verde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/PuceV.png"
		}
	],
	description: {
		en: "A damn rubber flea toy... At least this is the last time this one bothers you.",
		fr: "Une de ces satanées puces... Au moins, celle-ci ne vous embêtera plus.",
		de: "A damn rubber flea toy... At least this is the last time this one bothers you.",
		es: "Esas cositas de goma que saltan al voltearlas... ¡Fiuuuuuu!"
	}
};
var puceR = {
	id: "puceR",
	name: {
		en: "Pink flea",
		fr: "Puce rose",
		de: "Pink flea",
		es: "Frutipulga rosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/PuceR.png"
		}
	],
	description: {
		en: "A pink rubber flea... Fortunately this one is in pretty good condition.",
		fr: "Une puce rose... Heureusement, celle-ci est hors d'état de nuire.",
		de: "A pink rubber flea... Fortunately this one is in pretty good condition.",
		es: "Esas cositas de goma que saltan al voltearlas... ¡Fiuuuuuu!"
	}
};
var puceN = {
	id: "puceN",
	name: {
		en: "Demonic black flea",
		fr: "Puce noire démoniaque",
		de: "Demonic black flea",
		es: "Frutipulga negra de la muerte"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/items/PuceN.png"
		}
	],
	description: {
		en: "The demon black flea! Not before time! You've dreamed of getting your hands on one of these for ages...",
		fr: "La puce noire démoniaque ! Ce n'est pas trop tôt. Depuis le temps que vous rêviez de mettre la main dessus...",
		de: "The demon black flea! Not before time! You've dreamed of getting your hands on one of these for ages...",
		es: "¡La que nadie pudo tener! ¡La volteas y salta!"
	}
};
var dents = {
	id: "dents",
	name: {
		en: "Vampire fangs",
		fr: "Dents de vampire",
		de: "Vampire fangs",
		es: "Dientes de vampiro"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Dentier.png"
		}
	],
	description: {
		en: "A set of vampire teeth. There's a grain of rice stuck in them, no doubt from the cafeteria.",
		fr: "Un dentier de vampire. Un grain de riz y est coincé, sûrement de la cantine.",
		de: "A set of vampire teeth. There's a grain of rice stuck in them, no doubt from the cafeteria.",
		es: "Esta dentadura de juguete lleva aún un grano de arroz pegado... Mmmmh, ¡arroz con leche!"
	}
};
var pomme = {
	id: "pomme",
	name: {
		en: "Apple",
		fr: "Pomme",
		de: "Apple",
		es: "Manzana"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Apple.png"
		}
	],
	description: {
		en: "An apple. Bite into it once to 'Norrise' it, it'll be worth much more then!",
		fr: "Une pomme. Mordez une fois dedans pour la 'norriser', elle aura bien plus de valeur !",
		de: "An apple. Bite into it once to 'Norrise' it, it'll be worth much more then!",
		es: "Una manzana. Muérdela una vez para que sea más valiosa!"
	}
};
var gort = {
	id: "gort",
	name: {
		en: "Plans of Gort",
		fr: "Plan de Gort",
		de: "Plans of Gort",
		es: "Diseño de Gort"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gort.png"
		}
	],
	description: {
		en: "Looks like the plans for a humanoid robot... Signed by 'Charllottte'. There's no doubt it's hers.",
		fr: "On dirait le plan d'un robot humanoïde... Il est signé chariottte. Pas de doute, c'est bien à elle.",
		de: "Looks like the plans for a humanoid robot... Signed by 'Charllottte'. There's no doubt it's hers.",
		es: "El dibujo de un robot humanoide... Lleva la firma de Charlotte."
	}
};
var bball = {
	id: "bball",
	name: {
		en: "Baseball",
		fr: "Balle de Baseball",
		de: "Baseball",
		es: "Pelota de baseball"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BaseBall.png"
		}
	],
	description: {
		en: "A genuine baseball. This brings back memories.",
		fr: "Une balle de Baseball. Ça... ça peut faire mal. Vraiment mal.",
		de: "A genuine baseball. This brings back memories.",
		es: "Es auténtica, debe doler mucho y está algo usada."
	}
};
var toupB = {
	id: "toupB",
	name: {
		en: "Blue spinning top",
		fr: "Toupie de combat bleue",
		de: "Blue spinning top",
		es: "Trompo azul de combate"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/ToupieB.png"
		}
	],
	description: {
		en: "A blue battle-grade spinning top. Come recess, this bad boy doesn't mess around!!",
		fr: "Une toupie de combat bleue. Ça ne plaisante plus à la récré !",
		de: "A blue battle-grade spinning top. Come recess, this bad boy doesn't mess around!!",
		es: "Un modelo de lujo. ¡El recreo se vuelve cosa de profesionales!"
	}
};
var toupV = {
	id: "toupV",
	name: {
		en: "Green spinning top",
		fr: "Toupie de combat verte",
		de: "Green spinning top",
		es: "Trompo verde de combate"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/ToupieV.png"
		}
	],
	description: {
		en: "A battle-grade spinning top. A green one.",
		fr: "Une toupie de combat. Celle-ci est verte.",
		de: "A battle-grade spinning top. A green one.",
		es: "De combate, la punta no perdona."
	}
};
var toupR = {
	id: "toupR",
	name: {
		en: "Titanium spinning top",
		fr: "Toupie de combat Titan",
		de: "Titanium spinning top",
		es: "Trompo de titanio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/items/ToupieR.png"
		}
	],
	description: {
		en: "A battle-grade spinning top. This one kicks ass.",
		fr: "Une grosse toupie de combat. Elle doit faire mal celle-là.",
		de: "A battle-grade spinning top. This one kicks ass.",
		es: "Este es más pesado y es prácticamente indestructible."
	}
};
var toup1 = {
	id: "toup1",
	name: {
		en: "Luminous spinning top",
		fr: "Toupie lumineuse",
		de: "Luminous spinning top",
		es: "Trompo luminoso"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 5,
			icon: "/img/items/ToupieL1.png"
		}
	],
	description: {
		en: "A battle-grade spinning top. It's small, but it glows when it spins.",
		fr: "Une toupie de combat. Elle est petite, mais elle génère de la lumière quand elle tourne.",
		de: "A battle-grade spinning top. It's small, but it glows when it spins.",
		es: "Se ilumina cuando gira."
	}
};
var toup2 = {
	id: "toup2",
	name: {
		en: "Nebulous spinning top",
		fr: "Toupie Nébuleuse",
		de: "Nebulous spinning top",
		es: "Trompo Nebulosa"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/items/ToupieL2.png"
		}
	],
	description: {
		en: "The legendary nebulous spinning top. The power of the universe is in your hands!",
		fr: "La légendaire toupie Nébuleuse. La puissance de l'Univers entre vos mains !",
		de: "The legendary nebulous spinning top. The power of the universe is in your hands!",
		es: "El legendario Trompo Nebulosa. ¡El poder del cosmos en tus manos!"
	}
};
var ring = {
	id: "ring",
	name: {
		en: "Center Table Ring",
		fr: "Anneau de la table du milieu",
		de: "Center Table Ring",
		es: "Anillo dorado"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Ring.png"
		}
	],
	description: {
		en: "A gold plastic ring. It probably came off a table round here somewhere...",
		fr: "Un anneau en plastique doré. Il vient probablement de la table du milieu...",
		de: "A gold plastic ring. It probably came off a table round here somewhere...",
		es: "Un anillo de plástico dorado. Viene seguramente de la Tierra Media..."
	}
};
var mars = {
	id: "mars",
	name: {
		en: "Apollo chocolate bar",
		fr: "Barre chocolatée Janvier",
		de: "Apollo chocolate bar",
		es: "Chocolate Campeón"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Mars.png"
		}
	],
	description: {
		en: "An Apollo always makes you feel better.",
		fr: "Un Janvier, et ça repart !",
		de: "An Apollo always makes you feel better.",
		es: "Mmmm, a pesar de los años que lleva derretido. ¡Está buenísimo!"
	}
};
var dgun = {
	id: "dgun",
	name: {
		en: "Double water pistols",
		fr: "Double pistolets à eau",
		de: "Double water pistols",
		es: "Doble pistola de agua"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DoubleWgun.png"
		}
	],
	description: {
		en: "Two water pistols for the price of one! That'll be useful in a few years, when Die2Nite comes out.",
		fr: "Deux pistolets à eau pour le prix d'un ! Ca sera utile dans quelques années, quand Hordes sera sorti.",
		de: "Two water pistols for the price of one! That'll be useful in a few years, when Die2Nite comes out.",
		es: "¡Una promoción 2x1! Te servirá para defenderte hasta de los zombies."
	}
};
var wgun = {
	id: "wgun",
	name: {
		en: "Water pistol",
		fr: "Pistolet à eau",
		de: "Water pistol",
		es: "Pistola de agua"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/WaterGun.png"
		}
	],
	description: {
		en: "A water pistol. Like all water pistols, it leaks... Obviously...",
		fr: "Un pistolet à eau. Comme tous les pistolets à eau, il fuit... Evidemment...",
		de: "A water pistol. Like all water pistols, it leaks... Obviously...",
		es: "Una pistola de agua, que como todas, chorrea... En Zombinoia yo tenía una igual."
	}
};
var kalas = {
	id: "kalas",
	name: {
		en: "Paper machine gun",
		fr: "Mitraillette en papier",
		de: "Paper machine gun",
		es: "Ametralladora de papel"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Kalash.png"
		}
	],
	description: {
		en: "A 1:1 scale model of a machine gun, made entirely out of paper... It'd almost make you proud.",
		fr: "Une mitraillette à l'échelle 1/1, faite entièrement en papier... Il y a presque de quoi être fier.",
		de: "A 1:1 scale model of a machine gun, made entirely out of paper... It'd almost make you proud.",
		es: "Una ametralladora a escala real hecha totalmente de papel... Impresionante."
	}
};
var lancP = {
	id: "lancP",
	name: {
		en: "Slingshot",
		fr: "Lance-pierres",
		de: "Slingshot",
		es: "Tirachinas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/LancePierre.png"
		}
	],
	description: {
		en: "A slingshot, which slings shot.",
		fr: "Un lance-pierres qui lance des pierres.",
		de: "A slingshot, which slings shot.",
		es: "El arma más eficaz de todos los tiempos."
	}
};
var trolV = {
	id: "trolV",
	name: {
		en: "Green-haired troll",
		fr: "Troll aux cheveux verts",
		de: "Green-haired troll",
		es: "Troll de cabellos verdes"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TrollV.png"
		}
	],
	description: {
		en: "A small plastic troll with green hair.",
		fr: "Un petit troll en plastique avec des cheveux verts.",
		de: "A small plastic troll with green hair.",
		es: "El famoso muñeco con pelos verdes."
	}
};
var trolB = {
	id: "trolB",
	name: {
		en: "Blue-haired troll",
		fr: "Troll aux cheveux bleus",
		de: "Blue-haired troll",
		es: "Troll de cabellos azules"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TrollB.png"
		}
	],
	description: {
		en: "A small plastic troll with blue hair",
		fr: "Un petit troll en plastique avec des cheveux bleus.",
		de: "A small plastic troll with blue hair",
		es: "El famoso muñeco con pelos azules."
	}
};
var trolR = {
	id: "trolR",
	name: {
		en: "Pink-haired troll",
		fr: "Troll aux cheveux roses",
		de: "Pink-haired troll",
		es: "Troll de cabellos rosados"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TrollR.png"
		}
	],
	description: {
		en: "A small plastic troll with pink hair. This one is particularly ugly",
		fr: "Un petit troll en plastique avec des cheveux roses. Il a une sale tête celui-là...",
		de: "A small plastic troll with pink hair. This one is particularly ugly",
		es: "El famoso muñeco con pelos rosados. Este es mi favorito."
	}
};
var trolJ = {
	id: "trolJ",
	name: {
		en: "Yellow-haired troll",
		fr: "Troll aux cheveux jaunes",
		de: "Yellow-haired troll",
		es: "Troll de cabellos amarillos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TrollJ.png"
		}
	],
	description: {
		en: "A small plastic troll with yellow hair",
		fr: "Un petit troll en plastique avec des cheveux jaunes.",
		de: "A small plastic troll with yellow hair",
		es: "El famoso muñeco con pelos amarillo."
	}
};
var trolO = {
	id: "trolO",
	name: {
		en: "Orange-haired troll",
		fr: "Troll aux cheveux orange",
		de: "Orange-haired troll",
		es: "Troll de cabellos naranjas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TrollO.png"
		}
	],
	description: {
		en: "A small plastic troll with orange hair",
		fr: "Un petit troll en plastique avec des cheveux orange.",
		de: "A small plastic troll with orange hair",
		es: "El famoso muñeco con pelos naranjas."
	}
};
var trolM = {
	id: "trolM",
	name: {
		en: "Purple-haired troll",
		fr: "Troll aux cheveux mauves",
		de: "Purple-haired troll",
		es: "Troll de cabellos violetas"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/TrollM.png"
		}
	],
	description: {
		en: "A small plastic troll with purple hair",
		fr: "Un petit troll en plastique avec des cheveux mauves.",
		de: "A small plastic troll with purple hair",
		es: "El famoso muñeco con pelos violetas."
	}
};
var piou = {
	id: "piou",
	name: {
		en: "Pioupiou stuffed toy",
		fr: "Peluche Pioupiou",
		de: "Pioupiou stuffed toy",
		es: "Peluche Pio-Pio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Piou.png"
		}
	],
	description: {
		en: "A Pioupiou stuffed toy, manufactured in France. It's good for the economy!",
		fr: "Une peluche Pioupiou, fabriquée en France. C'est bon pour l'économie ça !",
		de: "A Pioupiou stuffed toy, manufactured in France. It's good for the economy!",
		es: "¡Ah, no sabías que existía!"
	}
};
var lapin = {
	id: "lapin",
	name: {
		en: "Blue rabbit ",
		fr: "Peluche lapin bleu",
		de: "Blue rabbit ",
		es: "Peluche Conejo Azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Rabbit.png"
		}
	],
	description: {
		en: "A blue rabbit. You had the same one a while back.",
		fr: "Un lapin bleu. Vous aviez le même autrefois.",
		de: "A blue rabbit. You had the same one a while back.",
		es: "Oye, tú tenías uno también."
	}
};
var arbal = {
	id: "arbal",
	name: {
		en: "Paper crossbow",
		fr: "Arbalête en papier",
		de: "Paper crossbow",
		es: "Ballesta de papel"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Arbalete.png"
		}
	],
	description: {
		en: "A crossbow made from paper... The worst of it is, that it works really well.",
		fr: "Une arbalète en papier... Le pire, c'est qu'elle fonctionne très bien.",
		de: "A crossbow made from paper... The worst of it is, that it works really well.",
		es: "Aunque no lo creas, funciona muy bien."
	}
};
var laseR = {
	id: "laseR",
	name: {
		en: "Red laser pointer",
		fr: "Laser pointeur rouge",
		de: "Red laser pointer",
		es: "Puntero láser rojo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/LaserR.png"
		}
	],
	description: {
		en: "A red laser pointer. You can change the tip so that it projects 'SOS'.",
		fr: "Un laser pointeur rouge. On peut changer l'embout. Celui-ci projette 'SOS'.",
		de: "A red laser pointer. You can change the tip so that it projects 'SOS'.",
		es: "Se le puede cambiar la punta. Este proyecta SOS."
	}
};
var laseV = {
	id: "laseV",
	name: {
		en: "Green laser pointer",
		fr: "Laser pointeur vert",
		de: "Green laser pointer",
		es: "Puntero láser verde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/LaserV.png"
		}
	],
	description: {
		en: "A green laser pointer. With a little chalk dust, you can see the beam really well.",
		fr: "Un laser pointeur vert. Avec un peu de poussière de craie, on voit très bien le faisceau.",
		de: "A green laser pointer. With a little chalk dust, you can see the beam really well.",
		es: "Y tiene pilas nuevas."
	}
};
var laseB = {
	id: "laseB",
	name: {
		en: "Blue laser pointer",
		fr: "Laser pointeur bleu",
		de: "Blue laser pointer",
		es: "Puntero láser azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/LaserB.png"
		}
	],
	description: {
		en: "A blue laser pointer. It's almost like having a light saber.",
		fr: "Un laser pointeur bleu. On dirait presque un sabre laser, la classe.",
		de: "A blue laser pointer. It's almost like having a light saber.",
		es: "El primer paso para ser un Jedi."
	}
};
var laseO = {
	id: "laseO",
	name: {
		en: "Orange laser pointer",
		fr: "Laser pointeur orange",
		de: "Orange laser pointer",
		es: "Puntero láser naranja"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/LaserO.png"
		}
	],
	description: {
		en: "An orange laser pointer. It's wavelength is pretty unusual for a laser pointer.",
		fr: "Un laser pointeur orange. C'est une longueur d'onde plutôt rare pour un laser.",
		de: "An orange laser pointer. It's wavelength is pretty unusual for a laser pointer.",
		es: "Ehhh, nunca viste un laser naranja..."
	}
};
var fourc = {
	id: "fourc",
	name: {
		en: "Fork",
		fr: "Fourchette",
		de: "Fork",
		es: "Tenedor"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Fourchette.png"
		}
	],
	description: {
		en: "A stainless steel fork... yeah, whatever.",
		fr: "Une fourchette en inox... N'importe quoi.",
		de: "A stainless steel fork... yeah, whatever.",
		es: "Bueno y, ¿para qué?"
	}
};
var knife = {
	id: "knife",
	name: {
		en: "Bowie",
		fr: "Bowie",
		de: "Bowie",
		es: "Navaja"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Knife.png"
		}
	],
	description: {
		en: "An australian knife... This thing could kill a saltwater crocodile.",
		fr: "Un couteau australien... Il y a de quoi se débarasser d'un crocodile marin.",
		de: "An australian knife... This thing could kill a saltwater crocodile.",
		es: "Un cuchillo australiano usado para matar cocodrilos recalcitrantes."
	}
};
var pogs = {
	id: "pogs",
	name: {
		en: "Pozg",
		fr: "Pozg",
		de: "Pozg",
		es: "Pozg"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Pogs.png"
		}
	],
	description: {
		en: "Genuine Frutiparc pogs. Kaluga, Swapou... They even have the Burning Kiwi logo!",
		fr: "Des Pozg authentiques à l'effigie de Frutiparc... Kaluga, Swapou... Il y a même les logos de Burning Kiwi !",
		de: "Genuine Frutiparc pogs. Kaluga, Swapou... They even have the Burning Kiwi logo!",
		es: "Un muñeco de uno de los primeros juegos de Motion Twin, ¡Frutiparc! Esto solo lo tienen los fanáticos."
	}
};
var epee1 = {
	id: "epee1",
	name: {
		en: "Sword handle",
		fr: "Poignée d'épée",
		de: "Sword handle",
		es: "Mango de espada"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/EpeeManche.png"
		}
	],
	description: {
		en: "Part of a sword. This is the handle, you'll need to find the other pieces.",
		fr: "Un morceau d'épée. C'est la poignée, il faut récupérer les autres bouts.",
		de: "Part of a sword. This is the handle, you'll need to find the other pieces.",
		es: "Un trozo de espada. ¿Dónde estará el resto?"
	}
};
var epee2 = {
	id: "epee2",
	name: {
		en: "Sword sheath",
		fr: "Garde d'épée",
		de: "Sword sheath",
		es: "Guardamano de espada"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/EpeeGarde.png"
		}
	],
	description: {
		en: "A sheath for a sword. There's a fish eye stuck on it which has been painted red... Woah, that stinks!",
		fr: "Une garde d'épée. Il y a un oeil de saumon collé qui a été peint en rouge... Pouah, ça pue !",
		de: "A sheath for a sword. There's a fish eye stuck on it which has been painted red... Woah, that stinks!",
		es: "Un trozo de espada de plástico con un ojo de pescado pegado... Ajjjj. ¡Y apesta!"
	}
};
var epee3 = {
	id: "epee3",
	name: {
		en: "Part of a blade",
		fr: "Morceau de lame",
		de: "Part of a blade",
		es: "Trozo de espada"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/EpeeLame1.png"
		}
	],
	description: {
		en: "A shard of a plastic blade. 'The blade lights' is written on it. The rest must be on other pieces. Weird, it seems to smell of fish...",
		fr: "On dirait une lame en plastique. Il est écrit 'La lame s'allume en'. La suite doit être sur un autre morceau. C'est étrange, on dirait qu'elle sent le poisson...",
		de: "A shard of a plastic blade. 'The blade lights' is written on it. The rest must be on other pieces. Weird, it seems to smell of fish...",
		es: "Un trozo de espada de plástico. Lleva escrito: 'La espada se enciende'... El resto debe estar en el otro pedazo. Es extraño, huele a pescado..."
	}
};
var epee4 = {
	id: "epee4",
	name: {
		en: "Part of a blade",
		fr: "Morceau de lame",
		de: "Part of a blade",
		es: "Trozo de espada"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/EpeeLame2.png"
		}
	],
	description: {
		en: "A shard of a plastic blade. 'up in green when' is written on it. The rest must be on other pieces.",
		fr: "Un morceau de lame en plastique. Il est écrit 'vert quand un'. Le reste doit être sur d'autres morceaux.",
		de: "A shard of a plastic blade. 'up in green when' is written on it. The rest must be on other pieces.",
		es: "Un trozo de espada de plástico. Lleva escrito: 'de color verde cuando'... El resto debe estar en el otro pedazo."
	}
};
var epee5 = {
	id: "epee5",
	name: {
		en: "Part of a blade",
		fr: "Morceau de lame",
		de: "Part of a blade",
		es: "Trozo de espada"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/EpeeLame3.png"
		}
	],
	description: {
		en: "A shard of a plastic blade. 'a teacher is nearby' is written on it. The rest must be on other pieces.",
		fr: "Un morceau de lame en plastique. Il est écrit 'prof est proche.'. Le début doit être sur un autre morceau.",
		de: "A shard of a plastic blade. 'a teacher is nearby' is written on it. The rest must be on other pieces.",
		es: "Un trozo de espada de plástico. Lleva escrito: 'un profesor está cerca.' Un mensaje a completar, muy ingenioso."
	}
};
var epee6 = {
	id: "epee6",
	name: {
		en: "Sword tip",
		fr: "Pointe de lame",
		de: "Sword tip",
		es: "Punta de espada"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/EpeePointe.png"
		}
	],
	description: {
		en: "The tip of a plastic blade. Fortunately it's completely inoffensive. The rest must be knocking around somewhere.",
		fr: "Une pointe de lame en plastique. Heureusement, elle est complètement inoffensive. Il doit y avoir le reste quelque part.",
		de: "The tip of a plastic blade. Fortunately it's completely inoffensive. The rest must be knocking around somewhere.",
		es: "La punta de una espada de plástico, aunque lleva marcas de varias batallas. ¿Dónde andará el resto?"
	}
};
var gren1 = {
	id: "gren1",
	name: {
		en: "Paper frog",
		fr: "Grenouille en papier",
		de: "Paper frog",
		es: "Rana de papel"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Grenouille1.png"
		}
	],
	description: {
		en: "A little paper frog. It really jumps when you push down on the back of it then let go.",
		fr: "Une petite grenouille en papier. Elle saute pour de vrai quand on appuie à l'arrière et qu'on relâche.",
		de: "A little paper frog. It really jumps when you push down on the back of it then let go.",
		es: "Una ranita de papel. Salta de verdad cuando se presiona y se suelta."
	}
};
var gren2 = {
	id: "gren2",
	name: {
		en: "Paper frog (squared paper)",
		fr: "Grenouille en papier quadrillé",
		de: "Paper frog (squared paper)",
		es: "Rana de papel cuadriculado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Grenouille2.png"
		}
	],
	description: {
		en: "A little paper frog. Made using squared paper, most likely from a notepad.",
		fr: "Une petite grenouille en papier. Celle-ci est faite avec du papier quadrillé, probablement d'un bloc-notes.",
		de: "A little paper frog. Made using squared paper, most likely from a notepad.",
		es: "Una ranita de papel. Esta está hecha con una hoja del curso de matemáticas."
	}
};
var gren3 = {
	id: "gren3",
	name: {
		en: "Paper frog (graph paper)",
		fr: "Grenouille en papier millimétré",
		de: "Paper frog (graph paper)",
		es: "Rana de papel rayado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Grenouille3.png"
		}
	],
	description: {
		en: "A little paper frog. Made using millimetre squared graph paper... Why not, it's geometry in 3D after all.",
		fr: "Une petite grenouille en papier. Celle-ci est faite avec du papier millimétré... Bah, c'est de la géométrie en 3D, après tout.",
		de: "A little paper frog. Made using millimetre squared graph paper... Why not, it's geometry in 3D after all.",
		es: "Una ranita de papel. Esta está hecha con una hoja del curso de historia."
	}
};
var gren4 = {
	id: "gren4",
	name: {
		en: "Turbo frog",
		fr: "Grenouille turbo",
		de: "Turbo frog",
		es: "Ranita turbo"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 10,
			icon: "/img/items/Grenouille4.png"
		}
	],
	description: {
		en: "A little frog made from an overhead projector transparency. This firm plastic material allows the frog to jump several metres. Impressive stuff!",
		fr: "Une petite grenouille faite avec du transparent de rétro-projecteur. Cette matière plastifiée très rigide lui permet de faire des bonds de plusieurs mètres. Impressionnant !",
		de: "A little frog made from an overhead projector transparency. This firm plastic material allows the frog to jump several metres. Impressive stuff!",
		es: "Esta ranita fue hecha con un trozo de radiografía. Ese material le permite dar saltos enoooormes. ¡Estupendo!"
	}
};
var marto = {
	id: "marto",
	name: {
		en: "Hammer",
		fr: "Marteau",
		de: "Hammer",
		es: "Martillo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Marteau.png"
		}
	],
	description: {
		en: "A hammer. Quite random... This won't do your head in anymore.",
		fr: "Un marteau. N'importe quoi... Au moins, celui-ci ne me cassera plus la tête.",
		de: "A hammer. Quite random... This won't do your head in anymore.",
		es: "¿Qué hace esto en la escuela? Al menos no será usado contra ti... ¿O sí?"
	}
};
var scoub = {
	id: "scoub",
	name: {
		en: "Scoubidou",
		fr: "Scoubidou",
		de: "Scoubidou",
		es: "Pulsera de hilos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Scoubidou.png"
		}
	],
	description: {
		en: "A red and yellow scoubidou. A classic square stitch style with 2 threads.",
		fr: "Un scoubidou rouge et jaune. Un classique de forme carrée avec deux fils.",
		de: "A red and yellow scoubidou. A classic square stitch style with 2 threads.",
		es: "La moda, directamente de la playa a la escuela."
	}
};
var nba = {
	id: "nba",
	name: {
		en: "Basketball Cards",
		fr: "Cartes de basket",
		de: "Basketball Cards",
		es: "Cartas de basket"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Nba.png"
		}
	],
	description: {
		en: "A complete collection of NBA basketball team logos! Lucky you!",
		fr: "La collection complète des logos des clubs de basket américains ! Quelle chance !",
		de: "A complete collection of NBA basketball team logos! Lucky you!",
		es: "¡Una colección completa de los equipos de basket de USA! Vaya tesoro..."
	}
};
var macht = {
	id: "macht",
	name: {
		en: "Anti-zombie machete",
		fr: "Machette anti-zombies",
		de: "Anti-zombie machete",
		es: "Machete anti-zombies"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Machette.png"
		}
	],
	description: {
		en: "A machete-shaped anti-zombie device for local use.",
		fr: "Un anti-zombies sous forme de machette pour application locale.",
		de: "A machete-shaped anti-zombie device for local use.",
		es: "La solución definitiva para que esos pobres muertos vivientes dejen de sufrir."
	}
};
var tamag = {
	id: "tamag",
	name: {
		en: "Tamagochi",
		fr: "Tamagochi",
		de: "Tamagochi",
		es: "Tamagochi"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Tamagochi.png"
		}
	],
	description: {
		en: "A real Tamagochi... and it's ringing!... It needs to be taken for a walk. This is the one thing you really shouldn't confiscate...",
		fr: "C'est un vrai Tamagochi. Il sonne !... Il faut aller le promener. C'est le truc qu'il ne fallait surtout pas confisquer...",
		de: "A real Tamagochi... and it's ringing!... It needs to be taken for a walk. This is the one thing you really shouldn't confiscate...",
		es: "¡Un clásico! Hubieras dado tu perro a cambio por uno de estos..."
	}
};
var rototo = {
	id: "rototo",
	name: {
		en: "Wuzzle",
		fr: "Peluche Rototo",
		de: "Wuzzle",
		es: "Peluche Rototó"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Rototo.png"
		}
	],
	description: {
		en: "A soft toy which seems to be a bizarrre crossbreed of a Bumblebee and a Lion",
		fr: "Une peluche représentant une étrange créature. Mon voisin avait la même.",
		de: "A soft toy which seems to be a bizarrre crossbreed of a Bumblebee and a Lion",
		es: "Un peluche de un personaje extraño..."
	}
};
var gameb = {
	id: "gameb",
	name: {
		en: "Gameboxx",
		fr: "Gameboite",
		de: "Gameboxx",
		es: "Gamedoy"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gameboite.png"
		}
	],
	description: {
		en: "A Gameboxx, the latest portable console. There are no batteries in it...",
		fr: "C'est une Gameboite, la toute nouvelle console portable. Elle n'a plus de pile...",
		de: "A Gameboxx, the latest portable console. There are no batteries in it...",
		es: "La versión china y barata de la mini-consola. En clases, cualquier distracción es buena."
	}
};
var assas = {
	id: "assas",
	name: {
		en: "Assassin's Creek logo",
		fr: "Insigne Assassin's Craie",
		de: "Assassin's Creek logo",
		es: "Insignia Assassin's Grapas"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Assassin.png"
		}
	],
	description: {
		en: "It's a staple remover... But it looks like the insignia for a secret society.",
		fr: "C'est un arrache-agrafes... Ils s'en servent pour briser les craies. On dirait l'insigne d'une célèbre société secrète.",
		de: "It's a staple remover... But it looks like the insignia for a secret society.",
		es: "Un quitagrapas que parece además el símbolo de una sociedad secreta."
	}
};
var licorn = {
	id: "licorn",
	name: {
		en: "Inflatable Unicorn",
		fr: "Licorne gonflable",
		de: "Inflatable Unicorn",
		es: "Unicornio inflable"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Licorne.png"
		}
	],
	description: {
		en: "It's a beach inflatable in the shape of a unicorn.",
		fr: "C'est un ballon de plage gonflable en forme de licorne.",
		de: "It's a beach inflatable in the shape of a unicorn.",
		es: "En realidad es un caballo al que se le pegó un cono de helado. ¡Hey, eso lo vi en Arkadeo!"
	}
};
var pony1 = {
	id: "pony1",
	name: {
		en: "Little baby unicorn",
		fr: "Petit poney licorne",
		de: "Little baby unicorn",
		es: "Ponycornio"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Poney1.png"
		}
	],
	description: {
		en: "A little blue pony. This one has a horn on its head, probably for dismembering its enemies. Such violence...",
		fr: "Un petit poney bleu. Celui-ci possède une corne frontale, probablement pour éventrer ses ennemis. Quelle violence...",
		de: "A little blue pony. This one has a horn on its head, probably for dismembering its enemies. Such violence...",
		es: "Un pony azul que nunca vio a su padre, pero sospecha de cierto animal mítico..."
	}
};
var pony2 = {
	id: "pony2",
	name: {
		en: "Mama pony",
		fr: "Maman poney",
		de: "Mama pony",
		es: "Mamá pony"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Poney2.png"
		}
	],
	description: {
		en: "A pink pony with a purple mane.",
		fr: "Un poney rose avec une crinière mauve.",
		de: "A pink pony with a purple mane.",
		es: "Un pony de carnaval popular, y huele a cerveza."
	}
};
var pony3 = {
	id: "pony3",
	name: {
		en: "Baby pegasus",
		fr: "Poney pégase",
		de: "Baby pegasus",
		es: "Pony Pegaso"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Poney3.png"
		}
	],
	description: {
		en: "A little yellow pony. It's got wings though, which presumably allow it to fly... Let's see.",
		fr: "Un petit poney jaune. Il possède des ailes, ça doit lui permettre de voler... Voyons ça.",
		de: "A little yellow pony. It's got wings though, which presumably allow it to fly... Let's see.",
		es: "Un pony con alas y dice que vuela. Ay sí, algunos cerdos dicen lo mismo, bah."
	}
};
var pony4 = {
	id: "pony4",
	name: {
		en: "Small pony",
		fr: "Petit poney",
		de: "Small pony",
		es: "Pequeño pony"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Poney4.png"
		}
	],
	description: {
		en: "It's a little pale pink pony with a blueish mane.",
		fr: "C'est un petit poney rose pâle avec une crinière verte bleutée.",
		de: "It's a little pale pink pony with a blueish mane.",
		es: "Otro animalillo curioso con colores excéntricos. Admítelo, te encanta."
	}
};
var smolV = {
	id: "smolV",
	name: {
		en: "Green Schmoll",
		fr: "Schmoll vert",
		de: "Green Schmoll",
		es: "Schmoll verduzco"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollV.png"
		}
	],
	description: {
		en: "A little green thing that's sticking its tongue out.",
		fr: "Un petit truc vert qui tire la langue.",
		de: "A little green thing that's sticking its tongue out.",
		es: "Un monstruito muy poco respetuoso de sus mayores."
	}
};
var smolJ = {
	id: "smolJ",
	name: {
		en: "Yellow Schmoll",
		fr: "Schmoll jaune",
		de: "Yellow Schmoll",
		es: "Schmoll amarillo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollJ.png"
		}
	],
	description: {
		en: "What a beautiful smile...",
		fr: "Quel beau sourire...",
		de: "What a beautiful smile...",
		es: "Qué sonrisa más cautivadora."
	}
};
var smolB = {
	id: "smolB",
	name: {
		en: "Blue Schmoll",
		fr: "Schmoll bleu",
		de: "Blue Schmoll",
		es: "Schmoll azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollB.png"
		}
	],
	description: {
		en: "A rather rude blue schmoll who is sticking its tongue out....",
		fr: "C'est un Schmoll bleu malpoli qui tire la langue...",
		de: "A rather rude blue schmoll who is sticking its tongue out....",
		es: "Este se parece a alguien de tu familia."
	}
};
var smolO = {
	id: "smolO",
	name: {
		en: "Orange Schmoll",
		fr: "Schmoll orange",
		de: "Orange Schmoll",
		es: "Schmoll naranja"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollO.png"
		}
	],
	description: {
		en: "An orange schmoll. Looks ridiculous..",
		fr: "Un Schmoll orange. Il a l'air complètement débile.",
		de: "An orange schmoll. Looks ridiculous..",
		es: "Este monstruo está gracioso."
	}
};
var smolR = {
	id: "smolR",
	name: {
		en: "Pink Schmoll",
		fr: "Schmoll rose",
		de: "Pink Schmoll",
		es: "Schmoll rosado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollR.png"
		}
	],
	description: {
		en: "It's a bald pink thing with a ribbon in its, erm, hair...",
		fr: "C'est un truc rose sans cheveux avec un ruban dans les cheveux.",
		de: "It's a bald pink thing with a ribbon in its, erm, hair...",
		es: "Solo a un tonto puede gustarle esta cosa, pero la necesito para mi colección."
	}
};
var chuP = {
	id: "chuP",
	name: {
		en: "Apple Chupi Chupa",
		fr: "Chupi Chupa à la pomme",
		de: "Apple Chupi Chupa",
		es: "Chupa Chupi de manzana"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/ChupP.png"
		}
	],
	description: {
		en: "An apple lollipop. Mmmm. Apple...",
		fr: "Une sucette à la pomme. C'est bon la pomme. Mais pourquoi est-elle gelée ?",
		de: "An apple lollipop. Mmmm. Apple...",
		es: "Miam... ¡Manzana, mi fruta favorita!"
	}
};
var chuC = {
	id: "chuC",
	name: {
		en: "Chocolate Chupi Chupa",
		fr: "Chupi Chupa au chocolat",
		de: "Chocolate Chupi Chupa",
		es: "Chupa Chupi de chocolate"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/ChupC.png"
		}
	],
	description: {
		en: "A chocolate lollipop. Pretty strange flavour for a lollipop.",
		fr: "Une sucette au chocolat. Plutôt étrange comme parfum pour une sucette.",
		de: "A chocolate lollipop. Pretty strange flavour for a lollipop.",
		es: "El palito sirve como cucharita si se derrite."
	}
};
var chuF = {
	id: "chuF",
	name: {
		en: "Strawberry Chupi Chupa",
		fr: "Chupi Chupa à la fraise",
		de: "Strawberry Chupi Chupa",
		es: "Chupa Chupi de fresa"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/ChupF.png"
		}
	],
	description: {
		en: "A strawberry lollipop.",
		fr: "Une sucette à la fraise.",
		de: "A strawberry lollipop.",
		es: "Y tiene chicle picante por dentro."
	}
};
var chuCo = {
	id: "chuCo",
	name: {
		en: "Coke Chupi Chupa",
		fr: "Chupi Chupa au coca",
		de: "Coke Chupi Chupa",
		es: "Chupa Chupi de soda"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/ChupCo.png"
		}
	],
	description: {
		en: "A cola lollipop. That's the one you want.",
		fr: "Une sucette au coca, c'est toujours celle-là qu'on veut. Celle-ci est glacée. Etrange...",
		de: "A cola lollipop. That's the one you want.",
		es: "Hace una fiesta en tu boca. Shhhhhhhhhh..."
	}
};
var chuO = {
	id: "chuO",
	name: {
		en: "Orange Chupi Chupa",
		fr: "Chupi Chupa à l'orange",
		de: "Orange Chupi Chupa",
		es: "Chupa Chupi de naranja"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/ChupO.png"
		}
	],
	description: {
		en: "An orange lollipop. A tried and tested classic.",
		fr: "Une sucette à l'orange. Un classique.",
		de: "An orange lollipop. A tried and tested classic.",
		es: "Puajjj... este es de broma, sabe a rayos, puajjj, puajjj..."
	}
};
var barby = {
	id: "barby",
	name: {
		en: "Barbibi head",
		fr: "Tête de Barbibi",
		de: "Barbibi head",
		es: "Cabeza de Barbiby"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Barby.png"
		}
	],
	description: {
		en: "It's a doll's head. It's still smiling. Kinda creepy.",
		fr: "C'est une tête de poupée. Elle sourit encore.",
		de: "It's a doll's head. It's still smiling. Kinda creepy.",
		es: "Era cierto, estas muñecas solo sonríen y no tienen nada dentro. Toc-toc."
	}
};
var ken = {
	id: "ken",
	name: {
		en: "Kon head",
		fr: "Tête de Kon",
		de: "Kon head",
		es: "Cabeza de Kem"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Ken.png"
		}
	],
	description: {
		en: "It's the head off a Kon doll, the famous Barbibi's boyfriend.",
		fr: "La tête d'une poupée appelée Kon, le copain de la célèbre Barbibi.",
		de: "It's the head off a Kon doll, the famous Barbibi's boyfriend.",
		es: "Parece que la muñeca Barbiby le encontró coqueteando con otras..."
	}
};
var gamji = {
	id: "gamji",
	name: {
		en: "Gamejirk",
		fr: "Gamjir",
		de: "Gamejirk",
		es: "Gamjir"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gamjir.png"
		}
	],
	description: {
		en: "It's a Gamejirk, a portable console! It's black, the colour is on the inside.",
		fr: "C'est une console portable, la célèbre Gamjir ! Elle est noire, mais la couleur est à l'intérieur.",
		de: "It's a Gamejirk, a portable console! It's black, the colour is on the inside.",
		es: "¡La famosa consola portátil Gamjir! Muy elegante, serie limitada."
	}
};
var diamV = {
	id: "diamV",
	name: {
		en: "Precious green stone",
		fr: "Pierre précieuse verte",
		de: "Precious green stone",
		es: "Piedra preciosa verde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DiamV.png"
		}
	],
	description: {
		en: "It's a horrible imitation emerald... 'Made in Taïwan' is engraved on it.",
		fr: "C'est une grossière imitation d'émeraude en plastique... C'est gravé 'Made in Taiwan'.",
		de: "It's a horrible imitation emerald... 'Made in Taïwan' is engraved on it.",
		es: "Es una burda imitación de piedra preciosa... Es más bien un pedazo de botella de cerveza."
	}
};
var diamM = {
	id: "diamM",
	name: {
		en: "Precious purple stone",
		fr: "Pierre précieuse violette",
		de: "Precious purple stone",
		es: "Piedra preciosa violeta"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DiamM.png"
		}
	],
	description: {
		en: "An imitation amethyst... Not worth a button.",
		fr: "Une fausse améthyste en acrylique... Ca n'a aucune valeur.",
		de: "An imitation amethyst... Not worth a button.",
		es: "Una amatista de fantasía... Aparentemente sin valor."
	}
};
var diamR = {
	id: "diamR",
	name: {
		en: "Precious red stone",
		fr: "Pierre précieuse rouge",
		de: "Precious red stone",
		es: "Piedra preciosa roja"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DiamR.png"
		}
	],
	description: {
		en: "A fake plastic ruby. The way it reflects the sunlight is strange, it hurts your eyes.",
		fr: "C'est un faux rubis en plastique. Son reflet à la lumière du soleil ne correspond pas, ça crève les yeux.",
		de: "A fake plastic ruby. The way it reflects the sunlight is strange, it hurts your eyes.",
		es: "Un rubí de fantasía. Hace bonitos reflejos rojos... ¿Pero por qué se derrite en tus dedos?"
	}
};
var diamB = {
	id: "diamB",
	name: {
		en: "Precious yellow stone",
		fr: "Pierre précieuse",
		de: "Precious yellow stone",
		es: "Diamante precioso"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DiamB.png"
		}
	],
	description: {
		en: "A fake plastic diamond. Given its refractive index is 1.491, it's beyond all doubt that it's acrylic.",
		fr: "C'est un faux diamant en plastique. Vu son indice de réfraction de 1.491, c'est de l'acrylique sans aucun doute.",
		de: "A fake plastic diamond. Given its refractive index is 1.491, it's beyond all doubt that it's acrylic.",
		es: "Un diamante de fantasía. Las huellas de mordidas que lleva confirman que es de plástico."
	}
};
var diamJ = {
	id: "diamJ",
	name: {
		en: "Precious yellow stone",
		fr: "Pierre précieuse jaune",
		de: "Precious yellow stone",
		es: "Piedra preciosa amarilla"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DiamJ.png"
		}
	],
	description: {
		en: "An imperial topaz! The double reflection and and refractive index confirm its authenticity.",
		fr: "Une topaze impériale ! Sa double réfraction et ses index réfringents confirment son authenticité.",
		de: "An imperial topaz! The double reflection and and refractive index confirm its authenticity.",
		es: "Mirándola bien, es un simple trozo de acrílico."
	}
};
var packP = {
	id: "packP",
	name: {
		en: "Potron Pack",
		fr: "Pack a poltron",
		de: "Potron Pack",
		es: "Quipo de potrones"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/PackP.png"
		}
	],
	description: {
		en: "Milk bottles, a length of garden hose, and an LP stuck on it with tape. 'Potron pack' is written on it in crayon. How many screw-ups is one object allowed...",
		fr: "Des bouteilles de lait, un tuyau d'arrosage, et un vinyle scotchés ensemble. Il est écrit dessus 'pac a poltron'. Ca doit sûrement être un 'pack à protons'.",
		de: "Milk bottles, a length of garden hose, and an LP stuck on it with tape. 'Potron pack' is written on it in crayon. How many screw-ups is one object allowed...",
		es: "Botellas de leche, un pedazo de manguera y un disco, todo pegado con scotch. A pesar de las faltas ortográficas, pensamos que es un 'Equipo de Protones' para cazar fantasmas..."
	}
};
var psyco = {
	id: "psyco",
	name: {
		en: "Giggil Meeter",
		fr: "gigot mette",
		de: "Giggil Meeter",
		es: "Sicotemónetro"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Psyco.png"
		}
	],
	description: {
		en: "If I recall correctly, this is supposed to be a PKE. A spectral analysis tool. This one, however, is made from half a first aid kit, matchboxes and tiddlywinks!",
		fr: "Si mes souvenirs sont exacts, ceci est censé représenter un gigomètre, un appareil d'analyse spectrale. Celui-ci a été construit avec une moitié de valise de secours, des boites d'allumettes, et des puces.",
		de: "If I recall correctly, this is supposed to be a PKE. A spectral analysis tool. This one, however, is made from half a first aid kit, matchboxes and tiddlywinks!",
		es: "Esto pretende ser un aparato de análisis espectral, hecho con un pedazo de botiquín, pedazos de cartón y una pelotita. Debe tratarse de un 'psicotermómetro'."
	}
};
var ectog = {
	id: "ectog",
	name: {
		en: "Pecto Goglies",
		fr: "pécto lunnettes",
		de: "Pecto Goglies",
		es: "Gafas Hector"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Ectog.png"
		}
	],
	description: {
		en: "'Ecto lunettes' sans doute... Des rouleaux de papier WC scotchés sur des lunettes noires en plastique.",
		fr: "'Ecto lunettes' sans doute... Des rouleaux de papier WC scotchés sur des lunettes noires en plastique.",
		de: "'Ecto lunettes' sans doute... Des rouleaux de papier WC scotchés sur des lunettes noires en plastique.",
		es: "Qué ingenioso. Rollos de papel higiéntico pegados a gafas de sol. Me imagino que son unas gafas ECTO."
	}
};
var pke = {
	id: "pke",
	name: {
		en: "Peekayee",
		fr: "pécaheu",
		de: "Peekayee",
		es: "Pecae"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Pke.png"
		}
	],
	description: {
		en: "Two pencils stuck in a matchbox stuck to a trowel with tape. Let's not forget the atrocious spelling...",
		fr: "Si mes souvenirs sont exacts, ceci est censé représenter un PKE. Un appareil d'analyse spectrale.",
		de: "Two pencils stuck in a matchbox stuck to a trowel with tape. Let's not forget the atrocious spelling...",
		es: "Si no me equivoco, esto debe ser uno de esos aparatos para detectar fantasmas, un PKE, eso."
	}
};
var trap = {
	id: "trap",
	name: {
		en: "Goast Trapp",
		fr: "piaige a feNthome",
		de: "Goast Trapp",
		es: "Trampa pa' Fantashmash"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Trap.png"
		}
	],
	description: {
		en: "Une A saucepan handle glued on to a shoebox. Mmm... Given the construction quality and the spelling, I think I know who made it.",
		fr: "Une poignée de casserole fixée sur une boite de chaussures. Mmm... Vu l'orthographe et l'ingéniosité, je crois savoir qui a fabriqué ça.",
		de: "Une A saucepan handle glued on to a shoebox. Mmm... Given the construction quality and the spelling, I think I know who made it.",
		es: "Un mango de cacerola pegado a una caja de zapatos. Mmm... Creo saber quien lo ha fabricado."
	}
};
var jamb = {
	id: "jamb",
	name: {
		en: "Bonaparte's Leg",
		fr: "Jambe de Bonaparte",
		de: "Bonaparte's Leg",
		es: "Pierna de muertito"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Jamb.png"
		}
	],
	description: {
		en: "It's the leg off the skeleton in the History classroom.",
		fr: "Voilà la jambe du squelette de la salle d'histoire-géo.",
		de: "It's the leg off the skeleton in the History classroom.",
		es: "La pierna del esqueleto que se perdió misteriosamente hace años. Se dice que perteneció a un antiguo profesor... glup."
	}
};
var dent2 = {
	id: "dent2",
	name: {
		en: "Dean's false teeth",
		fr: "Dentier du Doyen",
		de: "Dean's false teeth",
		es: "Dentadura del viejito"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Dent2.png"
		}
	],
	description: {
		en: "How on Earth did they get their hands on these?...There's still a grain of rice stuck to them.",
		fr: "Mais comment ont-ils réussi à avoir ça ?... Il y a encore un grain de riz collé dessus.",
		de: "How on Earth did they get their hands on these?...There's still a grain of rice stuck to them.",
		es: "Ah, la encontraste, el pobre viejito lleva buscándola hace meses."
	}
};
var enjo = {
	id: "enjo",
	name: {
		en: "Wheel Trim",
		fr: "Enjoliveur",
		de: "Wheel Trim",
		es: "Tapacubos"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Enjo.png"
		}
	],
	description: {
		en: "A car hubcap, probably found at the side of the road",
		fr: "Un enjoliveur de voiture. Probablement trouvé sur le bord du troittoir.",
		de: "A car hubcap, probably found at the side of the road",
		es: "Un auto lo dejó car mientras escapaba de la policía."
	}
};
var yoyoB = {
	id: "yoyoB",
	name: {
		en: "Blue Yoyo",
		fr: "Yoyo bleu",
		de: "Blue Yoyo",
		es: "Yoyo Azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/YoyoB.png"
		}
	],
	description: {
		en: "A blue yoyo. It works well, and doesn't get tangled up.",
		fr: "Un yoyo bleu. Il fonctionne bien, et ne s'emmêle pas.",
		de: "A blue yoyo. It works well, and doesn't get tangled up.",
		es: "Un yoyo azul. ¡Funciona bien y no se enreda!"
	}
};
var yoyoR = {
	id: "yoyoR",
	name: {
		en: "Noisy Yoyo",
		fr: "Yoyo sonore",
		de: "Noisy Yoyo",
		es: "Yoyo sonoro"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/YoyoR.png"
		}
	],
	description: {
		en: "A red and yellow yoyo. It makes a strange noise when it comes back.",
		fr: "Un yoyo rouge et jaune. Il fait un son bizarre quand il remonte.",
		de: "A red and yellow yoyo. It makes a strange noise when it comes back.",
		es: "Un yoyo rojo y amarillo. Hace un sonido especial cuando sube. ¡Cuántos recuerdos!"
	}
};
var kissmB = {
	id: "kissmB",
	name: {
		en: "Heehee Toffee Joke",
		fr: "Blague Kissmar",
		de: "Heehee Toffee Joke",
		es: "Chiste Globo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/KissmB.png"
		}
	],
	description: {
		en: "Quick question : Do you know the history of the cuckoo clock? - No. - It's all a wind-up!",
		fr: "Petite devinette : Tu connais l'histoire de la feuille de papier ? - Non. - Elle déchire !",
		de: "Quick question : Do you know the history of the cuckoo clock? - No. - It's all a wind-up!",
		es: "Adivina adivinador: ¿Qué se pone Superman antes de salir? - ¡Super-fume!"
	}
};
var kissmJ = {
	id: "kissmJ",
	name: {
		en: "Heehee Toffee Joke",
		fr: "Blague Kissmar",
		de: "Heehee Toffee Joke",
		es: "Chiste Globo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/KissmJ.png"
		}
	],
	description: {
		en: "Warning - crap joke alert : Where do superheroes do their shopping? At the Supermarket!",
		fr: "Attention, blague jaune : Où les super héros vont-ils faire leurs courses ? Au Super Marché !",
		de: "Warning - crap joke alert : Where do superheroes do their shopping? At the Supermarket!",
		es: "¿Mamá, mamá, puedo jugar con mi abuelita? - Sí, pero luego la vuelves a armar y la guardas de donde la sacaste."
	}
};
var kissmN = {
	id: "kissmN",
	name: {
		en: "Heehee Toffee Joke",
		fr: "Blague Kissmar",
		de: "Heehee Toffee Joke",
		es: "Chiste Globo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/KissmN.png"
		}
	],
	description: {
		en: "Julien had a great idea of how to skip school: - hello, is that the dean? I'm calling to let you know that Julien is ill today. - Who is calling please? - It's my dad!... That's the 7th time I've got that this week... Are these not supposed to be funny though?",
		fr: "Julien a une bonne idée pour sécher l'école : - Allô, c'est la maîtresse? Je vous téléphone pour vous dire que Julien est malade. - Et qui est à l'appareil ? - C'est mon papa !... On me l'a fait 7 fois cette semaine, celle-là... Et c'était pas sensé être des blagues.",
		de: "Julien had a great idea of how to skip school: - hello, is that the dean? I'm calling to let you know that Julien is ill today. - Who is calling please? - It's my dad!... That's the 7th time I've got that this week... Are these not supposed to be funny though?",
		es: "¿Sabes por qué botaron a Osama Bin Laden al mar? - No. - ¡Porque en el fondo no era tan malo!"
	}
};
var kissmR = {
	id: "kissmR",
	name: {
		en: "Heehee Toffee Joke",
		fr: "Blague Kissmar",
		de: "Heehee Toffee Joke",
		es: "Chiste Globo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/KissmR.png"
		}
	],
	description: {
		en: "Warning - this one sucks : A white horse walks into a bar. The barman says, I have a whisky named after you. The horse replies, what, Eric?",
		fr: "Houla, blague rouge... Attention, c'est du lourd : Comment s'appelle la femelle du hamster. Hamsterdame (Amsterdam),",
		de: "Warning - this one sucks : A white horse walks into a bar. The barman says, I have a whisky named after you. The horse replies, what, Eric?",
		es: "¿Cuál es el colmo de un jorobado? - No sé - Querer estudiar Derecho."
	}
};
var lukeL = {
	id: "lukeL",
	name: {
		en: "Luke Logan",
		fr: "Luke Logan",
		de: "Luke Logan",
		es: "Luke Logan"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/LukeL.png"
		}
	],
	description: {
		en: "A posable figurine of Luke Logan, wrestling superstar. ",
		fr: "C'est une figurine articulée de Luke Logan, une superstar du catch. ",
		de: "A posable figurine of Luke Logan, wrestling superstar. ",
		es: "Un muñequito original de Luke Logan, una leyenda de la lucha libre. "
	}
};
var pablo = {
	id: "pablo",
	name: {
		en: "Mysterious Pablo",
		fr: "Mysterious Pablo",
		de: "Mysterious Pablo",
		es: "El Misterioso Pablo"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Pablo.png"
		}
	],
	description: {
		en: "A Mysterious Pablo toy, a wrestling superstar. Champion of 1986. Mysteriously, of course.",
		fr: "Un jouet représentant Mysterious Pablo, une superstar du catch. Il a été champion en 1986. Mystérieusement, bien sûr.",
		de: "A Mysterious Pablo toy, a wrestling superstar. Champion of 1986. Mysteriously, of course.",
		es: "Fue un ídolo mucho antes del boom de la WrestleMania. Nunca habló, por eso se le dice así."
	}
};
var dollar = {
	id: "dollar",
	name: {
		en: "One Dollar Man",
		fr: "One Dollar Man",
		de: "One Dollar Man",
		es: "El Burger Pérez"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Dollar.png"
		}
	],
	description: {
		en: "A posable figurine of wrestling superstar One Dollar Man. A major show-off.",
		fr: "Une figurine articulée d'une superstar du catch. Lui, c'est One Dollar Man. Un sacré frimeur celui-là.",
		de: "A posable figurine of wrestling superstar One Dollar Man. A major show-off.",
		es: "Otra figura famosa de la lucha libre. También actuó en diversas series de TV y era mercenario a sueldo. Todo por una hamburguesa."
	}
};
var superW = {
	id: "superW",
	name: {
		en: "Super Warrior",
		fr: "Super Warrior",
		de: "Super Warrior",
		es: "Macho Man"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SuperW.png"
		}
	],
	description: {
		en: "A figurine of Super Warrior, an extremely famous wrestler.",
		fr: "La figurine de Super Warrior, une star du catch extrêmement célèbre.",
		de: "A figurine of Super Warrior, an extremely famous wrestler.",
		es: "Tiene el récord de tener la mayor cantidad de fans con su cara tatuada en la espalda."
	}
};
var griffon = {
	id: "griffon",
	name: {
		en: "The Griffon",
		fr: "The Griffon",
		de: "The Griffon",
		es: "Masacrator"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Griffon.png"
		}
	],
	description: {
		en: "The Griffon, my favourite wrestler! He was awesome in the title fight against Super Warrior in 1988.",
		fr: "The Griffon, mon catcheur préféré ! Il était formidable dans son match contre Super Warrior pour le titre mondial en 1988,",
		de: "The Griffon, my favourite wrestler! He was awesome in the title fight against Super Warrior in 1988.",
		es: "Uno de los luchadores más míticos. No solo aplastó a su rival, sino que molió a golpes al árbitro, los comentaristas de TV y a la mitad de los asistentes cuando ganó el campeonato del 1997. Desde entonces no se sabe nada de él."
	}
};
var schC = {
	id: "schC",
	name: {
		en: "Cyan Schmoll",
		fr: "Schmoll cyan",
		de: "Cyan Schmoll",
		es: "Schmoll celeste"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollC.png"
		}
	],
	description: {
		en: "A new Schmoll, it must be from a new collection. This one is a really bright shade of cyan.",
		fr: "Un nouveau Schmoll, il doit faire partie d'une nouvelle collection. Il est vraiment très cyan celui là.",
		de: "A new Schmoll, it must be from a new collection. This one is a really bright shade of cyan.",
		es: "Un nuevo Schmoll de una serie limitada."
	}
};
var schP = {
	id: "schP",
	name: {
		en: "Purple Schmoll",
		fr: "Schmoll pourpre",
		de: "Purple Schmoll",
		es: "Schmoll púrpura"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollP.png"
		}
	],
	description: {
		en: "This Schmoll reminds me of something but I can't put my finger on it...",
		fr: "Ce Schmoll me fait penser à quelque chose, mais je n'arrive pas à mettre le doigt dessus...",
		de: "This Schmoll reminds me of something but I can't put my finger on it...",
		es: "Este Schmoll te hará pensar seguramente en alguien que conoces..."
	}
};
var schR = {
	id: "schR",
	name: {
		en: "Red Schmoll",
		fr: "Schmoll rouge",
		de: "Red Schmoll",
		es: "Schmoll rojo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollRg.png"
		}
	],
	description: {
		en: "Looks like a perticularly stupid hermit. A Schmollusc.",
		fr: "On dirait une espèce de bernard l'hermite débile. Un schmollusque quoi.",
		de: "Looks like a perticularly stupid hermit. A Schmollusc.",
		es: "Vaya pinta que tienen estos monstruos."
	}
};
var schV = {
	id: "schV",
	name: {
		en: "Green Schmoll",
		fr: "Schmoll vert",
		de: "Green Schmoll",
		es: "Schmoll verde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollVr.png"
		}
	],
	description: {
		en: "Another Schmoll. This one seems to have serious mental problems.",
		fr: "Encore un Schmoll. Il a l'air d'avoir un sérieux problème mental celui-là.",
		de: "Another Schmoll. This one seems to have serious mental problems.",
		es: "Este parece tener un serio problema mental, jeje."
	}
};
var schF1 = {
	id: "schF1",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF1.png"
		}
	],
	description: {
		en: "A fluorescent green Schmoll.",
		fr: "EC'est le Schmoll vert version fluorescente.",
		de: "A fluorescent green Schmoll.",
		es: "Serie limitada que brilla en la oscurodad."
	}
};
var schF2 = {
	id: "schF2",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF2.png"
		}
	],
	description: {
		en: "A yellow glow in the dark Schmoll.",
		fr: "Le Schmoll jaune version qui brille dans le noir.",
		de: "A yellow glow in the dark Schmoll.",
		es: "Infaltable en tu colección, mira cómo brilla."
	}
};
var schF3 = {
	id: "schF3",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF3.png"
		}
	],
	description: {
		en: "Phosphorescent  Schmoll. it glows in the dark. I reckon I've seen all the colours in existence thanks to these guys...",
		fr: "Le Schmoll phosphorescent, il brille dans le noir. Ils m'en ont fait voir de toutes les couleurs ces trucs là...",
		de: "Phosphorescent  Schmoll. it glows in the dark. I reckon I've seen all the colours in existence thanks to these guys...",
		es: "Cuando los tengas todos serás la envidia de la escuela."
	}
};
var schF4 = {
	id: "schF4",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF4.png"
		}
	],
	description: {
		en: "It's the stupid orange Schmoll. Anyone can see that",
		fr: "C'est le Schmoll orange débile, on le reconnait bien.",
		de: "It's the stupid orange Schmoll. Anyone can see that",
		es: "Brilla tanto que lo puedes usar como linterna."
	}
};
var schF5 = {
	id: "schF5",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF5.png"
		}
	],
	description: {
		en: "The pink Schmoll. only it's not pink, and it glows in the dark.",
		fr: "C'est le Schmoll rose. Sauf qu'il n'est pas rose et qu'il brille dans le noir.",
		de: "The pink Schmoll. only it's not pink, and it glows in the dark.",
		es: "Es tan raro que una vez un niño se lo tragó para no compartirlo."
	}
};
var schF6 = {
	id: "schF6",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF6.png"
		}
	],
	description: {
		en: "A luminous Schmoll... Yuck, it seems to have something on its head...",
		fr: "Un Schmoll lumineux... Beurk, on dirait qu'il a un truc sur la tête...",
		de: "A luminous Schmoll... Yuck, it seems to have something on its head...",
		es: "¡Sorprende a todos mostrándolo a tus amigos!"
	}
};
var schF7 = {
	id: "schF7",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF7.png"
		}
	],
	description: {
		en: "It's the neon version of the purple Schmoll. But where have I seen it before?",
		fr: "C'est la version fluo du Schmoll pourpre mystérieux qui ressemble à une tentacule. Mais où est-ce que je l'ai déjà vu, ce truc ?",
		de: "It's the neon version of the purple Schmoll. But where have I seen it before?",
		es: "Brilla y huele a mora, mmmmmm..."
	}
};
var schF8 = {
	id: "schF8",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF8.png"
		}
	],
	description: {
		en: "This one looks particularly enlightened.",
		fr: "Il a une vraie tête d'illuminé celui-là.",
		de: "This one looks particularly enlightened.",
		es: "Muchos lo quieren por su color y brillo, cuídalo mucho."
	}
};
var schF9 = {
	id: "schF9",
	name: {
		en: "Neon Schmoll",
		fr: "Schmoll phosphorescent",
		de: "Neon Schmoll",
		es: "Schmoll fosforescente"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SchmollF9.png"
		}
	],
	description: {
		en: "This Schmoll is much less cyan than the others.",
		fr: "Ce Schmoll est beaucoup moins cyan que son homologue coloré.",
		de: "This Schmoll is much less cyan than the others.",
		es: "Un buen coleccionista sabe muy bien cuánto vale uno de estos."
	}
};
var uhu = {
	id: "uhu",
	name: {
		en: "OUHOU Glue Stick",
		fr: "Baton de colle OUHOU",
		de: "OUHOU Glue Stick",
		es: "Pegamento UJU"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Uhu.png"
		}
	],
	description: {
		en: "Glue. Everyone has some like this.",
		fr: "De la colle. Tout le monde en a de la comme ça.",
		de: "Glue. Everyone has some like this.",
		es: "La clásica que pega y pega bien."
	}
};
var uhuM = {
	id: "uhuM",
	name: {
		en: "OUHOU Majik Glue Stick",
		fr: "Baton de colle OUHOU Magik",
		de: "OUHOU Majik Glue Stick",
		es: "Pegamento UJU Mágico"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/UhuM.png"
		}
	],
	description: {
		en: "The 'Magik' version of the famous glue stick. It is coloured so you can see where it is. Like lipstick... It could be a good trick to play on talkative types. All you need to do is change the label.",
		fr: "La version 'Magik' du célèbre baton de colle. Il y a un colorant pour voir où on applique la colle. On dirait du rouge à lèvres... Ca pourrait être un bon piège pour les bavardes. Il suffirait juste de changer l'étiquette.",
		de: "The 'Magik' version of the famous glue stick. It is coloured so you can see where it is. Like lipstick... It could be a good trick to play on talkative types. All you need to do is change the label.",
		es: "La versión 'Mágica' del conocido pegamento. Este tiene un color especial para saber dónde pusiste el pegamento. Está prohibido ingerirlo, pero extrañamente le pusieron sabor a fresa."
	}
};
var pdc = {
	id: "pdc",
	name: {
		en: "Pot of Glue",
		fr: "Pot de colle",
		de: "Pot of Glue",
		es: "Pote de pegamento"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Pdc.png"
		}
	],
	description: {
		en: "The famous glue that has to be spread with a palette knife. The smell is intoxicating... snif... it smells so good... snnnnnnnif !!!",
		fr: "Le fameux pot de colle qu'il faut étaler avec la palette. Ils sont tous dingues de l'odeur... snif... C'est vrai que ça sent bon... snnnnnnnif !!!",
		de: "The famous glue that has to be spread with a palette knife. The smell is intoxicating... snif... it smells so good... snnnnnnnif !!!",
		es: "Es tan agradable aplicarlo y embarrarse con él. ¡Hasta podrías untártela en todo el cuerpo y hacerte una nueva piel!"
	}
};
var tdc = {
	id: "tdc",
	name: {
		en: "Tube of Glue",
		fr: "Tube de colle",
		de: "Tube of Glue",
		es: "Tubo de pegamento"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Tdc.png"
		}
	],
	description: {
		en: "The liquid glue favoured by DIY enthusiasts. They put it on their fingers then peel it off like skin... Weird.",
		fr: "La colle liquide des travaux de bricolage. Ils s'en mettent sur les doigts pour ensuite la décoller comme de la peau... N'importe quoi.",
		de: "The liquid glue favoured by DIY enthusiasts. They put it on their fingers then peel it off like skin... Weird.",
		es: "Mucho más resistente, eso sí, si te pegas 2 dedos, solo te los podrán despegar con cirugía."
	}
};
var sheep = {
	id: "sheep",
	name: {
		en: "Toy Sheep",
		fr: "Mouton en peluche",
		de: "Toy Sheep",
		es: "Oveja de peluche"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Sheep.png"
		}
	],
	description: {
		en: "A sheep teddy bear. There is a name written on the label : 'Silvertiger'.",
		fr: "Une peluche de mouton. On dirait qu'elle vient de Majority. Il y a un nom écrit au feutre sur l'étiquette : 'Silvertiger'.",
		de: "A sheep teddy bear. There is a name written on the label : 'Silvertiger'.",
		es: "Un tierno peluche que alguien hizo pasar por tigre blanco porque lleva escrito: 'Silver Tiger'."
	}
};
var gomo = {
	id: "gomo",
	name: {
		en: "Gomola Toy",
		fr: "Peluche Gomola",
		de: "Gomola Toy",
		es: "Peluche Mosca"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gomo.png"
		}
	],
	description: {
		en: "A big blue fly soft toy thing. Sorry, not a fly, a bee.",
		fr: "Une grosse mouche bleue en peluche. Pardon, pas une mouche, une tzongre.",
		de: "A big blue fly soft toy thing. Sorry, not a fly, a bee.",
		es: "Una mosca de peluche. Un momento, ¿una mosca?"
	}
};
var igor = {
	id: "igor",
	name: {
		en: "Igor Toy",
		fr: "peluche Igor",
		de: "Igor Toy",
		es: "Peluche Igor"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Igor.png"
		}
	],
	description: {
		en: "A soft toy version of Igor, the hero from Caverns of Hammerfest. Funny name for a snowman.",
		fr: "La peluche du plus célèbre bonhomme de neige.",
		de: "A soft toy version of Igor, the hero from Caverns of Hammerfest. Funny name for a snowman.",
		es: "Igor, el héroe de Hammerfest. ¡Oh, genial!"
	}
};
var mouta = {
	id: "mouta",
	name: {
		en: "Mustard Knight Soft Toy",
		fr: "Peluche Chevalier Moutarde",
		de: "Mustard Knight Soft Toy",
		es: "Peluche de Momia"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Mouta.png"
		}
	],
	description: {
		en: "The soft toy version of the Mustard Knight from Swapou 2.",
		fr: "C'est le Chevalier Moutarde de Swapou 2 en peluche.",
		de: "The soft toy version of the Mustard Knight from Swapou 2.",
		es: "¿Será realmente una momia lo que lleva dentro?"
	}
};
var cerbere = {
	id: "cerbere",
	name: {
		en: "Cerberus the Pony Toy",
		fr: "Peluche de Cerbère le poney",
		de: "Cerberus the Pony Toy",
		es: "Peluche de Cerbero el Pony"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Cerbere.png"
		}
	],
	description: {
		en: "A soft toy of Cerberus the Pony. It's pretty risky confiscating this from a little girl...",
		fr: "La peluche de Cerbère le Poney. C'était risqué de confisquer ça à une gamine...",
		de: "A soft toy of Cerberus the Pony. It's pretty risky confiscating this from a little girl...",
		es: "Esto fue realmente muy difícil de confiscar, peor que quitarle un hueso a un lobo..."
	}
};
var euler = {
	id: "euler",
	name: {
		en: "Euler's Disk",
		fr: "Disque d'Euler",
		de: "Euler's Disk",
		es: "Disco de Euler"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Euler.png"
		}
	],
	description: {
		en: "The composition of this disk allows it to spin like a coin for 3 minutes. It only stops because it rubs on the base.",
		fr: "La composition de ce disque lui permet de tourner comme une pièce pendant trois minutes. Il s'arrêtee à cause du frottement sur le socle.",
		de: "The composition of this disk allows it to spin like a coin for 3 minutes. It only stops because it rubs on the base.",
		es: "Juguete científico y sofisticado para los amantes de la física."
	}
};
var gyro = {
	id: "gyro",
	name: {
		en: "Gyroscope",
		fr: "Gyroscope",
		de: "Gyroscope",
		es: "Giroscopio"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gyro.png"
		}
	],
	description: {
		en: "Once it's started spinning, it will continue to do so for hours regardless of gravity or planetary rotation.",
		fr: "Si on le lance, il tournera pendant des heures sans tenir compte de la gravité ou de la rotation de la planète.",
		de: "Once it's started spinning, it will continue to do so for hours regardless of gravity or planetary rotation.",
		es: "Si es lanzado, girará durante varias horas escapando de la gravedad."
	}
};
var mkbaL = {
	id: "mkbaL",
	name: {
		en: "Moonstone Merkaba",
		fr: "Merkaba Pierre de Lune",
		de: "Moonstone Merkaba",
		es: "Merkaba Piedra de Luna"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/MkbaL.png"
		}
	],
	description: {
		en: "A Merkaba made out of moonstone. A spiritual rock, carved into two intersecting tetrahedrons. Where the hell did they find this thing?",
		fr: "C'est une Merkaba en Pierre de Lune. Une roche spirituelle taillée en forme de deux tétraèdres imbriqués l'un dans l'autre. Mais où ont-ils trouvé ça ?",
		de: "A Merkaba made out of moonstone. A spiritual rock, carved into two intersecting tetrahedrons. Where the hell did they find this thing?",
		es: "Es una roca espiritual tallada en forma de dos tetraedros imbricados entre sí. ¿Pero de dónde sacaron eso?"
	}
};
var crist = {
	id: "crist",
	name: {
		en: "Crystal Ball",
		fr: "Boule de Cristal",
		de: "Crystal Ball",
		es: "Bola de Cristal"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Cristal.png"
		}
	],
	description: {
		en: "A crystal ball... made out of plastic. Probably used to predict their score in the next homework exercise.",
		fr: "Une boule de cristal... en plastique. Probablement pour essayer de deviner la note de leur prochain devoir.",
		de: "A crystal ball... made out of plastic. Probably used to predict their score in the next homework exercise.",
		es: "Los niños trajeron esta bola, que realmente es de plástico, para adivinar sus próximas notas."
	}
};
var pend = {
	id: "pend",
	name: {
		en: "Pendulum",
		fr: "Pendule",
		de: "Pendulum",
		es: "Péndulo"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/pend.png"
		}
	],
	description: {
		en: "A homemade pendulum made from a lump of glass, a string and a bolt. This must have been used to find lost objects. Shame they lost this too.",
		fr: "Un pendule artisanal fabriqué avec un bout de verre, une ficelle, et un boulon. Ca leur serait utile pour retrouver leurs objets perdus. Dommage qu'ils l'aient perdu aussi.",
		de: "A homemade pendulum made from a lump of glass, a string and a bolt. This must have been used to find lost objects. Shame they lost this too.",
		es: "Un péndulo hecho con diferentes objetos. Se dice que se usaba para buscar objetos perdidos."
	}
};
var billAb = {
	id: "billAb",
	name: {
		en: "Blue spider marble",
		fr: "Bille araignée bleue",
		de: "Blue spider marble",
		es: "Canica Araña Azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillAb.png"
		}
	],
	description: {
		en: "A blue spider marble",
		fr: "C'est une bille araignée bleue.",
		de: "A blue spider marble",
		es: "¿Cómo habrán hecho para encontrar una araña azul y además meterla ahí dentro?"
	}
};
var billAv = {
	id: "billAv",
	name: {
		en: "Green spider marble",
		fr: "Bille araignée verte",
		de: "Green spider marble",
		es: "Canica Araña Verde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillAv.png"
		}
	],
	description: {
		en: "A green spider marble",
		fr: "C'est une bille araignée verte.",
		de: "A green spider marble",
		es: "¿Cómo habrán hecho para meterla ahí dentro?"
	}
};
var billAo = {
	id: "billAo",
	name: {
		en: "Orange spider marble",
		fr: "Bille araignée orange",
		de: "Orange spider marble",
		es: "Canica Araña Naranja"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillAo.png"
		}
	],
	description: {
		en: "An orange spider marble",
		fr: "C'est une bille araignée orange.",
		de: "An orange spider marble",
		es: "Sí, la araña que tiene dentro es verdadera y no terminó de digerir la mosca que se comió."
	}
};
var billO1 = {
	id: "billO1",
	name: {
		en: "Blue cats-eye marble",
		fr: "Oeil de chat bleu",
		de: "Blue cats-eye marble",
		es: "Ojo de gato azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillO1.png"
		}
	],
	description: {
		en: "A blue cats-eye marble.",
		fr: "C'est une bille oeil de chat bleu.",
		de: "A blue cats-eye marble.",
		es: "Parte de la trilogía de ojos de gato."
	}
};
var billO2 = {
	id: "billO2",
	name: {
		en: "Yellow cats-eye marble",
		fr: "Oeil de chat jaune",
		de: "Yellow cats-eye marble",
		es: "Ojo de gato amarillo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillO2.png"
		}
	],
	description: {
		en: "A yellow cats-eye marble",
		fr: "C'est une bille oeil de chat jaune.",
		de: "A yellow cats-eye marble",
		es: "Parte de la trilogía de ojos de gato."
	}
};
var billO3 = {
	id: "billO3",
	name: {
		en: "White cats-eye marble",
		fr: "Oeil de chat blanc",
		de: "White cats-eye marble",
		es: "Ojo de gato blanco"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillO3.png"
		}
	],
	description: {
		en: "A white cats-eye marble",
		fr: "C'est une bille oeil de chat blanc.",
		de: "A white cats-eye marble",
		es: "Parte de la trilogía de ojos de gato."
	}
};
var BillT = {
	id: "BillT",
	name: {
		en: "Turtle marble",
		fr: "Bille tortue",
		de: "Turtle marble",
		es: "Canica tortuga"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillT.png"
		}
	],
	description: {
		en: "A turtle marble.",
		fr: "C'est une bille tortue.",
		de: "A turtle marble.",
		es: "Parte de la trilogía de canicas con colores de animales."
	}
};
var billOr = {
	id: "billOr",
	name: {
		en: "Orca marble",
		fr: "Bille orque",
		de: "Orca marble",
		es: "Canica orca"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillOr.png"
		}
	],
	description: {
		en: "It's an orca marble.",
		fr: "C'est une bille orque.",
		de: "It's an orca marble.",
		es: "Parte de la trilogía de canicas con colores de animales."
	}
};
var billAl = {
	id: "billAl",
	name: {
		en: "Honeybee marble",
		fr: "Bille abeille",
		de: "Honeybee marble",
		es: "Canica abeja"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillAl.png"
		}
	],
	description: {
		en: "A honeybee marble.",
		fr: "C'est une bille abeille.",
		de: "A honeybee marble.",
		es: "Parte de la trilogía de canicas con colores de animales."
	}
};
var billM = {
	id: "billM",
	name: {
		en: "Meteorite marble",
		fr: "Bille météorite",
		de: "Meteorite marble",
		es: "Canica meteorito"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillM.png"
		}
	],
	description: {
		en: "A beautiful meteorite marble!",
		fr: "C'est une bille météorite du plus bel effet !",
		de: "A beautiful meteorite marble!",
		es: "¡Es simplemente preciosa!"
	}
};
var billP = {
	id: "billP",
	name: {
		en: "Petrol marble",
		fr: "Bille pétrole",
		de: "Petrol marble",
		es: "Canica petróleo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BillP.png"
		}
	],
	description: {
		en: "A petrol marble.",
		fr: "C'est une bille pétrole.",
		de: "A petrol marble.",
		es: "Esos colores son inconfundibles."
	}
};
var Flash = {
	id: "Flash",
	name: {
		en: "Flash",
		fr: "Flash",
		de: "Flash",
		es: "Flash"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Flash.png"
		}
	],
	description: {
		en: "It's a flash for the P-Skool camera.",
		fr: "C'est un flash pour appareil photo P-Skool.",
		de: "It's a flash for the P-Skool camera.",
		es: "Es un flash para una cámara fotográfica P-Skool."
	}
};
var boitier = {
	id: "boitier",
	name: {
		en: "Camera",
		fr: "Appareil photo",
		de: "Camera",
		es: "Cámara fotográfica"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Boitier.png"
		}
	],
	description: {
		en: "It's a P-Skool kids' camera.",
		fr: "C'est un appareil photo P-Skool pour enfant.",
		de: "It's a P-Skool kids' camera.",
		es: "De la reconocida marca P-Skool."
	}
};
var objec = {
	id: "objec",
	name: {
		en: "Objective",
		fr: "Objectif",
		de: "Objective",
		es: "Objetivo de cámara"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Objectif.png"
		}
	],
	description: {
		en: "An objective reinforced with rubber allowing it to be used in complete safety",
		fr: "Un objectif renforcé de caoutchouc pour pouvoir être manipulé en toute sécurité.",
		de: "An objective reinforced with rubber allowing it to be used in complete safety",
		es: "Está reforzado con caucho para resistir a catástrofes y niños."
	}
};
var jetabl = {
	id: "jetabl",
	name: {
		en: "Disposable Camera",
		fr: "Appareil photo jetable",
		de: "Disposable Camera",
		es: "Cámara fotográfica descartable"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Jetable.png"
		}
	],
	description: {
		en: "It's a disposable kids' camera",
		fr: "C'est un appareil photo jetable pour enfant.",
		de: "It's a disposable kids' camera",
		es: "Cámara de usar y tirar, como les gusta a los niños."
	}
};
var dollP1 = {
	id: "dollP1",
	name: {
		en: "Dolly Pocket Hairdressing Salon",
		fr: "Dolly Pocket Salon de Coiffure",
		de: "Dolly Pocket Hairdressing Salon",
		es: "Dolly Pocket Peluquería"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DollyP1.png"
		}
	],
	description: {
		en: "It's like a box with a little world inside. There are little figuines inside. It seems fragile.",
		fr: "C'est comme une boîte avec un petit monde à l'intérieur. Il y a aussi de minuscules figurines. Ca a l'air fragile.",
		de: "It's like a box with a little world inside. There are little figuines inside. It seems fragile.",
		es: "Un estuchito con toda una peluquería de juguete al interior."
	}
};
var dollPM = {
	id: "dollPM",
	name: {
		en: "Dolly Pocket Pop Star",
		fr: "Dolly Pocket Pop Star",
		de: "Dolly Pocket Pop Star",
		es: "Dolly Pocket Pop Star"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DollyPM.png"
		}
	],
	description: {
		en: "A toy for girls. It looks like the set from the X-Factor, in miniature..",
		fr: "Un jouet pour fille. On dirait la scène d'une émission télévisée de nouvelles stars, en tout petit.",
		de: "A toy for girls. It looks like the set from the X-Factor, in miniature..",
		es: "Un estuchito con un escenario de espectáculos para quienes sueñan con fama."
	}
};
var dollPVT = {
	id: "dollPVT",
	name: {
		en: "Dolly Pocket Enchanted Forest",
		fr: "Dolly Pocket Forêt Enchantée",
		de: "Dolly Pocket Enchanted Forest",
		es: "Dolly Pocket Bosque Encantado"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/DollyPVT.png"
		}
	],
	description: {
		en: "When you open this little box trees pop up. Be careful not to let the tiny figurines fall out.",
		fr: "Quand on ouvre cette boite, les arbres se déplient. Attention de ne pas faire tomber les minuscules personnages à l'intérieur.",
		de: "When you open this little box trees pop up. Be careful not to let the tiny figurines fall out.",
		es: "Estuchito que al abrirse despliega un bosque fantástico, cuidado con hacer caer los mini-personajes."
	}
};
var fifi = {
	id: "fifi",
	name: {
		en: "Fifi Trixabel",
		fr: "Fifi Brin de Titane",
		de: "Fifi Trixabel",
		es: "Fifi La Bruta"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/FifiT.png"
		}
	],
	description: {
		en: "A latex MyBrute figurine. It's been through a few scrapes.",
		fr: "Une figurine Labrute en latex. Elle en a pris des gnons, celle-là.",
		de: "A latex MyBrute figurine. It's been through a few scrapes.",
		es: "Muñeco original de El Bruto. Se ve que recibió varios golpes."
	}
};
var brutor = {
	id: "brutor",
	name: {
		en: "Brutor the Cruel",
		fr: "Brutor Le Cruel",
		de: "Brutor the Cruel",
		es: "Brutor El Cruel"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Brutor.png"
		}
	],
	description: {
		en: "A latex MyBrute figurine. This one is Brutor the Cruel.",
		fr: "C'est une figurine Labrute en latex. Celle-ci représente Brutor Le Cruel.",
		de: "A latex MyBrute figurine. This one is Brutor the Cruel.",
		es: "Muñeco original de El Bruto. La calidad de detalle es impresionante."
	}
};
var tanka = {
	id: "tanka",
	name: {
		en: "Tanka the Barbarian",
		fr: "Tanka le Barbare",
		de: "Tanka the Barbarian",
		es: "Bárbara Tanka"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Tanka.png"
		}
	],
	description: {
		en: "Another latex MyBrute figurine. It's Tanka the Barbarian, the game's mascot.",
		fr: "Encore une figurine Labrute en latex. C'est Tanka le barbare, la mascotte du jeu.",
		de: "Another latex MyBrute figurine. It's Tanka the Barbarian, the game's mascot.",
		es: "Muñeco original de El Bruto. Un personaje clásico."
	}
};
var catG = {
	id: "catG",
	name: {
		en: "Catgirl",
		fr: "Catgirl",
		de: "Catgirl",
		es: "Catgirl"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/CatGirl.png"
		}
	],
	description: {
		en: "Another official MyBrute figurine. It doesn't stand upright,,, In fact it's worse than that: it stands up, but only for a few seconds. It's annoying!",
		fr: "Une autre figurine Labrute officielle. Elle ne tient pas debout... En fait c'est pire : elle tient debout, mais seulement quelques secondes. C'est énervant !",
		de: "Another official MyBrute figurine. It doesn't stand upright,,, In fact it's worse than that: it stands up, but only for a few seconds. It's annoying!",
		es: "Muñeco original de El Bruto. Un personaje clásico. A veces no se mantiene de pie y eso es muy molesto."
	}
};
var dundee = {
	id: "dundee",
	name: {
		en: "Alligator Dundee",
		fr: "Alligator Dundee",
		de: "Alligator Dundee",
		es: "Alligator Dundee"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Dundee.png"
		}
	],
	description: {
		en: "Alligator Dundee, a latex figurine from MyBrute.",
		fr: "Alligator Dundee, une figurine en latex du jeu de récré Labrute.",
		de: "Alligator Dundee, a latex figurine from MyBrute.",
		es: "Muñeco original de El Bruto. Cuidado con la punta del sable."
	}
};
var kazou = {
	id: "kazou",
	name: {
		en: "Kazou Boy",
		fr: "Kazou Boy",
		de: "Kazou Boy",
		es: "Mazo Boy"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Kazou.png"
		}
	],
	description: {
		en: "A latex MyBrute figurine. This character seems to attack with a giant Kazoo.",
		fr: "Une figurine Labrute en latex. Le personnage est sensé taper avec un kazou géant.",
		de: "A latex MyBrute figurine. This character seems to attack with a giant Kazoo.",
		es: "Muñeco original de El Bruto. ¿Cuántas cabezas habrá roto?"
	}
};
var prehista = {
	id: "prehista",
	name: {
		en: "Prehista",
		fr: "Prehista",
		de: "Prehista",
		es: "Prehista"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Prehista.png"
		}
	],
	description: {
		en: "A latex MyBrute figurine. Looks like a prehistoric girl with pink hair, wooden flip-flops, and a bone... They really come up with some weird crap these developers...",
		fr: "Une figurine Labrute en latex. On dirait une fille préhistorique avec des cheveux roses, des tongues en bois, et un os... Ils font vraiment n'importe quoi les designers...",
		de: "A latex MyBrute figurine. Looks like a prehistoric girl with pink hair, wooden flip-flops, and a bone... They really come up with some weird crap these developers...",
		es: "Muñeco original de El Bruto. Si somos brutos es porque nuestros ancestros también lo fueron..."
	}
};
var maxi = {
	id: "maxi",
	name: {
		en: "Maximan",
		fr: "Maximan",
		de: "Maximan",
		es: "Maximan"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Maxi.png"
		}
	],
	description: {
		en: "A little latex gladiator from the game MyBrute",
		fr: "Un petit gladiateur en latex du jeu Labrute.",
		de: "A little latex gladiator from the game MyBrute",
		es: "Muñeco original de El Bruto. Intenta romperlo. Imposible."
	}
};
var grobra = {
	id: "grobra",
	name: {
		en: "Grobra",
		fr: "Grobra",
		de: "Grobra",
		es: "Brazote"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Grobra.png"
		}
	],
	description: {
		en: "Coming from nowhere, it's Grooobra! Quicker than a serpent, it's Grooobra! Nobody knows he's there Grooobra! But he's always there, it's Grobra...",
		fr: "Venu du nulle part c'est Grooobra ! Plus vif que le serpent c'est Grooobra ! Personne ne l'aperçoit c'est Grooobra ! Mais il est toujours là, c'est Grobra...",
		de: "Coming from nowhere, it's Grooobra! Quicker than a serpent, it's Grooobra! Nobody knows he's there Grooobra! But he's always there, it's Grobra...",
		es: "Muñeco original de El Bruto. El mismo, el poderoso, no necesita presentación. Es Brazote..."
	}
};
var mister = {
	id: "mister",
	name: {
		en: "Mister V",
		fr: "Mister V",
		de: "Mister V",
		es: "Mister V"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Mister.png"
		}
	],
	description: {
		en: "A figurine of Mister V, a MyBrute fighter which is very powerful late in the game. We're talking clutch time, last minute, last chance!",
		fr: "La figurine de Mister V, un combattant de Labrute très puissant en fin de partie. C'est vraiment... la dernière chance, au dernier moment !",
		de: "A figurine of Mister V, a MyBrute fighter which is very powerful late in the game. We're talking clutch time, last minute, last chance!",
		es: "Muñeco original de El Bruto. ¡Nunca te cruces en su camino!"
	}
};
var chuck = {
	id: "chuck",
	name: {
		en: "Chuck Maurice",
		fr: "Chuck Maurice",
		de: "Chuck Maurice",
		es: "Chuck Morris"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Maurice.png"
		}
	],
	description: {
		en: "A figurine of Chuck Maurice from the MyBrute game. Almost as powerful as the man himself.",
		fr: "C'est la figurine de Chuck Maurice du jeu Labrute. Presque aussi puissant que le vrai.",
		de: "A figurine of Chuck Maurice from the MyBrute game. Almost as powerful as the man himself.",
		es: "Muñeco original de El Bruto. ¿Quién es el mejor?"
	}
};
var arbi = {
	id: "arbi",
	name: {
		en: "L'Arbitre",
		fr: "L'Arbitre",
		de: "L'Arbitre",
		es: "El Árbitro"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Arbitre.png"
		}
	],
	description: {
		en: "A latex figurine of the referee from the game MyBrute. He's never been defeated, but he takes the most blows.",
		fr: "L'Arbitre du jeu Labrute en figurine de latex. Il ne s'est jamais battu, mais c'est lui qui a du se prendre le plus de coups.",
		de: "A latex figurine of the referee from the game MyBrute. He's never been defeated, but he takes the most blows.",
		es: "Muñeco original de El Bruto. Fue la primera víctima de los Brutos. Sin este tu colección nunca estaría completa."
	}
};
var blueP = {
	id: "blueP",
	name: {
		en: "Gort Blueprint – Mark I",
		fr: "Blueprint de Gort",
		de: "Gort Blueprint – Mark I",
		es: "Plano de Gort"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/BluePrint.png"
		}
	],
	description: {
		en: "Looks like the plans for a humanoid robot named Gort. Signed 'Kevin Norray', and 'Chariottes Iddeeea' has been added in crayon.",
		fr: "On dirait le plan industriel d'un robot humanoïde nommé Gort. Il est signé 'Kevin Norray', et 'ideée de chariotte' a été rajouté au crayon.",
		de: "Looks like the plans for a humanoid robot named Gort. Signed 'Kevin Norray', and 'Chariottes Iddeeea' has been added in crayon.",
		es: "Hmm. Parece ser el manual para armar un robot humanoide llamado Gort. Ahora faltan las piezas."
	}
};
var gortBD = {
	id: "gortBD",
	name: {
		en: "Gort's right arm",
		fr: "Bras droit de Gort",
		de: "Gort's right arm",
		es: "Brazo derecho de Gort"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortBD.png"
		}
	],
	description: {
		en: "A robot's right arm. It looks like it should attach to another part.",
		fr: "Le bras droit d'un robot. On dirait qu'il peut s'enclencher dans une autre partie.",
		de: "A robot's right arm. It looks like it should attach to another part.",
		es: "Parece el brazo derecho de un robot articulado... Interesante."
	}
};
var gortBG = {
	id: "gortBG",
	name: {
		en: "Gort's left arm",
		fr: "Bras gauche de Gort",
		de: "Gort's left arm",
		es: "Brazo izquierdo de Gort"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortBG.png"
		}
	],
	description: {
		en: "It's a robot's left arm",
		fr: "C'est le bras gauche d'un robot.",
		de: "It's a robot's left arm",
		es: "Parece el brazo izquierdo de un robot articulado... Muy bien. ¿Y ahora qué?"
	}
};
var gortC = {
	id: "gortC",
	name: {
		en: "Gort's body",
		fr: "Corps de Gort",
		de: "Gort's body",
		es: "Torso de Gort"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortCorps.png"
		}
	],
	description: {
		en: "Looks like the torso of a robot. It's missing arms, legs, and the head.",
		fr: "On dirait le tronc d'un robot. Il manque les bras, les jambes, et la tête.",
		de: "Looks like the torso of a robot. It's missing arms, legs, and the head.",
		es: "Es el torso de un poderoso robot articulado. ¿Pero esto debió tener extremidades en algún momento..."
	}
};
var gortJD = {
	id: "gortJD",
	name: {
		en: "Gort's right leg",
		fr: "Jambe droite de Gort",
		de: "Gort's right leg",
		es: "Pierna derecha de Gort"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortJD.png"
		}
	],
	description: {
		en: "It's a robot's leg. The right one.",
		fr: "C'est une jambe de robot. La droite.",
		de: "It's a robot's leg. The right one.",
		es: "La pierna derecha de lo que debe ser un robot."
	}
};
var gortJG = {
	id: "gortJG",
	name: {
		en: "Gort's left leg",
		fr: "Jambe gauche de Gort",
		de: "Gort's left leg",
		es: "Pierna izquierda de Gort"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortJG.png"
		}
	],
	description: {
		en: "It's a robot's left leg",
		fr: "C'est la jambe gauche d'un robot.",
		de: "It's a robot's left leg",
		es: "La pierna izquierda de lo que debe ser un robot."
	}
};
var gortT = {
	id: "gortT",
	name: {
		en: "Gort's head",
		fr: "Tête de Gort",
		de: "Gort's head",
		es: "Cabeza de Gort"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortTete.png"
		}
	],
	description: {
		en: "It's a robot's head. Just need to find the rest.",
		fr: "C'est la tête d'un robot. Il faudrait trouver le reste.",
		de: "It's a robot's head. Just need to find the rest.",
		es: "Esta es la cabeza de un robot. Da curiosidad saber cómo será cuando esté completo todo el cuerpo."
	}
};
var snowBall = {
	id: "snowBall",
	name: {
		en: "Snowball",
		fr: "Boule de neige",
		de: "Snowball",
		es: "Bola de nieve"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/SnowBall.png"
		}
	],
	description: {
		en: "A snowball. It won't be easy to give that back at the end of the school year...",
		fr: "Une boule de neige. Ça va pas être facile de la restituer à la fin de l'année scolaire...",
		de: "A snowball. It won't be easy to give that back at the end of the school year...",
		es: "Una auténtica bola de nieve escandinava. Úsala bien antes de que se derrita..."
	}
};
var gortBG2 = {
	id: "gortBG2",
	name: {
		en: "Mark II left arm",
		fr: "Bras gauche Mark II",
		de: "Mark II left arm",
		es: "Brazo izquierdo de Mark II"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortBG2.png"
		}
	],
	description: {
		en: "Captain America's shield is attached to the forearm. It's actually a belt buckle but it does the job.",
		fr: "Le bouclier de Capitaine Etats-Unis a été fixé sur l'avant bras. Ce n'est qu'une boucle de ceinture, mais l'effet est réussi.",
		de: "Captain America's shield is attached to the forearm. It's actually a belt buckle but it does the job.",
		es: "El escudo del Capitán Sudamérica amarrado al antebrazo. Aunque solo sea una hebilla de correa, queda muy bien."
	}
};
var gortTete2 = {
	id: "gortTete2",
	name: {
		en: "Mark II head",
		fr: "Tête Mark II",
		de: "Mark II head",
		es: "Cabeza de Mark II"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortTete2.png"
		}
	],
	description: {
		en: "Someone has added a headband with a heart drawn on it... It really doesn't work with the rest of the outfit!",
		fr: "Quelqu'un a ajouté un bandeau en tissu avec un coeur dessiné... Ca ne va pas du tout avec le reste !",
		de: "Someone has added a headband with a heart drawn on it... It really doesn't work with the rest of the outfit!",
		es: "Alguien le puso una banda con un corazón dibujado... ¡Qué mal gusto!"
	}
};
var gortCorps2 = {
	id: "gortCorps2",
	name: {
		en: "Mark II body",
		fr: "Corps Mark II",
		de: "Mark II body",
		es: "Cuerpo de Mark II"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/GortCorps2.png"
		}
	],
	description: {
		en: "The Transformers insignia has been stuck to the breastplate. It represents the alliance between autonomous robot beings and the human race in their battle for justice and freedom.",
		fr: "L'écusson des Transformateurs a été fixé sur le plastron du robot. Il représente l'alliance entre les entités robotiques autonomes et les humains dans leur combat pour la Justice et la Liberté.",
		de: "The Transformers insignia has been stuck to the breastplate. It represents the alliance between autonomous robot beings and the human race in their battle for justice and freedom.",
		es: "Representa la alianza entre los organismos robóticos y humanos para luchar contra el mal."
	}
};
var tum = {
	id: "tum",
	name: {
		en: "The Unbelievable Machine",
		fr: "The Unbelievable Machine",
		de: "The Unbelievable Machine",
		es: "Máquina Increíble"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Tum.png"
		}
	],
	description: {
		en: "It's a videogame disc, some kind of puzzle. You must activate a mechanism using various objects with different functions to create a chain reaction and unlocking the next part of the quest.",
		fr: "C'est la disquette d'un jeu vidéo, une sorte de puzzle. On doit déclencher un mécanisme en plaçant différents objets aux effets divers pour qu'une réaction en chaine se produise jusqu'à l'objectif.",
		de: "It's a videogame disc, some kind of puzzle. You must activate a mechanism using various objects with different functions to create a chain reaction and unlocking the next part of the quest.",
		es: "Es el disquette de un videojuego que también sirve de rompecabezas."
	}
};
var moonp = {
	id: "moonp",
	name: {
		en: "Moon Patrol",
		fr: "Moon Patrouille",
		de: "Moon Patrol",
		es: "Patrulla Moon "
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Moonp.png"
		}
	],
	description: {
		en: "The 5.25inch disks with an awesome game on them! You control a vehicle on uneven territory, firing projectiles to clear obstacles, and kill enemies.",
		fr: "La disquette 5 pouces 1/4 d'un super jeu vidéo ! On controle un véhicule sur un terrain accidenté en tirant des projectiles devant pour detruire les obstacles, et en haut pour tuer les ennemis.",
		de: "The 5.25inch disks with an awesome game on them! You control a vehicle on uneven territory, firing projectiles to clear obstacles, and kill enemies.",
		es: "¡El disquette 5 1/4 de un excelente videojuego! Se controla un auto que dispara misiles."
	}
};
var turbo = {
	id: "turbo",
	name: {
		en: "Motus Turbo Challenge 2",
		fr: "Motus Turbo Challenge 2",
		de: "Motus Turbo Challenge 2",
		es: "Motus Turbo Challenge 2"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Turbo.png"
		}
	],
	description: {
		en: "A racing game which looks a lot like Outfun. The music is composed by the famous Barry Leitch. Do not copy this game!",
		fr: "Un jeu de course qui ressemble beaucoup à Outfun. La musique est composée par le célèbre Barry Leitch. Do not copy this game !",
		de: "A racing game which looks a lot like Outfun. The music is composed by the famous Barry Leitch. Do not copy this game!",
		es: "Un jeu de course qui ressemble beaucoup à Outfun. La musique est composée par le célèbre Barry Leitch. Do not copy this game !"
	}
};
var stunts = {
	id: "stunts",
	name: {
		en: "Stunts 5D",
		fr: "Stunts 5D",
		de: "Stunts 5D",
		es: "Stunts 5D"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Stunts.png"
		}
	],
	description: {
		en: "The HD (high density) disk for a game that's played in 5 dimensions! It's amazing! Furthermore you can make your own circuits with springboards, loops and banked curves... The music gets really old really quickly though... Especially through the PC Speaker.",
		fr: "La disquette HD (haute densité) d'un jeu de course en 5 dimensions ! C'est incroyable ! En plus, on peut créer ses propres circuits avec des tremplins, des loopings, des virages levés... Par contre, la musique saoule rapidement... Surtout en PC Speaker.",
		de: "The HD (high density) disk for a game that's played in 5 dimensions! It's amazing! Furthermore you can make your own circuits with springboards, loops and banked curves... The music gets really old really quickly though... Especially through the PC Speaker.",
		es: "¡Disquette de Alta Densidad de un juego de carreras en 5 dimensiones! Se puede armar circuitos increíbles, pero la música es malísima."
	}
};
var raider = {
	id: "raider",
	name: {
		en: "Catacomb Raider 2",
		fr: "Catacomb Raider 2",
		de: "Catacomb Raider 2",
		es: "Catacomb Raider 2"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Raider.png"
		}
	],
	description: {
		en: "The next installment of the adventure series starring Lara Drift. This time, the adventure begins in Venice and ends in China, via the depths of the oceans. The game runs on a pair of CDs.",
		fr: "La suite des aventures de la célèbre Lara Drift. Cette fois, l'histoire commence à Venise et se termine en Chine, en passant par les fonds marins. Le jeu tient sur une belle paire de CD.",
		de: "The next installment of the adventure series starring Lara Drift. This time, the adventure begins in Venice and ends in China, via the depths of the oceans. The game runs on a pair of CDs.",
		es: "La saga de aventuras de la conocida Lara Drift. Esta vez la historia comienza en Uruguay y termina en Japón, pasando por el fondo marino."
	}
};
var mototr = {
	id: "mototr",
	name: {
		en: "Moto Tracer",
		fr: "Moto Tracer",
		de: "Moto Tracer",
		es: "Moto Tracer"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Mototr.png"
		}
	],
	description: {
		en: "One of the best motorbike racing games. It's right up there with Hang Off and Motocross Sadness.",
		fr: "Un des meilleurs jeu de moto avec Hang Off et Motocross Sadness.",
		de: "One of the best motorbike racing games. It's right up there with Hang Off and Motocross Sadness.",
		es: "Uno de los mejores juegos de motos junto a Hang Off y Motocross Sadness."
	}
};
var pad = {
	id: "pad",
	name: {
		en: "P.A.D.",
		fr: "P.A.D.",
		de: "P.A.D.",
		es: "P.A.D."
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Pad.png"
		}
	],
	description: {
		en: "Planet After Death, a futuristic racing game set on a futuristic planet which has been destroyed by a virus from the future.",
		fr: "Planet After Death, un jeu de course futuriste sur une planète du futur détruite par un virus du futur.",
		de: "Planet After Death, a futuristic racing game set on a futuristic planet which has been destroyed by a virus from the future.",
		es: "Planet After Death, un juego futurista de carreras en un planeta del futuro, destruido por un virus del pasado."
	}
};
var totalin = {
	id: "totalin",
	name: {
		en: "Total Inhalation",
		fr: "Total Inhalation",
		de: "Total Inhalation",
		es: "Total Inhalation"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Totalin.png"
		}
	],
	description: {
		en: "An excellent strategy game, it'll take your breath away.",
		fr: "C'est un formidable jeu de stratégie, à couper le souffle.",
		de: "An excellent strategy game, it'll take your breath away.",
		es: "Un formidable juego de estrategia."
	}
};
var badgeso = {
	id: "badgeso",
	name: {
		en: "Original Smiley Badge",
		fr: "Badge Smiley Original",
		de: "Original Smiley Badge",
		es: "Smiley Original"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Badgeso.png"
		}
	],
	description: {
		en: "Smileys are in fashion. They're badges, but one day they'll revolutionize communication as we know it.",
		fr: "C'est la mode, les smileys. Ce sont des badges, mais un jour ils changeront de support et révolutionneront le monde de la communication.",
		de: "Smileys are in fashion. They're badges, but one day they'll revolutionize communication as we know it.",
		es: "La moda de los smileys está aquí."
	}
};
var badgewa = {
	id: "badgewa",
	name: {
		en: "Badge Watcher",
		fr: "Badge Watcher",
		de: "Badge Watcher",
		es: "Smiley Watcher"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Badgewa.png"
		}
	],
	description: {
		en: "A smiley badge with a tiny blood splatter on it. It's not real though!",
		fr: "Un badge smiley avec une petite éclaboussure de sang. Fausse, bien sûr !",
		de: "A smiley badge with a tiny blood splatter on it. It's not real though!",
		es: "Un smiley con una mancha de sangre, ¡falsa, por supuesto!"
	}
};
var badgeev = {
	id: "badgeev",
	name: {
		en: "Badge Evolution",
		fr: "Badge Evolution",
		de: "Badge Evolution",
		es: "Smiley Evolution"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Badgeev.png"
		}
	],
	description: {
		en: "A smiley badge with 3 eyes.",
		fr: "Un badge smiley avec trois yeux.",
		de: "A smiley badge with 3 eyes.",
		es: "Un smiley tan avanzado que tiene tres ojos."
	}
};
var badgeno = {
	id: "badgeno",
	name: {
		en: "Night Badge",
		fr: "Badge de la Nuit",
		de: "Night Badge",
		es: "Smiley Nocturno"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Badgeno.png"
		}
	],
	description: {
		en: "A dark badge. The eyes and mouth seem to glow in the dark.",
		fr: "Un badge sombre on dirait que les yeux et la bouche brillent dans le noir.",
		de: "A dark badge. The eyes and mouth seem to glow in the dark.",
		es: "Un smiley que brilla en la oscuridad."
	}
};
var badgeha = {
	id: "badgeha",
	name: {
		en: "Happy Badge",
		fr: "Badge Happy",
		de: "Happy Badge",
		es: "Happy Smiley "
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Badgeha.png"
		}
	],
	description: {
		en: "A particularly happy-looking smiley badge.",
		fr: "Un badge smiley particulièrement heureux.",
		de: "A particularly happy-looking smiley badge.",
		es: "El smiley más feliz que se haya visto."
	}
};
var badgero = {
	id: "badgero",
	name: {
		en: "Pink Badge",
		fr: "Badge rose",
		de: "Pink Badge",
		es: "Smiley Rosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Badgero.png"
		}
	],
	description: {
		en: "Un badge rose.",
		fr: "Un badge rose.",
		de: "Un badge rose.",
		es: "Un smiley rosa, no podía faltar."
	}
};
var badgepi = {
	id: "badgepi",
	name: {
		en: "Pirate Badge",
		fr: "Badge pirate",
		de: "Pirate Badge",
		es: "Smiley Pirata"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Badgepi.png"
		}
	],
	description: {
		en: "A one-eyed pirate smiley badge.",
		fr: "Un badge smiley pirate borgne.",
		de: "A one-eyed pirate smiley badge.",
		es: "Un original smiley de pirata."
	}
};
var kurli = {
	id: "kurli",
	name: {
		en: "Kurli Bag",
		fr: "Paquet de Kurli",
		de: "Kurli Bag",
		es: "Paquete de aperitivos"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Kurli.png"
		}
	],
	description: {
		en: "A Kurli bag which can make loads of noise. It is empty... shame...",
		fr: "Un paquet de Kurli coupable de beaucoup de bruit. Il est vide... dommage...",
		de: "A Kurli bag which can make loads of noise. It is empty... shame...",
		es: "Una inagotable fuente de ruido."
	}
};
var scoubi2 = {
	id: "scoubi2",
	name: {
		en: "Blue Scoubidou",
		fr: "Scoubidou bleu",
		de: "Blue Scoubidou",
		es: "Pulsera azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Scoubi2.png"
		}
	],
	description: {
		en: "A blue and white scoubidou.",
		fr: "Un scoubidou bleu et blanc.",
		de: "A blue and white scoubidou.",
		es: "Una bonita pulsera azul."
	}
};
var taille = {
	id: "taille",
	name: {
		en: "Cat pencil sharpener",
		fr: "Taille crayon chat",
		de: "Cat pencil sharpener",
		es: "Sacapuntas de gato"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Taille.png"
		}
	],
	description: {
		en: "It's a pencil sharpener in the shape of a cat.",
		fr: "C'est un taille crayon en forme de chat.",
		de: "It's a pencil sharpener in the shape of a cat.",
		es: "Uno de los preferidos de los niños, muy útil por cierto."
	}
};
var gluve = {
	id: "gluve",
	name: {
		en: "Green Sticky Hand",
		fr: "Main collante verte",
		de: "Green Sticky Hand",
		es: "Mano pegajosa verde"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gluve.png"
		}
	],
	description: {
		en: "A sticky hand that you throw against the wall. Or against your naighbors...",
		fr: "Une main collante verte qu'on claque contre le mur. Ou contre ses voisins...",
		de: "A sticky hand that you throw against the wall. Or against your naighbors...",
		es: "Lánzala y se pegará en la pared, o en la cara de quien esté en frente..."
	}
};
var gluro = {
	id: "gluro",
	name: {
		en: "Pink Sticky Hand",
		fr: "Main collante rose",
		de: "Pink Sticky Hand",
		es: "Mano pegajosa rosa"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gluro.png"
		}
	],
	description: {
		en: "A pink sticky hand. Well, pink, grey, yellow and dusty if we're being honest.",
		fr: "Une main collante rose. Enfin, rose-gris-jaune-poussière plutôt.",
		de: "A pink sticky hand. Well, pink, grey, yellow and dusty if we're being honest.",
		es: "Lánzala y se pegará en cualquier lugar..."
	}
};
var glubl = {
	id: "glubl",
	name: {
		en: "Blue Sticky Hand",
		fr: "Main collante bleue",
		de: "Blue Sticky Hand",
		es: "Mano pegajosa azul"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Glubl.png"
		}
	],
	description: {
		en: "A sticky blue hand. There are crumbs of some sort on it, it's pretty rank...",
		fr: "Une main gluante bleue. Il y a des miettes collées dessus, c'est vaiment dégueu...",
		de: "A sticky blue hand. There are crumbs of some sort on it, it's pretty rank...",
		es: "Lánzala y se pegará en la pared, esta lleva pelos y migas pegadas...puaj"
	}
};
var gluja = {
	id: "gluja",
	name: {
		en: "Yellow Sticky Hand",
		fr: "Main collante jaune",
		de: "Yellow Sticky Hand",
		es: "Mano pegajosa amarilla"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gluja.png"
		}
	],
	description: {
		en: "A really gross yellow sticky hand... who would want to confiscate that?",
		fr: "Une main collante jaune toute crasseuse... mais qui a envie de confisquer ça ?",
		de: "A really gross yellow sticky hand... who would want to confiscate that?",
		es: "Se pega en la pared a pesar de haber sido usada miles de veces. Tal vez era blanca cuando era nueva."
	}
};
var xmasBall = {
	id: "xmasBall",
	name: {
		en: "Christmas Bauble",
		fr: "Boule de Noël",
		de: "Christmas Bauble",
		es: "Bola de Navidad"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/XmasBall.png"
		}
	],
	description: {
		en: "A christmas bauble. It looks fragile, it's amazing that it made it here in one piece.",
		fr: "Une boule de Noël. Elle a l'air fragile, c'est étonnant qu'elle en soit arrivée là en vie.",
		de: "A christmas bauble. It looks fragile, it's amazing that it made it here in one piece.",
		es: "Una bola tan bella y decorativa... uno de los símbolos de la Navidad."
	}
};
var treemas = {
	id: "treemas",
	name: {
		en: "Christmas Tree branch",
		fr: "Branche de sapin",
		de: "Christmas Tree branch",
		es: "Rama de árbol"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Treemas.png"
		}
	],
	description: {
		en: "A formidable weapon! Once it's planted, the spines detach from the branch, like a bee's sting.",
		fr: "Une arme redoutable ! Une fois plantées, les épines se détachent de la branche, comme le dard d'une abeille.",
		de: "A formidable weapon! Once it's planted, the spines detach from the branch, like a bee's sting.",
		es: "Puede ser un arma peligrosísima, sus espinas pueden clavarse en la piel y causar graves irritaciones."
	}
};
var starmas = {
	id: "starmas",
	name: {
		en: "Christmas Tree Star",
		fr: "Etoile de Noël",
		de: "Christmas Tree Star",
		es: "Estrella de Navidad"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Starmas.png"
		}
	],
	description: {
		en: "A christmas tree star like the ones you'd see on top of christmas trees. It's a representation of Sirius, the star followed by the three wise men, represented by the 3 stars on Orion's belt.",
		fr: "Une étoile de sapin de Noël qu'on place en haut du sapin. C'est une réprsentation de l'étoile Sirius que les rois mages ont suivi. Eux, ils représentent les trois étoiles de la ceinture d'Orion.",
		de: "A christmas tree star like the ones you'd see on top of christmas trees. It's a representation of Sirius, the star followed by the three wise men, represented by the 3 stars on Orion's belt.",
		es: "La estrella que va siempre en lo más alto de árbol. Representa a Sirius, la estrella que los Reyes Magos siguieron y ellos representan las 3 estrellas de Orión."
	}
};
var gift = {
	id: "gift",
	name: {
		en: "Gift",
		fr: "Cadeau",
		de: "Gift",
		es: "Regalo"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Gift.png"
		}
	],
	description: {
		en: "A gift. No noises, no suspicious ticking... It begs the question how it got here without anyone opening it?",
		fr: "Un cadeau. Pas de bruit, pas de tic-tac suspect... Mais alors, pourquoi est-il arrivé jusque ici sans avoir été ouvert ? Il faut noter qu'il est très laid avec son ruban adhésif marron pour cartons...",
		de: "A gift. No noises, no suspicious ticking... It begs the question how it got here without anyone opening it?",
		es: "Una caja, sin ruidos, sin tic-tac sospechoso... ¿Por qué nadie lo ha abierto hasta ahora?"
	}
};
var choco = {
	id: "choco",
	name: {
		en: "Box of chocolates",
		fr: "Boite de chocolat",
		de: "Box of chocolates",
		es: "Caja de chocolates"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Choco.png"
		}
	],
	description: {
		en: "A box of praline balls.",
		fr: "Une boite de Boule Praliné.",
		de: "A box of praline balls.",
		es: "Infaltable en las fiestas, a mantener lejos del alcance de los niños."
	}
};
var jesus = {
	id: "jesus",
	name: {
		en: "Baby Jesus Plush",
		fr: "Peluche de Jésus",
		de: "Baby Jesus Plush",
		es: "Peluche de Jesús"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Jesus.png"
		}
	],
	description: {
		en: "A baby Jesus soft toy. When you squeeze him, he cries.",
		fr: "Une peluche du petit Jésus. Quand on appuie dessus, il crie.",
		de: "A baby Jesus soft toy. When you squeeze him, he cries.",
		es: "Un peluche del Niño Jesús. Se ríe cuando se presiona su vientre."
	}
};
var moise = {
	id: "moise",
	name: {
		en: "Moses Plush",
		fr: "Peluche de Moïse",
		de: "Moses Plush",
		es: "Peluche de Moisés"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/items/Moise.png"
		}
	],
	description: {
		en: "A Moses soft toy, One of the first X-Men known to humanity.",
		fr: "La peluche de Moïse, un des premiers X-Man de l'humanité.",
		de: "A Moses soft toy, One of the first X-Men known to humanity.",
		es: "Un peluche de Moisés, uno de los primeros superhéroes."
	}
};
var Pet_IronWill = {
	id: "Pet_IronWill",
	name: {
		en: "Iron will",
		fr: "Volonté de Fer",
		de: "Iron will",
		es: "Voluntad de acero"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Unshakeable Professor",
				fr: "Professeur inébranlable",
				de: "Unshakeable Professor",
				es: "Profesor inquebrantable"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_IronWill.png"
		}
	],
	description: {
		en: "Number of times 'Iron will' has been used",
		fr: "Nombre d'utilisation de l'action 'Volonté de Fer'",
		de: "Number of times 'Iron will' has been used",
		es: "Cantidad de usos de la acción 'Voluntad de acero'"
	}
};
var Pet_ElbowHit = {
	id: "Pet_ElbowHit",
	name: {
		en: "Elbow Smash",
		fr: "Coup de coude",
		de: "Elbow Smash",
		es: "Codazo"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Smashing Elbow Master",
				fr: "Maître des coups de coude",
				de: "Smashing Elbow Master",
				es: "A codazos aprendí"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_ElbowHit.png"
		}
	],
	description: {
		en: "Number of times the 'Elbow Smash' has been used",
		fr: "Nombre d'utilisation de l'action 'Coup de coude'",
		de: "Number of times the 'Elbow Smash' has been used",
		es: "Cantidad de usos de la acción 'Codazo'"
	}
};
var Pet_Meditate = {
	id: "Pet_Meditate",
	name: {
		en: "Meditation",
		fr: "Méditation",
		de: "Meditation",
		es: "Meditación"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Zen Professor",
				fr: "Professeur zen",
				de: "Zen Professor",
				es: "Profesor Zen"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Meditate.png"
		}
	],
	description: {
		en: "Number of times 'Meditation' has been used",
		fr: "Nombre d'utilisation de l'action 'Méditation'",
		de: "Number of times 'Meditation' has been used",
		es: "Cantidad de usos de la acción 'Meditación'"
	}
};
var Pet_Explication = {
	id: "Pet_Explication",
	name: {
		en: "Explanations",
		fr: "Explications",
		de: "Explanations",
		es: "Explicaciones"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Master of Explanations",
				fr: "Maître en explications",
				de: "Master of Explanations",
				es: "Maestro explicador"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Explication.png"
		}
	],
	description: {
		en: "Number of times 'Explanations' have been used",
		fr: "Nombre d'utilisation de l'action 'Explications'",
		de: "Number of times 'Explanations' have been used",
		es: "Cantidad de usos de la acción 'Explicaciones'"
	}
};
var Pet_Valium = {
	id: "Pet_Valium",
	name: {
		en: "Valium",
		fr: "Valium",
		de: "Valium",
		es: "Valium"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Professor pharmacist",
				fr: "Professeur pharmacien",
				de: "Professor pharmacist",
				es: "Profesor farmacéutico"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Valium.png"
		}
	],
	description: {
		en: "Number of times 'Valium' has been used",
		fr: "Nombre d'utilisation de l'action 'Valium'",
		de: "Number of times 'Valium' has been used",
		es: "Cantidad de usos de la acción 'Valium'"
	}
};
var Pet_Sleep = {
	id: "Pet_Sleep",
	name: {
		en: "Tranquilizer dart gun",
		fr: "Fusil hypodermique",
		de: "Tranquilizer dart gun",
		es: "Dardo tranquilizante"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Soporific Professor",
				fr: "Professeur soporifique",
				de: "Soporific Professor",
				es: "Profesor sueño"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Sleep.png"
		}
	],
	description: {
		en: "Number of times the 'Tranquilizer dart gun' has been used",
		fr: "Nombre d'utilisation de l'action 'Fusil hypodermique'",
		de: "Number of times the 'Tranquilizer dart gun' has been used",
		es: "Cantidad de usos de la acción 'Dardo tranquilizante'"
	}
};
var Pet_Alzheimer = {
	id: "Pet_Alzheimer",
	name: {
		en: "Alzheimers",
		fr: "Alzheimer",
		de: "Alzheimers",
		es: "Alzheimer"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Senile Professor",
				fr: "Professeur sénile",
				de: "Senile Professor",
				es: "Profesor senil"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Alzheimer.png"
		}
	],
	description: {
		en: "Number of times 'Alzheimers' has been used",
		fr: "Nombre d'utilisation de l'action 'Alzheimer'",
		de: "Number of times 'Alzheimers' has been used",
		es: "Cantidad de usos de la acción 'Alzheimer'"
	}
};
var Pet_Club = {
	id: "Pet_Club",
	name: {
		en: "Cudgel",
		fr: "Gourdin",
		de: "Cudgel",
		es: "Mazo"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Professeuuuuuuur Caveeemaaannn!",
				fr: "Professeuuuuuuur Caveeerrrrnnnneeee !",
				de: "Professeuuuuuuur Caveeemaaannn!",
				es: "¡Profesor cavernícola!"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Club.png"
		}
	],
	description: {
		en: "Number of times the 'Cudgel' has been used",
		fr: "Nombre d'utilisation de l'action 'Gourdin'",
		de: "Number of times the 'Cudgel' has been used",
		es: "Cantidad de usos de la acción 'Mazo'"
	}
};
var Pet_Dring = {
	id: "Pet_Dring",
	name: {
		en: "Alarm clock",
		fr: "Sonnerie",
		de: "Alarm clock",
		es: "Campana"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Wakeup like Clockwork",
				fr: "Maître des réveils",
				de: "Wakeup like Clockwork",
				es: "Profesor despertador"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Dring.png"
		}
	],
	description: {
		en: "Number of times the 'Alarm clock' has been used",
		fr: "Nombre d'utilisation de l'action 'Sonnerie'",
		de: "Number of times the 'Alarm clock' has been used",
		es: "Cantidad de usos de la acción 'Campana'"
	}
};
var Pet_Stock = {
	id: "Pet_Stock",
	name: {
		en: "Big Brain",
		fr: "Gros cerveau",
		de: "Big Brain",
		es: "Cerebrito"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Maker of big brains",
				fr: "Faiseur de gros cerveaux",
				de: "Maker of big brains",
				es: "Profesor Cerebro"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Stock.png"
		}
	],
	description: {
		en: "Number of times 'Big Brain' has been used",
		fr: "Nombre d'utilisation de l'action 'cerveau'",
		de: "Number of times 'Big Brain' has been used",
		es: "Cantidad de usos de la acción 'Cerebrito'"
	}
};
var Pet_Shock = {
	id: "Pet_Shock",
	name: {
		en: "Cattleprod",
		fr: "Electrochoc",
		de: "Cattleprod",
		es: "Electroshock"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Certified reanimator",
				fr: "Réanimateur certifié",
				de: "Certified reanimator",
				es: "Reanimador"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Shock.png"
		}
	],
	description: {
		en: "Number of times the 'Cattleprod' has been used",
		fr: "Nombre d'utilisation de l'action 'Electrochoc'",
		de: "Number of times the 'Cattleprod' has been used",
		es: "Cantidad de usos de la acción 'Electroshock'"
	}
};
var Pet_ComeOn = {
	id: "Pet_ComeOn",
	name: {
		en: "Leader",
		fr: "Meneur",
		de: "Leader",
		es: "Acomodador"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Ringleader",
				fr: "Meneur de revue",
				de: "Ringleader",
				es: "Acomodador de cine"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_ComeOn.png"
		}
	],
	description: {
		en: "Number of times 'Leader' has been used",
		fr: "Nombre d'utilisation de l'action 'Meneur'",
		de: "Number of times 'Leader' has been used",
		es: "Cantidad de usos de la acción 'Acomodador'"
	}
};
var Pet_Cheater = {
	id: "Pet_Cheater",
	name: {
		en: "Anticheat",
		fr: "Antisèche",
		de: "Anticheat",
		es: "Copión"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Professeur conciliant",
				fr: "Professeur conciliant",
				de: "Professeur conciliant",
				es: "Profesor tolerante"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Cheater.png"
		}
	],
	description: {
		en: "Number of times 'Anticheat' has been used",
		fr: "Nombre d'utilisation de l'action 'Antisèche'",
		de: "Number of times 'Anticheat' has been used",
		es: "Cantidad de usos de la acción 'Copión'"
	}
};
var Pet_BonusXp = {
	id: "Pet_BonusXp",
	name: {
		en: "Synergy",
		fr: "Synergie",
		de: "Synergy",
		es: "Sinergia"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Experienced Teacher",
				fr: "Professeur expérimenté",
				de: "Experienced Teacher",
				es: "Profesor experimentado"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_BonusXp.png"
		}
	],
	description: {
		en: "Number of times 'Synergy' has been used",
		fr: "Nombre d'utilisation de l'action 'Synergie'",
		de: "Number of times 'Synergy' has been used",
		es: "Cantidad de usos de la acción 'Sinergia'"
	}
};
var Pet_Tickle = {
	id: "Pet_Tickle",
	name: {
		en: "Tickles",
		fr: "Chatouilles",
		de: "Tickles",
		es: "Cosquillas"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Funny Teacher",
				fr: "Professeur rigolo",
				de: "Funny Teacher",
				es: "Profesor risitas"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Tickle.png"
		}
	],
	description: {
		en: "Number of times 'Tickles' has been used",
		fr: "Nombre d'utilisation de l'action 'Chatouilles'",
		de: "Number of times 'Tickles' has been used",
		es: "Cantidad de usos de la acción 'Cosquillas'"
	}
};
var Pet_Muscled = {
	id: "Pet_Muscled",
	name: {
		en: "Removal",
		fr: "Déménageur",
		de: "Removal",
		es: "Mudanza"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Musclebound Teacher",
				fr: "Professeur baraqué",
				de: "Musclebound Teacher",
				es: "Profesor musculoso"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Muscled.png"
		}
	],
	description: {
		en: "Number of times 'Removal' has been used",
		fr: "Nombre d'utilisation de l'action 'Déménageur'",
		de: "Number of times 'Removal' has been used",
		es: "Cantidad de usos de la acción 'Mudanza'"
	}
};
var Pet_Hot = {
	id: "Pet_Hot",
	name: {
		en: "Solace",
		fr: "Réconfort",
		de: "Solace",
		es: "Alivio"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Friendly Professor",
				fr: "Professeur amical",
				de: "Friendly Professor",
				es: "Profesor amigo"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Hot.png"
		}
	],
	description: {
		en: "Number of times 'Solace' has been used",
		fr: "Nombre d'utilisation de l'action 'Réconfort'",
		de: "Number of times 'Solace' has been used",
		es: "Cantidad de usos de la acción 'Alivio'"
	}
};
var Pet_Exclude = {
	id: "Pet_Exclude",
	name: {
		en: "Exclusion",
		fr: "Exclusion",
		de: "Exclusion",
		es: "Expulsión"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Monstruous Professor",
				fr: "Professeur monstrueux",
				de: "Monstruous Professor",
				es: "Profesor descorazonado"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Exclude.png"
		}
	],
	description: {
		en: "Number of times 'Exclusion' has been used",
		fr: "Nombre d'utilisation de l'action 'Exclusion'",
		de: "Number of times 'Exclusion' has been used",
		es: "Cantidad de usos de la acción 'Expulsión'"
	}
};
var Pet_BoringTransfer = {
	id: "Pet_BoringTransfer",
	name: {
		en: "Solace",
		fr: "Transfert",
		de: "Solace",
		es: "Transferencia"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Manipulator of Boredom",
				fr: "Manipulateur de l'ennui",
				de: "Manipulator of Boredom",
				es: "Manipulador del aburrimiento"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_BoringTransfer.png"
		}
	],
	description: {
		en: "Number of times 'Solace' has been used",
		fr: "Nombre d'utilisation de l'action 'Transfert'",
		de: "Number of times 'Solace' has been used",
		es: "Cantidad de usos de la acción 'Transferencia'"
	}
};
var Pet_NoLaugh = {
	id: "Pet_NoLaugh",
	name: {
		en: "Not even funny",
		fr: "Même pas drôle",
		de: "Not even funny",
		es: "No es gracioso"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Serious Professor",
				fr: "Professeur sérieux",
				de: "Serious Professor",
				es: "Profesor serio"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_NoLaugh.png"
		}
	],
	description: {
		en: "Number of times 'Not even funny' has been used",
		fr: "Nombre d'utilisation de l'action 'Même pas drôle'",
		de: "Number of times 'Not even funny' has been used",
		es: "Cantidad de usos de la acción 'No es gracioso'"
	}
};
var Pet_Chut = {
	id: "Pet_Chut",
	name: {
		en: "Shhhh! ",
		fr: "Chut !",
		de: "Shhhh! ",
		es: "¡Shhhhhh!"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Master of silence",
				fr: "Maître du silence",
				de: "Master of silence",
				es: "Profesor silencio"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_Chut.png"
		}
	],
	description: {
		en: "Number of times 'Shhhh! ' has been used",
		fr: "Nombre d'utilisation de l'action 'Chut !'",
		de: "Number of times 'Shhhh! ' has been used",
		es: "Cantidad de usos de la acción '¡Shhhhhh!'"
	}
};
var Pet_ToTheCorner = {
	id: "Pet_ToTheCorner",
	name: {
		en: "Go to the corner! ",
		fr: "Au coin !",
		de: "Go to the corner! ",
		es: "¡Al rincón!"
	},
	rare: 0,
	unlocks: [
		{
			count: 3,
			points: 1,
			title: {
				en: "Punishment Master",
				fr: "Maître des punitions",
				de: "Punishment Master",
				es: "Maestro del castigo"
			}
		},
		{
			count: 300,
			points: 1,
			icon: "/img/actions/Pet_ToTheCorner.png"
		}
	],
	description: {
		en: "Number of times 'Go to the corner!' has been used",
		fr: "Nombre d'utilisation de l'action 'Au coin !'",
		de: "Number of times 'Go to the corner!' has been used",
		es: "Cantidad de usos de la acción '¡Al rincón!'"
	}
};
var heddy = {
	id: "heddy",
	name: {
		en: "Eddy Throttle",
		fr: "Eddy Throttle",
		de: "Eddy Throttle",
		es: "Eddy Roque"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/icons/assist_eddy.png"
		}
	],
	description: {
		en: "Eddy Throttle is available",
		fr: "Eddy Throttle est disponible",
		de: "Eddy Throttle is available",
		es: "Eddy Roque está disponible"
	}
};
var hpeggy = {
	id: "hpeggy",
	name: {
		en: "Peggy Lane",
		fr: "Peggy Douz",
		de: "Peggy Lane",
		es: "Peggy Grosso"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/icons/assist_peggy.png"
		}
	],
	description: {
		en: "Peggy Douz is available",
		fr: "Peggy Douz est disponible",
		de: "Peggy Douz is available",
		es: "Peggy Douz está disponible"
	}
};
var htizoc = {
	id: "htizoc",
	name: {
		en: "Tizoc the pigeon",
		fr: "Tizoc",
		de: "Tizoc the pigeon",
		es: "La paloma Tizoc"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/icons/assist_tizoc.png"
		}
	],
	description: {
		en: "Tizoc the pigeon is available",
		fr: "Tizoc le pigeon est disponible",
		de: "Tizoc the pigeon is available",
		es: "La paloma Tizoc está disponible"
	}
};
var hmuzot = {
	id: "hmuzot",
	name: {
		en: "Miss Smart",
		fr: "Mme Muzot",
		de: "Miss Smart",
		es: "Sra. Muzot"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/loc/es/notes/Pompe.png"
		}
	],
	description: {
		en: "Miss Smart  is available",
		fr: "Mme Muzot est disponible",
		de: "Miss Smart  is available",
		es: "Sra. Muzot está disponible"
	}
};
var hdwayne = {
	id: "hdwayne",
	name: {
		en: "Dwayne the invigilator",
		fr: "Monsieur Dwayne",
		de: "Dwayne the invigilator",
		es: "Dwayne Tyson"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/loc/es/notes/Incroyable.png"
		}
	],
	description: {
		en: "The invigilator is available",
		fr: "Monsieur Dwayne le surveillant est disponible",
		de: "The invigilator is available",
		es: "El supervisor está disponible"
	}
};
var htippex = {
	id: "htippex",
	name: {
		en: "Tippex the dog",
		fr: "Tippex",
		de: "Tippex the dog",
		es: "El perro Milan"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/loc/es/notes/Essaye-encore.png"
		}
	],
	description: {
		en: "Tippex is available",
		fr: "Tippex le chien est disponible",
		de: "Tippex is available",
		es: "El perro Milan está disponible"
	}
};
var hnuke = {
	id: "hnuke",
	name: {
		en: "Mister Nuke",
		fr: "Monsieur Nuke",
		de: "Mister Nuke",
		es: "Mister Nuke"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/loc/es/notes/What.png"
		}
	],
	description: {
		en: "Mr. Nuke is available",
		fr: "Monsieur Nuke est disponible",
		de: "Mr. Nuke is available",
		es: "Mister Nuke está disponible"
	}
};
var hsherlock = {
	id: "hsherlock",
	name: {
		en: "The Inspector",
		fr: "L'Inspecteur",
		de: "The Inspector",
		es: "El Inspector"
	},
	rare: 0,
	unlocks: [
		{
			count: 1,
			points: 0,
			icon: "/img/loc/es/notes/Omg.png"
		}
	],
	description: {
		en: "The Chief Academic Inspector is available",
		fr: "L'inspecteur d'académie est disponible",
		de: "The Chief Academic Inspector is available",
		es: "El inspector académico está disponible"
	}
};
var hat9 = {
	id: "hat9",
	name: {
		en: "Bonnet de Noël",
		fr: "Bonnet de Noël",
		de: "Bonnet de Noël",
		es: "Bonnet de Noël"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/icons/hat9.png"
		}
	],
	description: {
		en: "Félicitations ! Vous avez trouvé un bonnet de Noël.",
		fr: "Félicitations ! Vous avez trouvé un bonnet de Noël.",
		de: "Félicitations ! Vous avez trouvé un bonnet de Noël.",
		es: "Félicitations ! Vous avez trouvé un bonnet de Noël."
	}
};
var hat10 = {
	id: "hat10",
	name: {
		en: "Bois de rennes",
		fr: "Bois de rennes",
		de: "Bois de rennes",
		es: "Bois de rennes"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/icons/hat10.png"
		}
	],
	description: {
		en: "Félicitations ! Vous avez trouvé des bois de rennes.",
		fr: "Félicitations ! Vous avez trouvé des bois de rennes.",
		de: "Félicitations ! Vous avez trouvé des bois de rennes.",
		es: "Félicitations ! Vous avez trouvé des bois de rennes."
	}
};
var hat11 = {
	id: "hat11",
	name: {
		en: "Chapeau de neige",
		fr: "Chapeau de neige",
		de: "Chapeau de neige",
		es: "Chapeau de neige"
	},
	rare: 1,
	unlocks: [
		{
			count: 1,
			points: 1,
			icon: "/img/icons/hat11.png"
		}
	],
	description: {
		en: "Félicitation ! Vous avez trouvé un chapeau en forme de tête de bonhomme de neige.",
		fr: "Félicitations ! Vous avez trouvé un chapeau en forme de tête de bonhomme de neige.",
		de: "Félicitation ! Vous avez trouvé un chapeau en forme de tête de bonhomme de neige.",
		es: "Félicitation ! Vous avez trouvé un chapeau en forme de tête de bonhomme de neige."
	}
};
var teacherstoryJson = {
	colec: colec,
	allcolec: allcolec,
	betats: betats,
	bobj: bobj,
	oneshot: oneshot,
	val1: val1,
	val2: val2,
	val3: val3,
	val4: val4,
	val5: val5,
	val6: val6,
	val7: val7,
	val8: val8,
	rabsolu: rabsolu,
	ponyland: ponyland,
	vision: vision,
	trolls: trolls,
	frogs: frogs,
	puces: puces,
	totoc: totoc,
	dark: dark,
	franc: franc,
	jedi: jedi,
	bijou: bijou,
	sugar: sugar,
	ghost: ghost,
	plush: plush,
	kissmAll: kissmAll,
	allStar: allStar,
	allschmoll: allschmoll,
	allfschmoll: allfschmoll,
	allColle: allColle,
	science: science,
	allbilles: allbilles,
	allapn: allapn,
	allyoyo: allyoyo,
	alldolly: alldolly,
	allbrutes: allbrutes,
	allgort: allgort,
	gortv2: gortv2,
	gametrot: gametrot,
	smileyb: smileyb,
	pattes: pattes,
	noeltroll: noeltroll,
	phone: phone,
	talky: talky,
	telec: telec,
	ball1: ball1,
	ball2: ball2,
	totoJ: totoJ,
	totoV: totoV,
	totoR: totoR,
	totoB: totoB,
	totoN: totoN,
	capN: capN,
	capB: capB,
	capR: capR,
	capV: capV,
	compa: compa,
	equer: equer,
	elast: elast,
	bReb: bReb,
	bReb2: bReb2,
	tennis: tennis,
	puceV: puceV,
	puceR: puceR,
	puceN: puceN,
	dents: dents,
	pomme: pomme,
	gort: gort,
	bball: bball,
	toupB: toupB,
	toupV: toupV,
	toupR: toupR,
	toup1: toup1,
	toup2: toup2,
	ring: ring,
	mars: mars,
	dgun: dgun,
	wgun: wgun,
	kalas: kalas,
	lancP: lancP,
	trolV: trolV,
	trolB: trolB,
	trolR: trolR,
	trolJ: trolJ,
	trolO: trolO,
	trolM: trolM,
	piou: piou,
	lapin: lapin,
	arbal: arbal,
	laseR: laseR,
	laseV: laseV,
	laseB: laseB,
	laseO: laseO,
	fourc: fourc,
	knife: knife,
	pogs: pogs,
	epee1: epee1,
	epee2: epee2,
	epee3: epee3,
	epee4: epee4,
	epee5: epee5,
	epee6: epee6,
	gren1: gren1,
	gren2: gren2,
	gren3: gren3,
	gren4: gren4,
	marto: marto,
	scoub: scoub,
	nba: nba,
	macht: macht,
	tamag: tamag,
	rototo: rototo,
	gameb: gameb,
	assas: assas,
	licorn: licorn,
	pony1: pony1,
	pony2: pony2,
	pony3: pony3,
	pony4: pony4,
	smolV: smolV,
	smolJ: smolJ,
	smolB: smolB,
	smolO: smolO,
	smolR: smolR,
	chuP: chuP,
	chuC: chuC,
	chuF: chuF,
	chuCo: chuCo,
	chuO: chuO,
	barby: barby,
	ken: ken,
	gamji: gamji,
	diamV: diamV,
	diamM: diamM,
	diamR: diamR,
	diamB: diamB,
	diamJ: diamJ,
	packP: packP,
	psyco: psyco,
	ectog: ectog,
	pke: pke,
	trap: trap,
	jamb: jamb,
	dent2: dent2,
	enjo: enjo,
	yoyoB: yoyoB,
	yoyoR: yoyoR,
	kissmB: kissmB,
	kissmJ: kissmJ,
	kissmN: kissmN,
	kissmR: kissmR,
	lukeL: lukeL,
	pablo: pablo,
	dollar: dollar,
	superW: superW,
	griffon: griffon,
	schC: schC,
	schP: schP,
	schR: schR,
	schV: schV,
	schF1: schF1,
	schF2: schF2,
	schF3: schF3,
	schF4: schF4,
	schF5: schF5,
	schF6: schF6,
	schF7: schF7,
	schF8: schF8,
	schF9: schF9,
	uhu: uhu,
	uhuM: uhuM,
	pdc: pdc,
	tdc: tdc,
	sheep: sheep,
	gomo: gomo,
	igor: igor,
	mouta: mouta,
	cerbere: cerbere,
	euler: euler,
	gyro: gyro,
	mkbaL: mkbaL,
	crist: crist,
	pend: pend,
	billAb: billAb,
	billAv: billAv,
	billAo: billAo,
	billO1: billO1,
	billO2: billO2,
	billO3: billO3,
	BillT: BillT,
	billOr: billOr,
	billAl: billAl,
	billM: billM,
	billP: billP,
	Flash: Flash,
	boitier: boitier,
	objec: objec,
	jetabl: jetabl,
	dollP1: dollP1,
	dollPM: dollPM,
	dollPVT: dollPVT,
	fifi: fifi,
	brutor: brutor,
	tanka: tanka,
	catG: catG,
	dundee: dundee,
	kazou: kazou,
	prehista: prehista,
	maxi: maxi,
	grobra: grobra,
	mister: mister,
	chuck: chuck,
	arbi: arbi,
	blueP: blueP,
	gortBD: gortBD,
	gortBG: gortBG,
	gortC: gortC,
	gortJD: gortJD,
	gortJG: gortJG,
	gortT: gortT,
	snowBall: snowBall,
	gortBG2: gortBG2,
	gortTete2: gortTete2,
	gortCorps2: gortCorps2,
	tum: tum,
	moonp: moonp,
	turbo: turbo,
	stunts: stunts,
	raider: raider,
	mototr: mototr,
	pad: pad,
	totalin: totalin,
	badgeso: badgeso,
	badgewa: badgewa,
	badgeev: badgeev,
	badgeno: badgeno,
	badgeha: badgeha,
	badgero: badgero,
	badgepi: badgepi,
	kurli: kurli,
	scoubi2: scoubi2,
	taille: taille,
	gluve: gluve,
	gluro: gluro,
	glubl: glubl,
	gluja: gluja,
	xmasBall: xmasBall,
	treemas: treemas,
	starmas: starmas,
	gift: gift,
	choco: choco,
	jesus: jesus,
	moise: moise,
	Pet_IronWill: Pet_IronWill,
	Pet_ElbowHit: Pet_ElbowHit,
	Pet_Meditate: Pet_Meditate,
	Pet_Explication: Pet_Explication,
	Pet_Valium: Pet_Valium,
	Pet_Sleep: Pet_Sleep,
	Pet_Alzheimer: Pet_Alzheimer,
	Pet_Club: Pet_Club,
	Pet_Dring: Pet_Dring,
	Pet_Stock: Pet_Stock,
	Pet_Shock: Pet_Shock,
	Pet_ComeOn: Pet_ComeOn,
	Pet_Cheater: Pet_Cheater,
	Pet_BonusXp: Pet_BonusXp,
	Pet_Tickle: Pet_Tickle,
	Pet_Muscled: Pet_Muscled,
	Pet_Hot: Pet_Hot,
	Pet_Exclude: Pet_Exclude,
	Pet_BoringTransfer: Pet_BoringTransfer,
	Pet_NoLaugh: Pet_NoLaugh,
	Pet_Chut: Pet_Chut,
	Pet_ToTheCorner: Pet_ToTheCorner,
	heddy: heddy,
	hpeggy: hpeggy,
	htizoc: htizoc,
	hmuzot: hmuzot,
	hdwayne: hdwayne,
	htippex: htippex,
	hnuke: hnuke,
	hsherlock: hsherlock,
	hat9: hat9,
	hat10: hat10,
	hat11: hat11
};

var generateGameStructure = function (goals) { return ({
    goals: goals,
    get: getGoal(goals),
    getUnlocked: getUnlockedGoals(goals)
}); };
var alphabounce = generateGameStructure(adjustGoals(alphabounceJson));
var croquemotel = generateGameStructure(adjustGoals(croquemotelJson));
var dinorpg = generateGameStructure(adjustGoals(dinorpgJson));
var fever = generateGameStructure(adjustGoals(feverJson));
var hordes = generateGameStructure(adjustGoals(hordesJson));
var intrusion = generateGameStructure(adjustGoals(intrusionJson));
var kadokado = generateGameStructure(adjustGoals(kadokadoJson));
var kingdom = generateGameStructure(adjustGoals(kingdomJson));
var kube = generateGameStructure(adjustGoals(kubeJson));
var labrute = generateGameStructure(adjustGoals(labruteJson));
var majority = generateGameStructure(adjustGoals(majorityJson));
var motionball2 = generateGameStructure(adjustGoals(montionball2Json));
var mush = generateGameStructure(adjustGoals(mushJson));
var naturalchimie2 = generateGameStructure(adjustGoals(naturalchimie2Json));
var odyssey = generateGameStructure(adjustGoals(odysseyJson));
var snake = generateGameStructure(adjustGoals(snakeJson));
var streetwriter = generateGameStructure(adjustGoals(streetwriterJson));
var studioquiz = generateGameStructure(adjustGoals(studioquizJson));
var teacherstory = generateGameStructure(adjustGoals(teacherstoryJson));
var TwinoidGoals = {
    alphabounce: alphabounce,
    croquemotel: croquemotel,
    dinorpg: dinorpg,
    fever: fever,
    hordes: hordes,
    intrusion: intrusion,
    kadokado: kadokado,
    kingdom: kingdom,
    kube: kube,
    labrute: labrute,
    majority: majority,
    motionball2: motionball2,
    mush: mush,
    naturalchimie2: naturalchimie2,
    odyssey: odyssey,
    snake: snake,
    streetwriter: streetwriter,
    studioquiz: studioquiz,
    teacherstory: teacherstory
};

exports.alphabounce = alphabounce;
exports.croquemotel = croquemotel;
exports.default = TwinoidGoals;
exports.dinorpg = dinorpg;
exports.fever = fever;
exports.hordes = hordes;
exports.intrusion = intrusion;
exports.kadokado = kadokado;
exports.kingdom = kingdom;
exports.kube = kube;
exports.labrute = labrute;
exports.majority = majority;
exports.motionball2 = motionball2;
exports.mush = mush;
exports.naturalchimie2 = naturalchimie2;
exports.odyssey = odyssey;
exports.snake = snake;
exports.streetwriter = streetwriter;
exports.studioquiz = studioquiz;
exports.teacherstory = teacherstory;
