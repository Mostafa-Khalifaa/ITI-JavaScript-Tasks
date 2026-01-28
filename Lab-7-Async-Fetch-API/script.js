
function getUsers(retries) {
    const tabs = document.getElementById('tabs');

    let s = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            let arr = [];
            users.forEach(user => {
                const btn = document.createElement('button');
                arr.push(btn);
                btn.className = 'tab-btn';
                btn.innerText = user.name;

                btn.addEventListener('click', function () {
                    arr.forEach(b => b.classList.remove('active'));

                    this.classList.add('active');

                    getUserPosts(user.id);
                });

                tabs.appendChild(btn);
            });

            if (tabs.firstElementChild) {
                tabs.firstElementChild.click();
            }

            //loading
        })
        .catch(error => {
            if (retries < 3) {
                setTimeout(() => {
                    getUsers(retries + 1);
                }, 700);

            } else {
                console.log("Failed to load users after 3 attempts.");
            }
        });
}

async function getUserPosts(userId) {
    const list = document.getElementById('post-list');
    list.innerHTML = '';

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();

        posts.forEach(post => {
            const li = document.createElement('li');
            li.innerText = post.title;
            list.appendChild(li);
        });

    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

getUsers();