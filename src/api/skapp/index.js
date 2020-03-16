import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Skapp, { schema } from './model'

const router = new Router()
const { version, skapp_id, skylink, title, filename, fileformat, description, type, directory, size, category, developer, blacklist, blacklist_date, skhub_blacklist, skhub_blacklist_date, portal, searchable, ratings, reviews, compatibility, languages, age_rating, price, app_support, git_url, auth_code } = schema.tree

/**
 * @api {post} /skapps Create skapp
 * @apiName CreateSkapp
 * @apiGroup Skapp
 * @apiParam version Skapp's version.
 * @apiParam skapp_id Skapp's skapp_id.
 * @apiParam skylink Skapp's skylink.
 * @apiParam title Skapp's title.
 * @apiParam filename Skapp's filename.
 * @apiParam fileformat Skapp's fileformat.
 * @apiParam description Skapp's description.
 * @apiParam type Skapp's type.
 * @apiParam directory Skapp's directory.
 * @apiParam size Skapp's size.
 * @apiParam category Skapp's category.
 * @apiParam developer Skapp's developer.
 * @apiParam blacklist Skapp's blacklist.
 * @apiParam blacklist_date Skapp's blacklist_date.
 * @apiParam skhub_blacklist Skapp's skhub_blacklist.
 * @apiParam skhub_blacklist_date Skapp's skhub_blacklist_date.
 * @apiParam portal Skapp's portal.
 * @apiParam searchable Skapp's searchable.
 * @apiParam ratings Skapp's ratings.
 * @apiParam reviews Skapp's reviews.
 * @apiParam compatibility Skapp's compatibility.
 * @apiParam languages Skapp's languages.
 * @apiParam age_rating Skapp's age_rating.
 * @apiParam price Skapp's price.
 * @apiParam app_support Skapp's app_support.
 * @apiParam git_url Skapp's git_url.
 * @apiSuccess {Object} skapp Skapp's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Skapp not found.
 */
router.post('/',
  body({ version, skapp_id, skylink, title, filename, fileformat, description, type, directory, size, category, developer, blacklist, blacklist_date, skhub_blacklist, skhub_blacklist_date, portal, searchable, ratings, reviews, compatibility, languages, age_rating, price, app_support, git_url }),
  create)

/**
 * @api {get} /skapps Retrieve skapps
 * @apiName RetrieveSkapps
 * @apiGroup Skapp
 * @apiUse listParams
 * @apiSuccess {Object[]} skapps List of skapps.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /skapps/:id Retrieve skapp
 * @apiName RetrieveSkapp
 * @apiGroup Skapp
 * @apiSuccess {Object} skapp Skapp's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Skapp not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /skapps/:id/:auth_code Update skapp
 * @apiName UpdateSkapp
 * @apiGroup Skapp
 * @apiParam version Skapp's version.
 * @apiParam skapp_id Skapp's skapp_id.
 * @apiParam skylink Skapp's skylink.
 * @apiParam title Skapp's title.
 * @apiParam filename Skapp's filename.
 * @apiParam fileformat Skapp's fileformat.
 * @apiParam description Skapp's description.
 * @apiParam type Skapp's type.
 * @apiParam directory Skapp's directory.
 * @apiParam size Skapp's size.
 * @apiParam category Skapp's category.
 * @apiParam developer Skapp's developer.
 * @apiParam blacklist Skapp's blacklist.
 * @apiParam blacklist_date Skapp's blacklist_date.
 * @apiParam skhub_blacklist Skapp's skhub_blacklist.
 * @apiParam skhub_blacklist_date Skapp's skhub_blacklist_date.
 * @apiParam portal Skapp's portal.
 * @apiParam searchable Skapp's searchable.
 * @apiParam ratings Skapp's ratings.
 * @apiParam reviews Skapp's reviews.
 * @apiParam compatibility Skapp's compatibility.
 * @apiParam languages Skapp's languages.
 * @apiParam age_rating Skapp's age_rating.
 * @apiParam price Skapp's price.
 * @apiParam app_support Skapp's app_support.
 * @apiParam git_url Skapp's git_url.
 * @apiParam auth_code Skapp's auth_code.
 * @apiSuccess {Object} skapp Skapp's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Skapp not found.
 */
router.put('/:id',
  body({ version, skapp_id, skylink, title, filename, fileformat, description, type, directory, size, category, developer, blacklist, blacklist_date, skhub_blacklist, skhub_blacklist_date, portal, searchable, ratings, reviews, compatibility, languages, age_rating, price, app_support, git_url,auth_code }),
  update)

/**
 * @api {delete} /skapps/:id Delete skapp
 * @apiName DeleteSkapp
 * @apiGroup Skapp
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Skapp not found.
 */
router.delete('/:id/:auth_code',
  destroy)

export default router
