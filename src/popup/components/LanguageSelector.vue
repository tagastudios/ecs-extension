<template>
	<ul class="flex align-center">
		<p class="mr-1">Language selector:</p>

		<li
			:class="`lang-selector ${lang === 'esp' ? 'active' : ''}`"
			@click="$emit('update-lang', 'esp')"
		>
			Espanol
		</li>
		<span class="px-1">/</span>
		<li
			:class="`lang-selector ${lang === 'eng' ? 'active' : ''}`"
			@click="$emit('update-lang', 'eng')"
		>
			English
		</li>
	</ul>
</template>

<script setup>
import { defineComponent } from "@vue/runtime-core";

defineComponent({
	emits: ["update-lang"],
});

defineProps({
	lang: String,
});
</script>

<style scoped>
li {
	cursor: pointer;
	transition: all 0.35s ease-in-out;
}

li:hover {
	text-decoration: underline;
}
</style>
