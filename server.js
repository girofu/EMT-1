const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 安全性中間件
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        fontSrc: ["'self'", "https:", "data:"],
      },
    },
  })
);

// 啟用gzip壓縮
app.use(compression());

// 靜態文件服務
app.use(
  express.static(".", {
    maxAge: "1d", // 緩存1天
    etag: true,
  })
);

// 主路由 - 提供EMT流程圖
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "emt_flowcharts.html"));
});

// 健康檢查端點
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || "production",
    version: require("./package.json").version,
  });
});

// API信息端點
app.get("/api/info", (req, res) => {
  res.json({
    name: "EMT-1 緊急醫療救護流程圖系統",
    version: require("./package.json").version,
    description: "基於內政部消防署114年緊急醫療救護單項技術操作原則",
    features: [
      "創傷救護流程 (X-A-B-C-D-E)",
      "非創傷救護流程 (A-B-C)",
      "小兒救護流程",
      "特殊情況處置",
      "設備操作指南",
      "劑量計算器",
      "辛辛那提中風指數評估",
      "休克評估與處置",
    ],
    lastUpdated: "2024-01-15",
  });
});

// 404錯誤處理
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: "請求的資源不存在",
    availableRoutes: ["/", "/health", "/api/info"],
  });
});

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error("伺服器錯誤:", err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: "伺服器內部錯誤",
  });
});

// 啟動服務器
app.listen(PORT, () => {
  console.log(`
    🚑 EMT-1 緊急醫療救護流程圖系統
    📍 服務器運行在端口: ${PORT}
    🌐 本地訪問: http://localhost:${PORT}
    📊 健康檢查: http://localhost:${PORT}/health
    📋 API信息: http://localhost:${PORT}/api/info
    ⏰ 啟動時間: ${new Date().toLocaleString("zh-TW")}
    `);
});

// 優雅關機處理
process.on("SIGTERM", () => {
  console.log("收到SIGTERM信號，正在關閉服務器...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("收到SIGINT信號，正在關閉服務器...");
  process.exit(0);
});
