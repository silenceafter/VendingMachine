using Microsoft.AspNetCore.Mvc;
using VendingMachine.Server.Models;
using VendingMachine.Server.Services.Interfaces;

namespace VendingMachine.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BrandsController : Controller
    {
        private readonly IBrandService _brandService;

        public BrandsController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        [HttpGet("get-brands")]
        public async Task<IActionResult> GetBrands()
        {
            var brands = await _brandService.GetAllBrandsAsync();
            return Ok(brands);
        }

        [HttpGet("get-brands/{id}")]
        public async Task<IActionResult> GetBrand(int id)
        {
            var brand = await _brandService.GetBrandByIdAsync(id);
            if (brand == null) return NotFound();
            return Ok(brand);
        }

        [HttpPost("add-brands")]
        public async Task<IActionResult> AddBrand(string name)
        {
            var result = await _brandService.AddBrandAsync(name);
            return result
                ? StatusCode(201, "Запись добавлена успешно")
                : StatusCode(500, "Ошибка при добавлении записи");
        }

        [HttpPut("update-brand")]
        public async Task<IActionResult> UpdateBrand(string name)
        {
            /*if (id != brand.Id) return BadRequest();
            await _brandService.UpdateBrandAsync(brand);*/
            return NoContent();
        }

        [HttpDelete("delete-brand")]
        public async Task<IActionResult> DeleteBrand(int id)
        {
            await _brandService.DeleteBrandAsync(id);
            return NoContent();
        }
    }
}
