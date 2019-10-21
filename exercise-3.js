// contoh input
var nama = '';
var peran = '';
var hasil;

if(nama === '' && peran === '') {
    console.log('Nama harus diisi!');
} else if(nama !== '' && peran === '') {
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);
} else {
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    hasil = `Halo ${peran} ${nama},`;
    if (peran.toUpperCase() === 'KSATRIA') {
        console.log(`${hasil} kamu dapat menyerang dengan senjatamu!`);
    } else if (peran.toUpperCase() === 'TABIB') {
        console.log(`${hasil} kamu akan membantu temanmu yang terluka.`);
    } else if (peran.toUpperCase() === 'PENYIHIR') {
        console.log(`${hasil} ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`${hasil} maaf peran ini belum tersedia`); 
    }
}