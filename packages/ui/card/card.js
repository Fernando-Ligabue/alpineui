document.addEventListener('alpine:init', () => {
  Alpine.data('card', () => ({
    loading: false,
    interactive: false,
    selected: false,

    init() {
      this.interactive = this.$el.classList.contains('au-card-interactive');
    },

    select() {
      if (!this.interactive) return;
      this.selected = !this.selected;
    }
  }));

  Alpine.data('cardAction', () => ({
    open: false,

    toggle() {
      this.open = !this.open;
    },

    close() {
      this.open = false;
    }
  }));
});
