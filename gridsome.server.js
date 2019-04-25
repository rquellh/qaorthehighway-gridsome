// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const events = require('./static/data/data.json')

module.exports = function (api) {
  for (const event of events) {
    api.loadSource(store => {
      const contentType = store.addContentType({
        typeName: 'Session'
      })

      for (const session of event.sessions) {
        var speaker = session.speaker.replace(/\s/g, '')
        var path = `/${event.year}/${speaker}`

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


}
