<script lang="ts">
	import { Button } from 'pokta-ui-core';
	import type { ButtonProps } from 'pokta-ui-core';
	const colors: ButtonProps['color'][] = ['teal', 'cool-gray', 'orange', 'violet'];
	const variants: ButtonProps['variant'][] = ['default', 'soft', 'outline', 'fill'];
</script>

<h1>Buttons</h1>
<h2>Sizes</h2>
<div>
	<Button size="sm">I am SM</Button>
	<Button size="md">I am MD</Button>
	<Button size="lg">I am LG</Button>
</div>
<h2>Variants</h2>
{#each variants as variant}
	<h3>
		{variant}:
	</h3>
	<span>
		{#each colors as color}
			<Button {variant} {color}>I am {color}</Button>
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
