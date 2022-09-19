const app = Vue.createApp({
  data() {
    return {
      title: 'Mini Task',
      tasks: [
        { id: 1, name: 'timecloud登録', isDone: false },
        { id: 2, name: 'slackを起動', isDone: false },
        { id: 3, name: 'エディタを起動', isDone: false },
      ]
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task)
    },
    updateTask(id) {
      const taskIndex = this.tasks.findIndex(task => { return task.id === id })

      this.tasks[taskIndex].isDone = true

      this.tasks.splice()
    }
  },
  computed: {
    taskInProgress() {
      return this.tasks.find(task => { return task.isDone === false })
    }
  }
})
