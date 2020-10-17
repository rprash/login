const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
var Registration = mongoose.model("Registration");
var request = require("superagent");

if (errors.isEmpty()) {
  const registration = new Registration(req.body);
  registration
    .save()
    .then(() => {
      res.send("Thank you for your registration!");
    })
    .catch((err) => {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    });
} else {
}

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  console.log(req.body);
  var mailchimpInstance = "us-17",
    listUniqueId = "71fee92f5d",
    mailchimpApiKey = "03d77e97a2ae96648f930752975d9d25-us17";

  app.post("/signup", function (req, res) {
    request
      .post(
        "https://" +
          mailchimpInstance +
          ".api.mailchimp.com/3.0/lists/" +
          listUniqueId +
          "/members/"
      )
      .set("Content-Type", "application/json;charset=utf-8")
      .set(
        "Authorization",
        "Basic " + new Buffer("any:" + mailchimpApiKey).toString("base64")
      )
      .send({
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
          FNAME: req.body.firstname,
          LNAME: req.body.lastlame,
        },
      })
      .end(function (err, response) {
        if (
          response.status < 300 ||
          (response.status === 400 && response.body.title === "Member Exists")
        ) {
          res.send("Signed Up!");
        } else {
          res.send("Sign Up Failed :(");
        }
      });
  });
  res.render("form");
});

module.exports = router;
