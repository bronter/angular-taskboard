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
    // #shrekt
    const cRekt = container.getBoundingClientRect();
    const boundedX = Math.min(Math.max(x - cRekt.left, 0), container.scrollWidth - 1);
    const insertAt = Math.round((boundedX / container.scrollWidth) * (columns.length + 1));

    return insertAt;
  }

  stopDragging(event, t) {
    const tasks = this.scope.c.tasks;
    const index = tasks.indexOf(t);
    // Something seriously went wrong if we trigger this
    if (index < 0) return false;
    const y = event.clientY;
    const container = this.container[0];
    // #shrekt
    const tRekt = container.getBoundingClientRect();
    const boundedY = Math.min(Math.max(y - tRekt.top, 0), container.scrollHeight - 1);
    // We're going to remove the element from the array, so subtract an additional index
    // i.e. tasks.length - 2
    const insertAt = Math.round((boundedY / container.scrollHeight) * (tasks.length - 1));
    tasks.splice(index, 1);
    tasks.splice(insertAt, 0, Object(t));

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
