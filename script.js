console.log("hello");

const menuMaker = (menuContainerNode) => {
  const expandButton = menuContainerNode.querySelector("#expandButton");

  const menuContent = menuContainerNode.querySelector(".menuContent");

  const topBar = menuContainerNode.querySelector(".topBar");

  expandButton.addEventListener("click", () => {
    menuContent.classList.toggle("hidden");
    menuContent.classList.contains("hidden")
      ? (topBar.style.borderBottom = "")
      : (topBar.style.borderBottom = "2px solid lightgray");
  });
};

menuMaker(document.querySelector(".menuContainer"));
