document.addEventListener('alpine:init', () => {
  Alpine.data('dialog', () => ({
    open: false,

    init() {
      this.open = this.$el.dataset.open === 'true';
    },

    toggle() {
      this.open = !this.open;
    },

    close() {
      this.open = false;
    },

    closeOnEscape(e) {
      if (e.key === 'Escape' && this.open) {
        this.close();
      }
    }
  }));

  Alpine.data('dialogPanel', () => ({
    open: false,

    init() {
      this.open = !!this.$el.querySelector('[x-show="open"]');
    }
  }));
});