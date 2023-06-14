<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const existingTodos: Ref<string | null> = ref(localStorage.getItem('todos'));
const todos: Ref<string[]> = ref(JSON.parse(existingTodos.value ?? '[]'));
const todoText: Ref<string> = ref('');

const addTodo = () => {
  todos.value = [...todos.value, todoText.value];
  localStorage.setItem('todos', JSON.stringify(todos.value));
}
</script>

<template>
  <div>

    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>

    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" placeholder="What needs to be done?" />
      <button type="submit">Add Todo</button>
    </form>

  </div>
</template>

<style scoped>
</style>
