const router = require('express').Router();
const CreateHandler = './handlers/company/create';
const DetailsHandler = './handlers/company/details';

router.post('/create', (req, res, next) => {
	const handler = new CreateHandler();
	const viewData =  await handler.execute(req, res, 'POST');
	res.render('company/create', viewData);
});

router.get('/details', (req, res, next) => {
	const handler = new DetailsHandler();
	const viewData =  await handler.execute(req, res);
	res.render('company/details', viewData);
});

module.exports = router;
