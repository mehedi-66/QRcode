namespace QRcode.Models
{
    public class QRcodeModel
    {
        public int QRId { get; set; }
        public long QRNumberStart { get; set; }
        public long QRNumberEnd { get; set; }
        public string? QRText { get; set; }
        public float QRWidth { get; set; }
        public float QRHeight { get; set; }
    }
}
