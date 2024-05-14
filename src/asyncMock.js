const products = [
  {
    id: "1",
    name: "A Different Shade of Blue",
    category: "LP",
    img: "https://f4.bcbits.com/img/a2609179946_16.jpg",
    price: 4200,
    stock: 20,
  },
  {
    id: "2",
    name: "A Tear in the Fabric of Life",
    category: "EP",
    img: "https://f4.bcbits.com/img/a1285157503_16.jpg",
    price: 4000,
    stock: 20,
  },
  {
    id: "3",
    name: "You Won't Go Before You're Supposed To",
    category: "LP",
    img: "https://f4.bcbits.com/img/a3381223303_16.jpg",
    price: 5000,
    stock: 20,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.category === productCategory));
    }, 500);
  });
};
