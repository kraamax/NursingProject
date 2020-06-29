using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ProyectoEnfermeria.Models
{
    public class GinecoBackground
    {
        [Key]
        public int IdGinecoBackground { get; set; }
        public string PacienteId { get; set; }
        public Paciente Paciente { get; set; }
        public string Menarche { get; set; }
        public string FUM { get; set; }
        public string G { get; set; }
        public string P { get; set; }
        public string C { get; set; }
        public string A { get; set; }
        public string Ciclos { get; set; }
        public string IVS { get; set; }
        public string Menopausia { get; set; }
        public bool PerformedCytology { get; set; }
        public string DateLastCytology { get; set; }
        public string Results { get; set; }
    }
}