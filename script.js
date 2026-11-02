'use strict';

/* =========================================================
   1. DATA NOVEL TEMU KATA
   ========================================================= */

/*
IMPLEMENTASI STRUKTUR DATA PADA WEBSITE TEMU KATA

1. ARRAY
   Data seluruh novel disimpan dalam array bernama novels.

2. STRUCT
   Setiap novel direpresentasikan sebagai objek JavaScript
   dengan atribut id, title, author, genre, price, stock,
   label, cover, book, text, image, dan description.

3. POINTER
   JavaScript tidak menyediakan pointer mentah seperti C/C++.
   Sebagai simulasi konsep pointer/reference, program
   menggunakan indeks untuk mengakses elemen array.
   Fungsi getNovelByReference() digunakan untuk mengakses
   data novel berdasarkan indeksnya.
*/

const novels = [
    {
        id: 1,
        title: 'Kimchi Confessions',
        author: 'Xaviera Putri',
        genre: 'Memoir',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d9c8a6',
        book: '#6c5946',
        text: '#fff5df',
        image: 'images/kimchi_confessions_novel.jpeg',
        description: 'Memoar Xaviera Putri yang mengisahkan pengalaman dan perjalanan hidupnya.'
    },
    {
        id: 2,
        title: 'Hujan',
        author: 'Tere Liye',
        genre: 'Science Fiction',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d9e2df',
        book: '#6b8d8a',
        text: '#fffdf5',
        image: 'images/hujan_novel.jpeg',
        description: 'Kisah tentang kehilangan, kenangan, persahabatan, dan masa depan.'
    },
    {
        id: 3,
        title: 'Tentang Kamu',
        author: 'Tere Liye',
        genre: 'Mystery',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d7c5a5',
        book: '#776044',
        text: '#fff4df',
        image: 'images/tentang_kamu_novel.jpeg',
        description: 'Perjalanan mengungkap kehidupan dan rahasia seorang perempuan bernama Sri Ningsih.'
    },
    {
        id: 4,
        title: 'Hello',
        author: 'Tere Liye',
        genre: 'Historical Fiction',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#c6d6c5',
        book: '#63866b',
        text: '#fff9eb',
        image: 'images/hello_novel.jpeg',
        description: 'Kisah keluarga, kenangan, dan perjalanan kehidupan lintas generasi.'
    },
    {
        id: 5,
        title: 'Hi, Jan Adam',
        author: 'Wahyuni Albiy',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#e5c9bc',
        book: '#a45e53',
        text: '#fff4e9',
        image: 'images/hi_jan_adam_novel.jpeg',
        description: 'Kisah romansa dan perjalanan perasaan para tokohnya.'
    },
    {
        id: 6,
        title: 'With Love, Melbourne',
        author: 'Wahyuni Albiy',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d8b8a7',
        book: '#824d49',
        text: '#f9e9d7',
        image: 'images/with_love_melbourne_novel.jpeg',
        description: 'Kisah cinta dan perjalanan kehidupan yang berlatar Melbourne.'
    },
    {
        id: 7,
        title: 'Season of Love',
        author: 'Alea',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#e5c9bc',
        book: '#a45e53',
        text: '#fff4e9',
        image: 'images/season_of_love_novel.jpeg',
        description: 'Kisah romansa tentang perasaan, hubungan, dan perjalanan cinta.'
    },
    {
        id: 8,
        title: 'Dari Shenina untuk Hava: Our Beloved Twelve Years',
        author: 'Belum dipastikan',
        genre: 'Teen Fiction',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#c6d6c5',
        book: '#63866b',
        text: '#fff9eb',
        image: 'images/dari_shenina_novel.jpeg',
        description: 'Kisah hubungan dan perjalanan dua tokoh selama dua belas tahun.'
    },
    {
        id: 9,
        title: 'Laut Bercerita',
        author: 'Leila S. Chudori',
        genre: 'Historical Fiction',
        price: 95000,
        stock: 5,
        label: '',
        cover: '#385b58',
        book: '#244542',
        text: '#f5e9d2',
        image: 'images/laut_bercerita_novel.jpeg',
        description: 'Kisah tentang kehilangan, persahabatan, keluarga, dan perjuangan pada masa pergolakan politik Indonesia.'
    },
    {
        id: 10,
        title: '5 Wishes',
        author: 'Asiah',
        genre: 'Teen Fiction',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d9d2b9',
        book: '#8a7950',
        text: '#fff8e6',
        image: 'images/5_wishes_novel.jpeg',
        description: 'Kisah remaja tentang harapan, keinginan, dan perjalanan kehidupan.'
    },
    {
        id: 11,
        title: 'Olimpiade Surabaya',
        author: 'Jocelyn Suherman',
        genre: 'Teen Fiction',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d4c7bd',
        book: '#554440',
        text: '#f8e9d7',
        image: 'images/olimpiade_surabaya_novel.jpeg',
        description: 'Kisah remaja dengan latar kompetisi dan kehidupan sekolah.'
    },
    {
        id: 12,
        title: 'Lintang Hukum',
        author: 'Wahyuni Albiy',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d9d2b9',
        book: '#8a7950',
        text: '#fff8e6',
        image: 'images/lintang_hukum_novel.jpeg',
        description: 'Kisah yang menggabungkan perjalanan kehidupan dan hubungan antartokoh.'
    },
    {
        id: 13,
        title: 'Ruang Tanpa Suara',
        author: 'Yuli Citra',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#c7c3d8',
        book: '#635c88',
        text: '#fff8f1',
        image: 'images/ruang_tanpa_suara_novel.jpeg',
        description: 'Kisah tentang perasaan, hubungan, dan hal-hal yang tidak mudah diungkapkan.'
    },
    {
        id: 14,
        title: '7 Wishes',
        author: 'Asiah',
        genre: 'Teen Fiction',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d9d2b9',
        book: '#8a7950',
        text: '#fff8e6',
        image: 'images/7_wishes_novel.jpeg',
        description: 'Kisah remaja tentang keinginan, harapan, dan pilihan hidup.'
    },
    {
        id: 15,
        title: 'Love Song',
        author: 'Alea',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#c7c3d8',
        book: '#635c88',
        text: '#fff8f1',
        image: 'images/love_song_novel.jpeg',
        description: 'Kisah romansa tentang perasaan dan perjalanan hubungan antartokoh.'
    },
    {
        id: 16,
        title: 'Dari Hava: Surat Kedua Belas',
        author: 'Alea',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d8b8a7',
        book: '#824d49',
        text: '#f9e9d7',
        image: 'images/dari_hava_novel.jpeg',
        description: 'Kisah yang disampaikan melalui surat dan perjalanan perasaan.'
    },
    {
        id: 17,
        title: 'Badan Intelijen Sekolah 2',
        author: 'Intanzs',
        genre: 'Thriller',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#554440',
        book: '#292929',
        text: '#f8e9d7',
        image: 'images/badan_intelijen_sekolah_2_novel.jpeg',
        description: 'Kisah tentang intelijen sekolah, rahasia, dan berbagai konflik.'
    },
    {
        id: 18,
        title: 'Hi Berlin 1998',
        author: 'Wahyuni Albiy',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#d8b8a7',
        book: '#824d49',
        text: '#f9e9d7',
        image: 'images/hi_berlin_1998_novel.jpeg',
        description: 'Kisah romansa dengan latar Berlin.'
    },
    {
        id: 19,
        title: 'When Life Gives You Aurora',
        author: 'Alea',
        genre: 'Teen Fiction',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#c6d6c5',
        book: '#63866b',
        text: '#fff9eb',
        image: 'images/when_life_gives_you_aurora_novel.jpeg',
        description: 'Kisah tentang kehidupan, harapan, dan perjalanan para tokohnya.'
    },
    {
        id: 20,
        title: 'Malioboro at Midnight',
        author: 'Skysphire',
        genre: 'Romance',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#385b58',
        book: '#244542',
        text: '#f5e9d2',
        image: 'images/malioboro_novel.jpeg',
        description: 'Kisah romansa dengan suasana malam dan latar Malioboro.'
    },
    {
        id: 21,
        title: 'Negeri 5 Menara',
        author: 'Ahmad Fuadi',
        genre: 'Inspirational',
        price: 92000,
        stock: 5,
        label: '',
        cover: '#d9d2b9',
        book: '#8a7950',
        text: '#fff8e6',
        image: 'images/negeri_5_menara_novel.jpeg',
        description: 'Perjalanan para santri dalam mengejar cita-cita dengan keyakinan dan kerja keras.'
    },
    {
        id: 22,
        title: 'Ranah 3 Warna',
        author: 'Ahmad Fuadi',
        genre: 'Inspirational',
        price: 92000,
        stock: 5,
        label: '',
        cover: '#d9d2b9',
        book: '#8a7950',
        text: '#fff8e6',
        image: 'images/ranah_3_warna_novel.jpeg',
        description: 'Perjalanan Alif menghadapi tantangan hidup untuk mewujudkan cita-citanya.'
    },
    {
        id: 23,
        title: 'Rantau 1 Muara',
        author: 'Ahmad Fuadi',
        genre: 'Inspirational',
        price: 92000,
        stock: 5,
        label: '',
        cover: '#d9d2b9',
        book: '#8a7950',
        text: '#fff8e6',
        image: 'images/rantau_1_muara_novel.jpeg',
        description: 'Kisah perjalanan, perjuangan, dan pencarian tujuan hidup.'
    },
    {
        id: 24,
        title: 'Sepatu Dahlan',
        author: 'Khrisna Pabichara',
        genre: 'Inspirational',
        price: 85000,
        stock: 5,
        label: '',
        cover: '#c6d6c5',
        book: '#63866b',
        text: '#fff9eb',
        image: 'images/sepatu_dahlan_novel.jpeg',
        description: 'Kisah perjuangan Dahlan menghadapi keterbatasan dan mengejar pendidikan.'
    }
];

/* =========================================================
   2. KONFIGURASI DAN PENYIMPANAN
   ========================================================= */

const CART_KEY = 'temuKataCart';
const HISTORY_KEY = 'temuKataOrderHistory';
const ACTIVITY_KEY = 'temuKataActivityLog';

const COUPON_CODE = 'TEMUKATA10';
const FREE_SHIPPING_LIMIT = 150000;

let activeFilter = 'Semua';
let searchText = '';
let activeGenrePage = '';

let cart = loadJSON(CART_KEY, []);
let orderHistory = loadJSON(HISTORY_KEY, []);
let activityLog = loadJSON(ACTIVITY_KEY, []);

let couponApplied = false;
let toastTimer = null;
let lastFocusedElement = null;

const $ = (selector, root = document) =>
    root.querySelector(selector);

const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

function loadJSON(key, fallback) {
    try {
        const stored = localStorage.getItem(key);

        if (stored === null) {
            return fallback;
        }

        const parsed = JSON.parse(stored);

        return Array.isArray(fallback) && !Array.isArray(parsed)
            ? fallback
            : parsed;
    } catch (error) {
        return fallback;
    }
}

function saveJSON(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Gagal menyimpan data:', error);
        showToast('Data gagal disimpan di browser.');
    }
}

/* =========================================================
   2A. SISTEM LOG AKTIVITAS TERSEMBUNYI
   ========================================================= */

/*
Aktivitas pengunjung disimpan di localStorage.

Log tidak ditampilkan pada halaman website.
Pemilik website dapat melihatnya melalui Console browser.

Perintah untuk melihat log:
console.table(temuKataLogs.getAll())

Data yang dicatat tidak mencakup nomor telepon,
alamat, atau informasi pribadi pelanggan.
*/

function addActivity(action, details = '') {
    const entry = {
        id: Date.now(),
        action,
        details,
        timestamp: new Date().toISOString()
    };

    activityLog.unshift(entry);

    // Simpan maksimal 200 aktivitas terbaru.
    activityLog = activityLog.slice(0, 200);

    try {
        localStorage.setItem(
            ACTIVITY_KEY,
            JSON.stringify(activityLog)
        );
    } catch (error) {
        console.error('Gagal menyimpan log aktivitas:', error);
    }

    // Log juga dapat dipantau secara langsung melalui Console.
    console.info('[Temu Kata Activity]', entry);
}

/*
Menyediakan akses khusus untuk melihat dan mengelola log
melalui Developer Tools Console.
*/

window.temuKataLogs = {
    getAll() {
        return loadJSON(ACTIVITY_KEY, []);
    },

    getLatest() {
        return loadJSON(ACTIVITY_KEY, [])[0] || null;
    },

    clear() {
        localStorage.removeItem(ACTIVITY_KEY);
        activityLog = [];
        console.info('Log aktivitas Temu Kata berhasil dihapus.');
    }
};

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

function rupiah(value) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(value).replace(/\u00a0/g, ' ');
}

function getNovel(id) {
    return novels.find(novel => novel.id === Number(id));
}

function showToast(message) {
    const toast = $('#toast');

    if (!toast) {
        console.log(message);
        return;
    }

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2700);
}

/* =========================================================
   3. SIMULASI POINTER / REFERENCE
   ========================================================= */

function getNovelByReference(index, source = novels) {
    if (
        !Array.isArray(source) ||
        index < 0 ||
        index >= source.length
    ) {
        return null;
    }

    return source[index];
}

/* =========================================================
   4. LINEAR SEARCH
   ========================================================= */

function linearSearchBooks(query, source) {
    const normalized = query.trim().toLocaleLowerCase('id-ID');
    const matches = [];

    if (!normalized) {
        return matches;
    }

    for (let i = 0; i < source.length; i++) {
        const novel = getNovelByReference(i, source);

        if (!novel) {
            continue;
        }

        const title = novel.title.toLocaleLowerCase('id-ID');
        const author = novel.author.toLocaleLowerCase('id-ID');

        const found =
            title.includes(normalized) ||
            author.includes(normalized);

        if (found) {
            matches.push(novel);
        }
    }

    return matches;
}

/* =========================================================
   5. BUBBLE SORT
   ========================================================= */

function bubbleSortBooks(source, sortType) {
    const sorted = source.slice();

    function compare(a, b) {
        switch (sortType) {
            case 'title-asc':
                return a.title.localeCompare(b.title, 'id');

            case 'title-desc':
                return b.title.localeCompare(a.title, 'id');

            case 'price-asc':
                return a.price - b.price ||
                    a.title.localeCompare(b.title, 'id');

            case 'price-desc':
                return b.price - a.price ||
                    a.title.localeCompare(b.title, 'id');

            case 'stock-desc':
                return b.stock - a.stock ||
                    a.title.localeCompare(b.title, 'id');

            case 'stock-asc':
                return a.stock - b.stock ||
                    a.title.localeCompare(b.title, 'id');

            default:
                return a.id - b.id;
        }
    }

    for (let i = 0; i < sorted.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < sorted.length - i - 1; j++) {
            const first = getNovelByReference(j, sorted);
            const second = getNovelByReference(j + 1, sorted);

            if (compare(first, second) > 0) {
                const temporary = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temporary;

                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return sorted;
}

/* =========================================================
   6. TAMPILAN KARTU NOVEL
   ========================================================= */

function coverMarkup(novel) {
    return `
        <div
            class="book-cover"
            style="
                --cover-bg: ${novel.cover};
                --book-bg: ${novel.book};
                --book-text: ${novel.text};
            "
        >
            ${novel.label
            ? `<span class="product-label">${escapeHTML(novel.label)}</span>`
            : ''
        }

            <img
                src="${escapeHTML(novel.image)}"
                alt="Sampul novel ${escapeHTML(novel.title)}"
                class="book-cover-image"
                loading="lazy"
                onerror="this.style.display='none'; this.parentElement.classList.add('cover-error');"
            >
        </div>
    `;
}

function productCardMarkup(novel) {
    const cartItem = cart.find(item => item.id === novel.id);
    const quantityInCart = cartItem ? cartItem.quantity : 0;

    const unavailable = novel.stock <= 0;
    const maxed = quantityInCart >= novel.stock;

    let buttonText = '＋ Tambah ke Keranjang';

    if (unavailable) {
        buttonText = 'Stok Habis';
    } else if (maxed) {
        buttonText = 'Batas Stok di Keranjang';
    }

    return `
        <article class="product-card" data-novel-id="${novel.id}">
            ${coverMarkup(novel)}

            <div class="product-content">
                <p class="product-genre">
                    ${escapeHTML(novel.genre)}
                </p>

                <h3 class="product-title">
                    ${escapeHTML(novel.title)}
                </h3>

                <p class="product-author">
                    ${escapeHTML(novel.author)}
                </p>

                <p class="product-description">
                    ${escapeHTML(novel.description)}
                </p>

                <div class="product-meta">
                    <strong class="product-price">
                        ${rupiah(novel.price)}
                    </strong>

                    <span class="product-stock ${novel.stock <= 5 ? 'low' : ''}">
                        Stok: ${novel.stock}
                    </span>
                </div>

                <button
                    class="add-to-cart"
                    data-add-cart="${novel.id}"
                    type="button"
                    ${unavailable || maxed ? 'disabled' : ''}
                >
                    ${buttonText}
                </button>
            </div>
        </article>
    `;
}

/* =========================================================
   7. FILTER DAN TAMPILAN KUMPULAN NOVEL
   ========================================================= */

function currentFilteredNovels() {
    let result = novels.slice();

    if (activeFilter !== 'Semua') {
        result = result.filter(
            novel => novel.genre === activeFilter
        );
    }

    if (searchText.trim()) {
        result = linearSearchBooks(searchText, result);
    }

    const sort = $('#sort-select')?.value || 'featured';

    return bubbleSortBooks(result, sort);
}

function renderProducts() {
    const grid = $('#product-grid');

    if (!grid) {
        return;
    }

    const result = currentFilteredNovels();

    grid.innerHTML = result
        .map(novel => productCardMarkup(novel))
        .join('');

    const resultCount = $('#result-count');
    const emptyState = $('#empty-state');

    if (resultCount) {
        resultCount.textContent = result.length;
    }

    if (emptyState) {
        emptyState.hidden = result.length > 0;
    }
}

function renderGenrePage() {
    const grid = $('#genre-product-grid');

    if (!grid || !activeGenrePage) {
        return;
    }

    const genreBooks = novels.filter(novel =>
        novel.genre.toLocaleLowerCase('id-ID') ===
        activeGenrePage.toLocaleLowerCase('id-ID')
    );

    const sort = $('#genre-sort-select')?.value || 'featured';
    const result = bubbleSortBooks(genreBooks, sort);

    grid.innerHTML = result
        .map(novel => productCardMarkup(novel))
        .join('');

    const count = $('#genre-page-count');
    const emptyState = $('#genre-empty-state');
    const title = $('#genre-page-title');
    const description = $('#genre-page-description');

    if (count) {
        count.textContent = `${result.length} novel`;
    }

    if (emptyState) {
        emptyState.hidden = result.length > 0;
    }

    if (title) {
        title.textContent = activeGenrePage;
    }

    const descriptions = {
        'Romance':
            'Kisah tentang cinta, hubungan, dan perasaan yang tumbuh dalam berbagai perjalanan hidup.',

        'Fantasy':
            'Masuki dunia imajinatif yang dipenuhi keajaiban, petualangan, dan kemungkinan tak terduga.',

        'Mystery':
            'Ikuti petunjuk dan pecahkan teka-teki di balik rahasia yang menunggu untuk diungkap.',

        'Thriller':
            'Cerita menegangkan dengan konflik dan kejutan yang membuatmu terus ingin membaca.',

        'Science Fiction':
            'Jelajahi gagasan ilmiah, teknologi, dan masa depan yang penuh kemungkinan.',

        'Horror':
            'Temukan cerita dengan suasana mencekam dan misteri yang mengusik rasa penasaran.',

        'Comedy':
            'Kisah ringan dan jenaka untuk menemani waktu santai dengan senyum.',

        'Adventure':
            'Ikuti perjalanan penuh tantangan, tempat baru, dan penemuan yang tidak terduga.',

        'Memoir':
            'Kisah nyata tentang pengalaman, kenangan, dan perjalanan hidup penulis.',

        'Historical Fiction':
            'Cerita fiksi yang berlatar masa lalu dengan suasana dan peristiwa sejarah.',

        'Teen Fiction':
            'Kisah tentang kehidupan remaja, persahabatan, perasaan, dan proses pendewasaan.',

        'Inspirational':
            'Kisah perjuangan dan perjalanan hidup yang memberikan semangat serta inspirasi.'
    };

    if (description) {
        description.textContent =
            descriptions[activeGenrePage] ||
            'Kumpulan novel berdasarkan genre yang kamu pilih.';
    }
}

function updateFilterPills() {
    $$('.genre-pill').forEach(button => {
        button.classList.toggle(
            'active',
            button.dataset.filter === activeFilter
        );
    });
}

function setActiveFilter(filter) {
    activeFilter = filter;

    addActivity(
        'Memilih genre',
        `Genre yang dipilih: ${filter}`
    );

    updateFilterPills();
    renderProducts();
}

/* =========================================================
   8. KERANJANG BELANJA
   ========================================================= */

function saveCart() {
    saveJSON(CART_KEY, cart);
    renderCartBadge();
}

function renderCartBadge() {
    const badge = $('#cart-badge');

    if (!badge) {
        return;
    }

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    badge.textContent = totalQuantity;
}

function addToCart(id) {
    const novel = getNovel(id);

    if (!novel) {
        return;
    }

    const existing = cart.find(
        item => item.id === novel.id
    );

    if (novel.stock <= 0) {
        showToast('Stok novel ini sedang habis.');
        return;
    }

    if (existing) {
        if (existing.quantity >= novel.stock) {
            showToast(
                'Jumlah di keranjang sudah mencapai batas stok.'
            );
            return;
        }

        existing.quantity += 1;
    } else {
        cart.push({
            id: novel.id,
            quantity: 1
        });
    }

    const updatedItem = cart.find(
        item => item.id === novel.id
    );

    addActivity(
        'Menambahkan novel ke keranjang',
        `${novel.title} | Jumlah di keranjang: ${updatedItem.quantity}`
    );

    saveCart();
    renderProducts();
    renderGenrePage();
    renderCart();

    showToast(`${novel.title} ditambahkan ke keranjang.`);
}

function cartSubtotal() {
    return cart.reduce((sum, item) => {
        const novel = getNovel(item.id);

        if (!novel) {
            return sum;
        }

        return sum + novel.price * item.quantity;
    }, 0);
}

function shippingCost(subtotal = cartSubtotal()) {
    if (!subtotal || subtotal >= FREE_SHIPPING_LIMIT) {
        return 0;
    }

    const region = $('#shipping-region')?.value || 'jawa';

    return region === 'luar-jawa' ? 25000 : 15000;
}

function discountAmount(subtotal = cartSubtotal()) {
    if (!couponApplied) {
        return 0;
    }

    return Math.min(
        Math.round(subtotal * 0.1),
        25000
    );
}

function cartTotal() {
    const subtotal = cartSubtotal();
    const shipping = shippingCost(subtotal);
    const discount = discountAmount(subtotal);

    return Math.max(
        0,
        subtotal + shipping - discount
    );
}

function renderCart() {
    const itemsContainer = $('#cart-items');
    const empty = $('#cart-empty');
    const summary = $('#cart-summary');

    if (!itemsContainer || !empty || !summary) {
        return;
    }

    cart = cart
        .filter(item =>
            getNovel(item.id) && item.quantity > 0
        )
        .map(item => {
            const novel = getNovel(item.id);

            return {
                id: item.id,
                quantity: Math.min(
                    item.quantity,
                    novel.stock
                )
            };
        })
        .filter(item => item.quantity > 0);

    saveJSON(CART_KEY, cart);

    renderCartBadge();

    itemsContainer.innerHTML = cart.map(item => {
        const novel = getNovel(item.id);

        return `
            <article class="cart-item">
                <div
                    class="cart-thumb"
                    style="
                        --cover-bg: ${novel.cover};
                        --book-bg: ${novel.book};
                        --book-text: ${novel.text};
                    "
                >
                    <span>
                        ${escapeHTML(novel.title)}
                    </span>
                </div>

                <div class="cart-item-info">
                    <h4>${escapeHTML(novel.title)}</h4>
                    <p>${escapeHTML(novel.author)}</p>

                    <div class="cart-item-price">
                        ${rupiah(novel.price)}
                    </div>

                    <div class="quantity-control">
                        <button
                            type="button"
                            data-quantity="minus"
                            data-id="${novel.id}"
                            aria-label="Kurangi jumlah ${escapeHTML(novel.title)}"
                            ${item.quantity <= 1 ? 'disabled' : ''}
                        >
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button
                            type="button"
                            data-quantity="plus"
                            data-id="${novel.id}"
                            aria-label="Tambah jumlah ${escapeHTML(novel.title)}"
                            ${item.quantity >= novel.stock ? 'disabled' : ''}
                        >
                            ＋
                        </button>
                    </div>
                </div>

                <div class="cart-item-end">
                    <strong class="cart-item-price">
                        ${rupiah(novel.price * item.quantity)}
                    </strong>

                    <button
                        class="remove-item"
                        type="button"
                        data-remove-cart="${novel.id}"
                    >
                        Hapus
                    </button>
                </div>
            </article>
        `;
    }).join('');

    const isEmpty = cart.length === 0;

    empty.hidden = !isEmpty;
    summary.hidden = isEmpty;
    itemsContainer.hidden = isEmpty;

    if (isEmpty) {
        couponApplied = false;

        if ($('#coupon-input')) {
            $('#coupon-input').value = '';
        }

        if ($('#coupon-message')) {
            $('#coupon-message').textContent = '';
            $('#coupon-message').classList.remove('error');
        }

        return;
    }

    const subtotal = cartSubtotal();

    if ($('#cart-subtotal')) {
        $('#cart-subtotal').textContent = rupiah(subtotal);
    }

    if ($('#cart-shipping')) {
        $('#cart-shipping').textContent =
            subtotal >= FREE_SHIPPING_LIMIT
                ? 'Gratis'
                : rupiah(shippingCost(subtotal));
    }

    if ($('#cart-discount')) {
        $('#cart-discount').textContent =
            `−${rupiah(discountAmount(subtotal))}`;
    }

    if ($('#cart-total')) {
        $('#cart-total').textContent = rupiah(cartTotal());
    }

    if ($('#checkout-total')) {
        $('#checkout-total').textContent = rupiah(cartTotal());
    }
}

function updateQuantity(id, direction) {
    const numericId = Number(id);

    const item = cart.find(
        entry => entry.id === numericId
    );

    const novel = getNovel(numericId);

    if (!item || !novel) {
        return;
    }

    if (direction === 'plus') {
        if (item.quantity >= novel.stock) {
            showToast(
                'Jumlah tidak bisa melebihi stok yang tersedia.'
            );
            return;
        }

        item.quantity += 1;
    } else {
        item.quantity -= 1;

        if (item.quantity <= 0) {
            cart = cart.filter(
                entry => entry.id !== numericId
            );
        }
    }

    const updatedItem = cart.find(
        entry => entry.id === numericId
    );

    addActivity(
        'Mengubah jumlah keranjang',
        updatedItem
            ? `${novel.title} | Jumlah sekarang: ${updatedItem.quantity}`
            : `${novel.title} | Jumlah menjadi 0 dan dihapus dari keranjang`
    );

    saveCart();
    renderCart();
    renderProducts();
    renderGenrePage();
}

function removeFromCart(id) {
    const numericId = Number(id);
    const novel = getNovel(numericId);

    cart = cart.filter(
        item => item.id !== numericId
    );

    addActivity(
        'Menghapus novel dari keranjang',
        novel ? novel.title : `ID novel: ${numericId}`
    );

    saveCart();
    renderCart();
    renderProducts();
    renderGenrePage();

    showToast(
        `${novel ? novel.title : 'Novel'} dihapus dari keranjang.`
    );
}

/* =========================================================
   9. KUPON DISKON
   ========================================================= */

function applyCoupon() {
    const input = $('#coupon-input');
    const message = $('#coupon-message');

    if (!input || !message) {
        return;
    }

    const code = input.value.trim().toUpperCase();

    message.classList.remove('error');

    if (!cart.length) {
        couponApplied = false;
        message.textContent =
            'Tambahkan novel terlebih dahulu.';
        message.classList.add('error');

        addActivity(
            'Gagal menggunakan kupon',
            'Keranjang masih kosong.'
        );
    } else if (code === COUPON_CODE) {
        couponApplied = true;
        message.textContent =
            'Kupon berhasil digunakan. Diskon 10%, maksimal Rp25.000.';

        addActivity(
            'Menggunakan kupon',
            'Kupon TEMUKATA10 berhasil digunakan.'
        );
    } else {
        couponApplied = false;
        message.textContent =
            'Kode kupon tidak valid.';
        message.classList.add('error');

        // Kode kupon yang dimasukkan tidak disimpan ke log.
        addActivity(
            'Gagal menggunakan kupon',
            'Kode kupon yang dimasukkan tidak valid.'
        );
    }

    renderCart();
}

/* =========================================================
   10. DRAWER KERANJANG DAN RIWAYAT
   ========================================================= */

function showDrawer(which) {
    closeAllDrawers(false);

    lastFocusedElement = document.activeElement;

    const drawer = which === 'cart'
        ? $('#cart-drawer')
        : $('#history-drawer');

    const overlay = which === 'cart'
        ? $('#cart-overlay')
        : $('#history-overlay');

    if (!drawer || !overlay) {
        return;
    }

    drawer.hidden = false;
    overlay.hidden = false;

    document.body.classList.add('drawer-open');

    if (which === 'cart') {
        if ($('#checkout-form')) {
            $('#checkout-form').hidden = true;
        }

        renderCart();
        $('#close-cart')?.focus();
    } else {
        renderHistory();
        $('#close-history')?.focus();
    }
}

function closeAllDrawers(restoreFocus = true) {
    [
        'cart-drawer',
        'history-drawer',
        'cart-overlay',
        'history-overlay'
    ].forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            element.hidden = true;
        }
    });

    document.body.classList.remove('drawer-open');

    if (
        restoreFocus &&
        lastFocusedElement &&
        typeof lastFocusedElement.focus === 'function' &&
        document.contains(lastFocusedElement)
    ) {
        lastFocusedElement.focus();
    }
}

/* =========================================================
   11. CHECKOUT DAN METODE PEMBAYARAN
   ========================================================= */

function openCheckout() {
    if (!cart.length) {
        showToast('Keranjang masih kosong.');
        return;
    }

    addActivity(
        'Membuka halaman checkout',
        `Jumlah jenis novel: ${cart.length} | Total sementara: ${rupiah(cartTotal())}`
    );

    $('#cart-items').hidden = true;
    $('#cart-empty').hidden = true;
    $('#cart-summary').hidden = true;
    $('#checkout-form').hidden = false;

    $('#checkout-total').textContent = rupiah(cartTotal());

    updatePaymentNote();

    $('#customer-name')?.focus();
}

function updatePaymentNote() {
    const method = $('#payment-method')?.value || '';
    const note = $('#payment-note');

    if (!note) {
        return;
    }

    const notes = {
        'Transfer Bank':
            'Simulasi transfer bank. Detail rekening tidak diproses pada website ini.',

        'E-Wallet':
            'Simulasi pembayaran melalui dompet digital. Tidak ada transaksi nyata yang diproses.',

        'QRIS':
            'Simulasi pembayaran QRIS. Kode QR dan transaksi nyata tidak dibuat pada website ini.',

        'COD':
            'Pembayaran dilakukan kepada kurir saat pesanan diterima (simulasi).'
    };

    note.textContent = notes[method] ||
        'Pilih metode pembayaran untuk melihat keterangannya.';
}

/* Membuka modal keberhasilan pembayaran */

function showPaymentSuccess(order, customerName) {
    const overlay = $('#payment-success-overlay');
    const message = $('#payment-success-text');

    if (!overlay || !message) {
        showToast('Pesanan berhasil dibuat.');
        closeAllDrawers();
        return;
    }

    message.textContent =
        `Terima kasih, ${customerName}.` +
        ` Pesanan ${order.id} berhasil dicatat. ` +
        `Total simulasi: ${rupiah(order.total)}.`;

    overlay.hidden = false;

    document.body.classList.add('payment-modal-open');

    $('#payment-success-close')?.focus();
}

/* Menutup modal keberhasilan pembayaran */

function closePaymentSuccess() {
    const overlay = $('#payment-success-overlay');

    if (!overlay) {
        return;
    }

    overlay.hidden = true;

    document.body.classList.remove('payment-modal-open');

    closeAllDrawers(false);

    const focusTarget = $('#open-cart') || $('#open-history');

    if (focusTarget) {
        focusTarget.focus();
    }
}

function submitOrder(event) {
    event.preventDefault();

    if (!cart.length) {
        showToast('Keranjang masih kosong.');
        return;
    }

    for (const item of cart) {
        const novel = getNovel(item.id);

        if (!novel || item.quantity > novel.stock) {
            showToast(
                'Stok salah satu novel berubah. Periksa keranjang kembali.'
            );

            renderCart();
            return;
        }
    }

    const name = $('#customer-name').value.trim();
    const phone = $('#customer-phone').value.trim();
    const address = $('#customer-address').value.trim();
    const payment = $('#payment-method').value;

    if (!name || !phone || !address || !payment) {
        showToast('Lengkapi semua informasi checkout.');
        return;
    }

    const subtotal = cartSubtotal();
    const shipping = shippingCost(subtotal);
    const discount = discountAmount(subtotal);
    const total = subtotal + shipping - discount;

    const order = {
        id: `TK-${Date.now().toString().slice(-8)}`,
        createdAt: new Date().toISOString(),

        customer: {
            name,
            phone,
            address
        },

        payment,

        shippingRegion:
            $('#shipping-region')?.value || 'jawa',

        items: cart.map(item => {
            const novel = getNovel(item.id);

            return {
                id: novel.id,
                title: novel.title,
                author: novel.author,
                price: novel.price,
                quantity: item.quantity
            };
        }),

        subtotal,
        shipping,
        discount,
        total,
        status: 'Pesanan dibuat'
    };

    /* Simpan riwayat pesanan */

    orderHistory.unshift(order);
    saveJSON(HISTORY_KEY, orderHistory);

    /* Catat aktivitas checkout tanpa data pribadi pelanggan */

    const orderSummary = order.items
        .map(item => `${item.title} x${item.quantity}`)
        .join(', ');

    addActivity(
        'Menyelesaikan checkout',
        `Pesanan: ${order.id} | Produk: ${orderSummary} | Pembayaran: ${payment} | Total: ${rupiah(total)}`
    );

    /* Kurangi stok novel */

    cart.forEach(item => {
        const novel = getNovel(item.id);

        if (novel) {
            novel.stock = Math.max(
                0,
                novel.stock - item.quantity
            );
        }
    });

    /* Kosongkan keranjang */

    cart = [];
    couponApplied = false;

    saveCart();

    renderCart();
    renderProducts();
    renderGenrePage();

    /* Tampilkan modal keberhasilan */

    showPaymentSuccess(order, name);
    showToast('Pesanan berhasil dibuat.');
}

/* =========================================================
   12. RIWAYAT PESANAN
   ========================================================= */

function renderHistory() {
    const content = $('#history-content');
    const empty = $('#history-empty');

    if (!content || !empty) {
        return;
    }

    empty.hidden = orderHistory.length > 0;
    content.hidden = orderHistory.length === 0;

    content.innerHTML = orderHistory.map(order => {
        const date = new Date(order.createdAt);

        const formattedDate = Number.isNaN(date.getTime())
            ? ''
            : date.toLocaleString('id-ID', {
                dateStyle: 'medium',
                timeStyle: 'short'
            });

        const items = (order.items || [])
            .map(item =>
                `${escapeHTML(item.title)} × ${item.quantity}`
            )
            .join('<br>');

        return `
            <article
                class="history-order"
                data-order-id="${escapeHTML(order.id)}"
            >
                <div class="history-order-header">
                    <div>
                        <h3>${escapeHTML(order.id)}</h3>
                        <time>${escapeHTML(formattedDate)}</time>
                    </div>

                    <span class="order-status">
                        ${escapeHTML(order.status || 'Pesanan dibuat')}
                    </span>
                </div>

                <div class="history-order-items">
                    ${items}
                    <br>
                    Metode pembayaran:
                    ${escapeHTML(order.payment || '-')}
                    <br>
                    Penerima:
                    ${escapeHTML(order.customer?.name || '-')}
                </div>

                <div class="history-order-footer">
                    <div>
                        <strong>
                            ${rupiah(Number(order.total) || 0)}
                        </strong>

                        <span>Termasuk ongkos kirim</span>
                    </div>

                    <button
                        class="delete-order"
                        data-delete-order="${escapeHTML(order.id)}"
                        type="button"
                    >
                        Hapus riwayat ini
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

function deleteOrder(id) {
    const deletedOrder = orderHistory.find(
        order => String(order.id) === String(id)
    );

    orderHistory = orderHistory.filter(
        order => String(order.id) !== String(id)
    );

    saveJSON(HISTORY_KEY, orderHistory);

    addActivity(
        'Menghapus riwayat pesanan',
        deletedOrder
            ? `Pesanan ${deletedOrder.id} dihapus.`
            : `Pesanan ${id} dihapus.`
    );

    renderHistory();

    showToast('Riwayat pesanan dihapus.');
}

/* =========================================================
   13. HALAMAN KUMPULAN NOVEL BERDASARKAN GENRE
   ========================================================= */

function initializeGenrePage() {
    const params = new URLSearchParams(
        window.location.search
    );

    const requestedGenre = params.get('genre');

    if (!requestedGenre) {
        return false;
    }

    const validGenres = [
        'Romance',
        'Fantasy',
        'Mystery',
        'Thriller',
        'Science Fiction',
        'Horror',
        'Comedy',
        'Adventure',
        'Memoir',
        'Historical Fiction',
        'Teen Fiction',
        'Inspirational'
    ];

    const match = validGenres.find(genre =>
        genre.toLocaleLowerCase('id-ID') ===
        requestedGenre.toLocaleLowerCase('id-ID')
    );

    if (!match) {
        return false;
    }

    activeGenrePage = match;

    addActivity(
        'Membuka halaman genre',
        `Pengunjung membuka halaman genre ${match}.`
    );

    if ($('#home-view')) {
        $('#home-view').hidden = true;
    }

    if ($('#genre-view')) {
        $('#genre-view').hidden = false;
    }

    document.title = `${match} — Temu Kata`;

    renderGenrePage();

    return true;
}

/* =========================================================
   14. EVENT LISTENERS
   ========================================================= */

function initializeEvents() {
    /* Navigasi seluler */

    $('#mobile-menu-button')?.addEventListener(
        'click',
        () => {
            const links = $('#nav-links');

            if (!links) {
                return;
            }

            const open = links.classList.toggle('open');

            $('#mobile-menu-button').setAttribute(
                'aria-expanded',
                String(open)
            );

            $('#mobile-menu-button').setAttribute(
                'aria-label',
                open ? 'Tutup navigasi' : 'Buka navigasi'
            );
        }
    );

    $$('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            $('#nav-links')?.classList.remove('open');

            $('#mobile-menu-button')?.setAttribute(
                'aria-expanded',
                'false'
            );
        });
    });

    /* Keranjang */

    $('#open-cart')?.addEventListener(
        'click',
        () => showDrawer('cart')
    );

    $('#close-cart')?.addEventListener(
        'click',
        () => closeAllDrawers()
    );

    $('#cart-overlay')?.addEventListener(
        'click',
        () => closeAllDrawers()
    );

    /* Riwayat pesanan */

    $('#open-history')?.addEventListener(
        'click',
        () => showDrawer('history')
    );

    $('#close-history')?.addEventListener(
        'click',
        () => closeAllDrawers()
    );

    $('#history-overlay')?.addEventListener(
        'click',
        () => closeAllDrawers()
    );

    /* Kembali menjelajahi koleksi dari keranjang */

    $('#browse-from-cart')?.addEventListener(
        'click',
        () => {
            closeAllDrawers();

            if (activeGenrePage) {
                window.location.href = 'index.html#koleksi';
                return;
            }

            $('#koleksi')?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    );

    /* Checkout */

    $('#checkout-start')?.addEventListener(
        'click',
        openCheckout
    );

    $('#back-to-cart')?.addEventListener(
        'click',
        () => {
            $('#checkout-form').hidden = true;
            $('#cart-items').hidden = cart.length === 0;
            $('#cart-empty').hidden = cart.length > 0;
            $('#cart-summary').hidden = cart.length === 0;

            renderCart();
        }
    );

    $('#checkout-form')?.addEventListener(
        'submit',
        submitOrder
    );

    /* Modal pembayaran berhasil */

    $('#payment-success-close')?.addEventListener(
        'click',
        closePaymentSuccess
    );

    $('#payment-success-overlay')?.addEventListener(
        'click',
        event => {
            if (event.target === $('#payment-success-overlay')) {
                closePaymentSuccess();
            }
        }
    );

    /* Metode pembayaran */

    $('#payment-method')?.addEventListener(
        'change',
        updatePaymentNote
    );

    /* Wilayah pengiriman */

    $('#shipping-region')?.addEventListener(
        'change',
        () => {
            renderCart();

            if ($('#checkout-total')) {
                $('#checkout-total').textContent =
                    rupiah(cartTotal());
            }
        }
    );

    /* Kupon */

    $('#apply-coupon')?.addEventListener(
        'click',
        applyCoupon
    );

    $('#coupon-input')?.addEventListener(
        'keydown',
        event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                applyCoupon();
            }
        }
    );

    /* Pencarian judul dan penulis */

    $('#search-input')?.addEventListener(
        'input',
        event => {
            searchText = event.target.value;

            if ($('#clear-search')) {
                $('#clear-search').hidden = !searchText;
            }
        }
    );

    const runSearch = () => {
        searchText = $('#search-input')?.value || '';

        if (searchText.trim()) {
            const source = activeFilter === 'Semua'
                ? novels
                : novels.filter(
                    novel => novel.genre === activeFilter
                );

            const results = linearSearchBooks(searchText, source);

            addActivity(
                'Mencari novel',
                `Kata kunci: "${searchText.trim()}" | Hasil ditemukan: ${results.length}`
            );
        }

        renderProducts();
    };

    $('#search-button')?.addEventListener(
        'click',
        runSearch
    );

    $('#search-input')?.addEventListener(
        'keydown',
        event => {
            if (event.key === 'Enter') {
                runSearch();
            }
        }
    );

    $('#clear-search')?.addEventListener(
        'click',
        () => {
            if (searchText.trim()) {
                addActivity(
                    'Menghapus pencarian',
                    `Kata kunci sebelumnya: "${searchText.trim()}"`
                );
            }

            $('#search-input').value = '';
            searchText = '';

            $('#clear-search').hidden = true;

            renderProducts();

            $('#search-input').focus();
        }
    );

    /* Pengurutan Bubble Sort pada katalog utama */

    $('#sort-select')?.addEventListener(
        'change',
        () => {
            addActivity(
                'Mengurutkan katalog',
                `Jenis pengurutan: ${$('#sort-select').value}`
            );

            renderProducts();
        }
    );

    /* Pengurutan Bubble Sort pada halaman genre */

    $('#genre-sort-select')?.addEventListener(
        'change',
        () => {
            addActivity(
                'Mengurutkan novel berdasarkan genre',
                `Genre: ${activeGenrePage} | Jenis pengurutan: ${$('#genre-sort-select').value}`
            );

            renderGenrePage();
        }
    );

    /* Filter genre */

    $$('.genre-pill').forEach(button => {
        button.addEventListener('click', () => {
            const selectedGenre = button.dataset.filter;

            setActiveFilter(selectedGenre);
        });
    });

    /* Reset filter dan pencarian */

    $('#reset-filters')?.addEventListener(
        'click',
        () => {
            addActivity(
                'Mereset filter katalog',
                'Filter genre, pencarian, dan pengurutan dikembalikan ke pengaturan awal.'
            );

            activeFilter = 'Semua';
            searchText = '';

            if ($('#search-input')) {
                $('#search-input').value = '';
            }

            if ($('#clear-search')) {
                $('#clear-search').hidden = true;
            }

            if ($('#sort-select')) {
                $('#sort-select').value = 'featured';
            }

            updateFilterPills();
            renderProducts();
        }
    );

    /* Event delegation kartu novel dan keranjang */

    document.addEventListener('click', event => {
        const addButton = event.target.closest(
            '[data-add-cart]'
        );

        if (addButton) {
            addToCart(addButton.dataset.addCart);
            return;
        }

        const quantityButton = event.target.closest(
            '[data-quantity]'
        );

        if (quantityButton) {
            updateQuantity(
                quantityButton.dataset.id,
                quantityButton.dataset.quantity
            );

            return;
        }

        const removeButton = event.target.closest(
            '[data-remove-cart]'
        );

        if (removeButton) {
            removeFromCart(
                removeButton.dataset.removeCart
            );

            return;
        }

        const deleteButton = event.target.closest(
            '[data-delete-order]'
        );

        if (deleteButton) {
            deleteOrder(
                deleteButton.dataset.deleteOrder
            );
        }
    });

    /* Tombol Escape */

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') {
            return;
        }

        const successOverlay = $('#payment-success-overlay');

        if (successOverlay && !successOverlay.hidden) {
            closePaymentSuccess();
            return;
        }

        closeAllDrawers();
    });
}

/* =========================================================
   15. INISIALISASI WEBSITE
   ========================================================= */

function initialize() {
    if ($('#current-year')) {
        $('#current-year').textContent =
            new Date().getFullYear();
    }

    renderCartBadge();
    renderCart();

    initializeEvents();

    const isGenrePage = initializeGenrePage();

    if (!isGenrePage) {
        addActivity(
            'Membuka halaman utama',
            'Pengunjung membuka halaman utama Temu Kata.'
        );

        renderProducts();
    }

    updatePaymentNote();
}

document.addEventListener(
    'DOMContentLoaded',
    initialize
);
