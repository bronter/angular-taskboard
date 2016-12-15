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
};
