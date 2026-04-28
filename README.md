# igarin14pm-typescript-utils

TypeScript の自作ユーティリティ関数をまとめたリポジトリです。

# ファイル

## scripts/src/html-element-assertion.ts

`document.querySelector()` などで取得した HTML 要素を特定の HTML 要素型に絞り込むアサーション関数。

### 対応する HTML　要素型

- `HTMLElement`
- `HTMLAnchorElement`
- `HTMLButtonElement`
- `HTMLCanvasElement`
- `HTMLDivElement`
- `HTMLEmbedElement`
- `HTMLHeadingElement`
- `HTMLHRElement`
- `HTMLImageElement`
- `HTMLInputElement`
- `HTMLLabelElement`
- `HTMLLIElement`
- `HTMLOListElement`
- `HTMLParagraphElement`
- `HTMLPreElement`
- `HTMLSpanElement`
- `HTMLTableCellElement`
- `HTMLTableElement`
- `HTMLTableRowElement`
- `HTMLTimeElement`
- `HTMLUListElement`
- `HTMLSelectElement`

## scripts/src/timers-promises.ts

`window.setTimeout()`/`window.setInterval()` をブラウザで `async`/`await` を使って呼び出せるように、 `Promise` でラップした関数を定義。

# インストール方法

(このリポジトリは私個人のWebサイトで使用するために作成されたもので、他の環境での動作については一切責任を負いません。ご了承の上でご利用ください。)

Releases の最新のバージョンから igarin14pm-typescript-utils-vX.Y.Z.zip をダウンロード・展開し、その中のファイルをお好きな場所にコピーしてお使いください。

# ライセンス

このプロジェクトはMIT Licenseのもとで公開されています。  
[https://opensource.org](https://opensource.org)

# 作者

## Igarin

- GitHub: [@igarin14pm](https://github.com/igarin14pm/)
