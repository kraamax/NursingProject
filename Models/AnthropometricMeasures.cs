using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class AnthropometricMeasures
    {
        [Key]
        public int IdAnthropometricMeasures { get; set; }
        public Paciente Paciente { get; set; }
        public string PacienteId { get; set; }
        public double Weight { get; set; }
        public double CephalicPerimeter { get; set; }
        public double ThoracicPerimeter { get; set; }
        public double AbdominalPerimeter { get; set; }
        public double Size { get; set; }
        public double IMC { get; set; }
        public string Interpretation { get; set; }
    }
}