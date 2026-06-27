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

## 🚀 Live Demo

| Service | URL |
|---------|-----|
| **ERP Application** | [your-forgeos-app.vercel.app](https://your-forgeos-app.vercel.app) |
| **API Backend** | [your-forgeos-backend.onrender.com](https://your-forgeos-backend.onrender.com/api/health) |
| **Public Storefront** | [your-forgeos-store.vercel.app](https://your-forgeos-store.vercel.app) |

---

## 📖 What is ForgeOS?

**ForgeOS** is a full-stack, AI-powered Business Operating System designed for manufacturing SMEs. It replaces fragmented spreadsheets and siloed tools with a single, intelligent platform covering every business function — from customer orders to factory floor to HR payroll.

### The Problem
Manufacturing SMEs ($1M–$50M revenue) are stuck using:
- Excel for inventory and orders
- WhatsApp for production coordination
- Manual reports for business insights

This costs them **15–20% revenue loss** from stockouts, production delays, and poor decision-making.

### The Solution
ForgeOS gives manufacturing businesses a **production-ready ERP** with:
- 🤖 **AI-powered insights** — ask your data in plain English
- ⚡ **Real-time operations** — live updates across all users instantly
- 🔐 **Role-based access** — every team member sees only what they need
- 📱 **Customer-facing storefront** — integrated B2C channel

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

## ✨ Key Features

### 🔄 Fully Automated Procurement
- **Make-to-Order (MTO):** Sales Orders auto-trigger Manufacturing Orders
- **Smart Auto-Purchasing:** Manufacturing shortfalls auto-draft Purchase Orders
- **Quantity Optimization:** Respects min reorder quantities, prevents duplicate POs

### 🛡️ 6-Role Access Control
| Role | Access |
|------|--------|
| **Admin** | Full system access |
| **Sales** | Customer orders, delivery |
| **Purchase** | Vendor orders, receiving |
| **Manufacturing** | Production orders, work orders |
| **Inventory** | Products, stock movements |
| **HR** | Attendance, leave management |

### 🤖 Gemini AI Business Assistant
- Reads live database context (orders, stock, alerts)
- Role-aware: Sales users cannot extract financial secrets
- Plain-English queries: *"Which products are running low?"*

### ⚡ Real-Time Operations
- Socket.io broadcasts every action to all connected users
- No page refresh needed — live kanban, live stock counts

### 🛒 Integrated B2C Storefront
- Standalone customer-facing web store
- Checkout directly creates Draft Sales Orders in ERP
- Customer login to track order status in real-time

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js v18+
- PostgreSQL v17+ (local) OR AWS Aurora PostgreSQL endpoint

### 1. Database Setup
```bash
# For AWS Aurora PostgreSQL:
DATABASE_URL="postgresql://admin:password@your-cluster.rds.amazonaws.com:5432/forgeos_db?sslmode=require"

# For local PostgreSQL:
DATABASE_URL="postgresql://postgres:password@localhost:5432/forgeos_db"
```

### 2. Backend
```bash
cd backend
npm install
cp .env.example .env     # Fill in your values
npx prisma migrate dev --name init
node prisma/seed.js      # Seeds demo data
npm start                # http://localhost:5000
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev              # http://localhost:5173
```

### 4. Storefront
```bash
cd storefront
npm install
npm run dev              # http://localhost:5174
```

---

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| **Admin (Business Owner)** | admin@forgeos.com | Admin@123 |
| **Sales Manager** | sales@forgeos.com | Sales@123 |
| **Purchase Manager** | purchase@forgeos.com | Purchase@123 |
| **Production Manager** | mfg@forgeos.com | Mfg@123 |
| **Inventory Manager** | inventory@forgeos.com | Inv@123 |
| **HR Manager** | hr@forgeos.com | Hr@123 |

---

## 💼 Business Model (SaaS)

| Plan | Price | Users | Key Features |
|------|-------|-------|--------------|
| **Free** | $0/mo | Up to 3 | Core ERP, 1,000 orders/mo |
| **Starter** | $49/mo | Up to 10 | + AI Assistant, Storefront |
| **Pro** | $149/mo | Unlimited | + Advanced Analytics, API Access |

**Target Market**: ~32 million manufacturing SMEs globally. Even 0.01% penetration = $47M ARR.

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

This project uses **Amazon Aurora PostgreSQL** as its primary database.

- All 14 application tables reside in Aurora
- Prisma ORM connects via SSL (`?sslmode=require`)
- Schema includes full indexes for production-scale queries
- Aurora's auto-scaling handles traffic spikes during peak order periods

*See the AWS Console screenshot in the submission for proof of Aurora usage.*

---

*Built with ❤️ for the H0 Hackathon — AWS Databases + Vercel*
*#H0Hackathon*
