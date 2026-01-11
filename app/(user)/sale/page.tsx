"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  DollarSquareIcon,
  ShoppingCart01Icon,
  TrendingUp,
} from "@hugeicons/core-free-icons";

const salesData = [
  { month: "Jan", sales: 4000, revenue: 2400, orders: 240 },
  { month: "Feb", sales: 3000, revenue: 1398, orders: 221 },
  { month: "Mar", sales: 2000, revenue: 9800, orders: 229 },
  { month: "Apr", sales: 2780, revenue: 3908, orders: 200 },
  { month: "May", sales: 1890, revenue: 4800, orders: 221 },
  { month: "Jun", sales: 2390, revenue: 3800, orders: 250 },
];

const categoryData = [
  { name: "Audio", value: 4000 },
  { name: "Wearables", value: 3000 },
  { name: "Accessories", value: 2000 },
  { name: "Video", value: 2780 },
  { name: "Peripherals", value: 1890 },
  { name: "Storage", value: 2390 },
];

const COLORS = [
  "oklch(0.646 0.222 41.116)",
  "oklch(0.6 0.118 184.704)",
  "oklch(0.398 0.07 227.392)",
  "oklch(0.828 0.189 84.429)",
  "oklch(0.769 0.188 70.08)",
  "oklch(0.488 0.243 264.376)",
];

const topProducts = [
  { id: 1, name: "Smart Watch Pro", sales: 512, revenue: 153547.88 },
  { id: 2, name: "Portable SSD 1TB", sales: 421, revenue: 54755.79 },
  { id: 3, name: "Mechanical Keyboard", sales: 328, revenue: 58947.72 },
  { id: 4, name: "Premium Wireless Headphones", sales: 298, revenue: 59699.02 },
  { id: 5, name: "USB-C Fast Charger", sales: 254, revenue: 12697.46 },
];

export default function SalesPage() {
  const [dateRange, setDateRange] = useState("6months");

  const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0);
  const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const avgOrderValue = (totalRevenue / totalOrders).toFixed(2);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Sales Analytics
            </h1>
            <p className="mt-2 text-muted-foreground">
              Track your sales performance and revenue metrics
            </p>
          </div>
          <div className="flex gap-2">
            {["1month", "3months", "6months", "1year"].map((range) => (
              <Button
                key={range}
                variant={dateRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setDateRange(range)}
              >
                {range === "1month"
                  ? "1M"
                  : range === "3months"
                  ? "3M"
                  : range === "6months"
                  ? "6M"
                  : "1Y"}
              </Button>
            ))}
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  ${(totalRevenue / 1000).toFixed(1)}K
                </p>
                <p className="mt-1 text-xs text-green-600">
                  ↑ 12.5% from last period
                </p>
              </div>
              <HugeiconsIcon
                icon={DollarSquareIcon}
                className="h-8 w-8 text-muted-foreground"
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  {totalOrders}
                </p>
                <p className="mt-1 text-xs text-green-600">
                  ↑ 8.2% from last period
                </p>
              </div>
              <HugeiconsIcon
                icon={ShoppingCart01Icon}
                className="h-8 w-8 text-muted-foreground"
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Order Value</p>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  ${avgOrderValue}
                </p>
                <p className="mt-1 text-xs text-green-600">
                  ↑ 4.1% from last period
                </p>
              </div>
              <HugeiconsIcon
                icon={TrendingUp}
                className="h-8 w-8 text-muted-foreground"
              />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Units Sold
                </p>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  {totalSales}
                </p>
                <p className="mt-1 text-xs text-green-600">
                  ↑ 15.3% from last period
                </p>
              </div>
              <HugeiconsIcon
                icon={Calendar01Icon}
                className="h-8 w-8 text-muted-foreground"
              />
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Sales & Revenue Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                  }}
                  labelStyle={{ color: "var(--foreground)" }}
                />
                <Legend />
                <Bar dataKey="sales" fill="var(--primary)" />
                <Bar dataKey="revenue" fill="var(--chart-2)" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Sales by Category
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                  }}
                  labelStyle={{ color: "var(--foreground)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Orders Trend */}
        <Card className="mb-8 p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Orders Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="var(--chart-1)"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Products */}
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Top Products
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">
                    Product
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-foreground">
                    Sales
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-foreground">
                    Revenue
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product) => (
                  <tr key={product.id} className="border-b border-border">
                    <td className="px-4 py-3 text-foreground">
                      {product.name}
                    </td>
                    <td className="px-4 py-3 text-right text-foreground">
                      {product.sales}
                    </td>
                    <td className="px-4 py-3 text-right text-foreground">
                      ${product.revenue.toFixed(2)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700"
                      >
                        Active
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </main>
  );
}
