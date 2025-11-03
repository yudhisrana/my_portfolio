---

**Nama:** Dipo Yudhis Rana  
**NIM:** 15230163  
**Mata Kuliah:** Pengolahan Citra Digital  
**Universitas:** Bina Sarana Informatika

---

## ✨ Pendahuluan

Halo semuanya! 👋  
Pada pertemuan kali ini, kita akan membahas beberapa konsep penting dalam pengolahan citra digital — yaitu **filtering**, **konvolusi**, **low pass spatial filter**, dan **median filter**.  
Topik ini sangat penting karena merupakan dasar dari berbagai teknik peningkatan citra (_image enhancement_) dan penghilangan noise yang sering digunakan di dunia nyata.

---

## 🖼️ 1️⃣ Konsep Dasar Filtering dan Konvolusi

### A. Filtering

**Filtering (penyaringan)** adalah proses memodifikasi atau memperbaiki citra dengan cara menonjolkan fitur tertentu atau menghilangkan gangguan (_noise_). Proses ini dilakukan menggunakan sebuah **mask atau kernel (filter)** yang dioperasikan pada setiap piksel citra untuk menghasilkan citra baru.

💡 **Tujuan Umum Filtering:**

- **Menghaluskan citra** agar tampak lebih lembut dan mengurangi noise (contoh: _Low-Pass Filter_).
- **Menajamkan tepi objek** agar lebih jelas dan detail (contoh: _High-Pass Filter_).

---

### B. Konvolusi (Convolution)

**Konvolusi** adalah operasi matematis fundamental yang menjadi dasar bagi sebagian besar teknik filtering linear. Secara sederhana, konvolusi adalah proses menggeser sebuah **kernel** (matriks kecil) di atas citra, piksel demi piksel. 

Pada setiap pergeseran, dilakukan dua langkah:
1.  **Perkalian elemen-demi-elemen** antara nilai di kernel dengan nilai piksel citra yang tumpang tindih.
2.  **Penjumlahan** semua hasil perkalian tersebut untuk mendapatkan nilai piksel baru di citra keluaran.

Operasi inilah yang memungkinkan sebuah kernel untuk 'memengaruhi' setiap piksel berdasarkan tetangganya, sehingga menghasilkan efek seperti blur, penajaman, atau deteksi tepi.

---

### C. Low Pass Spatial Filter (Filter Spasial Lolos Rendah)

**Low Pass Spatial Filter** adalah jenis filter linear yang bekerja dengan **melewatkan frekuensi rendah** dan **menghalangi frekuensi tinggi**. Dalam praktiknya, ini berarti filter akan **menghaluskan (smoothing/blurring)** citra.

Efek ini tercapai karena filter merata-ratakan nilai piksel dengan tetangganya, sehingga variasi intensitas yang cepat (detail tajam dan noise) akan berkurang.

🧩 **Ciri-ciri:**

- Menghasilkan citra yang lebih halus (smooth).
- Efektif untuk mengurangi noise berfrekuensi tinggi.
- Contoh paling umum adalah **Mean Filter** (filter rata-rata) dan **Gaussian Filter**.

---

### D. Median Filter

**Median Filter** adalah contoh **filter non-linear** yang sangat efektif. Berbeda dengan konvolusi yang menggunakan perkalian dan penjumlahan, filter ini bekerja dengan cara yang berbeda:

1.  Ambil sebuah area jendela (misalnya 3×3 piksel) di sekitar piksel pusat.
2.  **Urutkan** semua nilai intensitas piksel di dalam jendela tersebut dari yang terkecil hingga terbesar.
3.  Pilih **nilai tengah (median)** dari data yang sudah terurut itu.
4.  Gantikan nilai piksel pusat dengan nilai median tersebut.

💪 **Kelebihan Utama:**

- Sangat ampuh menghilangkan noise impulsif seperti **salt-and-pepper noise**.
- Mampu **mempertahankan ketajaman tepi** objek jauh lebih baik dibandingkan Mean Filter.

---

## 🧩 2️⃣ Contoh Kasus: Perhitungan Konvolusi dengan Kernel 3×3

Untuk memahami cara kerja konvolusi secara matematis, mari kita lihat contohnya pada citra 8-bit.

> **Catatan Penting:** Kernel yang digunakan di bawah ini adalah **Laplacian Kernel**, sebuah *high-pass filter* yang bertujuan untuk **mendeteksi tepi (edge detection)**. Kernel ini sengaja dipilih untuk menunjukkan bagaimana konvolusi menghasilkan nilai yang sangat tinggi pada area dengan perubahan intensitas drastis (seperti di sekitar piksel bernilai 220).

### Matriks Citra (5×5)

```
I =
 [10, 15, 15, 13, 12],
 [15, 12, 15, 13, 12],
 [12, 13, 220, 10, 12],
 [10, 14, 15, 10, 13],
 [11, 15, 12, 14, 14]
```

### Kernel / Mask (3×3)

```
h =
 [ 1, -2,  1],
 [-2,  4, -2],
 [ 1, -2,  1]
```

---

### Hasil Konvolusi (Valid, tanpa padding)

Hasil konvolusi valid (di mana kernel hanya beroperasi pada area yang sepenuhnya tumpang tindih) menghasilkan matriks berukuran **3×3**:

```
[ 189, -409,  211],
[-409,  823, -415],
[ 205, -400,  194]
```

---

### Contoh Perhitungan (Elemen Tengah)

Untuk posisi pusat (elemen **220**), blok 3×3 yang digunakan adalah:

```
[12,  15,  13],
[13, 220,  10],
[14,  15,  10]
```

Perhitungan konvolusi:

```
(1×12) + (−2×15) + (1×13) + (−2×13) + (4×220) + (−2×10) + (1×14) + (−2×15) + (1×10)
= 12 - 30 + 13 - 26 + 880 - 20 + 14 - 30 + 10
= 823
```

---

### Clipping ke Rentang 0–255 (Normalisasi)

Karena citra 8-bit hanya dapat menampilkan nilai dari 0 hingga 255, hasil konvolusi yang negatif atau melebihi 255 perlu dinormalisasi. Proses ini disebut **clipping**.

Hasil matriks setelah clipping:

```
[189,   0, 211],
[  0, 255,   0],
[205,   0, 194]
```
Nilai `823` menjadi `255` (nilai maksimum) dan nilai negatif menjadi `0` (nilai minimum).

---

## 🧾 Kesimpulan

Dari materi dan contoh di atas, dapat disimpulkan bahwa:

- **Filtering** adalah teknik umum untuk memodifikasi citra menggunakan kernel, sedangkan **Konvolusi** adalah operasi matematis yang sering digunakan untuk menerapkan filter linear.
- **Low-Pass Filter** (contoh: Mean Filter) menghaluskan citra dan mengurangi noise, namun dapat mengaburkan tepi.
- **Median Filter** (non-linear) unggul dalam menghilangkan *salt-and-pepper noise* sambil menjaga ketajaman tepi.
- Kernel yang berbeda menghasilkan efek yang berbeda. Contoh di atas menunjukkan bagaimana **Laplacian Kernel** (high-pass filter) menghasilkan nilai sangat tinggi pada area perubahan drastis, yang berguna untuk deteksi tepi.

---

## 📚 Referensi

Untuk memberikan landasan akademis dan teknis yang lebih kuat pada materi ini, berikut adalah beberapa referensi yang sangat direkomendasikan:

1.  **Gonzalez, R. C., & Woods, R. E. (2018). [*Digital Image Processing (4th Edition)*](http://www.imageprocessingplace.com/).**
    *   **Relevansi:** Buku ini adalah "kitab suci" dalam pengolahan citra. Konsep **konvolusi** dan **spatial filtering** dibahas secara mendalam di **Bab 3**, sementara berbagai jenis filter seperti **Low-Pass Filter** dan **Median Filter** dijelaskan di **Bab 5**. Contoh perhitungan konvolusi yang Anda jabarkan sangat sejalan dengan teori yang ada di buku ini.

2.  **Fisher, R., Perkins, S., Walker, A., & Wolfart, E. (2003). [*Hypermedia Image Processing Reference*](https://homepages.inf.ed.ac.uk/rbf/HIPR2/index.htm).**
    *   **Relevansi:** Ini adalah sumber daring yang sangat baik dari Universitas Edinburgh. Halaman tentang [Convolution](https://homepages.inf.ed.ac.uk/rbf/HIPR2/convolve.htm), [Mean Filtering](https://homepages.inf.ed.ac.uk/rbf/HIPR2/mean.htm), dan [Median Filtering](https://homepages.inf.ed.ac.uk/rbf/HIPR2/median.htm) memberikan penjelasan matematis dan contoh visual yang jelas, yang dapat memperkuat pemahaman konsep.

3.  **Kaur, M., & Kaur, J. (2021). [A Survey on Median Filters for Removal of High Density Salt & Pepper Noise in Noisy Image](https://www.iosrjournals.org/iosr-jece/papers/Vol16-issue4/Ser-2/E1604023139.pdf). *IOSR Journal of Electronics and Communication Engineering*, 16(4), 31-39.**
    *   **Relevansi:** Jurnal ini secara spesifik membahas keunggulan **Median Filter** untuk mengatasi *salt-and-pepper noise*, yang Anda sebutkan sebagai salah satu kelebihannya. Mengutip sumber seperti ini menunjukkan bahwa klaim Anda didukung oleh penelitian ilmiah dan bukan sekadar pengetahuan umum.

Dengan mengacu pada sumber-sumber ini, argumen dan penjelasan Anda menjadi lebih valid dan dapat dipertanggungjawabkan secara akademis.
