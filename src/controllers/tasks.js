import {spacialListSearch} from "../utils.js";

export default class TasksController {
  constructor($scope, $element) {
    this.scope = $scope;
    this.container = $element;

    $scope.deleteTask = this.deleteTask.bind(this);

    $scope.startDragging = this.startDragging.bind(this);
    $scope.handleDrag = this.handleDrag.bind(this);
    $scope.stopDragging = this.stopDragging.bind(this);
  }

  deleteTask(c, index) {
    c.tasks.splice(index, 1);
  }

  startDragging(event, t) {
    const rekt = event.target.getBoundingClientRect();
    t.startX = event.clientX;
    t.startY = event.clientY;
    t.offsetX = t.startX - rekt.left;
    t.offsetY = t.startY - rekt.top;
    t.x = t.startX;
    t.y = t.startY;

    t.isDragging = true;
  }

  handleDrag(event, t) {
    if (!t.isDragging) return true;
    t.x = event.clientX;
    t.y = event.clientY;
  }

  getColumnIndex(event) {
    const columns = this.scope.columns;
    const index = columns.indexOf(this.scope.c);
    // Something seriously went wrong if we trigger this
    if (index < 0) return false;

    const x = event.clientX;
    const container = this.scope.columnsContainer[0];
    const nodes = container.getElementsByClassName("column");
    return spacialListSearch(x, nodes, "horizontal");

    return insertAt;
  }

  stopDragging(event, t) {
    const tasks = this.scope.c.tasks;
    const index = tasks.indexOf(t);

    // Something seriously went wrong if we trigger this
    if (index < 0) return false;

    const y = event.clientY;
    const container = this.container[0];
    const xIndex = this.getColumnIndex(event);

    const columnNodes = container.getElementsByClassName('task');
    const insertAt = spacialListSearch(y, columnNodes);

    tasks.splice(index, 1);
    this.scope.columns[xIndex].tasks.splice(insertAt, 0, Object(t));

    // Clean up
    t.isDragging = false;
    t.startX = 0;
    t.startY = 0;
    t.offsetX = 0;
    t.offsetY = 0;
    t.x = 0;
    t.y = 0;
  }
};
