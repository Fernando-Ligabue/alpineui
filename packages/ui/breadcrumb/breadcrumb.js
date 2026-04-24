document.addEventListener('alpine:init', () => {
  Alpine.data('breadcrumb', () => ({
    items: [],
    separator: '/',

    init() {
      const itemsData = this.$el.dataset.items;
      if (itemsData) {
        try {
          this.items = JSON.parse(itemsData);
        } catch (e) {
          this.items = [];
        }
      }
      
      this.separator = this.$el.dataset.separator || '/';
    },

    isLast(index) {
      return index === this.items.length - 1;
    },

    getSeparator() {
      if (this.separator === 'chevron') {
        return '›';
      }
      return this.separator;
    }
  }));

  Alpine.data('breadcrumbNav', () => ({
    currentPath: '',
    items: [],

    init() {
      this.currentPath = window.location.pathname;
      this.buildFromPath();
    },

    buildFromPath() {
      const segments = this.currentPath.split('/').filter(Boolean);
      let path = '';
      
      this.items = segments.map((segment, index) => {
        path += '/' + segment;
        const label = this.formatSegment(segment);
        return {
          label,
          href: path,
          isLast: index === segments.length - 1
        };
      });
    },

    formatSegment(segment) {
      return segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, letter => letter.toUpperCase());
    },

    isActive(item) {
      return item.href === this.currentPath;
    },

    getSeparator() {
      return '/';
    }
  }));
});