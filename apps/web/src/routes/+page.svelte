<script lang="ts">
	import { Button } from 'pokta-ui-core';
	import type { ButtonProps } from 'pokta-ui-core';
	const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg'];
	const radii: ButtonProps['rounded'][] = ['none', 'default', 'full'];
	const colors: ButtonProps['color'][] = ['red', 'cool-gray', 'orange', 'indigo'];
	const variants: ButtonProps['variant'][] = ['default', 'soft', 'outline', 'fill'];
</script>

<h1>Buttons</h1>
<h2>Sizes</h2>
<div>
	{#each sizes as size}
		<Button {size}>{size.toUpperCase()}</Button>
	{/each}
</div>
<h2>Border Radii</h2>
<div>
	{#each radii as radius}
		<Button rounded={radius}>{radius}</Button>
	{/each}
</div>
<h2>Variants & Colors</h2>
{#each variants as variant}
	<h3>
		{variant}:
	</h3>
	<span>
		{#each colors as color}
			<Button {variant} {color}>{color}</Button>
		{/each}
	</span>
{/each}

<style>
	div,
	span {
		display: flex;
		gap: var(--pk-space-sm);
	}
</style>
