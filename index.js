// lib/index.js
class MyMiniFramework {
  constructor() {
    this.routes = [];
  }

  addRoute(path, handler) {
    this.routes.push({ path, handler });
  }

  handleRequest(request) {
    for (const route of this.routes) {
      if (request.url === route.path) {
        return route.handler();
      }
    }
    return '404 Not Found';
  }
}

module.exports = MyMiniFramework;
