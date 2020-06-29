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
public class PersonalBackgroundController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public PersonalBackgroundController(SoftwareContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<PersonalBackground>> GetPersonalBackground(int id)
        {
            var personalBackground = await _context.PersonalBackgrounds.FindAsync(id);
            if (personalBackground == null)
            {
                return NotFound();
            }
                return personalBackground;
        }
           [HttpGet("paciente={id}")]
        public async Task<ActionResult<PersonalBackground>> GetPesonalBackgroundByPaciente(string id)
        {
            var personalBackground = await _context.PersonalBackgrounds.FirstOrDefaultAsync(t=>t.PacienteId==id);
            if (personalBackground == null)
            {
                return NotFound();
            }
                return personalBackground;
        }
        [HttpPost]
        public async Task<ActionResult<PersonalBackground>> PostPersonalBackground(PersonalBackground item)
        {
            _context.PersonalBackgrounds.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPersonalBackground), new { id = item.IdPersonalBackground }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonalBackground(int id, PersonalBackground item)
        {
            if (id != item.IdPersonalBackground)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonalBackground(int id)
        {
            var personalBackground = await _context.PersonalBackgrounds.FindAsync(id);
            if (personalBackground == null)
            {
                return NotFound();
            }

            _context.PersonalBackgrounds.Remove(personalBackground);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
