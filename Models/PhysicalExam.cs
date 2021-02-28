using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class PhysicalExam
    {
        [Key]
        public int IdPhysicalExam { get; set; }
        public string PacienteId { get; set; }
        public Paciente Paciente { get; set; }
        public string Head_Face { get; set; }     
        public string Eyes { get; set; } 
        public string Ears { get; set; }
        public string Thorax { get; set; }
        public string Nose { get; set; }
        public string Oropharynx { get; set; } 
        public string Neck { get; set; }
        public string Abdomen { get; set; }
        public string GenitoUrinary { get; set; }
        public string Extremities { get; set; }
    }
}