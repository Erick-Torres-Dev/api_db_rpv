import knex from 'knex'
import knexConfig from '../../knexfile.js'
import 'dotenv/config'

const environment = process.env.NODE_ENV || 'development'

const database = knex(knexConfig[environment])

export { database }