// LIKE POST

function likePost(button) {

    const post = button.closest(".post");

    const likesText = post.querySelector(".likes");

    let currentLikes = parseInt(
        likesText.textContent
    ) || 0;

    if (button.classList.contains("liked")) {

        currentLikes--;

        button.classList.remove("liked");

        button.innerHTML = "👍 Like";

    } else {

        currentLikes++;

        button.classList.add("liked");

        button.innerHTML = "👍 Liked";

    }

    likesText.textContent = currentLikes + " likes";
}


// CREATE POST

function createPost() {

    const input = document.getElementById("postInput");

    const text = input.value.trim();

    if (text === "") {
        alert("Please write something first.");
        return;
    }

    const postContainer =
        document.getElementById("posts");

    const post = document.createElement("article");

    post.className = "post";

    post.innerHTML = `

        <div class="post-header">

            <div class="avatar">
                C
            </div>

            <div>

                <strong>Chinonso</strong>

                <small>
                    Just now · 🌎
                </small>

            </div>

        </div>


        <p class="post-text">
            ${text}
        </p>


        <div class="post-stats">

            <span class="likes">
                0 likes
            </span>

            <span>
                0 comments
            </span>

        </div>


        <div class="post-actions">

            <button
                onclick="likePost(this)"
            >
                👍 Like
            </button>

            <button
                onclick="commentPost(this)"
            >
                💬 Comment
            </button>

            <button>
                ↗️ Share
            </button>

        </div>

    `;

    postContainer.prepend(post);

    input.value = "";
}


// COMMENT

function commentPost(button) {

    const comment = prompt(
        "Write your comment:"
    );

    if (comment === null || comment.trim() === "") {
        return;
    }

    const post = button.closest(".post");

    const commentElement =
        document.createElement("p");

    commentElement.style.marginTop = "10px";

    commentElement.style.background = "#f0f2f5";

    commentElement.style.padding = "10px";

    commentElement.style.borderRadius = "10px";

    commentElement.innerHTML =
        "<strong>Chinonso:</strong> " +
        comment;

    post.appendChild(commentElement);
}