// import { reactive } from "@vue/reactivity"
import { reactive } from "./vue3/reactivity"

const state = reactive({
  name: '张三',
  age: 35,
  info: {
    job: 'teacher',
    students: [
      {
        id: 1,
        name: '小明'
      },
      {
        id: 2,
        name: '小红'
      }
    ]
  },
  hobby: ['game', 'music', 'movie']
})

// state.name
// state.hobby
// state.name = '李四'
// state.hobby[0] = 1
// state.hobby.push('coding')

// state.info
// state.info
// state.age = 36
// state.info.job
state.info.students
state.info.students.push({
  id: 3,
  name: '小刚'
})
// state.hobby.push('coding')

// console.log(state)