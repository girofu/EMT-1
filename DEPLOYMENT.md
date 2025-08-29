# 🚀 Railway 部署指南

## 📋 部署前檢查清單

### ✅ 已完成的項目功能

- [x] **辛辛那提中風指數評估** - CPSS 快速篩檢工具
- [x] **休克評估與處置** - 四大類型休克分類和休克指數計算
- [x] **改善視覺呈現** - 現代化流程圖設計
- [x] **互動式計算器** - 休克指數、CPSS 評估、劑量計算
- [x] **Railway 部署配置** - 完整的部署文件

### 📁 項目文件結構

```
EMT-1/
├── emt_flowcharts.html    # 主要HTML文件
├── server.js              # Express服務器
├── package.json           # 項目依賴
├── railway.toml           # Railway配置
├── README.md              # 項目說明
├── DEPLOYMENT.md          # 部署指南
└── .gitignore            # Git忽略文件
```

## 🚀 Railway 部署步驟

### 方法一：GitHub 自動部署（推薦）

1. **準備 Git 倉庫**

   ```bash
   git init
   git add .
   git commit -m "初始提交：EMT-1流程圖系統"
   git remote add origin https://github.com/your-username/emt-1-flowcharts.git
   git push -u origin main
   ```

2. **Railway 部署**

   - 訪問 [railway.app](https://railway.app)
   - 點擊 "New Project"
   - 選擇 "Deploy from GitHub repo"
   - 授權 GitHub 並選擇您的倉庫
   - Railway 會自動檢測 Node.js 項目並開始部署

3. **驗證部署**
   - 等待部署完成（通常 2-3 分鐘）
   - 訪問提供的 URL 確認功能正常
   - 測試健康檢查端點：`/health`

### 方法二：Railway CLI 部署

1. **安裝 Railway CLI**

   ```bash
   npm install -g @railway/cli
   ```

2. **部署項目**
   ```bash
   railway login
   railway init
   railway up
   ```

## 🔧 配置說明

### 環境變數

```bash
PORT=3000          # 服務器端口（Railway自動設置）
NODE_ENV=production # 運行環境
```

### Railway 配置文件說明

```toml
[build]
builder = "nixpacks"  # 自動檢測構建工具

[deploy]
startCommand = "npm start"        # 啟動命令
healthcheckPath = "/health"       # 健康檢查路徑
healthcheckTimeout = 100          # 健康檢查超時
restartPolicyType = "on-failure"  # 失敗時重啟
restartPolicyMaxRetries = 10      # 最大重試次數
```

## 🧪 功能測試清單

部署後請測試以下功能：

### ✅ 基本功能

- [ ] 主頁載入正常
- [ ] 六個標籤頁切換正常
- [ ] 搜索功能運作
- [ ] 列印功能可用
- [ ] 響應式設計在手機端正常

### ✅ 計算器功能

- [ ] **休克指數計算器**
  - 輸入心率和收縮壓
  - 計算結果顯示正確
  - 分級判讀準確
- [ ] **辛辛那提中風評估**
  - 三項測試選擇正常
  - 評分計算準確
  - 風險判讀正確

### ✅ 流程圖功能

- [ ] 創傷流程（X-A-B-C-D-E）
- [ ] 非創傷流程（A-B-C）
- [ ] 小兒救護流程
- [ ] 特殊情況處置
- [ ] 設備操作指南

## 📊 監控與維護

### 健康檢查

訪問 `/health` 端點檢查系統狀態：

```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600,
  "environment": "production",
  "version": "1.0.0"
}
```

### 日誌監控

在 Railway 控制台中查看：

- 部署日誌
- 應用程式日誌
- 錯誤報告
- 資源使用情況

## 🔄 更新流程

1. **本地開發**

   ```bash
   # 本地測試
   npm start
   # 訪問 http://localhost:3000
   ```

2. **推送更新**

   ```bash
   git add .
   git commit -m "更新：描述您的更改"
   git push origin main
   ```

3. **自動部署**
   - Railway 會自動檢測更改
   - 自動重新部署
   - 通常在 1-2 分鐘內完成

## 📱 使用指南

### 快速導航

- **鍵盤**: 使用左右箭頭鍵切換標籤
- **滑鼠**: 點擊標籤或使用左側浮動導航
- **搜索**: 右上角搜索框輸入關鍵詞

### 評估工具使用

1. **辛辛那提中風評估**

   - 進入「劑量計算器」標籤
   - 找到「辛辛那提中風評估工具」
   - 依序評估臉部、手臂、言語功能
   - 獲得中風機率和處置建議

2. **休克指數計算**
   - 進入「劑量計算器」標籤
   - 找到「休克指數與生命徵象評估器」
   - 輸入心率和收縮壓
   - 獲得休克程度判讀

## 🆘 故障排除

### 常見問題

1. **部署失敗**

   - 檢查 package.json 語法
   - 確認所有依賴正確
   - 查看 Railway 部署日誌

2. **功能異常**

   - 清除瀏覽器緩存
   - 檢查 JavaScript 控制台錯誤
   - 確認網路連接

3. **計算器不工作**
   - 確認輸入格式正確
   - 檢查瀏覽器 JavaScript 支援
   - 重新載入頁面

### 支援聯繫

- 檢查 `/health` 端點狀態
- 查看 Railway 控制台日誌
- 提交 GitHub Issue 報告問題

---

🚑 **EMT-1 緊急醫療救護流程圖系統現已就緒！** 🚑

部署完成後，您將擁有一個功能完整的線上 EMT-1 培訓系統，包含最新的評估工具和互動式計算器。
