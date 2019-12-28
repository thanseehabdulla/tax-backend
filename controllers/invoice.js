var Invoice = require('./../modal/invoice')

// create some helper functions to work on the database
const userHelper = { createInvoice : async ({ username, password }) => { 
  return await Invoice.create({ ssn:ssn, amount:amount, tax:tax, vat:vat });
},
updateInvoice : async ({ username, password }) => { 
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