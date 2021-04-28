const Endpoints = {
  PG: process.env.REACT_APP_PG_ENDPOINT || `http://localhost:${process.env.REACT_APP_PG_PORT}/api/pg`
}

export {
  Endpoints
}