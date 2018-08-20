const routes = require("next-routes")

const router = [
  { name: "index", pattern: "/", page: "index" },
  { name: "about", pattern: "/about", page: "about" },
  { name: "profile", pattern: "/:username", page: "profile" }
]

module.exports = router.reduce((routes, p) => routes.add(p), routes())
