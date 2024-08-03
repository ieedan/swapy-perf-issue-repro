<script lang="ts">
	import { createSwapy } from 'swapy';
	import { onMount } from 'svelte';
	import { data } from '$lib/data';
	import BigComponent from '$lib/BigComponent.svelte';

	let container: HTMLDivElement;

	onMount(() => {
		// container is always defined
		const swapy = createSwapy(container, {
			animation: 'dynamic'
		});

		swapy.onSwap(({}) => {
			// ...
		});
	});
</script>

<main class="h-svh w-full relative">
	<div class="p-2 w-full h-full grid grid-cols-3 gap-2 grid-rows-1" bind:this={container}>
		<div
			class="h-full bg-gray-100 data-[swapy-highlighted]:bg-gray-200 rounded-md relative"
			data-swapy-slot="1"
		>
			<div
				data-swapy-item="a"
				class="bg-blue-500 h-full rounded-md flex place-items-center justify-center"
			>
				<div class="flex flex-col">
					{#each data as data}
						<BigComponent {data} />
					{/each}
				</div>
			</div>
		</div>
		<div
			class="h-full bg-gray-100 data-[swapy-highlighted]:bg-gray-200 rounded-md relative"
			data-swapy-slot="2"
		>
			<div
				data-swapy-item="b"
				class="bg-red-500 h-full rounded-md flex place-items-center justify-center"
			>
				<div class="flex flex-col">
					{#each data as data}
						<BigComponent {data} />
					{/each}
				</div>
			</div>
		</div>
		<div
			class="h-full bg-gray-100 data-[swapy-highlighted]:bg-gray-200 rounded-md relative"
			data-swapy-slot="3"
		>
			<div
				data-swapy-item="c"
				class="bg-green-500 h-full rounded-md flex place-items-center justify-center"
			>
				<div class="flex flex-col">
					{#each data as data}
						<BigComponent {data} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>
