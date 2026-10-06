const membersData = [
  {
    name: "Muhammad Ziya Ulhaq",
    role: "Ketua",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo: "assets/members/ziya.jpeg",
    npm: "267006111196",
    hobi: "Basket",
    alamat: "Garut",
    instagram: "@ziyaaulll_",
    linkIG: "https://instagram.com/ziyaaulll_",
    accent: "blue",
  },
  {
    name: "Fathir Putra Sampurna",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo: "assets/members/fathir.jpeg",
    npm: "267006111070",
    hobi: "Mendengarkan Musik",
    alamat: "Purwakarta",
    instagram: "@fathirsams",
    linkIG: "https://instagram.com/fathirsams",
    accent: "blue",
  },
  {
    name: "Khoirul Rizki Maulidan",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/khoirul.jpeg",
    npm: "267006111140",
    hobi: "Membaca Buku",
    alamat: "Tasikmalaya",
    instagram: "@rikuasakura35",
    linkIG: "https://instagram.com/rikuasakura35",
    accent: "blue",
  },
  {
    name: "Galang Naelul Gifar",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/galang.jpeg",
    npm: "267006111069",
    hobi: "Mendengarkan Musik",
    alamat: "Majalengka",
    instagram: "@norasviel",
    linkIG: "https://instagram.com/norasviel",
    accent: "blue",
  },
  {
    name: "Yara Rahma Nathania",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/yara.jpeg",
    npm: "267006111189",
    hobi: "Mendengarkan Musik",
    alamat: "Ciamis",
    instagram: "@yy.raa_",
    linkIG: "https://instagram.com/yy.raa_",
    accent: "pink",
  },
  {
    name: "Reza Sapitra",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/reza.jpeg",
    npm: "267006111110",
    hobi: "Mendengarkan Musik",
    alamat: "Tasikmalaya",
    instagram: "@reezyee",
    linkIG: "https://instagram.com/reezyee",
    accent: "blue",
  },
  {
    name: "Farhan Hidayatullah",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/farhan.jpeg",
    npm: "267006111035",
    hobi: "Berenang",
    alamat: "Tasikmalaya",
    instagram: "@huruhara.io",
    linkIG: "https://instagram.com/huruhara.io",
    accent: "blue",
  },
  {
    name: "Fayza Maheswara H. M.",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/fayza.jpeg",
    npm: "267006111073",
    hobi: "Basket & Kulineran",
    alamat: "Majalengka",
    instagram: "@fyzmhrr",
    linkIG: "https://instagram.com/fyzmhrr",
    accent: "blue",
  },
  {
    name: "Fauzan Muslim",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/fauzan.jpeg",
    npm: "267006111137",
    hobi: "Bermain Game",
    alamat: "Tasikmalaya",
    instagram: "@fznnn06",
    linkIG: "https://instagram.com/fznnn06",
    accent: "blue",
  },
  {
    name: "Alya Fazilatun Nisa",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/alya.jpeg",
    npm: "267006111133",
    hobi: "Mendengarkan Musik",
    alamat: "Kuningan",
    instagram: "@alyfzltnn",
    linkIG: "https://instagram.com/alyfzltnn",
    accent: "pink",
  },
  {
    name: "Syifa Shofariyah",
    role: "Anggota",
    university: "Universitas Siliwangi",
    batch: "Informatika '26",
    photo:"assets/members/syifa.jpeg",
    npm: "267006111049",
    hobi: "Game & Musik",
    alamat: "Tasikmalaya",
    instagram: "@afiys_oo",
    linkIG: "https://instagram.com/afiys_oo",
    accent: "pink",
  },
];

// Preset warna aksen yang konsisten dengan desain mentor
const ACCENT = {
  blue: {
    border: "border-slate-500/30",
    bg: "bg-blue-900",
    shadow: "shadow-black/50",
    gradFrom: "from-slate-950",
    text: "text-slate-300",
    cardBorder: "border-slate-500/40",
  },
  pink: {
    border: "border-slate-500/30",
    bg: "bg-pink-900",
    shadow: "shadow-black/50",
    gradFrom: "from-slate-950",
    text: "text-slate-300",
    cardBorder: "border-slate-500/40",
  },
};

// Rotasi + offset tumpukan kartu
const STACK_TRANSFORM = [
  "rotate-1 translate-y-0",
  "-rotate-2 translate-y-2",
  "rotate-2 translate-y-3",
  "-rotate-1 translate-y-1",
  "rotate-3 translate-y-4",
];

function renderCard(member, index) {
  const c = ACCENT[member.accent] || ACCENT.blue;
  const stackClass = STACK_TRANSFORM[index % STACK_TRANSFORM.length];
  const cardNumberClass = `card-${index + 1}`;

  return `
  <div class="${cardNumberClass} origin-bottom absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b ${c.gradFrom} via-slate-950 to-slate-900 border ${c.border} shadow-2xl ${c.shadow} flex flex-col justify-between p-6 ${stackClass}">

    <!-- Top bar -->
    <div class="flex justify-between items-start z-20">
      <span class="font-extrabold text-[13px] tracking-[0.02em] text-white">Kelompok 10</span>
      <span class="text-right text-[10px] font-extrabold tracking-[0.08em] ${c.bg} leading-[1.15] uppercase text-slate-200 py-0.5 px-1 rounded-sm">PPKM INFORMATIKA</span>
    </div>

    <!-- Foto full-bleed -->
    <div class="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
      <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover object-top opacity-90" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
    </div>

    <!-- Nama cursive di atas foto -->
    <div class="absolute bottom-[135px] left-6 right-6 z-20">
      <h3 class="font-bs text-white text-5xl leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">${member.name}</h3>
    </div>

    <!-- Panel bawah disamakan layout dan ukurannya dengan mentor -->
    <div class="relative z-20 space-y-2.5">
      <div class="flex items-center gap-2 px-0.5">
        <span class="font-extrabold text-[13px] tracking-[0.02em] text-white-400">${member.university}</span>
        <span class="text-gray-600 text-xs">|</span>
        <span class="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-gray-300">${member.role}</span>
      </div>

      <div class="bg-black/80 backdrop-blur-md border ${c.cardBorder} rounded-2xl p-3 shadow-xl relative">
        <div class="grid grid-cols-3 gap-1 items-start text-xs">
          <div>
            <span class="text-[8px] uppercase tracking-[0.1em] text-gray-400 block">NPM</span>
            <span class="font-mono text-gray-200 text-[10.5px] block">${member.npm}</span>
          </div>
          <div>
            <span class="text-[8px] uppercase tracking-[0.1em] text-gray-400 block">ASAL</span>
            <span class="text-gray-200 text-[10.5px] block">${member.alamat}</span>
          </div>
          <div>
            <span class="text-[8px] uppercase tracking-[0.1em] text-gray-400 block">HOBI</span>
            <span class="text-gray-200 text-[10.5px] leading-tight block">${member.hobi}</span>
          </div>
          
          <div class="col-span-3 pt-2 mt-1 border-t border-slate-800/80 flex items-center justify-between">
            <span class="text-[8px] uppercase tracking-[0.1em] text-gray-400">INSTAGRAM</span>
            <a href="${member.linkIG}" target="_blank">
              <span class="font-mono font-medium text-blue-400 text-xs hover:underline">${member.instagram}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderAllCards() {
  const container = document.getElementById("card-stack");
  if (!container) return;
  const html = membersData
    .map((m, i) => renderCard(m, i))
    .reverse()
    .join("");
  container.innerHTML = html;
}

renderAllCards();