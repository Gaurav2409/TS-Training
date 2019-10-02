const fs = require('fs')


class myNotes {

 getNotes = function() {
    return 'Your notes ....'
}

 setNotes = function(a) {
    fs.appendFileSync('./notes.txt', a)
}

}

module.exports = myNotes