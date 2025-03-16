import { useRecoilValue } from "recoil";

import { todoListStatsState } from "./selectors";

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items Completed: {totalCompletedNum}</li>
      <li>Items not Completed: {totalUncompletedNum}</li>
      <li>Percent Completed: {formattedPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
