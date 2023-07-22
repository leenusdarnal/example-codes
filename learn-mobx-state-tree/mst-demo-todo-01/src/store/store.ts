import { types, onSnapshot, SnapshotIn } from 'mobx-state-tree'

export const Task = types.model({
  id: types.identifier,
  title: types.optional(types.string, ''),
  description: types.optional(types.string, 'todo'),
})
export type taskType = typeof Task

const TaskStore = types
  .model({
    tasks: types.map(Task),
  })
  .actions((self) => ({
    addTask(task: { title: string; description: string }) {
      const id = Date.now().toString()
      self.tasks.set(id, {
        ...task,
        id,
      })
    },
    removeTask(id: string) {
      self.tasks.delete(id)
    },
    updateTask(
      id: string,
      updatedTask: { title: string; description: string }
    ) {
      if (self.tasks.has(id)) {
        self.tasks.set(id, {
          id,
          ...updatedTask,
        })
      }
    },
    afterCreate() {
      const data = localStorage.getItem('tasks')
      if (data) {
        const tasks = JSON.parse(data)
        Object.keys(tasks).forEach((id) => {
          self.tasks.set(id, tasks[id])
          self.tasks.values()
        })
      }
      onSnapshot(self, (snapshot) => {
        localStorage.setItem('tasks', JSON.stringify(snapshot.tasks))
      })
    },
  }))

export const store = TaskStore.create({ tasks: {} })
