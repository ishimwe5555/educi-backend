/* eslint-disable no-shadow */
/* eslint-disable no-inner-declarations */
/* eslint-disable radix */
import { productsServices } from '../services';

const response = (res, cd, msg, dt) =>
  res.status(cd).json({
    code: cd,
    message: msg,
    data: dt,
  });

const getSingleProduct = async (req, res) => {
  const { pid } = req.params;
  const product = await productsServices.getProduct(pid);
  return response(res, 200, 'Product Fetched.', product);
};

const deleteProduct = async (req, res) => {
  const { pid } = req.params;
  const deletedProduct = await productsServices.deleteProduct(pid);
  if (deletedProduct) {
    return res.status(200).json({ code: 200, message: 'Product Deleted.' });
  }
  return res.status(404).json({ code: 404, message: 'Product Not Found.' });
};

const addproduct = async (req, res) => {
  const {
    name,
    vendorId,
    subsubcategoryId,
    brand,
    price,
    pricing,
    description,
    shortDescription,
    productType,
  } = req.body;

  const img = req.files;

  let url = [];
  if (img.length < 1) {
    res.status(400).json({
      code: '400',
      message: 'Failed',
      error: 'You must select an image',
    });
  } else {
    const { product } = await productsServices.getProductByNameSubAndVendorId(
      name,
      vendorId,
      subsubcategoryId
    );
    if (product === null) {
      if (img.length === 1) {
        const { image } = await productsServices.uploadImage(img[0].path);
        if (image) {
          url = [image.url];
        }
      } else {
        const promises = img.map(async (item) => {
          const { image } = await productsServices.uploadImage(item.path);
          if (image) {
            return image.url;
          }
        });
        url = await Promise.all(promises);
      }

      const productBody = {
        name,
        vendorId,
        subsubcategoryId,
      };

      const { data } = await productsServices.createProduct(productBody);

      const attributesBody = {
        productId: data.id,
        price,
        brand,
        pricing,
        description,
        shortDescription,
        productType,
      };

      await productsServices.createAttributes(attributesBody);

      if (data != null) {
        if (url.length === 1) {
          const imageBody = { url: url[0], productId: data.id };
          await productsServices.AddImage(imageBody);
          res.status(200).json({
            code: '200',
            message: 'Product Successfully added',
            data,
          });
        } else {
          const sendImage = url.map(async (item) => {
            const imageBody = { url: item, productId: data.id };
            const { images } = await productsServices.AddImage(imageBody);
            return images;
          });
          await Promise.all(sendImage);
          res.status(200).json({
            code: '200',
            message: 'Product Successfully added',
            data,
          });
        }
      }
    }
    if (product) {
      res
        .status(409)
        .json({ code: '409', message: 'Product already exists', product });
    }
  }
};

const updateOnadd = async (req, res) => {
  const productId = req.params.id;
  const { productName, productPrice, expDate, category, bonus, quantity } =
    req.body;

  const product = await productsServices.getProductById(productId);
  if (product) {
    const body = {
      name: productName,
      price: productPrice,
      category,
      expDate,
      bonus,
      quantity,
    };

    const { updated } = await productsServices.addUpdate(body, productId);
    if (updated != null) {
      res.status(200).json({
        code: '200',
        message: 'Successful Updated The Product with no images',
        product: updated,
      });
    }
  }
};

const searchProducts = async (req, res) => {
  try {
    const products = await productsServices.searchproduct(req.query);
    return res.status(200).json({
      code: 200,
      message: 'search list',
      products,
    });
  } catch (error) {
    return res.status(500).json({ code: 500, message: error.message, error });
  }
};

const listItems = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const offset = (page - 1) * limit;
  const userId = req.user.id;
  const collection = req.params.cid;
  const product = await collectionServices.findCollection(userId, collection, {
    offset,
    limit,
  });
  const totalCount = await collectionServices.getTotalCollectionCount(
    userId,
    collection
  );
  const totalPage = Math.ceil(totalCount / limit);
  return res.status(200).json({
    code: 200,
    message: 'All items are all retrieved',
    product,
    totalPage,
    page,
  });
};

const listAllItems = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;

  const offset = (page - 1) * limit;

  const products = await productsServices.findAllProducts({ offset, limit });

  const totalCount = await productsServices.getTotalProductsCount();

  const totalPages = Math.ceil(totalCount / limit);

  return res.status(200).json({
    code: 200,
    message: `Products for page ${page} are retrieved`,
    products,
    page,
    totalPages,
  });
};

const getProductByCategory = async (req, res) => {
  const { subcategoryId } = req.params;
  const products = await productsServices.getProductsByCategory(subcategoryId);

  return response(res, 200, 'Products Fetched by Category.', products);
};

export default {
  getSingleProduct,
  deleteProduct,
  addproduct,
  updateOnadd,
  searchProducts,
  listItems,
  listAllItems,
  getProductByCategory,
};
