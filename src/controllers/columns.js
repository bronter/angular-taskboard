export default class ColumnsController {
  constructor($scope, $element) {
    this.scope = $scope;
    $scope.columnsContainer = $element;
    $scope.columns = [];
    $scope.columnsLocked = false;

    $scope.addColumn = this.addColumn.bind(this);
  }

  addColumn() {
    this.scope.columns.push({
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
};
