"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwinoidGoals = void 0;
var _AlphaBounceGoals = require("./AlphaBounceGoals");
var _common = require("./common");
const TwinoidGoals = exports.TwinoidGoals = {
  alphabounce: {
    goals: _AlphaBounceGoals.AlphaBounceGoals,
    totalPoints: (0, _common.getTotalPoints)(_AlphaBounceGoals.AlphaBounceGoals),
    adjustedGoals: _AlphaBounceGoals.AlphaBounceAdjustedGoals
  }
};