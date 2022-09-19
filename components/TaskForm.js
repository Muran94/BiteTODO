app.component('task-form', {
  template:
  /* html */
  `
  <div class="panel">
    <form @submit.prevent="onSubmit" class="form">
      <div class="form__field">
        <label class="form__label">タスク名</label>
        <input type="text" class="form__input" v-model="taskName">
      </div>

      <input type="submit" value="保存する" class="button"/>
    </form>
  </div>
  `,
  data() {
    return {
      taskName: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.taskName === '') {
        alert('タスク名を入力してください。')
        return
      }

      const task = {
        id: Math.random().toString(32).substring(2),
        name: this.taskName,
        isDone: false,
        inProgress: false
      }

      this.$emit('task-submitted', task)

      this.taskName = ''
    }
  }
})
