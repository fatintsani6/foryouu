/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "1926";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Kamu";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Terpukau",             // ← GANTI JUDUL LAGU
    artist: "Astrid",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "Senyum kamu, somehow selalu buat hari aku jadi lebih baik." },
  { file: "img2.jpeg", caption: "Kamu yang buat hidup aku rasa lebih nyata, lebih tenang, lebih penuh." },
  { file: "img3.jpeg", caption: "Setiap saat dengan kamu rasa macam something worth holding onto." },
  { file: "img4.jpeg", caption: "Ada masa aku fikir, mungkin aku memang tak pernah cukup bersyukur dengan kamu." },
  { file: "img5.jpeg", caption: "Kamu ubah benda biasa jadi sesuatu yang tak mudah aku lupakan." },
  { file: "img6.jpeg", caption: "Hati aku rasa paling tenang bila dekat dengan kamu, even then." },
  { file: "img7.jpeg", caption: "Kalau boleh ulang satu masa, aku pilih kita, every single time." },
  { file: "img8.jpeg", caption: "Kamu tetap orang yang paling aku ingat, walau apa pun." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "Aku tulis surat ni bukan untuk cari alasan, tapi untuk aku be honest dengan hati aku. Ada banyak perkara yang aku regret, dan ada banyak perkara yang aku tak sempat jaga dengan baik.",
  "Untuk kamu, aku minta maaf. Minta maaf sebab terlalu banyak salah, terlalu lambat faham, dan terlalu terluka dalam cara yang mungkin tak pernah aku sedar. I know I was not always gentle, and I am sorry for the pain it caused you.",
  "Tapi walau apa pun, aku masih ingin ucapkan terima kasih. Terima kasih sebab pernah hadir dalam hidup aku, sebab pernah buat hari-hari aku rasa lebih hidup, lebih berwarna, dan lebih worth remembering. Kamu memang pernah jadi sebahagian daripada ruang paling dalam hati aku.",
  "Hari ni, birthday kamu, aku cuma doakan kamu bahagia, tenang, dan dipenuhi dengan hidup yang lebih baik. Semoga kamu dapat new life yang lebih tenang, lebih sihat, dan lebih kuat. You deserve peace, love, and a future that feels lighter than before.",
  "Aku doakan semangat baru untuk kamu. New chapter, new energy, new version of you yang lebih yakin, lebih happy, dan lebih dekat dengan diri sendiri. Semoga langkah seterusnya kamu dipenuhi dengan ketenangan, keberanian, dan kebahagiaan yang tulen.",
  "Selamat ulang tahun, semoga kamu terus menjadi diri yang lebih kuat dan lebih baik. Happy birthday, and may your heart finally rest in the kind of peace it deserves."
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Saat Semua Bermula",
    text:  "Saat itu rasa macam semuanya tiba-tiba jadi nyata, dan aku tak pernah tahu ia akan jadi sebegini coretan hidup aku.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "Hari-Hari Tenang",
    text:  "Hari-hari yang simple, tapi somehow penuh dengan makna. Itu yang paling aku ingat.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "Badai Dan Jalan Pulang",
    text:  "Ada masa kita luka, ada masa kita keliru. Tapi aku masih belajar, dan aku masih ingin jadi lebih baik.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "New Life, New Breath",
    text:  "Sekarang, aku hanya berharap kamu dipenuhi dengan ketenangan, semangat baru, dan hidup yang lebih ringan untuk kamu.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "Semoga tahun ni bawa kamu ketenangan, jalan yang lebih tenang, dan hati yang lebih ringan." },
  { icon: "shell",   text: "Semoga hari-hari kamu penuh dengan smile yang tulen, dan nights yang lebih damai daripada sebelum ni." },
  { icon: "star",    text: "Semoga setiap doa kecil kamu sampai pada masa yang tepat, dan every wish turns into something beautiful." },
  { icon: "compass", text: "Semoga jalan seterusnya kamu dipenuhi dengan orang yang baik, peluang yang lebih baik, dan hidup yang lebih selesa." },
  { icon: "anchor",  text: "Stay strong, stay kind, and jangan lupa untuk terus jadi diri yang kamu sendiri, bukan siapa-siapa pun yang pernah buat kamu ragu." },
  { icon: "heart",   text: "Selamat ulang tahun. Happy birthday, and may this new chapter feel softer, brighter, and so much more yours." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hey, aku dah buka botol ni. Thank you for being part of my story, and semoga kamu terus bahagia. ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
