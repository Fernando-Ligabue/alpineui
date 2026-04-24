document.addEventListener('alpine:init', () => {
  Alpine.data('slider', () => ({
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    isDragging: false,

    init() {
      this.min = parseFloat(this.$el.dataset.min || this.min);
      this.max = parseFloat(this.$el.dataset.max || this.max);
      this.step = parseFloat(this.$el.dataset.step || this.step);
      this.value = parseFloat(this.$el.dataset.value || this.value);
      
      this.$nextTick(() => {
        this.updateSlider();
      });
    },

    getPercentage() {
      return ((this.value - this.min) / (this.max - this.min)) * 100;
    },

    updateSlider() {
      const percentage = this.getPercentage();
      const range = this.$el.querySelector('.au-slider-range');
      const thumb = this.$el.querySelector('.au-slider-thumb');
      
      if (range) {
        range.style.width = `${percentage}%`;
      }
      
      if (thumb) {
        thumb.style.left = `${percentage}%`;
      }
    },

    handleInput(event) {
      this.value = parseFloat(event.target.value);
      this.updateSlider();
      this.dispatchChange();
    },

    startDrag(event) {
      if (this.$el.disabled) return;
      
      this.isDragging = true;
      event.preventDefault();
      
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.endDrag);
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.endDrag);
      
      const thumb = this.$el.querySelector('.au-slider-thumb');
      if (thumb) {
        thumb.classList.add('au-slider-thumb-dragging');
      }
    },

    onDrag: (event) => {
      const data = Alpine.store('sliderDrag');
      if (!data?.isDragging) return;
      
      const track = document.querySelector(`[x-data="slider({ value: ${data.value}, min: ${data.min}, max: ${data.max} })"]`);
      if (!track) return;
      
      const rect = track.getBoundingClientRect();
      const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
      const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      
      let newValue = data.min + (percentage * (data.max - data.min));
      newValue = Math.round(newValue / data.step) * data.step;
      newValue = Math.max(data.min, Math.min(data.max, newValue));
      
      data.value = newValue;
      track._x_dataStack[0].value = newValue;
      track._x_dataStack[0].updateSlider();
      
      track.dispatchEvent(new CustomEvent('slider:input', { detail: { value: newValue } }));
    },

    endDrag: () => {
      const data = Alpine.store('sliderDrag');
      if (data) {
        data.isDragging = false;
        data.element?.querySelector('.au-slider-thumb')?.classList.remove('au-slider-thumb-dragging');
      }
      
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.endDrag);
      document.removeEventListener('touchmove', this.onDrag);
      document.removeEventListener('touchend', this.endDrag);
      
      this.dispatchChange();
    },

    dispatchChange() {
      this.$el.dispatchEvent(new CustomEvent('slider:change', { 
        detail: { value: this.value },
        bubbles: true 
      }));
    }
  }));

  Alpine.data('rangeSlider', () => ({
    values: [25, 75],
    min: 0,
    max: 100,
    step: 1,
    isDragging: false,
    activeThumb: null,

    init() {
      const values = this.$el.dataset.values?.split(',').map(Number) || this.values;
      this.values = values;
      this.min = parseFloat(this.$el.dataset.min || this.min);
      this.max = parseFloat(this.$el.dataset.max || this.max);
      this.step = parseFloat(this.$el.dataset.step || this.step);
      
      this.$nextTick(() => this.updateSlider());
    },

    getPercentage(value) {
      return ((value - this.min) / (this.max - this.min)) * 100;
    },

    updateSlider() {
      const range = this.$el.querySelector('.au-slider-range');
      if (range) {
        const start = this.getPercentage(this.values[0]);
        const end = this.getPercentage(this.values[1]);
        range.style.left = `${start}%`;
        range.style.width = `${end - start}%`;
      }
      
      const thumbs = this.$el.querySelectorAll('.au-slider-thumb');
      thumbs.forEach((thumb, index) => {
        thumb.style.left = `${this.getPercentage(this.values[index])}%`;
      });
    },

    startDrag(event, index) {
      if (this.$el.disabled) return;
      
      this.activeThumb = index;
      this.isDragging = true;
      event.preventDefault();
    },

    handleThumbDrag(event, index) {
      if (!this.isDragging || this.activeThumb !== index) return;
      
      const track = this.$el.querySelector('.au-slider');
      if (!track) return;
      
      const rect = track.getBoundingClientRect();
      const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
      let percentage = (clientX - rect.left) / rect.width;
      percentage = Math.max(0, Math.min(1, percentage));
      
      let newValue = this.min + (percentage * (this.max - this.min));
      newValue = Math.round(newValue / this.step) * this.step;
      
      if (index === 0) {
        newValue = Math.min(newValue, this.values[1] - this.step);
      } else {
        newValue = Math.max(newValue, this.values[0] + this.step);
      }
      
      this.values[index] = Math.max(this.min, Math.min(this.max, newValue));
      this.updateSlider();
    },

    endDrag() {
      this.isDragging = false;
      this.activeThumb = null;
      this.dispatchChange();
    },

    dispatchChange() {
      this.$el.dispatchEvent(new CustomEvent('range-slider:change', {
        detail: { values: [...this.values] },
        bubbles: true
      }));
    }
  }));
});