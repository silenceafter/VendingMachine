using VendingMachine.Server.DTOs;
using VendingMachine.Server.Models;
using VendingMachine.Server.Repositories.Interfaces;
using VendingMachine.Server.Services.Interfaces;

namespace VendingMachine.Server.Services
{
    public class BrandService : IBrandService
    {
        private readonly IBrandRepository _brandRepository;

        public BrandService(IBrandRepository brandRepository)
        {
            _brandRepository = brandRepository;
        }

        public async Task<IEnumerable<BrandDTO>> GetAllBrandsAsync()
        {
            return await _brandRepository.GetAllAsync();
        }

        public async Task<Brand> GetBrandByIdAsync(int id)
        {
            return await _brandRepository.GetByIdAsync(id);
        }

        public async Task<bool> AddBrandAsync(string name)
        {
            return await _brandRepository.AddAsync(name);
        }

        public async Task UpdateBrandAsync(string name)
        {
            await _brandRepository.UpdateAsync(name);
        }

        public async Task DeleteBrandAsync(int id)
        {
            await _brandRepository.DeleteAsync(id);
        }
    }
}
