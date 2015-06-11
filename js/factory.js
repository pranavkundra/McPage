appModule.factory('homeFactory', function() {
		var factory = {};

		factory.getPageTitle = function() {
			return home.page_title;
		};

		factory.getPersonName = function() {
			return home.person_name;
		}

		factory.getPersonImage = function() {
			return home.personal_image_URL;
		}

		factory.getDescriptor = function() {
			return home.one_line_descriptor;
		}

		factory.getResumeLink = function() {
			return home.resume_link;
		}

		return factory;
});

appModule.factory('aboutFactory', function() {
		var factory = {};

		factory.getPersonalDescription = function() {
			return about.personal_description;
		}

		return factory;
});

appModule.factory('skillFactory', function() {
		var factory = {};

		factory.getSkills = function() {
			return skills.skills;
		}

		return factory;
});

appModule.factory('experienceFactory', function() {
		var factory = {};

		factory.getExperience = function() {
			return experience.work;
		}

		return factory;
});

appModule.factory('educationFactory', function() {
		var factory = {};

		factory.getLessons = function() {
			return study.education;
		}

		return factory;
});

appModule.factory('projectFactory', function() {
		var factory = {};

		factory.getProjects = function() {
			return projects.project;
		}

		return factory;
});

appModule.factory('publicationFactory', function() {
		var factory = {};

		factory.getPapers = function() {
			return publications.publication;
		}

		return factory;
});

appModule.factory('webFactory', function() {
		var factory = {};

		factory.getOnlinePresence = function() {
			return webpresence.webpresence;
		}

		return factory;
});

appModule.factory('contactFactory', function() {
		var factory = {};

		factory.getContacts = function() {
			return contact.contact;
		}

		return factory;
});