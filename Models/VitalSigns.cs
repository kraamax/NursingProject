using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class VitalSigns
    {
        [Key]
        public int IdVitalSigns { get; set; }
        public Paciente Paciente { get; set; }
        public string PacienteId { get; set; }
        public double BloodPressure { get; set; }
        public int BPS { get; set; }
        public int BPD{ get; set; }
        public int Pulse { get; set; }
        public double Temperature { get; set; }
        public string TypeGlycemia { get; set; }
        public int Glycemia { get; set; }
        public int Breath { get; set; }
    }
}