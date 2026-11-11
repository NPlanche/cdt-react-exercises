import { useState } from 'react';
import useTasks from './hooks/useTasks';
import UserProfile from './components/UserProfile';
import TaskFilter from './components/TaskFilter';
import TaskItem from './components/TaskItem';
import filterTasks from './utils/filterTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <div>
        <TaskFilter filter={filter} setFilter={setFilter} />
      </div>

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
