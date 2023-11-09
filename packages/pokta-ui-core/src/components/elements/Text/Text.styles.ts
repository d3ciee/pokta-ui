import PUI from '../../../types';
import { textColor, textSize, textWeight } from './Text.svelte';

const _textColor: Record<Exclude<PUI.Color, PUI.textColor>, string> = {
  default: 'var(--pk-text--color-default)',
  weak: 'var(--pk-text--color-weak)',
  weaker: 'var(--pk-text--color-weaker)',
  weakest: 'var(--pk-text--color-weakest)',
  accent: 'var(--pk-primary-color-500)'
};

export function generateTextStyles({
  size,
  weight,
  color
}: {
  size: textSize;
  weight: textWeight;
  color: textColor;
}): string {
  return `    
    --text--font-size: var(--pk-font-size-${size});
    --text--font-weight: var(--pk-font-weight-${weight});
    --text--color: ${
      Object.keys(_textColor).includes(color) ? _textColor[color] : `var(--pk-${color}-500)`
    } 
    `;
}
