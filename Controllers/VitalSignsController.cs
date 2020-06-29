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
public class VitalSignsController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public VitalSignsController(SoftwareContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<VitalSigns>> GetVitalSigns(int id)
        {
            var vitalSigns = await _context.VitalSigns.FindAsync(id);
            if (vitalSigns == null)
            {
                return NotFound();
            }
                return vitalSigns;
        }
           [HttpGet("paciente={id}")]
        public async Task<ActionResult<VitalSigns>> GetVitalSignsByPaciente(string id)
        {
            var vitalSigns = await _context.VitalSigns.FirstOrDefaultAsync(t=>t.PacienteId==id);
            if (vitalSigns == null)
            {
                return NotFound();
            }
                return vitalSigns;
        }
        [HttpPost]
        public async Task<ActionResult<VitalSigns>> PostVitalSigns(VitalSigns item)
        {
            _context.VitalSigns.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetVitalSigns), new { id = item.IdVitalSigns }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutVitalSigns(int id, VitalSigns item)
        {
            if (id != item.IdVitalSigns)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVitalSigns(int id)
        {
            var vitalSigns = await _context.VitalSigns.FindAsync(id);
            if (vitalSigns == null)
            {
                return NotFound();
            }

            _context.VitalSigns.Remove(vitalSigns);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
