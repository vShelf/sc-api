const version = 'api'
const authHeaders = require('../middlewares/auth')

module.exports = (app) => {
  // program controller
	app.use(`/${version}/program`, require('../routes/program'))
	// course by program controller
	app.use(`/${version}/pcourse`, require('../routes/programCourse'))
  // course controller
	app.use(`/${version}/course`, require('../routes/course'))
  // file controller
	// app.use(`/${version}/file`, require('../routes/file'))
	// file by course controller
	app.use(`/${version}/cfile`, require('../routes/courseFile'))
  // user controller
  app.use(`/${version}/user`, require('../routes/user'))
}
