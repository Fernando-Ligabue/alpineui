"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

function InteractivePagination() {
  const [page, setPage] = useState(3);
  const totalPages = 10;

  return (
    <div className="mx-auto flex w-full justify-center">
      <div className="flex items-center gap-1">
        <button
          className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-9 w-9 hover:bg-gray-100 ${page === 1 ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {[1, 2, 3, 4, 5].map((p) => (
          <button
            key={p}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-9 w-9 ${page === p ? "bg-black text-white hover:bg-black" : "hover:bg-gray-100"}`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}

        <span className="flex h-9 w-9 items-center justify-center text-sm text-gray-500">...</span>

        <button
          className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-9 w-9 hover:bg-gray-100 ${page === totalPages ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function PaginationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Pagination</h1>
      <p className="text-gray-500 mb-8">
        A component for navigating between pages of content.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractivePagination />}
          code={`<div x-data="{ page: 3, totalPages: 10 }" class="mx-auto flex w-full justify-center">
  <div class="flex items-center gap-1">
    <button @click="page = Math.max(1, page - 1)"
      :disabled="page === 1"
      :class="page === 1 ? 'opacity-50 pointer-events-none' : ''"
      class="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 w-9 hover:bg-gray-100">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
      </svg>
    </button>

    <template x-for="p in [1,2,3,4,5]" :key="p">
      <button @click="page = p"
        :class="page === p ? 'bg-black text-white hover:bg-black' : 'hover:bg-gray-100'"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 w-9"
        x-text="p"></button>
    </template>

    <span class="flex h-9 w-9 items-center justify-center text-sm text-gray-500">...</span>

    <button @click="page = Math.min(totalPages, page + 1)"
      :disabled="page === totalPages"
      :class="page === totalPages ? 'opacity-50 pointer-events-none' : ''"
      class="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 w-9 hover:bg-gray-100">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
