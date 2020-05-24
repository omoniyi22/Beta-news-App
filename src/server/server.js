const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const fileUpload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
// const logger = require('morgan')
const { MongoClient } = require('mongodb');




app.use(fileUpload());



// bodyparser
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use(express.json());


//Admin Route
app.use('/Admin', require('./routes/admin/news/Admin'));
app.use('/Admin', require('./routes/admin/news/finance'));
app.use('/Admin', require('./routes/admin/news/politics'));
app.use('/Admin', require('./routes/admin/news/entertainment'));
app.use('/Admin', require('./routes/admin/news/foreign'));
app.use('/Admin', require('./routes/admin/news/sci'));
app.use('/Admin', require('./routes/admin/news/sport'));

app.use('/', require('./routes/users/register'));
app.use('/', require('./routes/users/login'));
app.use('/', require('./routes/users/contact'));

//News Route
app.use('/news', require('./routes/news/politics'));
app.use('/news', require('./routes/news/entertainment'));
app.use('/news', require('./routes/news/finance'));
app.use('/news', require('./routes/news/sci'));
app.use('/news', require('./routes/news/sports'));
app.use('/news', require('./routes/news/foreign'));
app.use('/news', require('./routes/news/main'));


//Login Route
// app.use('/users', require('./routes/users/login'));
// //Profile Route
// app.use('/users', require('./routes/users/profile'));

// //Register Route
// app.use('/users', require('./routes/users/register'));
// //Contact Route
// app.use('/users', require('./routes/users/contact'));
// //News DB
// app.use('/DB', require('./routes/NewsDB/politics'));
if (process.env.NODE_ENV === 'production') {
	const build_path = path.join(__dirname, '../..', 'build')
	app.use(express.static(build_path))
	app.get('/*', (req, res) => {
		res.sendFile(path.join(build_path, 'index.html'))
	})
}


// let db = 'mongodb://localhost:27017/'
let db = 'mongodb+srv://seun2322:seun2322@betanews-igci1.mongodb.net/test?retryWrites=true'

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log('database is connected'))


// async function main() {
// 	// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
// 	let uri = 'mongodb+srv://seun2322:seun2322@betanews-igci1.mongodb.net/test?retryWrites=true&w=majority'

// 	const client = new MongoClient(uri, {
// 		useUnifiedTopology: true,
// 		useNewUrlParser: true,
// 		ssl: true,
// 		retryWrites: true
// 	});


// 	try {
// 		// Connect to the MongoDB cluster
// 		await client.connect();

// 		// Make the appropriate DB calls
// 		await listDatabases(client);

// 	} catch (e) {
// 		console.error(e);
// 	} finally {
// 		await client.close();
// 	}
// }

// main().catch(console.error);

// async function listDatabases(client) {
// 	databasesList = await client.db().admin().listDatabases();

// 	console.log("Databases:");
// 	databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


app.listen(PORT, () => {
	console.log('server is working', PORT);
})