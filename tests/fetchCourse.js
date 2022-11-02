import axios from 'axios'
import * as cheerio from 'cheerio'

// 測試爬蟲有沒有抓到資料
const main = async () => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    console.log(data)
    const $ = cheerio.load(data)
    const courses = []
    $('#general .card-title').each(function () {
      courses.push($(this).text().trim())
    })
    console.log(courses)
    // 回覆上限是五筆
    // event.reply(courses.join('\n'))
  } catch (error) {
    // event.reply('發生錯誤')
    console.error(error)
  }
}
main()
