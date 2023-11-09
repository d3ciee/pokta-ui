<script context="module" lang="ts">
  export interface ButtonProps {
    variant: 'default' | 'outline' | 'fill' | 'soft';
    color: PoktaUIColor;
    size: 'sm' | 'md' | 'lg';
    rounded: 'default' | 'full' | 'none';
    loading: boolean;
    disabled: boolean;
  }
</script>

<script lang="ts">
  import Spinner from '../Spinner';
  import type { PoktaUIColor } from '../../../types/';
  import generateButtonStyles from './Button.styles';

  export let size: ButtonProps['size'] = 'md';
  export let loading: ButtonProps['loading'] = false;
  export let disabled: ButtonProps['disabled'] = loading || false;
  export let rounded: ButtonProps['rounded'] = 'default';
  export let variant: ButtonProps['variant'] = 'fill';
  export let color: ButtonProps['color'] = 'emerald';

  $: styles = generateButtonStyles({ size, rounded, variant, color });
</script>

<button {disabled} on:click style={styles} class={'button'}>
  {#if loading}
    <Spinner track size={16} />
  {/if}
  <span>
    <slot />
  </span>
</button>

<style>
  .button {
    font-weight: var(--pk-font-weight-normal);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--pk-border-radius-md);
    font-family: var(--pk-font-family);
    cursor: pointer;

    gap: var(--pk-space-sm);

    height: var(--button--height);
    font-size: var(--button--font-size);
    padding-inline: var(--button--padding-inline);
    /* line-height: var(--button--line-height); */

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
  .button:disabled {
    color: var(--button--disabled--color);
    background: var(--button--disabled--background);
    border: var(--button--disabled--border);
    box-shadow: var(--button--disabled--box-shadow);
    cursor: not-allowed;
  }
</style>
