"use client";

import { useState } from "react";
import { ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, ChevronsLeftRight } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

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
      ? <ArrowUp className="w-4 h-4 text-gray-900" />
      : <ArrowDown className="w-4 h-4 text-gray-900" />;
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active": return "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-900 text-white";
      case "Inactive": return "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-gray-300 text-gray-700";
      case "Pending": return "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-700";
      default: return "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-gray-300 text-gray-700";
    }
  };

  return (
    <div className="space-y-4 w-full">
      <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">
        <table className="w-full caption-bottom text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 w-10">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                  checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                  ref={(el) => {
                    if (el) el.indeterminate = selectedRows.size > 0 && selectedRows.size < paginatedData.length;
                  }}
                  onChange={toggleSelectAll}
                />
              </th>
              <th
                className="h-12 px-4 text-left align-middle font-medium text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  Name {getSortIcon("name")}
                </div>
              </th>
              <th
                className="h-12 px-4 text-left align-middle font-medium text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("email")}
              >
                <div className="flex items-center gap-1">
                  Email {getSortIcon("email")}
                </div>
              </th>
              <th
                className="h-12 px-4 text-left align-middle font-medium text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("role")}
              >
                <div className="flex items-center gap-1">
                  Role {getSortIcon("role")}
                </div>
              </th>
              <th
                className="h-12 px-4 text-left align-middle font-medium text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-1">
                  Status {getSortIcon("status")}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {paginatedData.map((user) => (
              <tr
                key={user.id}
                className={`border-b border-gray-200 transition-colors hover:bg-gray-50 ${selectedRows.has(user.id) ? "bg-gray-100" : ""}`}
              >
                <td className="p-4 align-middle w-10">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                    checked={selectedRows.has(user.id)}
                    onChange={() => toggleRowSelection(user.id)}
                  />
                </td>
                <td className="p-4 align-middle font-medium">{user.name}</td>
                <td className="p-4 align-middle">{user.email}</td>
                <td className="p-4 align-middle">{user.role}</td>
                <td className="p-4 align-middle">
                  <span className={getStatusClass(user.status)}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {selectedRows.size} of {data.length} selected
          </span>
          {selectedRows.size > 0 && (
            <button
              className="text-sm text-gray-900 hover:underline"
              onClick={() => setSelectedRows(new Set())}
            >
              Clear selection
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-1">
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeftRight className="w-4 h-4 rotate-180" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-8 w-8 disabled:opacity-50 disabled:cursor-not-allowed"
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Table</h1>
      <p className="text-gray-500 mb-8">
        A data table component with sorting, pagination, and row selection.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock preview={<InteractiveTable />} code={`<div class="overflow-x-auto border border-gray-200 rounded-lg bg-white">
  <table class="w-full caption-bottom text-sm">
    <thead class="border-b border-gray-200 bg-gray-50">
      <tr>
        <th class="h-12 px-4 text-left align-middle font-medium text-gray-500">Name</th>
        <th class="h-12 px-4 text-left align-middle font-medium text-gray-500">Email</th>
        <th class="h-12 px-4 text-left align-middle font-medium text-gray-500">Role</th>
      </tr>
    </thead>
    <tbody class="[&_tr:last-child]:border-0">
      <tr class="border-b border-gray-200 transition-colors hover:bg-gray-50">
        <td class="p-4 align-middle">John Doe</td>
        <td class="p-4 align-middle">john@example.com</td>
        <td class="p-4 align-middle">Admin</td>
      </tr>
    </tbody>
  </table>
</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-500">
          <li>Column sorting (click headers to sort)</li>
          <li>Pagination with page navigation</li>
          <li>Row selection with checkboxes</li>
          <li>Select all / clear selection</li>
          <li>Visual feedback for selected rows</li>
        </ul>
      </section>
    </div>
  );
}
