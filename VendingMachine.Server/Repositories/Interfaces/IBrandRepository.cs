using VendingMachine.Server.DTOs;
using VendingMachine.Server.Models;

namespace VendingMachine.Server.Repositories.Interfaces
{
    public interface IBrandRepository
    {
        Task<IEnumerable<BrandDTO>> GetAllAsync();
        Task<Brand> GetByIdAsync(int id);
        Task<bool> AddAsync(string name);
        Task UpdateAsync(string brand);
        Task DeleteAsync(int id);
    }
}
