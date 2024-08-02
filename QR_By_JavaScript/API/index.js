const express = require('express');
const cors = require('cors');
const pdf = require('html-pdf');
const bodyParser = require('body-parser');
const qr = require("qr-image");
const fs = require('fs');
const pdfTemplate = require('./Template');
const path = require('path');

const baseUrl = 5000;
// const baseUrl = 84;

const app = express();
const port = process.env.PORT || baseUrl;

//middleware
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


async function run() {
    try {

       
        function addMinutesToTime(startTime, minutesToAdd) {
         
            const [hours, minutes] = startTime.split(':').map(Number);
    
            let hour = parseInt(hours);
            let minute = parseInt(minutes);
            let totalMin = hour * 60 + minute + parseInt(minutesToAdd);

            hour = Math.floor(totalMin / 60);
            minute = totalMin % 60;
            
            if(minute<10){
            minute='0'+minute;
            }
            if(hour==24)
            {
            hour='00';
            }else if(hour<10){
            hour='0'+hour;
            }
            return hour+':'+minute;;
        }
        const config = {
          
            // Papersize Options: A4 size
            "format": "A4",
            "orientation": "portrait",
          
            // // Page options
            // "border": {
            //   "top": "2cm",
            //   "right": "1.5cm",
            //   "bottom": "2cm",
            //   "left": "1.5cm"
            // },
          
            // Header options
            "header": {
              "height": "77px",
              "contents": ''
            },
          
            // Footer options
            "footer": {
              "height": "20px",
              "contents": {
                default: '',
              }
            },

          };


        // ************************************* PDF Generate ******************
        app.post('/create-pdf', (req, res) => {
            let data = req.body;
            // format date 
            const parts = data.QRDate.split('-');
            data.QRDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
            let QRList = [];
            let countOfIteration = 1;
            for(let i = data.QRStart; i <= data.QREnd; i++)
            {
                let newQRObj = {
                    QRDate: data.QRDate,
                    QRTextOnly: data.QRText,
                    QRText: data.QRText + i,
                    QRTime:  data.QRTime,
                }
                1
               
                if(countOfIteration % 10 == 0)
                {
                    data.QRTime  = addMinutesToTime(data.QRTime, data.QRTimeInc);
                }
                countOfIteration++

                const outputPath = `./static/${newQRObj.QRText}.png`
                const imageStream = qr.image(newQRObj.QRText, { type: 'png' })
                const fileStream = fs.createWriteStream(outputPath)
                imageStream.pipe(fileStream);

                fileStream.on('finish', () => {
                    console.log(`QR code saved to: ${outputPath}`);
                 });

                QRList.push({...newQRObj}); 
            }
            pdf.create(pdfTemplate(QRList), config).toFile('result.pdf', (err) => {
                if (err) {
                    res.send(Promise.reject());
                }

                res.send(Promise.resolve());
            });
        });

        app.get('/fetch-pdf', (req, res) => {

            res.sendFile(`${__dirname}/result.pdf`)
        })

        // **************** Non Air Bill **********
        let NonAirBillList = [];
        app.post('/createNonAirBill', (req, res) => {
            let data = req.body;
            NonAirBillList.push(data);
            console.log(data);
            console.log(NonAirBillList.length);

            res.send(data);
           
        });
        app.get('/getNonAirBills', (req, res) => {

            res.send(NonAirBillList);
        })



    }

    finally {

    }

}




run().catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello from node mongo and crud');
});

app.listen(port, () => {
    console.log(`Simple node server running on port ${port}`);
})