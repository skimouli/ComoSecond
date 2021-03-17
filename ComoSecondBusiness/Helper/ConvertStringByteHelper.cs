using System;
using System.Collections.Generic;
using System.Text;

namespace ComoSecondBusiness.Helper
{
    public static class ConvertStringByteHelper
    {
        public static byte[] Base64ToByte(string base64)
        {
            byte[] result = (base64 is string && base64 != null) ? System.Convert.FromBase64String(base64) : null;
            return result;
        }

        public static string ByteToBase64(byte[] byteArray)
        {
            string result = (byteArray is byte[] && byteArray != null) ? System.Convert.ToBase64String(byteArray) : null;
            return result;
        }
    }
}
