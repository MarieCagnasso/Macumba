const sql = require("./db.js");

const Rescue = function(rescue){
        this.date = rescue.date;
        this.description = rescue.description;
        this.individualRescue = rescue.individualRescue;
    };

Rescue.create = (newRescue, result) => {
    sql.query("INSERT INTO rescues SET ?", newTutorial, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created rescue: ", { id: res.insertId, ...newRescue });
        result(null, { id: res.insertId, ...newRescue });
    });
};