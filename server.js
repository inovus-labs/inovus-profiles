const subdomain = require('express-subdomain');
const express = require('express')

const app = express()
const router = express.Router();


app.get('*', (req, res) => {
    console.log(req.subdomains);
});


router.use(subdomain('*.api', router));
app.use(subdomain('api', router));

app.listen(3000, () => {
    console.log('\x1b[35m%s\x1b[0m', '\n--- Server is running on port 3000! ---\n')
    
})