import presets from "../board-presets.js";

export default class HomeController {
  constructor($scope) {
    this.scope = $scope;

    $scope.presets = presets;
    $scope.selectedPreset = 'preset-0';
  }
};
