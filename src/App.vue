<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Students from './components/Students.vue';
</script>

<template>
	<header>
		Report Card
	</header>
	<main>
		<Students></Students>
	</main>
</template>

<style scoped>
body
{
	display: flex;
	flex-direction: column;
}

main
{
	display: flex;
	flex-direction: column;
	justify-content: center;
}

</style>
