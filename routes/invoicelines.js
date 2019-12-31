var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var invoiceHelper = require("./../controllers/invoicelines");

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
  const { inl_id } = req.params.id;
  invoiceHelper
    .getInvoice({ inl_id: inl_id })
    .then(invoice => res.json(invoice));
});

router.post("/create", function(req, res, next) {
  const {
    inl_product,
    inl_quantity,
    inl_price,
    inl_tax_id,
    inl_discount_perc,
    inl_net_price,
    inl_isdelete,
    inl_created_by,
    inl_updated_by
  } = req.body;
  invoiceHelper
    .createInvoice({
      inl_product,
      inl_quantity,
      inl_price,
      inl_tax_id,
      inl_discount_perc,
      inl_net_price,
      inl_isdelete,
      inl_created_by,
      inl_updated_by
    })
    .then(invoice => res.json({ invoice, msg: "invoice created successfully" }))
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/update", function(req, res, next) {
  const {
    inl_id,
    inl_product,
    inl_quantity,
    inl_price,
    inl_tax_id,
    inl_discount_perc,
    inl_net_price,
    inl_isdelete,
    inl_created_by,
    inl_updated_by
  } = req.body;
  invoiceHelper
    .updateInvoice({
      inl_id,
      inl_product,
      inl_quantity,
      inl_price,
      inl_tax_id,
      inl_discount_perc,
      inl_net_price,
      inl_isdelete,
      inl_created_by,
      inl_updated_by
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

router.post("/delete", function(req, res, next) {
  const { inl_id } = req.body;
  invoiceHelper
    .deleteInvoice({ inl_id })
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
