<template>
	<header class="flex align-center mb-1">
		<MusicPlayer
			class="mb-1"
			auto-play
			:url="lang + '/' + currentVoiceFile"
			@reset="resetData()"
		/>
		<div class="flex align-center">
			<Icon
				@click="selectCurrentVoice(questions.audio[currentQuestionNumber])"
				icon="material-symbols:sound-sensing"
				class="icon mr-half"
			/>
			<h2 class="mr-1">{{ currentQuestion }}</h2>
		</div>
	</header>
	<main class="grid">
		<BaseButton
			@click="selectCurrentVoice(answer), currentQuestionNumber++"
			v-for="(answer, title, index) in answers"
			:title="title"
			:key="index"
		/>
	</main>
</template>

<script>
	import BaseButton from "./Button.vue";
	import MusicPlayer from "./MusicPlayer.vue";
	import { Icon } from "@iconify/vue";

	export default {
		name: "ScreeningQuestions",
		emits: ["next-call"],
		components: {
			BaseButton,
			MusicPlayer,
			Icon,
		},
		props: {
			questions: {
				type: [Array, Object],
				required: true,
				default: () => {
					text: ["Question A", "Question B", "Question C", "Question  D"];
				},
			},
			answers: {
				type: [Array, Object],
				required: true,
				default: () => ["Answer A", "Answer B", "Answer C", "Answer  D"],
			},
			lang: {
				type: String,
			},
		},
		data() {
			return {
				currentQuestionNumber: 0,
				lastQuestionIndex: this.questions.text.length - 1,
				currentVoiceFile: this.questions.audio[this.currentQuestionNumber],
			};
		},
		computed: {
			currentQuestion() {
				if (this.currentQuestionNumber >= this.questions.text.length)
					this.resetData();
				return this.questions.text[this.currentQuestionNumber];
			},
		},
		methods: {
			resetData() {
				this.currentQuestionNumber = 0;
				this.$emit("next-call");
			},
			selectCurrentVoice(fileName) {
				this.currentVoiceFile = fileName;
			},
		},
	};
</script>

<style scoped>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	header {
		flex-direction: column;
		align-items: flex-start;
	}
</style>
