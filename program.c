#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define JUMLAH_BUKU 12
#define MAKS_KERANJANG 50

typedef struct {
    int id;
    char title[100];
    char author[60];
    char genre[40];
    double price;
    int stock;
    char label[40];
    char cover[20];
    char book[20];
    char text[20];
    char image[150];
    char description[300];
} Novel;

typedef struct {
    Novel *buku;
    int jumlah;
} ItemKeranjang;

/* Urutan nilai harus sesuai urutan atribut pada struct Novel. */
Novel daftarNovel[JUMLAH_BUKU] = {
    {1, "Laut Bercerita", "Leila S. Chudori", "Historical Fiction", 105000, 12, "", "#385b58", "#244542", "#f5e9d2", "images/laut_bercerita_novel.jpeg", "Kisah tentang kehilangan, persahabatan, keluarga, dan perjuangan."},
    {2, "Bumi", "Tere Liye", "Fantasy", 99000, 15, "", "#d9c8a6", "#6c5946", "#fff5df", "images/bumi_novel.jpeg", "Kisah petualangan di dunia paralel."},
    {3, "Bulan", "Tere Liye", "Fantasy", 99000, 10, "", "#d9e2df", "#6b8d8a", "#fffdf5", "images/bulan_novel.jpeg", "Kelanjutan petualangan di dunia paralel."},
    {4, "Hujan", "Tere Liye", "Science Fiction", 95000, 8, "", "#d7c5a5", "#776044", "#fff4df", "images/hujan_novel.jpeg", "Kisah tentang kehilangan, kenangan, persahabatan, dan masa depan."},
    {5, "Laskar Pelangi", "Andrea Hirata", "Drama", 100000, 9, "", "#c6d6c5", "#63866b", "#fff9eb", "images/laskar_pelangi_novel.jpeg", "Kisah perjuangan anak-anak dalam meraih pendidikan."},
    {6, "Pulang", "Tere Liye", "Adventure", 89000, 7, "", "#e5c9bc", "#a45e53", "#fff4e9", "images/pulang_novel.jpeg", "Kisah perjalanan, keluarga, dan perjuangan."},
    {7, "Perahu Kertas", "Dee Lestari", "Romance", 98000, 11, "", "#d8b8a7", "#824d49", "#f9e9d7", "images/perahu_kertas_novel.jpeg", "Kisah cinta, persahabatan, dan pencarian jati diri."},
    {8, "Dilan 1990", "Pidi Baiq", "Romance", 85000, 13, "", "#e5c9bc", "#a45e53", "#fff4e9", "images/dilan_1990_novel.jpeg", "Kisah romansa remaja di Bandung."},
    {9, "Negeri 5 Menara", "Ahmad Fuadi", "Drama", 92000, 6, "", "#c6d6c5", "#63866b", "#fff9eb", "images/negeri_5_menara_novel.jpeg", "Kisah persahabatan dan perjuangan meraih cita-cita."},
    {10, "Filosofi Teras", "Henry Manampiring", "Self Improvement", 108000, 5, "", "#d9c8a6", "#6c5946", "#fff5df", "images/filosofi_teras_novel.jpeg", "Buku pengantar filsafat Stoisisme untuk kehidupan sehari-hari."},
    {11, "Cantik Itu Luka", "Eka Kurniawan", "Historical Fiction", 115000, 4, "", "#385b58", "#244542", "#f5e9d2", "images/cantik_itu_luka_novel.jpeg", "Novel tentang keluarga, sejarah, dan kehidupan masyarakat."},
    {12, "Pulang Pergi", "Tere Liye", "Adventure", 105000, 10, "", "#d7c5a5", "#776044", "#fff4df", "images/pulang_pergi_novel.jpeg", "Kisah lanjutan perjalanan dan petualangan."}
};

/* Array pointer: setiap elemen menunjuk ke satu objek Novel. */
Novel *PTR[JUMLAH_BUKU];
ItemKeranjang keranjang[MAKS_KERANJANG];
int jumlahItemKeranjang = 0;

void buangSisaInput(void) {
    int ch;
    while ((ch = getchar()) != '\n' && ch != EOF) {}
}

void buatHurufKecil(const char *sumber, char *hasil, size_t ukuran) {
    size_t i = 0;
    if (ukuran == 0) return;
    while (sumber[i] != '\0' && i < ukuran - 1) {
        hasil[i] = (char)tolower((unsigned char)sumber[i]);
        i++;
    }
    hasil[i] = '\0';
}

int mengandungTeks(const char *teks, const char *kataKunci) {
    char teksKecil[300];
    char kataKunciKecil[200];
    buatHurufKecil(teks, teksKecil, sizeof(teksKecil));
    buatHurufKecil(kataKunci, kataKunciKecil, sizeof(kataKunciKecil));
    return strstr(teksKecil, kataKunciKecil) != NULL;
}

void tampilkanRupiah(double harga) {
    printf("Rp %.0f", harga);
}

void tampilkanNovel(void) {
    int i;
    printf("\n================ DAFTAR NOVEL ================\n");
    printf("%-4s %-25s %-22s %-20s %-12s %-5s\n", "ID", "Judul", "Penulis", "Genre", "Harga", "Stok");
    printf("--------------------------------------------------------------------------------\n");
    for (i = 0; i < JUMLAH_BUKU; i++) {
        printf("%-4d %-25.25s %-22.22s %-20.20s Rp %-9.0f %-5d\n",
               PTR[i]->id, PTR[i]->title, PTR[i]->author, PTR[i]->genre,
               PTR[i]->price, PTR[i]->stock);
    }
}

/* LINEAR SEARCH: mencari judul atau penulis dan mencatat setiap pemeriksaan. */
void cariNovel(void) {
    char kataKunci[100];
    int ditemukan = 0;
    int i;
    printf("\nMasukkan judul atau nama penulis: ");
    if (fgets(kataKunci, sizeof(kataKunci), stdin) == NULL) return;
    kataKunci[strcspn(kataKunci, "\n")] = '\0';
    if (kataKunci[0] == '\0') {
        printf("Kata kunci tidak boleh kosong.\n");
        return;
    }

    printf("\n========== LOG LINEAR SEARCH ==========\n");
    printf("Kata kunci: %s\nPencarian dilakukan secara berurutan.\n\n", kataKunci);
    for (i = 0; i < JUMLAH_BUKU; i++) {
        printf("[Langkah %d] Memeriksa: %s\n", i + 1, PTR[i]->title);
        if (mengandungTeks(PTR[i]->title, kataKunci) || mengandungTeks(PTR[i]->author, kataKunci)) {
            printf("  -> DITEMUKAN!\n     ID      : %d\n     Judul   : %s\n     Penulis : %s\n     Harga   : ", PTR[i]->id, PTR[i]->title, PTR[i]->author);
            tampilkanRupiah(PTR[i]->price);
            printf("\n     Stok    : %d\n", PTR[i]->stock);
            ditemukan++;
        } else {
            printf("  -> Belum cocok.\n");
        }
    }
    printf("\n========== HASIL PENCARIAN ==========\n");
    if (ditemukan > 0) printf("Jumlah hasil yang ditemukan: %d novel.\n", ditemukan);
    else printf("Novel tidak ditemukan.\n");
    printf("Total data yang diperiksa: %d\n", JUMLAH_BUKU);
}

/* Menentukan apakah dua novel perlu ditukar sesuai pilihan sorting. */
int perluDitukar(const Novel *a, const Novel *b, int pilihan) {
    if (pilihan == 1) return strcmp(a->title, b->title) > 0; /* Judul A-Z */
    if (pilihan == 2) return a->price > b->price;            /* Harga naik */
    if (pilihan == 3) return a->stock < b->stock;             /* Stok turun */
    return 0;
}

/* Pointer ke pointer: menukar dua nilai pointer dalam array PTR. */
void tukarPointer(Novel **a, Novel **b) {
    Novel *sementara = *a;
    *a = *b;
    *b = sementara;
}

/* BUBBLE SORT: yang ditukar adalah pointer di PTR, bukan objek aslinya. */
void urutkanNovel(void) {
    int pilihan, i, j;
    int totalPerbandingan = 0, totalPertukaran = 0;
    printf("\n========== MENU SORTING ==========\n");
    printf("1. Judul (A-Z)\n2. Harga (termurah ke termahal)\n3. Stok (terbanyak ke tersedikit)\nPilih metode pengurutan: ");
    if (scanf("%d", &pilihan) != 1) {
        buangSisaInput();
        printf("Input tidak valid.\n");
        return;
    }
    buangSisaInput();
    if (pilihan < 1 || pilihan > 3) {
        printf("Pilihan sorting tidak valid.\n");
        return;
    }
    printf("\n========== LOG BUBBLE SORT ==========\n");
    if (pilihan == 1) printf("Kriteria: judul A-Z\n");
    else if (pilihan == 2) printf("Kriteria: harga termurah ke termahal\n");
    else printf("Kriteria: stok terbanyak ke tersedikit\n");

    for (i = 0; i < JUMLAH_BUKU - 1; i++) {
        int adaPertukaran = 0;
        printf("\n--- Putaran %d ---\n", i + 1);
        for (j = 0; j < JUMLAH_BUKU - 1 - i; j++) {
            totalPerbandingan++;
            printf("Bandingkan \"%s\" dengan \"%s\"\n", PTR[j]->title, PTR[j + 1]->title);
            if (perluDitukar(PTR[j], PTR[j + 1], pilihan)) {
                printf("  -> Urutan salah, tukar pointer.\n");
                tukarPointer(&PTR[j], &PTR[j + 1]);
                totalPertukaran++;
                adaPertukaran = 1;
                printf("  -> Sekarang: \"%s\" sebelum \"%s\"\n", PTR[j]->title, PTR[j + 1]->title);
            } else {
                printf("  -> Urutan sudah benar, tidak ditukar.\n");
            }
        }
        if (!adaPertukaran) {
            printf("Tidak ada pertukaran pada putaran ini.\nSorting dapat dihentikan lebih awal.\n");
            break;
        }
    }
    printf("\n========== RINGKASAN SORTING ==========\nTotal perbandingan : %d\nTotal pertukaran   : %d\n", totalPerbandingan, totalPertukaran);
    printf("\nDaftar novel setelah diurutkan:\n");
    tampilkanNovel();
}

void tambahKeKeranjang(void) {
    int id, jumlah, i;
    Novel *bukuDipilih = NULL;
    tampilkanNovel();
    printf("\nMasukkan ID novel yang ingin dibeli: ");
    if (scanf("%d", &id) != 1) {
        buangSisaInput();
        printf("ID tidak valid.\n");
        return;
    }
    printf("Masukkan jumlah pembelian: ");
    if (scanf("%d", &jumlah) != 1) {
        buangSisaInput();
        printf("Jumlah tidak valid.\n");
        return;
    }
    buangSisaInput();
    if (jumlah <= 0) {
        printf("Jumlah pembelian harus lebih dari 0.\n");
        return;
    }
    for (i = 0; i < JUMLAH_BUKU; i++) {
        if (PTR[i]->id == id) {
            bukuDipilih = PTR[i];
            break;
        }
    }
    if (bukuDipilih == NULL) {
        printf("ID novel tidak ditemukan.\n");
        return;
    }
    if (bukuDipilih->stock < jumlah) {
        printf("Stok tidak mencukupi.\n");
        return;
    }
    for (i = 0; i < jumlahItemKeranjang; i++) {
        if (keranjang[i].buku->id == id) {
            if (keranjang[i].jumlah + jumlah > bukuDipilih->stock) {
                printf("Jumlah melebihi stok yang tersedia.\n");
                return;
            }
            keranjang[i].jumlah += jumlah;
            printf("Jumlah novel berhasil diperbarui di keranjang.\n");
            return;
        }
    }
    if (jumlahItemKeranjang >= MAKS_KERANJANG) {
        printf("Keranjang sudah penuh.\n");
        return;
    }
    keranjang[jumlahItemKeranjang].buku = bukuDipilih;
    keranjang[jumlahItemKeranjang].jumlah = jumlah;
    jumlahItemKeranjang++;
    printf("Novel berhasil ditambahkan ke keranjang.\n");
}

void tampilkanKeranjang(void) {
    int i;
    double total = 0;
    printf("\n========== KERANJANG BELANJA ==========\n");
    if (jumlahItemKeranjang == 0) {
        printf("Keranjang masih kosong.\n");
        return;
    }
    for (i = 0; i < jumlahItemKeranjang; i++) {
        double subtotal = keranjang[i].buku->price * keranjang[i].jumlah;
        printf("%d. %s\n   Jumlah  : %d\n   Subtotal: ", i + 1, keranjang[i].buku->title, keranjang[i].jumlah);
        tampilkanRupiah(subtotal);
        printf("\n");
        total += subtotal;
    }
    printf("---------------------------------------\nTotal belanja: ");
    tampilkanRupiah(total);
    printf("\n");
}

void checkout(void) {
    int i;
    double total = 0;
    char konfirmasi;
    if (jumlahItemKeranjang == 0) {
        printf("\nKeranjang masih kosong.\n");
        return;
    }
    tampilkanKeranjang();
    printf("\nLanjutkan checkout? (y/n): ");
    if (scanf(" %c", &konfirmasi) != 1) {
        buangSisaInput();
        printf("Input tidak valid.\n");
        return;
    }
    buangSisaInput();
    if (konfirmasi != 'y' && konfirmasi != 'Y') {
        printf("Checkout dibatalkan.\n");
        return;
    }
    /* Validasi semua stok sebelum transaksi mengurangi stok apa pun. */
    for (i = 0; i < jumlahItemKeranjang; i++) {
        if (keranjang[i].buku->stock < keranjang[i].jumlah) {
            printf("Stok tidak mencukupi. Checkout dibatalkan.\n");
            return;
        }
    }
    printf("\n========== STRUK TEMU KATA ==========\n");
    for (i = 0; i < jumlahItemKeranjang; i++) {
        Novel *buku = keranjang[i].buku;
        double subtotal = buku->price * keranjang[i].jumlah;
        printf("%s x %d = ", buku->title, keranjang[i].jumlah);
        tampilkanRupiah(subtotal);
        printf("\n");
        buku->stock -= keranjang[i].jumlah;
        total += subtotal;
    }
    printf("-------------------------------------\nTotal pembayaran: ");
    tampilkanRupiah(total);
    printf("\nTerima kasih telah berbelanja!\n");
    jumlahItemKeranjang = 0;
}

int main(void) {
    int pilihan, i;
    for (i = 0; i < JUMLAH_BUKU; i++) {
        PTR[i] = &daftarNovel[i];
    }
    do {
        printf("\n=====================================\n       TEMU KATA - TOKO NOVEL\n=====================================\n");
        printf("1. Lihat daftar novel\n2. Cari novel (Linear Search)\n3. Urutkan novel (Bubble Sort)\n4. Tambah novel ke keranjang\n5. Lihat keranjang\n6. Checkout\n0. Keluar\n-------------------------------------\nPilih menu: ");
        if (scanf("%d", &pilihan) != 1) {
            buangSisaInput();
            printf("Input harus berupa angka.\n");
            continue;
        }
        buangSisaInput();
        switch (pilihan) {
            case 1: tampilkanNovel(); break;
            case 2: cariNovel(); break;
            case 3: urutkanNovel(); break;
            case 4: tambahKeKeranjang(); break;
            case 5: tampilkanKeranjang(); break;
            case 6: checkout(); break;
            case 0: printf("Terima kasih. Program selesai.\n"); break;
            default: printf("Pilihan tidak tersedia.\n");
        }
    } while (pilihan != 0);
    return 0;
}