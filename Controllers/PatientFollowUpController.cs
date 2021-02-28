using ProyectoEnfermeria.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;

namespace ProyectoEnfermeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientFollowUpController:ControllerBase
    {
        private readonly SoftwareContext _context;
        public PatientFollowUpController(SoftwareContext context)
        {
            _context=context;
        }
        [HttpPost]
        public async Task<ActionResult<PatientFollowUp>> PostPatientFollowUp(PatientFollowUp followUp){
           try{
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            _context.PatientsFollowUps.Add(followUp);
            await _context.SaveChangesAsync();
            return Ok(response);
           }
           catch(System.Exception e){
               return BadRequest(e);
           }
        }
        [HttpGet]
        [Route("{idPatient}")]
        public async Task<ActionResult<IEnumerable<PatientFollowUp>>> GetPatientsFollowUps(string idPatient){
            var response= await _context.PatientsFollowUps.Where(x=>x.IdPatient==idPatient).ToListAsync();
            return response;
        }
        [HttpGet]
        [Route("followUp={idFollowUp}")]
        public async Task<ActionResult<PatientFollowUp>> GetPatientFollowUp(int idFollowUp){
            var response= await _context.PatientsFollowUps.FirstOrDefaultAsync(x=>x.IdFollowUp==idFollowUp);
            return response;
        }
    }
}