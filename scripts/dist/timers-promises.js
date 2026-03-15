// Copyright (c) 2026 Igarin
// This software is released under the MIT License.
// https://opensource.org
export function setTimeout(time_ms) {
    return new Promise((resolve) => window.setTimeout(resolve, time_ms));
}
export async function* setInterval(time_ms) {
    let count = 0;
    while (true) {
        await setTimeout(time_ms);
        yield count++;
    }
}
