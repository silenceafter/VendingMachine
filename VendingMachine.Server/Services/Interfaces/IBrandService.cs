using VendingMachine.Server.DTOs;
using VendingMachine.Server.Models;

namespace VendingMachine.Server.Services.Interfaces
{
    public interface IBrandService
    {
        Task<IEnumerable<BrandDTO>> GetAllBrandsAsync();
        Task<Brand> GetBrandByIdAsync(int id);
        Task<bool> AddBrandAsync(string name);
        Task UpdateBrandAsync(string name);
        Task DeleteBrandAsync(int id);
    }
}
