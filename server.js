const next = require('next')
const micro = require('micro')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = micro((req, res) => handle(req, res))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:3000`)
  })
})
