using Microsoft.EntityFrameworkCore;

namespace VendingMachine.Server.Data
{
    public class DataConnectionDbContext : DbContext
    {
        public DataConnectionDbContext(DbContextOptions<DataConnectionDbContext> options)
        : base(options)
        {
        }
    }
}
