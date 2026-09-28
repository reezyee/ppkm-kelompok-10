const membersData = [
  {
    name: "Reza Sapitra",
    role: "Lead Developer",
    university: "UNSIL",
    batch: "Informatika '26",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=800",
    npm: "2470060xx",
    gpa: "3.86",
    gpaScale: "4.00",
    accent: "blue",
    achievements: [
      { icon: "🥇", title: "1st Place", desc: "Hackathon Nasional Informatika Cup 2024" },
      { icon: "🏅", title: "Finalist", desc: "Gemastik - Divisi Pengembangan Aplikasi 2023" },
    ],
  },
  {
    name: "Anggota Dua",
    role: "UI/UX Designer",
    university: "UNSIL",
    batch: "Informatika '26",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    npm: "2470060xx",
    gpa: "3.72",
    gpaScale: "4.00",
    accent: "blue",
    achievements: [
      { icon: "🥈", title: "2nd Place", desc: "UI/UX Design Competition Jawa Barat 2024" },
      { icon: "🎖️", title: "Best Design", desc: "Internal Showcase Prodi Informatika 2023" },
    ],
  },
  {
    name: "Anggota Tiga",
    role: "Backend Support",
    university: "UNSIL",
    batch: "Informatika '26",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    npm: "2470060xx",
    gpa: "3.65",
    gpaScale: "4.00",
    accent: "indigo",
    achievements: [
      { icon: "🥉", title: "3rd Place", desc: "Capture The Flag Regional Priangan 2024" },
      { icon: "🏆", title: "Top 10", desc: "Kompetisi Basis Data Nasional 2023" },
    ],
  },
];

// Preset warna aksen per kartu
const ACCENT = {
  blue: {
    border: "border-blue-500/30",
    shadow: "shadow-blue-950/50",
    gradFrom: "from-blue-950",
    text: "text-blue-400",
    textLight: "text-blue-300",
    cardBorder: "border-blue-500/40",
    corner: "border-blue-400",
  },
  indigo: {
    border: "border-indigo-500/30",
    shadow: "shadow-indigo-950/50",
    gradFrom: "from-indigo-950",
    text: "text-indigo-400",
    textLight: "text-indigo-300",
    cardBorder: "border-indigo-500/40",
    corner: "border-indigo-400",
  },
};

// Rotasi + offset tumpukan kartu, sesuai posisi (0 = paling atas)
const STACK_TRANSFORM = [
  "rotate-1 translate-y-0",
  "-rotate-2 translate-y-2",
  "rotate-3 translate-y-4",
];

function renderAchievement(a) {
  return `
    <div class="flex items-start gap-1.5 text-[10.5px] leading-[1.35] text-gray-300">
      <span class="shrink-0 leading-[1.35]">${a.icon}</span>
      <span><b class="text-gray-100 font-bold">${a.title}</b> — ${a.desc}</span>
    </div>`;
}

function renderCard(member, index) {
  const c = ACCENT[member.accent] || ACCENT.blue;
  const stackClass = STACK_TRANSFORM[index] || STACK_TRANSFORM[STACK_TRANSFORM.length - 1];
  const cardNumberClass = `card-${index + 1}`;

  return `
  <div class="${cardNumberClass} origin-bottom absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b ${c.gradFrom} via-slate-950 to-slate-900 border ${c.border} shadow-2xl ${c.shadow} flex flex-col justify-between p-5 ${stackClass}">

    <!-- Top bar: brand kiri, season/batch kanan -->
    <div class="flex justify-between items-start z-20">
      <span class="font-extrabold text-[13px] tracking-[0.02em] text-white">Kelompok 10</span>
      <span class="text-right text-[10px] font-extrabold tracking-[0.08em] leading-[1.15] uppercase ${c.textLight}">PPKM<br />INFORMATIKA</span>
    </div>

    <!-- Foto full-bleed -->
    <div class="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
      <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover object-top opacity-90" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
    </div>

    <!-- Nama cursive di atas foto -->
    <div class="absolute bottom-[172px] left-5 right-5 z-20">
      <h3 class="font-bs text-white text-5xl leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">${member.name}</h3>
    </div>

    <!-- Panel bawah: universitas/role + statistik -->
    <div class="relative z-20 space-y-2.5">
      <div class="flex items-center gap-2 px-0.5">
        <span class="font-extrabold text-[13px] tracking-[0.02em] ${c.text}">${member.university}</span>
        <span class="text-gray-600 text-xs">|</span>
        <span class="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-gray-300">${member.role}</span>
      </div>

      <div class="bg-slate-900/80 backdrop-blur-md border ${c.cardBorder} rounded-2xl p-3.5 shadow-xl relative">
        <div class="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 ${c.corner}"></div>
        <div class="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 ${c.corner}"></div>
        <div class="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 ${c.corner}"></div>
        <div class="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 ${c.corner}"></div>

        <div class="grid grid-cols-[1fr_1.5fr] gap-2.5 items-start">
          <div class="border-r border-slate-800 pr-2.5">
            <span class="text-[9px] uppercase tracking-[0.1em] text-gray-400 block">GPA</span>
            <div class="text-[1.9rem] font-extrabold leading-[1.1] ${c.text}">
              ${member.gpa}<span class="text-[11px] font-medium text-gray-400">/${member.gpaScale}</span>
            </div>
            <span class="text-[9px] font-mono text-gray-500 block mt-1">NPM ${member.npm}</span>
          </div>
          <div class="space-y-1.5">
            ${member.achievements.map(renderAchievement).join("")}
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