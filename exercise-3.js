// contoh input
var nama = '';
var peran = 'tes';
var hasil;

if(nama === '') {
    console.log('Nama harus diisi!');
} else if(nama !== '' && peran === '') {
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
} else {
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    if (peran.toUpperCase() === 'KSATRIA') {
        console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran.toUpperCase() === 'TABIB') {
        console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
    } else if (peran.toUpperCase() === 'PENYIHIR') {
        console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`Halo ${peran} ${nama}, maaf peran ini belum tersedia`); 
    }
}