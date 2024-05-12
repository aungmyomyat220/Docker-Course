const express = require('express')
const cors = require('cors')
const {User,Post} = require('./model/model.js')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"ပုညခင်: လက်ကျန်လရောင်...................."
    },
    {
      "id":"2",
      "title":"ဂျာနယ်ကျော်မမလေး: သူလိုလူ"
    },
    {
      "id":"3",
      "title":"ညီပုလေး: ထက်မြက်သောဓားသွားပေါ်ကချိုမြိန်သောပျားရည်စက်များ!!!!!"
    }
  ])
})

app.get("/all_users", async (req, res) => {
  try {
      const users = await User.find();
      res.send({message:"All Users List",data:users})
  } catch (error) {
      res.status(500).json({ error: "Error retrieving users" });
  }
});

app.listen(3000, () => {
  console.log('listening for requests on port 4000')
})