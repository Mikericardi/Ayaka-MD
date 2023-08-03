// Jgn Di Hapus
let handler = async (m) => {

let anu =`
*❏ INFO PREMIUM*
  
Dengan mendaftar menjadi user premium anda akan mendapatkan keuntungan sebagai berikut :

1. Bisa menggunakan semua fitur
2. mendapatkan unlimited limit
3. bisa memainkan di pesan pribadi

Silahkan hubungi owner ( *.owner* ) untuk melakukan upgrade premium hanya dengan Rp. 15.000 per bulan

Invite bot ke GROUP kalian ? ketik .sewa

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

${botdate}
`
await m.reply(anu)
}

handler.help = ['infopremium']
handler.tags = ['info']
handler.command = /^(infopremium)$/i

export default handler