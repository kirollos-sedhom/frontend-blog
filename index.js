import { blogs } from "./data/blogs.js";

const blogs_wrapper = document.getElementById("blogs-wrapper");

blogs.forEach(blog => {
    const blogDiv =
    `
        <div class="blog">
        <img class="blog-img" src="${blog.img_src}"/>
        <p class="blog-date">${blog.date}</p>
        <h2 class="blog-title">${blog.title}</h2>
        <p class="blog-content">${blog.content}</p>
        </div>
    `

    blogs_wrapper.innerHTML+= blogDiv
});

console.log(blogs)