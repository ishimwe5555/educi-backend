import Category from '../database/models/categories.model';
import SubCategory from '../database/models/subcategories.model';
import SubSubCategory from '../database/models/subsubcategories.model';

async function addCategory(body) {
  const category = await Category.create(body);
  return category;
}

async function getCategory(id) {
  const category = await Category.findOne({ where: { id } });
  return category;
}

async function getSubcategory(id) {
  const subcategory = await SubCategory.findOne({ where: { id } });
  return subcategory;
}

async function getSubsubcategory(id) {
  const subsubcategory = await SubSubCategory.findOne({ where: { id } });
  return subsubcategory;
}

async function addSubcategory(categoryId, body) {
  const category = await getCategory(categoryId);
  if (!category) {
    throw new Error('Category not found');
  }

  body.categoryId = categoryId;
  const subcategory = await SubCategory.create(body);
  return subcategory;
}

async function addSubsubcategory(subcategoryId, body) {
  const subcategory = await getSubcategory(subcategoryId);
  if (!subcategory) {
    throw new Error('Subcategory not found');
  }

  body.subcategoryId = subcategoryId;
  const subsubcategory = await SubSubCategory.create(body);
  return subsubcategory;
}

async function getCategories() {
  const categories = await Category.findAll();
  return categories;
}


async function getSubcategoryByCategory(categoryId) {
  const subcategories = await SubCategory.findAll({ where: { categoryId } });
  return subcategories;
}

async function getSubSubcategoryBySubCategory(subcategoryId) {
  const subsubcategories = await SubSubCategory.findAll({
    where: { subcategoryId },
  });
  return subsubcategories;
}

export default {
  addCategory,
  addSubcategory,
  addSubsubcategory,
  getCategories,
  getSubcategoryByCategory,
  getSubSubcategoryBySubCategory,
  getCategory,
  getSubcategory,
  getSubsubcategory,
};
