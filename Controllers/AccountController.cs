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
    public class AccountController : ControllerBase
    {
        private readonly SoftwareContext _context;
        public AccountController(SoftwareContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetAccount(string id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
            {
                return NotFound();
            }
            return account;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccounts(int id)
        {
            return await _context.Accounts.ToListAsync();
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Account>> PostAccount(Account item)
        {
            _context.Accounts.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAccount), new { id = item.User }, item);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccount(string id, Account item)
        {
            if (id != item.User)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(string id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null)
            {
                return NotFound();
            }

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
