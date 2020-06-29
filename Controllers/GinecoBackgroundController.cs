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
public class GinecoBackgroundController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public GinecoBackgroundController(SoftwareContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<GinecoBackground>> GetGinecoBackground(int id)
        {
            var ginecoBackground = await _context.GinecoBackgrounds.FindAsync(id);
            if (ginecoBackground == null)
            {
                return NotFound();
            }
                return ginecoBackground;
        }
           [HttpGet("paciente={id}")]
        public async Task<ActionResult<GinecoBackground>> GetGinecoBackgroundByPaciente(string id)
        {
            var ginecoBackground = await _context.GinecoBackgrounds.FirstOrDefaultAsync(t=>t.PacienteId==id);
            if (ginecoBackground == null)
            {
                return NotFound();
            }
                return ginecoBackground;
        }
        [HttpPost]
        public async Task<ActionResult<GinecoBackground>> PostGinecoBackground(GinecoBackground item)
        {
            _context.GinecoBackgrounds.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetGinecoBackground), new { id = item.IdGinecoBackground }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutGinecoBackground(int id, GinecoBackground item)
        {
            if (id != item.IdGinecoBackground)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGinecoBackground(int id)
        {
            var ginecoBackground = await _context.GinecoBackgrounds.FindAsync(id);
            if (ginecoBackground == null)
            {
                return NotFound();
            }

            _context.GinecoBackgrounds.Remove(ginecoBackground);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
