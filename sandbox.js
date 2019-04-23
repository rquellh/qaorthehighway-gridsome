const fs = require('fs')
const datapath = './static/presentations/'

fs.readdir(datapath, (error, files) => {
    if (error) {
        console.log(`Error loading the presenations data. gridsome.server.js ${error}`)
    }
    
    for (const file of files) {
        console.log(file)
    }
})