using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Server.Data;
using VendingMachine.Server.DTOs;
using VendingMachine.Server.Models;
using VendingMachine.Server.Repositories.Interfaces;

namespace VendingMachine.Server.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataConnectionDbContext _context;

        public ProductRepository(DataConnectionDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProductDTO>> GetAllAsync()
        {
            var products = await _context.Products.ToListAsync();
            return products.Select((product, index) => new ProductDTO
            {
                Id = index + 1,
                Name = product.Name,
                Price = product.Price,
                BrandName = ""
            });
        }

        public async Task<bool> AddAsync(ProductDTO product) 
        {
            try
            {
                //найти бренд
                var brandId = await _context.Brands
                    .Where(b => b.Name == product.BrandName)
                    .Select(b => b.Id)
                    .FirstOrDefaultAsync();

                await _context.Products.AddAsync(new Product()
                    { 
                        Name = product.Name,
                        Price = product.Price,
                        BrandId = brandId
                    }
                );
                int result = await _context.SaveChangesAsync();
                return result == 1;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
