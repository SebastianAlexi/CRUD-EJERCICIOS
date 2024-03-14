const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
		const {name, price, discount,category,description,image} = req.body
		const idGenerator = products[products.length -1].id + 1
		let product = {
			id: idGenerator,
			name: name,
			price:price,
			discount: discount,
			category: category === "in-sale"? "in-sale" : category == "visited"? "visited" : null,
			description: description,
			image: image,
		}
	products = [...products, product]

	products = JSON.stringify(products, null, 3);
  const ProductsPath = path.join(__dirname, "../data/productsDataBase.json");
  fs.writeFileSync(ProductsPath, products, "utf-8");

	res.redirect("/")
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
		const id = req.params.id
		const {name, price, discount,category,description,image} = req.body
const searchProd = products.map((p)=>{
	if(p.id === +id){
	let productEdited = {
		...p,
		name: name,
		price:price,
		discount: discount,
		category: category,
		description: description,
		image: image,
	}
	return productEdited
}
return p
})
products = JSON.stringify(searchProd, null, 3);
  const ProductsPath = path.join(__dirname, "../data/productsDataBase.json");
  fs.writeFileSync(ProductsPath, products, "utf-8");

	res.redirect("/")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const id = req.params.id

		const productDeleted = products.filter(p => p.id !== +id)
		products = JSON.stringify(productDeleted, null, 3);
		const ProductsPath = path.join(__dirname, "../data/productsDataBase.json");
		fs.writeFileSync(ProductsPath, products, "utf-8");
	  
		  res.redirect("/")
	}
};

module.exports = controller;