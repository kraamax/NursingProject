using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class Paciente
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public string IdPaciente { get; set; }
        public string Names { get; set; }
        public string LastNames { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Sex { get; set; }
        public Account Account { get; set; }
        public string BornDate { get; set; }
        public string BornPlace { get; set; }
        public string Address { get; set; }
        public string MaritalStatus { get; set; }
        public string HealtInstitution { get; set; }
        public Boolean HaveDiabetes { get; set; }
        public Boolean HaveHipertension { get; set; }
        public string Diagnostic { get; set; }
        public string OtherDiagnostic { get; set; }
        public string ScholarShip { get; set; }
        public string Occupation { get; set; }  
        public string RegistrationDate { get; set; } 
    }
}