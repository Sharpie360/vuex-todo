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
        },
        deleteTodo(state, index) {
            state.todos.splice(index, 1)
        },
        toggleDone(state, index) {
            state.todos[index].done = !state.todos[index].done
        }
    },
    actions: {
        addTodo(context) {
            context.commit('addTodo')
            context.commit('setNewTodo', '')
        },
        deleteTodo(context, index) {
            console.log(context)
            if(context.state.todos[index].done) {
                context.commit('deleteTodo', index)
            } else {
                console.log("please finish todo before deleting")
                return
            }
        },
        toggleDone(context, index) {
            context.commit('toggleDone', index)
            console.log(`Todo ${index + 1}: `, context.state.todos[index].done)
        }
    }
})