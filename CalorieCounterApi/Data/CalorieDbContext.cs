using Microsoft.EntityFrameworkCore;
using CalorieCounterApi.Models;

namespace CalorieCounterApi.Data
{
    public class CalorieDbContext : DbContext
    {
        public CalorieDbContext(DbContextOptions<CalorieDbContext> options) : base(options) { }

        public DbSet<CalorieEntry> CalorieEntries { get; set; }
    }
}
