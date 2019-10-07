import http from 'http'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import {port} from '../config'
import {bootstrap, common} from './services'
import cors from 'cors'

const app = express()

app.use(logger('dev'))
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

require('./routes')(app)
bootstrap(app)

//handle error response
app.use((err, req, res, next) => {
	common.errorRes(res, err)   
})

app.set('port', port)

const server = http.createServer(app)
server.listen(port, () => {
	console.log('Ready console on port %d', server.address().port)
})
