using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class Companion
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public string IdCompanion { get; set; }
        public string Names { get; set; }
        public string LastNames { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string PacienteId { get; set; }
        public Paciente Paciente { get; set; }
    }
}