using VendingMachine.Server.DTOs;
using VendingMachine.Server.Models;

namespace VendingMachine.Server.Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDTO>> GetAllProductsAsync();
        Task<bool> AddProductAsync(ProductDTO product);
        Task<IEnumerable<Product>> GetProductsByBrandAsync(string brandName);
    }
}
