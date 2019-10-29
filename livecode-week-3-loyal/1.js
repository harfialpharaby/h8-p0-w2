/**
 * =============
 * Panas Jakarta
 * =============
 * 
 * [Instruction]
 * Buatlah pseudocode untuk kasus bedikut:
 * Jakarta sedang panas, seorang student phase 0 ingin menurunkan suhu badannya
 * tergantung dari tingginya suhu (dalam celcius) di luar ruangan.
 * 1. Jika suhu <= 26, maka tidak menggunakan kipas atau AC
 * 2. Jika suhu <= 28, maka menggunakan kipas tangan
 * 3. Jika suhu <= 30, maka menggunakan kipas angin
 * 4. Jika suhu > 30, maka menggunakan AC
 * 
 * Tampilkan apa yang akan student tersebut lakukan jika suhu udara adalah x?
 */
// Write pseudocode here

SET x TO ANY VALUE
IF x LOWER THAN EQUALS 26 THEN
    PRINT 'tidak menggunakan kipas atau AC'
ELSE IF x LOWER THAN EQUALS 28 THEN
    PRINT 'menggunakan kipas tangan'
ELSE IF x LOWER THEN EQUALS 30 THEN
    PRINT 'menggunakan kipas angin'
ELSE
    PRINT 'menggunakan AC'
END IF