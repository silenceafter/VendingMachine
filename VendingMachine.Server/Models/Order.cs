using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace VendingMachine.Server.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public DateTime OrderDate { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }

        [Range(0.0, double.MaxValue, ErrorMessage = "Значение должно быть больше либо равно 0.0")]
        public decimal TotalAmount { get; set; }
    }
}
