document.addEventListener('alpine:init', () => {
  Alpine.data('input', (config = {}) => ({
    value: '',
    error: '',
    touched: false,
    focused: false,
    isLoading: false,

    ...config,

    init() {
      this.value = this.$el.value || this.$el.dataset.value || '';
      this.$el.dataset.touched = 'false';
    },

    get isDisabled() {
      return this.$el.disabled || this.$el.hasAttribute('disabled');
    },

    get isReadonly() {
      return this.$el.readOnly || this.$el.hasAttribute('readonly');
    },

    get isError() {
      return this.error && this.touched;
    },

    get isSuccess() {
      return !this.error && this.touched && this.value;
    },

    get isFocused() {
      return this.focused;
    },

    onInput(event) {
      this.value = event.target.value;
      this.validate();
      this.$dispatch('input', { value: this.value });
    },

    onFocus() {
      this.focused = true;
      this.$dispatch('focus');
    },

    onBlur() {
      this.focused = false;
      this.touched = true;
      this.validate();
      this.$dispatch('blur');
    },

    onKeydown(event) {
      this.$dispatch('keydown', { event });
    },

    validate() {
      this.error = '';

      const el = this.$el;
      const value = el.value;

      if (el.required && !value) {
        this.error = el.dataset.requiredMessage || 'This field is required';
        return false;
      }

      if (el.minLength && value.length < el.minLength) {
        this.error = el.dataset.minlengthMessage || `Minimum ${el.minLength} characters required`;
        return false;
      }

      if (el.maxLength && value.length > el.maxLength) {
        this.error = el.dataset.maxlengthMessage || `Maximum ${el.maxLength} characters allowed`;
        return false;
      }

      if (el.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          this.error = el.dataset.emailMessage || 'Please enter a valid email address';
          return false;
        }
      }

      if (el.type === 'url' && value) {
        try {
          new URL(value);
        } catch {
          this.error = el.dataset.urlMessage || 'Please enter a valid URL';
          return false;
        }
      }

      if (el.min !== undefined && value !== '' && Number(value) < Number(el.min)) {
        this.error = el.dataset.minMessage || `Minimum value is ${el.min}`;
        return false;
      }

      if (el.max !== undefined && value !== '' && Number(value) > Number(el.max)) {
        this.error = el.dataset.maxMessage || `Maximum value is ${el.max}`;
        return false;
      }

      if (el.pattern && value) {
        const regex = new RegExp(el.pattern);
        if (!regex.test(value)) {
          this.error = el.dataset.patternMessage || 'Invalid format';
          return false;
        }
      }

      return true;
    },

    reset() {
      this.value = '';
      this.error = '';
      this.touched = false;
      this.focused = false;
      if (this.$el.tagName === 'TEXTAREA') {
        this.$el.value = '';
      }
      this.$dispatch('reset');
    },

    focus() {
      this.$el.focus();
    },

    blur() {
      this.$el.blur();
    },

    setError(message) {
      this.error = message;
      this.touched = true;
    },

    clearError() {
      this.error = '';
    }
  }));

  Alpine.data('inputGroup', () => ({
    selectedValue: '',
    isOpen: false,

    init() {
      const checked = this.$el.querySelector('input[type="radio"]:checked');
      if (checked) {
        this.selectedValue = checked.value;
      }
    },

    select(value) {
      this.selectedValue = value;
      const input = this.$el.querySelector(`input[value="${value}"]`);
      if (input) {
        input.checked = true;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
      this.isOpen = false;
    }
  }));
});
