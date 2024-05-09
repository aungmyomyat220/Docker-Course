const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"ပုညခင်: လက်ကျန်လရောင်"
    },
    {
      "id":"2",
      "title":"ဂျာနယ်ကျော်မမလေး: သူလိုလူ"
    },
    {
      "id":"3",
      "title":"ညီပုလေး: ထက်မြက်သောဓားသွားပေါ်ကချိုမြိန်သောပျားရည်စက်များ"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})