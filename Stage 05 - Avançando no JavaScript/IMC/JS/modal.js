export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal .close"),

  open() {
    modal.wrapper.classList.add("open")
  },
  close() {
    modal.wrapper.classList.remove("open")
  },
}
modal.btnClose.onclick = () => modal.close()

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.close()
  }
})
