using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Server.Models;

namespace VendingMachine.Server.Data
{
    public class IdentityConnectionDbContext : IdentityDbContext<ApplicationUser>
    {
        public IdentityConnectionDbContext(DbContextOptions<IdentityConnectionDbContext> options)
            : base(options)
        {
        }
    }
}
