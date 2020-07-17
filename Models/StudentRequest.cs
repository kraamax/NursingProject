using System.ComponentModel.DataAnnotations;
namespace ProyectoEnfermeria.Models
{
    public class StudentRequest
    {
        [Key]
        public int IdRequest { get; set; }
        public string ReceptorEmail { get; set; }
        public string EmissorNames { get; set; }
        public string EmissorLastNames { get; set; }
        public string EmissorId { get; set; }
        public string EmissorEmail { get; set; }
        public string EmissorPhoneNumber { get; set; }
        public int EmissorLocationBiannual { get; set; }
        public bool isAccepted { get; set; }
        public string Date { get; set; }
    }
}