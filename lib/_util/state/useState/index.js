/**
 *
 * @author Simeon Akpanudo
 * @fileoverview function handles states in an async evironment;
 */

"use strict";

/**
 *
 * @param {Number|String|Array|Boolean|Undefined|Object} state data
 * @summary persist data/states in an async environment like in intervals and timeouts.
 */

function useState(state) {
  let store = new Map();
  store.set("current", state);
  store.set("previous", state);

  return {
    /**
     * @param {Number|String|Array|Boolean|Undefined|Object} newState
     */
    set: newState => {
      if (typeof newState === "function") {
        store.set("previous", store.get("current"));
        const prev = store.get("previous");
        store.set("current", newState(prev));
        // return newState(prev);
      } else {
        store.set("previous", store.get("current"));
        store.set("current", newState);
      }
    },
    get: () => {
      return store.get("current");
    },
    static: () => {
      return state;
    },
  };
}

module.exports = useState;
