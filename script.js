let tab_container = document.querySelector(".links");
let tabContent = document.querySelector(".class-content");

console.log(tabContent);

resources.forEach((resource, index) => {
    let tab = document.createElement("li");
    let a = document.createElement("a");
    a.href = "#";
    a.innerText = resource.category;
    tab.appendChild(a);
    tab_container.appendChild(tab);
});

resources.forEach((resource, index) => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = resource.category;
    let p = document.createElement("p");
    p.innerText = resource.text;
    let ul = document.createElement("ul");
    resource.sources.forEach(source => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = source.url;
        a.innerText = source.title;
        li.appendChild(a);
        ul.appendChild(li);
    });
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(ul);
    div.classList.add("hidden");
    tabContent.appendChild(div);
});

tabContent = document.querySelectorAll(".class-content div");

tabContent[0].classList.remove("hidden");
tabContent[0].classList.add("active-article");

let tabs = document.querySelectorAll(".links li");

tabs[0].classList.add("active");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("active"));
        tab.classList.add("active");
        tabContent.forEach(content =>  {
        content.classList.add("hidden")
        content.classList.remove("active-article");
    });
        tabContent[index].classList.add("active-article");
    });
});