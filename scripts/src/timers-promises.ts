// Copyright (c) 2026 Igarin
// This software is released under the MIT License.
// https://opensource.org

export function setTimeout(time_ms: number): Promise<number> {
  return new Promise(
    (resolve) => window.setTimeout(resolve, time_ms)
  );
}
