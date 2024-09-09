using System.Xml.Linq;
using VendingMachine.Server.DTOs;
using VendingMachine.Server.Models;
using VendingMachine.Server.Repositories;
using VendingMachine.Server.Repositories.Interfaces;
using VendingMachine.Server.Services.Interfaces;

namespace VendingMachine.Server.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<ProductDTO>> GetAllProductsAsync()
        {
            return await _productRepository.GetAllAsync();
        }

        public async Task<bool> AddProductAsync(ProductDTO product)
        {
            return await _productRepository.AddAsync(product);
        }
    }
}
