
namespace API.Error
{
    public class ApiException
    {
        public ApiException(int statusCode, string message, string details)
        {
           StatusCode = statusCode;
           ErrorMessage = message;
           Details = details;
        }
        public int StatusCode { get; set; } 
        public string ErrorMessage { get; set;}
        public string Details { get; set; }
    }
}