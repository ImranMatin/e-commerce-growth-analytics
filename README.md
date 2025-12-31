# E-commerce Growth Analytics Dashboard

A high-fidelity, professional E-commerce Analytics Dashboard for tracking sales performance and customer loyalty. Built with a modern dark mode aesthetic featuring neon blue and teal accents.

![Dashboard Preview](https://img.shields.io/badge/Status-Active-00F5D4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- **Total Revenue Chart** - Interactive 12-month trend visualization with revenue and orders data
- **Circular Progress Gauges** - Visual indicators for Customer Acquisition Cost (CAC) and Lifetime Value (LTV)
- **Shopping Heatmap** - Peak shopping hours visualization across weekdays
- **Top Products Table** - Performance metrics with product thumbnails and trend indicators
- **Real-time Stats** - Key metrics including revenue, orders, customers, and conversion rates
- **Dark Mode Design** - Modern glassmorphism UI with neon accents
- **Responsive Layout** - Optimized for desktop and mobile viewing

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Charts:** Recharts
- **Routing:** React Router DOM
- **State Management:** TanStack React Query
- **Form Handling:** React Hook Form with Zod validation

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── CircularGauge.tsx      # CAC/LTV progress indicators
│   │   ├── DashboardHeader.tsx    # Top navigation bar
│   │   ├── RevenueChart.tsx       # 12-month revenue trends
│   │   ├── ShoppingHeatmap.tsx    # Peak hours visualization
│   │   ├── StatCard.tsx           # Metric display cards
│   │   └── TopProductsTable.tsx   # Product performance table
│   └── ui/                        # Reusable UI components (shadcn)
├── hooks/                         # Custom React hooks
├── lib/                           # Utility functions
├── pages/
│   ├── Index.tsx                  # Main dashboard page
│   └── NotFound.tsx               # 404 page
├── App.tsx                        # Root component with routing
├── index.css                      # Global styles & design tokens
└── main.tsx                       # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ecommerce-growth-analytics.git
   cd ecommerce-growth-analytics
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

Built with ❤️ using [Lovable](https://lovable.dev)
