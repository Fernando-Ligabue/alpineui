"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractivePagination() {
  const [page, setPage] = useState(3);
  const totalPages = 10;

  return (
    <div className="flex items-center gap-1">
      <button 
        className="au-button au-button-sm au-button-outline"
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      {[1, 2, 3, 4, 5].map((p) => (
        <button
          key={p}
          className={`au-button au-button-sm ${page === p ? "au-button-default" : "au-button-outline"}`}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}
      
      <span className="px-2 text-au-muted-foreground">...</span>
      
      <button 
        className="au-button au-button-sm au-button-outline"
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function PaginationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Pagination</h1>
      <p className="text-au-muted-foreground mb-8">
        A component for navigating between pages of content.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add pagination" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractivePagination />}
          code={`const [page, setPage] = useState(1);
const totalPages = 10;

return (
  <div class="flex items-center gap-1">
    <button 
      class="au-button au-button-sm au-button-outline"
      onClick={() => setPage(Math.max(1, page - 1))}
    >
      <ChevronLeft class="w-4 h-4" />
    </button>
    
    {[1, 2, 3, 4, 5].map((p) => (
      <button
        key={p}
        className={\`au-button au-button-sm \${page === p ? "au-button-default" : "au-button-outline"}\`}
        onClick={() => setPage(p)}
      >
        {p}
      </button>
    ))}
    
    <span>...</span>
    
    <button 
      class="au-button au-button-sm au-button-outline"
      onClick={() => setPage(Math.min(totalPages, page + 1))}
    >
      <ChevronRight class="w-4 h-4" />
    </button>
  </div>
);`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">CSS Classes Reference</h2>
        <div className="border border-au-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-au-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Class</th>
                <th className="text-left px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-au-border">
              <tr><td className="px-4 py-2 font-mono text-xs">au-pagination</td><td className="px-4 py-2">Pagination container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-pagination-item</td><td className="px-4 py-2">Page number button</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}