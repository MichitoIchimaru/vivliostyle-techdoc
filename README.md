# Vivliostyle Techdoc

description

> created by [create-book](https://github.com/vivliostyle/create-book).

## References

- VFM <https://vivliostyle.github.io/vfm/#/vfm>
- Vivliostyle CLI <https://github.com/vivliostyle/vivliostyle-cli#readme>
- Vivliostyle Themes <https://github.com/vivliostyle/themes#readme>
- Awesome Vivliostyle <https://github.com/vivliostyle/awesome-vivliostyle#readme>
- Vivliostyle (GitHub) <https://github.com/vivliostyle>
- Vivliostyle <https://vivliostyle.org>

## Installation
VS Codeを起動し、次のコマンドを実行

```
cd themes
npm install
cd ..
npm install
```

VS Codeを再起動するとthemes配下のscssが自動でwatchされるようになります

## Usage
* プレビュー  
  ```
  npm run preview
  ```
* ビルド（PDF生成）  
  ```
  npm run build
  ```
  ※mermaidの図形は描画されません。mermaidを含めている場合はpreviewから印刷を実行してください。また、その際は「Microsoft Print to PDF」を選択すると目次のリンクが機能しません。「Save as PDF」を選択し、「Background graphics」にチェックをしてPDF保存してください。