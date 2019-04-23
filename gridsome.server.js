// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const data = require('./static/presentations/2019.json')

const fs = require('fs')
const pathToPresenations = './static/presentations/'

fs.readdir(pathToPresenations, (error, files) => {
  if (error) {
      console.log(`Error loading the presenations data. gridsome.server.js ${error}`)
  }
  
  for (const file of files) {
      console.log(file)
  }
})

var loadData = () => [
  
]
module.exports = function (api) {
  api.loadSource(store => {
    const contentType = store.addContentType({
      typeName: 'Session',
      route: '/2019/:slug'
    })

    for (const session of data.sessions) {
      var speaker = session.speaker.replace(/\s/g, '')
      var path = `/2019/${speaker}`

      contentType.addNode({
        id: undefined,
        title: session.title,
        path,
        fields: {
          speaker: session.speaker,
          bio: session.bio,
          title: session.title,
          abstract: session.abstract
        }
      })
    }
  })
}
