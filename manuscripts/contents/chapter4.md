---
script:
  - type: 'text/javascript'
    src: '../../../scripts/mermaid.min.js'
  - type: 'text/javascript'
    src: '../../../scripts/vs-mermaid.js'
    defer: true
---

# Mermaid

```mermaid-render:キャプション付き
graph TD
  A-->B
  A-->C
  B-->D
  C-->D
```

## Markdown（chapter4.md）
Mermaidの表示方法はQiitaの次の記事をそのまま利用しています。  
[Vivliostyle-CLIでmermaid.jsを使用する](https://qiita.com/AyumuTakai/items/6267f93afebf726378a0)  
1点、異なる箇所は、記事中では次のように記載があります。しかし、それはパスが誤っているだけで、特に問題はありません。

  * vivliostyle.config.jsでworkspaceDirを指定すると作業ディレクトリにローカルのJavaScriptファイルがコピーされないため正しく処理されません。

```markdown
---
script:
  - type: 'text/javascript'
    src: '../../../scripts/mermaid.min.js'
  - type: 'text/javascript'
    src: '../../../scripts/vs-mermaid.js'
    defer: true
---

# Mermaid

```mermaid-render:キャプション付き
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```　

```