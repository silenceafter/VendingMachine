using Microsoft.AspNetCore.Mvc;
using VendingMachine.Server.DTOs;
using VendingMachine.Server.Services;
using VendingMachine.Server.Services.Interfaces;

namespace VendingMachine.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("get-products")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(products);
        }

        [HttpPost("add-products")]
        public async Task<IActionResult> AddProduct([FromBody] ProductDTO product)
        {
            var result = await _productService.AddProductAsync(product);
            return result
                ? StatusCode(201, "Запись добавлена успешно")
                : StatusCode(500, "Ошибка при добавлении записи");
        }

        [HttpGet("get-products-by-brand")]
        public async Task<IActionResult> GetProductsByBrand(string BrandName)
        {
            var result = await _productService.GetProductsByBrandAsync(BrandName);
            return Ok(result);
        }
    }
}
