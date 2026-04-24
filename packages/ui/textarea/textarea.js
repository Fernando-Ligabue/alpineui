document.addEventListener('alpine:init', () => {
  Alpine.data('textarea', () => ({
    value: '',
    charCount: 0,
    maxLength: 0,

    init() {
      const textarea = this.$el.querySelector('textarea');
      if (textarea) {
        this.value = textarea.value;
        this.charCount = this.value.length;
        this.maxLength = parseInt(textarea.maxLength) || 0;
      }
      
      if (this.$el.dataset.autoResize === 'true') {
        this.$nextTick(() => this.autoResize());
      }
    },

    updateCharCount() {
      const textarea = this.$el.querySelector('textarea');
      if (textarea) {
        this.charCount = textarea.value.length;
      }
    },

    autoResize() {
      const textarea = this.$el.querySelector('textarea');
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
    },

    dispatchInput() {
      this.$el.dispatchEvent(new CustomEvent('textarea:input', {
        detail: { value: this.value },
        bubbles: true
      }));
    }
  }));
});