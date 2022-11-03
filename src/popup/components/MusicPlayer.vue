<template>
	<div class="icons-wrapper flex align-center gap-1">
		<Icon
			v-if="!isPlaying"
			icon="fa6-solid:circle-play"
			class="icon"
			@click="resumePlayer()"
		/>
		<Icon
			v-else
			icon="fa6-solid:circle-pause"
			class="icon icon-active"
			@click="pausePlayer()"
		/>

		<Icon icon="fa6-solid:circle-stop" class="icon" @click="stopPlayer()" />
		<Icon
			icon="fa6-solid:circle-xmark"
			class="icon"
			@click="$emit('reset'), stopPlayer()"
		/>
	</div>
</template>

<script>
	import { Icon } from "@iconify/vue";

	export default {
		name: "MusicPlayer",
		emits: ["reset"],
		props: {
			url: {
				type: String,
				required: true,
				default: "https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.m4a",
			},
			autoPlay: {
				type: Boolean,
				default: false,
			},
		},
		components: {
			Icon,
		},
		data() {
			return {
				player: new Audio(),
				isPlaying: false,
			};
		},
		watch: {
			url: {
				immediate: false,
				handler(val) {
					if (this.player && val)
						this.player.src = new URL(
							"https://public-easy-call.s3.amazonaws.com/" + val,
							import.meta.url
						);
					if (this.autoPlay) {
						this.stopPlayer();
						this.resumePlayer();
					}
				},
			},
		},
		methods: {
			resumePlayer() {
				this.player.play();
				this.isPlaying = true;
				this.player.onended = () => this.stopPlayer();
			},
			pausePlayer() {
				this.player.pause();
				this.isPlaying = false;
			},
			stopPlayer() {
				this.player.load();
				this.isPlaying = false;
			},
		},
	};
</script>

<style scoped>
	button {
		border: var(--secondary-color) 2px solid;
		border-radius: 15px;
		padding: 0.25rem 0.5rem;
		margin-bottom: 1rem;
	}
</style>
