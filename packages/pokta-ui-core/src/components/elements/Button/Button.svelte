<script context="module" lang="ts">
  export interface ButtonProps {
    variant: 'default' | 'outline' | 'fill' | 'soft';
    color: PoktaUIColor;
    size: 'sm' | 'md' | 'lg';
    rounded: boolean;
  }
</script>

<script lang="ts">
  import type { PoktaUIColor } from '../../../types/';

  export let size: ButtonProps['size'] = 'md';
  export let rounded: ButtonProps['rounded'] = false;
  export let variant: ButtonProps['variant'] = 'fill';
  export let color: ButtonProps['color'] = 'green';

  $: classes = `
    button
    button--size-${size}
    button--color-${color}
    button--variant-${variant}
    ${rounded && 'button--rounded'}
    `;

  $: styles = `
    --button--color-100:var(--pk-${color}-100);
    --button--color-200:var(--pk-${color}-200);
    --button--color-300:var(--pk-${color}-300);
    --button--color-400:var(--pk-${color}-400);
    --button--color-500:var(--pk-${color}-500);
    --button--color-600:var(--pk-${color}-600);
    --button--color-700:var(--pk-${color}-700);
    
    `;
</script>

<button on:click style={styles} class={classes}><slot /></button>

<style>
  .button {
    font-weight: var(--pk-font-weight-normal);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--pk-border-radius-md);
    font-family: var(--pk-font-family);
    transition: all var(--transition-time-blazingly-fast) ease-in-out;
    cursor: pointer;
  }
  .button:active {
    transform: translateY(var(--pk-space-xxs));
  }

  .button--size-sm {
    height: var(--pk-size-lg);
    font-size: var(--pk-font-size-xs);
    padding-inline: var(--pk-space-sm);
  }
  .button--size-md {
    height: var(--pk-size-xl);
    font-size: var(--pk-font-size-sm);
    padding-inline: var(--pk-space-md);
    line-height: var(--pk-line-height-md);
  }
  .button--size-lg {
    height: calc(var(--pk-size-xxl) - var(--pk-size-xs));
    font-size: var(--pk-font-size-sm);
    padding-inline: var(--pk-space-lg);
  }

  .button--rounded {
    border-radius: var(--pk-border-radius-xl);
  }

  .button--variant-fill {
    background: var(--button--color-500);
    color: white;
    border: 1px solid var(--button--color-500);
    box-shadow: var(--pk-box-shadow-xs);
  }
  .button--variant-fill:hover {
    background: var(--button--color-600);
    border: 1px solid var(--button--color-600);
    box-shadow: var(--pk-box-shadow-sm);
  }
  .button--variant-fill:active {
    background: var(--button--color-700);
    border: 1px solid var(--button--color-700);
  }

  .button--variant-default {
    background: transparent;
    border: 1px solid transparent;
    color: var(--button--color-500);
  }
  .button--variant-default:hover {
    background: var(--button--color-100);
    border: 1px solid var(--button--color-100);
  }
  .button--variant-default:active {
    background: var(--button--color-200);
    border: 1px solid var(--button--color-200);
  }

  .button--variant-outline {
    background: transparent;
    color: var(--button--color-600);
    border: 1px solid var(--button--color-500);
  }
  .button--variant-outline:hover {
    background: var(--button--color-100);
    border: 1px solid var(--button--color-600);
  }
  .button--variant-outline:active {
    background: var(--button--color-200);
    border: 1px solid var(--button--color-700);
  }

  .button--variant-soft {
    background: var(--button--color-100);
    color: var(--button--color-600);
    border: 1px solid var(--button--color-100);
  }
  .button--variant-soft:hover {
    background: var(--button--color-200);
    border: 1px solid var(--button--color-200);
  }
  .button--variant-soft:active {
    background: var(--button--color-300);
    border: 1px solid var(--button--color-300);
  }
</style>
