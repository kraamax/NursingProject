using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoEnfermeria.Models;
using Microsoft.AspNetCore.Identity;

namespace ProyectoEnfermeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController: ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        public UserProfileController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        [HttpGet]
        [Authorize]
        public async Task<Object> GetUserProfile() {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            if (user.Rol.Equals("Student"))
            {
                return new

                {
                    user.Id,
                    user.FirstName,
                    user.SecondName,
                    user.FirstLastName,
                    user.SecondLastName,
                    user.Email,
                    user.BornDate,
                    user.Rol,
                    user.Sex,
                    user.LocationBiannual,
                    user.PhoneNumber,
                };
            }
            else {
                return new
                {
                    user.Id,
                    user.FirstName,
                    user.SecondName,
                    user.FirstLastName,
                    user.SecondLastName,
                    user.Email,
                    user.BornDate,
                    user.Rol,
                    user.Sex,
                    user.PhoneNumber,
                };
            };
        }


    }
}
