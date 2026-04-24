document.addEventListener('alpine:init', () => {
  Alpine.data('dropdown', () => ({
    open: false,

    init() {
      this.open = this.$el.dataset.open === 'true';
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.open) {
          this.close();
        }
      });
    },

    toggle() {
      this.open = !this.open;
    },

    close() {
      this.open = false;
    },

    closeOnClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.close();
      }
    }
  }));

  Alpine.data('dropdownItem', () => ({
    disabled: false,

    init() {
      this.disabled = this.$el.hasAttribute('disabled') || this.$el.classList.contains('disabled');
    }
  }));
});