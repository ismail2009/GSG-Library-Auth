const handlers = require('./handlers.js');

const router = (request, response) => {

  handlers.checkAuth(request, response , (result , url) => {
    if(result){
      if (url === '/') {
        handlers.homepageHandler(request, response);
      } else if (url === '/insertData') {
        handlers.insertData(request, response);
      } else if (url === '/viewData') {
        handlers.viewData(request, response);
      } else if (url === '/deleteData') {
        handlers.deleteData(request, response);
      } else if (url === '/editData') {
        handlers.editData(request, response);
      } else if (url === '/logout') {
        handlers.logout(request, response);
      }
      else if (url.startsWith('/public')) {
        handlers.publicHandler(request, response);
      } else {
        url = '/'
        handlers.homepageHandler(request, response);
        
      }
    } else {

      if (url === '/signup') {
        handlers.SignUp(request, response);
      }
      else if(url === '/'){
        handlers.login(request , response);
      }
      else if (url === '/checkUser') {
        handlers.checkUser(request, response);
      }
      else if (url === '/login') {
        handlers.login(request, response);
      }
      else if (url.startsWith('/public')) {
        handlers.publicHandler(request, response);
      }else if (url === '/addUser') {
        handlers.addUser(request, response);
      }else if (url === '/logout') {
        handlers.logout(request, response);
      }
      else {
        response.writeHead(404);
        response.end('PAGE NOT FOUND!!!!!!!!!!');
      }
    }

  });

};
module.exports = router;
