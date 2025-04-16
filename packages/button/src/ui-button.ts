import './ui-button.scss';

const template = document.createElement('template');
template.innerHTML = `
  <style>@import './ui-button.scss';</style>
  <button part="button" class="ui-button">
    <slot name="icon"></slot>
    <span class="text"><slot name="text"></slot></span>
  </button>
`;

export class UIButton extends HTMLElement {
  static get observedAttributes() {
    // return ['size', 'mode', 'color', 'layout', 'preset-style', 'style-mode', 'style-scr'];
    return ['icon-position', 'layout-mode', 'theme', 'size'];
  }

  private buttonEl!: HTMLButtonElement;
  private iconEl!: HTMLElement;
  private textEl!: HTMLElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    this.buttonEl = shadow.querySelector('button')!;
    this.iconEl = shadow.querySelector('.icon')!;
    this.textEl = shadow.querySelector('.text')!;
  }

  connectedCallback() {
    this.updateAttributes();
    this.observeSlotChanges();
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    this.updateAttributes(name, newValue);
  }

  private updateAttributes(name?: string, newValue?: string) {
    const updates = {
      'icon-position': () => {
        this.buttonEl.setAttribute('icon-position', this.iconPosition);
      },
      'layout-mode': () => {
        this.buttonEl.setAttribute('layout-mode', this.layoutMode);
      },
      theme: () => {
        this.buttonEl.setAttribute('data-theme', this.theme);
      },
      size: () => {
        this.buttonEl.setAttribute('data-size', this.size);
      },
    };

    if (name && name in updates) {
      updates[name as keyof typeof updates]();
    } else {
      // Khởi tạo toàn bộ
      Object.values(updates).forEach(fn => fn());
    }
  }

  private observeSlotChanges() {
    const slot = this.shadowRoot?.querySelector('slot[name="icon"]') as HTMLSlotElement;
    if (!slot) return;

    slot.addEventListener('slotchange', () => {
      const hasIcon = slot.assignedElements().length > 0;
      this.iconEl.hidden = !hasIcon;
    });

    // Khởi tạo trạng thái ban đầu
    const initialIcon = slot.assignedElements().length > 0;
    this.iconEl.hidden = !initialIcon;
  }

  get iconPosition() {
    return this.getAttribute('icon-position') || 'start';
  }

  get layoutMode() {
    return this.getAttribute('layout-mode') || 'horizontal';
  }

  get theme() {
    return this.getAttribute('theme') || 'default';
  }

  get size() {
    return this.getAttribute('size') || 'md';
  }
}

customElements.define('ui-button', UIButton);
