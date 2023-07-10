import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import Students from '../src/components/Students.vue'

describe('App', () => {
	it('has a <header> tag', () => 
	{
		//arrange
		const	wrapper = mount(App);
		//act
		const	header = wrapper.get('header');
		//assert
		expect(header.exists()).toBe(true)
	}),
	it('has a <main> tag', () => 
	{
		//arrange
    	const	wrapper = mount(App);
		//act
		const	main = wrapper.get('main');
		//assert
    	expect(main.exists()).toBe(true)
	}),
	it('has a child component called Students', () => 
	{
		//arrange
    	const	wrapper = mount(App);
		//act
		const	parent = wrapper.getComponent(App);
		const	child = wrapper.findComponent(Students);
		//assert
    	expect(child.exists()).toBe(true);
	}),
	it('Students table class is student-table', () => 
	{
		//arrange
    	const	wrapper = mount(Students);
		let		expected = 'student-table'
		//act
		const	table = wrapper.get('table');
		//assert
    	expect(table.classes()[0]).toBe(expected);
		//log
		console.log(table.classes());
	}),
	it('Students form id is student-form', () => 
	{
		//arrange
    	const	wrapper = mount(Students);
		let		expected = 'student-form'
		//act
		const	table = wrapper.get('form');
		//assert
    	expect(table.element.id).toBe(expected);
		//log
		console.log(table.element.id);
	}),
	it('Test student name, subject and grade', async() => 
	{
		//arrange
    	const	wrapper = mount(Students);
		const	testStudent = 
		{
			name: "Pedro",
			subject: "Biologia",
			grade: 14,	
		}
		//act
		await	wrapper.get('[id="name"]').setValue(testStudent.name);
		await	wrapper.get('[id="subject"]').setValue(testStudent.subject);
		await	wrapper.get('[id="grade"]').setValue(testStudent.grade);
		await	wrapper.get('[id="student-submit"]').trigger('submit');

		const	testName = wrapper.get('[id="name0"]');
		const	testSubject = wrapper.get('[id="subject0"]');
		const	testGrade = wrapper.get('[id="grade0"]');
		//assert
    	expect(testName.element.textContent).toBe(testStudent.name);
    	expect(testSubject.element.textContent).toBe(testStudent.subject);
    	expect(Number(testGrade.element.textContent)).toBe(testStudent.grade);
	})
})
