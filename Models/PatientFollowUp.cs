using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class PatientFollowUp
    {
        [Key]
        public int IdFollowUp { get; set; }
        public string Findings { get; set; }
        public string NursingDiagnosis { get; set; }   
        public string NOC { get; set; } 
        public string NIC { get; set; }
        public string Date { get; set; }   
        public string IdPatient { get; set; }
    }
}