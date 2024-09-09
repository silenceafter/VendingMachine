using Microsoft.EntityFrameworkCore;
using VendingMachine.Server.Data;
using VendingMachine.Server.DTOs;
using VendingMachine.Server.Models;
using VendingMachine.Server.Repositories.Interfaces;

namespace VendingMachine.Server.Repositories
{
    public class BrandRepository : IBrandRepository
    {
        private readonly DataConnectionDbContext _context;

        public BrandRepository(DataConnectionDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<BrandDTO>> GetAllAsync()
        {
            var brands = await _context.Brands.ToListAsync();
            return brands.Select((brand, index) => new BrandDTO
            {
                Id = index + 1,
                Name = brand.Name
            });
        }

        public async Task<Brand> GetByIdAsync(int id)
        {
            return await _context.Set<Brand>().FindAsync(id);
        }

        public async Task<bool> AddAsync(string name)
        {
            try
            {
                await _context.Brands.AddAsync(new Brand() { Name = name });
                int result = await _context.SaveChangesAsync();
                return result == 1;
            }
            catch (Exception ex)
            {
                return false;
            }            
        }

        public async Task UpdateAsync(string name)
        {
            //_context.Set<Brand>().Update(brand);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var brand = await GetByIdAsync(id);
            if (brand != null)
            {
                _context.Set<Brand>().Remove(brand);
                await _context.SaveChangesAsync();
            }
        }
    }
}
