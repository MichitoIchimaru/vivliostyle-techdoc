# 構成
## フォルダ構成

```
ROOT
│  vivliostyle.config.js
│      
├─assets
│          
├─manuscripts
│  │  changelog.md
│  │  cover.md
│  │  toc.md
│  │  
│  └─contents
│          chapter1.md
│          chapter2.md
│          chapter3.md
│          
└─themes
    │          
    └─scss
            theme_changelog.scss
            theme_common.scss
            theme_cover.scss
            theme_print.scss
            theme_screen.scss
            theme_toc.scss
            _variables.scss
            _vfm_code.scss
            _vfm_footnotes.scss
            _vfm_frontmatter.scss
            _vfm_hard_new_line.scss
            _vfm_image.scss
            _vfm_math_equation.scss
            _vfm_raw_html.scss
            _vfm_ruby.scss
            _vfm_sectionization.scss
```
<div style="break-after: page;"></div>

## vivliostyle.config.js

``` javascript
module.exports = {
  title: "DesignSpecification",
  author: "Michito Ichimaru <michito.ichimaru@gmail.com>",
  language: "ja",
  size: "A4",
  theme: "themes/theme_screen.css",
  entry: [
    {
      path: "manuscripts/cover.md",
      rel: "contents",
      theme: "themes/theme_cover.css"
    },
    {
      path: "manuscripts/changelog.md",
      rel: "contents",
      theme: "themes/theme_changelog.css"
    },
    {
      path: "manuscripts/toc.md",
      rel: "contents",
      theme: "themes/theme_toc.css"
    },
    "manuscripts/contents/chapter1.md",
    "manuscripts/contents/chapter2.md",
    "manuscripts/contents/chapter3.md",
  ],
  output: [
    "./dist/TechDoc.pdf",
  ],
  workspaceDir: ".vivliostyle",
}
```