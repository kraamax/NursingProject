using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoEnfermeria.Models
{
    public class ApplicationUser: IdentityUser
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string FirstLastName { get; set; }
        public string SecondLastName { get; set; }
        public string BornDate { get; set; }
        public string Sex { get; set; }
        public int LocationBiannual { get; set; }
        public string Rol { get; set; }
        public bool IsEnable { get; set; }
    }
}
