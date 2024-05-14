const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "Name": "Aung Myo Myat",
      "Email": "aungmyomyat@example.com",
      "Work": "Programmer"
    },
    {
      "Name": "Htet Aung Htet",
      "Email": "htetaunghtet@example.com",
      "Work": "Programmer"
    },
    {
      "Name": "Yu Mon Kyaw",
      "Email": "yumonkyaw@example.com",
      "Work": "Programmer"
    },
    {
      "Name": "Christina Min",
      "Email": "christinamin@example.com",
      "Work": "Programmer"
    },
    {
      "Name": "Dr Nadi Tun Oo",
      "Email": "drnaditunoo@example.com",
      "Work": "Programmer"
    },
    {
      "Name": "Min Thant Htet",
      "Email": "minthanhtet@example.com",
      "Work": "Programmer"
    }
  ]
  )
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})