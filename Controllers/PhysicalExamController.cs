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
public class PhysicalExamController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public PhysicalExamController(SoftwareContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<PhysicalExam>> GetPhysicalExam(int id)
        {
            var physicalExam = await _context.PhysicalExams.FindAsync(id);
            if (physicalExam == null)
            {
                return NotFound();
            }
                return physicalExam;
        }
           [HttpGet("paciente={id}")]
        public async Task<ActionResult<PhysicalExam>> GetPhysicalExamByPaciente(string id)
        {
            var physicalExam = await _context.PhysicalExams.FirstOrDefaultAsync(t=>t.PacienteId==id);
            if (physicalExam == null)
            {
                return NotFound();
            }
                return physicalExam;
        }
        [HttpPost]
        public async Task<ActionResult<PhysicalExam>> PostPhysicalExam(PhysicalExam item)
        {
            _context.PhysicalExams.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPhysicalExam), new { id = item.IdPhysicalExam }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPhisicalExam(int id, PhysicalExam item)
        {
            if (id != item.IdPhysicalExam)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhysicalExam(int id)
        {
            var physicalExam = await _context.PhysicalExams.FindAsync(id);
            if (physicalExam == null)
            {
                return NotFound();
            }

            _context.PhysicalExams.Remove(physicalExam);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
