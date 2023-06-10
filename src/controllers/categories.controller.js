import { categoryServices } from '../services';
// import { v4 as uuidv4 } from 'uuid';

const addCategory = async (req, res) => {
  const { name } = req.body;
  const categories = await categoryServices.addCategory({ name });

  return res.status(201).json({
    code: '200',
    message: `Added category ${categories.name}`,
    categories,
  });
};
// Controller function to add a subcategory based on a category
async function addSubcategory(req, res) {
  const { id } = req.params;

  // Create the subcategory
  const subcategory = await categoryServices.addSubcategory(id, req.body);

  return res.status(201).json({ message: 'Subcategory created', subcategory });
}

// Controller function to add a subcategory based on a category
async function addSubsubcategory(req, res) {
  const { id } = req.params;

  // Create the subcategory
  const subsubcategory = await categoryServices.addSubsubcategory(id, req.body);

  return res
    .status(201)
    .json({ message: 'Subcategory created', subsubcategory });
}


const getCategories = async (req, res) => {
  const categories = await categoryServices.getCategories();

  return res.status(200).json({
    code: '200',
    message: `Fetched all categories`,
    categories,
  });
};

const getSubcategories = async (req, res) => {
  const { id } = req.params;
  const subcategories = await categoryServices.getSubcategoryByCategory(id);

  return res.status(200).json({
    code: '200',
    subcategories,
  });
};

const getSubsubcategories = async (req, res) => {
  const { id } = req.params;
  const subsubcategories =
    await categoryServices.getSubSubcategoryBySubCategory(id);

  return res.status(200).json({
    code: '200',
    subsubcategories,
  });
};

export default {
  addCategory,
  addSubcategory,
  addSubsubcategory,
  getCategories,
  getSubcategories,
  getSubsubcategories,
};
