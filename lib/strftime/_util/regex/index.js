"use strict";

const extendedPattern = /(?<![a-zA-Z0-9%])%(?:c|x|X|D|R|r|T|F)(?![a-zA-Z0-9%])/g;
const regularPattern = /(?<![a-zA-Z0-9%])%(?:a|A|w|d|b|B|m|y|Y|z|Z|M|S|H|I|p|j|c|f|W|U|x|X|Q|e|l|G|u|v|jo|f|V|C|g|P|s|k|h)(?![a-zA-Z0-9%])|(?<![a-zA-Z0-9%])%do|%wo|%mo|%Qo(?![a-zA-Z0-9%])/g;

module.exports = {
  extendedPattern,
  regularPattern,
};
