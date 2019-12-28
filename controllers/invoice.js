var Invoice = require('./../modal/invoice')

// create some helper functions to work on the database
const userHelper = { createInvoice : async ({ ssn, tax, vat , amount }) => { 
  return await Invoice.create({ ssn:ssn, amount:amount, tax:tax, vat:vat });
},
updateInvoice : async ({ ssn, tax, vat , amount }) => { 
  return await Invoice.update({amount:amount,tax:tax,vat:vat}, {where:{ssn:ssn }});
},
getAllInvoices : async () => {
  return await Invoice.findAll();
},
getInvoice : async obj => {
  return await Invoice.findOne({
  where: obj,
})
}
};

module.exports = userHelper