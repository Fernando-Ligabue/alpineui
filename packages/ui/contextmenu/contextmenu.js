document.addEventListener('alpine:init', () => {
  Alpine.data('contextMenu', () => ({
    isOpen: false,
    position: { x: 0, y: 0 },
    menuElement: null,

    init() {
      this.menuElement = this.$el.querySelector('.au-context-menu');
      this.setupEventListeners();
    },

    setupEventListeners() {
      this.$el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        this.open(e);
      });

      document.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.close();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
    },

    open(event) {
      const x = event.clientX;
      const y = event.clientY;
      
      const menuWidth = 192;
      const menuHeight = this.menuElement?.offsetHeight || 200;
      
      let posX = x;
      let posY = y;
      
      if (x + menuWidth > window.innerWidth) {
        posX = x - menuWidth;
      }
      
      if (y + menuHeight > window.innerHeight) {
        posY = y - menuHeight;
      }
      
      this.position = { x: posX, y: posY };
      this.isOpen = true;
      
      this.$nextTick(() => {
        if (this.menuElement) {
          this.menuElement.style.left = `${this.position.x}px`;
          this.menuElement.style.top = `${this.position.y}px`;
        }
      });
    },

    close() {
      this.isOpen = false;
    },

    handleItemClick(callback) {
      if (typeof callback === 'function') {
        callback();
      }
      this.close();
    }
  }));

  Alpine.data('contextMenuItem', () => ({
    disabled: false,
    danger: false,
    shortcut: '',
    icon: '',

    init() {
      this.disabled = this.$el.hasAttribute('data-disabled') || 
                      this.$el.dataset.disabled === 'true';
      this.danger = this.$el.dataset.danger === 'true';
      this.shortcut = this.$el.dataset.shortcut || '';
      this.icon = this.$el.dataset.icon || '';
    },

    handleClick() {
      if (this.disabled) return;
      
      const action = this.$el.dataset.action;
      if (action) {
        this.$el.dispatchEvent(new CustomEvent('context-menu:action', {
          detail: { action },
          bubbles: true
        }));
      }
      
      const menu = this.$el.closest('.au-context-menu');
      if (menu) {
        menu.dispatchEvent(new CustomEvent('context-menu:close'));
      }
    }
  }));
});