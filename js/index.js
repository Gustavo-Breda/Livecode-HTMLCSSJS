document.getElementById("btn-2").addEventListener("click", () => {

    let textoPost = document.getElementsByClassName("timeline-novo-post-texto")[0].value;
    let imagemAnexada = document.getElementById('btn-1').files[0];

    let novaDiv = document.createElement('div');
    novaDiv.classList.add("timeline-post");

    novaDiv.innerHTML = `
        <div class="timeline-post-perfil">
            <button><img class="foto-perfil-post" src="./images/usuario_foto.jpg"></button>
            <div class="timeline-post-perfil-infos">
                <p>Hideo Kojima</p>
                <p class="perfil-info-data">19/07/2024</p>
            </div>
        </div>
        <div class="timeline-post-texto">
            <p>${textoPost}</p>
        </div>
        <div class="timeline-post-imagem"></div>
        <div class="timeline-post-footer">
            <button><img src="./images/post_like.svg" alt=""></button>
            <button><img src="./images/post_comment.svg" alt=""></button>
            <button><img src="./images/post_share.svg" alt=""></button>
            <button><img src="./images/post_more.svg" alt=""></button>
        </div>
    `

    let timelinePostImagem = novaDiv.querySelector(".timeline-post-imagem");
    if (textoPost === '' && imagemAnexada === undefined) {
        return alert("Post vazio, tente novamente")
    }

    if (imagemAnexada !== undefined) {
        let novaImg = document.createElement('img');
        novaImg.src = URL.createObjectURL(imagemAnexada);
        novaImg.alt = "";

        timelinePostImagem.appendChild(novaImg);
    } else {
        novaDiv.removeChild(timelinePostImagem)
    }


    document.getElementsByClassName("timeline")[0].appendChild(novaDiv);
    document.getElementsByClassName("timeline-novo-post-texto")[0].value = "";
    document.getElementById('btn-1').value = "";
})