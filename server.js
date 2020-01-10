const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
 {
}
app.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "Note-Taker-master/public/notes.html"));
    console.log("Your Notes!");

})
app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "NOTE-TAKER-MASTER/public/index.html"));
    console.log("Your Index!");

})
app.post("/notes", (request, response) => {
    //response.sendFile(path.join(__dirname, "..", "public/notes.html"));
    console.log("Your Notes are saved!", request.body);
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});