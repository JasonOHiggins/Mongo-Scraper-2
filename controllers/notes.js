


var Note = require("../models/Note");
var makeDate = require("../scripts/date");

module.exports = {
    get: function(data, cb) {
        Note.find({
            _headlineId: data._headlineId
        }, cb);
    },
    save: function(data, cb) {
        var newNote = {
            _headlineId: data._id,
            data: madeDate(),
            noteText: data.noteText
        };

        Note.create(newNote, function (err, doc) {
            if (err) {
                console.log(err);
            }
            else{
                console.log(doc);
                cb(doc);
            }
        });
    },
}