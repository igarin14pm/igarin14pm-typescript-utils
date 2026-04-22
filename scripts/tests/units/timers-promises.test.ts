// Copyright (c) 2026 Igarin
// This software is released under the MIT License.
// https://opensource.org

import { expect, test } from 'vitest';
import * as TimersPromises from '../../src/timers-promises';

// `setTimeout()`

test('`setTimeout()`', async () => {
  const timeout1Started = new Date();

  await TimersPromises.setTimeout(1000);
  const timeout1Finished = new Date();

  expect(timeout1Finished.getTime()).toBeGreaterThan(timeout1Started.setMilliseconds(timeout1Started.getMilliseconds() + 996));
  expect(timeout1Finished.getTime()).toBeLessThan(timeout1Started.setMilliseconds(timeout1Started.getMilliseconds() + 8));

  const timeout2Started = new Date();

  await TimersPromises.setTimeout(250);
  const timeout2Finished = new Date();

  expect(timeout2Finished.getTime()).toBeGreaterThan(timeout2Started.setMilliseconds(timeout2Started.getMilliseconds() + 246));
  expect(timeout2Finished.getTime()).toBeLessThan(timeout2Started.setMilliseconds(timeout2Started.getMilliseconds() + 8));
});

// `setInterval()`

test('`setInterval()`', async () => {
  const interval1Started = new Date();
  let i1 = -1;

  for await (const i of TimersPromises.setInterval(500)) {
    i1 = i;
    if (i >= 0) {
      break;
    }
  }
  const interval1Finished = new Date();

  expect(i1).toBe(0);
  expect(interval1Finished.getTime()).toBeGreaterThan(interval1Started.setMilliseconds(interval1Started.getMilliseconds() + 496));
  expect(interval1Finished.getTime()).toBeLessThan(interval1Started.setMilliseconds(interval1Started.getMilliseconds() + 8));

  const interval2Started = new Date();
  let i2 = -1;
  
  for await (const i of TimersPromises.setInterval(100)) {
    i2 = i;
    if (i >= 2) {
      break;
    }
  }
  const interval2Finished = new Date();

  expect(i2).toBe(2);
  expect(interval2Finished.getTime()).toBeGreaterThan(interval2Started.setMilliseconds(interval2Started.getMilliseconds() + 292));
  expect(interval2Finished.getTime()).toBeLessThan(interval2Started.setMilliseconds(interval2Started.getMilliseconds() + 16));
});
