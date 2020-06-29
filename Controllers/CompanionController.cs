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
    public class CompanionController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public CompanionController(SoftwareContext context)
        {
            _context = context;
            if (_context.Companions.Count() == 0)
            {
                Companion companion = new Companion();
                companion.PacienteId = "123";
                companion.IdCompanion = "1324243";
                companion.Names = "Helem Yuliana";
                companion.LastNames = "Molina Escobar";
                companion.PhoneNumber = "3234353332";
                companion.Email = "heska@gmail.com";
                _context.Companions.Add(companion);
                _context.SaveChanges();
                
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Companion>> GetCompanion(string id)
        {
            //prueba linq
            var companion = await _context.Companions.FindAsync(id);
            if (companion == null)
            {
                return NotFound();
            }
            return companion;
        }
          [HttpGet("paciente={idPaciente}")]
        public async Task<ActionResult<Companion>> GetCompanionByPaciente(string idPaciente)
        {
            //prueba linq
            var companion = await _context.Companions.FirstOrDefaultAsync(t=>t.PacienteId==idPaciente);
            if (companion == null)
            {
                return NotFound();
            }
            return companion;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Companion>>> GetCompanions(int id)
        {
            return await _context.Companions.ToListAsync();
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Companion>> PostCompanion(Companion item)
        {
            _context.Companions.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCompanion), new { id = item.IdCompanion }, item);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanion(string id, Companion item)
        {
            if (id != item.IdCompanion)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanion(string id)
        {
            var companion = await _context.Companions.FindAsync(id);
            if (companion == null)
            {
                return NotFound();
            }

            _context.Companions.Remove(companion);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
