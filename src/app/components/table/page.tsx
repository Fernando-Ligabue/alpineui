"use client";

import { useState } from "react";
import { ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, ChevronsLeftRight } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "Editor", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User", status: "Active" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Diana Evans", email: "diana@example.com", role: "User", status: "Pending" },
  { id: 7, name: "Edward Foster", email: "edward@example.com", role: "Editor", status: "Active" },
  { id: 8, name: "Fiona Green", email: "fiona@example.com", role: "User", status: "Inactive" },
  { id: 9, name: "George Harris", email: "george@example.com", role: "Admin", status: "Active" },
  { id: 10, name: "Hannah Irving", email: "hannah@example.com", role: "User", status: "Pending" },
];

type SortDirection = "asc" | "desc" | null;

function InteractiveTable() {
  const [data] = useState(usersData);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortColumn(null);
        setSortDirection(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;
    
    const aVal = a[sortColumn as keyof typeof a];
    const bVal = b[sortColumn as keyof typeof b];
    
    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleRowSelection = (id: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map(row => row.id)));
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn !== column) return <ArrowUpDown className="w-4 h-4 opacity-30" />;
    return sortDirection === "asc" 
      ? <ArrowUp className="w-4 h-4 text-au-primary" />
      : <ArrowDown className="w-4 h-4 text-au-primary" />;
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active": return "au-badge-default";
      case "Inactive": return "au-badge-outline";
      case "Pending": return "au-badge-secondary";
      default: return "au-badge-outline";
    }
  };

  return (
    <div className="space-y-4 w-full">
      <div className="au-table-wrapper">
        <table className="au-table">
          <thead>
            <tr>
              <th className="au-table-checkbox">
                <input 
                  type="checkbox" 
                  className="au-checkbox"
                  checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                  ref={(el) => {
                    if (el) el.indeterminate = selectedRows.size > 0 && selectedRows.size < paginatedData.length;
                  }}
                  onChange={toggleSelectAll}
                />
              </th>
              <th 
                className="cursor-pointer hover:bg-au-muted transition-colors"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  Name {getSortIcon("name")}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-au-muted transition-colors"
                onClick={() => handleSort("email")}
              >
                <div className="flex items-center gap-1">
                  Email {getSortIcon("email")}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-au-muted transition-colors"
                onClick={() => handleSort("role")}
              >
                <div className="flex items-center gap-1">
                  Role {getSortIcon("role")}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-au-muted transition-colors"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-1">
                  Status {getSortIcon("status")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((user) => (
              <tr 
                key={user.id}
                className={selectedRows.has(user.id) ? "selected" : ""}
              >
                <td className="au-table-checkbox">
                  <input 
                    type="checkbox" 
                    className="au-checkbox"
                    checked={selectedRows.has(user.id)}
                    onChange={() => toggleRowSelection(user.id)}
                  />
                </td>
                <td className="font-medium">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`au-badge ${getStatusClass(user.status)}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-between p-3 border border-au-border rounded-lg bg-au-secondary">
        <div className="flex items-center gap-4">
          <span className="text-sm text-au-muted-foreground">
            {selectedRows.size} of {data.length} selected
          </span>
          {selectedRows.size > 0 && (
            <button 
              className="text-sm text-au-primary hover:underline"
              onClick={() => setSelectedRows(new Set())}
            >
              Clear selection
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-au-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-1">
            <button 
              className="au-button au-button-sm au-button-outline au-button-icon"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeftRight className="w-4 h-4 rotate-180" />
            </button>
            <button 
              className="au-button au-button-sm au-button-outline au-button-icon"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              className="au-button au-button-sm au-button-outline au-button-icon"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button 
              className="au-button au-button-sm au-button-outline au-button-icon"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsLeftRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TablePage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Table</h1>
      <p className="text-au-muted-foreground mb-8">
        A data table component with sorting, pagination, and row selection.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add table" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock preview={<InteractiveTable />} code={`<div x-data="dataTable({ items: users })">
  <table class="au-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <template x-for="user in paginatedData" :key="user.id">
        <tr :class="{ 'selected': isSelected(user) }">
          <td x-text="user.name"></td>
          <td x-text="user.email"></td>
          <td x-text="user.role"></td>
        </tr>
      </template>
    </tbody>
  </table>
</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-au-muted-foreground">
          <li>Column sorting (click headers to sort)</li>
          <li>Pagination with page navigation</li>
          <li>Row selection with checkboxes</li>
          <li>Select all / clear selection</li>
          <li>Visual feedback for selected rows</li>
        </ul>
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-table-wrapper</td><td className="px-4 py-2">Table container with overflow scroll</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-table</td><td className="px-4 py-2">Base table styles</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-table-checkbox</td><td className="px-4 py-2">Checkbox column width</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-table-pagination</td><td className="px-4 py-2">Pagination container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-table-striped</td><td className="px-4 py-2">Alternating row colors</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-table-compact</td><td className="px-4 py-2">Reduced padding for compact view</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}