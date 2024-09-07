using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VendingMachine.Server.Models
{
    public class Brand
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "Название обязательно для заполнения")]
        [StringLength(50, ErrorMessage = "Укажите не более 50 символов")]
        public string Name { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}
