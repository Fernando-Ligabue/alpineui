document.addEventListener('alpine:init', () => {
  Alpine.data('navigationMenu', () => ({
    activeItem: null,
    openItem: null,
    
    init() {
      const active = this.$el.dataset.active;
      if (active) {
        this.activeItem = active;
      }
      
      this.setupTriggers();
      
      document.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.closeAll();
        }
      });
    },

    setupTriggers() {
      const triggers = this.$el.querySelectorAll('[data-nav-trigger]');
      triggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
          const item = trigger.dataset.navTrigger;
          this.open(item);
        });
      });
    },

    setActive(item) {
      this.activeItem = item;
      this.closeAll();
    },

    open(item) {
      this.openItem = item;
      const content = this.$el.querySelector(`[data-nav-content="${item}"]`);
      if (content) {
        content.classList.add('au-navigation-menu-content-open');
      }
      const trigger = this.$el.querySelector(`[data-nav-trigger="${item}"]`);
      if (trigger) {
        trigger.classList.add('au-navigation-menu-trigger-open');
      }
    },

    close(item = null) {
      if (item) {
        const content = this.$el.querySelector(`[data-nav-content="${item}"]`);
        if (content) {
          content.classList.remove('au-navigation-menu-content-open');
        }
        const trigger = this.$el.querySelector(`[data-nav-trigger="${item}"]`);
        if (trigger) {
          trigger.classList.remove('au-navigation-menu-trigger-open');
        }
        if (this.openItem === item) {
          this.openItem = null;
        }
      }
    },

    closeAll() {
      const contents = this.$el.querySelectorAll('.au-navigation-menu-content-open');
      contents.forEach(content => {
        content.classList.remove('au-navigation-menu-content-open');
      });
      const triggers = this.$el.querySelectorAll('.au-navigation-menu-trigger-open');
      triggers.forEach(trigger => {
        trigger.classList.remove('au-navigation-menu-trigger-open');
      });
      this.openItem = null;
    },

    isOpen(item) {
      return this.openItem === item;
    },

    isActive(item) {
      return this.activeItem === item;
    }
  }));

  Alpine.data('navigationMenuItem', () => ({
    label: '',
    href: '#',
    disabled: false,

    init() {
      this.label = this.$el.dataset.label || '';
      this.href = this.$el.dataset.href || '#';
      this.disabled = this.$el.hasAttribute('data-disabled');
    },

    handleClick() {
      if (this.disabled) return;
      this.$el.dispatchEvent(new CustomEvent('nav:select', {
        detail: { href: this.href },
        bubbles: true
      }));
    }
  }));

  Alpine.data('navigationMenuTrigger', () => ({
    isOpen: false,
    item: '',

    init() {
      this.item = this.$el.dataset.item || '';
    },

    open() {
      this.isOpen = true;
      this.$el.classList.add('au-navigation-menu-trigger-open');
      
      const menu = this.$el.closest('[x-data="navigationMenu"]');
      if (menu && menu._x_dataStack) {
        menu._x_dataStack[0].open(this.item);
      }
    },

    close() {
      this.isOpen = false;
      this.$el.classList.remove('au-navigation-menu-trigger-open');
      
      const menu = this.$el.closest('[x-data="navigationMenu"]');
      if (menu && menu._x_dataStack) {
        menu._x_dataStack[0].close(this.item);
      }
    },

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }));
});