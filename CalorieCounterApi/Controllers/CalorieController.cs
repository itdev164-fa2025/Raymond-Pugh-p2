using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CalorieCounterApi.Data;
using CalorieCounterApi.Models;
using System.Linq;
using System.Threading.Tasks;

namespace CalorieCounterApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalorieController : ControllerBase
    {
        private readonly CalorieDbContext _context;

        public CalorieController(CalorieDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CalorieEntry>>> GetCalorieEntries()
        {
            return await _context.CalorieEntries.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<CalorieEntry>> PostCalorieEntry(CalorieEntry calorieEntry)
        {
            _context.CalorieEntries.Add(calorieEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCalorieEntries), new { id = calorieEntry.Id }, calorieEntry);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCalorieEntry(int id)
        {
            var calorieEntry = await _context.CalorieEntries.FindAsync(id);
            if (calorieEntry == null)
            {
                return NotFound();
            }

            _context.CalorieEntries.Remove(calorieEntry);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
