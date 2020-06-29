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
    public class StudentController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public StudentController(SoftwareContext context)
        {
            _context = context;
            if (_context.Students.Count() == 0)
            {
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(string id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }
            return student;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents(int id)
        {
            return await _context.Students.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student item)
        {
            _context.Students.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetStudent), new { id = item.IdStudent }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(string id, Student item)
        {
            if (id != item.IdStudent)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(string id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
