using System;
using System.Collections.Generic;
using System.Text;

namespace ComoSecondBusiness.Helper
{
    public static class ConvertStringByteHelper
    {
        public static Byte[] Base64ToByte(string base64)
        {
            return System.Convert.FromBase64String(base64);
        }

        public static string ByteToBase64(byte[] byteArray)
        {
            return System.Convert.ToBase64String(byteArray);
        }
    }
}
