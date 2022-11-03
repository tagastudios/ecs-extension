<script setup>
import BaseButton from "./components/Button.vue";
import LanguageSelector from "./components/LanguageSelector.vue";
import ScreeningQuestions from "./components/ScreeningQuestions.vue";
import CallCounter from "./components/CallCounter.vue";
// import { PrismaClient } from "@prisma/client";
import { ref } from "vue";

const lang = ref("eng");
const localStorate = Number(window.localStorage.getItem("easy-call-count"));
const callCount = ref(isNaN(localStorate) ? 0 : localStorate);
const goal = 200;

// const prisma = new PrismaClient();
// https://americavotes.call.scaletowin.com/t?=172715c2-3567-4016-9e9d-3256316c7214

const questions = {
	esp: {
		text: [
			"Estaba haciendo una encuesta a ver si me ayuda?",
			"Cual es su principal preocupacion",
			"Yadira Caraveo",
			"Jena Griswald",
		],
		audio: ["espQ1.m4a", "espQ2.m4a", "espQ3.m4a", "espQ4.m4a", "espQ5.m4a"],
	},
	eng: {
		text: [
			`I'm doing a short survey, can you help?`,
			`What's the main concern?`,
			"Yadira Caraveo",
			"Jena Griswald",
		],
		audio: ["engQ1.m4a", "engQ2.m4a", "engQ3.m4a", "engQ4.m4a", "engQ5.m4a"],
	},
};

const answers = {
	esp: {
		"Ok perfecto, muchas gracias": "espA1.m4a",
		"Oh! Disculpe la molestia": "espA2.m4a",
		"Muchas gracias y bonito dia": "espAfinal.m4a",
	},
	eng: {
		"Thank you very much!": "engA3.m4a",
		"Alright, thank you!": "engA1.m4a",
		"Oh, I'm sorry": "engA2.m4a",
		"Perfect, thanks and good day": "engAfinalDay.m4a",
		"Perfect, thanks and good night": "engAfinalNight.m4a",
	},
};

const nextCall = () => {
	callCount.value++;
	saveCount();
};
const updateCount = (count) => {
	callCount.value = count;
	saveCount();
};
const saveCount = () => {
	window.localStorage.setItem("easy-call-count", callCount.value);
};
</script>

<template>
	<header class="mb-3 flex justify-between align-start lg_reverse">
		<div>
			<h1>ECS v1.1</h1>
			<LanguageSelector :lang="lang" @update-lang="lang = $event" />
			<CallCounter
				:goal="goal"
				:count="callCount"
				:lang="lang"
				@update-count="updateCount"
			/>
		</div>
		<BaseButton @click="callCount = 0" style="margin-top: 0.25rem">{{
			lang === "esp" ? "Nuevo" : "New"
		}}</BaseButton>
	</header>
	<main>
		<ScreeningQuestions
			:questions="questions[lang]"
			:answers="answers[lang]"
			:lang="lang"
			@next-call="nextCall"
		/>
	</main>
</template>

<style>
.flex {
	display: flex;
}
.align-start {
	align-items: flex-start;
}
.align-center {
	align-items: center;
}
.justify-between {
	justify-content: space-between;
}
.px-1 {
	padding-inline: 0.5rem;
}
.ml-half {
	margin-left: 0.5rem;
}
.ml-1 {
	margin-left: 1rem;
}
.ml-2 {
	margin-left: 2rem;
}
.mr-half {
	margin-right: 0.5rem;
}
.mr-1 {
	margin-right: 1rem;
}
.mr-2 {
	margin-right: 2rem;
}
.mt-half {
	margin-top: 0.5rem;
}
.mb-1 {
	margin-bottom: 1rem;
}
.mb-2 {
	margin-bottom: 2rem;
}
.mb-3 {
	margin-bottom: 3rem;
}
.gap-1 {
	gap: 0.5rem;
}
.lang-selector {
	font-weight: 700;
}
.active {
	color: var(--primary-color);
}
.icon {
	font-size: 2rem;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	color: var(--primary-color);
	/* filter: drop-shadow(0px 0 2px var(--secondary-color)); */
	box-shadow: 0px 0px 0px 2px var(--secondary-color);
	border-radius: 50px;
	padding: 1px;
}
.icon:hover {
	color: var(--secondary-color);
}
.icon:active,
.icon-active {
	padding: 0px;
	color: var(--primary-color);
}
.icon-active {
	color: var(--secondary-color);
}
.icon-active:hover {
	padding: 1px;
}

@media screen and (min-width: 1200px) {
	.lg_reverse {
		flex-direction: row-reverse;
	}
}
</style>
