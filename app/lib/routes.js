const router = require('express').Router()

const validation = require('./components/validation')
const rule = require('./components/validation').rule

const indexController = require('./controllers')

// validate entry parameters on route level, not to pollute controllers logic
router.get('/:queryText?', validation.checkRoute({
  params: {
    queryText: rule.string().required(),
  },
}), indexController.home)


module.exports = router
