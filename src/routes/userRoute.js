const router = require('express').Router();
const ProfileHandler = './handlers/user/profile';
const SettingsHandler = './handlers/user/settings';

router.get('/profile', (req, res, next) => {
	const handler = new ProfileHandler();
	const viewData =  await handler.execute(req, res);
	res.render('user/profile', viewData);
});

router.get('/settings', (req, res, next) => {
	const handler = new SettingsHandler();
	const viewData =  await handler.execute(req, res);
	res.render('user/settings', viewData);
});

router.post('/settings', (req, res, next) => {
	const handler = new SettingsHandler();
	const viewData =  await handler.execute(req, res, 'POST');
	res.render('user/settings', viewData);
});

module.exports = router;
