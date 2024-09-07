using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace VendingMachine.Server.Models
{
    public class OrderItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public int ProductId { get; set; }

        [Required]
        [StringLength(255, ErrorMessage = "Укажите не более 255 символов")]
        public string ProductName { get; set; }

        [Required]
        [Range(0.0, double.MaxValue, ErrorMessage = "Значение должно быть больше либо равно 0.0")]
        public decimal PriceAtOrder { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Значение должно быть больше 0")]
        public int Quantity { get; set; }
        public int OrderId { get; set; }

        [JsonIgnore]  
        public Order Order { get; set; }
    }
}
