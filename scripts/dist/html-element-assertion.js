// Copyright (c) 2026 Igarin
// This software is released under the MIT License.
// https://opensource.org
/**
 * 取得したHTML要素の型が正しくない時に発生するエラーです。
 */
export class InvalidHtmlElementError extends TypeError {
    /**
     * `InvalidHtmlElementError`のインスタンスを生成します。
     * @param message エラーメッセージ
     */
    constructor(message) {
        super(message);
        this.name = 'InvalidHtmlElementError';
    }
}
/**
 * `element` が `classConstructor` で指定した型のインスタンスでない場合に `InvalidHtmlElementError` を投げます。
 * Assertion Functions の内部で使用されます。
 * @param element 判定する HTML 要素
 * @param classConstructor `element` がこのコンストラクタの型のインスタンスか判定します
 * @param typeName エラーメッセージ内で使用する `classConstructor` の型名の文字列
 */
function throwErrorIfWrongElement(element, classConstructor, typeName) {
    if (!(element instanceof classConstructor)) {
        throw new InvalidHtmlElementError(`${element} is not an instance of ${typeName}.`);
    }
}
/**
 * `element`の型が`HTMLElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLElement(element) {
    throwErrorIfWrongElement(element, HTMLElement, 'HTMLElement');
}
/**
 * `element`の型が`HTMLAnchorElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLAnchorElement(element) {
    throwErrorIfWrongElement(element, HTMLAnchorElement, 'HTMLAnchorElement');
}
/**
 * `element`の型が`HTMLButtonElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLButtonElement(element) {
    throwErrorIfWrongElement(element, HTMLButtonElement, 'HTMLButtonElement');
}
/**
 * `element`の型が`HTMLCanvasElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLCanvasElement(element) {
    throwErrorIfWrongElement(element, HTMLCanvasElement, 'HTMLCanvasElement');
}
/**
 * `element`の型が`HTMLDivElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLDivElement(element) {
    throwErrorIfWrongElement(element, HTMLDivElement, 'HTMLDivElement');
}
/**
 * `element`の型が`HTMLEmbedElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLEmbedElement(element) {
    throwErrorIfWrongElement(element, HTMLEmbedElement, 'HTMLEmbedElement');
}
/**
 * `element`の型が`HTMLHeadingElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLHeadingElement(element) {
    throwErrorIfWrongElement(element, HTMLHeadingElement, 'HTMLHeadingElement');
}
/**
 * `element`の型が`HTMLHRElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLHRElement(element) {
    throwErrorIfWrongElement(element, HTMLHRElement, 'HTMLHRElement');
}
/**
 * `element`の型が`HTMLImageElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLImageElement(element) {
    throwErrorIfWrongElement(element, HTMLImageElement, 'HTMLImageElement');
}
/**
 * `element`の型が`HTMLInputElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLInputElement(element) {
    throwErrorIfWrongElement(element, HTMLInputElement, 'HTMLInputElement');
}
/**
 * `element`の型が`HTMLLabelElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLLabelElement(element) {
    throwErrorIfWrongElement(element, HTMLLabelElement, 'HTMLLabelElement');
}
/**
 * `element`の型が`HTMLLIElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLLIElement(element) {
    throwErrorIfWrongElement(element, HTMLLIElement, 'HTMLLIElement');
}
/**
 * `element`の型が`HTMLOListElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLOListElement(element) {
    throwErrorIfWrongElement(element, HTMLOListElement, 'HTMLOListElement');
}
/**
 * `element`の型が`HTMLParagraphElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLParagraphElement(element) {
    throwErrorIfWrongElement(element, HTMLParagraphElement, 'HTMLParagraphElement');
}
/**
 * `element`の型が`HTMLPreElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLPreElement(element) {
    throwErrorIfWrongElement(element, HTMLPreElement, 'HTMLPreElement');
}
/**
 * `element`の型が`HTMLSpanElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLSpanElement(element) {
    throwErrorIfWrongElement(element, HTMLSpanElement, 'HTMLSpanElement');
}
/**
 * `element`の型が`HTMLTableCellElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLTableCellElement(element) {
    throwErrorIfWrongElement(element, HTMLTableCellElement, 'HTMLTableCellElement');
}
/**
 * `element`の型が`HTMLTableElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLTableElement(element) {
    throwErrorIfWrongElement(element, HTMLTableElement, 'HTMLTableElement');
}
/**
 * `element`の型が`HTMLTableRowElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLTableRowElement(element) {
    throwErrorIfWrongElement(element, HTMLTableRowElement, 'HTMLTableRowElement');
}
/**
 * `element`の型が`HTMLTimeElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLTimeElement(element) {
    throwErrorIfWrongElement(element, HTMLTimeElement, 'HTMLTimeElement');
}
/**
 * `element`の型が`HTMLUListElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLUListElement(element) {
    throwErrorIfWrongElement(element, HTMLUListElement, 'HTMLUListElement');
}
/**
 * `element`の型が`HTMLSelectElement`かどうか判定し、そうでない場合は`InvalidHTMLElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLSelectElement(element) {
    throwErrorIfWrongElement(element, HTMLSelectElement, 'HTMLSelectElement');
}
