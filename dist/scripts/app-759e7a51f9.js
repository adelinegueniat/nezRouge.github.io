function navbarController(n){var e=this;e.pageLogin=function(){return""===localStorage.user},e.getUser=function(){return n.getUser()},e.isLogged=function(){return localStorage.userIsLogged},e.userLogout=function(){n.userLogout()}}function missionsController(n){function e(){return t.liste=angular.fromJson(localStorage.getItem(o)),t.liste}function r(){localStorage.setItem(o,angular.toJson(t.missions))}var t=this;t.titre="Missions",t.missions=[];var o="lmkey";t.listebenevoles=n.getAllBenevoles(),null===localStorage.getItem(o)&&r(),t.missions=e(),t.addToMissions=function(){var n=new Date(t.date),e=n.getDate()+"."+(n.getMonth()+1)+"."+n.getFullYear(),o=new Date(t.heure),l=o.getHours()+"h"+o.getMinutes(),s={date:e,heure:l,depart:t.depart,destination:t.destination,client:t.client,clientPhone:t.clientPhone,driver:{id:null,name:"",firstname:""},isDone:!1,isWaiting:!0};t.missions.push(s),r()},t.getMissionPosition=function(n){var e=t.missions.indexOf(n);return e},t.cancelMission=function(n){var e=t.getMissionPosition(n);t.missions.splice(e,1),localStorage.removeItem(e),r()},t.rollback=function(){t.missions.pop(),r()},t.putOnDuty=function(e,t){n.putBenevoleOnDuty(e,t),r()},t.toggle=function(n){n.isWaiting=!1,n.isDone=!1,r()},t.archive=function(e){e.isDone=!0,r(),n.putOffDuty(e.driver.id),t.listebenevoles=n.getAllBenevoles()},t.dataTest=function(){var n={date:"21 décembre 2016",heure:"21:20",depart:"Delémont",destination:"Neuchâtel",client:"Phil Collins",clientPhone:"032 123 45 67",driver:{drivern:"",driverfn:""},isDone:!1,isWaiting:!0};t.missions.push(n),r()},t.deleteData=function(){localStorage.removeItem(o),location.reload()}}function loginController(n,e){var r=this,t=window,o=console;localStorage.user="",e.showMessage=!1,e.showSubmitMessage=function(){o.log("calling"),e.showMessage=!0},r.userLogin=function(e,r){n.userLogin(e,r)&&(t.location="/projet-fheche_agueniat_2igpt/#!/accueil")}}function homeController(n){var e=this;e.getUser=function(){return n.getUser()}}function bottombarController(){this.text="My brand new component!"}function benevolesController(n){function e(){return t.liste=angular.fromJson(localStorage.getItem(o)),t.liste}function r(){localStorage.setItem(o,angular.toJson(t.benevoles))}var t=this;t.titre="Bénévoles",t.benevoles=[],t.title="",t.name="",t.firstName="",t.address="",t.phone="";var o="lbkey";t.listemissions=n.sharedMissions,null===localStorage.getItem(o)&&r(),t.benevoles=e(),t.addToBenevoles=function(){var n={id:null,titre:t.title,name:t.name,firstName:t.firstName,address:t.address,phone:t.phone,isWorking:!1,onDuty:!1},e=t.benevoles[t.benevoles.length-1]||{id:0};n.id=e.id+1,t.benevoles.push(n),r()},t.getBenevolePosition=function(n){var e=t.benevoles.indexOf(n);return e},t.getBenevole=function(){var e=n.getBenevolePosition(),r=t.benevoles[e];return r},t.removeBenevole=function(n){var e=t.getBenevolePosition(n);t.benevoles.splice(e,1),localStorage.removeItem(e),r()},t.toggle=function(n){n.isWorking=!n.isWorking,r()},t.rollback=function(){t.benevoles.pop(),r()},t.dataTest=function(){var n={id:1,titre:"Monsieur",name:"Alpha",firstName:"Bertrand",address:"Rue de la Gare 7, 2000 Neuchâtel",phone:"032 123 45 67",isWorking:!1,onDuty:!1},e={id:2,titre:"Monsieur",name:"Bravo",firstName:"Tom",address:"Rue du lac 22, 2502 Bienne",phone:"032 987 65 43",isWorking:!0,onDuty:!1},o={id:3,titre:"Monsieur",name:"Charlie",firstName:"Jake",address:"Rue des Prés 9, 3000 Berne",phone:"032 341 60 66",isWorking:!1,onDuty:!0},l={id:4,titre:"Madame",name:"Delta",firstName:"Irene",address:"Rue de l'Hôpital 41, 2800 Delémont",phone:"032 000 11 22",isWorking:!1,onDuty:!1},s={id:5,titre:"Madame",name:"Echo",firstName:"Aline",address:"Rue de l'Hôpital 45, 2800 Delémont",phone:"076 000 11 85",isWorking:!0,onDuty:!1},a={id:6,titre:"Monsieur",name:"Foxtrot",firstName:"Mark",address:"Rue des voitures 3, 6000 Chur",phone:"078 456 28 96",isWorking:!1,onDuty:!1};t.benevoles.push(n,e,o,l,s,a),r()},t.deleteData=function(){localStorage.removeItem(o),location.reload()}}function SharingData(){var n=this;n.sharedBenevoles=angular.fromJson(localStorage.getItem("lbkey")),n.sharedMissions=angular.fromJson(localStorage.getItem("lmkey")),n.getAllBenevoles=function(){return n.sharedBenevoles=angular.fromJson(localStorage.getItem("lbkey")),n.sharedBenevoles},n.getBenevolePosition=function(e){var r=n.sharedBenevoles.indexOf(e);return r},n.putBenevoleOnDuty=function(e,r){e.onDuty=!e.onDuty,r.isWaiting=!1,r.driver={id:e.id,name:e.name,firstname:e.firstName},localStorage.setItem("lbkey",angular.toJson(n.sharedBenevoles))},n.putOffDuty=function(e){for(var r=n.getAllBenevoles(),t=0;t<r.length;t++){var o=r[t];if(o.id===e){o.onDuty=!o.onDuty;break}}localStorage.setItem("lbkey",angular.toJson(r))},n.saveChangesBenevole=function(){localStorage.setItem("lbkey",angular.toJson(n.sharedBenevoles))}}function Loginservices(){var n=this,e=window;"/"===location.pathname&&(localStorage.user=""),n.getUser=function(){return""!==localStorage.user?localStorage.user:void("/"!==location.pathname&&n.userLogout())},n.userLogin=function(n,r){return"Francis"===n&&"1234"===r||"Adeline"===n&&"1234"===r?(localStorage.user=n,!0):(e.alert("Erreur ! L'utilisateur et le mot de passe ne correspondent pas !"),!1)},n.userLogout=function(){localStorage.user="",e.location="/projet-fheche_agueniat_2igpt/#!/"}}function routesConfig(n,e,r){r.html5Mode(!1).hashPrefix("!"),e.otherwise("/"),n.state("login",{url:"/",component:"login"}).state("home",{url:"/accueil",component:"home"}).state("benevoles",{url:"/benevoles",component:"benevoles"}).state("missions",{url:"/missions",component:"missions"}).state("inscriptions",{url:"/inscription",component:"inscriptions"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],navbarController.$inject=["Loginservices"],missionsController.$inject=["SharingData"],loginController.$inject=["Loginservices","$scope"],homeController.$inject=["Loginservices"],benevolesController.$inject=["SharingData"],angular.module("app",["ui.router","gg.vmsgs"]),angular.module("app").component("navbar",{templateUrl:"app/components/navbar/navbar.html",controller:navbarController}),angular.module("app").component("missions",{templateUrl:"app/components/missions/missions.html",controller:missionsController}),angular.module("app").component("login",{templateUrl:"app/components/login/login.html",controller:loginController}),angular.module("app").component("home",{templateUrl:"app/components/home/home.html",controller:homeController}),angular.module("app").component("bottombar",{templateUrl:"app/components/bottombar/bottombar.html",controller:bottombarController}),angular.module("app").component("benevoles",{templateUrl:"app/components/benevoles/benevoles.html",controller:benevolesController}),angular.module("app").service("SharingData",SharingData),angular.module("app").service("Loginservices",Loginservices),angular.module("app").run(["$templateCache",function(n){n.put("app/components/benevoles/benevoles.html",'<div class="component">\r\n  <div class="container">\r\n    <!-- Marketing Icons Section -->\r\n    <div class="row">\r\n      <div class="col-lg-12">\r\n        <h1 class="page-header">\r\n          {{$ctrl.titre}}\r\n          <button class="btn btn-success" ng-click="show = !show; confirm = false;" style="display: block; float: right; text-decoration: none">Ajouter un bénévole</button>\r\n        </h1>\r\n      </div>\r\n\r\n      <div class="col-md-12">\r\n        <div class="panel panel-success" ng-show="show" id="ajout">\r\n          <div class="panel-heading">\r\n            <h4>Ajouter un bénévole</h4>\r\n          </div>\r\n\r\n          <div class="panel-heading">\r\n\r\n            <form name="form" ng-submit="$ctrl.addToBenevoles()" role="form" class="form-group">\r\n\r\n              <div class="form-group" ng-class="{ \'has-error\': form.titre.$touched && form.titre.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\r\n                <input type="text" class="form-control form-control-sm" name="titre" id="titre" placeholder="Titre" ng-model="$ctrl.title" required>\r\n              </div>\r\n              <div class="form-group" ng-class="{ \'has-error\': form.name.$touched && form.name.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\r\n                <input type="text" class="form-control form-control-sm" name="name" id="name" placeholder="Nom" ng-model="$ctrl.name" required>\r\n              </div>\r\n              <div class="form-group" ng-class="{ \'has-error\': form.firstName.$touched && form.firstName.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\r\n                <input type="text" class="form-control form-control-sm" name="firstName" id="firstName" placeholder="Prénom" ng-model="$ctrl.firstName" required>\r\n              </div>\r\n              <div class="form-group" ng-class="{ \'has-error\': form.address.$touched && form.address.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\r\n                <input type="text" class="form-control form-control-sm" name="address" id="address" placeholder="Adresse" ng-model="$ctrl.address" required>\r\n              </div>\r\n              <div class="form-group" ng-class="{ \'has-error\': form.phone.$touched && form.phone.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\r\n                <input type="text" class="form-control form-control-sm" name="phone" id="phone" placeholder="Numéro de téléphone" ng-model="$ctrl.phone" required>\r\n              </div>\r\n\r\n              <div style="text-align: center">\r\n                <span ng-show="form.titre.$touched && form.titre.$error.required" class="alert-form">Titre requis.</span>\r\n                <span ng-show="form.name.$touched && form.name.$error.required" class="alert-form">Nom requis.</span>\r\n                <span ng-show="form.firstName.$touched && form.firstName.$error.required" class="alert-form">Prénom requis.</span>\r\n                <span ng-show="form.address.$touched && form.address.$error.required" class="alert-form">Adresse requise.</span>\r\n                <span ng-show="form.phone.$touched && form.phone.$error.required" class="alert-form">Numéro de téléphone requis</span>\r\n              <div>\r\n\r\n              <div class="form-actions form-group">\r\n                <input type="submit" value="Ajouter" ng-disabled="form.$invalid" ng-click="show = !show; confirm = true" class="btn btn-success btn-sm btn-block" style="display: block; margin-left: auto; margin-right: auto; width:100%">\r\n              </div>\r\n\r\n            </div></div></form>\r\n            \r\n          </div>\r\n\r\n        </div>\r\n        \r\n        <div class="panel panel-success" ng-show="confirm">\r\n          <div class="panel-heading">\r\n            <h4>Le bénévole {{$ctrl.firstName}} {{$ctrl.name}} a été ajouté à la liste. </h4>\r\n            <button class="btn btn-danger" ng-click="$ctrl.rollback(); confirm = false; rollback = true;">Annuler</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="panel panel-danger" ng-show="rollback">\r\n          <div class="panel-heading">\r\n            <h4>Opération annulée.</h4>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class="col-md-12" id="actifs">\r\n        <div class="panel panel-default">\r\n          <div class="panel-heading">\r\n            <h4><i class="fa fa-fw fa-check"></i> Bénévoles en service</h4>\r\n          </div> \r\n          <div class="panel-body">\r\n            <table class="table">\r\n              <tr>\r\n                <th class="hidden-xs col-md-1 col-lg-1 display-cell">Titre</th>\r\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Nom</th>\r\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Prénom</th>\r\n                <th class="hidden-xs col-md-2 col-lg-3 display-cell">Adresse</th>\r\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Téléphone</th>\r\n                <th class="col-xs-1 col-md-1 col-lg-1 display-cell centered">Statut</th> \r\n                <th class="col-xs-1 col-md-2 col-lg-1 display-cell centered">Mettre en congé</th>\r\n              </tr>\r\n\r\n              <tr ng-repeat="benevole in $ctrl.benevoles" ng-if="benevole.isWorking">\r\n                <td class="hidden-xs">{{ benevole.titre }}</td>\r\n                <td>{{ benevole.name }}</td>\r\n                <td>{{ benevole.firstName }}</td>\r\n                <td class="hidden-xs">{{ benevole.address }}</td>\r\n                <td>{{ benevole.phone }}</td>\r\n                <td class="centered" ng-if="benevole.onDuty">En mission</td>\r\n                <td class="centered" ng-if="!benevole.onDuty">En attente</td>\r\n                <td class="centered"><button class="btn btn-secondary glyphicon glyphicon-remove" ng-click="$ctrl.toggle(benevole)" ng-disabled="benevole.onDuty"></button></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="col-md-12" id="inactifs">\r\n        <div class="panel panel-default">\r\n          <div class="panel-heading">\r\n            <h4><i class="fa fa-fw fa-check"></i> Bénévoles inactifs</h4>\r\n          </div>\r\n          <div class="panel-body">\r\n            <table class="table">\r\n              <tr>\r\n                <th class="hidden-xs col-md-2 col-lg-1 display-cell">Titre</th>\r\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Nom</th>\r\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Prénom</th>\r\n                <th class="hidden-xs col-md-2 col-lg-3 display-cell">Adresse</th>\r\n                <th class="col-xs-3 col-md-2 col-lg-2 display-cell">Téléphone</th>\r\n                <th class="col-xs-1 col-md-1 col-lg-1 display-cell centered">Mettre en activité</th>\r\n                <th class="col-xs-1 col-md-1 col-lg-1 display-cell centered">Supprimer</th>\r\n              </tr>\r\n\r\n              <tr ng-repeat="benevole in $ctrl.benevoles | orderBy:\'name\'" ng-if="!benevole.isWorking">\r\n                <td class="hidden-xs">{{ benevole.titre }}</td>\r\n                <td>{{ benevole.name }}</td>\r\n                <td>{{ benevole.firstName }}</td>\r\n                <td class="hidden-xs">{{ benevole.address }}</td>\r\n                <td>{{ benevole.phone }}</td>\r\n                <td class="centered"><button class="btn btn-success glyphicon glyphicon-ok" ng-click="$ctrl.toggle(benevole)"></button></td>\r\n                <td class="centered"><button class="btn btn-danger glyphicon glyphicon-remove-circle" ng-click="$ctrl.removeBenevole(benevole)"></button></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <center>\r\n        <button class="btn btn-danger btn-sm" ng-click="$ctrl.dataTest()"> Données test</button> \r\n        <button class="btn btn-warning btn-sm" ng-click="$ctrl.deleteData()">Supprimer les données en cache</button>\r\n      </center>\r\n\r\n    </div>\r\n  </div>\r\n</div>'),n.put("app/components/bottombar/bottombar.html",'<div class="component">\r\n  <div class="container">\r\n    <!-- Footer -->\r\n    <div class="navbar navbar-static-bottom">\r\n      <div class="row">\r\n        <div class="col-lg-12">\r\n          <p style="text-align: center">Copyright &copy; 2017 - Adeline Gueniat et Francis Hêche</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>'),n.put("app/components/home/home.html",'<div class="component">\r\n\r\n<!-- Page Content -->\r\n    <div class="container">\r\n\r\n        <!-- Marketing Icons Section -->\r\n        <div class="row">\r\n            <div class="col-lg-12">\r\n                <h1 class="page-header">\r\n                    Bienvenue {{ $ctrl.getPage() }}\r\n                </h1>\r\n            </div>\r\n            \r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Missions en cours</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/missions#ongoing" class="glyphicon glyphicon-th-list" style="font-size: 50px; color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Missions en attente</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/missions#waitlist" class="glyphicon glyphicon-list-alt" style="font-size: 50px;color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Ajouter une mission</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/missions#ajout" class="glyphicon glyphicon-plus-sign" style="font-size: 50px; color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            \r\n\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Bénévoles disponibles</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/benevoles#actifs" class="glyphicon glyphicon-ok" style="font-size: 50px;color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Bénévoles inactifs</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/benevoles#inactifs" class="glyphicon glyphicon-remove" style="font-size: 50px;color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-md-4" style="text-align: center">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading">\r\n                        <h4><i class="fa fa-fw fa-check"></i> Ajouter un bénévole</h4>\r\n                    </div>\r\n                    <div class="panel-body">\r\n                        <p><a href="/projet-fheche_agueniat_2igpt/#!/benevoles#ajout" class="glyphicon glyphicon-plus-sign" style="font-size: 50px; color:black; text-decoration:none"></a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n\r\n        \r\n\r\n\r\n        \r\n\r\n    </div>\r\n    <!-- /.container -->\r\n\r\n    </div></div>'),n.put("app/components/login/login.html",'<div class="component">\r\n\r\n  <!-- Page Content -->\r\n  <div class="container">\r\n\r\n    <!-- Marketing Icons Section -->\r\n    <div class="row">\r\n      <div class="col-md-12" style="text-align: center; padding-top:40px">\r\n\r\n        <div style="display: block; margin-left: auto; margin-right: auto; width:100%; max-width: 500px">\r\n          <img src="./img/opnezrouge.jpg" width="90%" style="padding-bottom: 20px">\r\n        </div>\r\n\r\n        <div class="panel panel-default" style="display: block; margin-left: auto; margin-right: auto; width:90%; max-width: 400px">\r\n\r\n          <div class="panel-heading">\r\n            <h4><i class="fa fa-fw fa-check"></i> Connexion</h4>\r\n          </div>\r\n\r\n          <div class="panel-body">\r\n            <form vmsg-form ng-submit="showSubmitMessage()">\r\n              <div class="form-group" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n                <input ng-model="usrLog" class="form-control" type="text" placeholder="Nom d\'utilisateur" vmsg="{hideTrigger: \'keydown\'}" required ng-minlength="3">\r\n              </div>\r\n\r\n              <div class="form-group" style="display: block; margin-left: auto; margin-right: auto; width:90%">  \r\n                <input ng-model="pwdLog" class="form-control" type="password" placeholder="Mot de passe" vmsg="{hideTrigger: \'keydown\'}" required ng-minlength="4">\r\n              </div>\r\n        \r\n              <div class="form-group" style="display: block; margin-left: auto; margin-right: auto; width:90%">\r\n                <input type="submit" value="Connexion" class="btn btn-danger" style="width: 100%" ng-click="$ctrl.userLogin(usrLog, pwdLog)" ng-disabled="form.$invalid">\r\n              </div>\r\n              \r\n            </form>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>'),n.put("app/components/missions/missions.html",'<div class="component">\n  <div class="container">\n    <!-- Marketing Icons Section -->\n    <div class="row">\n      <div class="col-lg-12">\n        <h1 class="page-header">\n          {{$ctrl.titre}}\n          <button class="btn btn-success" ng-click="show = !show; confirm = false;" style="display: block; float: right; text-decoration: none">Ajouter une mission</button>\n        </h1>\n      </div>\n\n      <div class="col-md-12">\n        <div class="panel panel-success" ng-show="show" id="ajout">\n          <div class="panel-heading">\n            <h4>Ajouter une mission</h4>\n          </div>\n\n          <div class="panel-heading">\n\n            <form name="form" ng-submit="$ctrl.addToMissions()" role="form" class="form-group">\n\n              <div class="form-group" ng-class="{ \'has-error\': form.date.$touched && form.date.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\n                <input type="date" class="form-control form-control-sm" name="date" id="date" placeholder="Date" ng-model="$ctrl.date" required>\n              </div>\n              <div class="form-group" ng-class="{ \'has-error\': form.heure.$touched && form.heure.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\n                <input type="time" class="form-control form-control-sm" name="heure" id="heure" placeholder="Heure" ng-model="$ctrl.heure" required>\n              </div>\n              <div class="form-group" ng-class="{ \'has-error\': form.depart.$touched && form.depart.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\n                <input type="text" class="form-control form-control-sm" name="depart" id="depart" placeholder="Départ" ng-model="$ctrl.depart" required>\n              </div>\n              <div class="form-group" ng-class="{ \'has-error\': form.destination.$touched && form.destination.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\n                <input type="text" class="form-control form-control-sm" name="destination" id="destination" placeholder="Destination" ng-model="$ctrl.destination" required>\n              </div>\n              <div class="form-group" ng-class="{ \'has-error\': form.client.$touched && form.client.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\n                <input type="text" class="form-control form-control-sm" name="client" id="client" placeholder="Nom du client" ng-model="$ctrl.client" required>\n              </div>\n              <div class="form-group" ng-class="{ \'has-error\': form.clientPhone.$touched && form.clientPhone.$error.required }" style="display: block; margin-left: auto; margin-right: auto; width:100%">\n                <input type="text" class="form-control form-control-sm" name="clientPhone" id="clientPhone" placeholder="Numéro de téléphone du client" ng-model="$ctrl.clientPhone" required>\n              </div>\n\n              <div style="text-align: center">\n                <span ng-show="form.date.$touched && form.date.$error.required" class="alert-form">Date requise.</span>\n                <span ng-show="form.heure.$touched && form.heure.$error.required" class="alert-form">Heure requise.</span>\n                <span ng-show="form.depart.$touched && form.depart.$error.required" class="alert-form">Départ requis.</span>\n                <span ng-show="form.destination.$touched && form.destination.$error.required" class="alert-form">Destination requise.</span>\n                <span ng-show="form.client.$touched && form.client.$error.required" class="alert-form">Nom du client. requis</span>\n                <span ng-show="form.clientPhone.$touched && form.clientPhone.$error.required" class="alert-form">Numéro de téléphone du client requis.</span>\n              </div>\n\n              <div class="form-actions form-group">\n                <button type="submit" ng-disabled="form.$invalid" ng-click="show = !show; confirm = true" class="btn btn-success btn-sm btn-block">Ajouter</button>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class="panel panel-success" ng-show="confirm">\n          <div class="panel-heading">\n            <h4>Le trajet reliant {{$ctrl.depart}} à {{$ctrl.destination}}, demandé par {{ $ctrl.client }}, a été ajouté à la liste d\'attente.</h4>\n            <button class="btn btn-danger" ng-click="$ctrl.rollback(); confirm = false; rollback = true;">Annuler</button>\n          </div>\n        </div>\n\n        <div class="panel panel-danger" ng-show="rollback">\n          <div class="panel-heading">\n            <h4>Opération annulée.</h4>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-md-12" id="waitlist">\n        <div class="panel panel-default">\n          <div class="panel-heading">\n            <h4><i class="fa fa-fw fa-check"></i>En attente</h4>\n          </div>\n          <div class="panel-body">\n            <table class="table">\n              <tr>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Date / Heure</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Départ</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Destination</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Client</th>\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Tél. client</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Attribuer un chauffeur</th>\n              </tr>\n\n              <tr ng-repeat="mission in $ctrl.missions" ng-if="mission.isWaiting">\n                <td class="col-xs-1">{{ mission.date }} / {{ mission.heure }}</td>\n                <td>{{ mission.depart }}</td>\n                <td>{{ mission.destination }}</td>\n                <td class="col-xs-1">{{ mission.client }}</td>\n                <td>{{ mission.clientPhone }}</td>\n                <td class="centered">\n                    <select class="form-control" name="selectBenevole" id="selectBenevole" ng-model="benevole">\n                      <option ng-repeat="benevole in $ctrl.listebenevoles" ng-value="benevole" ng-if="benevole.isWorking && !benevole.onDuty">\n                        {{benevole.firstName}} {{benevole.name}}\n                      </option>\n                    </select>\n                    \n                    <input type="submit" value="Lancer la mission" class="btn btn-success" ng-click="$ctrl.putOnDuty(benevole, mission);" style="width: 100%; text-decoration: none; margin: 10px">\n                </td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-md-12" id="ongoing">\n        <div class="panel panel-default">\n          <div class="panel-heading">\n            <h4><i class="fa fa-fw fa-check"></i>En cours</h4>\n          </div>\n          <div class="panel-body">\n            <table class="table">\n              <tr>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Date / Heure</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Départ</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Destination</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Client</th>\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Tél. client</th>\n                <th class="col-xs-2 col-md-2 col-lg-2 display-cell">Chauffeur</th>\n                <th class="col-xs-1 col-md-2 col-lg-1 display-cell centered">Validation</th>\n              </tr>\n\n              <tr ng-repeat="mission in $ctrl.missions" ng-if="(mission.isWaiting === false && mission.isDone === false)">\n                <td class="col-xs-1">{{ mission.date }} / {{ mission.heure }}</td>\n                <td>{{ mission.depart }}</td>\n                <td>{{ mission.destination }}</td>\n                <td class="col-xs-1">{{ mission.client }}</td>\n                <td>{{ mission.clientPhone }}</td>\n                <td>{{ mission.driver.firstname }} {{ mission.driver.name}} </td>\n                  <td class="centered"><button class="btn btn-secondary glyphicon glyphicon-ok" ng-click="$ctrl.archive(mission)"></button></td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-md-12">\n        <div class="panel panel-default">\n          <div class="panel-heading">\n            <h4><i class="fa fa-fw fa-check"></i> Historique</h4>\n          </div>\n          <div class="panel-body">\n            <table class="table">\n              <tr>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Date / Heure</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Départ</th>\n                <th class="col-xs-1 col-md-2 col-lg-2 display-cell">Destination</th>\n                <th class="col-xs-1 col-md-2 col-lg-3 display-cell">Client</th>\n                <th class="col-xs-1 col-md-2 col-lg-3 display-cell">Chauffeur</th>\n              </tr>\n              <tr ng-repeat="mission in $ctrl.missions" ng-if="mission.isDone">\n                <td>{{ mission.date }} / {{ mission.heure }}</td>\n                <td>{{ mission.depart }}</td>\n                <td>{{ mission.destination }}</td>\n                <td>{{ mission.client }}</td>\n                <td>{{ mission.driver.firstname }} {{ mission.driver.name }}</td>\n\n              </tr>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <center><button class="btn btn-danger btn-sm" ng-click="$ctrl.dataTest()"> Données test</button> <button class="btn btn-warning btn-sm" ng-click="$ctrl.deleteData()">Supprimer les données en cache</button></center>\n\n  </div>\n</div>'),n.put("app/components/navbar/navbar.html",'<div class="component">\r\n  <!-- Static navbar -->\r\n  <nav class="navbar navbar-inverse navbar-fixed-top" ng-hide="$ctrl.pageLogin()">\r\n    <div class="container">\r\n      <div class="navbar-header">\r\n        <button type="button" class="navbar-toggle" ng-init="isCollapsed = true" ng-click="isCollapsed = !isCollapsed">\r\n\r\n            <span class="sr-only">Toggle navigation</span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n            <span class="icon-bar"></span>\r\n          </button>\r\n        <span class="navbar-brand" style="color:#d9534f"> Opération Nez Rouge</span>\r\n      </div>\r\n      <div id="navbar" class="navbar-collapse" ng-class="{collapse: isCollapsed}">\r\n        <ul class="nav navbar-nav">\r\n          <li><a ng-href="/projet-fheche_agueniat_2igpt/#!/accueil" ng-click="isCollapsed = true">Accueil</a></li>\r\n          <li><a ng-href="/projet-fheche_agueniat_2igpt/#!/missions" ng-click="isCollapsed = true">Missions</a></li>\r\n          <li><a ng-href="/projet-fheche_agueniat_2igpt/#!/benevoles" ng-click="isCollapsed = true">Bénévoles</a></li>\r\n        </ul>\r\n        <ul class="nav navbar-nav navbar-right">\r\n          <li><a><span class="glyphicon glyphicon-user"></span> {{$ctrl.getUser()}}</a></li>\r\n          \r\n          <li><a href="" ng-click="$ctrl.userLogout()"><span class="glyphicon glyphicon-log-out"></span> Déconnexion</a></li>\r\n        </ul>\r\n      </div>\r\n      <!--/.nav-collapse -->\r\n    </div>\r\n  </nav>\r\n</div>');
}]),angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-759e7a51f9.js.map
