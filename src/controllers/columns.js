export default class ColumnsController {
  constructor($scope, $element) {
    this.scope = $scope;
    $scope.columnsContainer = $element;
    $scope.columns = [];
    $scope.columnsLocked = false;

    $scope.addColumn = this.addColumn.bind(this);
    $scope.columnKeypress = this.columnKeypress.bind(this);
    $scope.toggleLock = this.toggleLock.bind(this);
    $scope.deleteColumn = this.deleteColumn.bind(this);
  }

  addColumn() {
    this.scope.columns.push({
      // HACK: Need current container dimensions for column drag n' drop math;
      // Need to figure out a nicer way to get the container dimensions
      // that doesn't involve getElementById since that breaks reusability.
      container: this.scope.columnsContainer,
      name: "",
      locked: false,
      isDragging: false,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      draggingOver: "",
      tasks: [],
    });
    this.scope.isDragging = false;
  }

  columnKeypress(event, c) {
    if(event.keyCode === 13) {
      c.locked = true;
    }
  }

  toggleLock(index) {
    const columns = this.scope.columns;
    columns[index].locked = !columns[index].locked;
  }

  deleteColumn(index) {
    this.scope.columns.splice(index, 1);
  }
};
