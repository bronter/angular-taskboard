import angular from "angular";
import ngRoute from "angular-route";
import 'font-awesome-sass-loader';
import "../styles/global.scss";

import BoardController from "./controllers/board.js";
import ColumnsController from "./controllers/columns.js";
import ColumnController from "./controllers/column.js";
import TasksController from "./controllers/tasks.js";
import TaskController from "./controllers/task.js";

import Board from "./templates/board.html";
import Columns from "./templates/columns.html";
import Column from "./templates/column.html";
import Tasks from "./templates/tasks.html";
import Task from "./templates/task.html";

const testModule = angular.module('taskboard', ["ngRoute"]);
testModule.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      template: Board,
    });
});
testModule.controller('board', BoardController);
testModule.controller('taskColumn', ColumnsController);
testModule.controller('tasks', TasksController);
testModule.controller('task', TaskController);

testModule.component('columns', {template: Columns});
testModule.directive('column', () => {
  return {
    template: Column,
    controller: ColumnController,
  };
});
testModule.directive('tasks', () => {
  return {
    template: Tasks,
  };
});
testModule.directive('task', () => {
  return {
    template: Task,
  };
});
