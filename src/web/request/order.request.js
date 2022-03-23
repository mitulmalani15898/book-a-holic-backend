const orderRequest = () => ({
  bookName: String,
  bookId: String,
  purchaseDate: Date,
  orderId: Number,
  userId: String,
  amount: Number,
});

console.log(orderRequest);

const newOrder = orderRequest({ bookName: "MYBOOK" });
console.log(newOrder);
