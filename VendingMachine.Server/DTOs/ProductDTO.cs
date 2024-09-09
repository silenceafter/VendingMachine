using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using VendingMachine.Server.Models;

namespace VendingMachine.Server.DTOs
{
    public class ProductDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string BrandName { get; set; }
    }
}
