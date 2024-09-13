  fs.readFile('./system/db/reqtotal.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Gagal membaca data' })
    }
    let reqTotalData
    try {
      reqTotalData = JSON.parse(data)
    } catch (parseErr) {
      return res.status(500).json({ error: 'Gagal mengurai data JSON' })
    }
    const now = new Date()
    const lastResetTime = new Date(reqTotalData.last_reset_time || 0)
    if (now - lastResetTime >= 24 * 60 * 60 * 1000) {
      reqTotalData.request_perhari = 0
      reqTotalData.last_reset_time = now
    }
    reqTotalData.request_perhari++
    reqTotalData.request_total++
    fs.writeFile('./database/reqtotal.json', JSON.stringify(reqTotalData), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: 'Gagal menyimpan data' })
      }
      next()
    })
  })