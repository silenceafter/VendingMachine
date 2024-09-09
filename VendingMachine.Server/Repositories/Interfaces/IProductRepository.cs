using VendingMachine.Server.DTOs;
using VendingMachine.Server.Models;

namespace VendingMachine.Server.Repositories.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<ProductDTO>> GetAllAsync();
        //Task<Product> GetByIdAsync(int id);
        Task<bool> AddAsync(ProductDTO product);
        /*Task UpdateAsync(string product);
        Task DeleteAsync(int id);*/
    }
}
