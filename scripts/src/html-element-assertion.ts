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
  constructor(message?: string) {
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
function throwErrorIfWrongElement<T>(element: Element | null, classConstructor: new () => T, typeName: string) {
  if (!(element instanceof classConstructor)) {
    throw new InvalidHtmlElementError(`${element} is not an instance of ${typeName}.`);
  }
}

/**
 * `element`の型が`HTMLElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLElement(element: Element | null): asserts element is HTMLElement {
  throwErrorIfWrongElement(element, HTMLElement, 'HTMLElement');
}

/**
 * `element`の型が`HTMLAnchorElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLAnchorElement(element: Element | null): asserts element is HTMLAnchorElement {
  throwErrorIfWrongElement(element, HTMLAnchorElement, 'HTMLAnchorElement');
}

/**
 * `element`の型が`HTMLButtonElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLButtonElement(element: Element | null): asserts element is HTMLButtonElement {
  throwErrorIfWrongElement(element, HTMLButtonElement, 'HTMLButtonElement');
}

/**
 * `element`の型が`HTMLCanvasElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLCanvasElement(element: Element | null): asserts element is HTMLCanvasElement {
  throwErrorIfWrongElement(element, HTMLCanvasElement, 'HTMLCanvasElement');
}

/**
 * `element`の型が`HTMLDivElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLDivElement(element: Element | null): asserts element is HTMLDivElement {
  throwErrorIfWrongElement(element, HTMLDivElement, 'HTMLDivElement');
}

/**
 * `element`の型が`HTMLEmbedElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLEmbedElement(element: Element | null): asserts element is HTMLEmbedElement {
  throwErrorIfWrongElement(element, HTMLEmbedElement, 'HTMLEmbedElement');
}

/**
 * `element`の型が`HTMLHeadingElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLHeadingElement(element: Element | null): asserts element is HTMLHeadingElement {
  throwErrorIfWrongElement(element, HTMLHeadingElement, 'HTMLHeadingElement');
}

/**
 * `element`の型が`HTMLHRElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLHRElement(element: Element | null): asserts element is HTMLHRElement {
  throwErrorIfWrongElement(element, HTMLHRElement, 'HTMLHRElement');
}

/**
 * `element`の型が`HTMLImageElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLImageElement(element: Element | null): asserts element is HTMLImageElement {
  throwErrorIfWrongElement(element, HTMLImageElement, 'HTMLImageElement');
}

/**
 * `element`の型が`HTMLInputElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLInputElement(element: Element | null): asserts element is HTMLInputElement {
  throwErrorIfWrongElement(element, HTMLInputElement, 'HTMLInputElement');
}

/**
 * `element`の型が`HTMLLabelElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLLabelElement(element: Element | null): asserts element is HTMLLabelElement {
  throwErrorIfWrongElement(element, HTMLLabelElement, 'HTMLLabelElement');
}

/**
 * `element`の型が`HTMLLIElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLLIElement(element: Element | null): asserts element is HTMLLIElement {
  throwErrorIfWrongElement(element, HTMLLIElement, 'HTMLLIElement');
}

/**
 * `element`の型が`HTMLOListElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLOListElement(element: Element | null): asserts element is HTMLOListElement {
  throwErrorIfWrongElement(element, HTMLOListElement, 'HTMLOListElement');
}

/**
 * `element`の型が`HTMLParagraphElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLParagraphElement(element: Element | null): asserts element is HTMLParagraphElement {
  throwErrorIfWrongElement(element, HTMLParagraphElement, 'HTMLParagraphElement');
}

/**
 * `element`の型が`HTMLPreElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLPreElement(element: Element | null): asserts element is HTMLPreElement {
  throwErrorIfWrongElement(element, HTMLPreElement, 'HTMLPreElement');
}

/**
 * `element`の型が`HTMLSpanElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLSpanElement(element: Element | null): asserts element is HTMLSpanElement {
  throwErrorIfWrongElement(element, HTMLSpanElement, 'HTMLSpanElement');
}

/**
 * `element`の型が`HTMLTableCellElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLTableCellElement(element: Element | null): asserts element is HTMLTableCellElement {
  throwErrorIfWrongElement(element, HTMLTableCellElement, 'HTMLTableCellElement');
}

/**
 * `element`の型が`HTMLTableElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLTableElement(element: Element | null): asserts element is HTMLTableElement {
  throwErrorIfWrongElement(element, HTMLTableElement, 'HTMLTableElement');
}

/**
 * `element`の型が`HTMLTableRowElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLTableRowElement(element: Element | null): asserts element is HTMLTableRowElement {
  throwErrorIfWrongElement(element, HTMLTableRowElement, 'HTMLTableRowElement');
}

/**
 * `element`の型が`HTMLTimeElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLTimeElement(element: Element | null): asserts element is HTMLTimeElement {
  throwErrorIfWrongElement(element, HTMLTimeElement, 'HTMLTimeElement');
}

/**
 * `element`の型が`HTMLUListElement`かどうか判定し、そうでない場合は`InvalidHtmlElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLUListElement(element: Element | null): asserts element is HTMLUListElement {
  throwErrorIfWrongElement(element, HTMLUListElement, 'HTMLUListElement');
}

/**
 * `element`の型が`HTMLSelectElement`かどうか判定し、そうでない場合は`InvalidHTMLElementError`を投げます。
 * @param element 判定する`document.querySelector()`で取得した要素
 */
export function assertIsHTMLSelectElement(element: Element | null): asserts element is HTMLSelectElement {
  throwErrorIfWrongElement(element, HTMLSelectElement, 'HTMLSelectElement');
}
