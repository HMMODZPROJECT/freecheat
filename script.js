// Channel Info
const channel = {
  name: "HM MODZ VIP",
  handle: "@hmmodzvipreal",
  desc: "Website Dowloand Cheat Free server direct by hmmodz vip, update setiap minggu",
  footer: "HM MODZ VIP"
};

// File List - Direct from project root (no subfolder)
const files = [
  {
    name: "PUBGM LOADER CRACKED",
    desc: "LATEST STABLE VERSION WITH PUBGM LOADER CRACKED",
    size: "36.8 MB",
    link: "https://www.mediafire.com/file/ns10jeqpqiaj56g/HAHAHAHA+EASY+CRACKED+(1).apk/file" // direct root file
  },
  {
    name: "FF INJECTOR",
    desc: "LATEST INJECTOR APK PANEL VIP",
    size: "23.08 MB", // তোমার আগের সাইজে ভুল ছিল (একটা . বেশি)
    link: "https://www.mediafire.com/file/voyxrwviutiw5bk/PANEL_ANDROID.zip/file" // direct root file
  },
  {
    name: "Injector ff",
    desc: "Dark Aura Injektor cracked",
    size: "19.7 MB", // তোমার আগের সাইজে ভুল ছিল (একটা . বেশি)
    link: "https://www.mediafire.com/file/kuh441hy3gf0gsr/DARK+AURA#cracked.apk/file" // direct root file
  },
  {
    name: "Bloodstrike Loader",
    desc: "Loader, cracked key",
    size: "29 MB", // তোমার আগের সাইজে ভুল ছিল (একটা . বেশি)
    link: "https://www.mediafire.com/file/4qaeb0onh0q998a/ZR+MODZ+OFFICIAL#cracked.apk/file" // direct root file
  },
  {
    name: "Harley Cheat Cracked",
    desc: "Cracked Login Key, Paste You Abstark key",
    size: "14.28 MB", // তোমার আগের সাইজে ভুল ছিল (একটা . বেশি)
    link: "https://www.mediafire.com/file/ob0fvf1r2hsgvcp/Harleycheat+Loader_4.0#Crackedbyhmmodz.apk/file" // direct root file
  },
  {
    name: "Anime Play Modded Premium",
    desc: "Premium Unlocked",
    size: "17.1 MB", // তোমার আগের সাইজে ভুল ছিল (একটা . বেশি)
    link: "https://www.mediafire.com/file/lgpf4fexwmyzvdk/AnimePlay_1.1.7.apk/file" // direct root file
  }
];

// Set Channel Info
document.getElementById("channelName").innerText = channel.name;
document.getElementById("channelDesc").innerText = channel.desc;
document.getElementById("footerChannel").innerText = channel.footer;

// Render File Cards
const fileContainer = document.getElementById("fileContainer");

function renderFiles(list) {
  fileContainer.innerHTML = "";
  list.forEach(f => {
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
      <p><strong>SIZE:</strong> ${f.size}</p>
      <a href="${f.link}" class="btn" download>⬇️ DOWNLOAD</a>
    `;
    fileContainer.appendChild(card);
  });
}

renderFiles(files);

// Search Function
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  const filtered = files.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.desc.toLowerCase().includes(q)
  );
  renderFiles(filtered);

});



