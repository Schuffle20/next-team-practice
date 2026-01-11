"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HugeiconsIcon } from "@hugeicons/react";
import { Heart, ShoppingCart, Star } from "@hugeicons/core-free-icons";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    category: "Audio",
    rating: 4.5,
    reviews: 328,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    category: "Wearables",
    rating: 4.8,
    reviews: 512,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 3,
    name: "USB-C Fast Charger",
    price: 49.99,
    category: "Accessories",
    rating: 4.6,
    reviews: 654,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 4,
    name: "4K Webcam",
    price: 149.99,
    category: "Video",
    rating: 4.3,
    reviews: 189,
    image: "/placeholder.svg?height=200&width=200",
    inStock: false,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 179.99,
    category: "Peripherals",
    rating: 4.7,
    reviews: 421,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
  {
    id: 6,
    name: "Portable SSD 1TB",
    price: 129.99,
    category: "Storage",
    rating: 4.9,
    reviews: 798,
    image: "/placeholder.svg?height=200&width=200",
    inStock: true,
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            Products
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse our collection of premium tech products
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:col-span-2"
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} products found
          </p>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="relative h-48 bg-muted ">
                <div className="h-full w-full bg-primary"></div>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute right-2 top-2 rounded-full bg-background/80 p-2 transition-colors hover:bg-background"
                >
                  <HugeiconsIcon
                    icon={Heart}
                    className={`h-5 w-5 ${
                      favorites.includes(product.id)
                        ? "fill-destructive text-destructive"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <div>
                  <Badge variant="outline" className="mb-2 w-fit">
                    {product.category}
                  </Badge>
                  <h3 className="text-balance font-semibold text-foreground">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <HugeiconsIcon
                        icon={Star}
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">
                    ${product.price}
                  </span>
                  <Button
                    disabled={!product.inStock}
                    size="sm"
                    className="gap-2"
                  >
                    <HugeiconsIcon icon={ShoppingCart} className="h-4 w-4" />
                    {product.inStock ? "Add" : "Out of Stock"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No products found</p>
          </div>
        )}
      </div>
    </main>
  );
}
