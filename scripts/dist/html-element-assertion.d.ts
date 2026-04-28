/**
 * 取得したHTML要素の型が正しくない時に発生するエラーです。
 */
export declare class InvalidHtmlElementError extends TypeError {
    /**
     * `InvalidHtmlElementError`のインスタンスを生成します。
     * @param message エラーメッセージ
     */
    constructor(message?: string);
}
/**
 * `element`の型が`HTMLElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLElement(element: Element | null): asserts element is HTMLElement;
/**
 * `element`の型が`HTMLAnchorElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLAnchorElement(element: Element | null): asserts element is HTMLAnchorElement;
/**
 * `element`の型が`HTMLButtonElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLButtonElement(element: Element | null): asserts element is HTMLButtonElement;
/**
 * `element`の型が`HTMLCanvasElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLCanvasElement(element: Element | null): asserts element is HTMLCanvasElement;
/**
 * `element`の型が`HTMLDivElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLDivElement(element: Element | null): asserts element is HTMLDivElement;
/**
 * `element`の型が`HTMLEmbedElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLEmbedElement(element: Element | null): asserts element is HTMLEmbedElement;
/**
 * `element`の型が`HTMLHeadingElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLHeadingElement(element: Element | null): asserts element is HTMLHeadingElement;
/**
 * `element`の型が`HTMLHRElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLHRElement(element: Element | null): asserts element is HTMLHRElement;
/**
 * `element`の型が`HTMLImageElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLImageElement(element: Element | null): asserts element is HTMLImageElement;
/**
 * `element`の型が`HTMLInputElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLInputElement(element: Element | null): asserts element is HTMLInputElement;
/**
 * `element`の型が`HTMLLabelElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLLabelElement(element: Element | null): asserts element is HTMLLabelElement;
/**
 * `element`の型が`HTMLLIElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLLIElement(element: Element | null): asserts element is HTMLLIElement;
/**
 * `element`の型が`HTMLOListElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLOListElement(element: Element | null): asserts element is HTMLOListElement;
/**
 * `element`の型が`HTMLParagraphElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLParagraphElement(element: Element | null): asserts element is HTMLParagraphElement;
/**
 * `element`の型が`HTMLPreElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLPreElement(element: Element | null): asserts element is HTMLPreElement;
/**
 * `element`の型が`HTMLSpanElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLSpanElement(element: Element | null): asserts element is HTMLSpanElement;
/**
 * `element`の型が`HTMLTableCellElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLTableCellElement(element: Element | null): asserts element is HTMLTableCellElement;
/**
 * `element`の型が`HTMLTableElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLTableElement(element: Element | null): asserts element is HTMLTableElement;
/**
 * `element`の型が`HTMLTableRowElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLTableRowElement(element: Element | null): asserts element is HTMLTableRowElement;
/**
 * `element`の型が`HTMLTimeElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLTimeElement(element: Element | null): asserts element is HTMLTimeElement;
/**
 * `element`の型が`HTMLUListElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLUListElement(element: Element | null): asserts element is HTMLUListElement;
/**
 * `element`の型が`HTMLSelectElement`かどうか判定し、そうでない場合は`InvalidHTMLElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export declare function assertIsHTMLSelectElement(element: Element | null): asserts element is HTMLSelectElement;
