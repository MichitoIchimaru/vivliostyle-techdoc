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
    "manuscripts/contents/chapter4.md",
  ],
  output: [
    "./dist/TechDoc.pdf",
  ],
  workspaceDir: ".vivliostyle",
}
