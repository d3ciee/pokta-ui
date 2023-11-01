<script context="module" lang="ts">
  export interface ButtonProps {
    variant: 'default' | 'outline' | 'fill' | 'soft';
    color: PoktaUIColor;
    size: 'sm' | 'md' | 'lg';
    rounded: 'default' | 'full' | 'none';
  }
</script>

<script lang="ts">
  import type { PoktaUIColor } from '../../../types/';
  import generateButtonVars from './Button.styles';

  export let size: ButtonProps['size'] = 'md';
  export let rounded: ButtonProps['rounded'] = 'default';
  export let variant: ButtonProps['variant'] = 'fill';
  export let color: ButtonProps['color'] = 'emerald';

  $: styles = generateButtonVars({ size, rounded, variant, color });
</script>

<button on:click style={styles} class={'button'}><slot /></button>

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

    height: var(--button--height);
    font-size: var(--button--font-size);
    padding-inline: var(--button--padding-inline);
    border-radius: var(--button--border-radius);

    color: var(--button--color);
    background: var(--button--background);
    border: var(--button--border);
    box-shadow: var(--button--box-shadow);
  }
  .button:active {
    transform: translateY(var(--pk-space-xxs));
  }
  .button:hover {
    color: var(--button--hover--color);
    background: var(--button--hover--background);
    border: var(--button--hover--border);
    box-shadow: var(--button--hover--box-shadow);
  }
  .button:active {
    color: var(--button--active--color);
    background: var(--button--active--background);
    border: var(--button--active--border);
    box-shadow: var(--button--active--box-shadow);
  }
</style>
