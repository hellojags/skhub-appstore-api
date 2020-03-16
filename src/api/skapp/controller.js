import { success, notFound,failure,failure_auth_code, success_200 } from '../../services/response/'
import { Skapp } from '.'

var crypto = require('crypto');

export const create = ({ bodymen: { body } }, res, next) => {
  var secretKey = crypto.randomBytes(20).toString("hex");
  console.log("## secretKey ",secretKey)
  body.auth_code = secretKey
  Skapp.create(body)
    .then((skapp) => skapp.view_mod(true))
    .then(success(res, 201))
    .catch(next)
  }
export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Skapp.find(query, select, cursor)
    .then((skapps) => skapps.map((skapp) => skapp.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) => 
  Skapp.findById(params.id)
    .then(notFound(res))
    .then((skapp) => skapp ? skapp.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
//export const update = ({ bodymen: { body }, querymen: { query, select, cursor } }, res, next) =>
{
  //console.log("@@@ params",params)
  Skapp.findById(params.id)
    .then(notFound(res))
    .then((skapp) => { 
      //console.log("skapp.auth_code ",skapp.auth_code); 
      //console.log("body.auth_code ",body.auth_code); 
      if (skapp.auth_code == body.auth_code)
      {
        //console.log("--------- PUT: AUTH_CODE MATCHED !! --------"); 
        return skapp ? Object.assign(skapp, body).save() : null
      }
      else
      {
        //console.log("XXXXXXX   PUT: AUTH_CODE NOT MATCHED !!   XXXXXXXX");
        return failure_auth_code(res)
      }
    }) 
    .then((skapp) => skapp ? skapp.view(true) : null)
    .then(success(res))
    .catch(next)
}

export const destroy = ({ params }, res, next) =>
  Skapp.findById(params.id)
    .then(notFound(res))
    .then((skapp) => { 
      if (skapp.auth_code == params.auth_code)
      {
        //console.log("------ AUTH_CODE MATCHED !! --------"); 
        skapp ? skapp.remove() : null
        return success_200(res, 204,'Skapp Deleted Successfully')
      }
      else
      {
        //console.log("XXXXXXX   AUTH_CODE NOT MATCHED !!   XXXXXXXX");
        return failure_auth_code(res)
      }
    })
    .catch(next)
