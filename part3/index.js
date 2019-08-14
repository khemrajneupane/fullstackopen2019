/**Ex 3.13 to 3.18 **/
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Phonebook = require("./models/phonebook");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

var morgan = require("morgan");

morgan.token("data", function(req) {
  if (req.method === "DELETE") {
    return JSON.stringify(req.params);
  } else if (req.method === "POST") {
    return JSON.stringify(req.body);
  }
  return;
});

app.use(morgan(":method :url :status :response-time ms :data"));

//using middle-ware for static file to run index.js from the front-end
app.use(express.static("build"));

/**http://localhost:3001/api/persons */

app.get("/api/persons", (request, response, next) => {
  Phonebook.find({})
    .then(values => {
      response.json(values.map(value => value.toJSON()));
    })
    .catch(error => next(error));
});

/**POST routing http://localhost:3001/api/persons */
app.post("/api/persons/", (req, res, next) => {
  const body = req.body;

  const phonebook = new Phonebook({
    name: body.name,
    number: body.number
  });

  phonebook
    .save()
    .then(savedPhonebook => {
      res.json(savedPhonebook.toJSON());
    })
    .catch(error => {
      if (error.name === "ValidationError") {
        console.log(error);
        res.status(400).send(error.message);
      } else {
        next(error);
      }
    });
});

/**PUT routing http://localhost:3001/api/persons/:id */
app.put("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;

  const phonebook = {
    name: request.body.name,
    number: request.body.number
  };
  Phonebook.findByIdAndUpdate(id, phonebook)
    .then(updatedPhonebook => {
      response.json(updatedPhonebook.toJSON());
    })
    .catch(error => {
      //console.log(error);
      if (error.name === "CastError") {
        response.send(error.message);
      } else {
        next(error);
      }
    });
});

/**Delete routing http://localhost:3001/api/persons/:id */
app.delete("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;

  Phonebook.findByIdAndRemove(id)
    .then(values => {
      if (values) {
        res.json(values.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch(error => {
      if (error.name === "CastError" && error.path === "_id") {
        res.send("invalid id");
      } else {
        next(error);
      }
    });
});

/**getby id routing http://localhost:3001/api/persons/:id */

app.get("/api/persons/:id", (req, res, next) => {
  Phonebook.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON());
      } else {
        res.status(204).end();
      }
    })
    .catch(error => {
      if (error.name === "CastError" && error.path === "_id") {
        res.send("invalid id");
      } else {
        next(error);
      }
    });
});
/**http://localhost:3001/info */
app.get("/info", (req, res, next) => {
  Phonebook.find({})
    .then(obj => {
      let date = new Date();
      res.send(`Phonebook has info for ${obj.length} people. <br />${date}`);
    })
    .catch(error => next(error));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
