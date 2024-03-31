const totalPrice = document.querySelector(".total");
const prices = document.querySelectorAll(".total");

const getSale = () => {
  const totalPriceNum = Number(totalPrice.textContent);
  totalPrice.textContent = totalPriceNum * 0.8;
};
