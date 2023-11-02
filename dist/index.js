'use strict';

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

var AlphaBounceGoals = {
    planets: {
        id: 'planets',
        name: {
            en: 'Planètes explorées',
            fr: 'Planètes explorées',
            de: 'Erkundete Planeten',
            es: 'Planètes explorées'
        },
        rare: false,
        unlocks: [
            { count: 1, points: 10, icon: 'small_forum_read.gif' },
            { count: 2, points: 10 },
            { count: 3, points: 10 },
            { count: 4, points: 10 },
            { count: 5, points: 10 },
            { count: 6, points: 10 },
            { count: 7, points: 10 },
            { count: 8, points: 10 },
            { count: 9, points: 10 },
            { count: 10, points: 10 },
            { count: 11, points: 10 },
            { count: 12, points: 10 },
            { count: 13, points: 10 },
            { count: 14, points: 10 },
            { count: 15, points: 10, icon: 'small_forum.gif' },
            { count: 16, points: 10 },
            { count: 17, points: 10 },
            { count: 18, points: 10 },
            { count: 19, points: 10 },
            { count: 20, points: 10 },
            { count: 21, points: 10 },
        ]
    },
    earth: {
        id: 'earth',
        name: {
            en: 'Terre retrouvée',
            fr: 'Terre retrouvée',
            de: 'Wieder auf der Erde',
            es: 'Terre retrouvée'
        },
        rare: false,
        unlocks: [
            {
                count: 1,
                points: 10,
                icon: 'small_earth.gif',
                title: {
                    en: 'Terre !',
                    fr: 'Terre !',
                    de: 'Die Erde!',
                    es: 'Terre !'
                }
            },
        ]
    },
    mission: {
        id: 'mission',
        name: {
            en: 'missions accomplies',
            fr: 'missions accomplies',
            de: 'Erledigte Missionen',
            es: 'missions accomplies'
        },
        rare: true,
        unlocks: [
            { count: 1, points: 10 },
            { count: 2, points: 10 },
            { count: 3, points: 10, icon: 'small_fuel_free.gif' },
            { count: 4, points: 10 },
            { count: 5, points: 10 },
            { count: 6, points: 10 },
            { count: 7, points: 10 },
            { count: 8, points: 10 },
            { count: 9, points: 10 },
            { count: 10, points: 10, icon: 'small_bricks.gif' },
            { count: 11, points: 10 },
            { count: 12, points: 10 },
            { count: 13, points: 10 },
            { count: 14, points: 10 },
            { count: 15, points: 10 },
            { count: 16, points: 10 },
            { count: 17, points: 10 },
            { count: 18, points: 10 },
            { count: 19, points: 10 },
            { count: 20, points: 10 },
            { count: 21, points: 10 },
            { count: 22, points: 10 },
            { count: 23, points: 10 },
            { count: 24, points: 10 },
            { count: 25, points: 10 },
            { count: 26, points: 10 },
            { count: 27, points: 10 },
            { count: 28, points: 10 },
            { count: 29, points: 10 },
            { count: 30, points: 10, icon: 'small_fuel.gif' },
            { count: 31, points: 10 },
            { count: 32, points: 10 },
            { count: 33, points: 10 },
            { count: 34, points: 10 },
            { count: 35, points: 10 },
            { count: 36, points: 10 },
            { count: 37, points: 10 },
            { count: 38, points: 10 },
        ]
    },
    map: {
        id: 'map',
        name: {
            en: 'niveaux réussis',
            fr: 'niveaux réussis',
            de: 'Fortschritt',
            es: 'niveaux réussis'
        },
        rare: false,
        unlocks: [
            {
                count: 10,
                points: 3,
                title: {
                    en: 'That\'s one small step for a man...',
                    fr: 'That\'s one small step for a man...',
                    de: 'Ein kleiner Schritt für mich...',
                    es: 'That\'s one small step for a man...'
                }
            },
            {
                count: 100,
                points: 3,
                title: {
                    en: 'Houston, we have a problem',
                    fr: 'Houston, we have a problem',
                    de: 'Houston, wir haben ein Problem',
                    es: 'Houston, we have a problem'
                }
            },
            {
                count: 1000,
                points: 3,
                title: {
                    en: 'Il fait noir, par ici.',
                    fr: 'Il fait noir, par ici.',
                    de: 'Es ist so dunkel hier.',
                    es: 'Il fait noir, par ici.'
                }
            },
            {
                count: 10000,
                points: 3,
                title: {
                    en: '\'Coucou Laïka, il te reste des croquettes ?\'',
                    fr: '\'Coucou Laïka, il te reste des croquettes ?\'',
                    de: 'Laika, bist du bereit Gassi zu gehen?',
                    es: '\'Coucou Laïka, il te reste des croquettes ?\''
                }
            },
            {
                count: 100000,
                points: 3,
                title: {
                    en: 'L\'univers infini, j\'en ai fait le tour !',
                    fr: 'L\'univers infini, j\'en ai fait le tour !',
                    de: 'Einmal Universum und zurück bitte!',
                    es: 'L\'univers infini, j\'en ai fait le tour !'
                }
            },
        ]
    },
    escorp: {
        id: 'escorp',
        name: {
            en: 'Grade ESCORP atteint',
            fr: 'Grade ESCORP atteint',
            de: 'Dienstgrad ESCORP',
            es: 'Grade ESCORP atteint'
        },
        rare: true,
        unlocks: [
            { count: 1, points: 5, icon: 'rank_1.gif' },
            { count: 2, points: 5, icon: 'rank_2.gif' },
            { count: 3, points: 5, icon: 'rank_3.gif' },
            { count: 4, points: 5, icon: 'rank_4.gif' },
            { count: 5, points: 5, icon: 'rank_5.gif' },
            { count: 6, points: 5, icon: 'rank_6.gif' },
            { count: 7, points: 5, icon: 'rank_7.gif' },
            { count: 8, points: 5, icon: 'rank_8.gif' },
            { count: 9, points: 5, icon: 'rank_9.gif' },
            { count: 10, points: 5, icon: 'rank_10.gif' },
            { count: 11, points: 5, icon: 'rank_11.gif' },
            { count: 12, points: 5, icon: 'rank_12.gif' },
        ]
    },
    furi: {
        id: 'furi',
        name: {
            en: 'Grade FURI atteint',
            fr: 'Grade FURI atteint',
            de: 'Dienstgrad FURI',
            es: 'Grade FURI atteint'
        },
        rare: true,
        unlocks: [
            { count: 1, points: 5, icon: 'rank_furi_1.gif' },
            { count: 2, points: 5, icon: 'rank_furi_2.gif' },
            { count: 3, points: 5, icon: 'rank_furi_3.gif' },
            { count: 4, points: 5, icon: 'rank_furi_4.gif' },
            { count: 5, points: 5, icon: 'rank_furi_5.gif' },
            { count: 6, points: 5, icon: 'rank_furi_6.gif' },
            { count: 7, points: 5, icon: 'rank_furi_7.gif' },
            { count: 8, points: 5, icon: 'rank_furi_8.gif' },
            { count: 9, points: 5, icon: 'rank_furi_9.gif' },
            { count: 10, points: 5, icon: 'rank_furi_10.gif' },
            { count: 11, points: 5, icon: 'rank_furi_11.gif' },
            { count: 12, points: 5, icon: 'rank_furi_12.gif' },
        ]
    }
};
var AlphaBounceAdjustedGoals = adjustGoals(AlphaBounceGoals);

var TwinoidGoals = {
    alphabounce: {
        goals: AlphaBounceGoals,
        totalPoints: getTotalPoints(AlphaBounceGoals),
        adjustedGoals: AlphaBounceAdjustedGoals
    }
};

exports.TwinoidGoals = TwinoidGoals;
