using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class PersonalBackground
    {
        [Key]
        public int IdPersonalBackground { get; set; }
        public string PacienteId { get; set; }
        public Paciente Paciente { get; set; }
        public string Surgical { get; set; }
        public string Traumatic { get; set; }
        public string Allergic { get; set; }
        public string Phatological { get; set; }
        public string Hospitalization { get; set; }
    }
}