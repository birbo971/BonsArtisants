const productsRoutes = (app, fs) => {
    // variables
    const Products ='./json/Products.json';

    const readFile = (callback, returnJson = false, filePath = Products, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };
    const writeFile = (fileData, callback, filePath = Products, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };
    //SELECT
    app.get('/products', (req, res) => {
        fs.readFile(Products, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
    
            res.send(JSON.parse(data));
        });
    });
    //INSERT
    app.get('/addProducts', (req, res) => {
        const fileContent = {
            name : req.body.name };
               console.log(fileContent);
            Products.push(fileContent);
            writeFile(JSON.stringify(fileContent, "JSON"), () => {
                res.status(200).send({ message: 'new products added' });
            });
    });
    //UPDATE
    app.put('/products/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const userId = req.params["id"];
            data[userId] = JSON.parse(req.body.data);

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/products/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const userId = req.params["id"];
            delete data[userId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} removed`);
            });
        },
            true);
    });

}
module.exports = productsRoutes;
