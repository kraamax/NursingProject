using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace ProyectoEnfermeria.Models
{
    public class Account
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public string User { get; set; }
        public string Password { get; set; }
        public string Rol { get; set; }
        public bool State { get; set; }
    }
}