export default class TaskController {
  constructor($scope) {
    $scope.handleKeypressForName = this.handleKeypressForName.bind(this);
    $scope.handleKeypressForDescription = this.handleKeypressForDescription.bind(this);
    $scope.deleteTask = this.deleteTask.bind(this);
  }

  handleKeypressForName(event, t) {
    if (event.keyCode === 13) {
      t.editingName = false;
    }
  }

  handleKeypressForDescription(event, t) {
    if (event.keyCode === 13) {
      t.editingDescription = false;
    }
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

  stopDragging(event, tasks, t) {
    const index = tasks.indexOf(t);
    // Something seriously went wrong if we trigger this
    if (index < 0) return false;
    const x = event.clientX;
    const container = t.container[0];
    // #shrekt
    const tRekt = container.getBoundingClientRect();
    const boundedX = Math.min(Math.max(x - tRekt.left, 0), container.scrollWidth - 1);
    // We're going to remove the element from the array, so subtract an additional index
    // i.e. tasks.length - 2
    const insertAt = Math.round((boundedX / container.scrollWidth) * tasks.length);
    tasks.splice(index, 1);
    tasks.splice(insertAt, 0, Object(c));

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
