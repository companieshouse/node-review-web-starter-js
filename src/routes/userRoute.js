const router = require('express').Router();
const profileHandler = './handlers/user/profile';
const settingsHandler = './handlers/user/settings';

router.get('/profile', (req, res, next) => {
	createHandler.execute(req, res)
		.then(viewData => {
			res.render('user/profile', viewData);
		});
});

router.get('/settings', (req, res, next) => {
	createHandler.execute(req, res)
		.then(viewData => {
			res.render('user/settings', viewData);
		});
});

router.post('/settings', (req, res, next) => {
	createHandler.execute(req, res, 'post')
		.then(viewData => {
			res.render('user/settings', viewData);
		});
});

module.exports = router;
