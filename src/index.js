import angular from "angular";
import ngRoute from "angular-route";
import 'font-awesome-sass-loader';
import "../styles/global.scss";

import HomeController from "./controllers/home.js";
import BoardController from "./controllers/board.js";
import ColumnsController from "./controllers/columns.js";
import ColumnController from "./controllers/column.js";
import TasksController from "./controllers/tasks.js";
import TaskController from "./controllers/task.js";

import Home from "./templates/home.html";
import Board from "./templates/board.html";
import Columns from "./templates/columns.html";
import Column from "./templates/column.html";
import Tasks from "./templates/tasks.html";
import Task from "./templates/task.html";

const taskBoardModule = angular.module('taskboard', ["ngRoute"]);
taskBoardModule.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      template: Board,
    })
    .when("/home", {
      template: Home,
    });
});
taskBoardModule.controller('home', HomeController);
taskBoardModule.controller('board', BoardController);
taskBoardModule.controller('columns', ColumnsController);
taskBoardModule.controller('tasks', TasksController);
taskBoardModule.controller('task', TaskController);

taskBoardModule.component('columns', {template: Columns});
taskBoardModule.directive('column', () => {
  return {
    template: Column,
    controller: ColumnController,
  };
});
taskBoardModule.directive('tasks', () => {
  return {
    template: Tasks,
  };
});
taskBoardModule.directive('task', () => {
  return {
    template: Task,
  };
});
