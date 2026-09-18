# Sunkeeper Studio Website

本專案使用 Vue 3 與 Vite 開發。

## 開啟 Web 版本

請先確認電腦已安裝 [Node.js](https://nodejs.org/)，接著在專案根目錄執行：

```bash
npm install
npm run dev
```

啟動成功後，在瀏覽器開啟終端機顯示的網址，預設為：

```text
http://localhost:5173
```

### Web 寬版排版

使用平板或電腦開啟網站時，系統會依照螢幕寬度自動切換成 Web 雙欄排版；使用手機開啟時，則會自動切換回單欄排版。判斷門檻為螢幕寬度 `600px`。

也可以在網址後面加上 `?view=web`，明確指定使用 Web 寬版：

```text
http://localhost:5173/?view=web
```

GitHub Pages 的 Web 寬版網址為：

```text
https://sunkeeper316.github.io/sunkeeper_studio_website/?view=web
```

Web 寬版會顯示 App 與遊戲的介紹文字。請注意參數是 `?view=web`，不是在網址後面加 `/web`。

若要讓同一個區域網路中的其他裝置連線，可執行：

```bash
npm run dev -- --host
```

## 建置與預覽正式版本

```bash
npm run build
npm run preview
```

正式版本會建置在 `dist` 資料夾中。執行預覽指令後，在瀏覽器開啟終端機顯示的網址即可查看。
