using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoEnfermeria.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace ProyectoEnfermeria.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StudentRequestController: ControllerBase
    {
        private readonly SoftwareContext _context;
        private UserManager<ApplicationUser> _userManager;
        public StudentRequestController(SoftwareContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager=userManager;
        }
        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult<StudentRequest>> PostStudentRequest(StudentRequest item)
        {
            try
            {
                if (isThereAnotherRequest(item.ReceptorEmail, item.EmissorEmail) == false)
                {
                    if (await ProfessorExist(item.ReceptorEmail))
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.OK);
                        _context.StudentsRequests.Add(item);
                        await _context.SaveChangesAsync();
                        return Ok(response);
                    }
                    else {
                        var request = new
                        {
                            error = new
                            {
                                code = 400,
                                message = "El Email no corresponde a ningún profesor"
                            }
                        };
                        return Ok(request);
                    }
                }
                else {
                    var request = new
                    {
                        error = new
                        {
                            code = 400,
                            message = "Ya se envió la solicitud previamente"
                        }
                    };
                    return Ok(request);
                }
               
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }
        [HttpGet]
        [Route("{email}")]
        public async Task<ActionResult<IEnumerable<StudentRequest>>> GetStudentsRequestsByProfessor(string email)
        {
            var requests = await _context.StudentsRequests.Where(x=>x.ReceptorEmail.Equals(email) && x.isAccepted==false).ToListAsync();
            return requests;
        }
        [HttpGet]
        [Route("Accepted/{email}")]
        public async Task<ActionResult<IEnumerable<StudentRequest>>> GetStudentAcceptedByProfessor(string email)
        {
            var requests = await _context.StudentsRequests.Where(x=>x.ReceptorEmail.Equals(email) && x.isAccepted==true).ToListAsync();
            return requests;
        }
        [HttpPut]
        [Route("{idRequest}")]
        public async Task<IActionResult> AcceptStudentRequest(int idRequest)
        {
            var request = await _context.StudentsRequests.FindAsync(idRequest);
            if (request == null)
            {
                return NotFound();
            }
            request.isAccepted=true;
            _context.Entry(request).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete]
        [Route("{idRequest}")]
        public async Task<IActionResult> DeleteRequest(int idRequest)
        {
            var request = await _context.StudentsRequests.FindAsync(idRequest);
            if (request == null)
            {
                return NotFound();
            }

            _context.StudentsRequests.Remove(request);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        public bool isThereAnotherRequest(string ReceptorEmail, string emissorEmail) {
            var request =  _context.StudentsRequests.FirstOrDefault(x =>
            x.ReceptorEmail.Equals(ReceptorEmail) && x.EmissorEmail.Equals(emissorEmail));
            return  request != null;
        }
        public async Task<bool> ProfessorExist(string ReceptorEmail) {
            var user = await _userManager.FindByEmailAsync(ReceptorEmail);
            if(user!=null){
                return user.Rol.Equals("Professor");
            }
            return false;
        }
    }
}