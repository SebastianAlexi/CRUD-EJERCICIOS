const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("products",{
			p: products,
		   })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
const id = req.params.id;
const searchProduct = products.find((p)=>{
return p.id == id
});
	res.render("detail",{
		p: searchProduct,
	})
	},

	// Create - Form to create
	create: (req, res) => {
	res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
	res.send("producto creado")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id;
const searchProduct = products.find((p)=>{
return p.id == id})
	res.render("product-edit-form",{
p:searchProduct,
	})
	},
	// Update - Method to update
	update: (req, res) => {
	res.send("producto editado")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
	res.send("producto eliminado")
	}
};

module.exports = controller;