document.addEventListener('alpine:init', () => {
  Alpine.data('table', () => ({
    sortColumn: null,
    sortDirection: 'asc',
    selectedRows: new Set(),
    selectAll: false,

    init() {
      this.$nextTick(() => {
        this.initSelectAll();
      });
    },

    initSelectAll() {
      const selectAllCheckbox = this.$el.querySelector('thead input[type="checkbox"]');
      if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', (e) => {
          if (e.target.checked) {
            this.selectAllRows();
          } else {
            this.deselectAllRows();
          }
        });
      }
    },

    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
      this.updateSortIndicators();
    },

    toggleSort(column) {
      this.sortBy(column);
    },

    isSorted(column) {
      return this.sortColumn === column;
    },

    getSortIcon(column) {
      if (this.sortColumn !== column) {
        return '↕';
      }
      return this.sortDirection === 'asc' ? '↑' : '↓';
    },

    updateSortIndicators() {
      const headers = this.$el.querySelectorAll('th[data-sortable="true"]');
      headers.forEach(header => {
        const col = header.dataset.column;
        if (col === this.sortColumn) {
          header.setAttribute('data-sorted', 'true');
        } else {
          header.removeAttribute('data-sorted');
        }
      });
    },

    toggleRowSelection(row) {
      const id = row.id || JSON.stringify(row);
      if (this.selectedRows.has(id)) {
        this.selectedRows.delete(id);
      } else {
        this.selectedRows.add(id);
      }
      this.updateSelectAllState();
    },

    selectAllRows(rows = null) {
      const rowsToSelect = rows || Array.from(this.$el.querySelectorAll('tbody tr'));
      rowsToSelect.forEach(row => {
        const data = JSON.parse(row.dataset.row || '{}');
        const id = data.id || JSON.stringify(data);
        this.selectedRows.add(id);
      });
      this.selectAll = true;
    },

    deselectAllRows() {
      this.selectedRows.clear();
      this.selectAll = false;
    },

    isSelected(row) {
      const id = row.id || JSON.stringify(row);
      return this.selectedRows.has(id);
    },

    updateSelectAllState() {
      const checkboxes = this.$el.querySelectorAll('tbody input[type="checkbox"]');
      const selectAllCheckbox = this.$el.querySelector('thead input[type="checkbox"]');
      
      if (checkboxes.length > 0) {
        const allSelected = Array.from(checkboxes).every(cb => cb.checked);
        const someSelected = Array.from(checkboxes).some(cb => cb.checked);
        
        if (selectAllCheckbox) {
          selectAllCheckbox.checked = allSelected;
          selectAllCheckbox.indeterminate = someSelected && !allSelected;
        }
      }
    }
  }));

  Alpine.data('dataTable', () => ({
    data: [],
    filteredData: [],
    currentPage: 1,
    pageSize: 10,
    sortColumn: null,
    sortDirection: 'asc',
    selectedRows: new Set(),
    searchQuery: '',

    init() {
      const initialData = this.$el.dataset.items ? JSON.parse(this.$el.dataset.items) : [];
      this.data = initialData;
      this.filteredData = [...this.data];
      
      this.$watch('searchQuery', () => {
        this.applyFilters();
      });
    },

    get totalPages() {
      return Math.ceil(this.filteredData.length / this.pageSize);
    },

    get startIndex() {
      return (this.currentPage - 1) * this.pageSize;
    },

    get endIndex() {
      return Math.min(this.startIndex + this.pageSize, this.filteredData.length);
    },

    get paginatedData() {
      return this.filteredData.slice(this.startIndex, this.endIndex);
    },

    get selectedCount() {
      return this.selectedRows.size;
    },

    get totalCount() {
      return this.filteredData.length;
    },

    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    setPageSize(size) {
      this.pageSize = parseInt(size);
      this.currentPage = 1;
    },

    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
      this.applyFilters();
    },

    search(query) {
      this.searchQuery = query;
    },

    applyFilters() {
      let result = [...this.data];
      
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        result = result.filter(item => {
          return Object.values(item).some(val => 
            String(val).toLowerCase().includes(query)
          );
        });
      }
      
      if (this.sortColumn) {
        result.sort((a, b) => {
          const aVal = a[this.sortColumn];
          const bVal = b[this.sortColumn];
          
          if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
          if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
          return 0;
        });
      }
      
      this.filteredData = result;
      this.currentPage = 1;
    },

    toggleRowSelection(item) {
      const id = item.id || JSON.stringify(item);
      if (this.selectedRows.has(id)) {
        this.selectedRows.delete(id);
      } else {
        this.selectedRows.add(id);
      }
    },

    selectAll() {
      this.paginatedData.forEach(item => {
        const id = item.id || JSON.stringify(item);
        this.selectedRows.add(id);
      });
    },

    deselectAll() {
      this.selectedRows.clear();
    },

    isSelected(item) {
      const id = item.id || JSON.stringify(item);
      return this.selectedRows.has(id);
    }
  }));
});