function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "toast show";
  setTimeout(() => { toast.className = "toast"; }, 3000);
}

function enableEdit(section) {
  const spans = document.querySelectorAll(`#${section} span`);
  spans.forEach(span => {
    span.contentEditable = true;
    span.style.borderBottom = "2px dashed #6f00ff";
  });
  showToast("Editing enabled for " + section);
}

function disableEdit(section) {
  const spans = document.querySelectorAll(`#${section} span`);
  spans.forEach(span => {
    span.contentEditable = false;
    span.style.borderBottom = "none";
  });
}

function saveAbout() {
  const about = {
    name: document.getElementById("aboutName").innerText,
    age: document.getElementById("aboutAge").innerText,
    gender: document.getElementById("aboutGender").innerText,
    degree: document.getElementById("aboutDegree").innerText,
  };
  localStorage.setItem("portfolio-about", JSON.stringify(about));
  disableEdit("about");
  showToast("About Me saved!");
}

function saveProjects() {
  const projects = {
    project1: document.getElementById("project1").innerText,
    project2: document.getElementById("project2").innerText,
  };
  localStorage.setItem("portfolio-projects", JSON.stringify(projects));
  disableEdit("projects");
  showToast("Projects saved!");
}

function saveContact() {
  const contact = {
    mobile: document.getElementById("contactMobile").innerText,
    email: document.getElementById("contactEmail").innerText,
    location: document.getElementById("contactLocation").innerText,
  };
  localStorage.setItem("portfolio-contact", JSON.stringify(contact));
  disableEdit("contact");
  showToast("Contact saved!");
}

window.addEventListener("DOMContentLoaded", () => {
  const about = JSON.parse(localStorage.getItem("portfolio-about"));
  if (about) {
    document.getElementById("aboutName").innerText = about.name;
    document.getElementById("aboutAge").innerText = about.age;
    document.getElementById("aboutGender").innerText = about.gender;
    document.getElementById("aboutDegree").innerText = about.degree;
  }

  const projects = JSON.parse(localStorage.getItem("portfolio-projects"));
  if (projects) {
    document.getElementById("project1").innerText = projects.project1;
    document.getElementById("project2").innerText = projects.project2;
  }

  const contact = JSON.parse(localStorage.getItem("portfolio-contact"));
  if (contact) {
    document.getElementById("contactMobile").innerText = contact.mobile;
    document.getElementById("contactEmail").innerText = contact.email;
    document.getElementById("contactLocation").innerText = contact.location;
  }
});

function showSection(sectionId) {
  document.querySelectorAll('.content section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

function showSection(sectionId) {
  document.querySelectorAll('#todo-page .content section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

function showSection(sectionId) {
  
  document.querySelectorAll('#todo-page .content section').forEach(sec => {
    sec.classList.add('hidden');
  });

  document.getElementById(sectionId).classList.remove('hidden');
}

let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
let completed = JSON.parse(localStorage.getItem('completed') || '[]');

function renderTasks() {
  const list = document.getElementById('tasksList');
  const comp = document.getElementById('completedList');
  if (!list || !comp) return;

  list.innerHTML = '';
  tasks.forEach((t, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${t}</span>
      <div class="task-buttons">
        <button onclick="completeTask(${i})">✅</button>
        <button onclick="removeTask(${i})">❌</button>
      </div>
    `;
    list.appendChild(li);
  });

  comp.innerHTML = '';
  completed.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c;
    comp.appendChild(li);
  });
}

function addTask() {
  const v = document.getElementById('newTask').value.trim();
  if (!v) {
    showToast("Task cannot be empty!");
    return;
  }
  tasks.push(v);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
  document.getElementById('newTask').value = '';
  showToast("Task added!");
}

function completeTask(i) {
  completed.push(tasks[i]);
  tasks.splice(i, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('completed', JSON.stringify(completed));
  renderTasks();
  showToast("Task completed!");
}

function removeTask(i) {
  tasks.splice(i, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
  showToast("Task removed!");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "toast show";
  setTimeout(() => { toast.className = "toast"; }, 3000);
}

window.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  showSection('dashboard');
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "toast show";
  setTimeout(() => { toast.className = "toast"; }, 3000);
}

function setActive(btn) {
  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

const products = [
  {category:'books', title:'Think Straight', Auther:'Darius Foroux', price:165, rating:3.9, discount:10, img:'https://m.media-amazon.com/images/I/71XpkRq0ncL._SL1500_.jpg'},
  {category:'books', title:'Do It Today', Auther:'Darius Foroux', price:195, rating:4.1, discount:5, img:'https://m.media-amazon.com/images/I/61jCkOVf1oL._SL1500_.jpg'},
  {category:'books', title:'After Dark', Auther:'Haruki Murakami', price:368, rating:4.2, discount:12, img:'https://m.media-amazon.com/images/I/81Bf7HOE6gL._SL1500_.jpg'},
  {category:'books', title:'South of the Border, West of the Sun', Auther:'Haruki Murakami', price:418, rating:4.3, discount:8, img:'https://m.media-amazon.com/images/I/41GXI7p+RUL._SY445_SX342_ControlCacheEqualizer_.jpg'},
  {category:'books', title:'The Power of Your Subconscious Mind', Auther:'Dr. Joseph Murphy', price:140, rating:4.5, discount:20, img:'https://m.media-amazon.com/images/I/61VAtRuPgYL._SY522_.jpg'},
  {category:'electronics', title:'Samsung Galaxy S25 Ultra', brand:'Samsung', price:141999, rating:4.5, discount:5, img:'https://m.media-amazon.com/images/I/71-d7XDbhIL._SL1500_.jpg'},
  {category:'electronics', title:'Samsung 55\" UHD Smart TV', brand:'Samsung', price:41490, rating:4.7, discount:15, img:'https://m.media-amazon.com/images/I/81gdt-mAPSL._SL1500_.jpg'},
  {category:'electronics', title:'Samsung Refrigerator', brand:'Samsung', price:81990, rating:4.8, discount:12, img:'https://m.media-amazon.com/images/I/61Cblx5LWAL._SL1500_.jpg'},
  {category:'electronics', title:'Samsung Washing Machine', brand:'Samsung', price:38990, rating:4.5, discount:10, img:'https://m.media-amazon.com/images/I/71K-2giugJL._SL1500_.jpg'},
  {category:'electronics', title:'Samsung Galaxy Book4 Pro', brand:'Samsung', price:121999, rating:4.6, discount:8, img:'https://m.media-amazon.com/images/I/71va8MZ-bGL._SL1500_.jpg'},
  {category:'clothing', title:'Adidas Ultraboost 5', brand:'Adidas', price:10799, rating:4.0, discount:10, img:'https://m.media-amazon.com/images/I/71UDoNN1r6L._SX695_.jpg'},
  {category:'clothing', title:'Regular Fit Polo T-Shirt', brand:'Adidas', price:1107, rating:4.8, discount:5, img:'https://m.media-amazon.com/images/I/71iIwWJg0QL._SY879_.jpg'},
  {category:'clothing', title:'Regular Track Pants', brand:'Adidas', price:1439, rating:4.7, discount:12, img:'https://m.media-amazon.com/images/I/61cNUYYZymL._SY879_.jpg'},
  {category:'furniture', title:'Wooden Dining Table Set', brand:'Porash Furniture', price:17899, rating:4.5, discount:10, img:'https://m.media-amazon.com/images/I/71jPy3JqEUL._SL1500_.jpg'},
  {category:'furniture', title:'Queen Size Bed Frame', brand:'Solimo', price:13799, rating:4.6, discount:12, img:'https://m.media-amazon.com/images/I/819GcXDC3vL._SL1500_.jpg'},
  {category:'furniture', title:'Leather Sofa 3‑Seater', brand:'Caradel', price:32999, rating:4.7, discount:15, img:'https://m.media-amazon.com/images/I/71l5LU8374L._SL1500_.jpg'}
];

let currentList = [];
let currentSort = "";
let currentCategory = null; 

function applySort() {
  if (currentSort === "lowHigh") currentList.sort((a,b) => a.price - b.price);
  else if (currentSort === "highLow") currentList.sort((a,b) => b.price - a.price);
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const section = document.getElementById('productsSection');
  grid.innerHTML = '';

  if (currentList.length === 0) {
    section.classList.remove('hidden');
    grid.innerHTML = `<p style="color:white; text-align:center;">No products found</p>`;
    return;
  }

  section.classList.remove('hidden');
  applySort();
  currentList.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.brand ? "Brand: " + p.brand : "Author: " + p.Auther}</p>
      <p>Price: ₹${p.price.toFixed(2)} (${p.discount}% off)</p>
      <p>Rating: ⭐ ${p.rating}</p>
    `;
    grid.appendChild(div);
  });
}

function filter(cat, btn) {
  setActive(btn);
  currentCategory = cat;
  currentList = cat === 'all' ? [...products] : products.filter(p => p.category === cat);
  renderProducts();
  showToast(cat === 'all' ? "Showing All Products" : "Showing " + cat);
}

function showSearch(btn) {
  setActive(btn);
  currentCategory = null; 
  document.getElementById('productsSection').classList.add('hidden');
}

function searchProducts() {
  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));

  const q = document.getElementById('searchInput').value.toLowerCase();

  let baseList = currentCategory
    ? products.filter(p => p.category === currentCategory)
    : products;

  currentList = baseList.filter(p =>
    p.title.toLowerCase().includes(q) ||
    (p.brand && p.brand.toLowerCase().includes(q)) ||
    (p.Auther && p.Auther.toLowerCase().includes(q))
  );

  renderProducts();
  showToast(currentList.length > 0 ? "Search results found" : "No products match your search");
}

function sortProducts() {
  currentSort = document.getElementById('sortPrice').value;
  if (currentList.length > 0) renderProducts();
  showToast("Sorted by price");
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('productsSection').classList.add('hidden');
});
