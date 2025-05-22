# 🧩 Soal 5 - Pokemon App with React Hooks

## 📌 Deskripsi Tugas
Project ini merupakan implementasi Tugas 5 dari mata kuliah Web CLient Development. Aplikasi ini menampilkan daftar Pokémon dengan React Hooks dan data diambil langsung dari public API [PokeAPI](https://pokeapi.co/).

Tujuan utama tugas ini:
- Menggunakan **React Hooks** (`useState`, `useEffect`, `useNavigate`)
- Menampilkan data Pokémon dari API (bukan data manual)
- Menampilkan halaman detail dengan informasi lengkap dari tiap Pokémon
- Menyesuaikan tampilan agar menyerupai desain Figma tugas

---

## 🛠️ Teknologi yang Digunakan

- **ReactJS** (via Vite)
- **React Router DOM**
- **Tailwind CSS**
- **Fetch API**
- **PokeAPI**

---

## ⚛️ React Hooks yang Digunakan

| Hook            | Lokasi            | Fungsi                                                                 |
|-----------------|-------------------|------------------------------------------------------------------------|
| `useState`      | HomePage.jsx      | Menyimpan data Pokémon dan input pencarian                             |
| `useEffect`     | HomePage.jsx      | Fetch data dari API saat komponen mount                                |
| `useNavigate`   | Card.jsx, DetailPage.jsx | Navigasi antar halaman (ke detail dan kembali)                        |
| `useLocation`   | DetailPage.jsx    | Mengambil data yang dikirim dari halaman sebelumnya (via navigate)    |

---

## 📦 Struktur Folder

```
src/
├── assets/
├── components/
│   ├── card/
│   │   └── Card.jsx
│   └── list_card/
│       └── ListCard.jsx
├── pages/
│   ├── HomePage/
│   │   └── HomePage.jsx
│   └── DetailPage/
│       └── DetailPage.jsx
├── App.jsx
└── main.jsx
```

---

## 🧠 Fitur Utama

- Menampilkan **8 Pokémon pertama** dari API
- Gambar utama Pokémon (resmi/official)
- **Tampilan health bar** dengan nilai HP dan total 255
- Info stat: HP, Attack, Defense, Speed
- Halaman detail dengan gambar pixel di kanan bawah
- Tombol `← Back` ke halaman utama
- Desain gelap yang responsif & modern

---

## 📸 Preview Tampilan

### Halaman Utama (Homepage)
- Grid 2-4 kolom berisi 8 Pokémon
- Gambar besar, nama Pokémon

### Halaman Detail
- Nama & ID Pokémon
- Gambar besar + sprite kecil
- Health bar dan stat lainnya
- Tombol kembali (← Back)

---
