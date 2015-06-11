
var appModule = angular.module('demoApp', []);

appModule.controller('homeController', function($scope, homeFactory) {
    $scope.page_title = homeFactory.getPageTitle();
    $scope.person_name = homeFactory.getPersonName();
    $scope.person_image = homeFactory.getPersonImage();
    $scope.descriptor = homeFactory.getDescriptor();
    $scope.resume_link = homeFactory.getResumeLink();
});

appModule.controller('aboutController', function($scope, aboutFactory) {
    $scope.about_tables = aboutFactory.getPersonalDescription();
});

appModule.controller('skillsController', function($scope, skillFactory) {
    $scope.skill_tables = skillFactory.getSkills();
});

appModule.controller('experienceController', function($scope, experienceFactory) {
    $scope.work_tables = experienceFactory.getExperience();
});

appModule.controller('educationController', function($scope, educationFactory) {
    $scope.study_tables = educationFactory.getLessons();
});

appModule.controller('projectController', function($scope, projectFactory) {
    $scope.project_tables = projectFactory.getProjects();
});

appModule.controller('publicationController', function($scope, publicationFactory) {
    $scope.pub_tables = publicationFactory.getPapers();
});

appModule.controller('webController', function($scope, webFactory) {
    $scope.web_tables = webFactory.getOnlinePresence();
});

appModule.controller('contactsController', function($scope, contactFactory) {
    $scope.contact_tables = contactFactory.getContacts();
});