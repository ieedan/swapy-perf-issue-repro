# The Fix

In [v0.1.1](https://github.com/TahaSh/swapy/releases/tag/v0.1.1) a `data-swapy-exclude` attribute was added to improve performance on large child items.

```svelte
<!-- Added `data-swapy-exclude` to list parent -->

<div class="..." data-swapy-exclude>
	{#each data as data}
		<BigComponent {data} />
	{/each}
</div>
```

You can see the performance gains for yourself:

```bash
npm install

npm run dev
```

Thank you to [TahaSh](https://github.com/TahaSh) for the fix.