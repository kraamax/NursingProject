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
public class PacienteController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public PacienteController(SoftwareContext context)
        {
            _context = context;
            if (_context.Pacientes.Count() == 0)
            {
                Account account = new Account();
                Paciente paciente = new Paciente();
                paciente.IdPaciente = "123";
                paciente.Names = "Juan Carlos";
                paciente.LastNames = "Molina Escobar";
                paciente.Email = "juacame042@gmail.com";
                paciente.Occupation = "docente";
                paciente.OtherDiagnostic = "";
                paciente.Diagnostic = "Diabetes-Hipertensi�n";
                account.User = paciente.IdPaciente;
                account.Password = paciente.IdPaciente;
                account.Rol = "Paciente";
                paciente.Account = account;
                paciente.MaritalStatus = "Casado";
                paciente.PhoneNumber = "544433423";
                paciente.ScholarShip = "Profesional";
                paciente.Sex = "Masculino";
                paciente.HealtInstitution = "FMP";
                paciente.BornDate = "2019/09/20";
                paciente.RegistrationDate="2019/12/20";
                paciente.HaveDiabetes=false;
                paciente.HaveHipertension=true;
                paciente.BornPlace = "San Diego";
                paciente.Address = "Calle 4a FZ";
                _context.Pacientes.Add(paciente);
                _context.SaveChangesAsync();
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Paciente>> GetPaciente(string id)
        {
            //prueba linq
            var paciente = await _context.Pacientes.FindAsync(id);
            if (paciente == null)
            {
                return NotFound();
            }
                return paciente;
        }
           [HttpGet]
        public async Task<ActionResult<IEnumerable<Paciente>>> GetPacientes()
        {
          return await _context.Pacientes.ToListAsync();
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Paciente>> PostPaciente(Paciente item)
        {
            Account account= new Account();
            account.User=item.IdPaciente;
            account.Password=item.IdPaciente;
            account.Rol="Paciente";
            _context.Pacientes.Add(item);
            await _context.SaveChangesAsync();
       
            return CreatedAtAction(nameof(GetPaciente), new { id = item.IdPaciente }, item);
        
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaciente(string id, Paciente item)
        {
            if (id != item.IdPaciente)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaciente(string id)
        {
            var paciente = await _context.Pacientes.FindAsync(id);
            if (paciente == null)
            {
                return NotFound();
            }

            _context.Pacientes.Remove(paciente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
