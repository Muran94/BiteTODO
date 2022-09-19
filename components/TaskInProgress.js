app.component('task-in-progress', {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="panel">
    <div v-if="task">
      <div class="task" @click="completeTask(task.id)">
        <div class="task__checkbox" :class="checked"></div>
        <div class="task__name">{{ task.name }}</div>
      </div>
    </div>
    <div v-else>
      タスクを追加してください。
    </div>
  </div>
  `,
  data() {
    return {
      completed: false,
    }
  },
  methods: {
    completeTask(taskId) {
      this.completed = true;
      this.$emit('task-completed', taskId)
    },
    checked() {
      this.completed ? 'task__checkbox--checked' : ''
    }
  }
})
