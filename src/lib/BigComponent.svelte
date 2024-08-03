<script lang="ts">
	import type { Data } from "./data";

	export let data: Data;
</script>

<div>
	<p>
		{#if data.country}
			{data.country} -
			{#if data.state}
				{data.state} -
				{#if data.city}
					{data.city} -
				{/if}
			{/if}
		{/if}
        {data.name}
	</p>
	<div
		id="/dashboard/data/{data.id}"
		class=""
	>
		<div class="flex place-items-center justify-between">
			<div class="flex flex-col gap-1 sm:flex-row sm:place-items-center sm:gap-2">
                <h6>{data.title}</h6>
				<div class="flex place-items-center gap-2">
					<span>{data.priority}</span>
				</div>
			</div>
			<div>
                <p>
                    Created at {data.createdAt}    
                </p>
			</div>
		</div>
		<div class="flex place-items-center gap-2">
			<p>
                Due {data.dueAt}
            </p>
			{#if data.tasks.length > 0}
				<p color="secondary">
					{#if data.tasks.findIndex((a) => !a.completed) == -1}
						{data.tasks.length} tasks done
					{:else}
						{data.tasks.filter((a) => a.completed).length} of {data.tasks.length} tasks
					{/if}
				</p>
			{/if}
		</div>
		{#if Date.parse(data.dueAt.toString()) < Date.now()}
			<div class="absolute -right-1 -top-1">
				<span class="group relative flex h-3 w-3">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full
                bg-red-500 opacity-75 dark:bg-red-500"
					></span>
					<span class="relative inline-flex h-3 w-3 rounded-full bg-red-500 dark:bg-red-500"></span>
				</span>
			</div>
		{/if}
	</div>
</div>
