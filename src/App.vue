<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <form @submit.prevent="addTodo">
      <label for="newTodo">New Todo</label>
      <input v-model="newTodo" type="text" name="newTodo">
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(todo, i) in todos" :key="i">
        <span @click="deleteTodo(i)">{{ i + 1 }}. {{ todo.title }}</span><span><input type="checkbox" name="done" id="" :checked="todos[i].done" @click="toggleDone(i)"></span> 
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "App",
  computed: { 
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.commit('setNewTodo', value)
      }
    },
    ...mapState(['title', 'todos'])
  },
  methods: {
    ...mapActions(['addTodo', 'deleteTodo', 'toggleDone'])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
label {
  display: block;
}
</style>
