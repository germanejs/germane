/**
 * @author Simeon Akpanudo
 * @fileoverview handles parsing of timer.
 */

"use strict";

const difference = require("../../../_util/evaluations/difference");
const useState = require("../../../_util/state/useState");
const { isFunc, isNumber } = require("../../../_util/validations/validatePropTypes");
/**
 *
 * @param {Object} params
 * @param {Number} params.duration
 * @param {Object} params.options
 * @param {Number} params.options.interval
 * @param {Number} params.options.wait
 */
function parseTimer(params) {
  const { interval, wait } = params.options;
  const createDuration = useState(params.duration);
  const createInterval = useState(interval);
  const waitInterval = useState(wait);
  const idleState = useState(true);
  const loopState = useState({
    start: Date.now(),
    end: Date.now() + createDuration.static(),
    appendState: {
      toAppend: false,
      appendDuration: 0,
    },
    controllers: {
      paused: false,
      looped: true,
      stopped: false,
      restarted: false,
      waiting: waitInterval.get() > 0,
    },
  });

  const useLoopDifference = useState(
    difference(loopState.get().start, loopState.get().end, { strict: true }),
  );

  let looper;
  /**
   *
   * @param {Function} callbackFn
   * @returns {Function} callback function
   */
  const loop = callbackFn => {
    // sets timer idle state to false
    idleState.set(false);

    // returns the duration if params is not a function.
    if (!isFunc(callbackFn)) return createDuration.static();

    // starts loop
    looper = setTimeout(
      () => loop(callbackFn),
      waitInterval.get() > 0 ? 1000 : createInterval.static(),
    );

    // awaits the loop
    if (waitInterval.get() > 0) {
      /**
       * @param {number} prev
       */
      waitInterval.set(prev => prev - 1000);

      // @ts-ignore
      return looper;
    }

    // checks and pauses the loop
    if (loopState.get().controllers.paused) {
      // @ts-ignore
      return looper;
    }

    // sets loop state.
    loopState.set(prev => {
      const getController = loopState.get().controllers;
      const { toAppend, appendDuration } = loopState.get().appendState;

      // resets the ending time to its default
      if (getController.restarted) {
        return { ...prev, end: loopState.static().end };
      }
      // appends the state
      if (useLoopDifference.get().totalMillisecond === 0 && toAppend) {
        return {
          ...prev,
          end: prev.end + Math.trunc(appendDuration),
        };
      }

      // ends the loop if the remaining time is less than the interval.
      if (prev.end - prev.start < 1000) {
        return { ...prev, end: loopState.static().start };
      }

      // subtracts the interval from the current time
      return {
        ...prev,
        end: prev.end - createInterval.get(),
      };
    });

    // sets the interval to the duration if the duration is greater than the interval.
    createInterval.set(prev => (prev > createDuration.get() ? createDuration.get() : prev));

    // resets the restart state
    loopState.set(prev => {
      return { ...prev, controllers: { ...prev.controllers, restarted: false } };
    });

    // // resets the appendState
    if (useLoopDifference.get().totalMillisecond === 0 && loopState.get().appendState.toAppend) {
      loopState.set(prev => {
        return { ...prev, appendState: { ...prev.appendState, toAppend: false } };
      });
    }

    // computes the duration and updates its state

    useLoopDifference.set(difference(loopState.get().start, loopState.get().end, { strict: true }));

    const diff = useLoopDifference.get();
    const x = diff;

    // conditionally clearing the loop if the duration is zero and there is no append state.
    if (
      loopState.get().end <= loopState.get().start
      && loopState.get().appendState.toAppend === false
    ) {
      idleState.set(true);
      clearTimeout(looper);
    }

    return callbackFn(x);
  };
  // properties....

  /**
   *
   * restarts the loop.
   * @returns {Void}
   */
  const restart = () => {
    loopState.set(prev => {
      return { ...prev, controllers: { ...prev.controllers, restarted: true } };
    });
  };

  /**
   * stops the loop.

   * @returns {Void}
   */
  const stop = () => {
    clearTimeout(looper);
  };

  /**
   *
   * pauses the loop.
   * @returns {Void}
   */
  const pause = () => {
    loopState.set(prev => {
      return { ...prev, controllers: { ...prev.controllers, paused: true } };
    });
  };
  /**
   * adds extra time to the timer
   * @param {Number} appendDuration
   * @returns {Void}
   */

  const append = (appendDuration = 0) => {
    if (!isNumber(appendDuration)) return;
    loopState.set(prev => {
      return { ...prev, appendState: { ...prev.appendState, toAppend: true, appendDuration } };
    });
  };

  const start = () => {
    const { paused } = loopState.get().controllers;
    if (paused) {
      loopState.set(prev => {
        return { ...prev, controllers: { ...prev.controllers, paused: false } };
      });
    }
  };

  /**
   * Clones a timer
   * @param {*} newDuration
   * @param {*} options
   */
  const clone = (
    newDuration = createDuration.static(),
    options = {
      newInterval: createInterval.static(),
      newWait: waitInterval.static(),
    },
  ) => {
    const { newInterval, newWait } = options;
    return parseTimer({ duration: newDuration, options: { interval: newInterval, wait: newWait } });
  };

  /**
   * Returns the end time of the timer
   * @returns {Number}
   */
  const then = () => {
    return loopState.get().start + createDuration.static();
  };

  /**
   * Checks if the timer is running
   * @return {Boolean}
   */
  const isIdle = () => {
    return idleState.get();
  };

  return {
    loop,
    clone,
    then,
    pause,
    restart,
    stop,
    append,
    start,
    isIdle,
  };
}

module.exports = parseTimer;
