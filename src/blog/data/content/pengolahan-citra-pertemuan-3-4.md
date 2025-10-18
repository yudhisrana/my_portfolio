---

**Nama:** Dipo Yudhis Rana  
**NIM:** 15230163  
**Mata Kuliah:** Pengolahan Citra Digital  
**Universitas:** Bina Sarana Informatika

---

## ✨ Pendahuluan

Halo semuanya! 👋  
Pada pertemuan kali ini, kita akan membahas beberapa konsep penting dalam pengolahan citra digital — yaitu **filtering**, **konklusi**, **low pass spatial filter**, dan **median filter**.  
Topik ini sangat penting karena merupakan dasar dari berbagai teknik peningkatan citra (_image enhancement_) dan penghilangan noise yang sering digunakan di dunia nyata.

---

## 🖼️ 1️⃣ Apa yang Dimaksud dengan Filtering, Konklusi, Low Pass Spatial Filter, dan Median Filter

### A. Filtering

**Filtering (penyaringan)** adalah proses memodifikasi atau memperbaiki tampilan citra dengan cara menonjolkan fitur tertentu atau menghilangkan gangguan (_noise_).  
Proses ini dilakukan menggunakan **mask atau kernel (filter)** yang diterapkan pada setiap piksel citra.

💡 **Contoh Tujuan Filtering:**

- Menghaluskan citra agar tampak lembut → _Low-pass filter_
- Menajamkan tepi objek agar lebih jelas → _High-pass filter_

---

### B. Konklusi

**Konklusi** artinya **kesimpulan** dari hasil pengolahan atau analisis citra.  
Dalam konteks pengolahan citra, ini berarti **menarik kesimpulan dari hasil eksperimen**, misalnya menentukan apakah suatu metode filter efektif atau tidak.

📍 **Contoh:**

> Dari hasil pengujian, dapat disimpulkan bahwa penggunaan **median filter** mampu mengurangi _salt-and-pepper noise_ dengan baik tanpa mengaburkan detail tepi.

---

### C. Low Pass Spatial Filter

**Low Pass Spatial Filter** berfungsi untuk **melewatkan frekuensi rendah** dan **menghalangi frekuensi tinggi**.  
Efeknya adalah citra menjadi **lebih halus (smooth)** karena detail kecil dan tepi tajam dikurangi.

🧩 **Ciri-ciri:**

- Menghaluskan citra
- Menghilangkan noise berfrekuensi tinggi
- Umumnya menggunakan **mean filter** atau **Gaussian filter**

---

### D. Median Filter

**Median Filter** adalah **filter non-linear** yang menggantikan nilai suatu piksel dengan **nilai median** dari piksel di sekitarnya.  
Filter ini sangat efektif menghapus noise impulsif seperti _salt-and-pepper noise_ tanpa merusak tepi citra.

📐 **Langkah-langkah:**

1. Ambil area jendela (misalnya 3×3 piksel).
2. Urutkan nilai intensitasnya.
3. Nilai tengah (median) menggantikan piksel pusat.

💪 **Kelebihan:**

- Tidak mengaburkan tepi seperti mean filter.
- Cocok untuk perbaikan citra yang terkontaminasi noise ekstrem.

---

## 🧩 2️⃣ Contoh Kasus: Hasil Konvolusi Citra 8-bit dengan Kernel 3×3

Untuk memahami konsep filtering lebih dalam, mari kita lihat contoh **konvolusi citra** dengan **mask 3×3**.

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
 [1, -2, 1],
 [-2, 4, -2],
 [1, -2, 1]
```

---

### Hasil Konvolusi (Valid, tanpa padding)

Hasil konvolusi valid menghasilkan matriks berukuran **3×3** sebagai berikut:

```
[ 189, -409,  211],
[-409, 823, -415],
[ 205, -400,  194]
```

---

### Hasil Konvolusi (Same, dengan zero-padding)

Jika menggunakan **zero-padding** (ukuran keluaran sama dengan citra asli), hasilnya menjadi:

```
[  -8,   16,   -1,   -1,   11],
[  20,  189, -409,  211,   -3],
[  -2, -409,  823, -415,    1],
[  -6,  205, -400,  194,    4],
[   8,   11,  -16,   12,   12]
```

---

### Contoh Perhitungan (Elemen Tengah)

Untuk posisi pusat (elemen **220** dalam citra), blok 3×3 yang digunakan adalah:

```
[12, 15, 13],
[13, 220, 10],
[14, 15, 10]
```

Perhitungan konvolusi:

```
1×12 + (−2)×15 + 1×13 + (−2)×13 + 4×220 + (−2)×10 + 1×14 + (−2)×15 + 1×10
= 823
```

---

### Clipping ke Rentang 0–255 (Citra 8-bit)

Karena hasil konvolusi bisa bernilai negatif atau melebihi 255, maka dilakukan **clipping ke rentang [0, 255]**.

Hasil matriks setelah clipping:

```
[189,   0, 211],
[  0, 255,   0],
[205,   0, 194]
```

---

## 🧾 Kesimpulan

Dari hasil percobaan ini, dapat disimpulkan bahwa:

- 💡 Nilai tinggi (seperti 823) muncul pada area dengan kontras tinggi — misalnya di sekitar piksel 220.
- 🎯 Area yang homogen menghasilkan nilai konvolusi kecil.
- ⚙️ Proses filtering dan konvolusi sangat penting dalam mendeteksi tepi, mengurangi noise, dan menonjolkan fitur penting pada citra digital.
