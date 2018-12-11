import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Vuex Todo',
        newTodo: '',
        todos: [
            { title: 'Learn Vue.js', completed: false },
            { title: 'Learn Vuex', completed: false },
            { title: 'Convert apps to use Vuex', completed: false },
        ]

    },
    mutations: {
        setNewTodo(state, value) {
            state.newTodo = value
        },
        addTodo(state) {
            state.todos.push({
                title: state.newTodo,
                completed: false
            })
        }
    },
    actions: {
        addTodo(context) {
            context.commit('addTodo')
            context.commit('setNewTodo', '')
        }
    }
})