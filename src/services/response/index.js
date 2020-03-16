export const success = (res, status) => (entity) => {
  if (entity) {
    res.status(status || 200).json({'status':'success', 'result':entity})
  }
  else
  {
    return res.status(200).json({'status':'failure'})
  }
  return null
}

export const success_200 = (res, status, msg) => {
  return res.status(status || 200).json({'status':'success', 'msg':msg})
}

export const failure = (res, errorMsg) => {
  if(errorMsg)
  {
    return res.status(200).json({'status':'failure','errorMsg':errorMsg})
  }
  else
  {
    return res.status(200).json({'status':'failure'})
  }
  
}

export const notFound = (res) => (entity) => {
  if (entity) {
    return entity
  }
  //res.status(404).end()
  return res.status(200).json({'status':'failure','errorMsg':'not found'})
  //return null
}

export const failure_auth_code = (res) => {
  return res.status(200).json({'status':'failure','errorMsg':'INVALID_AUTH_CODE'})
}

export const authorOrAdmin = (res, user, userField) => (entity) => {
  if (entity) {
    const isAdmin = user.role === 'admin'
    const isAuthor = entity[userField] && entity[userField].equals(user.id)
    if (isAuthor || isAdmin) {
      return entity
    }
    res.status(401).end()
  }
  return null
}
