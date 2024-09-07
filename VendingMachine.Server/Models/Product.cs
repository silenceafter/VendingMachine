using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace VendingMachine.Server.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(255, ErrorMessage = "Укажите не более 255 символов")]
        public string Name { get; set; }

        [Required]
        [Range(0.0, double.MaxValue, ErrorMessage = "Значение должно быть больше либо равно 0.0")]
        public decimal Price { get; set; }
        public int BrandId { get; set; }

        [JsonIgnore]
        public Brand Brand { get; set; }
    }
}
