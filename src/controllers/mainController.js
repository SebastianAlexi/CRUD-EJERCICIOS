const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res,) => {
const productsVisited = products.filter((p)=>{
	return p.category == "visited"
})
const productsInsale = products.filter((p)=>{
	return p.category == "in-sale"
})
		res.render("index", {
			 pv: productsVisited,
			 pis: productsInsale,
			})
	},
	// search: (req, res) => {
	// 	// Do the magic
	// },
};

module.exports = controller;
