# 各ページ詳細
## カバー
カバーについて説明します。

### Markdown（cover.md）
```markdown
# Technical Documentation Sample{.covertitle}

<img src="../assets/technology-gc376a2387_1920.jpg" style="margin-top:10px;" />

<div style="text-align: right;white-space:pre;">
2023年3月20日
XXXX株式会社
YYYYYYYY
Michito Ichimaru
</div>
```
※カバー画面の画像は<a href="https://pixabay.com/ja/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1283624">Pexels</a>による<a href="https://pixabay.com/ja//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1283624">Pixabay</a>からの画像です  
<br>
タイトルの末尾に{.covertitle}を付与する事で、生成されるHTMLのh1タグにcovertitleというクラスが付与されます。

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>Technical Documentation Sample</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../themes/theme_cover.css">
  </head>
  <body>
    <section class="level1" aria-labelledby="technical-documentation-sample">
      <h1 class="covertitle" id="technical-documentation-sample">Technical Documentation Sample</h1>
      <img src="../assets/technology-gc376a2387_1920.jpg" style="margin-top:10px;">
      <div style="text-align: right;white-space:pre;">
        2023年3月20日
        XXXX株式会社
        YYYYYYYY
        Michito Ichimaru
      </div>
    </section>
  </body>
</html>
```

<div style="break-after: page;"></div>

### SCSS (themes/scss/theme_cover.scss)

```scss
@import 'theme_common';

@page {
  @bottom-center {
    content: '';
  }
}

.covertitle::before {
  content: '';
}

.covertitle {
  font-size: 24pt;
  border: 0;
  background: #ffffff;
  color: #000000;
}
```

カバーにはページ番号を付与したくないので、次の部分でページ番号を削除しています。
```scss
@page {
  @bottom-center {
    content: '';
  }
}
```

カバータイトルには章番号を付与したくないので、次の部分で章番号を削除しています。
```scss
.covertitle::before {
  content: '';
}
```

<div style="break-after: page;"></div>

## 変更履歴
変更履歴について説明します。

### Markdown（changelog.md）

```markdown
# 改版履歴{.changelogtitle}

| 版数  | 変更日    | 変更者           | 内容          |
| :---: | :-------- | :--------------- | :------------ |
|  0.1  | 2023/3/20 | Michito Ichimaru | 新規作成      |
|  1.0  | 2023/3/20 | Michito Ichimaru | 1.0版リリース |
```

### SCSS (themes/scss/theme_changelog.scss)

```scss
@import 'theme_common';

.changelogtitle::before {
  content: '';
}

.changelogtitle {
  font-size: 20pt;
  border: 0;
  background: #ffffff;
  color: #000000;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #cccccc;
}

th,
td {
  border: 1px solid #555555;
  padding: 5px;
}

tr:nth-child(even) {
  background: #efefef;
}

th:nth-child(1) {
  width: 40px;
}

th:nth-child(2) {
  width: 100px;
}

th:nth-child(3) {
  width: 160px;
}
```

変更履歴にもページ番号を付与したくないので、次の部分でページ番号を削除しています。
```scss
.changelogtitle::before {
  content: '';
}
```

次の部分は説明するまでもなく、変更履歴の表の枠線と奇数行、偶数行で色を変えています。
```scss
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #cccccc;
}

th,
td {
  border: 1px solid #555555;
  padding: 5px;
}

tr:nth-child(even) {
  background: #efefef;
}
```

各列の幅を次のようにthのスタイルで指定しています。
```scss
th:nth-child(1) {
  width: 40px;
}

th:nth-child(2) {
  width: 100px;
}

th:nth-child(3) {
  width: 160px;
}
```

<div style="break-after: page;"></div>

## 目次
目次について説明します。目次はvivliostyle.config.jsにおいてtoc: trueを指定せず、次のサイトを参考に作りました。  
[Vivliostyle Viewer で CSS 組版ちょっと入門](https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol1/shinyu/index.html)  
各章番号を1.1、1.2のようにピリオドで繋げて表示させる方法が非常に難しく、レンダリングのバグでうまく表示されてるんじゃないかという様な実装になっています。（nav li:before の width: 0pxの部分...）

### Markdown（toc.md）
```markdown
# 目次{.toctitle}

<nav id="toc" role="doc-toc">

1. [構成](../manuscripts/contents/chapter1.html)
    1. [フォルダ構成](../manuscripts/contents/chapter1.html#フォルダ構成)
    1. [vivliostyle.config.js](../manuscripts/contents/chapter1.html#vivliostyleconfigjs)
1. [各画面詳細](../manuscripts/contents/chapter2.html)
    1. [カバー](../manuscripts/contents/chapter2.html#カバー)
       1. [Markdown（cover.md）](../manuscripts/contents/chapter2.html#markdowncovermd)
       1. [SCSS (themes/scss/theme_cover.scss)](../manuscripts/contents/chapter2.html#scss-themesscsstheme_coverscss)
    1. [変更履歴](../manuscripts/contents/chapter2.html#変更履歴)
       1. [Markdown（changelog.md）](../manuscripts/contents/chapter2.html#markdownchangelogmd)
       1. [SCSS (themes/scss/theme_changelog.scss)](../manuscripts/contents/chapter2.html#scss-themesscsstheme_changelogscss)
    1. [目次](../manuscripts/contents/chapter2.html#目次)
       1. [Markdown（toc.md）](../manuscripts/contents/chapter2.html#markdowntocmd)
       1. [SCSS (themes/scss/theme_toc.scss)](../manuscripts/contents/chapter2.html#scss-themesscsstheme_tocscss)
    1. [コンテンツ](../manuscripts/contents/chapter2.html#コンテンツ)
       1. [SCSS (themes/scss/theme_screen.scss)](../manuscripts/contents/chapter2.html#scss-themesscsstheme_screenscss)
       1. [SCSS (themes/scss/thrme_common.scss)](../manuscripts/contents/chapter2.html#scss-themesscssthrme_commonscss)
       1. [SCSS (themes/scss/_vfm_sectionization.scss)](../manuscripts/contents/chapter2.html#scss-themesscss_vfm_sectionizationscss)
1. [その他](../manuscripts/contents/chapter3.html)
    1. [画像の段組み（左）](../manuscripts/contents/chapter3.html#画像の段組み左)
    1. [画像の段組み（右）](../manuscripts/contents/chapter3.html#画像の段組み右)
    1. [節（section）の段組み](../manuscripts/contents/chapter3.html#節sectionの段組み)
       1. [ポラーノの広場1](../manuscripts/contents/chapter3.html#ポラーノの広場1)
       1. [ポラーノの広場2](../manuscripts/contents/chapter3.html#ポラーノの広場2)
    1. [Markdown（chapter3.md抜粋）](../manuscripts/contents/chapter3.html#markdownchapter3md抜粋)
    1. [SCSS（themes/scss/theme_screen.scss末尾）](../manuscripts/contents/chapter3.html#scssthemesscsstheme_screenscss末尾)

</nav>
```

### SCSS (themes/scss/theme_toc.scss)
```scss
@import 'theme_common';

.toctitle::before {
  content: '';
}

.toctitle {
  font-size: 20pt;
  border: 0;
  background: #ffffff;
  color: #000000;
}

nav {
  font-size: 12pt;
  margin-top: 10px;
  margin-left: 10px;
}

ol {
  list-style: none;
  padding-left: 0px;
  counter-reset: item;
}

nav li {
  display: table;
  white-space: nowrap;
  counter-increment: item;
  width: 100%;
}

nav li:before {
  content: counters(item, ".") ". ";
  display: table-cell;
  width: 0px;
  padding-right: 10px;
}

nav li a {
  display: inline-flex;
  width: 100%;
  text-decoration: none;
  color: currentColor;
  align-items: baseline;
}

nav li a::before {
  margin-left: 0.5em;
  margin-right: 0.5em;
  border-bottom: 1px dotted;
  content: "";
  order: 1;
  flex: auto;
}

nav li a::after {
  text-align: right;
  content: target-counter(attr(href), page);
  align-self: flex-end;
  flex: none;
  order: 2;
}
```

<div style="break-after: page;"></div>

## コンテンツ
目次以降のコンテンツページのスタイルについて説明します。

### SCSS (themes/scss/theme_screen.scss)
theme_screen.scssはそこまで説明する必要はありません。npm create vivliostyle-themeで出力されたものに対して
ページのフッターにドキュメント名を表示し、コードブロックのフォントサイズと1行の高さを指定するようにしているだけです。
column-countに関しては3章で説明します。

```scss
/*
 * For browser viewing:
 * load this style in Web publications (format: webpub)
 */

/* common styles */
@import 'theme_common';

@page {

  /* if you open the publication on Vivliostyle Viewer, this message will be shown */
  @top-left {
    content: 'Technical Documentation Sample 1.0版';
  }
}

/* for wide screen */
body {
  max-width: 800px;
  margin: 0rem auto 2rem;
}

/* highlight footnote */
.footnote {
  vertical-align: super;
  background-color: aliceblue;
  color: gray;

  a {
    word-break: break-all;
  }
}

/* and more... 🖋 */
pre[class^="language"] {
  font-size: 9pt;
  line-height: 1.2;
}

section:has(> .column2) {
  column-count: 2;
}

section:has(> .column2) h2 {
  margin-top: 0px;
}
```

### SCSS (themes/scss/thrme_common.scss)

```scss
/*
 * For all media (print, screen)
 */

/* you can import partial SCSS files */
/* @import '_variables'; */
/* @import '_toc'; */
/* ... */

html {
  orphans: 1;
  widows: 1;
  font-family: sans-serif;
  font-size: 10pt;
}

title {
  // Named strings
  // https://vivliostyle.github.io/vivliostyle_doc/ja/events/vivliostyle-css-paged-media-20210410/slide.html#named-strings
  string-set: doc-title content();
}

@page {
  size: A4;
  margin: 15mm;
}

// Left/right page layout
// https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol1/shinyu/index.html#%E5%B7%A6%E5%8F%B3%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AE%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88-page-left-%E3%81%A8-page-right

// Page header/footer (page margin box)
// https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol1/shinyu/index.html#%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%98%E3%83%83%E3%83%80%E3%83%BC%EF%BC%8F%E3%83%95%E3%83%83%E3%82%BF%E3%83%BC%EF%BC%88%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%9E%E3%83%BC%E3%82%B8%E3%83%B3%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%EF%BC%89

@page {
  @bottom-left {
    content: '社外秘';
  }

  @bottom-center {
    content: counter(page);
  }

  @bottom-right {
    content: 'Copyright 2023 XXX LIMITED'
  }
}

@import '_variables';
@import '_vfm_code';
@import '_vfm_footnotes';
@import '_vfm_frontmatter';
@import '_vfm_hard_new_line';
@import '_vfm_image';
@import '_vfm_math_equation';
@import '_vfm_raw_html';
@import '_vfm_ruby';
@import '_vfm_sectionization';

/* and more... 🖋 */
@page :first {
  counter-reset: chapter -3;
}

@page :nth(1) {
  counter-increment: chapter;
}
```

次の部分でページのフッターに秘密表示、ページ番号、コピーライトを表示しています。
```scss
@page {
  @bottom-left {
    content: '社外秘';
  }

  @bottom-center {
    content: counter(page);
  }

  @bottom-right {
    content: 'Copyright 2023 XXX LIMITED'
  }
}
```

次の部分で章番号変数のchapterの初期値を定義しています。表紙、変更履歴、目次の3ページ分を差し引く必要があるため、-3としています。
変更履歴や目次が複数ページになってしまう場合、ここで調整してください。

```scss
@page :first {
  counter-reset: chapter -3;
}
```

次の部分で章番号をインクリメントしていますが、この部分はasciidocの方が優秀です。
そもそもVivliostyleは@page内で宣言した変数は@page内でしかインクリメントできません。
また、@page以外で宣言した変数は@page以外でしかインクリメントできません。
そのため、mdファイルを複数に分けて作成する場合、同じページ内で章を複数作成しても、
章番号はカウントアップされません。

```scss
@page :nth(1) {
  counter-increment: chapter;
}
```

<div style="break-after: page;"></div>

### SCSS (themes/scss/_vfm_sectionization.scss)
```scss
body>section {
  margin: 10px auto;
}

html {
  // counter
  counter-reset: section subsection figure;
}

section> {

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    font-weight: bold;
    break-after: avoid;
  }

  h1 {
    margin: 0;
    padding-top: 5px;
    padding-left: 10px;
    font-size: 16pt;
    line-height: 1.5;

    // counter
    counter-reset: section;

    &:before {
      content: counter(chapter) '. ';
    }

    height: 35px;
    border-radius: 10px;
    color: #ffffff;
    background: #0052D4;
    background-image: linear-gradient(90deg, rgba(0, 1, 107, 1) 34%, rgba(8, 25, 141, 1) 60%, rgba(35, 102, 247, 1));
  }

  h2 {
    margin: 8pt auto 4pt;
    padding-top: 2px;
    font-size: 12pt;

    border-left: 10px solid #555555;
    padding-left: 10px;
    background-color: #cccccc;

    // counter
    counter-reset: subsection;
    counter-increment: section;

    &:before {
      content: counter(chapter) '.' counter(section) '. ';
    }
  }

  h3 {
    margin: 8pt auto 4pt;
    padding-top: 2px;
    font-size: 12pt;

    border-left: 10px solid #555555;
    padding-left: 10px;
    background-color: #cccccc;

    // counter
    counter-increment: subsection;

    &:before {
      content: counter(chapter) '.' counter(section) '.' counter(subsection) '. ';
    }
  }
}

section.title {
  color: $color--red;
}

blockquote>h1 {
  font-size: inherit;
}

.level1 {}

.level2 {}
```

h1のカウンタは次の通りです。#(h1)が表示された場合にsectionを初期化し、"<font color=red>[chapter]. </font>"を表示します
```scss
    // counter
    counter-reset: section;

    &:before {
      content: counter(chapter) '. ';
    }
```

h2のカウンタは次の通りです。##(h2)が表示された場合にsubsectionを初期化し、"<font color=red>[chapter].[section]. </font>"を表示します
```scss
    // counter
    counter-reset: subsection;
    counter-increment: section;

    &:before {
      content: counter(chapter) '.' counter(section) '. ';
    }
```

h3のカウンタは次の通りです。"<font color=red>[chapter].[section].[subsection]. </font>"を表示します
```scss
    // counter
    counter-increment: subsection;

    &:before {
      content: counter(chapter) '.' counter(section) '.' counter(subsection) '. ';
    }
```

上記の通り、本スタイルではh3までタイトルにスタイルが適用されます。必要に応じてh4、h5にも適用してください。

### SCSS (themes/scss/_vfm_image.scss)
```scss
img {
  max-width: 100%;
}

figure {
  img {}

  figcaption {
    text-align: center;

    // counter
    counter-increment: figure;

    &:before {
      margin-right: 1rem;
      content: 'Figure' counter(chapter) "-" counter(figure) '.';

      :root:lang(ja) & {
        content: '図' counter(chapter) "-" counter(figure) '.';
      }
    }
  }
}
```

Figure番号がmdファイルごとに初期化されてしまうので、次のように番号の前に章番号を付与しています。
```scss
    &:before {
      margin-right: 1rem;
      content: 'Figure' counter(chapter) "-" counter(figure) '.';

      :root:lang(ja) & {
        content: '図' counter(chapter) "-" counter(figure) '.';
      }
    }
```
