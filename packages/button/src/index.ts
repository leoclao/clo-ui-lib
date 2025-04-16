import { UIButton } from './ui-button';

if (!customElements.get('ui-button')) {
  customElements.define('ui-button', UIButton);
}
