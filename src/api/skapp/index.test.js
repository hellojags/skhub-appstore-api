import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Skapp } from '.'

const app = () => express(apiRoot, routes)

let skapp

beforeEach(async () => {
  skapp = await Skapp.create({})
})

test('POST /skapps 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ version: 'test', skapp_id: 'test', skylink: 'test', title: 'test', filename: 'test', fileformat: 'test', description: 'test', type: 'test', directory: 'test', size: 'test', category: 'test', developer: 'test', blacklist: 'test', blacklist_date: 'test', skhub_blacklist: 'test', skhub_blacklist_date: 'test', portal: 'test', searchable: 'test', ratings: 'test', reviews: 'test', compatibility: 'test', languages: 'test', age_rating: 'test', price: 'test', app_support: 'test', git_url: 'test', auth_code: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.version).toEqual('test')
  expect(body.skapp_id).toEqual('test')
  expect(body.skylink).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.filename).toEqual('test')
  expect(body.fileformat).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.directory).toEqual('test')
  expect(body.size).toEqual('test')
  expect(body.category).toEqual('test')
  expect(body.developer).toEqual('test')
  expect(body.blacklist).toEqual('test')
  expect(body.blacklist_date).toEqual('test')
  expect(body.skhub_blacklist).toEqual('test')
  expect(body.skhub_blacklist_date).toEqual('test')
  expect(body.portal).toEqual('test')
  expect(body.searchable).toEqual('test')
  expect(body.ratings).toEqual('test')
  expect(body.reviews).toEqual('test')
  expect(body.compatibility).toEqual('test')
  expect(body.languages).toEqual('test')
  expect(body.age_rating).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.app_support).toEqual('test')
  expect(body.git_url).toEqual('test')
  expect(body.auth_code).toEqual('test')
})

test('GET /skapps 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /skapps/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${skapp.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(skapp.id)
})

test('GET /skapps/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /skapps/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${skapp.id}`)
    .send({ version: 'test', skapp_id: 'test', skylink: 'test', title: 'test', filename: 'test', fileformat: 'test', description: 'test', type: 'test', directory: 'test', size: 'test', category: 'test', developer: 'test', blacklist: 'test', blacklist_date: 'test', skhub_blacklist: 'test', skhub_blacklist_date: 'test', portal: 'test', searchable: 'test', ratings: 'test', reviews: 'test', compatibility: 'test', languages: 'test', age_rating: 'test', price: 'test', app_support: 'test', git_url: 'test', auth_code: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(skapp.id)
  expect(body.version).toEqual('test')
  expect(body.skapp_id).toEqual('test')
  expect(body.skylink).toEqual('test')
  expect(body.title).toEqual('test')
  expect(body.filename).toEqual('test')
  expect(body.fileformat).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.type).toEqual('test')
  expect(body.directory).toEqual('test')
  expect(body.size).toEqual('test')
  expect(body.category).toEqual('test')
  expect(body.developer).toEqual('test')
  expect(body.blacklist).toEqual('test')
  expect(body.blacklist_date).toEqual('test')
  expect(body.skhub_blacklist).toEqual('test')
  expect(body.skhub_blacklist_date).toEqual('test')
  expect(body.portal).toEqual('test')
  expect(body.searchable).toEqual('test')
  expect(body.ratings).toEqual('test')
  expect(body.reviews).toEqual('test')
  expect(body.compatibility).toEqual('test')
  expect(body.languages).toEqual('test')
  expect(body.age_rating).toEqual('test')
  expect(body.price).toEqual('test')
  expect(body.app_support).toEqual('test')
  expect(body.git_url).toEqual('test')
  expect(body.auth_code).toEqual('test')
})

test('PUT /skapps/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ version: 'test', skapp_id: 'test', skylink: 'test', title: 'test', filename: 'test', fileformat: 'test', description: 'test', type: 'test', directory: 'test', size: 'test', category: 'test', developer: 'test', blacklist: 'test', blacklist_date: 'test', skhub_blacklist: 'test', skhub_blacklist_date: 'test', portal: 'test', searchable: 'test', ratings: 'test', reviews: 'test', compatibility: 'test', languages: 'test', age_rating: 'test', price: 'test', app_support: 'test', git_url: 'test', auth_code: 'test' })
  expect(status).toBe(404)
})

test('DELETE /skapps/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${skapp.id}`)
  expect(status).toBe(204)
})

test('DELETE /skapps/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
