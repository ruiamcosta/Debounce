const button = document.querySelector('.btn')

const debounce = (fn) => {
  let timeoutId
  return () => {
    clearInterval(timeoutId)
    timeoutId = setTimeout(() => {
     fn()
    }, 2000)
  }

}

button.addEventListener('click', debounce(() => {
  console.log("You clicked")
}))