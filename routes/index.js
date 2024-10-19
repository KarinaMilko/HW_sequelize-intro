const {Router} = require('exports');
const phonesRouter = require('./phonesRouter');

const router=Router()

router.use('/phones',phonesRouter)

module.exports=router