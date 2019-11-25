/**
 *
 * @author Simeon Akpanudo
 * @fileoverview function handles states in an async evironment;
 */

"use strict";

/**
 *
 * @param {*} state data
 * @summary persist data/states in an async environment like in intervals and timeouts.
 */

function useState(state) {
  let dispatcher = new Map();
  dispatcher.set("current", state);
  dispatcher.set("previous", state);

  return {
    set: newState => {
      if (typeof newState === "function") {
        dispatcher.set("previous", dispatcher.get("current"));
        const prev = dispatcher.get("previous");
        dispatcher.set("current", newState(prev));
        // return newState(prev);
      } else {
        dispatcher.set("previous", dispatcher.get("current"));
        dispatcher.set("current", newState);
      }
    },
    get: () => {
      return dispatcher.get("current");
    },
    static: () => {
      return state;
    },
  };
}

module.exports = useState;
