export default class TaskController {
  constructor($scope) {
    this.scope = $scope;
    $scope.handleKeypressForName = this.handleKeypressForName.bind(this);
    $scope.handleKeypressForDescription = this.handleKeypressForDescription.bind(this);
  }

  handleKeypressForName(event) {
    if (event.keyCode === 13) {
      this.scope.t.editingName = false;
    }
  }

  handleKeypressForDescription(event) {
    if (event.keyCode === 13) {
      this.scope.t.editingDescription = false;
    }
  }
};
