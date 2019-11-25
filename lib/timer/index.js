/**
 * @author Simeon Akpanudo
 * @fileoverview Fn creates a timer.
 */

"use strict";

const difference = require("../_util/evaluations/difference");
const useState = require("../_util/state/useState");

function timer(duration = 0, { interval } = { interval: 1000 }) {
  const createInterval = useState(interval);
  const startState = useState(0 - 1000);
  const endState = useState(duration);
  const appendState = useState({
    toAppend: false,
    appendDuration: 0,
  });
  const useDifference = useState(difference(startState.get(), endState.get()));

  const controllers = useState({
    paused: false,
    looped: true,
    stopped: false,
    restarted: false,
  });

  const loop = callBackFn => {
    let looper;

    // logic.
    startState.set(prev => {
      const getController = controllers.get();
      const { toAppend, appendDuration } = appendState.get();
      if (getController.paused) {
        return prev + 0;
      }
      if (getController.restarted) {
        return startState.static() + 1000;
      }
      if (useDifference.get().totalMillisecond === 0 && toAppend) {
        console.log("Running Append mode");
        return prev - Math.trunc(appendDuration * 1000 * 60);
      }

      return prev + createInterval.get();
    });

    // resets the restart state
    controllers.set(n => {
      return { ...n, restarted: false };
    });

    // resets the appendState
    if (useDifference.get().totalMillisecond === 0 && appendState.get().toAppend) {
      appendState.set(prev => {
        return { ...prev, toAppend: false };
      });
    }

    // computes the duration and updates its state
    useDifference.set(difference(startState.get(), endState.get()));

    const diff = useDifference.get();
    const x = diff.second;

    // starting a loop
    looper = setTimeout(() => loop(callBackFn), createInterval.static());

    // conditionally clearing the loop if the duration is zero and there is no append state.

    if (diff.totalMillisecond === 0 && appendState.get().toAppend === false) {
      clearTimeout(looper);
    }

    // properties....

    /**
     *
     * restarts the loop.
     */
    const restart = (condition = true) => {
      if (!condition) {
        controllers.set(prev => {
          return { ...prev, restarted: false };
        });
      } else {
        controllers.set(prev => {
          return { ...prev, restarted: true };
        });
      }
    };
    /**
     * stops the loop.
     */
    const stop = (condition = true) => {
      if (condition) {
        clearTimeout(looper);
      }
    };

    /**
     *
     * pauses the loop.
     */
    const pause = (condition = true) => {
      if (!condition) {
        controllers.set(prev => {
          return { ...prev, paused: false };
        });
      } else {
        controllers.set(prev => {
          return { ...prev, paused: true };
        });
      }
    };

    /**
     * adds extra minutes to the timer
     */

    const append = (appendDuration = 0) => {
      appendState.set(prev => {
        return { ...prev, toAppend: true, appendDuration };
      });
    };
    return callBackFn(x, {
      pause,
      restart,
      stop,
      append,
    });
  };
  return {
    loop,
  };
}

module.exports = timer;
