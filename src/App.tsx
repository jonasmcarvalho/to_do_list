import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <NewTask />
      <TaskList />
    </div>
  )
}

