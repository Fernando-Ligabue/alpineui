document.addEventListener('alpine:init', () => {
  Alpine.data('pagination', () => ({
    currentPage: 1,
    totalPages: 1,
    pageSize: 10,
    totalItems: 0,
    siblingCount: 1,

    init() {
      this.totalPages = parseInt(this.$el.dataset.totalPages || 1);
      this.pageSize = parseInt(this.$el.dataset.pageSize || 10);
      this.totalItems = parseInt(this.$el.dataset.totalItems || 0);
      this.siblingCount = parseInt(this.$el.dataset.siblingCount || 1);
      
      this.$watch('currentPage', () => {
        this.dispatchChange();
      });
    },

    get startIndex() {
      return (this.currentPage - 1) * this.pageSize + 1;
    },

    get endIndex() {
      return Math.min(this.currentPage * this.pageSize, this.totalItems);
    },

    get pages() {
      const totalPageNumbers = this.siblingCount * 2 + 5;
      
      if (this.totalPages <= totalPageNumbers) {
        return this.range(1, this.totalPages);
      }
      
      const leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1);
      const rightSiblingIndex = Math.min(this.currentPage + this.siblingCount, this.totalPages);
      
      const showLeftDots = leftSiblingIndex > 2;
      const showRightDots = rightSiblingIndex < this.totalPages - 1;
      
      if (!showLeftDots && showRightDots) {
        const leftRange = this.range(1, 3 + this.siblingCount * 2);
        return [...leftRange, '...', this.totalPages];
      }
      
      if (showLeftDots && !showRightDots) {
        const rightRange = this.range(this.totalPages - (3 + this.siblingCount * 2), this.totalPages);
        return [1, '...', ...rightRange];
      }
      
      const middleRange = this.range(leftSiblingIndex, rightSiblingIndex);
      return [1, '...', ...middleRange, '...', this.totalPages];
    },

    get hasPrevious() {
      return this.currentPage > 1;
    },

    get hasNext() {
      return this.currentPage < this.totalPages;
    },

    get hasFirst() {
      return this.currentPage > 1;
    },

    get hasLast() {
      return this.currentPage < this.totalPages;
    },

    range(start, end) {
      const length = end - start + 1;
      return Array.from({ length }, (_, i) => start + i);
    },

    goTo(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    next() {
      if (this.hasNext) {
        this.currentPage++;
      }
    },

    prev() {
      if (this.hasPrevious) {
        this.currentPage--;
      }
    },

    first() {
      this.currentPage = 1;
    },

    last() {
      this.currentPage = this.totalPages;
    },

    dispatchChange() {
      this.$el.dispatchEvent(new CustomEvent('pagination:change', {
        detail: {
          page: this.currentPage,
          pageSize: this.pageSize
        },
        bubbles: true
      }));
    }
  }));

  Alpine.data('pager', () => ({
    currentPage: 1,
    totalPages: 1,

    init() {
      this.totalPages = parseInt(this.$el.dataset.totalPages || 1);
    },

    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },

    next() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    prev() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }));
});