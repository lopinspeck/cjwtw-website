# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CJW Taiwan 企業官網，使用 Astro 靜態網站生成框架搭配 Tailwind CSS 建構。`raw/` 目錄存放原始 HTML 檔案，作為轉換為 Astro 元件的參考來源。

## Commands

```bash
npm run dev      # 啟動開發伺服器 (HMR)
npm run build    # 建構生產版本 (輸出至 dist/)
npm run preview  # 本地預覽生產版本
```

## Architecture

- **src/pages/** — Astro 檔案路由，子目錄對應網站分區 (about/, company/, news/)
- **src/components/** — 可重用 Astro 元件
- **src/layouts/** — 頁面佈局模板
- **src/data/** — 結構化資料
- **public/** — 靜態資源，直接複製至產出目錄
- **raw/** — 原始 HTML 參考檔，轉換完成後可移除

## Design Tokens (Tailwind)

- 品牌色：`primary` (#2b2744 深紫)、`gold` (#d7bf85)
- 字體：Noto Sans TC (sans)、EB Garamond (serif)
- 定義於 `tailwind.config.mjs`

## Tech Stack

- Astro 5 + @astrojs/tailwind
- Tailwind CSS 3
- TypeScript (strict mode)
- 套件管理：npm
