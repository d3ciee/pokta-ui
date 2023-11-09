<script lang="ts" context="module">
  import type PoktaUI from '../../../types';

  export type textSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type textWeight = 'light' | 'regular' | 'medium' | 'strong';
  export type textColor = 'default' | 'weak' | 'weaker' | 'weakest' | 'accent' | PoktaUI.Color;
  export type textAs = 'span' | 'label' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
</script>

<script lang="ts">
  import { generateTextStyles } from './Text.styles';

  export let size: textSize = 'md';
  export let weight: textWeight = 'regular';
  export let color: textColor = 'default';
  export let as: textAs = 'span';

  $: style = generateTextStyles({ size, weight, color });
</script>

<svelte:element
  this={as}
  {style}
  class={`
        ${$$props.class}
        text
    `}
>
  <slot />
</svelte:element>

<style>
  .text {
    --pk-text--color-default: var(--pk-true-gray-900);
    --pk-text--color-weak: var(--pk-true-gray-700);
    --pk-text--color-weaker: var(--pk-true-gray-600);
    --pk-text--color-weakest: var(--pk-true-gray-500);
    --pk-text--color-accent: var(--pk-text--color-accent);

    color: var(--text--color);
    font-family: Inter;
    font-weight: var(--text--font-weight);
    font-size: var(--text--font-size);
  }
</style>
