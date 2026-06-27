(() => {
  const icons = {
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    'arrow-left': '<svg viewBox="0 0 24 24"><path d="M19 12H5m7-7-7 7 7 7"/></svg>',
    'chevron-left': '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
    'chevron-right': '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
    headphones: '<svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3zM3 19a2 2 0 0 0 2 2h1v-7H3z"/></svg>',
    mic: '<svg viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5"/></svg>',
    send: '<svg viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/></svg>',
    alert: '<svg viewBox="0 0 24 24"><path d="M12 9v4m0 4h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>',
    default: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>'
  };
  const style = document.createElement('style');
  style.textContent = 'iconify-icon{display:inline-flex;width:1em;height:1em;vertical-align:-.125em}iconify-icon svg{width:1em;height:1em;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}';
  document.head.appendChild(style);
  customElements.define('iconify-icon', class extends HTMLElement {
    connectedCallback() {
      const icon = (this.getAttribute('icon') || '').split(':').pop();
      this.innerHTML = icons[icon] || icons[icon?.replace(/-.*/, '')] || icons.default;
    }
  });
})();