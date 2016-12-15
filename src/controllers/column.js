export default class ColumnController {
  constructor($scope) {
    this.scope = $scope;

    $scope.columnKeypress = this.columnKeypress.bind(this);
    $scope.toggleLock = this.toggleLock.bind(this);
    $scope.deleteColumn = this.deleteColumn.bind(this);

    $scope.addTask = this.addTask.bind(this);

    $scope.startDragging = this.startDragging.bind(this);
    $scope.stopDragging = this.stopDragging.bind(this);
    $scope.handleDrag = this.handleDrag.bind(this);
    // $scope.dragTarget = this.dragTarget.bind(this);
  }

  columnKeypress(event) {
    if(event.keyCode === 13) {
      this.scope.c.locked = true;
    }
  }

  toggleLock() {
    const index = this.scope.$index;
    const columns = this.scope.columns;
    columns[index].locked = !columns[index].locked;
  }

  deleteColumn() {
    this.scope.columns.splice(this.scope.$index, 1);
  }

  addTask() {
    const c = this.scope.c;
    c.tasks.unshift({
      title: "",
      description: "",
      editingName: true,
      editingDescription: true,
      isDragging: false,
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      x: 0,
      y: 0,
    });
  }

  startDragging(event) {
    const c = this.scope.c;
    if (c.locked || this.scope.columnsLocked) return true;
    // Get rekt m8
    const rekt = event.target.getBoundingClientRect();
    c.startX = event.clientX;
    c.startY = event.clientY;
    c.offsetX = c.startX - rekt.left;
    c.offsetY = c.startY - rekt.top;
    c.x = c.startX;
    c.y = c.startY;

    c.isDragging = true;
  }

  handleDrag(event) {
    const c = this.scope.c;
    if (!c.isDragging) return true;
    c.x = event.clientX;
    c.y = event.clientY;
  }

  stopDragging(event) {
    const columns = this.scope.columns;
    const c = this.scope.c;
    const index = columns.indexOf(c);
    // Something seriously went wrong if we trigger this
    if (index < 0) return false;
    const x = event.clientX;
    const container = this.scope.columnsContainer[0];
    // #shrekt
    const cRekt = container.getBoundingClientRect();
    const boundedX = Math.min(Math.max(x - cRekt.left, 0), container.scrollWidth - 1);
    const insertAt = Math.round((boundedX / container.scrollWidth) * (columns.length + 1));
    columns.splice(index, 1);
    columns.splice(insertAt, 0, Object(c));

    // Clean up
    c.isDragging = false;
    c.startX = 0;
    c.startY = 0;
    c.offsetX = 0;
    c.offsetY = 0;
    c.x = 0;
    c.y = 0;
  }

  // dragTarget(event, c) {
  //   if (c.isDragging) return true;
  //   const t = event.target;
  //   const rekt = t.getBoundingClientRect();
  //   const x = event.clientX - rekt.left;
  //   const y = event.clientY - rekt.top;
  //
  //   if (x > t.clientWidth / 2) {
  //     c.draggingOver = "right";
  //   } else {
  //     c.draggingOver = "left";
  //   }
  // }
}
