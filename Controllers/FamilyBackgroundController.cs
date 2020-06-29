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
public class FamilyBackgroundController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public FamilyBackgroundController(SoftwareContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<FamilyBackground>> GetFamilyBackground(int id)
        {
            var familyBackground = await _context.FamilyBackgrounds.FindAsync(id);
            if (familyBackground == null)
            {
                return NotFound();
            }
                return familyBackground;
        }
           [HttpGet("paciente={id}")]
        public async Task<ActionResult<FamilyBackground>> GetFamilyBackgroundByPaciente(string id)
        {
            var familyBackground = await _context.FamilyBackgrounds.FirstOrDefaultAsync(t=>t.PacienteId==id);
            if (familyBackground == null)
            {
                return NotFound();
            }
                return familyBackground;
        }
        [HttpPost]
        public async Task<ActionResult<FamilyBackground>> PostFamilyBackground(FamilyBackground item)
        {
            _context.FamilyBackgrounds.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFamilyBackground), new { id = item.IdFamilyBackground }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutFamilyBackground(int id, FamilyBackground item)
        {
            if (id != item.IdFamilyBackground)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFamilyBackground(int id)
        {
            var familyBackground = await _context.FamilyBackgrounds.FindAsync(id);
            if (familyBackground == null)
            {
                return NotFound();
            }

            _context.FamilyBackgrounds.Remove(familyBackground);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
