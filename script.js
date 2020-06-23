const telefone = document.getElementById("telefone")
const telefoneModal = document.getElementById("telefone-modal")
const modal = document.getElementById("modal-container")

const botaoFechar = document.getElementById("fechar-modal")
const botaoAbrir = document.getElementById("abrir-modal")

botaoFechar.addEventListener("click", () => modal.style.display='none')
botaoAbrir.addEventListener("click", () => modal.style.display='block')
telefone.addEventListener("input", (e) => e.target.value = mascaraTelefone(e.target.value))
telefoneModal.addEventListener("input", (e) => e.target.value = mascaraTelefone(e.target.value))

function mascaraTelefone(valor) {
    let  retorno =  valor
        .replace(/\D/g,'')
        .replace(/(\d{2})(\d)/,'($1) $2')
        .replace(/(\d{4})(\d)/,'$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3')
        .replace(/(-\d{4})\d+?$/,'$1')

    return retorno
}