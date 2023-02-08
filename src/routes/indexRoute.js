const router = require('express').Router();
const homeHandler = './handlers/index/home';

router.get('/', (req, res, next) => {
	homeHandler.execute(req, res)
		.then(viewData => {
			res.render('index/home', viewData);
		});
});

module.exports = router;
