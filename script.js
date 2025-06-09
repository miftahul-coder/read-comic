const books = [
    {
        id: 1,
        title: "Judul Buku Satu",
        author: "Penulis Satu",
        synopsis: "Sinopsis buku satu yang menarik.",
        previewPages: [
            "Halaman 1 dari Buku Satu...",
            "Halaman 2 dari Buku Satu...",
            "Halaman 3 dari Buku Satu..."
        ],
        pdfUrl: "https://example.com/buku1.pdf"
    },
    {
        id: 2,
        title: "Judul Buku Dua",
        author: "Penulis Dua",
        synopsis: "Sinopsis buku dua yang menarik.",
        previewPages: [
            "Halaman 1 dari Buku Dua...",
            "Halaman 2 dari Buku Dua...",
            "Halaman 3 dari Buku Dua..."
        ],
        pdfUrl: "https://example.com/buku2.pdf"
    }
];

const previewSection = document.getElementById("preview");
const previewContent = document.getElementById("preview-content");
const closePreviewBtn = document.getElementById("close-preview");
const catalogSection = document.getElementById("catalog");

catalogSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-preview")) {
        const bookId = parseInt(e.target.getAttribute("data-id"));
        showPreview(bookId);
    }
});

closePreviewBtn.addEventListener("click", () => {
    previewSection.hidden = true;
    previewContent.innerHTML = "";
});

function showPreview(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;
    previewContent.innerHTML = `
        <h3>${book.title}</h3>
        <p><em>by ${book.author}</em></p>
        <p>${book.synopsis}</p>
        <hr />
        ${book.previewPages.map(p => `<p>${p}</p>`).join('')}
        <a href="${book.pdfUrl}" target="_blank" download>Unduh PDF</a>
    `;
    previewSection.hidden = false;
}

const loginForm = document.getElementById("login-form");
const loginSection = document.getElementById("login");
const daftarBacaSection = document.getElementById("daftar-baca");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login berhasil!");
    loginSection.hidden = true;
    daftarBacaSection.hidden = false;
});