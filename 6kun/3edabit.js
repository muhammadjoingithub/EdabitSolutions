function migrateProduct(product) {
    // Create a deep copy of the object
    const oldProduct = JSON.parse(JSON.stringify(product));
  
    // Update the price of the new product
    product.price = product.price * 1.15;
  
    // Update the deposit of bottles in the new product
    product.containers.forEach(container => {
      if (container.type === "bottle") {
        container.deposit = 0.2;
      }
    });
  
    // Return the old product and the new product
    return {
      oldProduct: oldProduct,
      newProduct: product
    };
  }
  
  // Test the function
  const result = migrateProduct({
    product: "Milk",
    price: 1.2,
    containers: [
      { type: "bottle", deposit: 0.15, liters: 1.5 },
      { type: "can", deposit: 0.1, liters: 0.33 },
      { type: "carton", deposit: null, liters: 1 }
    ]
  });
  
  console.log(result);
  