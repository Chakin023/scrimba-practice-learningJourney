const viewBtnEl = document.getElementById("view-btn")
const blogContainerEl = document.getElementById("blog-container")

viewBtnEl.addEventListener('click',function(event) {
    event.preventDefault()
    blogContainerEl.innerHTML += `<section class="blog">
                    <img class="blog-img" src="images/coding-7-1920.webp">
                    <div class="blog-content">
                        <h4 class="date">JAN 02, 2024</h4>
                        <h1 class="blog-num">Blog Four</h1>
                        <h2 class="blog-desc">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</h2>
                    </div>
                </section>
                <section class="blog">
                    <img class="blog-img" src="images/Evolution-of-Coding-scaled.jpg">
                    <div class="blog-content">
                        <h4 class="date">JAN 02, 2024</h4>
                        <h1 class="blog-num">Blog Five</h1>
                        <h2 class="blog-desc">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</h2>
                    </div>
                </section>
                <section class="blog">
                    <img class="blog-img" src="images/coding-7-1920.webp">
                    <div class="blog-content">
                        <h4 class="date">JAN 02, 2024</h4>
                        <h1 class="blog-num">Blog Six</h1>
                        <h2 class="blog-desc">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</h2>
                    </div>
                </section>`
    viewBtnEl.style.display = "none";
})