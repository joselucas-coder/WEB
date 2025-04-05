document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggleTheme");

    // Aplica o tema salvo no localStorage antes de carregar a página
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Verifica se o switch existe antes de adicionar eventos
    if (toggle) {
        // Sincroniza o estado do switch
        toggle.checked = document.body.classList.contains("dark-mode");

        // Adiciona evento de mudança para alternar entre claro e escuro
        toggle.addEventListener("change", () => {
            document.body.classList.toggle("dark-mode");

            // Atualiza o localStorage com o novo tema
            const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
        });
    }
});
