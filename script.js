console.log("hello");

const menuMaker = (menuContainerNode) => {
  const expandButton = menuContainerNode.querySelector("#expandButton");

  const menuContent = menuContainerNode.querySelector(".menuContent");

  expandButton.addEventListener("click", () => {
    menuContent.classList.toggle("hidden");
  });
};

menuMaker(document.querySelector(".menuContainer"));
