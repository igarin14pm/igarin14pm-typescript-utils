// Copyright (c) 2026 Igarin
// This software is released under the MIT License.
// https://opensource.org

import { beforeAll, describe, expect, test } from 'vitest';
import * as HTMLElementAssertion from './html-element-assertion';

describe('`InvalidHtmlElementError`', () => {

  test('コンストラクタ', () => {
    const invalidHtmlElementError1 = new HTMLElementAssertion.InvalidHtmlElementError(
      '[object HTMLButtonElement] is not an instance of HTMLDivElement.'
    );
    const invalidHtmlElementError2 = new HTMLElementAssertion.InvalidHtmlElementError(
      'null is not an instance of HTMLDivElement.'
    );

    expect(invalidHtmlElementError1.name).toBe('InvalidHtmlElementError');
    expect(invalidHtmlElementError1.message).toBe('[object HTMLButtonElement] is not an instance of HTMLDivElement.');
    expect(invalidHtmlElementError2.name).toBe('InvalidHtmlElementError');
    expect(invalidHtmlElementError2.message).toBe('null is not an instance of HTMLDivElement.');
  });

});

describe('`assertIsHTMLElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML = 
      '<header id="header">' +
      '  <h1>Header</h1>' +
      '</header>' +
      '<article id="article">' +
      '  <h1>Article</h1>' +
      '  <p>Article goes here.</p>' +
      '</article>' +
      '<svg id="svg-element">' +
      '</svg>';
  });

  test('引数に `HTMLElement` が渡されたときにアサーションが成功する', () => {
    const headerElement: Element | null = document.querySelector('#header');
    const articleElement: Element | null = document.querySelector('#article');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLElement(headerElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLElement(articleElement);
    }).not.toThrow();
  });

  test('引数に `HTMLElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#svg-element');
    const wrongSelector: Element | null = document.querySelector('#setcion');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object SVGSVGElement] is not an instance of HTMLElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLElement.'
      )
    );
  });

});

describe('`assertIsHTMLAnchorElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML = 
      '<ol>' +
      '  <li><a id="index-item-anchor" href="#heading">Index item</a></li>' +
      '</ol>' +
      '<h1 id="heading">Heading</h1>' +
      '<p>Link: <a id="link-anchor" href="https://github.com/igarin14pm">https://github.com/igarin14pm</a></p>' +
      '<ol>' +
      '  <li>This is an <span id="span">list item</span>.</li>' +
      '</ol>';
  });

  test('引数に `HTMLAnchorElement` が渡されたときにアサーションが成功する', () => {
    const indexItemAnchorElement: Element | null = document.querySelector('#index-item-anchor');
    const linkAnchorElement: Element | null = document.querySelector('#link-anchor');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLAnchorElement(indexItemAnchorElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLAnchorElement(linkAnchorElement);
    }).not.toThrow();
  });

  test('引数に `HTMLAnchorElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#span');
    const wrongSelector: Element | null = document.querySelector('#link-ancor');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLAnchorElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLSpanElement] is not an instance of HTMLAnchorElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLAnchorElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLAnchorElement.'
      )
    );
  });

});

describe('`assertIsHTMLButtonElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<button id="show-more-works-button">作品をさらに表示</button>' +
      '<button id="cnm-start-audio-button">音を再生</button>' +
      '<h1 id="heading">Heading</h1>';
  });

  test('引数に `HTMLButtonElement` が渡されたときにアサーションが成功する', () => {
    const showMoreWorksButtonElement: Element | null = document.querySelector('#show-more-works-button');
    const startAudioButtonElement: Element | null = document.querySelector('#cnm-start-audio-button');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLButtonElement(showMoreWorksButtonElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLButtonElement(startAudioButtonElement);
    }).not.toThrow();
  });

  test('引数に `HTMLButtonElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#heading');
    const wrongSelector: Element | null = document.querySelector('#sho-more-works');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLButtonElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLHeadingElement] is not an instance of HTMLButtonElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLButtonElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLButtonElement.'
      )
    );
  });

});

describe('`assertIsHTMLCanvasElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<canvas id="cnm-modulator-phase-graph"></canvas>' +
      '<canvas id="cnm-modulator-waveform-graph"></canvas>' +
      '<button id="cnm-start-audio-button">音を再生</button>';
  });

  test('引数に `HTMLCanvasElement` が渡されたときにアサーションが成功する', () => {
    const phaseGraphElement: Element | null = document.querySelector('#cnm-modulator-phase-graph');
    const waveformGraphElement: Element | null = document.querySelector('#cnm-modulator-waveform-graph');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLCanvasElement(phaseGraphElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLCanvasElement(waveformGraphElement);
    }).not.toThrow();
  });

  test('引数に `HTMLCanvasElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#cnm-start-audio-button');
    const wrongSelector: Element | null = document.querySelector('#cmn-modulator-waveform-graph');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLCanvasElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLButtonElement] is not an instance of HTMLCanvasElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLCanvasElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLCanvasElement.'
      )
    );
  });

});

describe('`assertIsHTMLDivElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<div class="graph">' +
      '  <canvas id="cnm-modulator-phase-graph" width="516" height="340"></canvas>' +
      '  <canvas id="cnm-modulator-output-graph" width="100" height="340"></canvas>' +
      '  <canvas id="cnm-modulator-waveform-graph" width="1032" height="340"></canvas>' +
      '</div>' +
      '<div id="scroll-down-message">' +
      '  <svg ' +
      '    id="scroll-down-message-chevron"' +
      '    viewBox="0 0 1024 1024"' +
      '    version="1.1"' +
      '    xmlns="http://www.w3.org/2000/svg"' +
      '    xmlns:xlink="http://www.w3.org/1999/xlink"' +
      '    xml:space="preserve"' +
      '    xmlns:serif="http://www.serif.com/"' +
      '    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"' +
      '    role="img">' +
      '    <g transform="matrix(1.31362,0,0,1.48623,-190.217,-346.391)">' +
      '      <path' +
      '        d="M212.182,483.488L277.98,424.091L531.52,643.5L791.557,423.748L856.553,483.831L530.744,759.166L212.182,483.488Z"/>' +
      '    </g>' +
      '  </svg>' +
      '  <p>Scroll down</p>' +
      '</div>' +
      '<button id="cnm-start-audio-button">音を再生</button>';
  });

  test('引数に `HTMLDivElement` が渡されたときにアサーションが成功する', () => {
    const graphDivElement: Element | null = document.querySelector('.graph');
    const scrollDownMessageDivElement: Element | null = document.querySelector('#scroll-down-message');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLDivElement(graphDivElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLDivElement(scrollDownMessageDivElement);
    }).not.toThrow();
  });

  test('引数に `HTMLDivElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#cnm-start-audio-button');
    const wrongSelector: Element | null = document.querySelector('.grraph');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLDivElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLButtonElement] is not an instance of HTMLDivElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLDivElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLDivElement.'
      )
    );
  });

});

describe('assertIsHTMLEmbedElement()', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<embed' +
      '  id="embed1"' +
      '  type="video/mp4"' +
      '  src="water.mp4"' +
      '  width="640"' +
      '  height="480" />' +
      '<embed' +
      '  id="embed2"' +
      '  type="video/quicktime"' +
      '  src="sky.mov"' +
      '  width="1920"' +
      '  height="1080"' +
      '  title="Sky" />' +
      '<button id="cnm-start-audio-button">音を再生</button>';
  });

  test('引数に `HTMLEmbedElement` が渡されたときにアサーションが成功する', () => {
    const embedElement1: Element | null = document.querySelector('#embed1');
    const embedElement2: Element | null = document.querySelector('#embed2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLEmbedElement(embedElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLEmbedElement(embedElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLEmbedElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#cnm-start-audio-button');
    const wrongSelector: Element | null = document.querySelector('#embbed1');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLEmbedElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLButtonElement] is not an instance of HTMLEmbedElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLEmbedElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLEmbedElement.'
      )
    );
  });

});

describe('`assertIsHTMLHeadingElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<h1 id="h1">Heading 1</h1>' +
      '<h2 id="h2">Heading 2</h2>' +
      '<h3 id="h3">Heading 3</h3>' +
      '<h4 id="h4">Heading 4</h4>' +
      '<h5 id="h5">Heading 5</h5>' +
      '<h6 id="h6">Heading 6</h6>' +
      '<button id="cnm-start-audio-button">音を再生</button>';
  });

  test('引数に `HTMLHeadingElement` が渡されたときにアサーションが成功する', () => {
    const h1Element: Element | null = document.querySelector('#h1');
    const h2Element: Element | null = document.querySelector('#h2');
    const h3Element: Element | null = document.querySelector('#h3');
    const h4Element: Element | null = document.querySelector('#h4');
    const h5Element: Element | null = document.querySelector('#h5');
    const h6Element: Element | null = document.querySelector('#h6');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLHeadingElement(h1Element);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLHeadingElement(h2Element);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLHeadingElement(h3Element);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLHeadingElement(h4Element);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLHeadingElement(h5Element);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLHeadingElement(h6Element);
    }).not.toThrow();
  });

  test('引数に `HTMLHeadingElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#cnm-start-audio-button');
    const wrongSelector: Element | null = document.querySelector('heading-1');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLHeadingElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLButtonElement] is not an instance of HTMLHeadingElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLHeadingElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLHeadingElement.'
      )
    );
  });

});

describe('`assertIsHTMLHRElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<hr id="hr" />' +
      '<button id="cnm-start-audio-button">音を再生</button>';
  });

  test('引数に `HTMLHRElement` が渡されたときにアサーションが成功する', () => {
    const hrElement: Element | null = document.querySelector('#hr');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLHRElement(hrElement);
    }).not.toThrow();
  });

  test('引数に `HTMLHRElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#cnm-start-audio-button');
    const wrongSelector: Element | null = document.querySelector('#hrr');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLHRElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLButtonElement] is not an instance of HTMLHRElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLHRElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLHRElement.'
      )
    );
  });

});

describe('`assertIsHTMLImageElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<img id="image" src="./img.jpg" alt="テスト用の img 要素。" />' +
      '<button id="cnm-start-audio-button">音を再生</button>';
  });

  test('引数に `HTMLImageElement` が渡されたときにアサーションが成功する', () => {
    const imageElement: Element | null = document.querySelector('#image');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLImageElement(imageElement);
    }).not.toThrow();
  });

  test('引数に `HTMLImageElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#cnm-start-audio-button');
    const wrongSelector: Element | null = document.querySelector('#img');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLImageElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLButtonElement] is not an instance of HTMLImageElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLImageElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLImageElement.'
      )
    );
  });

});

describe('`assertIsHTMLInputElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<input type="range" id="cnm-modulator-volume-input" name="cnm-modulator-volume-input" min="0" max="100" />' +
      '<input type="range" id="cnm-modulator-ratio-input" name="cnm-modulator-ratio-input" value="1" min="1" max="10" />' +
      '<button id="cnm-start-audio-button">音を再生</button>';
  });

  test('引数に `HTMLInputElement` が渡されたときにアサーションが成功する', () => {
    const modulatorVolumeInputElement: Element | null = document.querySelector('#cnm-modulator-volume-input');
    const modulatorRatioInputElement: Element | null = document.querySelector('#cnm-modulator-ratio-input');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLInputElement(modulatorVolumeInputElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLInputElement(modulatorRatioInputElement);
    }).not.toThrow();
  });

  test('引数に `HTMLInputElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#cnm-start-audio-button');
    const wrongSelector: Element | null = document.querySelector('#cmn-modulator-volume-input');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLInputElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLButtonElement] is not an instance of HTMLInputElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLInputElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLInputElement.'
      )
    );
  });

});

describe('`assertIsHTMLLabelElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<label id="cnm-modulator-volume-name-label" for="cnm-modulator-volume-input">Volume</label>' +
      '<label id="cnm-modulator-volume-value-label" for="cnm-modulator-volume-input"></label>' +
      '<input type="range" id="cnm-modulator-volume-input" name="cnm-modulator-volume-input" min="0" max="100" />';
  });

  test('引数に `HTMLLabelElement` が渡されたときにアサーションが成功する', () => {
    const modulatorVolumeNameLabelElement: Element | null = document.querySelector('#cnm-modulator-volume-name-label');
    const modulatorVolumeValueLabelElement: Element | null = document.querySelector('#cnm-modulator-volume-value-label');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLLabelElement(modulatorVolumeNameLabelElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLLabelElement(modulatorVolumeValueLabelElement);
    }).not.toThrow();
  });


  test('引数に `HTMLLabelElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#cnm-modulator-volume-input');
    const wrongSelector: Element | null = document.querySelector('#cmn-modulator-volume-value-label');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLLabelElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLInputElement] is not an instance of HTMLLabelElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLLabelElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLLabelElement.'
      )
    );
  });

});

describe('`assertIsHTMLLIElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<ul>' +
      '  <li id="list-item-1">List Item 1</li>' +
      '</ul>' +
      '<ol>' +
      '  <li id="list-item-2">List Item 2</li>' +
      '</ol>' +
      '<p id="paragraph">Paragraph</p>';
  });

  test('引数に `HTMLLIElement` が渡されたときにアサーションが成功する', () => {
    const listItemElement1: Element | null = document.querySelector('#list-item-1');
    const listItemElement2: Element | null = document.querySelector('#list-item-2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLLIElement(listItemElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLLIElement(listItemElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLLIElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#paragraph');
    const wrongSelector: Element | null = document.querySelector('#list-item');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLLIElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLParagraphElement] is not an instance of HTMLLIElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLLIElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLLIElement.'
      )
    );
  });

});

describe('`assertIsHTMLOListElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<ol id="o-list-1">' +
      '  <li>List Item</li>' +
      '</ol>' +
      '<ol id="o-list-2">' +
      '  <li>List Item 1</li>' +
      '  <li>List Item 2</li>' +
      '  <li>List Item 3</li>' +
      '</ol>' +
      '<p id="paragraph">Paragraph</p>';
  });

  test('引数に `HTMLOListElement` が渡されたときにアサーションが成功する', () => {
    const oListElement1: Element | null = document.querySelector('#o-list-1');
    const oListElement2: Element | null = document.querySelector('#o-list-2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLOListElement(oListElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLOListElement(oListElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLOListElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#paragraph');
    const wrongSelector: Element | null = document.querySelector('#olist-1');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLOListElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLParagraphElement] is not an instance of HTMLOListElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLOListElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLOListElement.'
      )
    );
  });

});

describe('`assertIsHTMLParagraphElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<p id="paragraph1">Paragraph 1</p>' +
      '<p id="paragraph2">&quot;FM-Synthesis Waveform Visualizer&quot;は、YAMAHA DX7に代表されるようなFMシンセサイザーがどのように波形を生成しているのかの学習に役立つWebアプリです。</p>' +
      '<h1 id="heading1">Heading 1</h1>';
  });

  test('引数に `HTMLParagraphElement` が渡されたときにアサーションが成功する', () => {
    const paragraphElement1: Element | null = document.querySelector('#paragraph1');
    const paragraphElement2: Element | null = document.querySelector('#paragraph2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLParagraphElement(paragraphElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLParagraphElement(paragraphElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLParagraphElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#heading1');
    const wrongSelector: Element | null = document.querySelector('#p1');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLParagraphElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLHeadingElement] is not an instance of HTMLParagraphElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLParagraphElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLParagraphElement.'
      )
    );
  });

});

describe('`assertIsHTMLPreElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<pre id="pre1">' +
      'console.log(\'Hello, World!\');' +
      '</pre>' +
      '<pre id="pre2">' +
      'p {' +
      '  color: #eeeeee;' +
      '}' +
      '</pre>' +
      '<code id="code">' +
      'console.log(\'Hello, World!\');' +
      '</code>';
  });

  test('引数に `HTMLPreElement` が渡されたときにアサーションが成功する', () => {
    const preElement1: Element | null = document.querySelector('#pre1');
    const preElement2: Element | null = document.querySelector('#pre2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLPreElement(preElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLPreElement(preElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLPreElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#code');
    const wrongSelector: Element | null = document.querySelector('#prre');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLPreElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLElement] is not an instance of HTMLPreElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLPreElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLPreElement.'
      )
    );
  });

});

describe('`assertIsHTMLSpanElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<h1><span id="span1">Span 要素</span>のアサーション</h1>' +
      '<p>これは <span id="span2">Span 要素</span>を含む段落です。</p>' +
      '<p>これは <b id="b">B 要素</b>を含む段落です。</p>';
  });

  test('引数に `HTMLSpanElement` が渡されたときにアサーションが成功する', () => {
    const spanElement1: Element | null = document.querySelector('#span1');
    const spanElement2: Element | null = document.querySelector('#span2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLSpanElement(spanElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLSpanElement(spanElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLSpanElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#b');
    const wrongSelector: Element | null = document.querySelector('#spab');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLSpanElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLElement] is not an instance of HTMLSpanElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLSpanElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLSpanElement.'
      )
    );
  });

});

describe('`assertIsHTMLTableCellElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<table>' +
      '  <tr id="tr">' +
      '    <th id="th">' +
      '      <label for="cnm-modulator-volume-input">Volume</label>' +
      '    </th>' +
      '    <td id="td">' +
      '      <input type="range" id="cnm-modulator-volume-input" name="cnm-modulator-volume-input" min="0" max="100" />' +
      '    </td>' +
      '    <td>' +
      '      <label id="cnm-modulator-volume-value-label" for="cnm-modulator-volume-input"></label>' +
      '    </td>' +
      '  </tr>' +
      '  <tr>' +
      '    <th>' +
      '      <label for="cnm-modulator-ratio-input">Ratio</label>' +
      '    </th>' +
      '    <td>' +
      '      <input type="range" id="cnm-modulator-ratio-input" name="cnm-modulator-ratio-input" value="1" min="1" max="10" />' +
      '    </td>' +
      '    <td>' +
      '      <label id="cnm-modulator-ratio-value-label" for="cnm-modulator-ratio-input"></label>' +
      '    </td>' +
      '  </tr>' +
      '</table>';
  });

  test('引数に `HTMLTableCellElement` が渡されたときにアサーションが成功する', () => {
    const thElement: Element | null = document.querySelector('#th');
    const tdElement: Element | null = document.querySelector('#td');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableCellElement(thElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableCellElement(tdElement);
    });
  });

  test('引数に `HTMLTableCellElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#tr');
    const wrongSelector: Element | null = document.querySelector('#table-cell');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableCellElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLTableRowElement] is not an instance of HTMLTableCellElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableCellElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLTableCellElement.'
      )
    );
  });

});

describe('`assertIsHTMLTableElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<table id="table1">' +
      '  <tr id="tr">' +
      '    <th>' +
      '      <label for="cnm-modulator-volume-input">Volume</label>' +
      '    </th>' +
      '    <td>' +
      '      <input type="range" id="cnm-modulator-volume-input" name="cnm-modulator-volume-input" min="0" max="100" />' +
      '    </td>' +
      '    <td>' +
      '      <label id="cnm-modulator-volume-value-label" for="cnm-modulator-volume-input"></label>' +
      '    </td>' +
      '  </tr>' +
      '  <tr>' +
      '    <th>' +
      '      <label for="cnm-modulator-ratio-input">Ratio</label>' +
      '    </th>' +
      '    <td>' +
      '      <input type="range" id="cnm-modulator-ratio-input" name="cnm-modulator-ratio-input" value="1" min="1" max="10" />' +
      '    </td>' +
      '    <td>' +
      '      <label id="cnm-modulator-ratio-value-label" for="cnm-modulator-ratio-input"></label>' +
      '    </td>' +
      '  </tr>' +
      '</table>' +
      '<table id="table2">' +
      '  <tr>' +
      '    <th>' +
      '      <label for="fb-carrier-feedback-input">Feedback</label>' +
      '    </th>' +
      '    <td>' +
      '      <input type="range" id="fb-carrier-feedback-input" name="fb-carrier-feedback-input" value="100" min="0" max="100" />' +
      '    </td>' +
      '    <td>' +
      '      <label id="fb-carrier-feedback-value-label" for="fb-carrier-feedback-input"></label>' +
      '    </td>' +
      '  </tr>' +
      '</table>';
  });

  test('引数に `HTMLTableElement` が渡されたときにアサーションが成功する', () => {
    const tableElement1: Element | null = document.querySelector('#table1');
    const tableElement2: Element | null = document.querySelector('#table2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableElement(tableElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableElement(tableElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLTableElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#tr');
    const wrongSelector: Element | null = document.querySelector('#tabel');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLTableRowElement] is not an instance of HTMLTableElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLTableElement.'
      )
    );
  });

});

describe('`assertIsHTMLTableRowElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<table>' +
      '  <tr id="tr1">' +
      '    <th id="th">' +
      '      <label for="cnm-modulator-volume-input">Volume</label>' +
      '    </th>' +
      '    <td>' +
      '      <input type="range" id="cnm-modulator-volume-input" name="cnm-modulator-volume-input" min="0" max="100" />' +
      '    </td>' +
      '    <td>' +
      '      <label id="cnm-modulator-volume-value-label" for="cnm-modulator-volume-input"></label>' +
      '    </td>' +
      '  </tr>' +
      '  <tr id="tr2">' +
      '    <th>' +
      '      <label for="cnm-modulator-ratio-input">Ratio</label>' +
      '    </th>' +
      '    <td>' +
      '      <input type="range" id="cnm-modulator-ratio-input" name="cnm-modulator-ratio-input" value="1" min="1" max="10" />' +
      '    </td>' +
      '    <td>' +
      '      <label id="cnm-modulator-ratio-value-label" for="cnm-modulator-ratio-input"></label>' +
      '    </td>' +
      '  </tr>' +
      '</table>';
  });

  test('引数に `HTMLTableRowElement` が渡されたときにアサーションが成功する', () => {
    const trElement1: Element | null = document.querySelector('#tr1');
    const trElement2: Element | null = document.querySelector('#tr2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableRowElement(trElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableRowElement(trElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLTableRowElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#th');
    const wrongSelector: Element | null = document.querySelector('#trow');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableRowElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLTableCellElement] is not an instance of HTMLTableRowElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTableRowElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLTableRowElement.'
      )
    );
  });

});

describe('`assertIsHTMLTimeElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<p id="p">' +
      '  Date: <time id="date" datetime="2025-04-01">2025/04/01</time>' +
      '  Time: <time id="time" datetime="20:00">8:00 PM</time>' +
      '  Duration: <time id="duration" datetime="PT2H45M">2h 45m</time>' +
      '</p>';
  });

  test('引数に `HTMLTimeElement` が渡されたときにアサーションが成功する', () => {
    const dateElement: Element | null = document.querySelector('#date');
    const timeElement: Element | null = document.querySelector('#time');
    const durationElement: Element | null = document.querySelector('#duration');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLTimeElement(dateElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTimeElement(timeElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTimeElement(durationElement);
    }).not.toThrow();
  });

  test('引数に `HTMLTimeElement` 以外が渡されたときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#p');
    const wrongSelector: Element | null = document.querySelector('#data');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLTimeElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLParagraphElement] is not an instance of HTMLTimeElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLTimeElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLTimeElement.'
      )
    );
  });

});

describe('`assertIsHTMLUListElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<ul id="ul1">' +
      '  <li>Item 1</li>' +
      '  <li>Item 2</li>' +
      '</ul>' +
      '<ul id="ul2">' +
      '  <li>Item 3</li>' +
      '</ul>' +
      '<ol id="ol">' +
      '  <li>ol Item</li>' +
      '</ol>';
  });

  test('引数に `HTMLUListElement` を渡したときにアサーションが成功する', () => {
    const ulElement1: Element | null = document.querySelector('#ul1');
    const ulElement2: Element | null = document.querySelector('#ul2');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLUListElement(ulElement1);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLUListElement(ulElement2);
    }).not.toThrow();
  });

  test('引数に `HTMLUListElement` 以外を渡したときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#ol');
    const wrongSelector: Element | null = document.querySelector('#ull');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLUListElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLOListElement] is not an instance of HTMLUListElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLUListElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLUListElement.'
      )
    );
  });

});

describe('`assertIsHTMLSelectElement()`', () => {

  beforeAll(() => {
    document.body.innerHTML =
      '<h2 id="h2">Synthesis Mode</h2>' +
      '<select id="synthesis-mode-select">' +
      '  <option value="carrier-and-modulator">Carrier and Modulator</option>' +
      '  <option value="feedback">Feedback</option>' +
      '</select>' +
      '<select id="select">' +
      '  <option value="foo">Foo</option>' +
      '  <option value="bar">Bar</option>' +
      '  <option value="baz">Baz</option>' +
      '</select>';
  });

  test('引数に `HTMLSelectElement` を渡したときにアサーションが成功する', () => {
    const synthesisModeSelectElement: Element | null = document.querySelector('#synthesis-mode-select');
    const selectElement: Element | null = document.querySelector('#select');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLSelectElement(synthesisModeSelectElement);
    }).not.toThrow();
    expect(() => {
      HTMLElementAssertion.assertIsHTMLSelectElement(selectElement);
    }).not.toThrow();
  });

  test('引数に `HTMLSelectElement` 以外を渡したときにアサーションが失敗する', () => {
    const wrongType: Element | null = document.querySelector('#h2');
    const wrongSelector: Element | null = document.querySelector('#selct');

    expect(() => {
      HTMLElementAssertion.assertIsHTMLSelectElement(wrongType);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        '[object HTMLHeadingElement] is not an instance of HTMLSelectElement.'
      )
    );
    expect(() => {
      HTMLElementAssertion.assertIsHTMLSelectElement(wrongSelector);
    }).toThrow(
      new HTMLElementAssertion.InvalidHtmlElementError(
        'null is not an instance of HTMLSelectElement.'
      )
    );
  });

});
