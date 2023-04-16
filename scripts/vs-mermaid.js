mermaid.initialize({
  startOnLoad: false
});
function renderGraph() {

  // VFMが作るcode要素に付けられるクラスを指定したセレクタ
  const codeSelector = "code.language-mermaid-render";
  // レンダリング対象になる要素のリストを取得する
  const mermaidElements = document.querySelectorAll(codeSelector);

  let i = 1;
  for (let src of mermaidElements) {
    const dist = src.parentNode;
    const svg = mermaid.render('mermaid-graph-' + i, src.textContent, undefined);
    const div = document.createElement('div');
    div.innerHTML = svg;
    div.classList.add('language-mermaid-render');
    // code要素の親要素であるpre要素をdiv.language-mermaid-render > svg#mermaid-grahp-*に置き換える
    dist.replaceWith(div);
    i++;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderGraph);
} else {
  renderGraph();
}

function svg2jpeg(svgElement, sucessCallback, errorCallback) {
  var canvas = document.createElement('canvas');
  canvas.width = svgElement.width.baseVal.value;
  canvas.height = svgElement.height.baseVal.value;
  var ctx = canvas.getContext('2d');
  var image = new Image;

  image.onload = () => {
    // SVGデータをPNG形式に変換する
    ctx.drawImage(image, 0, 0, image.width, image.height);
    sucessCallback(canvas.toDataURL());
  };
  image.onerror = (e) => {
    errorCallback(e);
  };
  // SVGデータを取り出す
  var svgData = new XMLSerializer().serializeToString(this.damageMap.nativeElement);
  image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svgData);
}