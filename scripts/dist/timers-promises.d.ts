/**
 * 指定された時間処理を待機します。
 * @param time_ms 待機する時間 (ミリ秒)
 * @returns `clearTimeout()` で使用する "タイムアウトID"
 * @example
 * await setTimeout(2000);
 * console.log('foo'); // 2秒後に 'foo' を出力する
 */
export declare function setTimeout(time_ms: number): Promise<number>;
/**
 * 指定された時間待機する `AsyncGenerator` を生成します。
 * for await...of 文を使って、一定間隔でコードを実行することができます。
 * @param time_ms 待機する時間 (ミリ秒)
 * @example
 * let isRunning: boolean = true;
 * for await (const i of setInterval(1000)) {
 *   if (!isRunning) { break; }
 *   console.log('foo');
 * }
 * // 1秒ごとに 'foo' を出力
 * // `isRunning = false` を代入すると出力が停止する
 */
export declare function setInterval(time_ms: number): AsyncGenerator<number>;
