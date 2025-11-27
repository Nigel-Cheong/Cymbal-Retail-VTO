"use client";

import * as React from "react";
import { products as allProducts, categories } from "@/lib/data";
import { type Product, type Category } from "@/lib/types";
import Header from "@/components/store/header";
import RecruitmentBanner from "@/components/store/recruitment-banner";
import CategoryFilters from "@/components/store/category-filters";
import ProductGrid from "@/components/store/product-grid";
import Footer from "@/components/store/footer";
import VirtualTryOnModal from "@/components/store/virtual-try-on-modal";

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const filteredProducts = React.useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <RecruitmentBanner />
          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ProductGrid
            products={filteredProducts}
            onProductSelect={setSelectedProduct}
          />
        </div>
      </main>
      <Footer />
      {selectedProduct && (
        <VirtualTryOnModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
