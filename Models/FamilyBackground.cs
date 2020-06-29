using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class FamilyBackground
    {
        [Key]
        public int IdFamilyBackground { get; set; }
        public string PacienteId { get; set; }
        public Paciente Paciente { get; set; }
        public string Description { get; set; }
    }
}