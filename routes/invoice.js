var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var invoiceHelper = require("./../controllers/invoice");

const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => res.send("Connection has been established successfully."))
    .catch(err => res.send("Unable to connect to the database:" + err));
});

router.get("/getall", function(req, res, next) {
  invoiceHelper.getAllInvoices().then(invoice => res.json(invoice));
});

router.get("/get/:id", function(req, res, next) {
  const { inv_id } = req.params.id;
  invoiceHelper
    .getInvoice({ inv_id: inv_id })
    .then(invoice => res.json(invoice));
});

router.post("/create", function(req, res, next) {
  const {
    inv_user_id,
    inv_customer_ssn,
    inv_customer_name,
    inv_cum_id,
    inv_type,
    inv_crc_id,
    inv_due_date,
    inv_deadline_date,
    inv_total,
    inv_note,
    inv_desc,
    inv_status,
    inv_isdelete,
    inv_created,
    inv_updated
  } = req.body;
  invoiceHelper
    .createInvoice({
      inv_user_id,
      inv_customer_ssn,
      inv_customer_name,
      inv_cum_id,
      inv_type,
      inv_crc_id,
      inv_due_date,
      inv_deadline_date,
      inv_total,
      inv_note,
      inv_desc,
      inv_status,
      inv_isdelete,
      inv_created,
      inv_updated
    })
    .then(invoice => res.json({ invoice, msg: "invoice created successfully" }))
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/update", function(req, res, next) {
  const {
    inv_id,
    inv_user_id,
    inv_customer_ssn,
    inv_customer_name,
    inv_cum_id,
    inv_type,
    inv_crc_id,
    inv_due_date,
    inv_deadline_date,
    inv_total,
    inv_note,
    inv_desc,
    inv_status,
    inv_isdelete,
    inv_created,
    inv_updated
  } = req.body;
  invoiceHelper
    .updateInvoice({
      inv_id,
      inv_user_id,
      inv_customer_ssn,
      inv_customer_name,
      inv_cum_id,
      inv_type,
      inv_crc_id,
      inv_due_date,
      inv_deadline_date,
      inv_total,
      inv_note,
      inv_desc,
      inv_status,
      inv_isdelete,
      inv_created,
      inv_updated
    })
    .then(invoice => {
      if (invoice[0])
        res.json({ invoice, msg: "invoice updated successfully" });
      else res.json({ invoice, msg: "invoice update error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/statuschange", function(req, res, next) {
  const { inv_id, inv_status } = req.body;
  invoiceHelper
    .updateInvoiceStatus({ inv_id, inv_status })
    .then(invoice => {
      if (invoice[0])
        res.json({ invoice, msg: "invoice modified successfully" });
      else res.json({ invoice, msg: "invoice modify error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/delete", function(req, res, next) {
  const { inv_id } = req.body;
  invoiceHelper
    .deleteInvoice({ inv_id })
    .then(invoice => {
      if (invoice[0])
        res.json({ invoice, msg: "invoice deleted successfully" });
      else res.json({ invoice, msg: "invoice delete error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

module.exports = router;
