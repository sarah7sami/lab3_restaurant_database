const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant");

const app = express();

mongoose
.connect(process.env.MONGODB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
console.log("MongoDB Connected");
})
.catch(err => console.log(err));

// return all restaurants
app.get("/restaurants", (req, res) => {
Restaurant.find({})
.then(restaurants => {
res.send(restaurants);
})
.catch(err => {
res.status(500).send(err);
});
});

// to test: http://localhost:3000/restaurants

// return restaurants by cuisine
app.get("/restaurants/cuisine/:cuisine", (req, res) => {
Restaurant.find({ cuisine: req.params.cuisine })
.then(restaurants => {
res.send(restaurants);

})
.catch(err => {
res.status(500).send(err);
});
});

// to test: http://localhost:3000/restaurants/cuisine/Italian

// return the selected columns and sort by restaurant_id
app.get("/restaurants", (req, res) => {
let sortOrder = req.query.sortBy;

if (sortOrder === "ASC") {
Restaurant.find({}, "id cuisines name city restaurant_id")
.sort({ restaurant_id: 1 })
.then(restaurants => {
res.send(restaurants);
})
.catch(err => {
res.status(500).send(err);
});
} else if (sortOrder === "DESC") {
Restaurant.find({}, "id cuisines name city restaurant_id")
.sort({ restaurant_id: -1 })
.then(restaurants => {
res.send(restaurants);
})
.catch(err => {
res.status(500).send(err);
});
} else {
res.send("Invalid sort order. Please specify either ASC or DESC.");
}
});

// to test: http://localhost:3000/restaurants?sortBy=ASC

// return restaurants by cuisine and city
app.get("/restaurants/Delicatessen", (req, res) => {
Restaurant.find(
{ cuisines: "Delicatessen", city: { $ne: "Brooklyn" } },
"cuisines name city -_id"
)
.sort({ name: 1 })
.then(restaurants => {
res.send(restaurants);
})
.catch(err => {
res.status(500).send(err);
});
});

// to test: http://localhost:3000/restaurants/Delicatessen

app.listen(3000, () => {
console.log("Server running on port 3000");
});
