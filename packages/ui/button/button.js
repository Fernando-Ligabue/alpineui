document.addEventListener('alpine:init', () => {
  Alpine.data('button', () => ({
    loading: false,
    disabled: false,

    init() {
      this.disabled = this.$el.disabled || this.$el.hasAttribute('disabled');
    },

    async handleClick(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        return;
      }

      const action = this.$el.dataset.action;
      if (!action) return;

      this.loading = true;

      try {
        await this.$dispatch('button:click', { action, event });
      } finally {
        this.loading = false;
      }
    }
  }));

  Alpine.data('buttonGroup', () => ({
    activeValue: null,

    init() {
      const checked = this.$el.querySelector('input[type="radio"]:checked');
      if (checked) {
        this.activeValue = checked.value;
      }
    },

    select(value) {
      this.activeValue = value;
      const input = this.$el.querySelector(`input[value="${value}"]`);
      if (input) {
        input.checked = true;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  }));
});
