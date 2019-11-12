/* eslint-disable max-len */

"use strict";

/**
const era = /\bG\b|\bGG\b|\bGGG\b|\bGGGG\b|\bGGGGG\b|/;

const year = /\by\b|\byy\b|\byyy\b|\byyyy\b|\bY\b|\bYY\b|\bYYY\b|\bYYYY\b|\byyyyy\b/;

const quarter = /\bQ\b|\bQQ\b|\bQQQ\b|\bQQQQ\b|\bQQQQQ\b|\bQo\b|\bq\b|\bqq\b|\bqqq\b|\bqqqq\b|\bqqqqq\b|\bqo\b|/;

const month = /\bM\b|\bMM\b|\bMMM\b|\bMMMM\b|\bMMMMM\b|\bMo\b|\bL\b|\bLL\b|\bLLL\b|\bLLLL\b|\bLLLLL\b|\bLo\b|/;
const week = /\bw\b|\bww\b|\bwo\b|\bW\b|/;

const day = /\bd\b|\bdd\b|\bdo\b|\bDo\b|\bD\b|\bDD\b|\bDDD\b|\bF\b|\bFo\b/;

const weekDay = /\bE\b|\bEE\b|\bEEE\b|\bEEEE\b|\bEEEEE\b|\bEEEEEE\b|\be\b|\bee\b|\beee\b|\beeee\b|\beeeee\b|\beeeeee\b|\bc\b|\bcc\b|\bccc\b|\bcccc\b|\bccccc\b|\bcccccc\b|/;

const period = /\ba\b|\baa\b|\baaa\b|\baaaa\b|\baaaaa\b|\bb\b|\bbb\b|\bbbb\b|\bbbbb\b|\bbbbbb\b|\bB\b|\bBB\b|\bBBB\b|\bBBBB\b|\bBBBBB\b|/;

const hour = /\bh\b|\bhh\b|\bH\b|\bHH\b|\bK\b|\bKK\b|\bk\b|\bkk\b|/;

const minute = /\bm\b|\bmm\b|/;

const second = /\bs\b|\bss\b|\bS\b|\bSS\b|\bSSS\b|\bA\b/;

const timestamp = /\bf\b|\bff\b/
const iso = /\bi\b|\bii\b|\biii\b|\biiii\b|\biiiii\b|\bio\b|\bI\b|\bII\b|\bR\b|\bRR\b|\bRRR\b|\bRRRR\b/

const zone = /\bZ\b|\bZZ\b|\bZZZ\b|\bZZZZ\b|\bZZZZZ\b|\bO\b|\bOOOO\b|\bz\b|\bzz\b|\bzzz\b|\bzzzz\b|\bzzzzz\b|\bx\b|\bxx\b|\bxxx\b|\bxxxx\b|\bxxxxx\b|/;
*/
const regularPattern = /\bG\b|\bGG\b|\bGGG\b|\bGGGG\b|\bGGGGG\b|\by\b|\byy\b|\byyy\b|\byyyy\b|\byyyyy\b|\bY\b|\bYY\b|\bYYY\b|\bYYYY\b|\bQ\b|\bQQ\b|\bQQQ\b|\bQQQQ\b|\bQQQQQ\b|\bQo\b|\bq\b|\bqq\b|\bqqq\b|\bqqqq\b|\bqqqqq\b|\bqo\b|\bM\b|\bMM\b|\bMMM\b|\bMMMM\b|\bMMMMM\b|\bMo\b|\bL\b|\bLL\b|\bLLL\b|\bLLLL\b|\bLLLLL\b|\bLo\b|\bw\b|\bww\b|\bwo\b|\bW\b|\bd\b|\bdd\b|\bdo\b|\bDo\b|\bD\b|\bDD\b|\bDDD\b|\bF\b|\bFo\b|\bE\b|\bEE\b|\bEEE\b|\bEEEE\b|\bEEEEE\b|\bEEEEEE\b|\be\b|\bee\b|\beee\b|\beeee\b|\beeeee\b|\beeeeee\b|\bc\b|\bcc\b|\bccc\b|\bcccc\b|\bccccc\b|\bcccccc\b|\ba\b|\baa\b|\baaa\b|\baaaa\b|\baaaaa\b|\bb\b|\bbb\b|\bbbb\b|\bbbbb\b|\bbbbbb\b|\bB\b|\bBB\b|\bBBB\b|\bBBBB\b|\bBBBBB\b|\bh\b|\bhh\b|\bH\b|\bHH\b|\bK\b|\bKK\b|\bk\b|\bkk\b|\bh\b|\bhh\b|\bH\b|\bHH\b|\bK\b|\bKK\b|\bk\b|\bkk\b|\bm\b|\bmm\b|\bs\b|\bss\b|\bS\b|\bSS\b|\bSSS\b|\bf\b|\bff\b|\bA\b|\bZ\b|\bZZ\b|\bZZZ\b|\bZZZZ\b|\bZZZZZ\b|\bz\b|\bzz\b|\bzzz\b|\bzzzz\b|\bzzzzz\b|\bx\b|\bxx\b|\bxxx\b|\bxxxx\b|\bxxxxx\b|\bX\b|\bXX\b|\bXXX\b|\bXXXX\b|\bXXXXX\b|\bO\b|\bOOOO\b|\bi\b|\bii\b|\biii\b|\biiii\b|\biiiii\b|\bio\b|\bI\b|\bII\b|\bR\b|\bRR\b|\bRRR\b|\bRRRR\b/g;

const longDateTimePattern = /\bP\b|\bPP\b|\bPPP\b|\bPPPP\b|\bpppp\b|\bppp\b|\bpp\b|\bp\b|\bT\b|\bTT\b|\bTTT\b|\bTTTT\b/g;

module.exports = {
  regularPattern,
  longDateTimePattern,
};
