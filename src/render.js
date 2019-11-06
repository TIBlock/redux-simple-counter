const render = state => {
  const counterDOM = document.getElementById("counterValue");
  // console.log(state)
  counterDOM.innerHTML = state.value;
  counterDOM.style.color = state.color;
};

// const changeColor = (state) => {
//     const counterDOM = document.getElementById('counterValue')
//     counterDOM.style.color = "red"
// }
