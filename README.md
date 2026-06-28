<div align="center">
  <h1>⚙️ ForgeOS</h1>
  <p><strong>AI-Powered Business Operating System for Manufacturing SMEs</strong></p>
  <p><em>"Forge Your Business. Own Your Operations."</em></p>

  [![AWS Aurora PostgreSQL](https://img.shields.io/badge/AWS-Aurora%20PostgreSQL-FF9900?logo=amazon-aws)](https://aws.amazon.com/rds/aurora/)
  [![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?logo=vercel)](https://vercel.com)
  [![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?logo=node.js)](https://nodejs.org/)
  [![Prisma](https://img.shields.io/badge/ORM-Prisma-1B222D?logo=prisma)](https://www.prisma.io/)
  [![Gemini AI](https://img.shields.io/badge/AI-Gemini%201.5-orange?logo=google)](https://deepmind.google/technologies/gemini/)
  [![Socket.io](https://img.shields.io/badge/Realtime-Socket.io-010101?logo=socket.io)](https://socket.io/)

  <br/>
  <strong>Built for the <a href="https://h01.devpost.com/">H0: Hack the Zero Stack with Vercel v0 & AWS Databases</a> Hackathon</strong>
</div>

<hr />

## 🚀 Live Evaluation Links

Because this project is being evaluated online, everything has been securely deployed to production for you to test instantly. 

| Service | Live URL |
|---------|----------|
| **ERP Application (Core)** | [https://forgeos-erp.vercel.app/](https://forgeos-erp.vercel.app/) |
| **B2C Storefront** | [https://forgeos-store.vercel.app/](https://forgeos-store.vercel.app/) |
| **API Backend Health** | [https://aws-hackathon-jm5u.onrender.com/api/health](https://aws-hackathon-jm5u.onrender.com/api/health) |

### 🔑 Instant Login Credentials (ERP)
Use these credentials to log into the ERP and test the role-based access control.

| Role | Email | Password |
|------|-------|----------|
| **Admin (Business Owner)** | admin@forgeos.com | Admin@123 |
| **Sales Manager** | sales@forgeos.com | Sales@123 |
| **Purchase Manager** | purchase@forgeos.com | Purchase@123 |
| **Production Manager** | mfg@forgeos.com | Mfg@123 |
| **Inventory Manager** | inventory@forgeos.com | Inv@123 |
| **HR Manager** | hr@forgeos.com | Hr@123 |

*(Note: The Storefront requires you to quickly sign up as a mock customer to place an order).*

---

## 👨‍⚖️ Evaluator's Testing Guide
Want to see the magic of ForgeOS? Try these 3 quick tests:

### Test 1: The Automated MTO (Make-to-Order) Pipeline
ForgeOS contains complex mathematical business logic to automate factory floors. 
1. Log into the ERP as `admin@forgeos.com`.
2. Go to **Products** and look at a product (e.g., Dining Table). Note the physical stock.
3. Go to **Sales Orders** and create a new order for a quantity *larger* than the current stock.
4. Click the green **Confirm** checkmark on that Sales Order.
5. **The Magic:** You will immediately get an AI alert that an MTO (Manufacturing Order) was automatically drafted for the exact shortage amount! Check the **Manufacturing** tab to see it waiting for production.

### Test 2: Storefront to ERP Sync
1. Open the **Storefront** in a private window/different browser.
2. Sign up and place an order in the cart.
3. Flip back to the **ERP Application**.
4. The Sales Order instantly appears in the Sales dashboard without needing to refresh!

### Test 3: Context-Aware AI Business Assistant
1. In the ERP, click the **Forge AI** brain icon in the top right.
2. Ask it: *"Which of our products are running low on stock?"* or *"Summarize our sales."*
3. The AI reads the live **AWS Aurora** database in real-time, calculates the metrics, and gives you a plain-English operational report.

---

## 📖 What is ForgeOS?

**ForgeOS** is a full-stack, AI-powered Business Operating System designed for manufacturing SMEs. It replaces fragmented spreadsheets and siloed tools with a single, intelligent platform covering every business function — from customer orders to factory floor to HR payroll.

### The Problem
Manufacturing SMEs ($1M–$50M revenue) are stuck using Excel for inventory and WhatsApp for production coordination. This costs them **15–20% revenue loss** from stockouts, production delays, and poor decision-making.

### The Solution
ForgeOS gives manufacturing businesses a **production-ready ERP** with:
- 🤖 **AI-powered insights** — ask your data in plain English
- ⚡ **Real-time operations** — live updates across all users instantly
- 🔐 **Role-based access** — every team member sees only what they need
- 📱 **Customer-facing storefront** — integrated B2C sales channel

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                       ForgeOS Architecture                        │
│                                                                  │
│  [Customer Browser]          [Employee Browser]                  │
│        │                           │                             │
│        ▼                           ▼                             │
│  [Vercel CDN]            [Vercel CDN]                            │
│  React Storefront         React ERP App (Vite)                   │
│        │                           │                             │
│        └─────────┬─────────────────┘                             │
│                  │ REST API + Socket.io                           │
│                  ▼                                               │
│  [Render.com — Node.js + Express Backend]                         │
│   ├── 15 REST API modules                                         │
│   ├── Socket.io (real-time broadcast)                             │
│   └── Google Gemini AI (role-aware assistant)                    │
│                  │                                               │
│                  │ Prisma ORM (SSL)                               │
│                  ▼                                               │
│  [Amazon Aurora PostgreSQL — AWS RDS]                            │
│   ├── 14 normalized tables                                        │
│   ├── Full index optimization                                     │
│   └── Auto-scaling serverless capacity                           │
└──────────────────────────────────────────────────────────────────┘
```

**AWS Database Used**: **Amazon Aurora PostgreSQL** (Aurora-compatible, production-grade, auto-scaling)

---

## ✨ Key Technical Features

### 🔄 Fully Automated Procurement
- **Make-to-Order (MTO):** Sales Orders auto-trigger Manufacturing Orders when stock is short.
- **Smart Auto-Purchasing:** Manufacturing shortfalls auto-draft Purchase Orders for raw materials.
- **Quantity Optimization:** Respects minimum reorder quantities and prevents duplicate purchase orders.

### 🛡️ 6-Role Access Control
Enterprise-grade JWT authentication that restricts API endpoints and UI elements based on 6 distinct roles (Admin, Sales, Purchase, Manufacturing, Inventory, HR). 

### 🤖 Gemini AI Business Assistant
- Reads live database context (orders, stock, alerts).
- Role-aware: Sales users cannot ask the AI to extract financial secrets or HR payroll data.

### ⚡ Real-Time Operations
- Custom Socket.io architecture broadcasts every action to connected users.
- Live kanban boards and stock counts without page refreshes.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Database** | Amazon Aurora PostgreSQL (AWS RDS) |
| **Backend** | Node.js + Express.js |
| **ORM** | Prisma (type-safe, migrations) |
| **Frontend** | React + Vite (deployed on Vercel) |
| **Realtime** | Socket.io |
| **AI** | Google Gemini 1.5 Flash |
| **Auth** | JWT + bcrypt |
| **Hosting** | Vercel (Frontend) + Render.com (Backend) |

---

## 📊 AWS Database Usage

This project heavily utilizes **Amazon Aurora PostgreSQL** as its primary system of record.
- All 14 complex, normalized application tables reside in Aurora.
- Prisma ORM connects securely via SSL (`?sslmode=require`).
- Complex transaction processing (e.g. reserving stock, deducting inventory, and generating multi-stage manufacturing orders) leverages Aurora's ACID compliance to prevent race conditions.

*See the AWS Console screenshot in our devpost submission for proof of Aurora deployment.*

---

*Built with ❤️ for the H0 Hackathon — AWS Databases + Vercel*
*#H0Hackathon*
