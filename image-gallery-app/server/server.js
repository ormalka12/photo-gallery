const app = require('express')();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');

const saveImageOnDiskStorage = require('./middleware/uploadImageToDisk');
const {deleteImage, uploadImage, updateImage, getAllImages, search, searchByDescription} = require('./connectDB');
const handleErrors = require('./middleware/handleErrors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/images', async (req, res) => {
    const images = await getAllImages();
    res.status(200).send(JSON.stringify(images)); 
});

app.post('/upload', saveImageOnDiskStorage, async (req, res) => {
    const description = req.body.description;
    const imageAsBase64 = fs.readFileSync(`./uploads/${req.file.originalname}`, 'base64');
    await uploadImage(description, imageAsBase64);
    fs.unlinkSync(`./uploads/${req.file.originalname}`);
    res.status(200).send(JSON.stringify('New image uploaded successfully'));
  });

app.get('/delete', async (req, res) => {
    const imageId = req.query.id;
    await deleteImage(imageId);
    res.status(200).send(JSON.stringify('Picture successfully deleted'));
  });

app.post('/update', async (req, res) => {
    const {id, description} = req.body;
    await updateImage(id, description);
    res.status(200).send(JSON.stringify('Picture successfully updated'));
  });

  app.post('/search', async (req, res) => {
    const listOfImages = await search(req.body.string);
    res.status(200).send(JSON.stringify(listOfImages));
  });

  app.post('/getImage', async (req, res) => {
    const image = await searchByDescription(req.body.description);
    res.status(200).send(JSON.stringify(image));
  });


app.use(handleErrors);

app.listen(port, () => console.log(`Gallery app - listening on port ${port}!`));


