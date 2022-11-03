<template>
	<div class="baseButton">
		<slot name="default">{{ title }}</slot>
	</div>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			default: "Default Title",
		},
	});
</script>

<style scoped>
	.baseButton {
		border-radius: 10px;
		padding: 0.5rem 1rem;
		border: 2px ridge var(--secondary-color);
		background-color: var(--primary-color);
		color: white;
		font-size: 1rem;
		font-weight: 700;
		text-transform: capitalize;
		transition: background 0.35s ease-in-out;
		transition: box-shadow 0.15s ease-out;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.baseButton:hover {
		background-color: var(--secondary-color);
	}

	.baseButton:active {
		box-shadow: 2px 2px 2px var(--primary-color), 4px 4px 4px rgb(81, 33, 130),
			6px 6px 8px rgb(55, 17, 93), 8px 8px 16px rgb(37, 8, 66);
	}
</style>
