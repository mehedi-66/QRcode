using Microsoft.AspNetCore.Mvc;
using QRcode.Models;
using QRCoder;
using System.Diagnostics;
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using static QRCoder.QRCodeGenerator;

namespace QRcode.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CreateQRcode(QRcodeModel qRcodeModel)
        {
          
            for(long i = qRcodeModel.QRNumberStart; i <= qRcodeModel.QRNumberEnd; i++)
            {
                float widthInPX = (qRcodeModel.QRWidth);  // 15.77 mm converted to 100 times (for precision)
                float heightInPX = (qRcodeModel.QRHeight);// 15.77 mm converted to 100 times (for precision)

                QRCodeGenerator qrGenerator = new QRCodeGenerator();
                QRCodeData qrCodeInfo = qrGenerator.CreateQrCode(qRcodeModel.QRText + i, QRCodeGenerator.ECCLevel.Q);
                QRCode qrCode = new QRCode(qrCodeInfo);

                // Calculate the DPI based on the desired width and height in millimeters
                float dpiX = qrCode.GetGraphic(1).HorizontalResolution;
                float dpiY = qrCode.GetGraphic(1).VerticalResolution;

                int widthInPixels = (int)(widthInPX * dpiX);
                int heightInPixels = (int)(heightInPX  * dpiY);

                Bitmap qrBitmap = new Bitmap(widthInPixels, heightInPixels);

                using (Graphics graphics = Graphics.FromImage(qrBitmap))
                {
                    graphics.Clear(Color.White);
 // Calculate the position to center the QR code
            int x = (widthInPixels - qrCode.GetGraphic(60).Width) / 2;
            int y = (heightInPixels - qrCode.GetGraphic(60).Height) / 2;

            Point position = new Point(x, y);

            using (Brush brush = new SolidBrush(Color.Black))
            {
                graphics.DrawImage(qrCode.GetGraphic(60), position);
            }
                }

                // 15.77 mm width and height
                // Save the QR code image to a local folder
                string folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", "qrcodes");
                string fileName = $"{i}.png";
                string filePath = Path.Combine(folderPath, fileName);

                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                qrBitmap.Save(filePath);

                // Convert the image path to a relative URI
                string relativePath = $"~/images/qrcodes/{fileName}";

                ViewBag.QrCodeUri = relativePath;
            }
            

            return RedirectToAction("Index");
        }
      
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

  
}
