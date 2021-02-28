﻿using System.Data;
using System.Buffers.Text;
using System.Diagnostics;
using System.Reflection.Metadata;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using ProyectoEnfermeria.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;

namespace ProyectoEnfermeria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _singInManager;
        private readonly ApplicationSettings _applicationSettings;

        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> applicationSettings)
        {
            _userManager = userManager;
            _singInManager = signInManager;
            _applicationSettings = applicationSettings.Value;
        }
        [HttpPost]
        [Route("Register")]
        //POST : /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel model)
        {
            var applicationUser = new ApplicationUser()
            {
                Id = model.Id,
                UserName = model.Email,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                BornDate = model.BornDate,
                FirstName = model.FirstName,
                FirstLastName = model.FirstLastName,
                SecondName = model.SecondName,
                SecondLastName = model.SecondLastName,
                IsEnable = false,
                Rol = model.Rol,
                Sex = model.Sex,
                LocationBiannual=model.LocationBiannual
            };

            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.Password);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
        [HttpPost]
        [Route("Admit")]
        public async Task<Object> PutApplicationUser(ApplicationUserModel model)
        {
            var user = await _userManager.FindByIdAsync(model.Id);
            user.PhoneNumber = model.PhoneNumber.ToString();
            user.FirstName = model.FirstName;
            user.FirstLastName = model.FirstLastName;
            user.SecondName = model.SecondName;
            user.SecondLastName = model.SecondLastName;
            user.IsEnable = model.IsEnable;
            user.Sex = model.Sex;
            try
            {
                var result = await _userManager.UpdateAsync(user);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        [HttpPut]
        [Route("ChangePassword")]
        public async Task<Object> ChangePasswordApplicationUser(ApplicationUserModel model)
        {
            var user = await _userManager.FindByIdAsync(model.Id);
            try
            {
                await _userManager.RemovePasswordAsync(user);
                 var result=await _userManager.AddPasswordAsync(user, model.Password); 
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetApplicationUsers()
        {
            return await _userManager.Users.ToListAsync() ;
        }
        [HttpPost]
        [Route("Login")]
        //POST : /api/ApplicationUser/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_applicationSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature),
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token,
                                user.Rol,
                                user.IsEnable
                         });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }
    }
}
