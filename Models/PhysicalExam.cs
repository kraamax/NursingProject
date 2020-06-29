using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class PhysicalExam
    {
        [Key]
        public int IdPhysicalExam { get; set; }
        public string PacienteId { get; set; }
        public Paciente Paciente { get; set; }
        public string Description { get; set; }
    }
}