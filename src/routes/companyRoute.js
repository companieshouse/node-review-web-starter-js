const router = require('express').Router();
const createHandler = './handlers/company/create';
const viewHandler = './handlers/company/view';

router.post('/create', (req, res, next) => {
	createHandler.execute(req, res)
		.then(viewData => {
			res.render('company/create', viewData);
		});
});

router.get('/details', (req, res, next) => {
	viewHandler.execute(req, res)
		.then(viewData => {
			res.render('company/details', viewData);
		});
});

module.exports = router;
