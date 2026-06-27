let maincard = document.querySelector(".maincard");

let CallApi = async () => {
    try {
        const response = await fetch("https://api.github.com/users/octocat/repos");
        const data = await response.json();

        data.forEach((repo) => {

            maincard.innerHTML += `
                <div class="card">
                    <img src="${repo.owner.avatar_url}" class="image">
                    <h2>${repo.name}</h2>
                    <p>${repo.language ?? "No Language"}</p>
                    <a href="${repo.html_url}" target="_blank">View Repository</a>
                </div>
            `;
        });

    } catch (error) {
        console.log(error);
    }
};

CallApi();