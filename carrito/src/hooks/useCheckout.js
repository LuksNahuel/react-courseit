export const useCheckout = (products) => {
  const quantity = products.length;
  const prices = products.map((product) => product.price);
  const total = prices.reduce((acc, price) => acc + price, 0);

  return { quantity, total };
};
