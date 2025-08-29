# 🚑 EMT-1 緊急醫療救護流程圖系統

基於內政部消防署 114 年緊急醫療救護單項技術操作原則的互動式流程圖系統

## ✨ 功能特色

### 📋 核心流程

- **創傷救護流程** - X-A-B-C-D-E 評估原則
- **非創傷救護流程** - A-B-C 評估 + 病史詢問
- **小兒救護流程** - 年齡分組與專門處置
- **特殊情況處置** - 急產、中毒、過敏、環境急症

### 🔧 實用工具

- **設備操作指南** - 袋瓣罩、AED、抽吸設備等
- **劑量計算器** - 藥物、輸液、CPR 品質指標
- **辛辛那提中風指數評估** - CPSS 快速篩檢
- **休克評估與處置** - 四大類型休克及休克指數計算

### 🎯 新增評估工具

- **辛辛那提中風指數 (CPSS)** - 72-86%準確率的院前中風篩檢
- **休克指數計算器** - 心率/收縮壓比值評估
- **互動式評估表單** - 即時計算和建議

## 🚀 快速開始

### 本地開發

```bash
# 克隆項目
git clone <your-repo-url>
cd emt-1-flowcharts

# 安裝依賴
npm install

# 啟動開發服務器
npm start

# 訪問應用
open http://localhost:3000
```

### Railway 部署

#### 方法一：GitHub 集成（推薦）

1. 將項目推送到 GitHub
2. 登錄 [Railway](https://railway.app)
3. 點擊 "New Project" → "Deploy from GitHub repo"
4. 選擇您的倉庫
5. Railway 會自動檢測 Node.js 項目並開始部署

#### 方法二：Railway CLI

```bash
# 安裝Railway CLI
npm install -g @railway/cli

# 登錄Railway
railway login

# 初始化項目
railway init

# 部署項目
railway up
```

## 📱 使用說明

### 基本操作

- **標籤切換** - 點擊頂部標籤或使用左右箭頭鍵
- **快速搜索** - 右上角搜索框輸入關鍵詞
- **快速導航** - 左側浮動導航按鈕
- **列印功能** - 右下角列印按鈕

### 評估工具

1. **辛辛那提中風評估**

   - 進入「劑量計算器」標籤
   - 找到「辛辛那提中風評估工具」
   - 依序評估臉部、手臂、言語功能
   - 系統自動計算中風機率

2. **休克指數計算**
   - 進入「劑量計算器」標籤
   - 找到「休克指數與生命徵象評估器」
   - 輸入心率和收縮壓
   - 獲得休克程度判讀和處置建議

## 🏥 臨床應用

### 創傷病患評估

1. **現場安全** - 自我保護與環境評估
2. **X-A-B-C-D-E** - 系統性評估流程
3. **緊急處置** - 立即危及生命的處理
4. **後送決策** - 適當醫院選擇

### 非創傷病患評估

1. **主訴病史** - 主訴-之前-吃-過-藥-敏-感
2. **A-B-C 評估** - 氣道-呼吸-循環
3. **專科評估** - 心血管、呼吸、神經系統
4. **症狀導向處置** - 藥物使用與監測

### 特殊評估工具

- **CPSS 中風篩檢** - 任一項異常即啟動中風流程
- **休克分類** - 失血性、心因性、敗血性、過敏性
- **小兒評估三角** - ABC 快速評估法

## 🔧 技術架構

### 前端技術

- **HTML5** - 響應式設計
- **CSS3** - 現代動畫效果
- **Vanilla JavaScript** - 輕量交互功能

### 後端服務

- **Node.js + Express** - 靜態文件服務
- **Helmet** - 安全性頭部設置
- **Compression** - Gzip 壓縮

### 部署平台

- **Railway** - 現代應用部署平台
- **自動部署** - GitHub 集成
- **環境管理** - 環境變數配置

## 📊 API 端點

### 健康檢查

```
GET /health
```

返回系統狀態和運行時間

### API 信息

```
GET /api/info
```

返回系統版本和功能列表

## 🛠 環境變數

```bash
PORT=3000                    # 服務器端口
NODE_ENV=production         # 運行環境
```

## 📋 更新紀錄

### v1.0.0 (2024-01-15)

- ✅ 基礎流程圖系統
- ✅ 六大功能模組
- ✅ 辛辛那提中風指數評估
- ✅ 休克評估與處置
- ✅ 互動式計算器
- ✅ Railway 部署就緒

## 🤝 貢獻指南

1. Fork 項目
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權信息

基於 MIT 授權發布。詳見 `LICENSE` 文件。

## ⚠️ 免責聲明

本系統僅供教學和參考使用，實際臨床操作請遵循最新的醫療指引和當地規定。緊急情況下請立即聯繫當地急救服務。

## 📞 聯繫方式

- 項目網址: https://your-app.railway.app
- GitHub: https://github.com/your-repo/emt-1-flowcharts
- 問題回報: [GitHub Issues](https://github.com/your-repo/emt-1-flowcharts/issues)

---

_🚑 讓專業救護技術更加精確和有效 🚑_
