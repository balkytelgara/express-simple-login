const express = require("express")
const cookieParser = require("cookie-parser")
const registerRouter = require("./routes/register")
const indexRouter = require("./routes/index")

const app = express()


app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(registerRouter)
app.use(indexRouter)

app.use((req, res, next) => {
	const username = req.cookies.username

	if (username) {
		next()
	}

	res.redirect("/register")
})

app.listen(8000, () => {
	console.log("* server is running")
})