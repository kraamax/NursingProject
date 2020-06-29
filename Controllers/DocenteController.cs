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
    public class DocenteController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public DocenteController(SoftwareContext context)
        {
            _context = context;
            if (_context.Docentes.Count() == 0)
            {
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Docente>> GetDocente(string id)
        {
            var docente = await _context.Docentes.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }
            return docente;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Docente>>> GetDocentes(int id)
        {
            return await _context.Docentes.ToListAsync();
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Docente>> PostDocente(Docente item)
        {
            _context.Docentes.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDocente), new { id = item.IdDocente }, item);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocente(string id, Docente item)
        {
            if (id != item.IdDocente)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocente(string id)
        {
            var docente = await _context.Docentes.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }

            _context.Docentes.Remove(docente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
