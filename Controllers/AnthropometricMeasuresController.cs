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
public class AnthropometricMeasuresController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public AnthropometricMeasuresController(SoftwareContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<AnthropometricMeasures>> GetAnthropometricMeasures(int id)
        {
            var anthropometricMeasures = await _context.AnthropometricsMeasures.FindAsync(id);
            if (anthropometricMeasures == null)
            {
                return NotFound();
            }
                return anthropometricMeasures;
        }
           [HttpGet("paciente={id}")]
        public async Task<ActionResult<AnthropometricMeasures>> GetAnthropometricMeasuresByPaciente(string id)
        {
            var anthropometricMeasures = await _context.AnthropometricsMeasures.FirstOrDefaultAsync(t=>t.PacienteId==id);
            if (anthropometricMeasures == null)
            {
                return NotFound();
            }
                return anthropometricMeasures;
        }
        [HttpPost]
        public async Task<ActionResult<AnthropometricMeasures>> PostAnthropometricMeasures(AnthropometricMeasures item)
        {
            _context.AnthropometricsMeasures.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAnthropometricMeasures), new { id = item.IdAnthropometricMeasures }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAnthropometricMeasures(int id, AnthropometricMeasures item)
        {
            if (id != item.IdAnthropometricMeasures)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnthropometricMeasures(int id)
        {
            var anthropometricMeasures = await _context.AnthropometricsMeasures.FindAsync(id);
            if (anthropometricMeasures == null)
            {
                return NotFound();
            }

            _context.AnthropometricsMeasures.Remove(anthropometricMeasures);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
