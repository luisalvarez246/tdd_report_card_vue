<script setup>
import { ref } from 'vue';

const	studentData = ref([]);
const	name = ref();
const	subject = ref();
const	grade = ref();
const	id = ref(0);


const	addStudent = () =>
{
	const	newStudent =
	{
		name: name.value,
		subject: subject.value,
		grade: grade.value,
		id: id.value++,
	}
	studentData.value.push(newStudent);
	name.value = null;
	subject.value = null;
	grade.value = null;
	console.log(studentData.value);
}
</script>

<template>
	<form id="student-form" @submit.prevent="addStudent">
		<!-- <p>{{ studentData }}</p> -->
		<label>
			Student Name <input id="name" type="text" required v-model="name"/>
		</label>
		<label>
			Subject <input id="subject" type="text" required v-model="subject"/>
		</label>
		<label>
			Grade <input id="grade" type="number" required v-model="grade"/>
		</label>	
		<button id="student-submit" type="submit">Add</button>
	</form>
	<table class="student-table">
		<th>Student Name</th>
		<th>Subject</th>
		<th>Grade</th>
		<tr v-for="student in studentData" :key="student.id">
			<td :id="'name' + student.id">{{ student.name }}</td>
			<td :id="'subject' + student.id">{{ student.subject }}</td>
			<td :id="'grade' + student.id">{{ student.grade }}</td>
		</tr>
	</table>
</template>

<style scoped>

#student-form
{
	margin: 2rem;
}
.student-table th, td
{
	border: 1px solid;
	width: 20%;
	text-align: center;
}

</style>