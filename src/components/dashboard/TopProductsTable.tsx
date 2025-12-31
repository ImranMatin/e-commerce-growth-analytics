import { TrendingUp, TrendingDown } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Pro Headphones",
    category: "Electronics",
    sales: 2847,
    revenue: 284700,
    trend: 12.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Premium Leather Backpack",
    category: "Accessories",
    sales: 1923,
    revenue: 192300,
    trend: 8.2,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    category: "Electronics",
    sales: 1654,
    revenue: 165400,
    trend: -3.1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    category: "Apparel",
    sales: 1432,
    revenue: 71600,
    trend: 15.8,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    category: "Home",
    sales: 1287,
    revenue: 128700,
    trend: 5.4,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=100&h=100&fit=crop",
  },
];

export function TopProductsTable() {
  return (
    <div className="glass-card p-6">
      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground">Top Performing Products</h3>
          <p className="text-sm text-muted-foreground">Best sellers this month</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="pb-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Product
                </th>
                <th className="pb-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Category
                </th>
                <th className="pb-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Sales
                </th>
                <th className="pb-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Revenue
                </th>
                <th className="pb-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="group transition-colors hover:bg-muted/20"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-lg border border-border/50 transition-all group-hover:border-primary/50 group-hover:shadow-glow">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-foreground">{product.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-4 text-right font-medium text-foreground">
                    {product.sales.toLocaleString()}
                  </td>
                  <td className="py-4 text-right font-medium text-primary">
                    ${product.revenue.toLocaleString()}
                  </td>
                  <td className="py-4 text-right">
                    <div
                      className={`inline-flex items-center gap-1 ${
                        product.trend >= 0 ? "text-primary" : "text-destructive"
                      }`}
                    >
                      {product.trend >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="font-medium">{Math.abs(product.trend)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
