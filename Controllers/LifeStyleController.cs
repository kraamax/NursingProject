using System.ComponentModel;
using System.Runtime.CompilerServices;
using ProyectoEnfermeria.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ProyectoEnfermeria.Controllers
{

[Route("api/[controller]")]
[ApiController]
public class LifeStyleController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public LifeStyleController(SoftwareContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<LifeStyle>> GetLifeStyle(int id)
        {
            var lifeStyle = await _context.LifeStyles
            .Include(t=>t.NutricionalHabit)
            .Include(t=>t.NociveHabit)
            .Include(t=>t.HygienicHabit)
            .Include(t=>t.Excercise)
            .Include(t=>t.Leisure)
            .Include(t=>t.Rest)
            .FirstOrDefaultAsync(t=>t.IdLifeStyle==id);
            if (lifeStyle == null)
            {
                return NotFound();
            }
                return lifeStyle;
        }
           [HttpGet("paciente={id}")]
        public async Task<ActionResult<LifeStyle>> GetLifeStyleByPaciente(string id)
        {
            var lifeStyle = await _context.LifeStyles
            .Include(t=>t.NutricionalHabit)
            .Include(t=>t.NociveHabit)
            .Include(t=>t.HygienicHabit)
            .Include(t=>t.Excercise)
            .Include(t=>t.Leisure)
            .Include(t=>t.Rest)
            .FirstOrDefaultAsync(t=>t.PacienteId==id);
            if (lifeStyle == null)
            {
                return NotFound();
            }
                return lifeStyle;
        }
        [HttpPost]
        public async Task<ActionResult<LifeStyle>> PostLifeStyle(LifeStyle item)
        {
            _context.LifeStyles.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetLifeStyle), new { id = item.IdLifeStyle }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutLifeStyle(int id, LifeStyle item)
        {
            if (id != item.IdLifeStyle)
            {
                return BadRequest();
            }
            _context.Entry(item.NociveHabit).State = EntityState.Modified;
            _context.Entry(item.Rest).State = EntityState.Modified;
            _context.Entry(item.Leisure).State = EntityState.Modified;
            _context.Entry(item.Excercise).State = EntityState.Modified;
            _context.Entry(item.HygienicHabit).State = EntityState.Modified;
            _context.Entry(item.NutricionalHabit).State = EntityState.Modified;

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLifeStyle(int id)
        {
            var lifeStyle = await _context.LifeStyles.FindAsync(id);
            if (lifeStyle == null)
            {
                return NotFound();
            }

            _context.LifeStyles.Remove(lifeStyle);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
