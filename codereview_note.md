# Code Review: `src/pages/about/[id].astro`

## 1. ~~`getStaticPaths` 硬編碼，與 `aboutData` 重複維護~~ ✅ 已修正

**嚴重度：中**

已改為從 `aboutData` 動態產生，同時套用至 `company/[id].astro` 和 `news/[id].astro`：

```js
export function getStaticPaths() {
  return Object.keys(aboutData).map((key) => ({ params: { id: key } }));
}
```

## 2. ~~`fileMap` 硬編碼，同樣與 `aboutData` 重複~~ ✅ 已修正

**嚴重度：中**

已改用樣板字串，移除 `fileMap`：

```js
const pageContent = pagesData[`about-${id}.html`];
```

## 3. ~~`set:html` 使用 — 需確認內容安全性~~ ✅ 已修正

**嚴重度：低（視資料來源而定）**

已加上註解說明資料來源是受信任的：

```js
// 資料來源為本地靜態 pages.json，內容已受信任
```

## 4. 缺少 `id` 查無資料的防禦

**嚴重度：低**

如果 `aboutData[id]` 不存在，`title` 會是 `undefined`。目前 `getStaticPaths` 已改為從資料動態產生，因此不會產生無效的 id，風險極低。暫不處理。

---

**總結：** #1、#2、#3 已於 commit `b0f8ce7` 修正。#4 風險極低，暫不處理。
