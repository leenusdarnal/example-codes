import { writable } from 'svelte/store'

export type createTodoStore = {
  done: boolean
  description: string
}

export type todo = {
  done: boolean
  description: string
  id: number
}

export function createTodoStore(initial: createTodoStore[]) {
  let uid = 1

  const todos = initial.map(({ done, description }) => {
    return {
      id: uid++,
      done,
      description,
    }
  })
  const { subscribe, update } = writable(todos)
  return {
    subscribe,
    add: (description: string) => {
      const todo: todo = {
        id: uid++,
        description,
        done: false,
      }
      update(($todos) => [...$todos, todo])
    },
    remove: (todo: todo) => {
      update(($todos) => $todos.filter((t) => t !== todo))
    },
    mark: (todo: todo, done: boolean) => {
      update(($todos) => [
        ...$todos.filter((t) => t !== todo, { ...todo, done }),
      ])
    },
  }
}

export type store = ReturnType<typeof createTodoStore>
