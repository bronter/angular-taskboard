import angular from "angular";
import ngRoute from "angular-route";
import 'font-awesome-sass-loader';
import "../styles/global.scss";

import HomeController from "./controllers/home.js";
import ColumnsController from "./controllers/columns.js";
import ColumnController from "./controllers/column.js";
import TasksController from "./controllers/tasks.js";
import TaskController from "./controllers/task.js";

import Home from "./templates/home.html";
import Columns from "./templates/columns.html";
import Column from "./templates/column.html";
import Tasks from "./templates/tasks.html";
import Task from "./templates/task.html";

const testModule = angular.module('taskboard', ["ngRoute"]);
testModule.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      template: Home,
    });
});
testModule.controller('home', HomeController);
testModule.controller('taskColumn', ColumnsController);
testModule.controller('tasks', TasksController);

testModule.component('columns', {template: Columns});
testModule.directive('column', () => {
  return {
    template: Column,
    controller: ColumnController,
    bindings: {
      c: "=",
      columns: "=",
      columnsLocked: "<",
    },
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
    controller: TaskController,
    bindings: {
      // t: "=",
      c: "=",
    },
  };
});
